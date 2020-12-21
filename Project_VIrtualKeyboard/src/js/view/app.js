import { keys, symbolKeys } from '../seed/keySeed.js'

const app = {
    isSymbolKeyBoard: false,
    output: [],
    keyState: [],
    textarea: document.getElementById('input'),
    init: function () {
        window.onresize = () => this.renderKeyboard()
        this.renderKeyboard()
        document.addEventListener('click', function (event) {
            this.textarea.focus()
            if (event.target.classList.contains('key') || event.target.classList.contains('main') || event.target.classList.contains('secondary')) {
                let button = event.target
                if (button.tagName !== "BUTTON")
                    button = button.parentNode
                let value = button.getAttribute('data-value')
                switch (value) {
                    case 'backspace': this.output.pop();
                        button.classList.add('active')
                        setTimeout(() => {
                            button.classList.remove('active')
                        }, 100)
                        break;

                    case 'symbols': this.isSymbolKeyBoard = !this.isSymbolKeyBoard;
                        this.renderKeyboard()
                        break;

                    case 'caps':
                        let indexOfCaps = this.keyState.indexOf('caps')
                        indexOfCaps === -1 ? this.keyState.push('caps') : this.keyState.splice(indexOfCaps, 1);
                        this.renderKeyboard()
                        break;

                    case 'shift':
                        let indexOfShift = this.keyState.indexOf('shift')
                        indexOfShift === -1 ? this.keyState.push('shift') : this.keyState.splice(indexOfShift, 1);
                        this.renderKeyboard()
                        break;

                    default:
                        button.classList.add('active')
                        setTimeout(() => {
                            button.classList.remove('active')
                        }, 100)
                        let indexOfShiftTemp = this.keyState.indexOf('shift')
                        if (indexOfShiftTemp !== -1) {
                            this.keyState.splice(indexOfShiftTemp, 1);
                            this.renderKeyboard()
                        }
                        this.output.push(value)
                }

                this.textarea.value = this.output.join('')
                this.textarea.scrollTop = this.textarea.scrollHeight;
            }
        }.bind(this))

        document.querySelector('button.btn').addEventListener('click', function () {
            var virtualKeyboard = document.getElementById('virtual-keyboard')
            if (virtualKeyboard.classList.contains('animUp'))
                virtualKeyboard.classList.remove('animUp')
            else {
                virtualKeyboard.classList.add('animUp')
                this.textarea.focus()
            }
        }.bind(this))

        this.textarea.addEventListener('keypress',function(event){
            event.preventDefault()
        })
        // this.textarea.addEventListener('focus',function(){

        // })
    },


    renderKeyboard: function () {
        const isMobileScreen = window.innerWidth <= 720
        if (!isMobileScreen)
            this.isSymbolKeyBoard = false
        let keyboard = ''
        const isCaps = this.keyState.includes('caps')
        const isShift = this.keyState.includes('shift')
        let keyboard_keys = this.isSymbolKeyBoard ? symbolKeys : keys

        keyboard_keys.forEach(element => {
            const gridWidth = []
            let keyBoardLine = '';
            for (let key in element) {
                let key_value = element[key].charCode ?? element[key].value;
                if (isShift && isCaps)
                    key_value = element[key].charCode ?? element[key].shift ?? element[key].caps
                else if (isShift)
                    key_value = element[key].charCode ?? element[key].shift ?? element[key].value
                else if (isCaps)
                    key_value = element[key].charCode ?? element[key].caps ?? element[key].value
                let main_key_text = isCaps || isShift ? element[key].caps ?? element[key].value : element[key].value
                if (isMobileScreen)
                    main_key_text = element[key].alternate ?? main_key_text
                let button_show_class = isMobileScreen ? (element[key].isMobile == false ? false : true) : (element[key].isMobile == true ? false : true)
                if (button_show_class) {
                    let width = element[key].width
                    if (isMobileScreen)
                        width = element[key].mobileWidth ?? 'auto'
                    gridWidth.push(width)
                    let data_value = `data-value="${key_value}"`
                    if (key_value === "\"")
                        data_value = `data-value='${key_value}'`
                    keyBoardLine += `<button class="key ${button_show_class} ${(element[key].charCode === 'caps' && isCaps) || (element[key].charCode === 'shift' && isShift) ? 'active' : ''}" ${data_value} >
                            <span class="secondary ${element[key].shift !== undefined && element[key].caps === undefined ? 'alt' : 'd-none'} ${isShift ? 'active' : ''} ${isMobileScreen ? 'd-none' : ''}">${element[key].shift ?? ''}</span>
                            <span class="main ${isShift ? ((element[key].caps !== undefined) || (element[key].caps === undefined && element[key].shift == undefined) ? 'active' : '') : 'active'}">${main_key_text}</span>
                        </button>`
                }
            }
            keyboard += `<div style="grid-template-columns: ${gridWidth.join(" ")}" class="keys">${keyBoardLine}</div>`
        });
        document.getElementById('virtual-keyboard').innerHTML = keyboard

    }
}

export default app;