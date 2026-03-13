let change = document.getElementById("change");
let changetext = document.getElementById("start_text");
let text = document.getElementById("t_text");
let stop_btn_text = document.getElementById("stop-btn-text");
let start_btn_grow = document.getElementById("start-btn-grow");
let stop_btn_grow = document.getElementById("stop-btn-grow");
let box = document.getElementById("boxx");
var interval;
var interval_grow;
let scale=100;
change.addEventListener('click',function(){
    setTimeout(function(){
        document.body.style.background="red";
    },3000)
})
let colors=["red","green","yellow","orange","cyan"]
let index=0;
changetext.addEventListener('click',function(){
    interval=setInterval(function(){
        text.style.color=colors[index]
        index++;
        if(index==colors.length)
        {
            index=0;
        }
    },3000)
})
stop_btn_text.addEventListener('click',function(){
    text.style.color="black";
    clearInterval(interval);
})
start_btn_grow.addEventListener('click',function(){
     
   
    interval_grow=setInterval(function(){
        
        scale+=10;
        let s=String(scale)+"px";
        console.log(s);
     box.style.width=s;
      box.style.height=s;
    },2000)
})
stop_btn_grow.addEventListener('click',function(){
    box.style.width="100px";
    box.style.height="100px";
    clearInterval(interval_grow)
})