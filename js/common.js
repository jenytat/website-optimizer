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
            $('.inform-link__text').text('Свернуть');
        } else {
            $('.inform-text').animate({ height: 'hide' }, 500);
            $('.inform-link__text').text('Показать');
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

    $('.inform a').click(function () {
        $('.hidden').toggle('normal');
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

    $(window).scroll(function () {
        $('.servise__left').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + $(window).innerHeight()) {
                $(this).addClass('slide-in-active');
            } else {
                $(this).removeClass('slide-in-active');
            }
        });
    });

    $(window).scroll(function () {
        $('.servise__right').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + $(window).innerHeight()) {
                $(this).addClass('slide-in-active');
            } else {
                $(this).removeClass('slide-in-active');
            }
        });
    });

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2xpZGVyX19pdGVtJykuY3NzKCd3aWR0aCcsICQoJy5jb250YWluZXInKS53aWR0aCgpKTtcblxuICAgICQoJy5jb25zdWx0YXRpb25fX2Fycm93JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhcnJvdy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJy5xdWVzdGlvbl9faXRlbScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlLXF1ZXN0aW9uJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuaW5mb3JtLWxpbmsnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKCcuaW5mb3JtLXRleHQnKS5jc3MoJ2Rpc3BsYXknKSA9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICQoJy5pbmZvcm0tdGV4dCcpLmFuaW1hdGUoeyBoZWlnaHQ6ICdzaG93JyB9LCA1MDApO1xuICAgICAgICAgICAgJCgnLmluZm9ybS1saW5rX190ZXh0JykudGV4dCgn0KHQstC10YDQvdGD0YLRjCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmluZm9ybS10ZXh0JykuYW5pbWF0ZSh7IGhlaWdodDogJ2hpZGUnIH0sIDUwMCk7XG4gICAgICAgICAgICAkKCcuaW5mb3JtLWxpbmtfX3RleHQnKS50ZXh0KCfQn9C+0LrQsNC30LDRgtGMJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNpbmZvcm0tMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbignZGl2LnRleHQtMScpLnRvZ2dsZSgnbm9ybWFsJyk7XG4gICAgfSk7XG4gICAgJCgnI2luZm9ybS0yJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdkaXYudGV4dC0yJykudG9nZ2xlKCdub3JtYWwnKTtcbiAgICB9KTtcbiAgICAkKCcjaW5mb3JtLTMnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2Rpdi50ZXh0LTMnKS50b2dnbGUoJ25vcm1hbCcpO1xuICAgIH0pO1xuICAgICQoJyNpbmZvcm0tNCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbignZGl2LnRleHQtNCcpLnRvZ2dsZSgnbm9ybWFsJyk7XG4gICAgfSk7XG4gICAgJCgnI2luZm9ybS01JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdkaXYudGV4dC01JykudG9nZ2xlKCdub3JtYWwnKTtcbiAgICB9KTtcblxuICAgICQoJy5pbmZvcm0gYScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmhpZGRlbicpLnRvZ2dsZSgnbm9ybWFsJyk7XG4gICAgfSk7XG5cbiAgICAkKFwiLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBtYXJnaW46IDkwLFxuICAgICAgICBjZW50ZXI6IHRydWUsXG4gICAgICAgIGF1dG9XaWR0aDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY2FsbFBvcHVwKCkge1xuICAgICAgICB2YXIgcG9wdXAgPSAkKCcucG9wdXAtY2FsbCcpO1xuXG4gICAgICAgICQoJ2EucG9wdXAtdXAnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwb3B1cC5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnBvcHVwLWNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uc3VsdFBvcHVwKCkge1xuICAgICAgICB2YXIgcG9wdXAgPSAkKCcucG9wdXAtY29uc3VsdCcpO1xuXG4gICAgICAgICQoJ2EucG9wdXAtZnJlZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBvcHVwLmFkZENsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcucG9wdXAtY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwb3B1cC5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYWxsUG9wdXAoKTtcbiAgICBjb25zdWx0UG9wdXAoKTtcblxuICAgICQoJy5leGFtcGxlX19pdGVtJykuY3NzKCd3aWR0aCcsICQoJy5jb250YWluZXInKS53aWR0aCgpKTtcbiAgICAkKCcuZXhhbXBsZV9faXRlbSBpbWcnKS5jc3MoJ3dpZHRoJywgJCgnLmNvbnRhaW5lcicpLndpZHRoKCkpO1xuICAgICQoJy5vd2wtbmV4dCcpLmNzcygnbWFyZ2luLXJpZ2h0JywgLSgkKCcuY29udGFpbmVyJykud2lkdGgoKSAvIDIpICsgMzEpO1xuICAgICQoJy5vd2wtcHJldicpLmNzcygnbWFyZ2luLWxlZnQnLCAtKCQoJy5jb250YWluZXInKS53aWR0aCgpIC8gMikgKyAzMSk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnNlcnZpc2VfX2xlZnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZVBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdyArICQod2luZG93KS5pbm5lckhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2xpZGUtaW4tYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NsaWRlLWluLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuc2VydmlzZV9fcmlnaHQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZVBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdyArICQod2luZG93KS5pbm5lckhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2xpZGUtaW4tYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NsaWRlLWluLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXIoKSB7XG4gICAgICAgIHZhciBzbGlkZXIgPSAkKCcuc2xpZGVyX19jb250YWluZXInKTtcbiAgICAgICAgdmFyIHNsaWRlV2lkdGggPSAkKCcuc2xpZGVyX193cmFwJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICB2YXIgc2xpZGVDb3VudCA9ICQoJy5zbGlkZXJfX2NvbnRhaW5lciAuc2xpZGVyX19pdGVtJykubGVuZ3RoO1xuICAgICAgICB2YXIgc2xpZGVOdW0gPSAxO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB2YXIgY2xpY2tCdWxsZXRzID0gMDtcbiAgICAgICAgdmFyIHNsaWRlckludGVydmFsID0gNjAwMDtcbiAgICAgICAgdmFyIGFuaW1hdGVUaW1lID0gMTAwMDtcbiAgICAgICAgdmFyIGNvdXJzZSA9IDE7XG4gICAgICAgIHZhciBtYXJnaW4gPSAtc2xpZGVXaWR0aDtcbiAgICAgICAgdmFyIGJ1bGxldHMgPSAkKCcuc2xpZGVyX193cmFwIC5zbGlkZXJfX2J1bGxldHMgbGknKTtcblxuICAgICAgICAkKCcuc2xpZGVyX193cmFwIC5zbGlkZXJfX2J1bGxldHMgbGk6Zmlyc3QnKS5hZGRDbGFzcygnYWN0aXZlLWJ1bGxldHMnKTtcbiAgICAgICAgJCgnLnNsaWRlcl9fY29udGFpbmVyIC5zbGlkZXJfX2l0ZW06bGFzdCcpLmNsb25lKCkucHJlcGVuZFRvKCcuc2xpZGVyX19jb250YWluZXInKTtcbiAgICAgICAgJCgnLnNsaWRlcl9fY29udGFpbmVyIC5zbGlkZXJfX2l0ZW0nKS5lcSgxKS5jbG9uZSgpLmFwcGVuZFRvKCcuc2xpZGVyX19jb250YWluZXInKTtcbiAgICAgICAgJCgnLnNsaWRlcl9fY29udGFpbmVyJykuY3NzKCdtYXJnaW4tbGVmdCcsIC1zbGlkZVdpZHRoKTtcblxuICAgICAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChhbmltYXRlU2xpZGUsIHNsaWRlckludGVydmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGVTbGlkZSgpIHtcbiAgICAgICAgICAgIGlmIChtYXJnaW4gPT0gLXNsaWRlQ291bnQgKiBzbGlkZVdpZHRoIC0gc2xpZGVXaWR0aCAmJiBjb3Vyc2UgPT0gMSkge1xuICAgICAgICAgICAgICAgIHNsaWRlci5jc3MoeyAnbWFyZ2luTGVmdCc6IC1zbGlkZVdpZHRoIH0pO1xuICAgICAgICAgICAgICAgIG1hcmdpbiA9IC1zbGlkZVdpZHRoICogMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luID0gbWFyZ2luIC0gc2xpZGVXaWR0aCAqIGNvdXJzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNsaWRlci5hbmltYXRlKHsgJ21hcmdpbkxlZnQnOiBtYXJnaW4gfSwgYW5pbWF0ZVRpbWUpO1xuXG4gICAgICAgICAgICBpZiAoY2xpY2tCdWxsZXRzID09IDApIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVCdWxsZXRzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNsaWRlTnVtID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWN0aXZlQnVsbGV0cygpIHtcbiAgICAgICAgICAgIGlmIChjb3Vyc2UgPT0gMSAmJiBzbGlkZU51bSAhPSBzbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgc2xpZGVOdW0rKztcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyX19idWxsZXRzIC5hY3RpdmUtYnVsbGV0cycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtYnVsbGV0cycpLm5leHQoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZS1idWxsZXRzJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdXJzZSA9PSAxICYmIHNsaWRlTnVtID09IHNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBzbGlkZU51bSA9IDE7XG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlcl9fYnVsbGV0cyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtYnVsbGV0cycpLmVxKDApLmFkZENsYXNzKCdhY3RpdmUtYnVsbGV0cycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291cnNlID09IC0xICYmIHNsaWRlTnVtICE9IDEpIHtcbiAgICAgICAgICAgICAgICBzbGlkZU51bS0tO1xuICAgICAgICAgICAgICAgICQoJy5zbGlkZXJfX2J1bGxldHMgLmFjdGl2ZS1idWxsZXRzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1idWxsZXRzJykucHJldignbGknKS5hZGRDbGFzcygnYWN0aXZlLWJ1bGxldHMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdXJzZSA9PSAtMSAmJiBzbGlkZU51bSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVOdW0gPSBzbGlkZUNvdW50O1xuICAgICAgICAgICAgICAgICQoJy5zbGlkZXJfX2J1bGxldHMgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlLWJ1bGxldHMnKS5lcShzbGlkZUNvdW50IC0gMSkuYWRkQ2xhc3MoJ2FjdGl2ZS1idWxsZXRzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdG9wU2xpZGVyKCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnVsbGV0cy5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVyLmlzKCc6YW5pbWF0ZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RvcFNsaWRlcigpO1xuICAgICAgICAgICAgaW5kZXggPSBidWxsZXRzLmluZGV4KHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAoY291cnNlID09IDEpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4gPSAtc2xpZGVXaWR0aCAqIGluZGV4O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3Vyc2UgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4gPSAtc2xpZGVXaWR0aCAqIGluZGV4IC0gMiAqIHNsaWRlV2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5zbGlkZXJfX2J1bGxldHMgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlLWJ1bGxldHMnKS5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZS1idWxsZXRzJyk7XG4gICAgICAgICAgICBjbGlja0J1bGxldHMgPSAxO1xuICAgICAgICAgICAgYW5pbWF0ZVNsaWRlKCk7XG4gICAgICAgICAgICBjbGlja0J1bGxldHMgPSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV4dFNsaWRlKCk7XG4gICAgfVxuXG4gICAgbW92ZVNsaWRlcigpO1xufSk7Il19
