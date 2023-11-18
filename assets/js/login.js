
const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible"),
      $reserva = document.getElementById("reserva");
      $fechai = document.getElementById("fechai");
      $fechaf = document.getElementById("fechaf");
      $nombre = document.getElementById("nombre");
      $correo = document.getElementById("correo");
      $contacto = document.getElementById("contacto");

      document.addEventListener("change", (e) => {
        if (e.target === $visible) {
            $password.type = $visible.checked ? "text" : "password";
        }
    });
    
    document.addEventListener("click", (e) => {
        if (e.target === $submit) {
            e.preventDefault();
    
            if ($password.value === "123456" && $username.value === "grupo16") {
                const alertElement = document.createElement("div");
                alertElement.className = "alert alert-success alert-dismissible fade show";
                alertElement.role = "alert";
                alertElement.innerHTML = "Inicio de sesión exitoso.";
    
                const closeButton = document.createElement("button");
                closeButton.type = "button";
                closeButton.className = "btn-close";
                closeButton.setAttribute("data-bs-dismiss", "alert");
                closeButton.setAttribute("aria-label", "Close");
                alertElement.appendChild(closeButton);
    
                document.getElementById("alertContainer").appendChild(alertElement);
    
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1000);
            } else {
                const alertElement = document.createElement("div");
                alertElement.className = "alert alert-danger alert-dismissible fade show";
                alertElement.role = "alert";
                alertElement.innerHTML = "Usuario o contraseña incorrecta.";
                document.getElementById("alertContainer").appendChild(alertElement);

                const closeButton = document.createElement("button");
                closeButton.type = "button";
                closeButton.className = "btn-close";
                closeButton.setAttribute("data-bs-dismiss", "alert");
                closeButton.setAttribute("aria-label", "Close");
                alertElement.appendChild(closeButton);
            }
        }
    });
    
document.addEventListener("click", (e) => {
    if (e.target === $reserva) {
        if ($fechai.value !== "" && $fechaf.value !== "") {
            e.preventDefault();
            const alertElement = document.createElement("div");
            alertElement.className = "alert alert-success alert-dismissible fade show";
            alertElement.role = "alert";
            alertElement.innerHTML = "Reserva realizada correctamente.";

            const closeButton = document.createElement("button");
            closeButton.type = "button";
            closeButton.className = "btn-close";
            closeButton.setAttribute("data-bs-dismiss", "alert");
            closeButton.setAttribute("aria-label", "Close");
            alertElement.appendChild(closeButton);

            document.getElementById("alertContainer").appendChild(alertElement);

            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000); 
        } else {
            const alertElement = document.createElement("div");
            alertElement.className = "alert alert-danger";
            alertElement.role = "alert";
            alertElement.innerHTML = "Por favor, diligencia los campos de Fecha inicio y Fecha fin.";
            document.getElementById("alertContainer").appendChild(alertElement);
        }
    }
});

document.addEventListener("click", (e) => {
    if (e.target === $contacto) {
        if ($nombre.value !== "" && $correo.value !== "") {
            e.preventDefault();
            
            const alertElement = document.createElement("div");
            alertElement.className = "alert alert-success alert-dismissible fade show";
            alertElement.role = "alert";
            alertElement.innerHTML = "Gracias por contactarnos, pronto nos comunicaremos contigo.";

            const closeButton = document.createElement("button");
            closeButton.type = "button";
            closeButton.className = "btn-close";
            closeButton.setAttribute("data-bs-dismiss", "alert");
            closeButton.setAttribute("aria-label", "Close");
            alertElement.appendChild(closeButton);

            document.getElementById("alertContainer").appendChild(alertElement);

            setTimeout(() => {
                window.location.href = "contacto.html";
            }, 5000); 
        } else {
            const alertElement = document.createElement("div");
            alertElement.className = "alert alert-danger alert-dismissible fade show";
            alertElement.role = "alert";
            alertElement.innerHTML = "Diligencia los campos para enviar el mensaje.";
            document.getElementById("alertContainer").appendChild(alertElement);

            const closeButton = document.createElement("button");
            closeButton.type = "button";
            closeButton.className = "btn-close";
            closeButton.setAttribute("data-bs-dismiss", "alert");
            closeButton.setAttribute("aria-label", "Close");
            alertElement.appendChild(closeButton);
        }
    }
});
