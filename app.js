



    
let  hamburger = document.querySelector('.hamburger');

let times   = document.querySelector('.times');

let mobilenav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click' , () => {


        mobilenav.classList.add('open');




    });


times.addEventListener('click',() => {


    mobilenav.classList.remove('open');

    });



