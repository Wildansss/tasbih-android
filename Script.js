function reset() {
    document.getElementById("kolom").value = 0;
    document.getElementById("end").innerHTML = ""
window.navigator.vibrate(300);
  
}

function plus() {
    let res = parseInt(document.getElementById("kolom").value);
    ++res;
    document.getElementById("kolom").value = res;
  if (res == 100)
    window.navigator.vibrate(600);
}

function minus() {
    let res = parseInt(document.getElementById("kolom").value);
    res = (res-1) <= 0 ? 0 : --res;
    document.getElementById("kolom").value = res;
if (res == 0)
      window.navigator.vibrate(600);
  
  
}

function set() {
    let res = document.getElementById("kolom").value=100;


        document.getElementById("end").innerHTML =   "TASBIH DI SET DI ANGKA 100" 
        window.navigator.vibrate(300);
        
}
