/**
* @{string} screenName - é o parametro referente ao nome da tela
* Controller responsável pela gerência das telas do app
*/
App.Controllers.Screen = function () {


	this.get = function (screenName) {

		if ( !screenName ) {
			screenName = 'index';
		}

		new App.Services.Screen().get(screenName);

	};

	return this;

};