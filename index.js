

$("document").ready(function(){

    window.addEventListener('scroll',function(){
        const nav = document.getElementById('navContainer');
        var elements;
        if(window.pageYOffset>10){
          nav.classList.add("addShadow");
          nav.style.backgroundColor="#ffffff";
          nav.style.color = "#000000"
          elements = document.getElementsByClassName("s");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.backgroundColor="#000000";
                }
          

        }else{
          nav.classList.remove("addShadow");
          nav.style.backgroundColor="#002244"
          nav.style.color = "#ffffff";
          elements = document.getElementsByClassName("s");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.backgroundColor="#ffffff";
                }
        }
      });
    

    $("#covedNAV").on('click', function(){
        var duration = getDuration(0);
        $("HTML, BODY").animate({
            scrollTop: 0
        }, duration);
        });

    $('#aboutusLink').on('click', function(){
        scrollToElem('#aboutus');
    });

    $('#signupLink').on('click', function(){
        scrollToElem('#signup');
    });

    $('#contactusLink').on('click', function(){
        scrollToElem('#contactus');
    });

    $('#faqLink').on('click', function(){
        scrollToElem('#faq');
    });

    $("#enrolbtn").on('click', function(){
        window.location = "studentSignUp.html";
    });

    $("#joinusbtn").on('click', function(){
        window.location = "mentorSignUp.html";
    });


    var sideopen = false;
    $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
    if(sideopen){
        closeNav();
    } else{
        document.getElementById("sidenav").style.width = "250px";
        sideopen = true;
    }
    
    });

    $('#aboutusLinkS').on('click', function(){
        $('#nav-icon3').toggleClass('open');
        closeNav();
        scrollToElem('#aboutus')
    });

    $('#studentsLinkS').on('click', function(){
        $('#nav-icon3').toggleClass('open');
        closeNav();
        scrollToElem('#studentsignup')
    });

    $('#mentorsLinkS').on('click', function(){
        $('#nav-icon3').toggleClass('open');
        closeNav();
        scrollToElem('#mentorsignup')
    });

    $('#contactusLinkS').on('click', function(){
        $('#nav-icon3').toggleClass('open');
        closeNav();
        scrollToElem('#contactus')
    });

    $('#faqLinkS').on('click', function(){
        $('#nav-icon3').toggleClass('open');
        closeNav();
        scrollToElem('#faq')
    });

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    function closeNav() {
        sideopen = false;
        document.getElementById("sidenav").style.width = "0";
    }


});

function scrollToElem(element){
var position = $(element).offset().top;
var duration = getDuration(position);
$("HTML, BODY").animate({
    scrollTop: (position-60)
}, duration);
}

function getDuration(target) {
var currentTop = $(window).scrollTop(), rate = 1, distance;
distance = Math.abs(currentTop - target);
return distance * rate;
}
