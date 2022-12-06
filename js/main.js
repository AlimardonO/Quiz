const form = document.querySelector('form');
let ic=0;
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#finish');
const sbm = document.querySelector('#sbm');
const emoji = document.querySelector('#emoji');
sbm.addEventListener('click', function(event){
    event.preventDefault();
    const arr = [section1.querySelector('input:checked').value,section2.querySelector('input:checked').value,section3.querySelector('input:checked').value];
    section3.classList = 'none';
    section4.classList = 'inline';
    for (const key in arr) {
        if(arr[key]=='true') ic++;
    }
    const span = document.querySelector('#answer');
    if(ic==3){
        span.innerHTML = `Вы ответили 3 из 3`;
        emoji.innerHTML = `🤓😃🥳`;
    }else if(ic==2){
        span.innerHTML = `Вы ответили 2 из 3`;
        emoji.innerHTML = `😉🙃`;
    }else if(ic==1){
        span.innerHTML = `Вы ответили 1 из 3`;
        emoji.innerHTML = `😢😒`;
    }else{
        span.innerHTML = `Вы ответили 0 из 3`;
        emoji.innerHTML = `☹️😣😵`;
    }
});