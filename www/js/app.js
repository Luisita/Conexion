// función para probar la conectividad
$('#formulario').submit(function() {
	
	texto = checkConnection();
	$("#tipo").val(texto);
	$.mobile.changepage("#resultado")
});

function checkConnection() {
		var networkState = navigator.network.connection.type;
		var states = {};
		states[Connection.UNKNOWN] = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI] = 'WiFi connection';
		states[Connection.CELL_2G] = 'Cell 2G connection';
		states[Connection.CELL_3G] = 'Cell 3G connection';
		states[Connection.CELL_4G] = 'Cell 4G connection';
		states[Connection.NONE] = 'No network connection';
		var txt = states[networkState];
		return txt;
}

$('#regresar').submit(function() {
	$("#tipo").val("");
	$.mobile.changepage("#index")
});