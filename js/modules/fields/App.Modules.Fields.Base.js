App.Modules.Fields.Base = function () {

	this.el = document.createElement('div');
	this.el.className = 'parentField';

	this.label = document.createElement('label');
	this.label.innerHTML = 'Title Text';

	this.el.appendChild(this.label);

};