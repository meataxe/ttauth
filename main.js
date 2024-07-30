var f5 = `H9MKYDQ099
Y6491TXY0J
80M13EFT1Y
FHK4J9YQRP
NT37RKRJ7E`.split("\n");

var rdp = `TC8582K2MD 
M628K6KH6V
XY7JFR31XM
YWYWHMHEXN
TYMVPDQ2J2`.split("\n");

function init () {
  console.log("init");

  document.getElementById("input-f5").addEventListener("input", showCurrentValue);  
  document.getElementById("input-rdp").addEventListener("input", showCurrentValue);  
}

function showCurrentValue(event)
{
    console.log("showCurrentValue");  
    const value = event.target.value.toLowerCase();
    const src = this.id.split('-')[1];

    if (value.length !== 6 || !["rdp", "f5"].includes(src) ) { return; }

    /* [item][index][row|column] */
    const offset = "a".charCodeAt(0);
    var 
      i1c = value[0].charCodeAt(0) - offset, i1r = value[1],
      i2c = value[2].charCodeAt(0) - offset, i2r = value[3],
      i3c = value[4].charCodeAt(0) - offset, i3r = value[5];

    if (i1c > 10 || i2c > 10 || i3c > 10) { return; }
    if (i1r > 5 || i2r > 5 || i3r > 5) { return; }  
  
    var result = src === "f5"
      ? f5[i1r][i1c] + f5[i2r][i2c] + f5[i2r][i2c]
      : rdp[i1r][i1c] + rdp[i2r][i2c] + rdp[i2r][i2c];
  
    console.log(this.className); // logs the className of my_element
    console.log("value: " + value);
    console.log("index: " + `${i1r}:${i1c} | ${i2r}:${i2c} | ${i2r}:${i2c}`);
    console.log("result: " + result);
}

document.addEventListener("DOMContentLoaded", function(arg) {
    init();
});
