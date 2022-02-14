import React from "react";

function SideBar() {
  return (
    <div class="sidebar">
      <ul class="navbar-nav sidebar sidebar-dark">
        <a class="brand" href="/">
          <div class="sidebar-brand-text mt-3 mx-5">MICRONIC</div>
          <hr />
        </a>

        <div class="nav-item">
          <a class="nav-link" href="/">
            <i class="fas fa-toggle-on"></i>
            <span>Dashboard</span>
          </a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="/kategoriwisata">
            <i class="fas fa-toggle-on"></i>
            <span>Kategori Wisata</span>
          </a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="/wisata">
            <i class="fas fa-toggle-on"></i>
            <span>Wisata</span>
          </a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="/destinasi">
            <i class="fas fa-toggle-on"></i>
            <span>4 Destinasi Wisata Pilihan</span>
          </a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="/berita">
            <i class="fas fa-toggle-on"></i>
            <span>Berita & Informasi</span>
          </a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="/halaman">
            <i class="fas fa-toggle-on"></i>
            <span>Halaman</span>
          </a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="/atribut">
            <i class="fas fa-toggle-on"></i>
            <span>Master Atribut Informasi Wisata</span>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default SideBar;
