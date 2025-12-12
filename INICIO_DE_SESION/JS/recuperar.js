const btnNewPass = document.getElementById("btnNewPass");
const newPass = document.getElementById("newPass");
const msg = document.getElementById("msgRecover");

btnNewPass.addEventListener("click", () => {
    let userData = JSON.parse(localStorage.getItem("usuarioData"));

    if (!/^.{4,}$/.test(newPass.value)) {
        msg.textContent = "La contraseña debe tener al menos 4 caracteres.";
        return;
    }

    userData.contraseña = newPass.value;
    localStorage.setItem("usuarioData", JSON.stringify(userData));

    localStorage.setItem("intentos", 0);
    localStorage.setItem("bloqueado", false);

    msg.textContent = "Contraseña actualizada. Ahora puede iniciar sesión.";
});