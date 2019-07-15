'use strict';

$(document).ready(function () {
    $('.slider__item').css('width', $('.container').width());

    $('.consultation__arrow').click(function () {
        $(this).toggleClass('arrow-active');
    });

    $('.question__item').click(function () {
        $(this).toggleClass('active-question');
    });

    $('.inform-link').click(function () {
        if ($('.inform-text').css('display') == 'none') {
            $('.inform-text').animate({ height: 'show' }, 500);
        } else {
            $('.inform-text').animate({ height: 'hide' }, 500);
        }
    });

    $('#inform-1').click(function () {
        $(this).parent().children('div.text-1').toggle('normal');
    });
    $('#inform-2').click(function () {
        $(this).parent().children('div.text-2').toggle('normal');
    });
    $('#inform-3').click(function () {
        $(this).parent().children('div.text-3').toggle('normal');
    });
    $('#inform-4').click(function () {
        $(this).parent().children('div.text-4').toggle('normal');
    });
    $('#inform-5').click(function () {
        $(this).parent().children('div.text-5').toggle('normal');
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false,
        margin: 90,
        center: true,
        autoWidth: true
    });

    function callPopup() {
        var popup = $('.popup-call');

        $('a.popup-up').click(function () {
            popup.addClass('is-visible');
        });
        $('.popup-close').click(function () {
            popup.removeClass('is-visible');
        });
    }

    function consultPopup() {
        var popup = $('.popup-consult');

        $('a.popup-free').click(function () {
            popup.addClass('is-visible');
        });
        $('.popup-close').click(function () {
            popup.removeClass('is-visible');
        });
    }

    callPopup();
    consultPopup();

    $('.example__item').css('width', $('.container').width());
    $('.example__item img').css('width', $('.container').width());
    $('.owl-next').css('margin-right', -($('.container').width() / 2) + 31);
    $('.owl-prev').css('margin-left', -($('.container').width() / 2) + 31);

    function moveSlider() {
        var slider = $('.slider__container');
        var slideWidth = $('.slider__wrap').outerWidth();
        var slideCount = $('.slider__container .slider__item').length;
        var slideNum = 1;
        var index = 0;
        var clickBullets = 0;
        var sliderInterval = 6000;
        var animateTime = 1000;
        var course = 1;
        var margin = -slideWidth;
        var bullets = $('.slider__wrap .slider__bullets li');

        $('.slider__wrap .slider__bullets li:first').addClass('active-bullets');
        $('.slider__container .slider__item:last').clone().prependTo('.slider__container');
        $('.slider__container .slider__item').eq(1).clone().appendTo('.slider__container');
        $('.slider__container').css('margin-left', -slideWidth);

        function nextSlide() {
            interval = window.setInterval(animateSlide, sliderInterval);
        }

        function animateSlide() {
            if (margin == -slideCount * slideWidth - slideWidth && course == 1) {
                slider.css({ 'marginLeft': -slideWidth });
                margin = -slideWidth * 2;
            } else {
                margin = margin - slideWidth * course;
            }
            slider.animate({ 'marginLeft': margin }, animateTime);

            if (clickBullets == 0) {
                activeBullets();
            } else {
                slideNum = index + 1;
            }
        }

        function activeBullets() {
            if (course == 1 && slideNum != slideCount) {
                slideNum++;
                $('.slider__bullets .active-bullets').removeClass('active-bullets').next('li').addClass('active-bullets');
            } else if (course == 1 && slideNum == slideCount) {
                slideNum = 1;
                $('.slider__bullets li').removeClass('active-bullets').eq(0).addClass('active-bullets');
                return false;
            } else if (course == -1 && slideNum != 1) {
                slideNum--;
                $('.slider__bullets .active-bullets').removeClass('active-bullets').prev('li').addClass('active-bullets');
                return false;
            } else if (course == -1 && slideNum == 1) {
                slideNum = slideCount;
                $('.slider__bullets li').removeClass('active-bullets').eq(slideCount - 1).addClass('active-bullets');
            }
        }

        function stopSlider() {
            window.clearInterval(interval);
        }

        bullets.click(function () {
            if (slider.is(':animated')) {
                return false;
            }

            stopSlider();
            index = bullets.index(this);

            if (course == 1) {
                margin = -slideWidth * index;
            } else if (course == -1) {
                margin = -slideWidth * index - 2 * slideWidth;
            }

            $('.slider__bullets li').removeClass('active-bullets').eq(index).addClass('active-bullets');
            clickBullets = 1;
            animateSlide();
            clickBullets = 0;
        });
        nextSlide();
    }

    moveSlider();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zbGlkZXJfX2l0ZW0nKS5jc3MoJ3dpZHRoJywgJCgnLmNvbnRhaW5lcicpLndpZHRoKCkpO1xuXG4gICAgJCgnLmNvbnN1bHRhdGlvbl9fYXJyb3cnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2Fycm93LWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnLnF1ZXN0aW9uX19pdGVtJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtcXVlc3Rpb24nKTtcbiAgICB9KTtcblxuICAgICQoJy5pbmZvcm0tbGluaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQoJy5pbmZvcm0tdGV4dCcpLmNzcygnZGlzcGxheScpID09ICdub25lJykge1xuICAgICAgICAgICAgJCgnLmluZm9ybS10ZXh0JykuYW5pbWF0ZSh7IGhlaWdodDogJ3Nob3cnIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuaW5mb3JtLXRleHQnKS5hbmltYXRlKHsgaGVpZ2h0OiAnaGlkZScgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI2luZm9ybS0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdkaXYudGV4dC0xJykudG9nZ2xlKCdub3JtYWwnKTtcbiAgICB9KTtcbiAgICAkKCcjaW5mb3JtLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2Rpdi50ZXh0LTInKS50b2dnbGUoJ25vcm1hbCcpO1xuICAgIH0pO1xuICAgICQoJyNpbmZvcm0tMycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbignZGl2LnRleHQtMycpLnRvZ2dsZSgnbm9ybWFsJyk7XG4gICAgfSk7XG4gICAgJCgnI2luZm9ybS00JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdkaXYudGV4dC00JykudG9nZ2xlKCdub3JtYWwnKTtcbiAgICB9KTtcbiAgICAkKCcjaW5mb3JtLTUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2Rpdi50ZXh0LTUnKS50b2dnbGUoJ25vcm1hbCcpO1xuICAgIH0pO1xuXG4gICAgJChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgbWFyZ2luOiA5MCxcbiAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgICBhdXRvV2lkdGg6IHRydWVcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNhbGxQb3B1cCgpIHtcbiAgICAgICAgdmFyIHBvcHVwID0gJCgnLnBvcHVwLWNhbGwnKTtcblxuICAgICAgICAkKCdhLnBvcHVwLXVwJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcG9wdXAuYWRkQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5wb3B1cC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnN1bHRQb3B1cCgpIHtcbiAgICAgICAgdmFyIHBvcHVwID0gJCgnLnBvcHVwLWNvbnN1bHQnKTtcblxuICAgICAgICAkKCdhLnBvcHVwLWZyZWUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwb3B1cC5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnBvcHVwLWNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FsbFBvcHVwKCk7XG4gICAgY29uc3VsdFBvcHVwKCk7XG5cbiAgICAkKCcuZXhhbXBsZV9faXRlbScpLmNzcygnd2lkdGgnLCAkKCcuY29udGFpbmVyJykud2lkdGgoKSk7XG4gICAgJCgnLmV4YW1wbGVfX2l0ZW0gaW1nJykuY3NzKCd3aWR0aCcsICQoJy5jb250YWluZXInKS53aWR0aCgpKTtcbiAgICAkKCcub3dsLW5leHQnKS5jc3MoJ21hcmdpbi1yaWdodCcsIC0oJCgnLmNvbnRhaW5lcicpLndpZHRoKCkgLyAyKSArIDMxKTtcbiAgICAkKCcub3dsLXByZXYnKS5jc3MoJ21hcmdpbi1sZWZ0JywgLSgkKCcuY29udGFpbmVyJykud2lkdGgoKSAvIDIpICsgMzEpO1xuXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlcigpIHtcbiAgICAgICAgdmFyIHNsaWRlciA9ICQoJy5zbGlkZXJfX2NvbnRhaW5lcicpO1xuICAgICAgICB2YXIgc2xpZGVXaWR0aCA9ICQoJy5zbGlkZXJfX3dyYXAnKS5vdXRlcldpZHRoKCk7XG4gICAgICAgIHZhciBzbGlkZUNvdW50ID0gJCgnLnNsaWRlcl9fY29udGFpbmVyIC5zbGlkZXJfX2l0ZW0nKS5sZW5ndGg7XG4gICAgICAgIHZhciBzbGlkZU51bSA9IDE7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciBjbGlja0J1bGxldHMgPSAwO1xuICAgICAgICB2YXIgc2xpZGVySW50ZXJ2YWwgPSA2MDAwO1xuICAgICAgICB2YXIgYW5pbWF0ZVRpbWUgPSAxMDAwO1xuICAgICAgICB2YXIgY291cnNlID0gMTtcbiAgICAgICAgdmFyIG1hcmdpbiA9IC1zbGlkZVdpZHRoO1xuICAgICAgICB2YXIgYnVsbGV0cyA9ICQoJy5zbGlkZXJfX3dyYXAgLnNsaWRlcl9fYnVsbGV0cyBsaScpO1xuXG4gICAgICAgICQoJy5zbGlkZXJfX3dyYXAgLnNsaWRlcl9fYnVsbGV0cyBsaTpmaXJzdCcpLmFkZENsYXNzKCdhY3RpdmUtYnVsbGV0cycpO1xuICAgICAgICAkKCcuc2xpZGVyX19jb250YWluZXIgLnNsaWRlcl9faXRlbTpsYXN0JykuY2xvbmUoKS5wcmVwZW5kVG8oJy5zbGlkZXJfX2NvbnRhaW5lcicpO1xuICAgICAgICAkKCcuc2xpZGVyX19jb250YWluZXIgLnNsaWRlcl9faXRlbScpLmVxKDEpLmNsb25lKCkuYXBwZW5kVG8oJy5zbGlkZXJfX2NvbnRhaW5lcicpO1xuICAgICAgICAkKCcuc2xpZGVyX19jb250YWluZXInKS5jc3MoJ21hcmdpbi1sZWZ0JywgLXNsaWRlV2lkdGgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcbiAgICAgICAgICAgIGludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGFuaW1hdGVTbGlkZSwgc2xpZGVySW50ZXJ2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZVNsaWRlKCkge1xuICAgICAgICAgICAgaWYgKG1hcmdpbiA9PSAtc2xpZGVDb3VudCAqIHNsaWRlV2lkdGggLSBzbGlkZVdpZHRoICYmIGNvdXJzZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVyLmNzcyh7ICdtYXJnaW5MZWZ0JzogLXNsaWRlV2lkdGggfSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luID0gLXNsaWRlV2lkdGggKiAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4gPSBtYXJnaW4gLSBzbGlkZVdpZHRoICogY291cnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2xpZGVyLmFuaW1hdGUoeyAnbWFyZ2luTGVmdCc6IG1hcmdpbiB9LCBhbmltYXRlVGltZSk7XG5cbiAgICAgICAgICAgIGlmIChjbGlja0J1bGxldHMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUJ1bGxldHMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2xpZGVOdW0gPSBpbmRleCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhY3RpdmVCdWxsZXRzKCkge1xuICAgICAgICAgICAgaWYgKGNvdXJzZSA9PSAxICYmIHNsaWRlTnVtICE9IHNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBzbGlkZU51bSsrO1xuICAgICAgICAgICAgICAgICQoJy5zbGlkZXJfX2J1bGxldHMgLmFjdGl2ZS1idWxsZXRzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1idWxsZXRzJykubmV4dCgnbGknKS5hZGRDbGFzcygnYWN0aXZlLWJ1bGxldHMnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291cnNlID09IDEgJiYgc2xpZGVOdW0gPT0gc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgIHNsaWRlTnVtID0gMTtcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyX19idWxsZXRzIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1idWxsZXRzJykuZXEoMCkuYWRkQ2xhc3MoJ2FjdGl2ZS1idWxsZXRzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3Vyc2UgPT0gLTEgJiYgc2xpZGVOdW0gIT0gMSkge1xuICAgICAgICAgICAgICAgIHNsaWRlTnVtLS07XG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlcl9fYnVsbGV0cyAuYWN0aXZlLWJ1bGxldHMnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWJ1bGxldHMnKS5wcmV2KCdsaScpLmFkZENsYXNzKCdhY3RpdmUtYnVsbGV0cycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291cnNlID09IC0xICYmIHNsaWRlTnVtID09IDEpIHtcbiAgICAgICAgICAgICAgICBzbGlkZU51bSA9IHNsaWRlQ291bnQ7XG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlcl9fYnVsbGV0cyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtYnVsbGV0cycpLmVxKHNsaWRlQ291bnQgLSAxKS5hZGRDbGFzcygnYWN0aXZlLWJ1bGxldHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BTbGlkZXIoKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBidWxsZXRzLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzbGlkZXIuaXMoJzphbmltYXRlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdG9wU2xpZGVyKCk7XG4gICAgICAgICAgICBpbmRleCA9IGJ1bGxldHMuaW5kZXgodGhpcyk7XG5cbiAgICAgICAgICAgIGlmIChjb3Vyc2UgPT0gMSkge1xuICAgICAgICAgICAgICAgIG1hcmdpbiA9IC1zbGlkZVdpZHRoICogaW5kZXg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdXJzZSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIG1hcmdpbiA9IC1zbGlkZVdpZHRoICogaW5kZXggLSAyICogc2xpZGVXaWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLnNsaWRlcl9fYnVsbGV0cyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtYnVsbGV0cycpLmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlLWJ1bGxldHMnKTtcbiAgICAgICAgICAgIGNsaWNrQnVsbGV0cyA9IDE7XG4gICAgICAgICAgICBhbmltYXRlU2xpZGUoKTtcbiAgICAgICAgICAgIGNsaWNrQnVsbGV0cyA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXh0U2xpZGUoKTtcbiAgICB9XG5cbiAgICBtb3ZlU2xpZGVyKCk7XG59KTsiXX0=
