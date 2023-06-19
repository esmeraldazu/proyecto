var swiper=new Swiper(".mySwiper-1",{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination:{
        el:".swper=pagination",
        clickable: true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});
var swiper = new swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupwithBiank:true,
    },
    navigation  : {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

    breakpoints : {
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        520:{
            slidesPerView:2,
        },
        520:{
            slidesPerView:3,
        }
    }
);
let tabInputs = document.querySelectoAll(".tabInput");
tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id= input.ariValueMax;
        let thisSwiper = document.getElementByld('swiper'+ id);
        thisSwiper.swiper.update();
    })
}
    )


