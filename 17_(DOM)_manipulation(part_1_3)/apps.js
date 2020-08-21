// To Day Learn
// JS DOM Manipulation

// innerText
// textContent
// innerHTML
// style
// value




// This part code use console

const para = document.querySelector('p'); // creat console undefined value
para // Select 1st paragraph
para.innerText // Just select paragraph text
para.innerText = "Hello Wrold" // Modifie Paragraph text  and then show Hello Wrold
const paras = document.querySelectorAll('p') // Select Multipull paragraph
paras[1].textContent // Specified content select

// Difrent Betwoine textContent vs innerText
// 1. textContent:All most same work textContent and InnerText . But textContent Show hiden element/text
// 2. innerText:All most same work textContent. But InnerText do not Show hiden element/text. ust


/* 

ul.textContent
"
        Item One
        Item Two
        Item Three
        Item Four
        Item Five
    "

ul.innerText
"Item One
Item Two
Item Three
Item Four
Item Five"


 
ul.innerHTML
"
        <li class="single-item">Item One</li>
        <li class="single-item">Item Two</li>
        <li class="single-item">Item Three</li>
        <li class="single-item">Item Four</li>
        <li class="single-item">Item Five</li>
    "






*/


/*
// innerHTML

const ul = document.querySelector('ul')
undefined
ul
<ul id=​"list" class=​"ul-list">​…​</ul>​
ul.innerHTML
"
        <li class="single-item">Item One</li>
        <li class="single-item">Item Two</li>
        <li class="single-item">Item Three</li>
        <li class="single-item">Item Four</li>
        <li class="single-item">Item Five</li>
    "
ul.innerHTML = '<li>My New Item</li>'
"<li>My New Item</li>"
ul.innerHTML = '<li>My New <b>Item</b></li>'
"<li>My New <b>Item</b></li>"
ul.innerHTML = '<li>My New <b style ="color:red">Item</b></li>'
"<li>My New <b style ="color:red">Item</b></li>"

*/



/*
// Style

const ul = document.querySelector('ul')
undefined
ul.style
CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}alignContent: ""alignItems: ""alignSelf: ""alignmentBaseline: ""all: ""animation: ""animationDelay: ""animationDirection: ""animationDuration: ""animationFillMode: ""animationIterationCount: ""animationName: ""animationPlayState: ""animationTimingFunction: ""backdropFilter: ""backfaceVisibility: ""background: ""backgroundAttachment: ""backgroundBlendMode: ""backgroundClip: ""backgroundColor: ""backgroundImage: ""backgroundOrigin: ""backgroundPosition: ""backgroundPositionX: ""backgroundPositionY: ""backgroundRepeat: ""backgroundRepeatX: ""backgroundRepeatY: ""backgroundSize: ""baselineShift: ""blockSize: ""border: ""borderBlockEnd: ""borderBlockEndColor: ""borderBlockEndStyle: ""borderBlockEndWidth: ""borderBlockStart: ""borderBlockStartColor: ""borderBlockStartStyle: ""borderBlockStartWidth: ""borderBottom: ""borderBottomColor: ""borderBottomLeftRadius: ""borderBottomRightRadius: ""borderBottomStyle: ""borderBottomWidth: ""borderCollapse: ""borderColor: ""borderImage: ""borderImageOutset: ""borderImageRepeat: ""borderImageSlice: ""borderImageSource: ""borderImageWidth: ""borderInlineEnd: ""borderInlineEndColor: ""borderInlineEndStyle: ""borderInlineEndWidth: ""borderInlineStart: ""borderInlineStartColor: ""borderInlineStartStyle: ""borderInlineStartWidth: ""borderLeft: ""borderLeftColor: ""borderLeftStyle: ""borderLeftWidth: ""borderRadius: ""borderRight: ""borderRightColor: ""borderRightStyle: ""borderRightWidth: ""borderSpacing: ""borderStyle: ""borderTop: ""borderTopColor: ""borderTopLeftRadius: ""borderTopRightRadius: ""borderTopStyle: ""borderTopWidth: ""borderWidth: ""bottom: ""boxShadow: ""boxSizing: ""breakAfter: ""breakBefore: ""breakInside: ""bufferedRendering: ""captionSide: ""caretColor: ""clear: ""clip: ""clipPath: ""clipRule: ""color: ""colorInterpolation: ""colorInterpolationFilters: ""colorRendering: ""colorScheme: ""columnCount: ""columnFill: ""columnGap: ""columnRule: ""columnRuleColor: ""columnRuleStyle: ""columnRuleWidth: ""columnSpan: ""columnWidth: ""columns: ""contain: ""content: ""counterIncrement: ""counterReset: ""cssFloat: ""cssText: ""cursor: ""cx: ""cy: ""d: ""direction: ""display: ""dominantBaseline: ""emptyCells: ""fill: ""fillOpacity: ""fillRule: ""filter: ""flex: ""flexBasis: ""flexDirection: ""flexFlow: ""flexGrow: ""flexShrink: ""flexWrap: ""float: ""floodColor: ""floodOpacity: ""font: ""fontDisplay: ""fontFamily: ""fontFeatureSettings: ""fontKerning: ""fontOpticalSizing: ""fontSize: ""fontStretch: ""fontStyle: ""fontVariant: ""fontVariantCaps: ""fontVariantEastAsian: ""fontVariantLigatures: ""fontVariantNumeric: ""fontVariationSettings: ""fontWeight: ""gap: ""grid: ""gridArea: ""gridAutoColumns: ""gridAutoFlow: ""gridAutoRows: ""gridColumn: ""gridColumnEnd: ""gridColumnGap: ""gridColumnStart: ""gridGap: ""gridRow: ""gridRowEnd: ""gridRowGap: ""gridRowStart: ""gridTemplate: ""gridTemplateAreas: ""gridTemplateColumns: ""gridTemplateRows: ""height: ""hyphens: ""imageOrientation: ""imageRendering: ""inlineSize: ""isolation: ""justifyContent: ""justifyItems: ""justifySelf: ""left: ""length: 0letterSpacing: ""lightingColor: ""lineBreak: ""lineHeight: ""listStyle: ""listStyleImage: ""listStylePosition: ""listStyleType: ""margin: ""marginBlockEnd: ""marginBlockStart: ""marginBottom: ""marginInlineEnd: ""marginInlineStart: ""marginLeft: ""marginRight: ""marginTop: ""marker: ""markerEnd: ""markerMid: ""markerStart: ""mask: ""maskType: ""maxBlockSize: ""maxHeight: ""maxInlineSize: ""maxWidth: ""maxZoom: ""minBlockSize: ""minHeight: ""minInlineSize: ""minWidth: ""minZoom: ""mixBlendMode: ""objectFit: ""objectPosition: ""offset: ""offsetDistance: ""offsetPath: ""offsetRotate: ""opacity: ""order: ""orientation: ""orphans: ""outline: ""outlineColor: ""outlineOffset: ""outlineStyle: ""outlineWidth: ""overflow: ""overflowAnchor: ""overflowWrap: ""overflowX: ""overflowY: ""overscrollBehavior: ""overscrollBehaviorBlock: ""overscrollBehaviorInline: ""overscrollBehaviorX: ""overscrollBehaviorY: ""padding: ""paddingBlockEnd: ""paddingBlockStart: ""paddingBottom: ""paddingInlineEnd: ""paddingInlineStart: ""paddingLeft: ""paddingRight: ""paddingTop: ""page: ""pageBreakAfter: ""pageBreakBefore: ""pageBreakInside: ""paintOrder: ""parentRule: nullperspective: ""perspectiveOrigin: ""placeContent: ""placeItems: ""placeSelf: ""pointerEvents: ""position: ""quotes: ""r: ""resize: ""right: ""rowGap: ""rx: ""ry: ""scrollBehavior: ""scrollMargin: ""scrollMarginBlock: ""scrollMarginBlockEnd: ""scrollMarginBlockStart: ""scrollMarginBottom: ""scrollMarginInline: ""scrollMarginInlineEnd: ""scrollMarginInlineStart: ""scrollMarginLeft: ""scrollMarginRight: ""scrollMarginTop: ""scrollPadding: ""scrollPaddingBlock: ""scrollPaddingBlockEnd: ""scrollPaddingBlockStart: ""scrollPaddingBottom: ""scrollPaddingInline: ""scrollPaddingInlineEnd: ""scrollPaddingInlineStart: ""scrollPaddingLeft: ""scrollPaddingRight: ""scrollPaddingTop: ""scrollSnapAlign: ""scrollSnapStop: ""scrollSnapType: ""shapeImageThreshold: ""shapeMargin: ""shapeOutside: ""shapeRendering: ""size: ""speak: ""src: ""stopColor: ""stopOpacity: ""stroke: ""strokeDasharray: ""strokeDashoffset: ""strokeLinecap: ""strokeLinejoin: ""strokeMiterlimit: ""strokeOpacity: ""strokeWidth: ""tabSize: ""tableLayout: ""textAlign: ""textAlignLast: ""textAnchor: ""textCombineUpright: ""textDecoration: ""textDecorationColor: ""textDecorationLine: ""textDecorationSkipInk: ""textDecorationStyle: ""textIndent: ""textOrientation: ""textOverflow: ""textRendering: ""textShadow: ""textSizeAdjust: ""textTransform: ""textUnderlinePosition: ""top: ""touchAction: ""transform: ""transformBox: ""transformOrigin: ""transformStyle: ""transition: ""transitionDelay: ""transitionDuration: ""transitionProperty: ""transitionTimingFunction: ""unicodeBidi: ""unicodeRange: ""userSelect: ""userZoom: ""vectorEffect: ""verticalAlign: ""visibility: ""webkitAlignContent: ""webkitAlignItems: ""webkitAlignSelf: ""webkitAnimation: ""webkitAnimationDelay: ""webkitAnimationDirection: ""webkitAnimationDuration: ""webkitAnimationFillMode: ""webkitAnimationIterationCount: ""webkitAnimationName: ""webkitAnimationPlayState: ""webkitAnimationTimingFunction: ""webkitAppRegion: ""webkitAppearance: ""webkitBackfaceVisibility: ""webkitBackgroundClip: ""webkitBackgroundOrigin: ""webkitBackgroundSize: ""webkitBorderAfter: ""webkitBorderAfterColor: ""webkitBorderAfterStyle: ""webkitBorderAfterWidth: ""webkitBorderBefore: ""webkitBorderBeforeColor: ""webkitBorderBeforeStyle: ""webkitBorderBeforeWidth: ""webkitBorderBottomLeftRadius: ""webkitBorderBottomRightRadius: ""webkitBorderEnd: ""webkitBorderEndColor: ""webkitBorderEndStyle: ""webkitBorderEndWidth: ""webkitBorderHorizontalSpacing: ""webkitBorderImage: ""webkitBorderRadius: ""webkitBorderStart: ""webkitBorderStartColor: ""webkitBorderStartStyle: ""webkitBorderStartWidth: ""webkitBorderTopLeftRadius: ""webkitBorderTopRightRadius: ""webkitBorderVerticalSpacing: ""webkitBoxAlign: ""webkitBoxDecorationBreak: ""webkitBoxDirection: ""webkitBoxFlex: ""webkitBoxOrdinalGroup: ""webkitBoxOrient: ""webkitBoxPack: ""webkitBoxReflect: ""webkitBoxShadow: ""webkitBoxSizing: ""webkitClipPath: ""webkitColumnBreakAfter: ""webkitColumnBreakBefore: ""webkitColumnBreakInside: ""webkitColumnCount: ""webkitColumnGap: ""webkitColumnRule: ""webkitColumnRuleColor: ""webkitColumnRuleStyle: ""webkitColumnRuleWidth: ""webkitColumnSpan: ""webkitColumnWidth: ""webkitColumns: ""webkitFilter: ""webkitFlex: ""webkitFlexBasis: ""webkitFlexDirection: ""webkitFlexFlow: ""webkitFlexGrow: ""webkitFlexShrink: ""webkitFlexWrap: ""webkitFontFeatureSettings: ""webkitFontSizeDelta: ""webkitFontSmoothing: ""webkitHighlight: ""webkitHyphenateCharacter: ""webkitJustifyContent: ""webkitLineBreak: ""webkitLineClamp: ""webkitLocale: ""webkitLogicalHeight: ""webkitLogicalWidth: ""webkitMarginAfter: ""webkitMarginBefore: ""webkitMarginEnd: ""webkitMarginStart: ""webkitMask: ""webkitMaskBoxImage: ""webkitMaskBoxImageOutset: ""webkitMaskBoxImageRepeat: ""webkitMaskBoxImageSlice: ""webkitMaskBoxImageSource: ""webkitMaskBoxImageWidth: ""webkitMaskClip: ""webkitMaskComposite: ""webkitMaskImage: ""webkitMaskOrigin: ""webkitMaskPosition: ""webkitMaskPositionX: ""webkitMaskPositionY: ""webkitMaskRepeat: ""webkitMaskRepeatX: ""webkitMaskRepeatY: ""webkitMaskSize: ""webkitMaxLogicalHeight: ""webkitMaxLogicalWidth: ""webkitMinLogicalHeight: ""webkitMinLogicalWidth: ""webkitOpacity: ""webkitOrder: ""webkitPaddingAfter: ""webkitPaddingBefore: ""webkitPaddingEnd: ""webkitPaddingStart: ""webkitPerspective: ""webkitPerspectiveOrigin: ""webkitPerspectiveOriginX: ""webkitPerspectiveOriginY: ""webkitPrintColorAdjust: ""webkitRtlOrdering: ""webkitRubyPosition: ""webkitShapeImageThreshold: ""webkitShapeMargin: ""webkitShapeOutside: ""webkitTapHighlightColor: ""webkitTextCombine: ""webkitTextDecorationsInEffect: ""webkitTextEmphasis: ""webkitTextEmphasisColor: ""webkitTextEmphasisPosition: ""webkitTextEmphasisStyle: ""webkitTextFillColor: ""webkitTextOrientation: ""webkitTextSecurity: ""webkitTextSizeAdjust: ""webkitTextStroke: ""webkitTextStrokeColor: ""webkitTextStrokeWidth: ""webkitTransform: ""webkitTransformOrigin: ""webkitTransformOriginX: ""webkitTransformOriginY: ""webkitTransformOriginZ: ""webkitTransformStyle: ""webkitTransition: ""webkitTransitionDelay: ""webkitTransitionDuration: ""webkitTransitionProperty: ""webkitTransitionTimingFunction: ""webkitUserDrag: ""webkitUserModify: ""webkitUserSelect: ""webkitWritingMode: ""whiteSpace: ""widows: ""width: ""willChange: ""wordBreak: ""wordSpacing: ""wordWrap: ""writingMode: ""x: ""y: ""zIndex: ""zoom: ""epubCaptionSide: <unreadable>epubTextCombine: <unreadable>epubTextEmphasis: <unreadable>epubTextEmphasisColor: <unreadable>epubTextEmphasisStyle: <unreadable>epubTextOrientation: <unreadable>epubTextTransform: <unreadable>epubWordBreak: <unreadable>epubWritingMode: <unreadable>__proto__: CSSStyleDeclaration
ul.style.backgroundColor = "black"
"black"
ul.style.color = "white"
"white"
ul.style.padding = "10px"
"10px"


*/


/*
// Value

const forms = document.querySelectorAll("input")
undefined
forms
NodeList(5) [input, input, input, input, input]
forms[0]
<input type=​"text">​

console.dir(forms[0])
VM1969:1 input
undefined
forms[0].value
"aliul azim"

forms[1].value
"password"
forms[2].value
"55"
forms[2].value
"20"
forms[2].value
"100"
forms[3].value
"on"
console.dir(forms[3])
VM2153:1 input
undefined
forms[3].checked
false
forms[3].checked
true
forms[4].value
"#000000"
forms[4].value
"#7d4ab5"
forms[4].value
"#80ff00"

*/