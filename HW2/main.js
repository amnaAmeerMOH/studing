function dateTime(){
    var now = new Date();
    var datetime = now.toLocaleString();
    document.getElementById("date").innerHTML = datetime;
}
setInterval(dateTime, 1000);