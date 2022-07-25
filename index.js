let btn = document.querySelector('.up');
window.onscroll = function(){
    console.log(window.scrollY)
    if(window.scrollY >= 944){
        btn.classList.add('show');
    }else{
        btn.classList.remove('show');
    }
}
btn.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
});