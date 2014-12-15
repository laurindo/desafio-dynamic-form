App.Field.Factory = function () {

	return {

		text: function (config) {

			return new App.Modules.Fields.TextField(config);

		},

		password: function (config) {

			return new App.Modules.Fields.PasswordField(config);

		},

		date: function (config) {

			return new App.Modules.Fields.DateField(config);

		},

		checkbox: function (config) {

			return new App.Modules.Fields.CheckBoxField(config);

		},

		tel: function (config) {

			return new App.Modules.Fields.TelField(config);

		},

		button: function (config) {

			return new App.Modules.Fields.ButtonField(config);

		}



	}

};