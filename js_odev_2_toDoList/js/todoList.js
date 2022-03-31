//www.patika.dev
onLoad();
// listemize ekleme yaptigimiz fonksiyon
function newElement(){
    let taskDOM = document.querySelector("#task");
    let inputLi = taskDOM.value; 
    taskDOM.value = ""; //input bi degere atanıp documan ici bosaltılır.
    let control = Array.from(inputLi).filter(deger => deger != " ");
    
    if(control.length < 1 ){
        // alert("boş todolist yapamazsınız tekrar giriniz");
        $('.error').toast("show");
    }else{
        let myLi = document.createElement('li');
        myLi.textContent = inputLi;
        myLi.innerHTML += `<button style="padding-right: 5px; padding-top:5px;" class="close">&times</button>`; 
        // console.log(myLi);
        let liDOM = document.querySelector("#list");
        liDOM.appendChild(myLi);
        var toStorage = liDOM.innerHTML;
        localStorage.setItem('listemiz', JSON.stringify(toStorage));
        $( '.success').toast("show");
    }
}
function delElement(){

}
// sayfa başta yüklenirken mevcut todolist i yukleyecek

function onLoad(){
    let listDOM = document.querySelector("#list");
    listDOM.innerHTML = JSON.parse(localStorage.getItem('listemiz'));
    listDOM.addEventListener('click', clickEvent);
}

function clickEvent(e){
    if (e.target.className == 'close') {
        e.target.parentElement.remove();
    }else{
        e.target.classList.toggle('checked');

    }
    let liDOM = document.querySelector("#list");
    var toStorage = liDOM.innerHTML;
    localStorage.setItem('listemiz', JSON.stringify(toStorage));
}
