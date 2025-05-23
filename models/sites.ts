const SitesData: CitySites[] = [
    {
        title: 'Roma',
        direction: 'Via Torino, 45, Estación de Termini, 00184 Roma, Italia',
        link: 'https://www.google.com/maps/place/The+RomeHello/@41.9034099,12.4916498,17z/data=!4m11!3m10!1s0x132f61a8938be91d:0x6d111e2a0b5a632c!5m4!1s2025-08-27!2i7!4m1!1i2!8m2!3d41.9034059!4d12.4942247!16s%2Fg%2F11fzffcrj9?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
        array_sites: [
            {
                title: 'Zona Coliseo - Foro - Palatino',
                groups: [
                    {
                        id: 'coliseo-foro-palatino',
                        title: 'Coliseo + Foro Romano + Palatino',
                        site_ids: ['coliseo', 'foro-romano', 'palatino'],
                        note: ['Entrada combinada válida por 24hs.', 'Sacar ticket 8:30hs.'],
                        link: 'https://ticketing.colosseo.it/es/eventi/24h-colosseo-foro-romano-palatino/?t=2025-05-24',
                        price: 18,
                        orden: 1
                    },
                    {
                        id: 'aventino-giardino-degli-aranci',
                        title: 'Aventino + Volver bordeando el Rio',
                        site_ids: ['aventino', 'giardino-degli-aranci'],
                        orden: 2
                    }
                ],
                sites: [
                    {
                        id: 'coliseo',
                        title: 'Coliseo',
                        link: 'https://www.google.com/maps/dir/The+RomeHello,+Via+Torino,+45,+00184+Roma+RM,+Italia/Coliseo+de+Roma,+Piazza+del+Colosseo,+1,+00184+Roma+RM,+Italia/@41.8968196,12.4858405,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f61a8938be91d:0x6d111e2a0b5a632c!2m2!1d12.4942144!2d41.9034019!1m5!1m1!1s0x132f61b6532013ad:0x28f1c82e908503c4!2m2!1d12.4922309!2d41.8902102!3e2?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'monumento',
                        require_entry: true,
                        note: [
                            'Salir 7:45hs.',
                            'Requiere horario fijo.',
                            'Llegar 15-20 minutos antes por control de seguridad.'
                        ]
                    },
                    {
                        id: 'foro-romano',
                        title: 'Foro Romano + Palatino',
                        link: 'https://www.google.com/maps/dir/Coliseo,+Piazza+del+Colosseo,+Roma,+Italia/Foro+Romano,+Via+della+Salara+Vecchia,+Roma,+Italia/@41.8912224,12.4913184,16.61z/data=!4m14!4m13!1m5!1m1!1s0x132f61b6532013ad:0x28f1c82e908503c4!2m2!1d12.4922309!2d41.8902102!1m5!1m1!1s0x132f61b383a9cdef:0xfa914007c0ec7de6!2m2!1d12.4864378!2d41.8920906!3e2?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'sitio histórico',
                        require_entry: true,
                        note: [
                            'Entrada a zona unificada, por Via Di San Gregorio.',
                        ]
                    },
                    {
                        id: 'palatino',
                        title: 'Monte Palatino',
                        link: 'https://www.google.com/maps/place/Aventine+keyhole/@41.8880874,12.4750591,15z/data=!4m23!1m16!4m15!1m6!1m2!1s0x132f603357088aad:0xd3b1d08fc323ed98!2sMonte+Palatino,+Roma,+Italia!2m2!1d12.4833333!2d41.8833333!1m6!1m2!1s0x132f61b383a9cdef:0xfa914007c0ec7de6!2sForo+Romano,+00186+Roma+RM,+Italia!2m2!1d12.4864378!2d41.8920906!3e2!3m5!1s0x132f6033dfdd8327:0x59b13419e3f7e78!8m2!3d41.8829829!4d12.4784752!16s%2Fg%2F11fxzqg7ns?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'sitio histórico',
                        require_entry: true,
                        note: [
                            'Salir de la zona unificada anterior.'
                        ]
                    },
                    {
                        id: 'aventino',
                        title: 'Aventino + Ojo de la cerradura',
                        link: 'https://www.google.com/maps/dir/Monte+Palatino,+Roma,+Italia/Aventine+keyhole,+Piazza+dei+Cavalieri+di+Malta,+4,+00153+Roma+RM,+Italia/@41.8838734,12.4796168,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f603357088aad:0xd3b1d08fc323ed98!2m2!1d12.4833333!2d41.8833333!1m5!1m1!1s0x132f6033dfdd8327:0x59b13419e3f7e78!2m2!1d12.4784752!2d41.8829829!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'mirador',
                        note: [
                            'Mirador. Vista alineada: cúpula de San Pedro centrada en la cerradura.',
                        ]
                    },
                    {
                        id: 'giardino-degli-aranci',
                        title: 'Giardino degli Aranci',
                        link: `https://www.google.com/maps/dir/Puerta+de+los+caballeros+de+la+Orden+de+Malta,+Piazza+dei+Cavalieri+di+Malta,+00153+Roma+RM,+Italia/Giardino+degli+Aranci,+Piazza+Pietro+D'Illiria,+00153+Roma+RM,+Italia/@41.8840503,12.4768594,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f6197bd1437db:0x9e9b35d534674951!2m2!1d12.4785023!2d41.8829589!1m5!1m1!1s0x132f60345d56dcd9:0x3b99833873948f9!2m2!1d12.48039!2d41.8851338!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'mirador',
                        note: [
                            'Pasar pegando la vuelta.',
                        ]
                    },
                    {
                        id: 'piazza-venezia',
                        title: 'Piazza Venezia y el Vittoriano',
                        link: `https://www.google.com/maps/dir/Giardino+degli+Aranci,+Piazza+Pietro+D'Illiria,+00153+Roma+RM,+Italia/Monumento+a+V%C3%ADctor+Manuel+II,+Piazza+Venezia,+00186+Roma+RM,+Italia/@41.8898222,12.4767439,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f60345d56dcd9:0x3b99833873948f9!2m2!1d12.48039!2d41.8851338!1m5!1m1!1s0x132f604d1b805de3:0x21154807a7b83fe1!2m2!1d12.4831269!2d41.8945976!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'plaza',
                        orden: 3,
                        note: [
                            'Se puede acceder gratuitamente al interior del Vittoriano.',
                            'El ascensor de vidrio para subir a la cima tiene costo adicional (~€12).'
                        ]
                    },
                ],
            },
            {
                title: 'Zona Vaticano',
                date: ' Miercoles 13 de agosto',
                groups: [
                    {
                        id: 'museos-vaticanos-capilla-sixtina',
                        title: 'Museos Vaticanos + Capilla Sixtina',
                        site_ids: ['museos-vaticanos', 'capilla-sixtina'],
                        note: ['TICKET: Miercoles 13 de agosto - 8:00hs.'],
                        // link: 'https://tickets.museivaticani.va/home/calendar/visit/Biglietti-Musei',
                        // price: 19
                        orden: 2
                    }
                ],
                sites: [
                    {
                        id: 'basilica-san-pedro',
                        title: 'Basílica de San Pedro (Vaticano)',
                        link: 'https://www.google.com/maps/dir/The+RomeHello,+Via+Torino,+45,+00184+Roma+RM,+Italia/Bas%C3%ADlica+de+San+Pedro,+Piazza+San+Pietro,+00120+Citt%C3%A0+del+Vaticano,+Ciudad+del+Vaticano/@41.9043573,12.4648326,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f61a8938be91d:0x6d111e2a0b5a632c!2m2!1d12.4942144!2d41.9034019!1m5!1m1!1s0x132f6061b7149b59:0x724bf077cd875283!2m2!1d12.4539367!2d41.9021667!3e3?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'iglesia',
                        note: [
                            'Salir 6:15hs / 6:30hs. Línea A (roja).',
                            'Abre 7:00hs. Entrada gratuita.',
                            'La cúpula con entrada paga en el lugar - ascensor.'
                        ],
                        require_entry: false,
                        orden: 1
                    },
                    {
                        id: 'museos-vaticanos',
                        title: 'Museos Vaticanos',
                        link: 'https://www.google.com/maps/dir/Bas%C3%ADlica+de+San+Pedro,+Piazza+San+Pietro,+00120+Citt%C3%A0+del+Vaticano,+Ciudad+del+Vaticano/Museo+Vaticano,+00120+Citt%C3%A0+del+Vaticano,+Ciudad+del+Vaticano/@41.9046157,12.456918,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f6061b7149b59:0x724bf077cd875283!2m2!1d12.4539367!2d41.9021667!1m5!1m1!1s0x132f6063839bc129:0xcfe0eca0526416b6!2m2!1d12.4536413!2d41.9064878!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'museo',
                        require_entry: true,
                        have_ticket: true,
                        note: ['Para llegar hay que salir del recinto y dar la vuelta.']
                    },
                    {
                        id: 'capilla-sixtina',
                        title: 'Capilla Sixtina',
                        // link: 'https://www.google.com/maps/place/Capilla+Sixtina/@41.9029508,12.4519086,17z',
                        type: 'museo',
                        require_entry: true,
                        note: ['Se llega siguiendo el recorrido']
                    },
                    {
                        id: 'castel-sant-angelo',
                        title: "Castel Sant'Angelo",
                        link: `https://www.google.com/maps/dir/Museo+Vaticano,+00120+Citt%C3%A0+del+Vaticano,+Ciudad+del+Vaticano/Castillo+de+Sant'Angelo,+Lungotevere+Castello,+50,+00193+Roma+RM,+Italia/@41.9043416,12.4559015,16z/data=!3m2!4b1!5s0x132f605c87448521:0xbf5790e798df062f!4m14!4m13!1m5!1m1!1s0x132f6063839bc129:0xcfe0eca0526416b6!2m2!1d12.4536413!2d41.9064878!1m5!1m1!1s0x13258a8711e7a4d1:0x366c111ce77d4189!2m2!1d12.466276!2d41.9030632!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'castillo',
                        require_entry: true,
                        note: [
                            'Entrada paga. Se puede comprar directamente en el lugar.',
                        ],
                        orden: 3,
                        ticket_link: 'https://www.coopculture.it/en/products/castel-santangelo-ticket-for-individuals-up-to-9-people/'
                    }
                ]
            },
            {
                title: 'Centro histórico y plazas',
                sites: [
                    {
                        id: 'panteon',
                        title: 'Panteón de Agripa',
                        link: 'https://www.google.com/maps/dir/Fontana+di+Trevi,+Piazza+di+Trevi,+00187+Roma+RM,+Italia/Panteon+de+Roma,+Piazza+della+Rotonda,+Roma+00186,+Italia/@41.8993511,12.4778625,17.7z/data=!4m14!4m13!1m5!1m1!1s0x132f6053278340d5:0xf676f1e1cc02bbb6!2m2!1d12.483313!2d41.9009325!1m5!1m1!1s0x132f604f678640a9:0xcad165fa2036ce2c!2m2!1d12.4768729!2d41.8986108!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'monumento',
                        require_entry: true,
                        orden: 2,
                        note: [
                            'Precio: €5 (entrada general).',
                            'Horario ideal: 9:00hs. Ir después de desayunar cerca de la Fontana di Trevi.',
                            'Evitar ir después de las 10:00 hs sin entrada: suele haber fila larga.'
                        ]
                    },
                    {
                        id: 'fontana-trevi',
                        title: 'Fontana di Trevi',
                        link: 'https://www.google.com/maps/dir/The+RomeHello,+Via+Torino,+45,+00184+Roma+RM,+Italia/Fontana+di+Trevi,+Piazza+di+Trevi,+00187+Roma+RM,+Italia/@41.9019435,12.4861978,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f61a8938be91d:0x6d111e2a0b5a632c!2m2!1d12.4942144!2d41.9034019!1m5!1m1!1s0x132f6053278340d5:0xf676f1e1cc02bbb6!2m2!1d12.483313!2d41.9009325!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'fuente',
                        orden: 1,
                        note: [
                            'Salir a las 6:45hs del hotel.',
                        ]
                    },
                    {
                        id: 'piazza-navona',
                        title: 'Piazza Navona',
                        link: 'https://www.google.com/maps/dir/Panteon+de+Roma,+Piazza+della+Rotonda,+Roma,+Italia/Plaza+Navona,+Piazza+Navona,+00186+Roma+RM,+Italia/@41.8990758,12.4736861,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f604f678640a9:0xcad165fa2036ce2c!2m2!1d12.4768729!2d41.8986108!1m5!1m1!1s0x132f6083c19d1c3d:0xa35724562e82334a!2m2!1d12.4730742!2d41.8991633!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'plaza',
                        orden: 3,
                    },
                    {
                        id: 'santa-maria-trastevere',
                        title: 'Santa Maria in Trastevere',
                        link: 'https://www.google.com/maps/dir/Plaza+Navona,+Piazza+Navona,+00186+Roma+RM,+Italia/Bas%C3%ADlica+de+Santa+Mar%C3%ADa+en+Trastevere,+Piazza+di+Santa+Maria+in+Trastevere,+00153+Roma+RM,+Italia/@41.8943218,12.467458,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f6083c19d1c3d:0xa35724562e82334a!2m2!1d12.4730742!2d41.8991633!1m5!1m1!1s0x132f60387a58f4b3:0x366752f3f04c4022!2m2!1d12.4698361!2d41.889493!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'iglesia',
                        orden: 4,
                        note: ['Comer y recorrer por acá.']
                    },
                    {
                        id: 'plaza-espana',
                        title: 'Plaza de España y Escalinata',
                        link: 'https://www.google.com/maps/dir/Bas%C3%ADlica+de+Santa+Mar%C3%ADa+en+Trastevere,+Piazza+di+Santa+Maria+in+Trastevere,+00153+Roma+RM,+Italia/Escaleras+de+la+Plaza+de+Espa%C3%B1a,+Piazza+di+Spagna,+00187+Roma+RM,+Italia/@41.8977428,12.4660058,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f60387a58f4b3:0x366752f3f04c4022!2m2!1d12.4698361!2d41.889493!1m5!1m1!1s0x132f60541678ae75:0x7fc0d4978aae690f!2m2!1d12.482775!2d41.90599!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'plaza',
                        orden: 5,
                    },
                ]
            },
            {
                title: 'Parques y miradores',
                sites: [
                    {
                        id: 'galeria-borghese',
                        title: 'Galería Borghese',
                        link: 'https://www.google.com/maps/dir/The+RomeHello,+Via+Torino,+45,+00184+Roma+RM,+Italia/Museo+Borghese,+Piazzale+Scipione+Borghese,+5,+00197+Roma+RM,+Italia/@41.9086193,12.4902771,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f61a8938be91d:0x6d111e2a0b5a632c!2m2!1d12.4942144!2d41.9034019!1m5!1m1!1s0x132f610456d7e6ab:0x1bb4a47639e07bbf!2m2!1d12.4921442!2d41.9142103!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'museo',
                        require_entry: true,
                        ticket_link: 'https://es.borghese.gallery/entradas/',
                        orden: 1,
                        note: [
                            'Museo de arte con obras de Bernini, Caravaggio y Rafael.',
                            'Entrada con reserva obligatoria anticipada.',
                            'Límite de tiempo: solo permiten estar 2 horas por turno.'
                        ]
                    },
                    {
                        id: 'villa-borghese',
                        title: 'Villa Borghese',
                        link: 'https://www.google.com/maps/dir/Museo+Borghese,+Piazzale+Scipione+Borghese,+5,+00197+Roma+RM,+Italia/Villa+Borghese,+Roma,+Italia/@41.9137992,12.4866763,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f610456d7e6ab:0x1bb4a47639e07bbf!2m2!1d12.4921442!2d41.9142103!1m5!1m1!1s0x132f61021d3c538f:0xeb3d7c3dff838e44!2m2!1d12.4853818!2d41.9138782!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'parque',
                        orden: 2,
                        note: [
                            'Gran parque con caminos, lagos y zonas de descanso.',
                            'Ideal para pasear a pie o alquilar bicicleta.',
                            'Se puede recorrer antes o después de visitar la Galería Borghese.'
                        ]
                    },
                    {
                        id: 'lago-borghese',
                        title: 'Templo de Esculapio y lago',
                        link: 'https://www.google.com/maps/dir/Villa+Borghese,+Roma,+Italia/Temple+of+Aesculapius,+Via+Ulisse+Aldrovandi,+6,+00197+Roma+RM,+Italia/@41.9135096,12.4825449,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f61021d3c538f:0xeb3d7c3dff838e44!2m2!1d12.4853818!2d41.9138782!1m5!1m1!1s0x132f611ce09f7e35:0xd14692d46f24e916!2m2!1d12.4827624!2d41.9149545!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'punto de interés',
                        orden: 3,
                        note: [
                            'Punto escénico dentro del parque.',
                            'Se pueden alquilar botes de remos en el lago (~€5).',
                            'Ideal para fotos y un momento tranquilo.'
                        ]
                    },
                    {
                        id: 'pincio',
                        title: 'Colina del Pincio',
                        link: `https://www.google.com/maps/dir/Temple+of+Aesculapius,+Via+Ulisse+Aldrovandi,+6,+00197+Roma+RM,+Italia/Pincio,+Viale+Gabriele+D'Annunzio,+00197+Roma+RM,+Italia/@41.9130376,12.480267,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f611ce09f7e35:0xd14692d46f24e916!2m2!1d12.4827624!2d41.9149545!1m5!1m1!1s0x132f60ff18d9fb69:0x8f13d8781cdc92ae!2m2!1d12.4809335!2d41.9109886!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'mirador',
                        orden: 4,
                        note: [
                            'Mirador con vista panorámica sobre Piazza del Popolo.',
                            'Ideal para fotos al atardecer.',
                            'Acceso fácil desde Villa Borghese.'
                        ]
                    },
                    {
                        id: 'villa-medici',
                        title: 'Villa Médici',
                        link: `https://www.google.com/maps/dir/Pincio,+Viale+Gabriele+D'Annunzio,+00197+Roma+RM,+Italia/Villa+M%C3%A9dici,+Viale+della+Trinit%C3%A0+dei+Monti,+1,+00187+Roma+RM,+Italia/@41.909644,12.4788115,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132f60ff18d9fb69:0x8f13d8781cdc92ae!2m2!1d12.4809335!2d41.9109886!1m5!1m1!1s0x132f60552d72ab5b:0x1baeac81c2a6c031!2m2!1d12.482623!2d41.9082914!3e2?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'villa',
                        orden: 5,
                        note: [
                            'Villa renacentista junto a Villa Borghese.',
                            'Sede de la Academia Francesa en Roma.',
                            'Se puede visitar con guía. Jardines y arte contemporáneo.'
                        ]
                    }
                ]
            }
        ],
    },
];

export default SitesData;


export interface SiteGroup {
    id: string;
    title: string;
    site_ids: string[];
    note?: string[];
    link?: string;
    price?: number;
    orden?: number; // 🆕 nuevo campo
}

export interface Site {
    id: string;
    title: string;
    link?: string;
    type: string;
    require_entry?: boolean;
    have_ticket?: boolean;
    note?: string[];
    price?: number;
    ticket_link?: string;
    orden?: number; // 🆕 nuevo campo
}

export interface SiteCategory {
    title: string;
    date?: string,
    sites: Site[];
    groups?: SiteGroup[];
}

export interface CitySites {
    title: string;
    array_sites: SiteCategory[];
    direction: string,
    link: string
}

export type GroupedSiteBlock =
    | {
        isGrouped: true;
        title: string;
        sites: Site[];
        note?: string[];
        price?: number;
        link?: string;
        orden: number;
    }
    | {
        isGrouped: false;
        title: string;
        sites: Site[];
        note?: string[];
        price?: number;
        link?: string;
        orden: number;
    };