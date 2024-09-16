let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let contrasena = document.getElementById('contrasena');

function generar(params) {
    let numeroDigitado = parseInt(cantidad.value);
   console.log(numeroDigitado);
    if (numeroDigitado < 6)
{
alert("el numero digitado debe ser mayor  o igual a 6")
    }
    let password = '';
        //i <= numero digitado para iniciar en 1
    for (let i = 0; i < numeroDigitado; i++ ){    //i < numero digitado para iniciar en 0
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];  //genera numero entero redondeado entre 0 y 1
        console.log(caracterAleatorio);

        password += caracterAleatorio;
    }
    console.log('password generada:' + password);
    contrasena.value = password;
}
console.log(typeof texto);
console.log(typeof cantidad);
 

   








