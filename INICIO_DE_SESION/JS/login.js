const btnLogin = document.getElementById("btnLogin");
const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");
const msg = document.getElementById("loginMessage");
const recoverLink = document.getElementById("recoverLink");

document.getElementById("toggleEye").addEventListener("click", (e) => {
    loginPass.type = loginPass.type === "password" ? "text" : "password";
    e.target.classList.toggle("open");
});

let userData = JSON.parse(localStorage.getItem("usuarioData"));

let intentos = Number(localStorage.getItem("intentos")) || 0;
let bloqueado = localStorage.getItem("bloqueado") === "true";

btnLogin.addEventListener("click", () => {

    userData = JSON.parse(localStorage.getItem("usuarioData"));

    if (!userData) {
        msg.textContent = "No existe ninguna cuenta registrada.";
        return;
    }

    if (bloqueado) {
        msg.textContent = "Cuenta bloqueada por intentos fallidos.";
        recoverLink.style.display = "block";
        return;
    }

    if (loginUser.value === userData.usuario &&
        loginPass.value === userData.contraseña) {

        localStorage.setItem("intentos", 0);
        localStorage.setItem("bloqueado", false);

        msg.textContent = "Bienvenido al sistema, " + userData.nombre;
    }
    else {
        intentos++;
        localStorage.setItem("intentos", intentos);

        if (intentos >= 3) {
            msg.textContent = "Cuenta bloqueada por intentos fallidos.";
            localStorage.setItem("bloqueado", true);
            recoverLink.style.display = "block";
        } else {
            msg.textContent = "Usuario o contraseña incorrectos.";
        }
    }
});