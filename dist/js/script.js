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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const data = [{
  "name": "Эммануил Ласкер",
  "status": "Чемпион мира по шахматам"
}, {
  "name": "Александр Алехин",
  "status": "Чемпион мира по шахматам"
}, {
  "name": "Арон Нимцович",
  "status": "Чемпион мира по шахматам"
}, {
  "name": "Рихард Рети",
  "status": "Чемпион мира по шахматам"
}, {
  "name": "Остап Бендер",
  "status": "Гроссмейстер"
}, {
  "name": "Хозе-Рауль Капабланка",
  "status": "Чемпион мира по шахматам"
}];
window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll(".slider__item"),
        dotsStages = document.querySelector('.slider__indicators'),
        prev = document.querySelector(".slider__prev"),
        next = document.querySelector(".slider__next"),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        plansWrapper = document.querySelector(".slider__wrapper"),
        plansInner = document.querySelector(".slider__inner"),
        plansWidth = window.getComputedStyle(plansWrapper).width,
        slidesWrapper = document.querySelector(".slider-participants__wrapper"),
        slidesInner = document.querySelector(".slider-participants__inner"),
        width = window.getComputedStyle(slidesWrapper).width,
        height = window.getComputedStyle(slidesWrapper).height,
        before = document.querySelector(".slider__prev-top"),
        after = document.querySelector(".slider__next-top"),
        beforeSmall = document.querySelector(".slider__prev-bottom"),
        afterSmall = document.querySelector(".slider__next-bottom"),
        currentSmall = document.querySelector('#current-bottom'),
        totalSmall = document.querySelector('#total-bottom');
  let activeSlide = 0;
  slidesInner.style.width = 3 * +width.slice(0, width.length - 2) + 40 + 'px';
  slidesInner.style.height = +height.slice(0, height.length - 2) + 'px';
  slidesInner.style.left = '-' + width.slice(0, width.length - 2) + 'px';
  current.textContent = 3;
  currentSmall.textContent = activeSlide + 1;
  total.textContent = data.length;
  totalSmall.textContent = data.length;
  let flag = true;

  const initSlider = () => {
    const item = document.createElement('div');
    item.classList.add("slider-participants__item");
    const imageItem = document.createElement('div');
    imageItem.classList.add("slider-participants__image");
    const img = document.createElement('img');
    img.alt = "participant";
    img.src = "../img/participant.png";
    imageItem.append(img);
    const itemName = document.createElement('div');
    itemName.classList.add("slider-participants__name");
    itemName.textContent = `${data[activeSlide].name}`;
    const itemStatus = document.createElement('div');
    itemStatus.classList.add("slider-participants__status");
    itemStatus.textContent = `${data[activeSlide].status}`;
    const itemButton = document.createElement('button');
    itemButton.classList.add("slider-participants__button");
    itemButton.textContent = "Подробнее";
    item.append(imageItem);
    item.append(itemName);
    item.append(itemStatus);
    item.append(itemButton);
    slidesInner.append(item);
    nextSliderCreate();
    prevSlideCreate();
  };

  const nextSliderCreate = () => {
    let nextSlide = activeSlide + 1;
    if (nextSlide == data.length) nextSlide = 0;
    const item = document.createElement('div');
    item.classList.add("slider-participants__item");
    const imageItem = document.createElement('div');
    imageItem.classList.add("slider-participants__image");
    const img = document.createElement('img');
    img.alt = "participant";
    img.src = "../img/participant.png";
    imageItem.append(img);
    const itemName = document.createElement('div');
    itemName.classList.add("slider-participants__name");
    itemName.textContent = `${data[nextSlide].name}`;
    const itemStatus = document.createElement('div');
    itemStatus.classList.add("slider-participants__status");
    itemStatus.textContent = `${data[nextSlide].status}`;
    const itemButton = document.createElement('button');
    itemButton.classList.add("slider-participants__button");
    itemButton.textContent = "Подробнее";
    item.append(imageItem);
    item.append(itemName);
    item.append(itemStatus);
    item.append(itemButton);
    slidesInner.append(item);
  };

  const prevSlideCreate = (w = false) => {
    let prevSlide = activeSlide - 1;
    if (prevSlide < 0) prevSlide = data.length - 1;
    const item = document.createElement('div');
    item.classList.add("slider-participants__item");
    const imageItem = document.createElement('div');
    imageItem.classList.add("slider-participants__image");
    const img = document.createElement('img');
    img.alt = "participant";
    img.src = "../img/participant.png";
    imageItem.append(img);
    const itemName = document.createElement('div');
    itemName.classList.add("slider-participants__name");
    itemName.textContent = `${data[prevSlide].name}`;
    const itemStatus = document.createElement('div');
    itemStatus.classList.add("slider-participants__status");
    itemStatus.textContent = `${data[prevSlide].status}`;
    const itemButton = document.createElement('button');
    itemButton.classList.add("slider-participants__button");
    itemButton.textContent = "Подробнее";
    item.append(imageItem);
    item.append(itemName);
    item.append(itemStatus);
    item.append(itemButton);
    if (w) item.style.width = 0;
    slidesInner.prepend(item);
  };

  const nextSlide = () => {
    if (!flag) return;
    flag = !flag;
    activeSlide++;
    if (activeSlide >= data.length) activeSlide = 0;

    if (activeSlide == 3) {
      current.textContent = 1;
    } else {
      current.textContent++;
    }

    if (activeSlide == 5) {
      currentSmall.textContent = 1;
    } else {
      currentSmall.textContent++;
    }

    nextSliderCreate();
    animate({
      duration: 1000,
      draw: function (progress) {
        document.querySelector('.slider-participants__inner div').style.width = +width.slice(0, width.length - 2) * (1 - progress) + 'px';
      },
      removeElement: document.querySelector('.slider-participants__inner div')
    });
  };

  let timer = 0;
  makeTimer();

  function makeTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
      nextSlide();
    }, 4000);
  }

  const prevSlide = () => {
    if (!flag) return;
    flag = !flag;
    activeSlide--;
    if (activeSlide < 0) activeSlide = data.length - 1;

    if (activeSlide == 3) {
      current.textContent = 6;
    } else {
      current.textContent--;
    }

    if (activeSlide == 5) {
      currentSmall.textContent = 6;
    } else {
      currentSmall.textContent--;
    }

    prevSlideCreate(true);
    animate({
      duration: 1000,
      draw: function (progress) {
        document.querySelector('.slider-participants__inner div').style.width = +width.slice(0, width.length - 2) * progress + 'px';
      },
      removeElement: document.querySelector('.slider-participants__inner div:last-child')
    });
  };

  initSlider();
  after.addEventListener('click', () => {
    nextSlide();
  });
  afterSmall.addEventListener('click', () => {
    nextSlide();
  });
  before.addEventListener('click', () => {
    prevSlide();
  });
  beforeSmall.addEventListener('click', () => {
    prevSlide();
  });

  const animate = ({
    duration,
    draw,
    removeElement
  }) => {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      let step = (time - start) / duration;
      if (step > 1) step = 1;
      draw(step);

      if (step < 1) {
        requestAnimationFrame(animate);
      } else {
        removeElement.remove();
        flag = true;
      }
    });
  }; //====Слайдер мероприятий======


  let slideIndex = 1;
  let offsetPlans = 0;
  next.disabled = false;
  prev.disabled = true;
  const dots = [];
  plansInner.style.width = 100 * slides.length + '%';
  slides.forEach(slide => {
    slide.style.width = plansWidth;
  });

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');

    if (i == 0) {
      dot.classList.add('dot-active');
    }

    dotsStages.append(dot);
    dots.push(dot);
  }

  function changeClass() {
    dots.forEach(dot => {
      dot.classList.remove("dot-active");
    });
    dots[slideIndex - 1].classList.add("dot-active");
  }

  next.addEventListener("click", () => {
    prev.disabled = false;

    if (offsetPlans == +plansWidth.slice(0, plansWidth.length - 2) * (slides.length - 1)) {
      offsetPlans = 0;
    } else {
      offsetPlans += +plansWidth.slice(0, plansWidth.length - 2);
    }

    plansInner.style.transform = `translateX(-${offsetPlans}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slideIndex == slides.length) {
      next.disabled = true;
    } else {
      next.disabled = false;
    }

    changeClass();
  });
  prev.addEventListener("click", () => {
    next.disabled = false;

    if (offsetPlans == 0) {
      offsetPlans = +plansWidth.slice(0, plansWidth.length - 2) * (slides.length - 1);
    } else {
      offsetPlans -= +plansWidth.slice(0, plansWidth.length - 2);
    }

    plansInner.style.transform = `translateX(-${offsetPlans}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slideIndex == 1) {
      prev.disabled = true;
    } else {
      prev.disabled = false;
    }

    console.log(offsetPlans);
    changeClass();
  });
  dots.forEach(dot => {
    dot.addEventListener("click", e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      console.log(+plansWidth.slice(0, plansWidth.length - 2) * (slideTo - 1));
      console.log(slideTo - 1);
      offsetPlans = +plansWidth.slice(0, plansWidth.length - 2) * (slideTo - 1);
      plansInner.style.transform = `translateX(-${offsetPlans}px)`;
      console.log(offsetPlans);

      if (slideIndex == 5) {
        next.disabled = true;
      } else {
        next.disabled = false;
      }

      if (slideIndex == 1) {
        prev.disabled = true;
      } else {
        prev.disabled = false;
      }

      changeClass();
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map