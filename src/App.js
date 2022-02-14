import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./container/SideBar";
import Dashboard from "./component/Dashboard";
import KategoriWisata from "./component/KategoriWisata";
import Profile from "./component/Profile";
import Wisata from "./component/Wisata";
import Destinasi from "./component/Destinasi";
import Berita from "./component/Berita";
import Atribut from "./component/Atribut";
import Halaman from "./component/Halaman";
import TambahWisata from "./component/TambahWisata";
import TambahBerita from "./component/TambahBerita";

export default class App extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <SideBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/kategoriwisata" element={<KategoriWisata />} />
            <Route path="/wisata" element={<Wisata />} />
            <Route path="/destinasi" element={<Destinasi />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/atribut" element={<Atribut />} />
            <Route path="/halaman" element={<Halaman />} />
            <Route path="/tambahwisata" element={<TambahWisata />} />
            <Route path="/tambahberita" element={<TambahBerita />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
