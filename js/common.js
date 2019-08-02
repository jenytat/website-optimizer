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

    $(".slider__container").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        autoplay: true,
        autoWidth: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true
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

    function resultPopup() {
        var popup = $('.popup-result');

        $('a.result__popup').click(function () {
            popup.addClass('is-visible');
        });
        $('.popup-close').click(function () {
            popup.removeClass('is-visible');
        });
    }

    callPopup();
    consultPopup();
    resultPopup();

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

    $('a[href^="#consultation"]').click(function () {
        var anchor = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 800);
    });

    $('a[href^="#description"]').click(function () {
        var anchor = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 800);
    });

    $('a[href^="#example"]').click(function () {
        var anchor = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 800);
    });

    $('a[href^="#service"]').click(function () {
        var anchor = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 800);
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zbGlkZXJfX2l0ZW0nKS5jc3MoJ3dpZHRoJywgJCgnLmNvbnRhaW5lcicpLndpZHRoKCkpO1xuXG4gICAgJCgnLmNvbnN1bHRhdGlvbl9fYXJyb3cnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2Fycm93LWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnLnF1ZXN0aW9uX19pdGVtJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtcXVlc3Rpb24nKTtcbiAgICB9KTtcblxuICAgICQoJy5pbmZvcm0tbGluaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQoJy5pbmZvcm0tdGV4dCcpLmNzcygnZGlzcGxheScpID09ICdub25lJykge1xuICAgICAgICAgICAgJCgnLmluZm9ybS10ZXh0JykuYW5pbWF0ZSh7IGhlaWdodDogJ3Nob3cnIH0sIDUwMCk7XG4gICAgICAgICAgICAkKCcuaW5mb3JtLWxpbmtfX3RleHQnKS50ZXh0KCfQodCy0LXRgNC90YPRgtGMJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuaW5mb3JtLXRleHQnKS5hbmltYXRlKHsgaGVpZ2h0OiAnaGlkZScgfSwgNTAwKTtcbiAgICAgICAgICAgICQoJy5pbmZvcm0tbGlua19fdGV4dCcpLnRleHQoJ9Cf0L7QutCw0LfQsNGC0YwnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI2luZm9ybS0xJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdkaXYudGV4dC0xJykudG9nZ2xlKCdub3JtYWwnKTtcbiAgICB9KTtcbiAgICAkKCcjaW5mb3JtLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2Rpdi50ZXh0LTInKS50b2dnbGUoJ25vcm1hbCcpO1xuICAgIH0pO1xuICAgICQoJyNpbmZvcm0tMycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbignZGl2LnRleHQtMycpLnRvZ2dsZSgnbm9ybWFsJyk7XG4gICAgfSk7XG4gICAgJCgnI2luZm9ybS00JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdkaXYudGV4dC00JykudG9nZ2xlKCdub3JtYWwnKTtcbiAgICB9KTtcbiAgICAkKCcjaW5mb3JtLTUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2Rpdi50ZXh0LTUnKS50b2dnbGUoJ25vcm1hbCcpO1xuICAgIH0pO1xuXG4gICAgJCgnLmluZm9ybSBhJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuaGlkZGVuJykudG9nZ2xlKCdub3JtYWwnKTtcbiAgICB9KTtcblxuICAgICQoXCIuc2xpZGVyX19jb250YWluZXJcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBpdGVtczogMSxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA2MDAwLFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWVcbiAgICB9KTtcblxuICAgICQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICBpdGVtczogMSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIG1hcmdpbjogOTAsXG4gICAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgICAgYXV0b1dpZHRoOiB0cnVlXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjYWxsUG9wdXAoKSB7XG4gICAgICAgIHZhciBwb3B1cCA9ICQoJy5wb3B1cC1jYWxsJyk7XG5cbiAgICAgICAgJCgnYS5wb3B1cC11cCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBvcHVwLmFkZENsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcucG9wdXAtY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwb3B1cC5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25zdWx0UG9wdXAoKSB7XG4gICAgICAgIHZhciBwb3B1cCA9ICQoJy5wb3B1cC1jb25zdWx0Jyk7XG5cbiAgICAgICAgJCgnYS5wb3B1cC1mcmVlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcG9wdXAuYWRkQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5wb3B1cC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3VsdFBvcHVwKCkge1xuICAgICAgICB2YXIgcG9wdXAgPSAkKCcucG9wdXAtcmVzdWx0Jyk7XG5cbiAgICAgICAgJCgnYS5yZXN1bHRfX3BvcHVwJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcG9wdXAuYWRkQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5wb3B1cC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBvcHVwLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhbGxQb3B1cCgpO1xuICAgIGNvbnN1bHRQb3B1cCgpO1xuICAgIHJlc3VsdFBvcHVwKCk7XG5cbiAgICAkKCcuZXhhbXBsZV9faXRlbScpLmNzcygnd2lkdGgnLCAkKCcuY29udGFpbmVyJykud2lkdGgoKSk7XG4gICAgJCgnLmV4YW1wbGVfX2l0ZW0gaW1nJykuY3NzKCd3aWR0aCcsICQoJy5jb250YWluZXInKS53aWR0aCgpKTtcbiAgICAkKCcub3dsLW5leHQnKS5jc3MoJ21hcmdpbi1yaWdodCcsIC0oJCgnLmNvbnRhaW5lcicpLndpZHRoKCkgLyAyKSArIDMxKTtcbiAgICAkKCcub3dsLXByZXYnKS5jc3MoJ21hcmdpbi1sZWZ0JywgLSgkKCcuY29udGFpbmVyJykud2lkdGgoKSAvIDIpICsgMzEpO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5zZXJ2aXNlX19sZWZ0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKGltYWdlUG9zIDwgdG9wT2ZXaW5kb3cgKyAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NsaWRlLWluLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzbGlkZS1pbi1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnNlcnZpc2VfX3JpZ2h0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKGltYWdlUG9zIDwgdG9wT2ZXaW5kb3cgKyAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NsaWRlLWluLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzbGlkZS1pbi1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCdhW2hyZWZePVwiI2NvbnN1bHRhdGlvblwiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChhbmNob3IpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCA4MDApO1xuICAgIH0pO1xuXG4gICAgJCgnYVtocmVmXj1cIiNkZXNjcmlwdGlvblwiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFuY2hvciA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChhbmNob3IpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCA4MDApO1xuICAgIH0pO1xuXG4gICAgJCgnYVtocmVmXj1cIiNleGFtcGxlXCJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYW5jaG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGFuY2hvcikub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDgwMCk7XG4gICAgfSk7XG5cbiAgICAkKCdhW2hyZWZePVwiI3NlcnZpY2VcIl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhbmNob3IgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoYW5jaG9yKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgODAwKTtcbiAgICB9KTtcbn0pOyJdfQ==
