import React from "react";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a className="navbar-band" href="/">
            Clicky Game
          </a>
        </li>
        <li>Click an image to begin!</li>
        <li>Score: | Top Score:</li>
      </ul>
    </nav>
  );
}

export default Nav;