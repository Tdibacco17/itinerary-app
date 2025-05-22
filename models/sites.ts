const SitesData: CitySites[] = [
    {
        title: 'Roma',
        array_sites: [
            {
                title: '🗺️ Zona Coliseo – Foro – Palatino',
                sites: [
                    {
                        title: 'Coliseo',
                        link: 'https://www.google.com/maps/place/Coliseo+de+Roma/@41.8903642,12.4921586,16.79z/data=!4m6!3m5!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309!16zL20vMGQ1cXg?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'monumento',
                    },
                    {
                        title: 'Foro Romano + Palatino',
                        link: 'https://www.google.com/maps/place/Foro+Romano/@41.8925,12.4853,17z/data=!4m6!3m5!1s0x132f61b383a9cdef:0xfa914007c0ec7de6!8m2!3d41.8920906!4d12.4864378!16zL20vMG4xNnQ?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'sitio histórico',
                    },
                    {
                        title: 'Termas de Caracalla',
                        link: `https://www.google.com/maps/place/Termas+de+Caracalla/@41.879,12.4924,17z/data=!4m6!3m5!1s0x132f61ce333e85d5:0x6a2b4006ea5b98dc!8m2!3d41.8790382!4d12.4924394!16zL20vMDI3eDJr?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'monumento',
                    },
                    {
                        title: 'Piazza Venezia y el Vittoriano',
                        link: `https://www.google.com/maps/place/Monumento+a+V%C3%ADctor+Manuel+II/@41.8950011,12.4799238,16.79z/data=!4m14!1m7!3m6!1s0x132f604d1b805de3:0x21154807a7b83fe1!2sMonumento+a+V%C3%ADctor+Manuel+II!8m2!3d41.8945976!4d12.4831269!16zL20vMDcweTZm!3m5!1s0x132f604d1b805de3:0x21154807a7b83fe1!8m2!3d41.8945976!4d12.4831269!16zL20vMDcweTZm?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'plaza',
                    },
                ],
            },
            {
                title: '🗺️ Zona Vaticano',
                sites: [
                    {
                        title: 'Basílica de San Pedro (Vaticano)',
                        link: `https://www.google.com/maps/place/Bas%C3%ADlica+de+San+Pedro/@41.9021707,12.4513618,17z/data=!3m1!4b1!4m6!3m5!1s0x132f6061b7149b59:0x724bf077cd875283!8m2!3d41.9021667!4d12.4539367!16zL20vMGpueW0?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'iglesia',
                    },
                    {
                        title: 'Capilla Sixtina',
                        link: `https://www.google.com/maps/place/Capilla+Sixtina/@41.9029508,12.4519086,17z/data=!3m1!4b1!4m6!3m5!1s0x132f6065c523afdb:0xab16c8877fb53e22!8m2!3d41.9029468!4d12.4544835!16zL20vMGtibHM?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'museo',
                    },
                    {
                        title: 'Museos Vaticanos',
                        link: `https://www.google.com/maps/place/Museo+Vaticano/@41.9064918,12.4510664,17z/data=!3m1!4b1!4m6!3m5!1s0x132f6063839bc129:0xcfe0eca0526416b6!8m2!3d41.9064878!4d12.4536413!16zL20vMDFoZmti?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'museo',
                    },
                    {
                        title: "Castel Sant'Angelo",
                        link: `https://www.google.com/maps/place/Castillo+de+Sant'Angelo/@41.9031,12.4663,17z/data=!3m1!5s0x132f605c87448521:0xbf5790e798df062f!4m6!3m5!1s0x13258a8711e7a4d1:0x366c111ce77d4189!8m2!3d41.9030632!4d12.466276!16zL20vMDFyanFi?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'castillo',
                    },
                ],
            },
            {
                title: '🗺️ Centro histórico y plazas',
                sites: [
                    {
                        title: 'Panteón de Agripa',
                        link: 'https://www.google.com/maps/place/Panteon+de+Roma/@41.8986,12.4768,17z/data=!4m6!3m5!1s0x132f604f678640a9:0xcad165fa2036ce2c!8m2!3d41.8986108!4d12.4768729!16zL20vMDF4emR6?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
                        type: 'monumento',
                    },
                    {
                        title: 'Piazza Navona',
                        link: `https://www.google.com/maps/place/Plaza+Navona/@41.8992,12.4731,17z/data=!4m6!3m5!1s0x132f6083c19d1c3d:0xa35724562e82334a!8m2!3d41.8991633!4d12.4730742!16zL20vMDJ6MF8y?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'plaza',
                    },
                    {
                        title: 'Fontana di Trevi',
                        link: `https://www.google.com/maps/place/Fontana+di+Trevi/@41.904598,12.4834639,14.92z/data=!4m14!1m7!3m6!1s0x132f60541678ae75:0x7fc0d4978aae690f!2sEscaleras+de+la+Plaza+de+Espa%C3%B1a!8m2!3d41.90599!4d12.482775!16zL20vMDFfamxz!3m5!1s0x132f6053278340d5:0xf676f1e1cc02bbb6!8m2!3d41.9009325!4d12.483313!16zL20vMDF4Z3Q1?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'fuente',
                    },
                    {
                        title: 'Plaza de España y Escalinata',
                        link: `https://www.google.com/maps/place/Plaza+de+Espa%C3%B1a/@41.905867,12.4812776,16.43z/data=!4m14!1m7!3m6!1s0x132f60541678ae75:0x7fc0d4978aae690f!2sEscaleras+de+la+Plaza+de+Espa%C3%B1a!8m2!3d41.90599!4d12.482775!16zL20vMDFfamxz!3m5!1s0x132f60551bc4f4e3:0xe876d6d8db1d5938!8m2!3d41.9056978!4d12.482327!16s%2Fm%2F0w7q6fq?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'plaza',
                    },
                ],
            },
            {
                title: '🗺️ Parques y miradores',
                sites: [
                    {
                        title: 'Villa Borghese',
                        link: `https://www.google.com/maps/place/Villa+Borghese/@41.914317,12.4805264,15.79z/data=!4m6!3m5!1s0x132f61021d3c538f:0xeb3d7c3dff838e44!8m2!3d41.9138782!4d12.4853818!16zL20vMDNnbmZu?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'parque',
                    },
                    {
                        title: 'Galería Borghese',
                        link: `https://www.google.com/maps/place/Museo+Borghese/@41.9142143,12.4895693,17z/data=!3m1!4b1!4m6!3m5!1s0x132f610456d7e6ab:0x1bb4a47639e07bbf!8m2!3d41.9142103!4d12.4921442!16zL20vMDM2XzJm?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'museo',
                    },
                    {
                        title: 'Colina del Pincio',
                        link: `https://www.google.com/maps/place/Plaza+del+P%C3%B3polo/@41.9107038,12.4763579,17z/data=!4m14!1m7!3m6!1s0x132f60ff18d9fb69:0x8f13d8781cdc92ae!2sPincio!8m2!3d41.9109886!4d12.4809335!16s%2Fg%2F11f26n12n8!3m5!1s0x132f60f8e5e81687:0x43ee9ffffdce4350!8m2!3d41.9107038!4d12.4763579!16zL20vMDl4bndy?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'mirador',
                    },
                    {
                        title: 'Aventino + Ojo de la cerradura',
                        link: `https://www.google.com/maps/place/Aventine+keyhole/@41.8829829,12.4784752,15z/data=!4m14!1m7!3m6!1s0x132f603357088aad:0xd3c240c91e92c299!2sMonte+Aventino!8m2!3d41.8824826!4d12.4776405!16zL20vMHE0a2w!3m5!1s0x132f6033dfdd8327:0x59b13419e3f7e78!8m2!3d41.8829829!4d12.4784752!16s%2Fg%2F11fxzqg7ns?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`,
                        type: 'mirador',
                    },
                ],
            },
        ],
    },
    {
        title: 'Catania',
        array_sites: []
    }
];

export default SitesData;

export interface Site {
    title: string;
    link: string;
    type: string
}

export interface SiteCategory {
    title: string;
    sites: Site[];
}

export interface CitySites {
    title: string;
    array_sites: SiteCategory[];
}