import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"

import {auth} from "./firebase.js";

const  form_idea = document.querySelector("#form_idea");

form_idea.addEventListener('submit', async ev => {
    ev.preventDefault();
    const email = form_idea['email'].value; // Obtiene el valor del campo de correo electrónico del formulario
    const password = form_idea['password'].value; // Obtiene el valor del campo de contraseña del formulario

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password); // Intenta iniciar sesión con el correo electrónico y la contraseña proporcionados
        console.log(credentials); // Muestra en la consola las credenciales de inicio de sesión
        window.location.href = "index.html"; // Redirige al usuario a la página "index.html" después de iniciar sesión con éxito
    } catch (error) {
        // Si se produce un error durante el inicio de sesión, se ejecuta el bloque catch

        if (error.code === 'auth/wrong-password') {
            alert('Invalid password'); // Muestra una alerta al usuario si la contraseña es incorrecta
        } else if (error.code === 'auth/user-not-found') {
            alert('Invalid email'); // Muestra una alerta al usuario si el correo electrónico no está registrado
        } else if (error.code) {
            alert('Something went wrong'); // Muestra una alerta genérica si ocurre cualquier otro error
        }
    }
});