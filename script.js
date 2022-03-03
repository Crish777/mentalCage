let burger, siteHeader, rightContentHeader, itemNav, btnForm, nameInput, lastName, email, phone, message, inputs;

document.addEventListener('DOMContentLoaded',function(){
    
    createVars();
    listeners();

    AOS.init({
        offset: 0
    });

    google.maps.event.addDomListener(window, 'load', init);

});

function init() {
    // Basic options for a simple Google Map
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 19,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(4.821946986184581, -74.35444045687933), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "all",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "color": "#e0dfe0"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#a8a9a8"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#5b5b5a"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(4.821946986184581, -74.35444045687933),
        map: map,
        title: 'MentalCage',
        // icon: 'https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_960_720.png
        // icon: '..img/logo.svg'
    });
}

function createVars(){
    
    burger = document.querySelector(".burger");
    rightContentHeader = document.querySelector(".rightContentHeader");
    itemNav = $(".itemNav");
    btnForm = document.getElementById('btnForm');
    nameInput = document.getElementById('name');
    lastName = document.getElementById('lastName');
    email = document.getElementById('email');
    phone = document.getElementById('phone');
    message = document.getElementById('message');
    inputs = document.querySelectorAll('inputs')

   
}

function listeners(){

    // btnForm.addEventListener("click", function(e){
    //     e.preventDefault();
    //     inputs.forEach(function(i){if(i.value === "" || i.value === undefined || i.value === null){
    //         errorText.addClass("show");
    //     }})
    //     window.open('mailto:cristhianeleden@gmail.com?subject=Solicitud%3ADe%3AInformacion&body=lkajsdfklashdfjkh');
    // })


    burger.addEventListener('click',function(){
        console.log(burger);
        if(rightContentHeader.classList.contains('active')){
            rightContentHeader.classList.remove('active');
            burger.classList.remove('active');
        }else{
            rightContentHeader.classList.add('active');
            burger.classList.add('active');
        }
    })

    itemNav.click(function(e){

        itemNav.removeClass('active');
        $(this).addClass('active');
        
        rightContentHeader.classList.remove('active');
        burger.classList.remove('active');
        e.preventDefault();
        let dataId = $(this).attr("href");
        if(dataId){
            if(window.innerWidth <= 768){
                setTimeout(() => {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(dataId).offset().top - 80
                    }, 700, "linear");
                }, 1000);
            }else{
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(dataId).offset().top - 80
                }, 700, "linear");
            }
            
        }
    });

    $('.slideTestimonials').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: ture,
        autoplaySpeed: 4000
      });
}

