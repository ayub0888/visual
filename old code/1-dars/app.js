
let dinazavr = document.querySelector('.dinazavr');
let block = document.querySelector('.block');

function jump(){
    if(dinazavr.classList != 'jump'){
    dinazavr.classList.add('jump');  
    }
    setTimeout(() => {
        dinazavr.classList.remove('jump')
    }, 500)
}

let tekshiruv = setInterval(function(){
    let dinazavrtop = parseInt(window.getComputedStyle(dinazavr).getPropertyValue('top'));
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockleft < 20 && blockleft > 0 && dinazavrtop>=130 ){
        dinazavr.style.animation - 'none';
        block.style.animation - 'none';
        block.style.display - 'none';
        alert('siz yutqazdingiz');
     }
}, 10)