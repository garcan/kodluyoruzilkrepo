let ad_bilgisi = prompt("Adınızı Giriniz:");

let doc_data = document.getElementById ("myName");

doc_data.innerText = ad_bilgisi ;

var doc_time = document.getElementById("myClock");


setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day_id = time.getDay();
    var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    let day_name = new Intl.DateTimeFormat('tr-TR', options).format();
    // console.log(day_id);
    am_pm = "ö.ö.";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "ö.s.";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "ö.ö.";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = day_name + " Saat "+ hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("myClock")
            .innerHTML = currentTime;
}
