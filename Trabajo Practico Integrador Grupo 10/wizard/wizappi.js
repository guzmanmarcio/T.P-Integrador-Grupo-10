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

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), options)

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })

$('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

function cierre(){
    alert("Gracias por tu solicitud. Nos contactaremos a la brevedad");
}