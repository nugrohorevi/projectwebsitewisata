import React from "react";

function Navbar() {
  return (
    <div class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item dropdown no-arrow">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="navbar-judul">
              <i class="fas fa-users fa-2x"></i>
            </div>
          </a>

          <div class="dropdown-menu dropdown-menu-right ">
            <a class="dropdown-item" href="/profile">
              <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Setting
            </a>
            <a class="dropdown-item" href="#">
              <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Log Out
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
