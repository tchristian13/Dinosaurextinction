console.log("Hello, World.")

//querySelector
const heading = document.querySelector('#heading') // this is how we grab the element by ID
console.log(heading.innerHTML) //innerHTML
console.log(heading.innerText) // => come back to
heading.style.color = 'red' //can change css of element



const body = document.querySelector('.mess-with-me')
heading.style.fontSize = ("40px")


const paragraph = paragraph.innerText = document.querySelector ('.mess-with-me')
document.style.backgroundColor = green

const parag  = document.querySelector(".mess-with-me")
document.style.visibility = hidden 


const app = document.querySelector('.app')
image.style.height = "250px"

const messWithMe = document.querySelector('.mess with me');
messWithMe.addEventListener('click',function(){
document.style.transition = 'orange';
});


const swBtn  = document.querySelector('#switch-background');
const dinoRow = document.querySelector('#row');
swBtn.addEventListener('click',function(){
document.style.backgroundColor = 'green'; 
});

const BiggifyDino = document.querySelector('#biggify');
BiggifyDino.addEventListener('mouseenter',function(){
document.style.transition = 'width 0.3s ease';
document.style.width = '200px'; 
});



const button = document.getElementById=('.toggle')
const color = 'blue';
buttun.addEventListener('click',() => {
    if (element.style.backgroundColor === 'white ' || element.style.backgroundColor === '') {element.style.backgroundColor = 'blue';
     } else { 
       element.style.backgroundColor ='white';
     }
        });
      


// const image = document.querySelector('img') //grabs the first tag img
// image.src = "https://i0.wp.com/urbannature.blog/wp-content/uploads/puffin-facing.jpg?ssl=1"

const main = document.querySelector('.main') //grab by class

//event listeners
const boxes = document.querySelectorAll('.box')
// boxes = [html elements]
for(let box of boxes){
    box.addEventListener('click', function(){
        box.style.backgroundColor = "orange"
    })
}
