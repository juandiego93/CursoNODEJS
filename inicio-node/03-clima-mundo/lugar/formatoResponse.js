const arrayResponse = [
    {
        id: 'place.6089854572752850',
        type: 'Feature',
        place_type: ['region', 'place'],
        relevance: 1,
        properties: { wikidata: 'Q2841', short_code: 'CO-DC' },
        text: 'Bogotá',
        place_name: 'Bogotá, Colombia',
        bbox: [
            -74.4507139777215,
            3.73063205929566,
            -73.9861250427296,
            4.83679396872674
        ],
        center: [-74.08083, 4.59889],
        geometry: { type: 'Point', coordinates: [Array] },
        context: [[Object]]
    },
    {
        id: 'place.6069435214623770',
        type: 'Feature',
        place_type: ['place'],
        relevance: 1,
        properties: { wikidata: 'Q890659' },
        text: 'Bogota',
        place_name: 'Bogota, New Jersey, United States',
        bbox: [
            -74.039788009995,
            40.8655597930264,
            -74.0207840050699,
            40.8846390104951
        ],
        center: [-74.0299, 40.8762],
        geometry: { type: 'Point', coordinates: [Array] },
        context: [[Object], [Object]]
    },
    {
        id: 'poi.231928334491',
        type: 'Feature',
        place_type: ['poi'],
        relevance: 1,
        properties: {
            foursquare: '45aa8486f964a52035411fe3',
            landmark: true,
            address: '141 5th Ave',
            category: 'empanada, latin american restaurant, latin american food, restaurant'
        },
        text: 'Bogota Latin Bistro',
        place_name: 'Bogota Latin Bistro, 141 5th Ave, New York, New York 11217, United States',
        center: [-73.979215, 40.678119],
        geometry: { coordinates: [Array], type: 'Point' },
        context: [[Object], [Object], [Object], [Object], [Object], [Object]]
    },
    {
        id: 'poi.25769806385',
        type: 'Feature',
        place_type: ['poi'],
        relevance: 1,
        properties: {
            foursquare: '4ba992b9f964a5204d2f3ae3',
            landmark: true,
            address: 'Calle 100 # 18A - 30',
            category: 'hotel bar, bar, alcohol'
        },
        text: 'Bogotá Plaza Summit Hotel',
        place_name: 'Bogotá Plaza Summit Hotel, Calle 100 # 18A - 30, Bogotá Colombia',
        center: [-74.051471, 4.686042],
        geometry: { coordinates: [Array], type: 'Point' },
        context: [[Object], [Object]]
    },
    {
        id: 'poi.807453860751',
        type: 'Feature',
        place_type: ['poi'],
        relevance: 1,
        properties: {
            foursquare: '4f312ff2e4b0195891ecacf8',
            landmark: true,
            category: 'government agency, office'
        },
        text: 'DIAN',
        place_name: 'DIAN, Bogotá Colombia',
        matching_text: 'Bogota',
        matching_place_name: 'Bogota, Bogotá Colombia',
        center: [-74.072487, 4.602199],
        geometry: { coordinates: [Array], type: 'Point' },
        context: [[Object], [Object]]
    }
]

const objResponse = [{
    id: 'place.6089854572752850',
    type: 'Feature',
    place_type: ['region', 'place'],
    relevance: 1,
    properties: { wikidata: 'Q2841', short_code: 'CO-DC' },
    text: 'Bogotá',
    place_name: 'Bogotá, Colombia',
    bbox: [
        -74.4507139777215,
        3.73063205929566,
        -73.9861250427296,
        4.83679396872674
    ],
    center: [-74.08083, 4.59889],
    geometry: { type: 'Point', coordinates: [-74.08083, 4.59889] },
    context: [
        {
            id: 'country.12227578366646840',
            wikidata: 'Q739',
            short_code: 'co',
            text: 'Colombia'
        }
    ]
}]