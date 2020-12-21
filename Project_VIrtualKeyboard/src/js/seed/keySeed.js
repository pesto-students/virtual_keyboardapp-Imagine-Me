const keys = [
    {

        "0": {
            value: "`",
            width: "6.5%",
            shift: "~",
            isMobile: false
        },
        "1": {
            value: "1",
            width: "6.5%",
            shift: "!",
        },
        "2": {
            value: "2",
            mobileWidth: '10%',
            width: "6.5%",
            shift: "@",
        },
        "3": {
            value: "3",
            width: "6.5%",
            mobileWidth: '10%',
            shift: "#",
        },
        "4": {
            value: "4",
            width: "6.5%",
            mobileWidth: '10%',
            shift: "$",
        },
        "5": {
            value: "5",
            width: "6.5%",
            mobileWidth: '10%',
            shift: "%",
        },
        "6": {
            value: "6",
            width: "6.5%",
            mobileWidth: '10%',
            shift: "^",
        },
        "7": {
            value: "7",
            width: "6.5%",
            mobileWidth: '10%',
            shift: "&",
        },
        "8": {
            value: "8",
            width: "6.5%",
            mobileWidth: '10%',
            shift: "*",
        },
        "9": {
            value: "9",
            width: "6.5%",
            mobileWidth: '10%',
            shift: "(",
        },
        "10": {
            value: "0",
            width: "6.5%",
            shift: ")",
        },
        "11": {
            value: "-",
            width: "6.5%",
            shift: "_",
            isMobile: false
        },
        "12": {
            value: "=",
            width: "6.5%",
            shift: "+",
            isMobile: false
        },
        "13": {
            value: "Backspace",
            width: "auto",
            alternate: "&#8592;",
            charCode: 'backspace',
            isMobile: false
        },
    },
    {
        "0": {
            value: "Tab",
            width: "auto",
            alternate: "&#10153;",
            charCode: '\t',
            isMobile: false
        },
        "1": {
            value: "q",
            width: "6.5%",
            caps: "Q",
            shift: "Q"
        },
        "2": {
            value: "w",
            width: "6.5%",
            mobileWidth: "10%",
            caps: "W",
            shift: "W",
        },
        "3": {
            value: "e",
            width: "6.5%",
            mobileWidth: "10%",
            shift: "E",
            caps: "E",
        },
        "4": {
            value: "r",
            width: "6.5%",
            mobileWidth: "10%",
            shift: "R",
            caps: "R"
        },
        "5": {
            value: "t",
            width: "6.5%",
            mobileWidth: "10%",
            shift: "T",
            caps: "T"
        },
        "6": {
            value: "y",
            width: "6.5%",
            mobileWidth: "10%",
            caps: "Y",
            shift: "Y"
        },
        "7": {
            value: "u",
            width: "6.5%",
            mobileWidth: "10%",
            shift: "U",
            caps: "U"
        },
        "8": {
            value: "i",
            width: "6.5%",
            mobileWidth: "10%",
            caps: "I",
            shift: "I"
        },
        "9": {
            value: "o",
            width: "6.5%",
            mobileWidth: "10%",
            caps: "O",
            shift: "O"
        },
        "10": {
            value: "p",
            width: "6.5%",
            mobileWidth: "10%",
            caps: "P",
            shift: "P"
        },
        "11": {
            value: "[",
            width: "6.5%",
            shift: "{",
            isMobile: false
        },
        "12": {
            value: "]",
            width: "6.5%",
            shift: "}",
            isMobile: false
        },
        "13": {
            value: "\\",
            width: "6.5%",
            shift: "|",
            isMobile: false
        },
    },
    {
        "0": {
            value: "Caps",
            width: "auto",
            alternate: "&#8657;",
            alternateShow: false,
            charCode: 'caps',
            isMobile: false
        },
        "1": {
            value: "a",
            width: "6.5%",
            shift: "A",
            caps: "A"
        },
        "2": {
            value: "s",
            width: "6.5%",
            shift: "S",
            caps: "S"
        },
        "3": {
            value: "d",
            width: "6.5%",
            shift: "D",
            caps: "D"
        },
        "4": {
            value: "f",
            width: "6.5%",
            shift: "F",
            caps: "F"
        },
        "5": {
            value: "g",
            width: "6.5%",
            shift: "G",
            caps: "G"
        },
        "6": {
            value: "h",
            width: "6.5%",
            shift: "H",
            caps: "H"
        },
        "7": {
            value: "j",
            width: "6.5%",
            shift: "J",
            caps: "J"
        },
        "8": {
            value: "k",
            width: "6.5%",
            shift: "K",
            caps: "K"
        },
        "9": {
            value: "l",
            width: "6.5%",
            caps: "L",
            shift: "L"
        },
        "10": {
            value: ";",
            width: "6.5%",
            shift: ":",
            isMobile: false
        },
        "11": {
            value: "'",
            width: "6.5%",
            shift: "\"",
            isMobile: false
        },
        "12": {
            value: "Enter",
            width: "auto",
            charCode: '\n',
            alternate: '&#8629;',
            isMobile: false
        },
    },
    {
        "0": {
            value: "Caps",
            width: "auto",
            alternate: "&#8657;",
            alternateShow: false,
            charCode: 'caps',
            isMobile: true
        },
        "1": {
            value: "Shift",
            width: "auto",
            alternate: "->",
            alternateShow: false,
            charCode: 'shift',
            isMobile: false
        },
        "2": {
            value: "z",
            width: "6.5%",
            shift: "Z",
            caps: "Z"
        },
        "3": {
            value: "x",
            width: "6.5%",
            shift: "X",
            caps: "X"
        },
        "4": {
            value: "c",
            width: "6.5%",
            shift: "C",
            caps: "C"
        },
        "5": {
            value: "v",
            width: "6.5%",
            shift: "V",
            caps: "V"
        },
        "6": {
            value: "b",
            width: "6.5%",
            shift: "B",
            caps: "B"
        },
        "7": {
            value: "n",
            width: "6.5%",
            shift: "N",
            caps: "N"
        },
        "8": {
            value: "m",
            width: "6.5%",
            shift: "M",
            caps: "M"
        },
        "9": {
            value: ",",
            width: "6.5%",
            shift: "<",
            isMobile: false
        },
        "10": {
            value: ".",
            width: "6.5%",
            shift: ">",
            isMobile: false
        },
        "11": {
            value: "/",
            width: "6.5%",
            shift: "?",
            isMobile: false
        },
        "12": {
            value: "Shift",
            width: "auto",
            alternate: "->",
            alternateShow: false,
            charCode: 'shift',
            isMobile: false
        },

        "13": {
            value: "Backspace",
            width: "auto",
            alternate: "&#8592;",
            charCode: 'backspace',
            isMobile: true
        },
    },
    {
        "0": {
            value: "?/)",
            width: "6.5%",
            charCode: 'symbols',
            isMobile: true
        },
        "2": {
            value: ",",
            mobileWidth: "40px",
            width: "6.5%",
            isMobile: true
        },
        "3": {
            value: "Space",
            width: "40%",
            alternate: "<span style='position:absolute;bottom:0;left: 0; right:0'>&#x02514;&#x02500;&#x02500;&#x02500;&#x02500;&#x02518;</span>",
            mobileWidth: "40%",
            charCode: ' '
        },
        "4": {
            value: ".",
            width: "6.5%",
            mobileWidth: "40px",
            isMobile: true
        },
        "12": {
            value: "Enter",
            width: "auto",
            charCode: '\n',
            alternate: '&#8629;',
            isMobile: true
        },
    }
]


let symbolKeys = [
    {
        "1": {
            value: "1",
            width: "6.5%",
        },
        "2": {
            value: "2",
            mobileWidth: '10%',
            width: "6.5%",
        },
        "3": {
            value: "3",
            width: "6.5%",
            mobileWidth: '10%',
        },
        "4": {
            value: "4",
            width: "6.5%",
            mobileWidth: '10%',
        },
        "5": {
            value: "5",
            width: "6.5%",
            mobileWidth: '10%',
        },
        "6": {
            value: "6",
            width: "6.5%",
            mobileWidth: '10%',
        },
        "7": {
            value: "7",
            width: "6.5%",
            mobileWidth: '10%',
        },
        "8": {
            value: "8",
            width: "6.5%",
            mobileWidth: '10%',
        },
        "9": {
            value: "9",
            width: "6.5%",
            mobileWidth: '10%',
        },
        "10": {
            value: "0",
            width: "6.5%",
        }
    },
    {
        "0": {
            value: "!",
            width: "6.5%",
            mobileWidth: "auto"
        },
        "1": {
            value: "@",
            width: "6.5%",
            mobileWidth: "10%",
        },
        "2": {
            value: "#",
            mobileWidth: "10%",
        },
        "3": {
            value: "$",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "4": {
            value: "%",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "5": {
            value: "^",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "6": {
            value: "&",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "7": {
            value: "+",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "8": {
            value: "\\",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "9": {
            value: "~",
            width: "6.5%",
            mobileWidth: "auto"
        },
    },
    {
        "0": {
            value: "`",
            width: "6.5%",
            mobileWidth: "auto"
        },
        "1": {
            value: "{",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "2": {
            value: "}",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "3": {
            value: "[",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "4": {
            value: "]",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "5": {
            value: "|",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "6": {
            value: "=",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "7": {
            value: ":",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "8": {
            value: ";",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "9": {
            value: "-",
            width: "6.5%",
            mobileWidth: "auto"
        },

    },
    {
        "0": {
            value: "_",
            width: "6.5%",
            mobileWidth: "auto"
        },
        "1": {
            value: "'",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "2": {
            value: "\"",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "3": {
            value: "<",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "4": {
            value: ">",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "5": {
            value: "?",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "6": {
            value: "/",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "7": {
            value: "Backspace",
            width: "auto",
            alternate: "&#8592;",
            charCode: 'backspace',
            isMobile: true
        },
    },
    {
        "0": {
            value: "aA",
            width: "6.5%",
            charCode: 'symbols',
            isMobile: true
        },
        "1": {
            value: "(",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "2": {
            value: "Space",
            width: "30%",
            alternate: "<span style='position:absolute;bottom:0;left: 0; right:0'>&#x02514;&#x02500;&#x02500;&#x02500;&#x02500;&#x02518;</span>",
            mobileWidth: "30%",
            charCode: ' '
        },
        "3": {
            value: ")",
            width: "6.5%",
            mobileWidth: "10%"
        },
        "4": {
            value: "Enter",
            width: "auto",
            charCode: '\n',
            alternate: '&#x021B2;'
        },
    }
]

// Enter &#8629;


export { keys, symbolKeys };