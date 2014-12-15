App.Modules.Fields.DateField = function (config) {

	App.Modules.Fields.TextField.apply(this, arguments);

	this.elText.name = config.name || '';
	this.elText.attributes.mandatory = config.mandatory || false;

};