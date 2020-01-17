ScrollReveal().reveal('.home--caption-h1', { delay: 600 });
ScrollReveal().reveal('.home--caption-h3', { delay: 1200 });
ScrollReveal().reveal('.about-header', { delay: 600 });
ScrollReveal().reveal('.about-img', { delay: 600 });
ScrollReveal().reveal('.feature-header', { delay: 600 });
ScrollReveal().reveal('.card', { delay: 1200 });
ScrollReveal().reveal('.special', { delay: 900 });
ScrollReveal().reveal('.quota-blackquote', { delay: 600 });
ScrollReveal().reveal('#client .client-item', { delay: 600 });
ScrollReveal().reveal('.client-header', { delay: 600 });
ScrollReveal().reveal('.contact-icon', { delay: 600 });

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.bg-dark').css({ opacity: '1' });
    } else {
      $('.bg-dark').css({ opacity: '0.5' });
    }
  });
});
