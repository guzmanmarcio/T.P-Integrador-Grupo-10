function enviarDatos() {
    let nombre = $("#name").val();
    let apellido = $("#lastname").val();
    let telefono = $("#phone").val();
    let email = $("#email").val();

    $.ajax({
        method: "POST",
        url: "https://reqres.in/api/users",
        data: {
            "name": nombre,
            "lastname": apellido,
            "phone": telefono,
            "email": email
        }
    }).done(function(objetoRespuesta) {
        console.log(objetoRespuesta);
        mostrarDatos(objetoRespuesta);
    })
}

function mostrarDatos(objetoRespuesta) {
    $("#nombre-recibido").val(objetoRespuesta.name);
    $("#apellido-recibido").val(objetoRespuesta.lastname);
    $("#telefono-recibido").val(objetoRespuesta.phone);
    $("#email-recibido").val(objetoRespuesta.email);
}