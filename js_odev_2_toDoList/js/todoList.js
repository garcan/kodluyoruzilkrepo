// onLoad();
// listemize ekleme yapiyoruz.
function newElement(){
    let taskDOM = document.querySelector("#task");
    let inputLi = taskDOM.value; 
    let control = Array.from(inputLi).filter(deger => deger != " ");
    console.log(control + "uzunluk "+control.length);
    
    if(control.length < 1 ){
        // alert("boş todolist yapamazsınız tekrar giriniz");
        $('.error').toast("show");
    }else{
        taskDOM.value = ""; //input bi degere atanıp documan ici bosaltılır.
        // console.log(inputLi);
        let myLi = document.createElement('li');
        myLi.textContent = inputLi;
        // console.log(myLi);
        let liDOM = document.querySelector("#list");
        liDOM.appendChild(myLi);
        var toStorage = liDOM.innerHTML;
        // console.log(toStorage);
        localStorage.setItem('listemiz', JSON.stringify(toStorage));
        $( '.success').toast("show");
    }
}

// sayfa başta yüklenirken mevcut todolist i yukleyecek
function onLoad(){
    let liDOM = document.querySelector("#list");
    liDOM.innerHTML = JSON.parse(localStorage.getItem('listemiz'));
}
