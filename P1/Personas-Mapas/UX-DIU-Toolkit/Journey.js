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
                goal1: "Pregunta por redes sociales una forma de compartir su casa sin tener que recurrir al alquiler\
				tradicional. Le recomiendan compartetupiso.com.",
                touch1: "Móvil (Twitter)",
                feel1: "5",
                con1: "Entra a la página y ve que es básicamente lo que él busca, una convivencia más relajada y abierta",
                ima1: "cartoon-PCSurprised.png",

                /*** PASO #2: DECISION ***/
                goal2: "Entra a la página. Lee por encima los primeros cuadros de información y pasa directamente al apartado de\
				¿Qué experiencia quieres vivir? Decide que le gustaría tomar la opción Un freelance por el mundo. Eso le recuerda mucho\
				a él.",
                touch2: "Ordenador",
                feel2: "4",
                con2: "De momento parece que lo único que hay en la página es información y poca interacción",
                ima2: "cartoon-deciding2.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Tras un par de vueltas a la página ve el botón de Cómo funciona. Tras leerlo detenidamente decide registrarse como\
				anfitrión. Al hacer esto le recomiendan que visite una página de Facebook. La ve y parece que es real. Además le hacen un\
				cuestionario para hacer su perfil",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Le resulta raro que la página no tenga un apartado más explícito mediante el que contactar con personas.\
				Simplemente hay un formulario que funciona por correo o está el grupo de Facebook que funciona directamente en \
				otra página.",
                ima3: "cartoon-PCtyping.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Tardan más de lo que creía en responderle. Le dicen ya qué persona va a acoger y le envían su ficha.",
                touch4: "Ordenador",
                feel4: "2",
                con4: "Creía es el proceso iba a ser más rápido. Pero supone que lo hacen a mano y por eso tarda más",
                ima4: "cartoon-why.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Lee la ficha de su nuevo inquilino, su historia y sus inquietudes y su trabajo. Le recuerda mucho a él y a Maya, su ex\
				esposa y le da un vuelco al corazón",
                touch5: "Ordenador",
                feel5: "1",
                con5: "Esa persona le ha recordado demadiado a su relación y le ha dado un golpe de tristeza.",
                ima5: "cartoon-sad.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Al menos de momento va a desestimar esta opción y va a probar con otras más convencionales.",
                touch6: "Ordenador",
                feel6: "2",
                con6: "Se ha dado cuenta que quizá no le ayude a superar la reptura el compartir hogar con personas que\
				le recuerden esos momentos que pasó con Maya",
                ima6: "cartoon-thinking.png",

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
                goal1: "Ya que va a trabajar a distancia puede permitirse ir viajando por España mientras viaja. Explorando posibilidades\
				encuentra Compartetupiso.com",
                touch1: "Ordenador",
                feel1: "4",
                con1: "Le parece un sitio bonito y simple que parece que ofrece lo que busca.",
                ima1: "cartoon-planning.png",

                /*** PASO #2: DECISION ***/
                goal2: "Le parece que la opción que más se puede adaptar a ella es la de Un freelance por el mundo ya que, aunque no es \
				freelance, pretende ir cambiando de sitio el que vivr cada poco tiempo",
                touch2: "Ordenador",
                feel2: "3",
                con2: "No tiene claro si esa es la mejor opción",
                ima2: "cartoon-thinking.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Se registra y contacta con el personal de la página para preguntar si la experiencia que busca se ajusta con la que ha elegido.",
                feel3: "4",
                con3: "Según la página y el grupo de Facebook parece que esto es profesional y son competentes",
                ima3: "cartoon-looking.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Le comentan que su opción es la mejor para sus necesidades de modo que procede a leer el blog que hay en la página para\
				ir informándose de la vida en convivencia.",
                touch4: "Ordenador",
                feel4: "5",
                con4: "Le parecen muy útiles todos los artículos",
                ima4: "cartoon-PCSurprised.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Le responden bastante rápido con un lugar en el que pasar varios meses",
                touch5: "Ordenador",
                feel5: "5",
                con5: "Le encanta el sitio y en la ficha de los anfitriones pone que les gusta la informática, así que está encantada.",
                ima5: "cartoon-PChappy.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Le ha parecido todo un acierto utilizar esta página",
                touch6: "Ordenador",
                feel6: "5",
                con6: "Está muy emocionada por empezar a vivir en su nueva casa",
                ima6: "cartoon-happy.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
