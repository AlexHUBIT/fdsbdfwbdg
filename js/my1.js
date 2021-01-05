



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

    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 20,
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

  });
  $(".person_accordion").accordion("refresh");
});



document.getElementById('btn_img1').onclick = function () {
  document.getElementById('btn_1').classList.add('catalog_btn-click');
  document.getElementById('btn_2').classList.remove('catalog_btn-click');
  document.getElementById('btn_3').classList.remove('catalog_btn-click');
  document.getElementById('btn_4').classList.remove('catalog_btn-click');
  document.getElementById('btn_5').classList.remove('catalog_btn-click');
}
document.getElementById('btn_img2').onclick = function () {
  document.getElementById('btn_2').classList.add('catalog_btn-click');
  document.getElementById('btn_1').classList.remove('catalog_btn-click');
  document.getElementById('btn_3').classList.remove('catalog_btn-click');
  document.getElementById('btn_4').classList.remove('catalog_btn-click');
  document.getElementById('btn_5').classList.remove('catalog_btn-click');
}
document.getElementById('btn_img3').onclick = function () {
  document.getElementById('btn_3').classList.add('catalog_btn-click');
  document.getElementById('btn_2').classList.remove('catalog_btn-click');
  document.getElementById('btn_1').classList.remove('catalog_btn-click');
  document.getElementById('btn_4').classList.remove('catalog_btn-click');
  document.getElementById('btn_5').classList.remove('catalog_btn-click');
}
document.getElementById('btn_img4').onclick = function () {
  document.getElementById('btn_4').classList.add('catalog_btn-click');
  document.getElementById('btn_2').classList.remove('catalog_btn-click');
  document.getElementById('btn_3').classList.remove('catalog_btn-click');
  document.getElementById('btn_1').classList.remove('catalog_btn-click');
  document.getElementById('btn_5').classList.remove('catalog_btn-click');
}
document.getElementById('btn_img5').onclick = function () {
  document.getElementById('btn_5').classList.add('catalog_btn-click');
  document.getElementById('btn_2').classList.remove('catalog_btn-click');
  document.getElementById('btn_3').classList.remove('catalog_btn-click');
  document.getElementById('btn_4').classList.remove('catalog_btn-click');
  document.getElementById('btn_1').classList.remove('catalog_btn-click');
}


var mySwiper = new Swiper('.swiper-container1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


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
    document.querySelector('#elem_none4').classList.add('blockelem_inline-block'),
    document.querySelector('#events_btn1').classList.add('blockelem_inline-block1')
})




if (document.documentElement.clientWidth > 1439) {
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
if (document.documentElement.clientWidth < 1440 && document.documentElement.clientWidth > 1023) {
  var mySwiper = new Swiper('.public_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 2,
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

if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth > 767) {
  var mySwiper = new Swiper('.public_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows

    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 34,
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

if (document.documentElement.clientWidth > 1439) {
  var mySwiper = new Swiper('.project_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,

    navigation: {
      nextEl: '.project_swiper-next',
      prevEl: '.project_swiper-prev',
    },
  })
}

if (document.documentElement.clientWidth < 1440 && document.documentElement.clientWidth > 1023) {
  var mySwiper = new Swiper('.project_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,

    navigation: {
      nextEl: '.project_swiper-next',
      prevEl: '.project_swiper-prev',
    },
  })
}

if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1024) {
  var mySwiper = new Swiper('.project_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    slidesPerView: 2,
    slidesPerColumn: 1,
    spaceBetween: 34,
    loop: true,

    navigation: {
      nextEl: '.project_swiper-next',
      prevEl: '.project_swiper-prev',
    },
  })
}

if (document.documentElement.clientWidth < 768) {
  var mySwiper = new Swiper('.project_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,

    navigation: {
      nextEl: '.project_swiper-next',
      prevEl: '.project_swiper-prev',
    },
  })
}




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



document.getElementById('search_btn').onclick = function () {
  document.getElementById('header_form').classList.toggle('header_bot_form-active');
}

document.getElementById('burger_btn').onclick = function () {
  document.getElementById('menu_link').classList.toggle('header_nav-active');
  document.getElementById('header_link').classList.toggle('header_link-active');
}


if (document.documentElement.clientWidth < 768) {
  var mySwiper = new Swiper('.events_swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 50,
    loop: true,
    // grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,

    },

  })
};

document.getElementById('header_bot_click1').onclick = function () {
  document.getElementById('header_bot-ul1').classList.toggle('header_bot-active');
  document.getElementById('header_bot-ul2').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul3').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul4').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul5').classList.remove('header_bot-active');
};

document.getElementById('header_bot_click2').onclick = function () {
  document.getElementById('header_bot-ul1').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul2').classList.toggle('header_bot-active');
  document.getElementById('header_bot-ul3').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul4').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul5').classList.remove('header_bot-active');
};

document.getElementById('header_bot_click3').onclick = function () {
  document.getElementById('header_bot-ul1').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul2').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul3').classList.toggle('header_bot-active');
  document.getElementById('header_bot-ul4').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul5').classList.remove('header_bot-active');
};

document.getElementById('header_bot_click4').onclick = function () {
  document.getElementById('header_bot-ul1').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul2').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul3').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul4').classList.toggle('header_bot-active');
  document.getElementById('header_bot-ul5').classList.remove('header_bot-active');
};

document.getElementById('header_bot_click5').onclick = function () {
  document.getElementById('header_bot-ul1').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul2').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul3').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul4').classList.remove('header_bot-active');
  document.getElementById('header_bot-ul5').classList.toggle('header_bot-active');
};

document.getElementById('public_title').onclick = function () {
  document.getElementById('public_title').classList.toggle('public_title_active');
  document.querySelectorAll('.check').forEach(function (no_vis) {
    no_vis.classList.toggle('check_active')
  })

};

$(document).ready(function () {
  $("#menu_link").on("click", "a", function (event) {
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
