// challenge 2
let heading = document.getElementsByTagName('h2');
let i

for (i = 0; i < heading.length; i++) {
    heading[i].style.color = 'lightblue'
}

// challenge 3
const colorTomato = document.getElementById('backpack');
colorTomato.style.backgroundColor="tomato";

// challenge 4
const radiusOfCards= document.getElementsByClassName('card');
for(card of radiusOfCards){
    card.style.borderRadius= '30px'
}
// challenge 5


// challenge 6
const buttons = document.getElementsByClassName('button');
for(const button of buttons){
    button.addEventListener('click', function(event){
       event.target.parentNode.removeChild(event.target);
    })
}

// challenge 7
document.getElementById('email-checker').addEventListener('keyup',function(event){
    const text= event.target.value;
    const submitButton =  document.getElementById('btn-enable');
    if( text === 'email'){
       submitButton.removeAttribute('disabled');
    }
    else{
        submitButton.setAttribute('disabled',true);
    }
})
// challenge 8
const newImage=document.getElementById('image');
newImage.addEventListener('mouseover', function(){
    newImage.src ="images/bags/bag-2.png"
})
newImage.addEventListener('mouseout', function(){
    newImage.src ="images/shoes/shoe-2.png"
})
// challenge 9
const newBg= document.getElementById('bg-changer');
newBg.addEventListener('click', function(){
    newBg.style.backgroundColor='red';
})
