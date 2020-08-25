// 2nd Way

// const btn = document.querySelector('button');
// btn.onclick = function(){
//     alert('Hello Wrold');
// };

// btn.onclick = function(){
//     console.log('Hello Wrold');
// };


// 3rd Way -----Recomonded
// const btn = document.querySelector('button');
// btn.addEventListener('dblclick', function() {
//    alert('Hello');
//    console.log('I am simple text'); 
// });


// Color Box Project
const colors = ['red', 'yellow', 'green', 'blue', 'orange', 'purple', 'violet', 'indigo'];

const container = document.querySelector('section');
const h2 = document.querySelector('h2');
const selectedColor = document.querySelector('#selectedColor');

for (let color of colors){
    const box = document.createElement('div'); // Create a new div
    box.classList.add('box'); // Div inside create class box

    container.appendChild(box); // Class .box input DOM

    box.style.backgroundColor = color; // .box background color set

    // When box click then cheang text and color
    box.addEventListener('click', function() {
    h2.innerText = 'You have selected: '; // When click box then cheang  h2 text
    selectedColor.innerText = box.style.backgroundColor;  // When click box then cheang  span text
    selectedColor.style.backgroundColor = box.style.backgroundColor; // When click box then cheang  span text background color
        
    });
}
