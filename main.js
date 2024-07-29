var f5 = `H9MKYDQ099
Y6491TXY0J
80M13EFT1Y
FHK4J9YQRP
NT37RKRJ7E`;

var rdp = `TC8582K2MD 
M628K6KH6V
XY7JFR31XM
YWYWHMHEXN
TYMVPDQ2J2`;

function init () {
  console.log("init");

  document.getElementById("input-f5").addEventListener("onInput", showCurrentValue);  
  document.getElementById("input-rdp").addEventListener("onInput", showCurrentValue);  
}

function showCurrentValue(event)
{
    console.log("showCurrentValue");
  
    const value = event.target.value;
    document.getElementById("label").innerText = value;

    console.log(this.className); // logs the className of my_element
    console.log(e.currentTarget === this); // logs `true`
    console.log("value: " + value);
}

document.addEventListener("DOMContentLoaded", function(arg) {
    init();
});
