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
        var form = document.createElement('form');

		this.createFields(sections);

        form.appendChild(docfrag);
		bodyPage.appendChild(form);

	};

	this.createFields = function (sections) {

		sections.forEach( (function (self) {

			return function (index) {

				docfrag.appendChild( self.createSection( index ) );
				self.getTypeField( index.fields );

			}

		})(this));

	};

    this.createSection = function (data) {
        var titleSpan = document.createElement('div');
        titleSpan.className = 'section';
        titleSpan.innerHTML = data.description;
        return titleSpan;
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