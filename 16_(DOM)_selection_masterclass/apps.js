/*
=> Single Element Selector
    * .getElementById()
    * .querySelector()


=> Multiple Element Selector
    * .getElementsByTagName()
    * .getElementsByClassName()
    * .querySelectorAll()

 
=> Get Child Nodes Property
    * .childNodes()
    
=> Get Children Element Nodes 
    * .children

*/

// .getElementById()
// console.log(document.getElementById('ul-title'));
// const ulHeading = document.getElementById("ul-title");
// ulHeading.style.color = "green";
// console.log(ulHeading);



// // .querySelector()
// const para = document.querySelector(".paragraph")
// para.textContent = "Hello Wrold";
// para.style.color = "red";
// console.log(para);

// .getElementsByTagName() --(Give me result ---------HTML Collection)

// const ulList = document.getElementsByTagName('ul');
// // console.log(ulList);
// // console.log(ulList[1]);
// for (let i = 0; i < ulList.length; i++){  // Do not use forEach loop (HTML Collection)
//     ulList[i].style.color = 'green';
//     ulList[i].style.fontSize = '25px';
// }


// const paragra = document.getElementsByTagName('p');
// // console.log(paragra);
// // console.log(paragra[1]);
// for (let i = 0; i < paragra.length; i++){
//     paragra[i].style.color = 'green';
//     paragra[i].style.fontSize = '25px';
// }



// .getElementsByClassName()

// const listItem = document.getElementsByClassName("single-item");
// console.log(listItem[2]);


// .querySelectorAll() ======(Give me result ---------NodeList)

// p
const paragr = document.querySelectorAll('p');  // Use to forEach loop
paragr.forEach(p => {
    p.style.color = "white";
    p.style.background = "black";
    p.style.padding = "15px";
    p.style.border = "5px solid green";
    p.style.fontSize = "25px";
    p.style.borderRadius = "5px";
    p.style.textAlign = "center";
    p.style.width = "355px";
});
console.log(paragr);

//li
const listli = document.querySelectorAll('ul > li.single-item');  // Use to forEach loop
listli.forEach(li => {
    li.style.color = "white";
    li.style.background = "black";
    li.style.padding = "15px";
    li.style.border = "5px solid green";
    li.style.fontSize = "25px";
    li.style.textAlign = "center";
    li.style.width = "355px";
    li.style.margin = "10px";

});
console.log(listli);

//h2
const tileHeading = document.querySelectorAll('h2');  // Use to forEach loop
tileHeading.forEach(h2 => {
    h2.style.color = "white";
    h2.style.background = "gray";
    h2.style.padding = "15px";
    h2.style.border = "5px solid green";
    h2.style.fontSize = "30px";
    h2.style.fontWeight = "lighter";
    h2.style.textAlign = "center";
   

});
console.log(tileHeading);

// Subject Heading h1

const subHeading = document.querySelectorAll('h1');  // Use to forEach loop
subHeading.forEach(h1 => {
    h1.style.padding = "15px";
    h1.style.fontSize = "40px";
    h1.style.fontWeight = "lighter";
    h1.style.textAlign = "center";
   

});
console.log(subHeading);



// .childNodes() --- It's not a method . It's a property (all Nodes select karar jaono)

// const chilList = document.querySelectorAll('ul#list');  // Show NodeList
// console.log(list.childNodes);



// .children (Just use element nodes select karar jono)

// const chilList = document.querySelectorAll('ul#list');  // Show HTMLCollection
// console.log(list.children[0]);