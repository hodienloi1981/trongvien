const tvtoggler = document.getElementById("tv-toggler");
const tvmenu = document.getElementById("tv-menu");
tvtoggler.addEventListener("click",function(){
    tvmenu.classList.toggle("show");
    if(tvtoggler.innerHTML =='<i class="fa-solid fa-xmark"></i>')
    {
        tvtoggler.innerHTML ='<i class="fa-solid fa-bars"></i>';
    }
    else
    {
        tvtoggler.innerHTML ='<i class="fa-solid fa-xmark"></i>';
    }
    
})

