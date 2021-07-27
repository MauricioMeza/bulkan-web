var products = [
		{
			"nombre": "Aguardiente Nariño",
			"presentacion": "Botella - 750ml",
			"precio": 30000,
			"imagen": "narino-tella.jpg",
			"tipo": "l",
			"popular": true,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
		},
		{
			"nombre": "Aguardiente Antioqueño",
			"presentacion": "Botella - 750ml",
			"precio": 35000,
			"imagen": "antioqueno-tella.jpg",
			"tipo": "l",
			"popular": true,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Ron Viejo de Caldas",
			"presentacion": "Media Botella - 375ml",
			"precio": 26000,
			"imagen": "rvc-media.jpg",
			"tipo": "l",
			"popular": true,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Whiskey Old Parr",
			"presentacion": "Botella - 1000ml",
			"precio": 120000,
			"imagen": "oldpar-tella.jpg",
			"tipo": "l",
			"popular": false,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Vodka Smirknoff",
			"presentacion": "Botella - 750ml",
			"precio": 40000,
			"imagen": "vodkasmirk-tella.jpg",
			"tipo": "l",
			"popular": false,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Tequila Olmeca",
			"presentacion": "Botella - 700ml",
			"precio": 80000,
			"imagen": "tquilaolm-tella.jpg",
			"tipo": "l",
			"popular": false,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Cerveza Poker",
			"presentacion": "Six Pack - 355ml x 6",
			"precio": 15000,
			"imagen": "poker-6pack.jpg",
			"tipo": "c",
			"popular": true,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Cerveza Andina",
			"presentacion": "Six Pack - 355ml x 6",
			"precio": 16000,
			"imagen": "andina-6pack.jpg",
			"tipo": "c",
			"popular": false,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Cerveza Corona",
			"presentacion": "Six Pack - 355ml x 6",
			"precio": 26000,
			"imagen": "corona-6pack.jpg",
			"tipo": "c",
			"popular": false,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Cerveza Becks",
			"presentacion": "Six Pack - 355ml x 6",
			"precio": 18000,
			"imagen": "becks-6pack.jpg",
			"tipo": "c",
			"popular": false,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Cerveza Budweiser",
			"presentacion": "Lata - 355ml",
			"precio": 4000,
			"imagen": "bud-lata.jpg",
			"tipo": "c",
			"popular": false,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Coctel Smirknoff",
			"presentacion": "4 Pack - 400ml x 4",
			"precio": 30000,
			"imagen": "smirknoff.jpg",
			"tipo": "c",
			"popular": false,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Coctel FourLoko",
			"presentacion": "Lata - 400ml",
			"precio": 10000,
			"imagen": "fourloko.jpg",
			"tipo": "c",
			"popular": false,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		},
		{
			"nombre": "Cigarrillos Marlboro",
			"presentacion": "Cajetilla - 10und",
			"precio": 10000,
			"imagen": "marlboro.jpg",
			"tipo": "o",
			"popular": false,
			"disponible": true,
			"descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
		}
	];