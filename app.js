function app() {
    weight = parseInt(document.getElementById("weight").value);
    height = parseInt(document.getElementById("height").value);
    
    result = weight / (height*height/10000);
   

    switch (true) {
        case result <= 16:
            str = 'Выраженный дефицит массы тела';
            break;
        case result >16 && result <= 18.5:
            str = 'Недостаточная масса тел';
            break;
        case result >18.5 && result <= 24.99:
            str = 'Норма';
            break;
        case result >24.99:
            str = 'Избыточная масса тела';
            break;
  
        default:
            str = 'Ошибка ввода';
    }
    document.getElementById("result").innerText = str;

}