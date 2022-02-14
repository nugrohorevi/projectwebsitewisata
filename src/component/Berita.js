import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import Navbar from "../container/Navbar";

function Berita() {
  return (
    <div class="isi">
      <Navbar />
      <hr />
      <div class="judul">Berita & Informasi</div>
      <hr />
      <div class="col-xl-12 col-md-6 mb-4">
        <div class="card shadow h-100 ">
          <div class="card-body">
            <div class="input">
              <InputGroup>
                <FormControl
                  placeholder="Cari Berita & Informasi"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                  <i class=" fas fa-search"></i>
                </Button>
              </InputGroup>
            </div>
            <br />
            <div class="button">
              <Button variant="primary" href="/tambahberita">
                Tambah Berita
              </Button>
            </div>
            <br />
            <table class="table table-borderless text-dark">
              <th scope="col">No</th>
              <th scope="col">Judul</th>
              <th scope="col">Tanggal Publikasi</th>
              <th scope="col">Aksi</th>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Sertifikat 2019 dan 2021 Mulai Dibagikan</td>
                  <td>11/09/2021</td>
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
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Festival De Senjoebok III, Tahun 2021</td>
                  <td>05/12/2021</td>
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
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Kunjungan Kerja Menteri Desa, PDT & Transmigrasi </td>
                  <td>05/12/2021</td>

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
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Geosite Gunong Lumut</td>
                  <td>05/12/2021</td>

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
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>OWUN, Objek Wisata Unik Ngenjungak</td>
                  <td>05/12/2021</td>

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
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Pantai Nyiur Melambai</td>
                  <td>05/12/2021</td>

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
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Pantai Nyiur Melambai</td>
                  <td>05/12/2021</td>

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
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Pantai Nyiur Melambai</td>
                  <td>05/12/2021</td>

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

export default Berita;
