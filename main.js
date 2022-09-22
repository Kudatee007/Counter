let btn = document.getElementsByClassName('btn1')
let count = document.getElementsByClassName('counts')
let score = 0;
let containerDiv = document.getElementById('containerDiv')



btn[0].addEventListener('click', () => {
    score--;
    count[0].textContent = score;
     if (score < 0) {
       containerDiv.style.backgroundColor = 'peachpuff'
       count[0].style.color = 'red'
     }else if (score == 0){
        containerDiv.style.backgroundColor = 'lavender'
        count[0].style.color = 'yellow'
     }
})

btn[1].addEventListener('click', () => {
    score = 0;
    count[0].textContent = score;
    if (score == 0) {
        containerDiv.style.backgroundColor = 'lavender'
        count[0].style.color = 'yellow'
    }
})

btn[2].addEventListener('click', () => {
    score++;
    count[0].textContent = score;
    if (score > 0){
        containerDiv.style.backgroundColor = 'cyan'
        count[0].style.color = 'green'
    }else if (score == 0){
        containerDiv.style.backgroundColor = 'lavender'
        count[0].style.color = 'yellow'
     }
})

