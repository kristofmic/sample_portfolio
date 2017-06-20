$(function handleReady() {

  (function handleSmoothScrollLinks() {
    var $link = $('.smooth-scroll-link');
    var $htmlBody = $('html, body');


    function handleLinkClick(e) {
      e.preventDefault();

      var href = this.getAttribute('href');

      scrollTo(href, 56 + 16);
    }

    function scrollTo(ref, offsetTop) {
      var top = 0;
      offsetTop = offsetTop || 0;

      if (ref !== '#') {
        top = $(ref).offset().top;
      }

      $htmlBody.animate({
        scrollTop: Math.max(top - offsetTop, 0)
      }, 500);
    }

    $link.click(handleLinkClick);
  })();


  (function handleStickyNav() {
    var $nav = $('.navbar');
    var isNavSticky = false;
    var STICKY_NAV_TRIGGER_POINT = 56 * 3;
    var NAV_TRANSITION_DURATION = 200;

    function transitionInStickyNav() {
      $nav.addClass('fixed-top bg-white bs-2-15');

      setTimeout(function() {
        $nav.addClass('is-transitioning fixed-top-sticky');

        setTimeout(function() {
          $nav.removeClass('is-transitioning');
        }, NAV_TRANSITION_DURATION);
      }, 0);

      isNavSticky = true;
    }

    function transitionOutStickyNav() {
      $nav.removeClass('fixed-top fixed-top-sticky');
      $nav.addClass('is-transitioning');

      setTimeout(function() {
        $nav.removeClass('bg-white bs-2-15');

        setTimeout(function() {
          $nav.removeClass('is-transitioning');
        }, NAV_TRANSITION_DURATION);
      }, 0);

      isNavSticky = false;
    }

    function handleScroll(e) {
      if (!isNavSticky && window.scrollY >= STICKY_NAV_TRIGGER_POINT) {
        transitionInStickyNav();
      } else if (isNavSticky && window.scrollY < 1) {
        transitionOutStickyNav();
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  })();
});