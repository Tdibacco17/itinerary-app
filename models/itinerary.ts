const ItineraryData: ItineraryInterface[] = [
    {
        id: 1,
        check: false,
        title: "American Airlines",
        code: "WSNSIP",
        exit: {
            day: new Date("2025-08-10T12:00:00"),
            hour: "19:40hs",
            text: "Miami MIA",
        },
        arrival: {
            day: new Date("2025-08-11T12:00:00"),
            hour: "11:50hs",
            text: "Roma FCO",
        },
        type: "vuelo",
        seat: "30C - Economy (B)",
        suitcase: "23kg",
        hand_luggage: "56cm x 35cm x 23cm", //(largo x ancho x alto)
        next_action: [{
            text: 'Caminar hasta el tren - Roma Fiumicino Aeroporto',
            link: 'https://www.google.com.ar/maps/dir/Aeropuerto+de+Roma-Fiumicino,+00054+Fiumicino+RM,+Italia/Estaci%C3%B3n+de+Roma+Termini,+Via+Giovanni+Giolitti,+40,+00185+Rome,+RM,+Italia/@41.7968758,12.2531421,15.09z/data=!4m14!4m13!1m5!1m1!1s0x1325f0793898141f:0xafe513b4e358316f!2m2!1d12.2519211!2d41.8034632!1m5!1m1!1s0x132f61a439c0ffef:0xa4307dbef261a994!2m2!1d12.5015756!2d41.9012873!3e3?hl=es&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
        }]
    },
    {
        id: 2,
        check: false,
        title: "Trainline",
        code: "RV 4623",
        exit: {
            day: new Date("2025-08-11T12:00:00"),
            hour: "13:38hs",
            text: "Roma Fiumicino Aeroporto",
        },
        arrival: {
            day: new Date("2025-08-11T12:00:00"),
            hour: "14:10hs",
            text: "Roma Termini",
        },
        type: "tren",
        next_action: [{
            text: "Caminar hasta el hotel - The RomeHello",
            time: '10-15min aprox',
            link: 'https://www.google.com.ar/maps/dir/Estaci%C3%B3n+de+Roma+Termini,+Via+Giovanni+Giolitti,+40,+00185+Rome,+RM,+Italia/The+RomeHello,+Via+Torino,+Roma,+Italia/@41.9014653,12.4953252,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f61a439c0ffef:0xa4307dbef261a994!2m2!1d12.5015756!2d41.9012873!1m5!1m1!1s0x132f61a8938be91d:0x6d111e2a0b5a632c!2m2!1d12.4942144!2d41.9034019!3e2?hl=es&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
        }],
    },
    {
        id: 3,
        check: false,
        title: "Booking",
        subtitle: "The RomeHello",
        direction: 'Via Torino, 45, Estación de Termini, 00184 Roma, Italia',
        booking_link: 'https://www.google.com.ar/maps/place/The+RomeHello/@41.9034099,12.4916498,17z/data=!4m11!3m10!1s0x132f61a8938be91d:0x6d111e2a0b5a632c!5m4!1s2025-08-27!2i7!4m1!1i2!8m2!3d41.9034059!4d12.4942247!16s%2Fg%2F11fzffcrj9?hl=es&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
        exit: {
            day: new Date("2025-08-11T12:00:00"),
            hour: "14:00hs - 00:00hs",
            text: "Check-in:",
        },
        arrival: {
            day: new Date("2025-08-17T12:00:00"),
            hour: "00:00hs - 11:00hs",
            text: "Check-out:",
        },
        type: "hotel",
        next_action: [{
            text: "Caminar hasta el tren - Roma Termini",
            time: '10min aprox',
            link: 'https://www.google.com.ar/maps/dir/The+RomeHello,+Via+Torino,+45,+00184+Roma+RM,+Italia/Estaci%C3%B3n+de+Roma+Termini,+Via+Giovanni+Giolitti,+40,+00185+Rome,+RM,+Italia/@41.9019104,12.4953252,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f61a8938be91d:0x6d111e2a0b5a632c!2m2!1d12.4942144!2d41.9034019!1m5!1m1!1s0x132f61a439c0ffef:0xa4307dbef261a994!2m2!1d12.5015756!2d41.9012873!3e2?hl=es&entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
        }],
    },
    {
        id: 4,
        check: false,
        title: "Trainline",
        code: "RV 4598",
        exit: {
            day: new Date("2025-08-17T12:00:00"),
            hour: "9:05hs",
            text: "Roma Termini",
        },
        arrival: {
            day: new Date("2025-08-17T12:00:00"),
            hour: "9:37hs",
            text: "Roma Fiumicino Aeroporto",
        },
        type: "tren",
        next_action: [{
            text: "Buscar mi vuelo - Ryanair",
        }],
    },
    {
        id: 5,
        check: false,
        title: "Ryanair",
        code: "QMSL8Y",
        exit: {
            day: new Date("2025-08-17T12:00:00"),
            hour: "12:20hs",
            text: "Aeropuerto de Roma-Fiumicino",
        },
        arrival: {
            day: new Date("2025-08-17T12:00:00"),
            hour: "13:40hs",
            text: "Aeropuerto de Catania - Fontanarossa",
        },
        type: "vuelo",
        seat: "Aleatorio",
        suitcase: "20kg",
        hand_luggage: "40cm x 20cm x 25cm",
        next_action: [{
            text: "Caminar hasta parada de colectivo - ALIBUS",
        }, {
            text: 'ALIBUS - Piazza Papa Giovanni XXIII',
            time: '20-25min de viaje aprox', //aprox
            link: 'https://www.google.com.ar/maps/dir/Aeroporto+di+Catania+(CTA),+Via+Fontanarossa,+Catania,+Italia/Catania+Centrale,+Piazza+Papa+Giovanni+XXIII,+Catania,+Italia/@37.4875061,15.0656101,14.3z/data=!4m14!4m13!1m5!1m1!1s0x1313e259b8b66707:0xec956aaf5d57793!2m2!1d15.0650731!2d37.4662529!1m5!1m1!1s0x1313e3356d58d9ef:0x6365adc72364a5c6!2m2!1d15.0999132!2d37.5067878!3e3?hl=es&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
        }, {
            text: 'Caminar hasta el tren - Catania Centrale',
            time: '1min aprox'
        }],
    },
    {
        id: 6,
        check: false,
        title: "Trainline",
        code: "RE 22112",
        exit: {
            day: new Date("2025-08-17T12:00:00"),
            hour: "15:29hs",
            text: "Catania Centrale",
        },
        arrival: {
            day: new Date("2025-08-17T12:00:00"),
            hour: "16:07hs",
            text: "Taormina-Giardini",
        },
        type: "tren",
        next_action: [
            {
                text: "Caminar hasta el hotel - Hostel Beach House",
                time: '9min aprox',
                link: 'https://www.google.com.ar/maps/dir/Taormina-Giardini,+via+98039,+Via+Nazionale,+43,+Villagonia+ME,+Italia/Hostel+Beach+House,+Lungomare+Regina+Margherita,+Naxos,+Mesina,+Italia/@37.8439774,15.2800651,17z/data=!3m1!5s0x131411b9c93c28a7:0xb8592f30cbae752f!4m14!4m13!1m5!1m1!1s0x131411bb714a12b1:0xaddbc6ef5eb904d3!2m2!1d15.2825673!2d37.8455579!1m5!1m1!1s0x131411cfa9aecae9:0x39be55d9fa0d0d8c!2m2!1d15.2790649!2d37.8412654!3e3?hl=es&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
            }
        ],
    },
    {
        id: 7,
        check: false,
        title: "Booking",
        subtitle: "Hostel Beach House",
        direction: "Lungomare Regina Margherita 73, 98035 Giardini-Naxos, Italia",
        booking_link: 'https://www.google.com.ar/maps/place/Hostel+Beach+House/@37.8412696,15.27649,17z/data=!3m2!4b1!5s0x131411b9c93c28a7:0xb8592f30cbae752f!4m11!3m10!1s0x131411cfa9aecae9:0x39be55d9fa0d0d8c!5m4!1s2025-08-27!2i7!4m1!1i2!8m2!3d37.8412654!4d15.2790649!16s%2Fg%2F11s2jmh979?hl=es&entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
        exit: {
            day: new Date("2025-08-17T12:00:00"),
            hour: "14:00hs - 21:00hs",
            text: "Check-in:",
        },
        arrival: {
            day: new Date("2025-08-27T12:00:00"),
            hour: "10:00hs - 10:30hs",
            text: "Check-out:",
        },
        type: "hotel",
        next_action: [
            {
                text: "Caminar hasta el tren - Taormina-Giardini",
                time: '9min aprox',
                link: 'https://www.google.com.ar/maps/dir/Hostel+Beach+House,+Lungomare+Regina+Margherita,+Naxos,+Mesina,+Italia/Taormina-Giardini,+via+98039,+Via+Nazionale,+43,+Villagonia+ME,+Italia/@37.8434352,15.2782412,17z/data=!3m2!4b1!5s0x131411b9c93c28a7:0xb8592f30cbae752f!4m14!4m13!1m5!1m1!1s0x131411cfa9aecae9:0x39be55d9fa0d0d8c!2m2!1d15.2790649!2d37.8412654!1m5!1m1!1s0x131411bb714a12b1:0xaddbc6ef5eb904d3!2m2!1d15.2825673!2d37.8455579!3e2?hl=es&entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
            }
        ],
        reminder: 'Recordar que mi checkout tiene que ser mas temprano, debido a que tengo un vuelo 11:45hs y tengo el viaje en tren 06:32hs.'
    },
    {
        id: 8,
        check: false,
        title: "Trainline",
        code: "RE 12953",
        exit: {
            day: new Date("2025-08-27T12:00:00"),
            hour: "06:32",
            text: "Taormina-Giardini",
        },
        arrival: {
            day: new Date("2025-08-27T12:00:00"),
            hour: "07:33",
            text: "Catania Centrale",
        },
        type: "tren",
        next_action: [
            {
                text: "Caminar hasta Piazza Papa Giovanni XXIII - ALIBUS",
                time: '1min aprox',
                link: 'https://www.google.com.ar/maps/dir/Catania+Centrale,+Piazza+Papa+Giovanni+XXIII,+2,+95129+Catania+CT,+Italia/Piazza+Papa+Giovanni+XXIII,+95100+Catania+CT,+Italia/@37.5070191,15.0971857,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x1313e3356d58d9ef:0x6365adc72364a5c6!2m2!1d15.0999132!2d37.5067878!1m5!1m1!1s0x1313e334ddcae139:0x18de206bad209136!2m2!1d15.0995114!2d37.5071798!3e3?hl=es&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
            },
            {
                text: "ALIBUS hasta el Aeropuerto de Catania (CTA)",
                time: "20-25min aprox",
            },
                 {
                text: "Buscar mi vuelo Ryanair",
            }
        ],
    },
    {
        id: 9,
        check: false,
        title: "Ryanair",
        code: "QUDJPD",
        exit: {
            day: new Date("2025-08-27T12:00:00"),
            hour: "11:45hs",
            text: "Aeropuerto de Catania - Fontanarossa",
        },
        arrival: {
            day: new Date("2025-08-27T12:00:00"),
            hour: "12:55hs",
            text: "Aeropuerto Internacional de Nápoles",
        },
        type: "vuelo",
        seat: "Aleatorio",
        suitcase: "20kg",
        hand_luggage: "40cm x 20cm x 25cm",
        next_action: [
            {
                text: "Buscar shuttle Curreri Viaggi - 14:30hs",
                link: 'https://www.google.com/maps/dir/Aeropuerto+Internacional+de+N%C3%A1poles,+Viale+F.+Ruffo+di+Calabria,+80144+Napoli+NA,+Italia/40.875493,14.283609/@40.8800805,14.2808351,16z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x133ba81e8986d9e3:0xbf48c58ba6c9356d!2m2!1d14.2891552!2d40.8846816!1m0!3e2?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
            }
        ],
    },
    {
        id: 10,
        check: false,
        title: "Curreri Viaggi",
        code: "155415-SVSAA-HJ",
        exit: {
            day: new Date("2025-08-27T12:00:00"),
            hour: "14:30hs",
            text: "Aeropuerto Internacional de Nápoles",
        },
        arrival: {
            day: new Date("2025-08-27T12:00:00"),
            hour: "15:45hs aprox.",
            text: "Sant'Agnello",
        },
        type: "bus",
        next_action: [
            {
                text: "Caminar hasta el hotel - Seven Hostel & Rooms",
                time: '15min aprox',
                link: 'https://www.google.com/maps/dir/40.629623644872126,+14.394888562904727/40.635150216844906,+14.400049714569814/@40.6323876,14.3948942,17z/data=!3m1!4b1!4m10!4m9!1m3!2m2!1d14.3948886!2d40.6296236!1m3!2m2!1d14.4000497!2d40.6351502!3e2?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
            }
        ],
    },
    {
        id: 11,
        check: false,
        title: "Booking",
        subtitle: "Seven Hostel & Rooms",
        direction: "Via Iommella Grande 99, 80065 Sant'Agnello, Italia",
        booking_link: 'https://www.google.com.ar/maps/place/Seven+Hostel/@40.6348212,14.3976626,17z/data=!4m11!3m10!1s0x133b99407af51991:0x421b96838fa00519!5m4!1s2025-08-27!2i7!4m1!1i2!8m2!3d40.6348172!4d14.4002375!16s%2Fg%2F1tjj8kzw?hl=es&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
        exit: {
            day: new Date("2025-08-27T12:00:00"),
            hour: "15:00hs - 00:00hs",
            text: "Check-in:",
        },
        arrival: {
            day: new Date("2025-09-03T12:00:00"),
            hour: "00:00hs - 10:30hs",
            text: "Check-out:",
        },
        type: "hotel"
    }
];

export default ItineraryData;

export interface ItineraryInterface {
    id: number;
    title: string
    subtitle?: string,
    direction?: string, //type hotel only
    booking_link?: string,
    exit: {
        day: Date,
        hour: string,
        text: string
    },
    arrival: {
        day: Date,
        hour: string,
        text: string
    },
    type: 'vuelo' | 'hotel' | 'tren' | 'bus',
    reminder?: string,
    //hacer algo despues de esto
    next_action?: {
        text: string,
        time?: string,
        link?: string
    }[],

    //type vuelo y tren
    seat?: string,
    code?: string,
    suitcase?: string,
    hand_luggage?: string,

    //join con db
    check: boolean
}

