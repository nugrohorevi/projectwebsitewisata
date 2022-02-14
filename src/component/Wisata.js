import React from "react";
import { Button, Form } from "react-bootstrap";
import Navbar from "../container/Navbar";

function Wisata() {
  return (
    <div class="isi">
      <Navbar />
      <hr />
      <div class="judul">Wisata</div>
      <hr />
      <div class="col-xl-12 col-md-6 mb-4">
        <div class="card shadow h-100 ">
          <div class="card-body">
            <div class="button">
              <Button variant="primary" href="/tambahwisata">
                Tambah Wisata
              </Button>
            </div>
            <div class="cari">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" />
            </div>
            <br />
            <table class="table table-borderless text-dark">
              <th scope="col">No</th>
              <th scope="col">Nama Wisata</th>
              <th scope="col">Kategori</th>
              <th scope="col">Alamat</th>
              <th scope="col">Aksi</th>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Pulau Bukulimau Underwater</td>
                  <td>Wisata Air</td>
                  <td>
                    Pulau Buku Limau, Pulau Buku Limau, East Belitung Regency,
                    Bangka Belitung Islands, Indonesia
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i
                        class="fa fa-trash"
                        onclick="return confirm('Yakin ?')"
                      ></i>
                    </a>
                    <a href="" class="btn btn-warning btn-sm">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="" class="btn btn-secondary btn-sm">
                      <i class="fa fa-images"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Galeri Maritim Belitung Timur</td>
                  <td>Wisata Sejarah</td>
                  <td>
                    Galeri Maritim Belitung Timur, Baru, East Belitung Regency,
                    Bangka Belitung Islands, Indonesia
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i
                        class="fa fa-trash"
                        onclick="return confirm('Yakin ?')"
                      ></i>
                    </a>
                    <a href="" class="btn btn-warning btn-sm">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="" class="btn btn-secondary btn-sm">
                      <i class="fa fa-images"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Gangan</td>
                  <td>Wisata Kuliner</td>
                  <td>
                    Gangan Wani, Tanjung Pendam, Belitung Regency, Bangka
                    Belitung Islands, Indonesia
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i
                        class="fa fa-trash"
                        onclick="return confirm('Yakin ?')"
                      ></i>
                    </a>
                    <a href="" class="btn btn-warning btn-sm">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="" class="btn btn-secondary btn-sm">
                      <i class="fa fa-images"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Geosite Gunong Lumut</td>
                  <td>Wisata Alam</td>
                  <td>
                    Desa Wisata Gunong Lumut, Jalan Jenderal Sudirman,
                    Limbongan, East Belitung Regency, Bangka Belitung Islands,
                    Indonesia
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i
                        class="fa fa-trash"
                        onclick="return confirm('Yakin ?')"
                      ></i>
                    </a>
                    <a href="" class="btn btn-warning btn-sm">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="" class="btn btn-secondary btn-sm">
                      <i class="fa fa-images"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>OWUN, Objek Wisata Unik Ngenjungak</td>
                  <td>Wisata Sejarah</td>
                  <td>
                    OWUN - Dinas Kebudayaan dan Pariwisata Belitung Timur,
                    Padang, East Belitung Regency, Bangka Belitung Islands,
                    Indonesia
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i
                        class="fa fa-trash"
                        onclick="return confirm('Yakin ?')"
                      ></i>
                    </a>
                    <a href="" class="btn btn-warning btn-sm">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="" class="btn btn-secondary btn-sm">
                      <i class="fa fa-images"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Pantai Nyiur Melambai</td>
                  <td>Wisata Air</td>
                  <td>
                    Pantai nyiur melambai, Manggar, Kab. Belitung Tim.,
                    Kepulauan Bangka Belitung, Lalang, Manggar, Kabupaten
                    Belitung Timur, Kepulauan Bangka Belitung
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i
                        class="fa fa-trash"
                        onclick="return confirm('Yakin ?')"
                      ></i>
                    </a>
                    <a href="" class="btn btn-warning btn-sm">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="" class="btn btn-secondary btn-sm">
                      <i class="fa fa-images"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Pantai Serdang</td>
                  <td>Wisata Air</td>
                  <td>
                    seafood pantai serdang, Baru, Belitung Regency, Bangka
                    Belitung Islands, Indonesia
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i
                        class="fa fa-trash"
                        onclick="return confirm('Yakin ?')"
                      ></i>
                    </a>
                    <a href="" class="btn btn-warning btn-sm">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="" class="btn btn-secondary btn-sm">
                      <i class="fa fa-images"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Replika Sekolah Laskar Pelangi</td>
                  <td>Wisata Sejarah</td>
                  <td>
                    Replika SD Muhammadiyah Laskar Pelangi, Lenggang, East
                    Belitung Regency, Bangka Belitung Islands, Indonesia
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i
                        class="fa fa-trash"
                        onclick="return confirm('Yakin ?')"
                      ></i>
                    </a>
                    <a href="" class="btn btn-warning btn-sm">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="" class="btn btn-secondary btn-sm">
                      <i class="fa fa-images"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Rumah Dinas Bupati Belitung Timur</td>
                  <td>Wisata Sejarah</td>
                  <td>
                    Bukit Samak Belitung Timur, Lalang, East Belitung Regency,
                    Bangka Belitung Islands, Indonesia
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i
                        class="fa fa-trash"
                        onclick="return confirm('Yakin ?')"
                      ></i>
                    </a>
                    <a href="" class="btn btn-warning btn-sm">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="" class="btn btn-secondary btn-sm">
                      <i class="fa fa-images"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Taman Kota Manggar</td>
                  <td>Layanan Publik</td>
                  <td>
                    Taman Kota Manggar, Jalan Gajah Mada, Lalang, East Belitung
                    Regency, Bangka Belitung Islands, Indonesia
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i
                        class="fa fa-trash"
                        onclick="return confirm('Yakin ?')"
                      ></i>
                    </a>
                    <a href="" class="btn btn-warning btn-sm">
                      <i class="fa fa-star"></i>
                    </a>
                    <a href="" class="btn btn-secondary btn-sm">
                      <i class="fa fa-images"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="footer">
        <strong>2021 &copy; Dinas Pariwisata Kabupaten Belitung Timur</strong>
      </div>
    </div>
  );
}

export default Wisata;
