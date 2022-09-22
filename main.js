let btn = document.getElementsByClassName('btn1')
let count = document.getElementsByClassName('counts')
let score = 0;
let containerDiv = document.getElementById('containerDiv')



btn[0].addEventListener('click', () => {
    score--;
    count[0].textContent = score;
     if (score < 0) {
       containerDiv.style.backgroundColor = 'peachpuff'
     }else{
        containerDiv.style.backgroundColor = 'lavender'
     }
})

btn[1].addEventListener('click', () => {
    score = 0;
    count[0].textContent = score;
    if (score == 0) {
        containerDiv.style.backgroundColor = 'lavender'
    }
})

btn[2].addEventListener('click', () => {
    score++;
    count[0].textContent = score;
    if (score > 0){
        containerDiv.style.backgroundColor = 'cyan'
    }else{
        containerDiv.style.backgroundColor = 'lavender'
     }
})

