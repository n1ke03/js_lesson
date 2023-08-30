let count = prompt("сколько сторон у квадрата?");
count = +count
if(count == 4) {
    alert("Верно!");
}
else if(count > 4){
    alert("Слишком много, попробуй ещё");
}
else if(count < 0){
    alert("Тут ты вообще не прав");
}
else{
    alert ("Не верно");
}