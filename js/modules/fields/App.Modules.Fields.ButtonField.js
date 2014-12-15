App.Modules.Fields.ButtonField = function (config) {

	App.Modules.Fields.Base.apply(this, arguments);

	this.elText = document.createElement('button');
	this.elText.type = 'button';
	this.elText.innerHTML = 'Enviar';
	this.elText.name = config.name || '';
	this.elText.value = config.value || 'Enviar';

	this.el.appendChild(this.elText);

};