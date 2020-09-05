/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/src/js/app.js":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

$(document).ready(function () {
  $('.reviews__carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<img class="next-arrow" src="images/arrow_next.png"/>',
    prevArrow: '<img class="back-arrow" src="images/arrow_back.png"/>',
    dots: true
  });
});

$(document).ready(function () {
  $('.news__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<img class="news-next-arrow" src="images/arrow_next.png"/>',
    prevArrow: '<img class="news-back-arrow" src="images/arrow_back.png"/>'
  });
});

$(document).ready(function () {
  $('.banner__carusel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<img class="main-arrow" src="images/arrow_back_white.png"/>',
    nextArrow: ''
  });
});

$(function () {
  var url = window.location.href.split('/');
  var loadedRoom = url[url.length - 1];

  var singleRoom = [];
  var disabledDays = [];

  $.getJSON("../assets/js/home_products.json", function (json) {
    var _ref;

    json.forEach(function (element) {
      if (element.slug === loadedRoom) {
        singleRoom = [].concat(_toConsumableArray(element.reserved_dates));
      }
    });
    singleRoom.forEach(function (elem) {
      disabledDays.push(elem.date);
    });

    new Litepicker((_ref = {
      element: document.getElementById('start-date'),
      elementEnd: document.getElementById('end-date'),
      singleMode: false
    }, _defineProperty(_ref, 'singleMode', false), _defineProperty(_ref, 'lockDays', disabledDays), _defineProperty(_ref, 'disallowLockDaysInRange', true), _ref));
  });
});

$(document).ready(function () {
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
});

//single room slider

$(document).ready(function () {
  document.getElementById("prev").addEventListener("click", minusSlides);
  document.getElementById("next").addEventListener("click", plusSlides);

  document.querySelectorAll('.caruselImg').forEach(function (item) {
    item.addEventListener('click', currentSlide);
  });

  var slideIndex = 1;
  showSlides(slideIndex);

  function minusSlides() {
    showSlides(slideIndex -= 1);
  }

  function plusSlides() {
    showSlides(slideIndex += 1);
  }

  function currentSlide(n) {
    var index = n.srcElement.dataset.itemid;
    showSlides(slideIndex = index);
  }

  function showSlides(n) {
    var i = void 0;
    var slides = document.getElementsByClassName("single-room__hightlighted");
    var dots = document.getElementsByClassName("caruselImg");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
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
});

/***/ }),

/***/ "./resources/assets/src/scss/main.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/src/js/app.js");
module.exports = __webpack_require__("./resources/assets/src/scss/main.scss");


/***/ })

/******/ });