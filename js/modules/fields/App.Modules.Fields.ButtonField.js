App.Modules.Fields.ButtonField = function (config) {

	App.Modules.Fields.Base.apply(this, arguments);

	this.elText = document.createElement('button');
	this.elText.type = 'submit';
	this.elText.innerHTML = 'Enviar';
	this.elText.name = config.name || '';
	this.elText.value = config.value || 'Enviar';
    this.elText.addEventListener('click', addListener);

	this.el.appendChild(this.elText);

    function addListener () {
        var obj = getValueOnField();
        App.Modules.HttpRequest.post('/user', obj);
    }

    function getValueOnField () {
        var inputs = document.querySelectorAll('.parentField input');
        var jsonObj = '{';
        for ( var i = 0; i < inputs.length; i++ ) {

            var colon = '';
            var name = inputs[i].name;
            var value = inputs[i].value;

            if ( (i + 1) < inputs.length ) {
                colon =  ',';
            }

            jsonObj += name + ': "' + value + '"' + colon;

        }
        jsonObj += '}';
        return jsonObj;
    }

};