function enviarDatos(){
    $("#basic-form").validate({
        rules: {
            name : {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            }
        },    
        messages : {
            name: {
                minlength: "Nombre debe tener al menos 3 letras"
            },
            email: "Email debe tener el formato: abc@domain.tld"  
        },
    })
};



