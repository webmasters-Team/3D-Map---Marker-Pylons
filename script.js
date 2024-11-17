// If the demo is broken, you may need to update the access token with your own. Sign up for free here: https://account.mapbox.com/auth/signup/
mapboxgl.accessToken = 'pk.eyJ1Ijoic2dtYXBib3giLCJhIjoiY2tqbHUzcnBqNTRtdDJwbnllY3lleTNkYSJ9.6jH_IYaweGsTYg7moI0XhQ';
var map = new mapboxgl.Map({
    container: 'map',
    zoom: 12,
    center: [-122.468,37.792],
    pitch: 65,
    bearing: 80,
    style: 'mapbox://styles/sgmapbox/ckjlt17xp0v5x19n2ouo34m7x'
});

map.on('load', function () {
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 2 });

    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });
});
