// $(document).ready(function () {
//     $('.category_container_sub').scroll(function (evt) {
//         if ($(this).scrollTop() >= $('.category_container_sub_1').position().top - $(window).height() / 2 + 20) {
//             $('.category_container_sub_1').css({ display: 'block' });
//             console.log("Animation iiiiiiiiiiiiiiiiiiiiiii")
//             $('.category_container_sub_1').addClass('animation rollIn')
//         }
//     });
// });





// var $fade =  $(".img2"); //Calling the class in HTML

// $(window).scroll(function () { //Using the scroll global variable
//     $fade.each(function () {

//         fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
//         windowBottom = $(window).scrollTop() + $(window).height();

//         if (fadeMiddle < windowBottom) {
//           $(this).addClass("FadeIn");
//         }
//     });
// });

// $(window).scroll();





// var has_fired;
// $("html").on("scroll", function () {
//     if (!has_fired && $(this).scrollTop() >= $("#imgContainer").offset().top) {
//         $("#imgContainer").addClass("animation-class");
//         has_fired = true; // use this if only want fired once
//     }
// });









var has_fired;
const square = document.querySelector('.category_container_sub_1');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            square.classList.add('square-transition');
            has_fired = true;
            return;
        }

        square.classList.remove('square-transition');
    });
});

observer.observe(document.querySelector('.square-wrapper'));