App.Modules.Fields.TextField = function (config) {

	App.Modules.Fields.Base.apply(this, arguments);

    this.label = document.createElement('label');
    this.elText = document.createElement('input');

    this.elText.type = 'text';
	this.elText.name = config.name || '';
    this.elText.required = config.mandatory || false;

    this.setLabel = function (label) {
        this.label.innerHTML = label;
    };

    this.setLabel(config.name);

    this.el.appendChild(this.label);
    this.el.appendChild(this.elText);

};