if (window.location.href === 'http://localhost:8080/') {
  $('.reviews__carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<img class="next-arrow" src="images/arrow_next.png"/>',
    prevArrow: '<img class="back-arrow" src="images/arrow_back.png"/>',
    dots: true
  });

  $('.news__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<img class="news-next-arrow" src="images/arrow_next.png"/>',
    prevArrow: '<img class="news-back-arrow" src="images/arrow_back.png"/>',
  });

  $('.banner__carusel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<img class="main-arrow" src="images/arrow_back_white.png"/>',
    nextArrow: ''
  });
}
else {
  //kalendar
  const url = window.location.href.split('/');
  const loadedRoom = url[url.length - 1];

  let singleRoom = [];
  let disabledDays = [];

  $.getJSON("../assets/js/home_products.json", function (json) {
    json.forEach(element => {
      if (element.slug === loadedRoom) {
        singleRoom = [...element.reserved_dates]
      }
    });
    singleRoom.forEach(elem => {
      disabledDays.push(elem.date)
    });

    new Litepicker({
      element: document.getElementById('start-date'),
      elementEnd: document.getElementById('end-date'),
      singleMode: false,
      singleMode: false,
      lockDays: disabledDays,
      disallowLockDaysInRange: true
    });

  });

  //custom inkrementi
  jQuery('<div class="quantity-nav"><button class="quantity-button quantity-up">+</button><button class="quantity-button quantity-down">-</button></div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseInt(input.val());
      if (isNaN(oldValue)) {
        oldValue = 0;
      }
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseInt(input.val());
      if (isNaN(oldValue)) {
        oldValue = 2;
      }
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  //single room slider
  document.getElementById("prev").addEventListener("click", minusSlides);
  document.getElementById("next").addEventListener("click", plusSlides);

  document.querySelectorAll('.caruselImg').forEach(item => {
    item.addEventListener('click', currentSlide)
  })

  let slideIndex = 1;
  showSlides(slideIndex);

  function minusSlides() {
    showSlides(slideIndex -= 1);
  }

  function plusSlides() {
    showSlides(slideIndex += 1);
  }

  function currentSlide(n) {
    let index = n.srcElement.dataset.itemid;
    showSlides(slideIndex = index);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("single-room__hightlighted");
    let dots = document.getElementsByClassName("caruselImg");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  $("#comment").keyup(function () {
    var characterCount = $(this).val().length;
    $("#current").text(characterCount);
  });
}


