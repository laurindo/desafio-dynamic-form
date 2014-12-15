/**
* @{string} screenName - é o parametro referente ao nome da tela
* Serviço responsável por montar a tela
*/
App.Services.Screen = function (screenName) {

	if ( !screenName ) {
		screenName = 'index';
	}

	var docfrag = document.createDocumentFragment();

	this.get = function () {

		var model = new App.Model.Screen();
		var sections = model.get();
		var bodyPage = document.getElementById('app-user');

		this.createForm(sections);
		
		bodyPage.appendChild(docfrag);

	};

	this.createForm = function (sections) {

		var field = new App.Field.Factory();
		sections.forEach( (function (self) {

			return function (index, value) {

				var titleSpan = document.createElement('span');
				titleSpan.innerHTML = index.description;
				docfrag.appendChild(titleSpan);
				self.getTypeField(index.fields);

			}

		})(this));

	};

	this.getTypeField = function (fields) {

		if (!fields) {
			return;
		}

		fields.forEach( function (index) {

			var type = index.type;
			var fieldFactory = new App.Field.Factory();
			var childEl = fieldFactory[type](index);
			docfrag.appendChild(childEl.el);

		});

	};


};