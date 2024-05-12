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


       /*Product Slider JS*/
        $(".product-slider").owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            items: 4,
            touchDrag: true,
            mouseDrag: true,
            nav: true,
            dots: true,
            navText: [
        '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Arrow_right"><path id="Vector 9" d="M11 6.5L5 12.5M5 12.5L11 18.5M5 12.5H20" stroke="#000" style="stroke:#000;stroke:color(display-p3 0.9473 0.3693 0.3693);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
        '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Arrow_right"> <path id="Vector 9" d="M13 6.5L19 12.5M19 12.5L13 18.5M19 12.5H4" stroke="#000" style="stroke:#000;stroke:color(display-p3 0.9473 0.3693 0.3693);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>'
    ],
            
        });
        
        
        $('.about-img-slider').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            loop: true,
            margin: 0,
            mouseDrag: true,
            autoplayTimeout: 3000,
            autoplay: true,
            dots: false,
            nav: false,
        });
        
        $('.product-details-img-slider').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            loop: true,
            margin: 0,
            mouseDrag: true,
            autoplayTimeout: 3000,
            autoplay: false,
            dots: false,
            nav: false,
        });
        
        
        
        const dropArea = document.getElementById('drop-area');
const droppedContent = document.getElementById('dropped-content');

dropArea.addEventListener('dragenter', preventDefaults, false);
dropArea.addEventListener('dragover', preventDefaults, false);
dropArea.addEventListener('dragleave', handleDragLeave, false);
dropArea.addEventListener('drop', handleDrop, false);

dropArea.addEventListener('dragenter', highlight, false);
dropArea.addEventListener('dragover', highlight, false);
dropArea.addEventListener('dragleave', unhighlight, false);
dropArea.addEventListener('drop', unhighlight, false);
dropArea.addEventListener('click', openFileDialog, false);

function preventDefaults(event) {
  event.preventDefault();
  event.stopPropagation();
}

function highlight() {
  dropArea.classList.add('highlight');
  dropArea.innerHTML = `
  <div class="drop-icon">
    <i class="fa-light fa-file-upload"></i>
  </div>
  <div class="drop-text">Drop files</div>
  `; // Add this line
}

function unhighlight() {
  dropArea.classList.remove('highlight');
  dropArea.innerHTML = `
  <div class="drop-icon">
    <i class="fa-light fa-file-upload"></i>
  </div>
  <div class="drop-text">Drag and drop files here</div>
  `;
}

function handleDragLeave(event) {
  if (event.relatedTarget !== null) {
    return;
  }
  unhighlight();
}

function handleDrop(event) {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  const reader = new FileReader();

  reader.readAsText(file);
  reader.onload = function () {
    droppedContent.value = reader.result;
  };

  unhighlight();
}

function openFileDialog(event) {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'text/plain';

  fileInput.addEventListener('change', handleFileSelect, false);

  fileInput.click();
}

function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.readAsText(file);
  reader.onload = function() {
    droppedContent.value = reader.result;
  };
}

const chars = document.getElementById('chars');

droppedContent.addEventListener('input', () => {
  chars.innerHTML = `${droppedContent.value.length}/5000`;
});

const outerDot = document.getElementById('outer-dot');
const dot = document.getElementById('dot');
let isSpellcheck = true;

outerDot.addEventListener('click', () => {
  isSpellcheck = !isSpellcheck;
  droppedContent.focus();
  
  if (!isSpellcheck) {
    dot.style.transform = 'none';
    outerDot.style.backgroundColor = '#444';
    droppedContent.spellcheck = false;
  } else {
    dot.removeAttribute('style');
    outerDot.removeAttribute('style');
    droppedContent.spellcheck = true;
  }
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
