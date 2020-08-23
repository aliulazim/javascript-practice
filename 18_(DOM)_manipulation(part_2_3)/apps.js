/*
To Day Learn
JS DOM Manipulation-02

=> getAttribute()
=> setAttribute()
=> href, src
=> parentElement
=> chikdren 
=> nextSibling of nextElementSibling
=> previousSibling or previousElementSibling
=> getComputedStyle
=> classList

*/


// getAttribute()
// const h2 = document.querySelector('h2')
// undefined
// h2.getAttribute('id')
// "ul-title"
// h2.getAttribute('class')
// "sample-calss"
// h2.getAttribute('title')
// "my-heading"


// setAttribute()
// const h2 = document.querySelector('h2')
// undefined
// h2
// <h2 id=​"ul-title" class=​"sample-calss" title=​"my-heading">​Unordered List​</h2>​

// h2.setAttribute('title', 'cheang my title') // Cheange Title Name
// undefined
// h2.setAttribute('class', 'cheangMyClass') // Cheange Class Name
// undefined
// h2.setAttribute('class', 'sample-class cheangClass') // Cheange Class Name
// undefined
// h2.setAttribute('class', h2.getAttribute('class') + ' newClass') // Add New Class


// href
// const a = document.querySelector('a');
// undefined
// a
// <a href=​"http:​/​/​google.com">​Google​</a>​
// a.href  // a.href short form (a.getAttribute('href'))
// "http://google.com/"
// a.getAttribute('href')
// "http://google.com"
// a.href = "http://yahoo.com" // Cheang http link address
// "http://yahoo.com"
// a.innerText = "Yahoo!" // Cheang http text
// "Yahoo!"

// src

// const img = document.querySelector('img')
// undefined
// img.src // img.src short form (a.setAttribute('src'))
// "http://127.0.0.1:5500/18_(DOM)_manipulation(part_2_3)/#"

// img.src = 'https://www.timeoutdubai.com/public/styles/full_img/public/images/2020/07/13/IMG-Dubai-UAE.jpg?itok=5oyxTfER'
// "https://www.timeoutdubai.com/public/styles/full_img/public/images/2020/07/13/IMG-Dubai-UAE.jpg?itok=5oyxTfER"

// // Cheange Image
// img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROfws2zWix13ZG228sBfw5ne_IHdiWPsDp3w&usqp=CAU')
// undefined

// img.style.width = "500px"
// "500px"


// parentElament

// const li = document.querySelector('li')
// undefined
// li
// <li class=​"single-item">​Item One​</li>​
// li.parentElement
// <ul id=​"list" class=​"ul-list">​…​</ul>​
// li.parentElement.parentElement
// <body>​…​</body>​
// li.parentElement.parentElement.parentElement
// <html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
// li.parentElement.parentElement.parentElement.children
// HTMLCollection(2) [head, body]


// chikdren 
// const form = document.querySelector('form')
// undefined
// form
// <form action=​"#">​…​</form>​
// form.children
// HTMLCollection(9) [input, br, input, br, input, br, input, br, input]
// form.children[0]
// <input type=​"text">​
// form.children[1]
// <br>​
// form.children[2]
// <input type=​"password">​






// nextSibling of nextElementSibling

// const li = document.querySelector('li')
// undefined
// li
// <li class=​"single-item">​Item One​</li>​
// li.nextElementSibling // Select element (Give me element nodes)
// <li class=​"single-item">​Item Two​</li>​
// li.nextSibling // Select element text (Give me just text nodes)
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/18_(DOM)_manipulation(part_2_3)/"childNodes: NodeList []data: "↵        "firstChild: nullisConnected: truelastChild: nulllength: 9nextElementSibling: li.single-itemnextSibling: li.single-itemnodeName: "#text"nodeType: 3nodeValue: "↵        "ownerDocument: documentparentElement: ul#list.ul-listparentNode: ul#list.ul-listpreviousElementSibling: li.single-itempreviousSibling: li.single-itemtextContent: "↵        "wholeText: "↵        "__proto__: Text

// li.nextElementSibling.style.color = 'red'
// "red"
// li.nextElementSibling.nextElementSibling
// <li class=​"single-item">​Item Three​</li>​
// li.nextElementSibling.nextElementSibling.style.color = 'green'
// "green"

// li.nextElementSibling.nextElementSibling.nextElementSibling
// <li class=​"single-item">​Item Four​</li>​
// li.nextElementSibling.nextElementSibling.nextElementSibling.style.color = 'purple '
// "purple "
// li.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
// <li class=​"single-item">​Item Five​</li>​
// li.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.color = 'yellow '
// "yellow "


// previousSibling or previousElementSibling

// const five = li.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
// undefined
// five
// <li class=​"single-item" style=​"color:​ yellow;​">​Item Five​</li>​
// five.previousElementSibling  // Select previous element (Give me element nodes)
// <li class=​"single-item">​Item Four​</li>​
// five.previousElementSibling.style.color = 'blue'
// "blue"
// five.previousSibling   // Select element text (Give me just text nodes)
// #text



// getComputedStyle

// const h2 = document.querySelector('h2')
// undefined
// h2.style.color
// ""
// h2.style
// CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}

// const comCs = window.getComputedStyle(h2); // Check ki ki CSS style code acha
// undefined
// comCs
// CSSStyleDeclaration {0: "animation-delay", 1: "animation-direction", 2: "animation-duration", 3: "animation-fill-mode", 4: "animation-iteration-count", 5: "animation-name", 6: "animation-play-state", 7: "animation-timing-function", 8: "background-attachment", 9: "background-blend-mode", 10: "background-clip", 11: "background-color", 12: "background-image", 13: "background-origin", 14: "background-position", 15: "background-repeat", 16: "background-size", 17: "border-bottom-color", 18: "border-bottom-left-radius", 19: "border-bottom-right-radius", 20: "border-bottom-style", 21: "border-bottom-width", 22: "border-collapse", 23: "border-image-outset", 24: "border-image-repeat", 25: "border-image-slice", 26: "border-image-source", 27: "border-image-width", 28: "border-left-color", 29: "border-left-style", 30: "border-left-width", 31: "border-right-color", 32: "border-right-style", 33: "border-right-width", 34: "border-top-color", 35: "border-top-left-radius", 36: "border-top-right-radius", 37: "border-top-style", 38: "border-top-width", 39: "bottom", 40: "box-shadow", 41: "box-sizing", 42: "break-after", 43: "break-before", 44: "break-inside", 45: "caption-side", 46: "clear", 47: "clip", 48: "color", 49: "content", 50: "cursor", 51: "direction", 52: "display", 53: "empty-cells", 54: "float", 55: "font-family", 56: "font-kerning", 57: "font-optical-sizing", 58: "font-size", 59: "font-stretch", 60: "font-style", 61: "font-variant", 62: "font-variant-ligatures", 63: "font-variant-caps", 64: "font-variant-numeric", 65: "font-variant-east-asian", 66: "font-weight", 67: "height", 68: "image-orientation", 69: "image-rendering", 70: "isolation", 71: "justify-items", 72: "justify-self", 73: "left", 74: "letter-spacing", 75: "line-height", 76: "list-style-image", 77: "list-style-position", 78: "list-style-type", 79: "margin-bottom", 80: "margin-left", 81: "margin-right", 82: "margin-top", 83: "max-height", 84: "max-width", 85: "min-height", 86: "min-width", 87: "mix-blend-mode", 88: "object-fit", 89: "object-position", 90: "offset-distance", 91: "offset-path", 92: "offset-rotate", 93: "opacity", 94: "orphans", 95: "outline-color", 96: "outline-offset", 97: "outline-style", 98: "outline-width", 99: "overflow-anchor", …}
// comCs.color
// "rgb(178, 34, 34)"
// comCs.padding
// "10px"
// comCs.width
// "193.594px"





// classList

// const h2 = document.querySelector('h2')
// undefined
// h2.classList
// DOMTokenList ["sample-calss", value: "sample-calss"]0: "sample-calss"length: 1value: "sample-calss"__proto__: DOMTokenList
// h2.classList.add('Hello')
// undefined
// h2.classList
// DOMTokenList(2) ["sample-calss", "Hello", value: "sample-calss Hello"]0: "sample-calss"1: "Hello"length: 2value: "sample-calss Hello"__proto__: DOMTokenList
// h2.classList.add('HelloTwo')  // add class
// undefined
// h2.classList
// DOMTokenList(3) ["sample-calss", "Hello", "HelloTwo", value: "sample-calss Hello HelloTwo"]
// h2.classList.remove('sample-calss') // Remove class
// undefined
// h2.classList
// DOMTokenList(2) ["Hello", "HelloTwo", value: "Hello HelloTwo"]