App.Modules.Fields.TelField = function (config) {

	App.Modules.Fields.TextField.apply(this, arguments);

	this.elText.type = 'tel';
	this.elText.name = config.name || '';
	if (config.mandatory) {
        this.elText.required = true;
    }

};