function init () {
  console.log("init");

  document.getElementById("input-f5").addEventListener("onInput", function (e) { showCurrentValue(e, "f5"); });  
  document.getElementById("input-rdp").addEventListener("onInput", function (e) { showCurrentValue(e, "rdp"); });  
}

function showCurrentValue(event, sourceData)
{
    console.log("showCurrentValue: " + sourceData);
  
    const value = event.target.value;
    document.getElementById("label").innerText = value;

    console.log(this.className); // logs the className of my_element
    console.log(e.currentTarget === this); // logs `true`
}

window.onLoad(function() { init(); });
