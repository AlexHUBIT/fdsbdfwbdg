if (document.documentElement.clientWidth > 1919) {
  var mySwiper = new Swiper('.start_swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: '.start__swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start__swiper-next',
      prevEl: '.start__swiper-prev',
    },
    a11y: {
      prevSlideMessage: 'Кнопка предыдущий слайд',
      nextSlideMessage: 'Кнопка следующий слайд',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
}
if (document.documentElement.clientWidth < 1920 && document.documentElement.clientWidth > 1439) {
  var mySwiper = new Swiper('.start_swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: '.start__swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start__swiper-next',
      prevEl: '.start__swiper-prev',
    },
    a11y: {
      prevSlideMessage: 'Кнопка предыдущий слайд',
      nextSlideMessage: 'Кнопка следующий слайд',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
}
if (document.documentElement.clientWidth < 1440 && document.documentElement.clientWidth > 1199) {
  var mySwiper = new Swiper('.start_swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: '.start__swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start__swiper-next',
      prevEl: '.start__swiper-prev',
    },
    a11y: {
      prevSlideMessage: 'Кнопка предыдущий слайд',
      nextSlideMessage: 'Кнопка следующий слайд',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
}
if (document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth > 767) {
  var mySwiper = new Swiper('.start_swiper-container', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 34,
    loop: true,
    pagination: {
      el: '.start__swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start__swiper-next',
      prevEl: '.start__swiper-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
}
if (document.documentElement.clientWidth < 768 && document.documentElement.clientWidth > 479) {
  var mySwiper = new Swiper('.start_swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.start__swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start__swiper-next',
      prevEl: '.start__swiper-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
}
if (document.documentElement.clientWidth < 480) {
  var mySwiper = new Swiper('.start_swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.start__swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start__swiper-next',
      prevEl: '.start__swiper-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
};
$(function () {
  $("#accordion").accordion();
  $("#dialog-link, #icons li").hover(
    function () {
      $(this).addClass("ui-state-hover");
    },
    function () {
      $(this).removeClass("ui-state-hover");
    }
  );
  $(".catalog__accordion").accordion({
    classes: {
      "ui-accordion": "highlight",
      "ui-accordion-header": "section4-h3",
      "ui-accordion-header-collapsed": "ui-corner-all",
      "ui-accordion-content": "ui-corner-bottom"
    },
    collapsible: true,
    heightStyle: "content",
  });
  $(".catalog__accordion").accordion("refresh");
});
document.getElementById('catalog-lang__img1').onclick = function () {
  document.getElementById('catalog-lang__btn1').classList.add('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn2').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn3').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn4').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn5').classList.remove('catalog-lang__btn-click');
}
document.getElementById('catalog-lang__img2').onclick = function () {
  document.getElementById('catalog-lang__btn2').classList.add('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn1').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn3').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn4').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn5').classList.remove('catalog-lang__btn-click');
}
document.getElementById('catalog-lang__img3').onclick = function () {
  document.getElementById('catalog-lang__btn3').classList.add('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn2').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn1').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn4').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn5').classList.remove('catalog-lang__btn-click');
}
document.getElementById('catalog-lang__img4').onclick = function () {
  document.getElementById('catalog-lang__btn4').classList.add('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn2').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn3').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn1').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn5').classList.remove('catalog-lang__btn-click');
}
document.getElementById('catalog-lang__img5').onclick = function () {
  document.getElementById('catalog-lang__btn5').classList.add('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn2').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn3').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn4').classList.remove('catalog-lang__btn-click');
  document.getElementById('catalog-lang__btn1').classList.remove('catalog-lang__btn-click');
}

document.querySelector('.events__btn').addEventListener('click', function () {
  document.querySelector('#elem_none1').classList.add('events__blockelem_inline-block'),
    document.querySelector('#elem_none2').classList.add('events__blockelem_inline-block'),
    document.querySelector('#elem_none3').classList.add('events__blockelem_inline-block'),
    document.querySelector('#elem_none4').classList.add('events__blockelem_inline-block'),
    document.querySelector('#events__btn1').classList.add('events__blockelem_inline-block1')
})
if (document.documentElement.clientWidth > 1439) {
  var mySwiper = new Swiper('.public__swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',      
    },
    a11y: {
      prevSlideMessage: 'Кнопка предыдущий слайд',
      nextSlideMessage: 'Кнопка следующий слайд',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
};
if (document.documentElement.clientWidth < 1440 && document.documentElement.clientWidth > 1023) {
  var mySwiper = new Swiper('.public__swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    a11y: {
      prevSlideMessage: 'Кнопка предыдущий слайд',
      nextSlideMessage: 'Кнопка следующий слайд',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
};
if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth > 767) {
  var mySwiper = new Swiper('.public__swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 34,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
};
if (document.documentElement.clientWidth > 1439) {
  var mySwiper = new Swiper('.project__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,
    navigation: {
      nextEl: '.project__swiper-next',
      prevEl: '.project__swiper-prev',
    },
    a11y: {
      prevSlideMessage: 'Кнопка предыдущий слайд',
      nextSlideMessage: 'Кнопка следующий слайд',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
}
if (document.documentElement.clientWidth < 1440 && document.documentElement.clientWidth > 1023) {
  var mySwiper = new Swiper('.project__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,
    navigation: {
      nextEl: '.project__swiper-next',
      prevEl: '.project__swiper-prev',
    },
    a11y: {
      prevSlideMessage: 'Кнопка предыдущий слайд',
      nextSlideMessage: 'Кнопка следующий слайд',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
}
if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1024) {
  var mySwiper = new Swiper('.project__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 34,
    loop: true,
    navigation: {
      nextEl: '.project__swiper-next',
      prevEl: '.project__swiper-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
}
if (document.documentElement.clientWidth < 768) {
  var mySwiper = new Swiper('.project__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,
    navigation: {
      nextEl: '.project__swiper-next',
      prevEl: '.project__swiper-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
}
document.querySelector('#catalog-accordion__name1').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person1').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name2').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person2').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name3').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person3').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name4').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person4').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name5').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person5').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name6').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person6').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name7').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person7').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name8').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person8').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name9').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person9').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name10').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person10').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name11').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person11').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name12').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person12').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name13').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person13').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name14').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person14').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name15').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person15').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name16').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person16').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name17').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person17').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name18').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person18').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name19').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person19').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name20').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person20').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name21').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person21').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name22').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person22').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name23').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person23').classList.add('person_vision')
})
document.querySelector('#catalog-accordion__name24').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person__none')
    }),
    document.querySelector('#person24').classList.add('person_vision')
})
document.getElementById('header__search').onclick = function () {
  document.getElementById('header__form').classList.toggle('header__form-active');
}
document.getElementById('header__burger').onclick = function () {
  document.getElementById('header__nav').classList.toggle('header__nav-active');
  document.getElementById('header__link').classList.toggle('header__link-active');
}
if (document.documentElement.clientWidth < 768) {
  var mySwiper = new Swiper('.events__swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
};
document.getElementById('header-catalog__btn1').onclick = function () {
  document.getElementById('header-catalog__list1').classList.toggle('header_bot-active');
  document.getElementById('header-catalog__list2').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list3').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list4').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list5').classList.remove('header_bot-active');

  document.getElementById('header-catalog__btn1').classList.toggle('header-catalog__btn-active');
  document.getElementById('header-catalog__btn2').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn3').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn4').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn5').classList.remove('header-catalog__btn-active');
};
document.getElementById('header-catalog__btn2').onclick = function () {
  document.getElementById('header-catalog__list1').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list2').classList.toggle('header_bot-active');
  document.getElementById('header-catalog__list3').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list4').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list5').classList.remove('header_bot-active');

  document.getElementById('header-catalog__btn1').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn2').classList.toggle('header-catalog__btn-active');
  document.getElementById('header-catalog__btn3').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn4').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn5').classList.remove('header-catalog__btn-active');
};
document.getElementById('header-catalog__btn3').onclick = function () {
  document.getElementById('header-catalog__list1').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list2').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list3').classList.toggle('header_bot-active');
  document.getElementById('header-catalog__list4').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list5').classList.remove('header_bot-active');

  document.getElementById('header-catalog__btn1').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn2').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn3').classList.toggle('header-catalog__btn-active');
  document.getElementById('header-catalog__btn4').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn5').classList.remove('header-catalog__btn-active');
};
document.getElementById('header-catalog__btn4').onclick = function () {
  document.getElementById('header-catalog__list1').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list2').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list3').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list4').classList.toggle('header_bot-active');
  document.getElementById('header-catalog__list5').classList.remove('header_bot-active');

  document.getElementById('header-catalog__btn1').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn2').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn3').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn4').classList.toggle('header-catalog__btn-active');
  document.getElementById('header-catalog__btn5').classList.remove('header-catalog__btn-active');
};
document.getElementById('header-catalog__btn5').onclick = function () {
  document.getElementById('header-catalog__list1').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list2').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list3').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list4').classList.remove('header_bot-active');
  document.getElementById('header-catalog__list5').classList.toggle('header_bot-active');

  document.getElementById('header-catalog__btn1').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn2').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn3').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn4').classList.remove('header-catalog__btn-active');
  document.getElementById('header-catalog__btn5').classList.toggle('header-catalog__btn-active');
};
document.getElementById('public__title1').onclick = function () {
  document.getElementById('public__title1').classList.toggle('public__title1-active');
  document.querySelectorAll('.check').forEach(function (no_vis) {
    no_vis.classList.toggle('check_active')
  })
};
$(document).ready(function () {
  $("#header__nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1300);
  });
});
$(document).ready(function () {
  $("#hero").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1300);
  });
});
