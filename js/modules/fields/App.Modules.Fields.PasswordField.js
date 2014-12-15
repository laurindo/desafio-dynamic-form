App.Modules.Fields.PasswordField = function (config) {

	App.Modules.Fields.TextField.apply(this, arguments);

	this.elText.type = 'password';
	this.elText.name = config.name || '';
	this.elText.attributes.mandatory = config.mandatory || false;

};