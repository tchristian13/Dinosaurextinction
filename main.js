console.log("Hello, World.")

//querySelector
const heading = document.querySelector('#heading') // this is how we grab the element by ID
console.log(heading.innerHTML) //innerHTML
console.log(heading.innerText) // => come back to
heading.style.color = 'red' //can change css of element



const body = document.querySelector('.mess-with-me')
body.style.fontSize = "40px"


const paragraph =  document.querySelector ('.mess-with-me')
paragraph.style.backgroundColor = 'green'

const parag  = document.querySelector(".mess-with-me")
parag.style.visibility = 'hidden'


const app = document.querySelector('.app')
app.style.height = "250px"

 

// const image = document.querySelector('img') //grabs the first tag img
// image.src = "https://i0.wp.com/urbannature.blog/wp-content/uploads/puffin-facing.jpg?ssl=1"

const messWithMe = document.querySelector('.mess with me');
for (let mess of messWithMe)
mess.addEventListener('click',function(){
mess.style.transition = 'orange'
});


const swBtn = document.querySelector('#switch-background');
const dinoRow = document.querySelector('#row');
for (let rows of dinoRow)
swBtn.addEventListener('click',function(){
rows.style.backgroundColor = 'green'
});

const biggifyDino = document.querySelector('#biggify');
for(let dino of BiggifyDino){
    dino.addEventListener('mouseenter',function(){
      dino.style.transition = 'width 0.3s ease';
        dino.style.width = '200px'; 
});
}


const button1 = document.getElementById=('#toggle')
const color1 = 'blue';
button1.addEventListener('click', () => {
    if (element.style.backgroundColor === 'white' || element.style.backgroundColor === '')
         {element.style.backgroundColor = 'blue';
     } else { 
       element.style.backgroundColor ='white';
     }
        });
      




const main = document.querySelector('.main') //grab by class

//event listeners
const boxes = document.querySelectorAll('.box')
// boxes = [html elements]
for(let box of boxes){
    box.addEventListener('click', function(){
        box.style.backgroundColor = "orange"
    })
}
