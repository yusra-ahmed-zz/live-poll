mapboxgl.accessToken = 'pk.eyJ1IjoieXVzcmEiLCJhIjoiY2l6N2kwZGNhMDBoYzMybnlzcjd3cnJ6bSJ9.y0W2AKBv_pQIwr-Q-wJ9xg';
var maps = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-122.431297, 37.773972],
    zoom: 12
    });
maps.on('load', function () {
    maps.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.432893,37.797777]
                    },
                    "properties": {
                        "title": "Palm House",
                        "icon": "restaurant"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.418055,37.750888]
                    },
                    "properties": {
                        "title": "La Taqueria",
                        "icon": "restaurant"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.419255,37.756440]
                    },
                    "properties": {
                        "title": "Foreign Cinema",
                        "icon": "restaurant"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.412275,37.788067]
                    },
                    "properties": {
                        "title": "Fino Ristorante",
                        "icon": "restaurant"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.433719,37.787719]
                    },
                    "properties": {
                        "title": "Roam",
                        "icon": "restaurant"
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
});
maps.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

function restaurantMap() {
    $('#restaurant-map').show();
    maps.resize();
}

$('#restaurant-map').on('shown.bs.modal', function() {
    maps.resize();
});