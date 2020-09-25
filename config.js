var config = {
    style: 'mapbox://styles/romy-li/ckfhkqe9z0gcl19mnrc1l29oa',
    accessToken: 'pk.eyJ1Ijoicm9teS1saSIsImEiOiJjazl0d21tdTQwOHVpM21ueWQ0YjVrbnY0In0.ZDtMMYFOxCjdDeYHr1cU6g',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'Earthquake Zones Around the World',
    subtitle: 'I will take you on a tour to learn about the most significant earthquakes in human history',
    byline: 'By a geology lover',
    footer: 'Source: USGS',
    chapters: [
        {
            id: 'Zone_1',
            title: 'Japan',
            // image: './path/to/image/source.png',
            description: 'Japan is one of the most earthquake-stricken area in the world',
            location: {
                center: [139.26042, 35.92579],
                zoom: 5.77,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'zone_2',
            title: 'Indonesia',
            // image: './path/to/image/source.png',
            description: 'As a earthquake hotspot, Indonesia has had more than 150 earthquakes with magnitude > 7 in the period 1901–2017',
            location: {
                center: [98.74092, -0.89802],
                zoom: 6.27,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
