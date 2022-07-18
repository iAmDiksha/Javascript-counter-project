let count = 0;
let counter = document.querySelector('.counter');

document.querySelector('.reduce').addEventListener('click',()=>{
    count -= 1;
    counter.innerHTML = count;
});

document.querySelector('.add').addEventListener('click',()=>{
    count += 1;
    counter.innerHTML = count;
});

document.querySelector('.reset').addEventListener('click',()=>{
    count = 0;
    counter.innerHTML = count;
});
