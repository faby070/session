const btnRegistro = document.getElementById("btnRegistro");
const nombre = document.getElementById("nombre");
const usuario = document.getElementById("usuario");
const movil = document.getElementById("movil");
const pass = document.getElementById("pass");
const msg = document.getElementById("msgRegistro");

btnRegistro.addEventListener("click", () => {

    if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+){1}$/.test(nombre.value)) {
        msg.textContent = "ingrese nombre y apellido";
        return;
    }

    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(usuario.value)) {
        msg.textContent = "Correo inválido.";
        return;
    }

    if (!/^(\+591|591|0)?[67]\d{7}$/.test(movil.value)) {
        msg.textContent = "Número boliviano inválido.";
        return;
    }

    if (pass.value.trim() === "") {
        msg.textContent = "Contraseña no puede estar vacía.";
        return;
    }

    const datos = {
        nombre: nombre.value,
        usuario: usuario.value,
        contraseña: pass.value
    };

    localStorage.setItem("usuarioData", JSON.stringify(datos));
    localStorage.setItem("intentos", 0);
    localStorage.setItem("bloqueado", false);

    msg.textContent = "Registrado con éxito.";
});