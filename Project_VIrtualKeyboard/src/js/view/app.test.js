import app from './app'

describe('Some test', () => {
    test('return dont show button', () => {
        const mobileKey = {
            value: "Backspace",
            width: "auto",
            alternate: "&#x027F5;",
            charCode: 'backspace',
            isMobile: true
        }
        expect(app.renderKey(mobileKey)).toEqual(expect.objectContaining({ isShow: false }))

    });
    test('should return all details', () => {
        const key = {
            value: "=",
            width: "6.5%",
            shift: "+",
            isMobile: false
        }
        expect(app.renderKey(key)).toEqual(expect.objectContaining({ isShow: true, attr: 'data-value="="', shiftValue: "+", value: "=" }))
    })

    test('should return shift value when shift pressed', () => {
        app.keyState.push('shift')
        const key = {
            value: "=",
            width: "6.5%",
            shift: "+",
            isMobile: false
        }
        expect(app.renderKey(key)).toEqual(expect.objectContaining({ attr: 'data-value="+"' }))
        const key1 = {
            value: "u",
            width: "6.5%",
            mobileWidth: "10%",
            caps: "U"
        }
        expect(app.renderKey(key1)).toEqual(expect.objectContaining({ attr: 'data-value="U"', value: "U" }))
    })

    test('should return caps value when caps pressed', () => {
        app.keyState.pop()
        app.keyState.push('caps')
        const key = {
            value: "=",
            width: "6.5%",
            shift: "+",
            isMobile: false
        }
        expect(app.renderKey(key)).toEqual(expect.objectContaining({ attr: 'data-value="="' }))
        const key1 = {
            value: "u",
            width: "6.5%",
            mobileWidth: "10%",
            caps: "U"
        }
        expect(app.renderKey(key1)).toEqual(expect.objectContaining({ attr: 'data-value="U"', value: "U" }))
    })

    test('should return width: auto when nothing specified', () => {
        const key = {
            value: "Caps",
            alternate: "&#8657;",
            charCode: 'caps',
        }
        expect(app.renderKey(key)).toEqual(expect.objectContaining({ width: "auto" }))
    })

    test('should return false in mobile version', () => {
        app.isMobileScreen = true
        const key = {
            value: "\\",
            width: "6.5%",
            shift: "|",
            isMobile: false
        }
        expect(app.renderKey(key)).toEqual(expect.objectContaining({ isShow: false }))
    })

    test('should return mobile width', () => {
        app.isMobileScreen = true
        const key = {
            value: "6",
            width: "6.5%",
            mobileWidth: '10%',
        }
        expect(app.renderKey(key)).toEqual(expect.objectContaining({ width: "10%" }))
    })


})