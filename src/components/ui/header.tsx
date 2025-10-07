import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <NavLink
              to="/#home"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive ? "text-primary border-b-4 border-primary" : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          
         
         
          <li>
            <NavLink
              to="/#contact"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive ? "text-primary border-b-4 border-primary" : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive ? "text-primary border-b-4 border-primary" : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              Shop
            </NavLink>
          </li>
        
          <li>
  <a
    href="https://www.instagram.com/anuracandles.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg font-medium transition-colors text-muted-foreground hover:text-primary"
  >
    Book Our Order
  </a>
</li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;