;( function () {

	App.Modules.HttpRequest = (function () {

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
			};

            if (obj) {
                xhr.send(obj);
            } else {
                xhr.send();
            }

		}

		this.get = function (path) {
			_typeAction = _ACTION.get;
			_resourcePath = path;
			_initRequest();
		};

		this.post = function (resource, objData) {
			_typeAction = _ACTION.post;
			_resourcePath = resource;
			_initRequest(objData);
		};

		return {
            get: this.get,
            post: this.post
        };

	})();

})();