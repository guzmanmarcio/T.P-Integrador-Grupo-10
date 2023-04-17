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



<<<<<<< HEAD
=======
messages : {
    name: {
      minlength: "Nombre debe tener al menos 3 letras"
    }
    email: {
      placeholder: "Email debe tener el formato: abc@domain.tld"
    }
}
>>>>>>> 26edbf88ec2c47f0f43cb5c9b0aefff46271d5cd
