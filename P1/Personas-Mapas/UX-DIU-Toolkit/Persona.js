/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019    */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
        $scope.Grupo_ID ="DIU2.Mjölnir";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: "Javier Roldán",
				Photo: "javier-roldan.jpg",
				Quote: "Vive y deja vivir",
				Age: 45,
				Occupation: "Fotógrafo",
				Family: "Divorciado desde hace 3 años",
				Location: "Asturias (Gijón)",
				Character: "Le gusta estar en contacto con la naturaleza",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Formar una familia", "Tener su propia revista digital sobre naturaleza"],
				Frustrations: ["Cada vez que confía plenamente en alguien, le acaba traicionando.", "Sufre más bloqueos creativos de los que le gustaría, Se siente algo solo en una casa muy grande para una sola persona"],
				Bio: "Nació y se crió en Madrid y se formó allí en fotografía, pero le resultó una mejor localización Asturias dada su cercanía con la naturaleza, Galicia, Euskadi y el mar. LLeva 10 años trabajando para una revista asturiana. Si bien conserva amigos de la adolescencia, ya casi no ve a ninguno",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 3 }

				],
                Contextos: "Tras el divorcio se siente algo solo y cree que le vendría bien algo de compañía y ayudar a alguien",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/

austríaca
				Id: 1,
				Name: "Alba Moreno",
				Photo: "alba-moreno.jpg",
				Quote: "¡Qué nada te pare!",
				Age: 24,
				Occupation: "Ingeniera de sistemas especializada en sistemas Unix.",
				Family: "Vive, de momento, con sus padres adoptivos y su hermana",
				Location: "Alicante, Comunitat Valenciana.",
				Character: "Decidica, sincera y alegre",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Me gustaría trabajar para grandes empresas europeas como SAP", "El código no se hace sólo. El código hay que hacerlo", "Tener una bonita casa en Alemania.", "Me gustaría sentir lo que siente una piloto de MotoGP"],
				Frustrations: ["Aunque mi familia me quiere, me da miedo sentirme sola", "Necesito que alguien me de la oportunidad para demostrar lo que valgo", "Siendo ingeniera de sistemas, me da respeto romper cualquier cosa, pero con tener cuidado, confío en mi."],
				Bio: "Desde pequeña, Alba ha sentido curiosidad por cómo funcionaban los ordenadores y la tecnología en general y decidió, desde muy pronto, hacerse informática. Los demás se metían con ellar por eso, pero nada la frenó y ha termindo estudiando Ingeniería Informática en la especialidad de sistemas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 5 }

				],
                Contextos:   "Quiere viajar por Europa para buscar trabajo fuera pero no puede arriesgarse a gastar mucho dinero en hospedaje" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
