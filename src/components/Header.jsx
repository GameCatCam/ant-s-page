import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <img className="fakeheaderimg" src="..\src\assets\images\fakenametag.png" alt="a nametag with the text 'Anthony Iacano' displayed over it" />
      <div><img className="headerimg" src="..\src\assets\images\nametag.png" alt="a nametag with the text 'Anthony Iacano' displayed over it" /></div>

      <h1 id="h1-shadow">Anthony <br /> Iacano</h1>
      <h1>Anthony <br /> Iacano</h1>

      {/* Start of the Navigation Menu */}
      <Navigation
        links={[
          // Home Nav
          <li key={1}>
            <NavLink to="/"> 
              Home
            </NavLink>
          </li>,
          // Portfolio Nav
          <li key={2}>
            <NavLink to="/portfolio">
              Portfolio
            </NavLink>
          </li>,
          // Resume Nav
          <li key={3}>
            <NavLink to="/resume">
              Resume
            </NavLink>
          </li>,
          // Contact Nav
          <li key={4}>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>,
        ]}
      />
    </header>
  );
}



