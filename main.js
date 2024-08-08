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
  document.getElementById("input-f5").addEventListener("input", showCurrentValue);  
  document.getElementById("input-rdp").addEventListener("input", showCurrentValue);  
  document.getElementById("btn-clear").addEventListener("click", clearContents);
  document.getElementById("btn-copy-f5").addEventListener("click", copyContents);
  document.getElementById("btn-copy-rdp").addEventListener("click", copyContents);
}

function copyContents() {
  const targetId = event.target.id;
  const text = targetId === "btn-copy-f5" 
    ? document.getElementById('code-f5').value
    : document.getElementById('code-rdp').value;
  
  navigator.clipboard.writeText(text)
}

function clearContents () {
  document.getElementById('input-f5').value = "";
  document.getElementById('input-rdp').value = "";
  document.getElementById('code-f5').value = "";
  document.getElementById('code-rdp').value = "";
}

function showCurrentValue(event)
{
    const value = event.target.value.toLowerCase();
    const src = this.id.split('-')[1];

    document.getElementById(`code-${src}`).value = "";

    if (value.length !== 6 || !["rdp", "f5"].includes(src) ) { return; }

    /* [item][index][row|column] */
    const offset = "a".charCodeAt(0);
    var 
      i1c = value[0].charCodeAt(0) - offset, i1r = value[1] - 1,
      i2c = value[2].charCodeAt(0) - offset, i2r = value[3] - 1,
      i3c = value[4].charCodeAt(0) - offset, i3r = value[5] - 1;

    if (i1c > 10 || i2c > 10 || i3c > 10) { return; }
    if (i1r > 5 || i2r > 5 || i3r > 5) { return; }  
  
    var result = src === "f5"
      ? f5[i1r][i1c] + f5[i2r][i2c] + f5[i3r][i3c]
      : rdp[i1r][i1c] + rdp[i2r][i2c] + rdp[i3r][i3c];
  
    //console.log(this.className); // logs the className of my_element
    //console.log("value: " + value);
    //console.log("index: " + `${i1r}:${i1c} | ${i2r}:${i2c} | ${i3r}:${i3c}`);
    //console.log("result: " + result);

    document.getElementById(`code-${src}`).value = result;
}

document.addEventListener("DOMContentLoaded", function(arg) {
    init();
});
