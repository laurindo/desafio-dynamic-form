App.Modules.Fields.TelField = function (config) {

	App.Modules.Fields.TextField.apply(this, arguments);

	this.el.type = 'tel';
	this.el.name = config.name || '';
	this.el.attributes.mandatory = config.mandatory || false;

};