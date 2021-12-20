
$(document).ready(function () {
    estadoInicial()
});

/**
 * Intenta autenticar al usuario en la aplicaciòn
 */
function registrar(){
    //capturar los datos que ingreso el usuario en la pagina
    let name = $("#username").val()
    let email = $("#useremail").val()
    let password = $("#password").val()
    let repeatpassword = $("#passwordrepeat").val()

    let datos={
        email : $("#useremail").val(),
        password : $("#password").val(),
        name : $("#username").val()
    }

    let datosPeticion = JSON.stringify(datos)

    //utilizo la funcion de JQuery $.ajax para hacer un llamado asincrono
    //a un ws
    $.ajax({
        //url del servicio
        url: "http://localhost:8081/api/user/new",
        
        data: datosPeticion,
        type: 'POST',
        contentType: "application/JSON",
        dataType: 'json',

        //success: funcion con acciones si todo sale ok
        success: function (respuesta) {
            console.log(respuesta);
            resultado(respuesta)	
        },

       
        error: function (xhr, status) {	
            console.log("algo fallo");	
        },
       
        complete: function (xhr, status) {
            console.log("Todo super bien"  + status);
        }
    });
}

function resultado(respuesta){
    let id = respuesta.id
    let nombre= respuesta.name

    if (id==null)
        alert("Usuario no registrado : " + nombre)
    else
        alert("Bienvenido : " + id + " "+ nombre)

}

function estadoInicial(){
    $("#username").focus()
}