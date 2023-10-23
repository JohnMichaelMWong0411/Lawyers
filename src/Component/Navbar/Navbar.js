import './Navbar.css';
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".menu li");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const checkbox = document.getElementById("checkbox_toggle");
      checkbox.checked = false;
    });
  });
});


const Navbar = () => {
  return (
      <div id="Navbar" className="Navbar-container">
            <div class="logo">
                <img src="logo2.png" alt="logo"/>
            </div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Associates</a></li>
                <li><a href="#">Practice Areas</a></li>
                <li><a href="#">Contact Us</a></li>
                </div>
              </ul>
      </div>
  );
}
export default Navbar;