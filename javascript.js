let count = 0;
let prev_scroll = 0;
//change card1_start_translateY if content is added before the card1 container
const card1_start_translateY = 660;
const card2_start_translateY = 410;
const card3_start_translateY = 140;
const card1_start_translateX = 40;
const card2_start_translateX = 41;
const card3_start_translateX = 42;

const container = document.getElementById('container');
const se1 = document.getElementById('se1');
const card1 = document.getElementById('card1');

// const se2 = document.getElementById('se2');
const out1 = document.getElementById("out1");
// const out2 = document.getElementById('out2');



function card1Anim(scroll_pos){
    
    let y = card1_start_translateY - (scroll_pos * 1.5);
    if (y < 0) {y = 0};
    card1.style.transform = `translateY(${y}px)`;
    if (scroll_pos == 0) {
        card1.style.rotate = '-10deg';
    } else {
        card1.style.rotate = '2deg';
    }
}

function card2Anim(scroll_pos){
    let newscrollpos = scroll_pos - 600
    let y = card2_start_translateY - (newscrollpos * 1.5);
    
    if(y < -290) {y = -290}
    card2.innerText = newscrollpos;
    if (scroll_pos <= 900) {
        card2.style.rotate = '10deg';
        card2.style.transform = `translateY(${y}px)`;
    } 
    else if (scroll_pos <= 1100) {
        card2.style.transform = `translateY(${y}px)`;
        card2.style.rotate = '2deg';
    } else {
        card2.style.transform = `translateY(${y}px)`;
    }
}

function card3Anim(scroll_pos){
    
    let newscrollpos = scroll_pos - 1200
    let y = card3_start_translateY - (newscrollpos * 3);
    
    if(y < -580) {y = -580}
    card3.innerText = newscrollpos;
    if (scroll_pos <= 1380) {
        
        card3.style.rotate = '1deg';
        card3.style.transform = `translateY(${y}px)`
    } else if (scroll_pos <= 2000) {
        card3.style.rotate = '-2deg';
        card3.style.transform = `translateY(${y}px)`
    }
    // else {
    //     card3.style.translate = `300px ${y}px`;
    //     card3.style.rotate = '10deg';
    // }
}

container.addEventListener('scroll', ()=>{
    let scroll_pos = container.scrollTop;
    let direction;
    if (scroll_pos > prev_scroll) {
        direction = "down"
    } else {
        direction = "up"
    }
    count++
    out1.innerHTML = scroll_pos;
    card1Anim(scroll_pos);
    if (scroll_pos > 1100) {
        card3Anim(scroll_pos);
    }
    else if(scroll_pos > 600) {
        card2Anim(scroll_pos);
    } 
        
    prev_scroll = scroll_pos
})

