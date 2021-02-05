const buttonClick = document.querySelector('#mybutton');
const changeBackground = document.querySelector('#myChangeBackgoundButton');
const body = document.querySelector('.blue-background');


buttonClick.addEventListener('click', function() {
    alert('button clicked');
});


const toggleBackgroundColor = () => {
    body.classList.toggle("red-background");
};
changeBackground.addEventListener('click', toggleBackgroundColor);