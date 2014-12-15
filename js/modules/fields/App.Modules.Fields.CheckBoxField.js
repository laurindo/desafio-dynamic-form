App.Modules.Fields.CheckBoxField = function (config) {

	App.Modules.Fields.TextField.apply(this, arguments);

	this.elText.type = 'checkbox';
	this.elText.name = config.name || '';
	this.elText.value = config.value || 'Habilitar';
	this.elText.attributes.checked = config.mandatory || false;

};