function NombresRandom() {

var texto = $('#texto').val();
console.log(texto);

var gender = $('#gender').val();


$.ajax({
	url: "http://uinames.com/api/?ext&region="+texto+"&gender="+gender,
	error: function (xhr) {
		alert("An error occured: " + xhr.status + " " + xhr.statusText);
	},

	success: function(api){

		$("#contenedor").remove(contenedor);

		var contenedor = document.createElement("div");
		$(contenedor).attr("id","contenedor");

		//Nombre
		var nombre = document.createElement("h2");
		$(nombre).html("<span class='descripcion'>Nombre: </span>");
		$(nombre).append(api.name);
		$(nombre).append(" " + api.surname);
		$(nombre).attr("id","nombre");
		$(contenedor).append(nombre);

		//Genero
		var gender = document.createElement("h2");
		$(gender).html("<span class='descripcion'>Género: </span>");

		if (api.gender=='male') {
			$(gender).append(api.gender='Masculino');
		}else{
			$(gender).append(api.gender='Femenino');
		}

		$(gender).attr('id','gender');
		$(contenedor).append(gender);

		//País
		var region = document.createElement("h2");
		$(region).html("<span class='descripcion'>País: </span>");
		$(region).append(api.region);
		$(region).attr('id','region');
		$(contenedor).append(region);

		//Edad
		var age = document.createElement("h2");
		$(age).html("<span class='descripcion'>Edad: </span>");
		$(age).append(api.age);
		$(age).attr('id','age');
		$(contenedor).append(age);


		$('#contenedorImgP').append(contenedor);
	}
})

return false;

}





/*
		//Apellido
		var surname = document.createElement("h2");
		$(surname).append(api.surname.toUpperCase());
		$(surname).attr('id','surname');
		$(contenedor).append(surname);

	//Caracteristicas lista
		var lista = document.createElement("ul");
		$(lista).attr('id','lista');
		//Caracteristicas
		//Peso
		var peso = document.createElement("li");
		$(peso).html("<span>Peso: </span>");
		$(peso).append(pokemon.weight);
		$(lista).append(peso);
		//Altura
		var altura = document.createElement("li");
		$(altura).html("<span>Altura: </span>");
		$(altura).append(pokemon.height);
		$(lista).append(altura);
		//Tipo
		var tipo = document.createElement("li");
		$(tipo).html("<span>Tipo: </span>");
		$(tipo).append(pokemon.types[0].type.name);
		$(lista).append(tipo);

		var habilidad = document.createElement("li");
		$(habilidad).html("<span>Habilidad: </span>");
		$(habilidad).append(pokemon.abilities[0].ability.name);
		$(lista).append(habilidad);

		var movimiento = document.createElement("li");
		$(movimiento).html("<span>Movimiento: </span>");
		$(movimiento).append(pokemon.moves[0].move.name);
		$(lista).append(movimiento);
	
		$(contenedor).append(lista);
*/