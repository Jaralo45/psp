
const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible"),
      $reserva = document.getElementById("reserva");
      $fechai = document.getElementById("fechai");
      $fechaf = document.getElementById("fechaf");

document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
});

document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if($password.value == "123456" && $username.value == "grupo16"){
            e.preventDefault();
            window.location.href = "index.html";
        }else{
            alert("Usuario o contraseña incorrecta");
        }
    }
});

document.addEventListener("click", (e)=>{
    if(e.target === $reserva){
        if($fechai.value !== "" && $fechaf.value !== ""){
            e.preventDefault();
            window.location.href = "index.html";
        }else{
        alert("Por favor diligencia los campos de Fecha inicio y Fecha fin.");
        }
    }
});