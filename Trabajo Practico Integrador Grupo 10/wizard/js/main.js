(function($) {

    var form = $("#signup-form");
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous : 'Previous',
            next : 'Next',
            finish : 'Submit',
            current : ''
        },
        titleTemplate : '<div class="title"><span class="title-text">#title#</span><span class="title-number">0#index#</span></div>',

        onFinished: function (event, currentIndex)
        {
            alert('Sumited');
        }
    });
    
    
})(jQuery);

valor = document.switch.check.value
if (document.switch.check.checked == true) {
    deportes = document.switch.check.value;
    }
function info() {
    texto = document.getElementById("caja")
    if (document.suscripcion.deportes.checked == true) {
        deportes = "<h4>" + document.suscripcion.deportes.value; + "</h4>";
    }
        else { deportes = "" }	
        if (document.switch.check.checked == true) {
           noticias = "<h4>" + document.suscripcion.noticias.value; + "</h4>";
           }
        else { noticias = "" }	
        if (document.suscripcion.economia.checked == true) {
           economia = "<h4>" + document.suscripcion.economia.value; + "</h4>";
           }	
        else { economia = "" }	
        if (document.suscripcion.cultura.checked == true) {
           cultura = "<h4>" + document.suscripcion.cultura.value; + "</h4>";
           }
        else { cultura = "" }	
        if (document.suscripcion.medioambiente.checked == true) {
           medioambiente = "<h4>" + document.suscripcion.medioambiente.value; + "</h4>";
           }		 		
        else { medioambiente = "" }	
        texto.innerHTML += deportes + noticias + economia + cultura + medioambiente
        }

        onclick="enviarDatos()";
        
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
    $("#apellido recibido").val(objetoRespuesta.lastname);
    $("#telefono-recibido").val(objetoRespuesta.phone);
    $("#email-recibido").val(objetoRespuesta.email);
}