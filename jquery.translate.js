(function($){
	$.fn.extend({
		translate : function(json){
			var getDictionary = function(json){
				var result;
				$.ajax(json, {
					async : false,
					success : function(data){
						result = data;
					},
					fail : function(){
						console.log('Error al obtener el diccionario. Verifique la ruta y la sintaxis');
					}
				});
				return result;
			};
			var dictionary = getDictionary(json);
			var elements = this.find('*');
			for (var i = 0; i < elements.length; i++) {
				for(key in dictionary){
					if(elements[i].innerHTML == key)
						elements[i].innerHTML = dictionary[key];
				}
			};
		}
	});
})(jQuery);
