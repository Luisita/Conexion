// Función para emitir la vibracion
function vibrar(){
navigator.notification.alert(
"El teléfono vibrara",
null,
"Vibrar",
"Empezar"
);
navigator.notification.vibrate(1000);
}
// Función para emitir beep
function beep(){
navigator.notification.alert(
'El teléfono emitirá un beep',
null,
'Beep',
'Empezar'
);
navigator.notification.beep(1000);
}
// función para checar conexion
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
var txt = "<p>Tipo de conexi&oacuten: "+states[networkState]+"</p>";
alert(txt);
$("#testC").html(txt);
}