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

document.querySelectorAll('.catalog-lang__img').forEach(function(tabsLang) {
  tabsLang.addEventListener('click', function(LangList) {
    const path = LangList.currentTarget.dataset.path
    document.querySelectorAll('.catalog-lang__btn').forEach(function (tabNone) {      
      tabNone.classList.remove('catalog-lang__btn-click')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog-lang__btn-click')
  })
})


document.querySelector('.events__btn').addEventListener('click', function () {
  document.querySelectorAll('.events__blockelem').forEach(function (vi) {
    vi.classList.add('events__blockelem_inline-block')
  }),
    document.querySelector('#events__btn1').classList.add('events__blockelem_inline-block1')
})

var mySwiper = new Swiper('.start_swiper-container', {
  direction: 'horizontal',
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
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34
    },
    1200: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 25
    },
    1440: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 25
    },
    1920: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50
    }
  }
})

if (document.documentElement.clientWidth > 767) {
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
    breakpoints: {
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 50
      },
      1440: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 50
      }
    }
  })
};

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
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 34
    },
    1024: {

      spaceBetween: 50
    },
    1440: {
      slidesPerView: 3,
      slidesPerColumn: 1,

    }
  }
})

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

document.querySelectorAll('.catalog-accordion__name').forEach(function(tabsPerson) {
  tabsPerson.addEventListener('click', function(PersonList) {
    const path = PersonList.currentTarget.dataset.path
    document.querySelectorAll('.person').forEach(function (tabnone) {
      tabnone.classList.add('person__none')
      tabnone.classList.remove('person_vision')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('person_vision')
  })
})


document.getElementById('header__search').onclick = function () {
  document.getElementById('header__form').classList.toggle('header__form-active');
}
document.getElementById('header__burger').onclick = function () {
  document.getElementById('header__nav').classList.toggle('header__nav-active');
  document.getElementById('header__link').classList.toggle('header__link-active');
};


// document.querySelectorAll('.header-catalog__btn').forEach(function (tabsHeader) {
//   tabsHeader.addEventListener('click', function(HeaderList) {
//     const path = HeaderList.currentTarget.dataset.path
//     document.querySelectorAll('.header-catalog__list').forEach(function (tabactive) {    
//      if (`[data-target!="${path}"]`) {
//       tabactive.classList.remove('header_bot-active')
//     }
    //  if(this.classList.contains('active'))
      // tabactive.classList.remove('header_bot-active')  

    // });
    // document.querySelectorAll('.header-catalog__btn').forEach(function (tabactive) {      
    //   tabactive.classList.remove('header-catalog__btn-active')      
    // });
    // document.querySelector(`[data-target = "${path}"]`).classList.remove('header_bot-active')
    // document.querySelector(`[data-path = "${path}"]`).classList.remove('header-catalog__btn-active') 

//     document.querySelector(`[data-target="${path}"]`).classList.toggle('header_bot-active')
//     document.querySelector(`[data-path="${path}"]`).classList.toggle('header-catalog__btn-active')    
//   })
// })


  // document.getElementById('catalog__btn1').onclick = function () {
  //   document.querySelector('#catalog__list1').classList.toggle('header_bot-active')
  //   document.querySelector('#catalog__btn1').classList.toggle('header-catalog__btn-active')
  // }


// Закройте выпадающее меню, если пользователь щелкает за его пределами
// window.onclick = function(event) {
//   if (!event.target.matches('#catalog__btn1') && !event.target.matches('#catalog__list1')) {
//     var dropdowns = document.getElementsByClassName('header-catalog__list');
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('header_bot-active')) {
//         openDropdown.classList.remove('header_bot-active');
//       }
//     }
//   }
  // if (!event.target.matches('#catalog__btn1')) {
  //   var dropdowns = document.getElementsByClassName('header-catalog');
  //   var i;
  //   for (i = 0; i < dropdowns.length; i++) {
  //     var openDropdown = dropdowns[i];
  //     if (openDropdown.classList.contains('header-catalog__btn-active')) {
  //       openDropdown.classList.remove('header-catalog__btn-active');
  //     }
  //   }
  // }
// } 

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
