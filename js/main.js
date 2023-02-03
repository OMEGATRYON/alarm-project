const intID = setInterval(myTimer, 1000);
function myTimer() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("clock").innerHTML = time
  }
