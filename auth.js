
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if(user === "AH" && pass === "AAaa2211") {
    window.location.href = "stream.html";
  } else {
    alert("Zugang verweigert!");
  }
});
