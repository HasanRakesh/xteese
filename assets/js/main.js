(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {


        $(".presslogos-one").ticker({
            item: 'div',
            pauseOnHover: true,
            speed: 80,
            delay: 400
        });
        $(".presslogos-two").ticker({
            item: 'div',
            pauseOnHover: true,
            speed: 80,
            delay: 400,
        });


        /*Testimonial Slider JS*/
        
        $(".testimonial-slider").slick({
            slidesToShow: 2,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 9000,
            prevArrow: "<button class='slick-prev slick-arrow slick-disabled' aria label='Previous' type='button' aria-disabled='true'><svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'> <rect width='48' height='48' rx='8' fill='white' style='fill:white;fill:white;fill-opacity:1;'/> <path d='M26 20L22 24L26 28' stroke='#0C0909' style='stroke:#0C0909;stroke:color(display-p3 0.0471 0.0353 0.0353);stroke-opacity:1;' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/> </svg><span class='d-none'>PREV</span></button>",
        nextArrow: "<button class='slick-next slick-arrow' aria-label='Next' type='button' aria-disabled='false'><svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'> <rect width='48' height='48' rx='8' fill='white' style='fill:white;fill:white;fill-opacity:1;'/> <path d='M22 28L26 24L22 20' stroke='#0C0909' style='stroke:#0C0909;stroke:color(display-p3 0.0471 0.0353 0.0353);stroke-opacity:1;' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/> </svg><span class='d-none'>NEXT</span></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                    }
                }

              ]
        });



        var langArray = [];
        $('.vodiapicker option').each(function () {
            var img = $(this).attr("data-thumbnail");
            var text = this.innerText;
            var value = $(this).val();
            var item = '<li><img src="' + img + '" alt="" value="' + value + '"/><span>' + text + '</span></li>';
            langArray.push(item);
        })

        $('#a').html(langArray);

        //Set the button value to the first el of the array
        $('.btn-select').html(langArray[0]);
        $('.btn-select').attr('value', 'en');

        //change button stuff on click
        $('#a li').click(function () {
            var img = $(this).find('img').attr("src");
            var value = $(this).find('img').attr('value');
            var text = this.innerText;
            var item = '<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
            $('.btn-select').html(item);
            $('.btn-select').attr('value', value);
            $(".b").toggle();
            //console.log(value);
        });

        $(".btn-select").click(function () {
            $(".b").toggle();
        });

        //check local storage for the lang
        var sessionLang = localStorage.getItem('lang');
        if (sessionLang) {
            //find an item with value of sessionLang
            var langIndex = langArray.indexOf(sessionLang);
            $('.btn-select').html(langArray[langIndex]);
            $('.btn-select').attr('value', sessionLang);
        } else {
            var langIndex = langArray.indexOf('ch');
            console.log(langIndex);
            $('.btn-select').html(langArray[langIndex]);
            //$('.btn-select').attr('value', 'en');
        }


        $('a[data-toggle-id]').click(function () {
            $(this).toggleClass('trackActive');
            var toggleId = $(this).data('toggle-id');
            var $content = $('[data-content-id="' + toggleId + '"]');

            $content.slideToggle();
        });

        $('.loginSidebar').click(function () {
            $('.loginbar').addClass('active');
            $('body').addClass('fix');
        });

        $('.registerBTN').click(function () {
            $('.loginbar').removeClass('active');
            $('.registerBar').addClass('active');
            $('body').addClass('fix');
        });

        $('.loginBar').click(function () {
            $('.loginbar').addClass('active');
            $('.registerBar').removeClass('active');
            $('body').addClass('fix');
        });

        $('.otpBTN').click(function () {
            $('.otpBar').addClass('active');
            $('.registerBar').removeClass('active');
            $('body').addClass('fix');
        });

        $('.otpBar .sidebarclose').click(function () {
            $('.otpBar').removeClass('active');
            $('body').removeClass('fix');
        });

        $('.loginbar .sidebarclose').click(function () {
            $('.loginbar').removeClass('active');
            $('body').removeClass('fix');
        });

        $('.registerBar .sidebarclose').click(function () {
            $('.registerBar').removeClass('active');
            $('body').removeClass('fix');
        });


        $('.sidebarPanel input').click(function () {
            $('.sidebarPanel li').removeClass('focused');
            $(this).parent().addClass('focused');
        });

        $('.addMoreBTN').click(function () {
            $('.cartPop').removeClass('active');
            $('body').removeClass('fix');
        });

        $('.addSelected').click(function () {
            $('.addCartOption').removeClass('active');
            $('body').removeClass('fix');
        });

        //Code Verification
        var verificationCode = [];
        $(".verification-code input[type=text]").keyup(function (e) {

            // Get Input for Hidden Field
            $(".verification-code input[type=text]").each(function (i) {
                verificationCode[i] = $(".verification-code input[type=text]")[i].value;
                $('#verificationCode').val(Number(verificationCode.join('')));
                //console.log( $('#verificationCode').val() );
            });

            //console.log(event.key, event.which);

            if ($(this).val() > 0) {
                if (event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9 || event.key == 0) {
                    $(this).next().focus();
                }
            } else {
                if (event.key == 'Backspace') {
                    $(this).prev().focus();
                }
            }

        }); // keyup

        $('.verification-code input').on("paste", function (event, pastedValue) {

            $('#txt').val($content)
        });

        function customPopup() {

            let $btnShowPopup = $('.js-open-popup');
            let $btnClosePopup = $('.js-close-popup');
            let $popup = $('.js-custom-popup');

            $btnShowPopup.on('click', function () {

                let targetPopup = $(this).attr('data-target');
                $("[data-popup=" + targetPopup + "]").addClass('active');
                $("body").addClass('fix');

            });

            $btnClosePopup.on('click', function () {
                $(this).parents('.active').removeClass('active');
                $("body").removeClass('fix');
            });


        }
        customPopup();




        $(".quantity__plus, .quantity__minus").click(function (e) {
            var $this = $(this);
            var $counter__input = $(this).parent().find(".quantity__input");
            var $currentVal = parseInt($(this).parent().find(".quantity__input").val());

            //Increment
            if ($currentVal != NaN && $this.hasClass('quantity__plus')) {
                $counter__input.val($currentVal + 1);
            }
            //Decrement
            else if ($currentVal != NaN && $this.hasClass('quantity__minus')) {
                if ($currentVal >= 1) {
                    $counter__input.val($currentVal - 1);
                }
            }
        });

        $(".mainmenu ul li:has(ul)").addClass("has-submenu");
        $(".mainmenu ul li:has(ul)").addClass("small-submenu");
        $(".mainmenu ul li ul").addClass("sub-menu");
        $(".mainmenu ul.dropdown li").hover(function () {
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });
        var $menu = $("#menu"),
            $menulink = $("#menu-toggle"),
            $header = $(".header-area"),
            $searchTrigger = $(".search-icon"),
            $menuTriggercont = $("#menu_handler"),
            $menuTrigger = $(".has-submenu > span"),
            $megamenuTrigger = $(".megamenu > li > span");
        $menulink.click(function (e) {
            $menulink.toggleClass("active");
            $menu.toggleClass("active");
            $menuTriggercont.toggleClass("active");
            $header.toggleClass("active");
            $(".search-box").removeClass("active");
        });

        $menuTrigger.click(function (e) {
            e.preventDefault();
            var t = $(this).next();
            t.toggleClass("active");
            t.toggleClass("active").next("ul").toggleClass("active");
            t.toggleClass("active").next(".megamenu-holder").toggleClass("active");
        });

        $megamenuTrigger.click(function (e) {
            e.preventDefault();
            var t = $(this).next();
            t.toggleClass("active").next(".mega-submenu").toggleClass("active");
        });

        $searchTrigger.click(function (e) {
            $menulink.removeClass("active");
            $menu.removeClass("active");

            $menuTriggercont.removeClass("active");
            $(".search-box").toggleClass("active");
        });

        $(".mainmenu ul li:has(ul)");



        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll > 0) {
                $(".header-area.alt").addClass("scroll");
            } else {
                $(".header-area.alt").removeClass("scroll");
            }
        }); //missing );


        $('.loggedinTab > a').on("click", function () {
            $(this).parent().toggleClass('active');
        });

        $('.logout > a').on("click", function () {
            $('.logoutpop').addClass('active');
        });
        $('.noLogout').on("click", function () {
            $('.logoutpop').removeClass('active');
        });





    })
}(jQuery));
