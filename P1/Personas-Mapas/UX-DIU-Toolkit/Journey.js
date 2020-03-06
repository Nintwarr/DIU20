/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
		$scope.Grupoº_ID ="DIU2.Mjölnir";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.JourneyIndex = 0;

        $scope.Journeys = [
			{

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Javier Roldán",
                Photo: "javier-roldan.jpg",

                /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere encontrar una forma de compartir su casa",
                touch1: "Redes Sociales",
                feel1: "5",
                con1: "Qué alternativas tiene y cuál le gusta más",
                ima1: "cartoon-planning.png",

                /*** PASO #2: DECISION ***/
                goal2: "Busca en internet diferentes formas",
                touch2: "Odenador",
                feel2: "3",
                con2: "De entre las alternativas no termina de aclararse",
                ima2: "cartoon-PCtyping.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Decide que va a probar una forma de compartición abierta, nada de alquiler tradicional",
                touch3: "Ordenador",
                feel3: "4",
                con3: "No sabe si encontrará información suficiente",
                ima3: "cartoon-deciding2.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Por redes sociales le recomiendan compartetupiso.com",
                touch4: "Móvil (Twitter)",
                feel4: "5",
                con4: "Entra a la página y ve que es básicamente lo que él busca, una convivencia más relajada y abierta",
                ima4: "cartoon-PCSurprised.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: 'Lee la información del inicio, lo que promete, y se ve bastante profesional. Pero no está nada claro como funciona (no ve el botón de "cómo funciona")',
                touch5: "Ordenador",
                feel5: "3",
                con5: "Realmente no ve cómo contactar con personas que quieran hospedarse en su casa. Se registra y le piden que entre a un grupo de Facebook, pero él no tiene cuenta",
                ima5: "cartoon-phoning.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Se da cuenta de que se trata de mediadores, puede ser una buena alternativa, pero no le convence",
                touch6: "Ordenador",
                feel6: "2",
                con6: "Como no tiene Facebook ni ganas de uno, desiste, deja de investigar y pasa a otra alternativa",
                ima6: "cartoon-going.png",

			},
			{
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

				Id: 1,
				Name: "Alba Moreno",
                Photo: "alba-moreno.jpg",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Acaba de conseguir trabajo como administradora de sistemas. Trabaja a distancia y sólo por las mañanas. Así que quiere ir viviendo en diferentes lugares de España",
                touch1: "Calendario",
                feel1: "5",
                con1: "Le gustaría encontrar alojamiento barato en Barcelona primero, pero no tiene muchas esperanzas.",
                ima1: "cartoon-planning.png",

                /*** PASO #2: DECISION ***/
                goal2: "Busca por internet formas de convivencia baratas. Sabe que compartiendo piso le saldrá más barato, pero necesita un sitio en el que confiar",
                touch2: "Ordenador",
                feel2: "4",
                con2: "Hay muchas posibles páginas y estudiarlas todas resulta abrumador.",
                ima2: "cartoon-thinking.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Al final se decide por compartetupiso.com porque le gusta la idea del coliving y vivir con gente que comparte profesión",
                touch3: "Ordenador",
                feel3: "4",
                con3: "Aunque le gusta la idea, no tiene muy claro cómo va a funcionar esto",
                ima3: "cartoon-deciding2.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Lee toda la información de la página, lee el blog y acaba registrándose",
                touch4: "Ordenador",
                feel4: "2",
                con4: "La idea le parece muy chula, pero hasta que no vea el funcionamiento del sistema está un poco reticente. Tras registrarse le enlaza a un grupo de Facebook y no confía mucho, pero entra",
                ima4: "cartoon-why.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Entra al grupo de Facebook y pregunta al personal de la página mediante la pestaña de contactow sobre el funcionamiento",
                touch5: "Ordenador",
                feel5: "3",
                con5: "Parece que no hay ningún sistema informático detrás del proceso, que todo son relaciones con personas. La verdad es que le sorprende y está un poco confundida",
                ima5: "cartoon-looking.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Al final entiende que se trata de personas que ponen en contacto a otras personas en función del tipo de convivencia que quieren experimentar y otra información acerca de ellos mismos. Al final le ofrecen compartir piso precisamente en Barcelona",
                touch6: "Ordenador",
                feel6: "3",
                con6: "Va a seguir adelante con esto pero sigue sin confiar demasiado en el sistema. De momento tiene ya el viaje a Barcelona y va a probar la experiencia.",
                ima6: "cartoon-going.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
