;( function () {

	App.Modules.HttpRequest = function () {

		var _resourcePath = null;
		var _ACTION = {
			get: 'GET',
			post: 'POST'
		};
		var _typeAction = _ACTION.get;
		
		function _initRequest (obj) {
			var xhr = new XMLHttpRequest();
			
			xhr.open(_typeAction, _resourcePath, true);
			xhr.setRequestHeader("Content-type", "application/json");

			xhr.onreadystatechange = function() {
			    if(xhr.readyState === 4 && xhr.status === 200) {
			        console.log(xhr.responseText);
			    }
			}

			xhr.send();
		}

		this.get = function (resource) {
			_typeAction = _ACTION.get;
			_resourcePath = resource;
			_initRequest();
		};

		this.post = function (resource, objData) {
			_typeAction = _ACTION.post;
			_resourcePath = resource;
			_initRequest(objData);
		};

		return this;

	};

})();