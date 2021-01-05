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