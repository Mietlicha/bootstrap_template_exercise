ScrollReveal().reveal('.about-header', { delay: 300 });
ScrollReveal().reveal('.about-img', { delay: 300 });
ScrollReveal().reveal('.feature-header', { delay: 300 });
ScrollReveal().reveal('.card', { delay: 600 });
ScrollReveal().reveal('.special', { delay: 300 });
ScrollReveal().reveal('.quota-blackquote', { delay: 300 });
ScrollReveal().reveal('#client .client-item', { delay: 300 });
ScrollReveal().reveal('.client-header', { delay: 300 });
ScrollReveal().reveal('.contact-icon', { delay: 300 });

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.bg-dark').css({ opacity: '1' });
    } else {
      $('.bg-dark').css({ opacity: '0.5' });
    }
  });
});
