function welcome(){
var name = prompt("enter your name");
var msg = document.getElementById("message");
msg.innerHTML = "" + name; 
}

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>


