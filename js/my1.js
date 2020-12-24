const mumultiDefault = () => {
  const elements = document.querySelectorAll('.header_bot_selects');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
      position: true,
      shouldSort: false,
      // renderChoiceLimit: 5,
      // maxItemCount: 5,
    })
  })

}
mumultiDefault();



if (document.documentElement.clientWidth > 1919) {
  var mySwiper = new Swiper('.start_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.start_swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start_swiper-next',
      prevEl: '.start_swiper-prev',
    },
  })
}


if (document.documentElement.clientWidth < 1920 && document.documentElement.clientWidth > 1439) {

  var mySwiper = new Swiper('.start_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 25,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.start_swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start_swiper-next',
      prevEl: '.start_swiper-prev',
    },
  })


}

if (document.documentElement.clientWidth < 1440 && document.documentElement.clientWidth > 1199) {
  var mySwiper = new Swiper('.start_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 25,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.start_swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start_swiper-next',
      prevEl: '.start_swiper-prev',
    },
  })
}

if (document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth > 767) {
  var mySwiper = new Swiper('.start_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 34,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.start_swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start_swiper-next',
      prevEl: '.start_swiper-prev',
    },
  })
}

if (document.documentElement.clientWidth < 768 && document.documentElement.clientWidth > 479) {
  var mySwiper = new Swiper('.start_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 10,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.start_swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start_swiper-next',
      prevEl: '.start_swiper-prev',
    },
  })
}

if (document.documentElement.clientWidth < 480) {
  var mySwiper = new Swiper('.start_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 10,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.start_swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.start_swiper-next',
      prevEl: '.start_swiper-prev',
    },
  })
};

$(function () {
  $("#accordion").accordion();

  // Hover states on the static widgets
  $("#dialog-link, #icons li").hover(
    function () {
      $(this).addClass("ui-state-hover");
    },
    function () {
      $(this).removeClass("ui-state-hover");
    }
  );


  $(".person_accordion").accordion({

    classes: {
      "ui-accordion": "highlight",
      "ui-accordion-header": "section4-h3",
      "ui-accordion-header-collapsed": "ui-corner-all",
      "ui-accordion-content": "ui-corner-bottom"
    },


    collapsible: true,
    heightStyle: "content",
    // active: false,
    // activate: function (event, ui) {
    //     if (!$.isEmptyObject(ui.newHeader.offset())) {
    //         $('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top }, 'slow');
    //     }
    // }
  });
  $(".person_accordion").accordion("refresh");
});



document.getElementById('btn_img1').onclick = function () {
  document.getElementById('btn_1').classList.toggle('catalog_btn-click');
}
document.getElementById('btn_img2').onclick = function () {
  document.getElementById('btn_2').classList.toggle('catalog_btn-click');
}
document.getElementById('btn_img3').onclick = function () {
  document.getElementById('btn_3').classList.toggle('catalog_btn-click');
}
document.getElementById('btn_img4').onclick = function () {
  document.getElementById('btn_4').classList.toggle('catalog_btn-click');
}
document.getElementById('btn_img5').onclick = function () {
  document.getElementById('btn_5').classList.toggle('catalog_btn-click');
}


var mySwiper = new Swiper('.swiper-container1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination


  // Navigation arrows

  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 50,
  loop: true,
  // grabCursor: true,

  pagination: {
    el: '.swiper-pagination1',
    type: 'fraction',
    clickable: true,
  },

})


document.querySelector('.events_btn').addEventListener('click', function () {
  document.querySelector('#elem_none1').classList.add('blockelem_inline-block'),
    document.querySelector('#elem_none2').classList.add('blockelem_inline-block'),
    document.querySelector('#elem_none3').classList.add('blockelem_inline-block'),
    document.querySelector('#events_btn1').classList.add('blockelem_inline-block1')
})




//  onclick = function () {
//   document.querySelector('.blockelem_none').style.display = 'inline-block'
//   document.getElementById('elem_none1').classList.add('blockelem_inline-block');
// document.getElementById('elem_none2').classList.add('.blockelem_inline-block');
// document.getElementById('elem_none3').classList.add('.blockelem_inline-block');
// document.getElementById('events_btn1').classList.add('.blockelem_none');

//  }

// document.querySelector('#events_btn1').addEventListener('click', function(a) {
//   a.document.querySelector('#elem_none1').classList.Add ('.blockelem_none')
// })

if (document.documentElement.clientWidth > 479) {
  var mySwiper = new Swiper('.public_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  })
};

var mySwiper = new Swiper('.project_swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination


  // Navigation arrows

  slidesPerView: 3,
  slidesPerColumn: 1,
  spaceBetween: 50,
  loop: true,
  // grabCursor: true,

  // pagination: {
  //   el: '.project_swiper-pagination',
  //   type: 'fraction',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.project_swiper-next',
    prevEl: '.project_swiper-prev',
  },
})


// document.querySelector('#list_name1').addEventListener('click', function () {  

//   document.querySelector('#person1').classList.add('person_vision')
// })




document.querySelector('#list_name1').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person1').classList.add('person_vision')

})

document.querySelector('#list_name2').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person2').classList.add('person_vision')

})

document.querySelector('#list_name3').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person3').classList.add('person_vision')

})

document.querySelector('#list_name4').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person4').classList.add('person_vision')

})

document.querySelector('#list_name5').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person5').classList.add('person_vision')

})

document.querySelector('#list_name6').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person6').classList.add('person_vision')

})

document.querySelector('#list_name7').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person7').classList.add('person_vision')

})

document.querySelector('#list_name8').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person8').classList.add('person_vision')

})

document.querySelector('#list_name9').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person9').classList.add('person_vision')

})

document.querySelector('#list_name10').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person10').classList.add('person_vision')

})

document.querySelector('#list_name11').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person11').classList.add('person_vision')

})

document.querySelector('#list_name12').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person12').classList.add('person_vision')

})

document.querySelector('#list_name13').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person13').classList.add('person_vision')

})

document.querySelector('#list_name14').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person14').classList.add('person_vision')

})

document.querySelector('#list_name15').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person15').classList.add('person_vision')

})

document.querySelector('#list_name16').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person16').classList.add('person_vision')

})

document.querySelector('#list_name17').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person17').classList.add('person_vision')

})

document.querySelector('#list_name18').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person18').classList.add('person_vision')

})

document.querySelector('#list_name19').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person19').classList.add('person_vision')

})

document.querySelector('#list_name20').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person20').classList.add('person_vision')

})

document.querySelector('#list_name21').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person21').classList.add('person_vision')

})

document.querySelector('#list_name22').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person22').classList.add('person_vision')

})

document.querySelector('#list_name23').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person23').classList.add('person_vision')

})

document.querySelector('#list_name24').addEventListener('click', function () {
  document.querySelectorAll('.person').forEach(function (vision) {
    vision.classList.remove('person_vision')
  }),
    document.querySelectorAll('.person').forEach(function (none) {
      none.classList.add('person_none')
    }),
    document.querySelector('#person24').classList.add('person_vision')

})

