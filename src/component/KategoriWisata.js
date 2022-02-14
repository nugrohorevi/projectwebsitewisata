import React from "react";
import { Button, Form } from "react-bootstrap";
import Navbar from "../container/Navbar";

function KategoriWisata() {
  return (
    <div class="isi">
      <Navbar />
      <hr />
      <div class="judul">Kategori Wisata</div>
      <hr />
      <div class="col-xl-12 col-md-6 mb-4">
        <div class="card shadow h-100 ">
          <div class="card-body">
            <div class="button">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo"
              >
                Tambah Kategori Wisata
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Tambah Kategori
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="nama-kategori" class="form-label">
                            Nama Kategori
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                          />
                        </div>
                        <div class="form-group">
                          <label for="gambar-kategori" class="col-form-label">
                            Gambar Kategori
                          </label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Pilih File</span>
                            </div>
                            <div class="custom-file">
                              <input
                                type="file"
                                class="custom-file-input"
                                id="inputGroupFile01"
                              />
                              <label
                                class="custom-file-label"
                                for="inputGroupFile01"
                              ></label>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="nama-kategori" class="form-label">
                              Urutan
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              id="recipient-name"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-outline-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cari">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" />
            </div>
            <br />

            <table class="table table-borderless text-dark">
              <th scope="col">No</th>
              <th scope="col">Nama Kategori</th>
              <th scope="col">Urutan</th>
              <th scope="col">Gambar</th>
              <th scope="col">Aksi</th>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Wisata Alam</td>
                  <td>1</td>
                  <td>
                    <img src="assets/img/8.jpeg"></img>
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Wisata Air</td>
                  <td>2</td>
                  <td>
                    <img src="assets/img/1.jpeg"></img>
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Wisata Kuliner</td>
                  <td>3</td>
                  <td>
                    <img src="assets/img/4.jpeg"></img>
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Wisata Sejarah</td>
                  <td>4</td>
                  <td>
                    <img src="assets/img/2.jpeg"></img>
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Hotel Penginapan</td>
                  <td>5</td>
                  <td>
                    <img src="assets/img/7.jpeg"></img>
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Layanan Public</td>
                  <td>6</td>
                  <td>
                    <img src="assets/img/5.jpeg"></img>
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Travel Transformasi</td>
                  <td>7</td>
                  <td>
                    <img src="assets/img/3.jpeg"></img>
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Belanja Oleh oleh</td>
                  <td>8</td>
                  <td>
                    <img src="assets/img/6.jpeg"></img>
                  </td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="" class="btn btn-danger btn-sm">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr />
      <div class="footer">
        <strong>2021 &copy; Dinas Pariwisata Kabupaten Belitung Timur</strong>
      </div>
    </div>
  );
}

export default KategoriWisata;
