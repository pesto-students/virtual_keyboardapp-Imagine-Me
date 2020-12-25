import { keys, symbolKeys } from '../seed/keySeed.js'

const app = {
    isSymbolKeyBoard: false,
    isMobileScreen: window.innerWidth <= 720,
    output: '',
    keyState: [],
    textarea: document.getElementById('input'),
    init: function () {
        window.onresize = () => {
            if (window.innerWidth <= 720 && !this.isMobileScreen) {
                this.isMobileScreen = true
                this.renderKeyboard()
            } else if (window.innerWidth > 720 && this.isMobileScreen) {
                this.isMobileScreen = false
                this.isSymbolKeyBoard = false
                this.renderKeyboard()
            }
        }
        this.renderKeyboard()
        document.addEventListener('click', (event) => {
            this.textarea.focus()
            if (event.target.classList.contains('key') || event.target.classList.contains('main') || event.target.classList.contains('secondary')) {
                let button = event.target
                if (button.tagName !== "BUTTON")
                    button = button.parentNode
                let value = button.getAttribute('data-value')
                switch (value) {
                    case 'backspace':
                        this.output = this.output.slice(0, -1);
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
                        let indexOfShiftTemp = this.keyState.indexOf('shift')
                        if (indexOfShiftTemp !== -1) {
                            this.keyState.splice(indexOfShiftTemp, 1);
                            this.renderKeyboard()
                        }
                        this.output += value
                }
                this.textarea.value = this.output
                this.textarea.scrollTop = this.textarea.scrollHeight;
            }
        })

        document.querySelector('button.btn').addEventListener('click', () => {
            var virtualKeyboard = document.getElementById('virtual-keyboard')
            virtualKeyboard.classList.toggle('animUp')
        })

        this.textarea.addEventListener('keypress', (event) => {
            event.preventDefault()
        })
    },





    renderKeyboard: function () {
        let keyboard = ''
        const isCaps = this.keyState.includes('caps')
        const isShift = this.keyState.includes('shift')
        let keyboard_keys = this.isSymbolKeyBoard ? symbolKeys : keys

        keyboard_keys.forEach(element => {
            const gridWidth = []
            let keyBoardLine = '';
            for (let key in element) {
                const { isShow, width, attr, shiftValue, value } = this.renderKey(element[key])
                if (isShow) {
                    gridWidth.push(width)
                    keyBoardLine += `<button class="key ${(element[key].charCode === 'caps' && isCaps) || (element[key].charCode === 'shift' && isShift) ? 'active' : ''}" ${attr} >
                            <span class="secondary ${shiftValue === '' || this.isMobileScreen ? 'd-none' : 'alt'} ${isShift ? 'active' : ''}">${shiftValue}</span>
                            <span class="main ${isShift && shiftValue !== '' ? '' : 'active'}">${value}</span>
                        </button>`
                }
            }
            keyboard += `<div style="grid-template-columns: ${gridWidth.join(" ")}" class="keys">${keyBoardLine}</div>`
        });
        document.getElementById('virtual-keyboard').innerHTML = keyboard

    },


    
    renderKey: function (key) {
        const result = {
            isShow: true,
            attr: '',
            shiftValue: key.shift ?? '',
            value: key.value
        }
        if (this.isMobileScreen && key.isMobile === false || !this.isMobileScreen && key.isMobile === true) {
            result.isShow = false
            return result
        }
        let keyValue = key.charCode
        if (keyValue === undefined) {
            if (this.keyState.includes('shift')) {
                keyValue = key.shift ?? key.caps ?? key.value
                result.value = key.caps ?? key.value
            } else if (this.keyState.includes('caps')) {
                keyValue = key.caps ?? key.value
                result.value = keyValue
            } else {
                keyValue = key.value
            }
        }
        if (this.isMobileScreen) {
            result.value = key.alternate ?? result.value
            result.width = key.mobileWidth ?? 'auto'
        } else {
            result.width = key.width ?? 'auto'
        }
        if (keyValue === "\"")
            result.attr = `data-value='${keyValue}'`
        else
            result.attr = `data-value="${keyValue}"`
        return result
    }
}

export default app;