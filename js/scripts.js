var navLinks = document.getElementById("navLinks");
    function showMenu() {
      navLinks.style.right ="0";
      navLinks.style.display = "block";
      navLinks.style.transition = "0.5s";
    }
    function hideMenu() {
      navLinks.style.right = "-200px";
      navLinks.style.display = "none";
      navLinks.style.transition = "0.5s";
    }