let yourname = prompt("Кто ты такой?");

if (yourname == "Админ") {
    let password = prompt("Твой пароль?");
    if (password == "123") {
        alert("Спасибо, входи");
    }
    else if (password == null){
        alert("Без пароля не впущу");
    }
    else {
        alert("Не верный пароль");
    }
    
}
else if (yourname == null){
    alert("Отмена");
}
else{
    alert("Я вас не знаю");
}