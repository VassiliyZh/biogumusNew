function app() {
    name1 = document.getElementById("name").value;
    email = document.getElementById("email").value;
    
    document.getElementById("conclucion").innerText = "Мы рады видеть Вас на нашем сайте, " + name1;
    document.getElementById("conclucion1").innerText = "Мы сохраним Ваш e-mail: " + email + " чтобы информировать Вас о самых последних новостях.";

}
