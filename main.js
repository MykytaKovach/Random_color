window.addEventListener('DOMContentLoaded',()=>{
    //GETTING ELEMENTS
    const container = document.querySelector('.container');
    const input = document.querySelector('#input');
    const button = document.querySelector('#button');
    const clipboard = document.querySelector('#clipboard');
    const tooltip = document.querySelector('.tooltiptext');
    const flip = document.querySelector('.flip');

    const random=(string)=>{
        return Math.floor(Math.random()*string.length);
    };

    const randomHex =()=>{
    let color ="#";
    const symbols="0123456789abcdef";
    for(let i=0;i<6;i++){
        color+=symbols[random(symbols)]
    }
    return color;
    };

    const copyToClipboard=()=>{
    input.select();
    input.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    tooltip.innerHTML = "Copied!"
    setTimeout(()=>tooltip.innerHTML="Click me!",1000)
    };

    const setColor =(hex)=>{
        console.log(hex)
        input.value = hex;
        container.style.background=hex;
    }

    button.addEventListener('click',()=>{
        setColor(randomHex());
        flip.style.animation="flip 0.5s ease-in-out";
        setTimeout(()=>{
            flip.style.animation="";
        },600);
    });
    clipboard.addEventListener('click',()=>copyToClipboard());
    //initial change
    setColor(randomHex());
});
