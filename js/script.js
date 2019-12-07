$('.myslider').slick({
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000

});
$('.Slider-2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {

            breakpoint: 995,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

let lat = 48.9226;
let lng = 24.7111;
let zoom = 20;
let mymap = L.map('mapid').setView([lat, lng], zoom);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9tYW4yMzMiLCJhIjoiY2szb3FhZXRzMGF2dDNjbzRpcGNqaTZnMiJ9.4isgKAKSzKF9rtleofR9WQ', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoicm9tYW4yMzMiLCJhIjoiY2szb3FhZXRzMGF2dDNjbzRpcGNqaTZnMiJ9.4isgKAKSzKF9rtleofR9WQ'
}).addTo(mymap);
let marker = L.marker([lat, lng]).addTo(mymap);

function goUp() {
    marker.setLatLng([lat += 0.001, lng]).update();
}

function goDown() {
    marker.setLatLng([lat -= 0.001, lng]).update();
}

function goRight() {
    marker.setLatLng([lat, lng += 0.001]).update();
}

function goLeft() {
    marker.setLatLng([lat, lng -= 0.001]).update();
}
