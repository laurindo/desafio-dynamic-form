(function () {
	
	var GeneralField = function () {

		this.BaseField = function () {

			this.el = document.createElement('div');
			this.el.className = 'parentField';
			return this.el;

		};
	
		this.TextField = function () {

			this.elText = document.createElement('input');
			this.elText.type = 'text';

		};

		this.PasswordField = function () {

			this.elText = baseField.elText;
			this.elText.type = 'password';
			

		};

		this.rootEl = document.createElement('div');

		return this;

	};

	App.Fields.General = new GeneralField();

})();
