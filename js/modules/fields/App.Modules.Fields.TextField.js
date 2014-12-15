App.Modules.Fields.TextField = function (config) {

	App.Modules.Fields.Base.apply(this, arguments);

	//TODO trazer texto com o titulo do field
	this.label.innerHTML = 'laurindo';

	this.elText = document.createElement('input');
	this.elText.type = 'text';
	this.elText.name = config.name || '';
	this.elText.attributes.mandatory = config.mandatory || false;

	this.el.appendChild(this.elText);

};