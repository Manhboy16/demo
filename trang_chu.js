var index =1;
doianh = function(){
    var imgs = ["img/ch1.jpg","img/ch2.jpg"];
    document.getElementById('img').src =imgs[index];
    index++;
    if(index==2){
        index=0;
    }
}
setInterval(doianh,2000)


/* */
