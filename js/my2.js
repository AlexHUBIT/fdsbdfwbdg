ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("myMap", {
        center: [55.758016, 37.600259],
        zoom: 14
    });

    var myPlacemark = new ymaps.Placemark([55.758016, 37.600259], {}, {
        type: "Point",
        iconLayout: 'default#image',
        iconImageHref: '/img/yamap.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });
    myMap.geoObjects.add(myPlacemark);
}



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

// Array.prototype.forEach.call(
//     document.querySelectorAll('.header_bot_selects'),
//     el => new SimpleBar()
//   );

// const div = document.querySelector('.choices__list--dropdown');
// div.setAttribute('data-simplebar', 'init');
// // jQuery
// $('.choices__list--dropdown').attr('data-simplebar', 'init');
// var b = document.querySelector(".choices__list");
// b.setAttribute("data-simplebar", "init");

// $('.header_bot_selects').each(function () {
//     if ($(this).parent().css("display") != 'none') el = $(this);

//     if (el === undefined) return;

//     el.mCustomScrollbar({
//         mouseWheel:true,
//         advanced:{
//             updateOnContentResize: true
//         }
//       });
$(document).ready(function () {
    $("select").select2({ minimumResultsForSearch: -1 });

    $(document).on("select2-open", "select", function () {
        var el;
        $('.select2-results').each(function () {
           var api = $(this).data('jsp');
           
            if (api !== undefined) api.destroy();
        });

        $('.select2-results').each(function () {
            if ($(this).parent().css("display") != 'none') el = $(this);

            if (el === undefined) return;

            el.mCustomScrollbar({
                mouseWheel:true,
                advanced:{
                    updateOnContentResize: true
                }
              });
        });
    });
});