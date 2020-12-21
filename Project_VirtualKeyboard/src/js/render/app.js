import { keys, symbolKeys } from '../seed/keySeed.js'

const app = {
    isSymbolKeyBoard: false,
    output: [],
    keyState: [],
    init: () => {
        window.onresize = () => app.renderKeyboard()
        app.renderKeyboard()
        const textarea = document.getElementById('input')
        // textarea.focus()
        document.addEventListener('click', function (event) {
            // textarea.focus()
            if (event.target.classList.contains('key') || event.target.classList.contains('main') || event.target.classList.contains('secondary')) {
                let button = event.target
                if (button.tagName !== "BUTTON")
                    button = button.parentNode
                let value = button.getAttribute('data-value')
                switch (value) {
                    case 'backspace': app.output.pop();

                        button.classList.add('active')
                        setTimeout(() => {
                            button.classList.remove('active')
                        }, 100)
                        break;
                    case 'symbols': app.isSymbolKeyBoard = !app.isSymbolKeyBoard;
                        app.renderKeyboard()
                        break;
                    case 'caps':
                        let indexOfCaps = app.keyState.indexOf('caps')
                        indexOfCaps === -1 ? app.keyState.push('caps') : app.keyState.splice(indexOfCaps, 1);
                        app.renderKeyboard()
                        break;
                    case 'shift':
                        let indexOfShift = app.keyState.indexOf('shift')
                        indexOfShift === -1 ? app.keyState.push('shift') : app.keyState.splice(indexOfShift, 1);
                        app.renderKeyboard()
                        break;

                    default:
                        button.classList.add('active')
                        setTimeout(() => {
                            button.classList.remove('active')
                        }, 100)
                        app.output.push(value)
                }

                textarea.value = app.output.join('')
                textarea.scrollTop = textarea.scrollHeight;
            }
        })
    },


    renderKeyboard: () => {
        const isMobileScreen = window.innerWidth <= 720
        if (!isMobileScreen)
            app.isSymbolKeyBoard = false
        let keyboard = ''
        const isCaps = app.keyState.includes('caps')
        const isShift = app.keyState.includes('shift')
        let keyboard_keys = app.isSymbolKeyBoard ? symbolKeys : keys

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