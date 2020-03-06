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
		$scope.Grupo_ID ="DIU1.ABCDEF";
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
				Name: "Javier Cole",
                Photo: "javier-cole.jpg",

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

                goal3: "Decide que va a probar una forma compartición abierta, nada de alquiler tradicional",
                touch3: "Ordenador",
                feel3: "4",
                con3: "No sabe si encontrará información suficiente",
                ima3: "cartoon-deciding2.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Por redes sociales le recomiendan Compartetupiso.com",
                touch4: "Móvil (Twitter)",
                feel4: "5",
                con4: "Entra a la página y ve que es básicamente lo que él busca, una convivencia más relajada y abierta",
                ima4: "cartoon-PCSurprised.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Lee la información del inicio, lo que promete, y se ve bastante profesional. Pero no está nada claro como funciona",
                touch5: "Ordenador",
                feel5: "3",
                con5: "Realmente no ve cómo contactar con personas que comparten, o una forma de que le contacten. Intenta registrarse y le piden que entre a un grupo de Facebook, pero él no tiene cuenta",
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
				Name: "Monica Suarez",
                Photo: "woman.png",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",

                /*** PASO #2: DECICION ***/
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
