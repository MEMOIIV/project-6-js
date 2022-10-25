
// Nav \\ 

let containerUl = $(".container-ul").innerWidth();

$(".nav-icon").click(() => {
   
    if ( $(".container-ul").css("left") == "0px") {

        $(".container-ul").animate({left: - containerUl},700);
    }else{
        $(".container-ul").animate({left: 0},700);
    }
});

$(".icon-x").click(() => {
    $(".container-ul").animate({left: - containerUl },700);
});

// Nav scroll \\ 

$(".home-li").click(() => {

     let homeTop = $(".bg-img").offset().top ;
     $('html , body').animate( {scrollTop : homeTop } , 500)      
});

$(".details-li").click(() => {

     let section1Top = $(".section1").offset().top ;
     $('html , body').animate( {scrollTop : section1Top } , 500)      
});

$(".duration-li").click(() => {

     let section2Top = $(".section2").offset().top ;
     $('html , body').animate( {scrollTop : section2Top } , 500)      
});

$(".contact-li").click(() => {

     let footerTop = $(".footer").offset().top ;
     $('html , body').animate( {scrollTop : footerTop } , 500)      
});

// select element section 2 \\

let eventSection = $(".containerFade").click(function(params) {

     $(".information").slideToggle(700);
});
let eventSection1 = $(".containerFade1").click(function(params) {

     $(".information1").slideToggle(700);
});
let eventSection2 = $(".containerFade2").click(function(params) {

     $(".information2").slideToggle(700);
});
let eventSection3 = $(".containerFade3").click(function(params) {

     $(".information3").slideToggle(700);
});

// DATE \\

let countDownDate = new Date ("Dec 31 , 2022  23:59:59").getTime();

// console.log(countDownDate);

let counter = setInterval(() => {
    // Get Date Now \\
    
    let dateNow = new Date().getTime();
    
    // Find The Date Difference Between Now And CountDown Date \\

        let dateDiff = countDownDate - dateNow; 
        
        // Get Time Units \\ 
        
        let days = Math.floor(dateDiff /(1000 * 60 * 60 * 24));
        
        let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
        
        let minutes = Math.floor (dateDiff % (1000 * 60 * 60 ) / (1000 * 60 ));
        
        let seconds = Math.floor (dateDiff % (1000 * 60 ) / (1000));
        
        document.querySelector(".days").innerHTML = `${days} D`; 
        document.querySelector(".hours").innerHTML = `0${hours} H`; 
        document.querySelector(".minutes").innerHTML = `${minutes} M`; 
        document.querySelector(".seconds").innerHTML = `${seconds} S`; 
        
        if(dateDiff = 0){
            clearInterval(counter)
            console.log("hello world");
        };
         
        // console.log(minutes);
        
        // console.log(seconds);
        
        // console.log(hours);
        
        // console.log(days);

    },1000)
    
    

// footer \\


 $(".textarea").keyup(function () {
    let numberFooter = 100
    let length = $(this).val().length;
    let numberText = numberFooter - length ;
    console.log(numberText);
    if (numberText <= 0 ) {
        $(".number").text("your available character finished");
    }else{
        $(".number").text(`${numberText}`);
    }
    
})



// $(".containerFade").click(() => {
//     $(this).find(".information").slideToggle(1000 , () => {
//         $(this).parent().children()
//     });
// })











