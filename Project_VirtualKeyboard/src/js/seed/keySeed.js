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
            width: "6.5%",
            shift: "@",
        },
        "3": {
            value: "3",
            width: "6.5%",
            shift: "#",
        },
        "4": {
            value: "4",
            width: "6.5%",
            shift: "$",
        },
        "5": {
            value: "5",
            width: "6.5%",
            shift: "%",
        },
        "6": {
            value: "6",
            width: "6.5%",
            shift: "^",
        },
        "7": {
            value: "7",
            width: "6.5%",
            shift: "&",
        },
        "8": {
            value: "8",
            width: "6.5%",
            shift: "*",
        },
        "9": {
            value: "9",
            width: "6.5%",
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
            shift: "=",
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
            alternate: "->",
            alternateShow: false,
            charCode: '\t'
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
            caps: "W",
            shift: "W",
        },
        "3": {
            value: "e",
            width: "6.5%",
            shift: "E",
            caps: "E",
        },
        "4": {
            value: "r",
            width: "6.5%",
            shift: "R",
            caps: "R"
        },
        "5": {
            value: "t",
            width: "6.5%",
            shift: "T",
            caps: "T"
        },
        "6": {
            value: "y",
            width: "6.5%",
            caps: "Y",
            shift: "Y"
        },
        "7": {
            value: "u",
            width: "6.5%",
            shift: "U",
            caps: "U"
        },
        "8": {
            value: "i",
            width: "6.5%",
            caps: "I",
            shift: "I"
        },
        "9": {
            value: "o",
            width: "6.5%",
            caps: "O",
            shift: "O"
        },
        "10": {
            value: "p",
            width: "6.5%",
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
            alternate: "->",
            alternateShow: false,
            charCode: 'caps'
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
            alternate: '&#8629;'
        },
    },
    {
        "0": {
            value: "Shift",
            width: "auto",
            alternate: "->",
            alternateShow: false,
            charCode: 'shift'
        },
        "1": {
            value: "z",
            width: "6.5%",
            shift: "Z",
            caps: "Z"
        },
        "2": {
            value: "x",
            width: "6.5%",
            shift: "X",
            caps: "X"
        },
        "3": {
            value: "c",
            width: "6.5%",
            shift: "C",
            caps: "C"
        },
        "4": {
            value: "v",
            width: "6.5%",
            shift: "V",
            caps: "V"
        },
        "5": {
            value: "b",
            width: "6.5%",
            shift: "B",
            caps: "B"
        },
        "6": {
            value: "n",
            width: "6.5%",
            shift: "N",
            caps: "N"
        },
        "7": {
            value: "m",
            width: "6.5%",
            shift: "M",
            caps: "M"
        },
        "8": {
            value: ",",
            width: "6.5%",
            shift: "<",
            isMobile: false
        },
        "9": {
            value: ".",
            width: "6.5%",
            shift: ">",
            isMobile: false
        },
        "10": {
            value: "/",
            width: "6.5%",
            alternate: "?",
            isMobile: false
        },
        "11": {
            value: "Shift",
            width: "auto",
            alternate: "->",
            alternateShow: false,
            charCode: 'shift',
            isMobile: false
        },

        "12": {
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
            width: "6.5%",
            isMobile: true
        },
        "3": {
            value: "Space",
            width: "30%",
            charCode: ' '
        },
        "4": {
            value: ".",
            width: "6.5%",
            isMobile: true
        },
    }
]


let symbolKeys = [
    // {
    //     "1": {
    //         value: "1",
    //         width: "6.5%",
    //     },
    //     "2": {
    //         value: "2",
    //         width: "6.5%",
    //     },
    //     "3": {
    //         value: "3",
    //         width: "6.5%",
    //     },
    //     "4": {
    //         value: "4",
    //         width: "6.5%",
    //     },
    //     "5": {
    //         value: "5",
    //         width: "6.5%",
    //     },
    //     "6": {
    //         value: "6",
    //         width: "6.5%",
    //     },
    //     "7": {
    //         value: "7",
    //         width: "6.5%",
    //     },
    //     "8": {
    //         value: "8",
    //         width: "6.5%",
    //     },
    //     "9": {
    //         value: "9",
    //         width: "6.5%",
    //     },
    //     "10": {
    //         value: "0",
    //         width: "6.5%",
    //     },
    // },
    {
        "1": {
            value: "@",
            width: "6.5%",
        },
        "2": {
            value: "#",
            width: "6.5%",
        },
        "3": {
            value: "$",
            width: "6.5%",
        },
        "4": {
            value: "%",
            width: "6.5%",
        },
        "5": {
            value: "^",
            width: "6.5%",
        },
        "6": {
            value: "&",
            width: "6.5%",
        },
        "7": {
            value: "(",
            width: "6.5%",
        },
        "8": {
            value: ")",
            width: "6.5%",
        },
    },
    {
        "1": {
            value: "!",
            width: "6.5%",
        },
        "2": {
            value: "~",
            width: "6.5%",
        },
        "3": {
            value: "`",
            width: "6.5%",
        },
        "4": {
            value: "-",
            width: "6.5%",
        },
        "5": {
            value: "_",
            width: "6.5%",
        },
        "6": {
            value: "=",
            width: "6.5%",
        },
        "7": {
            value: "+",
            width: "6.5%",
        },
        "8": {
            value: "\\",
            width: "6.5%",
        },
    },
    {
        "1": {
            value: "{",
            width: "6.5%",
        },
        "2": {
            value: "}",
            width: "6.5%",
        },
        "3": {
            value: "[",
            width: "6.5%",
        },
        "4": {
            value: "]",
            width: "6.5%",
        },
        "5": {
            value: "|",
            width: "6.5%",
        },
        "7": {
            value: ":",
            width: "6.5%",
        },
        "8": {
            value: ";",
            width: "6.5%",
        },
        "9": {
            value: "Enter",
            width: "auto",
            charCode: '\n',
            alternate: '&#8629;'
        },
    },
    {
        "1": {
            value: "'",
            width: "6.5%",
        },
        "2": {
            value: "\"",
            width: "6.5%",
        },
        "3": {
            value: "<",
            width: "6.5%",
        },
        "4": {
            value: ">",
            width: "6.5%",
        },
        "5": {
            value: "?",
            width: "6.5%",
        },
        "6": {
            value: "?",
            width: "6.5%",
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
            value: "Space",
            width: "30%",
            charCode: ' '
        },
    }
]

// Enter &#8629;


export { keys, symbolKeys };