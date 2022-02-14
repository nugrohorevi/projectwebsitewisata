import React from "react";
import Navbar from "../container/Navbar";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

function Atribut() {
  return (
    <div class="isi">
      <Navbar />
      <hr />
      <div class="judul">Atribut dan Informasi</div>
      <hr />
      <div class="col-xl-12 col-md-6 mb-4">
        <div class="card shadow h-100 ">
          <div class="card-body">
            <div class="input">
              <InputGroup>
                <FormControl
                  placeholder="Cari Atribut Informasi"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                  <i class=" fas fa-search"></i>
                </Button>
              </InputGroup>
            </div>
            <div class="card-body">
              <div class="button">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@mdo"
                >
                  Tambah Atribut Informasi
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
                          Tambah Atribut Informasi
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
                              Nama Informasi
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="recipient-name"
                            />
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
            </div>

            <br />
            <table class="table table-borderless text-dark">
              <th scope="col">No</th>
              <th scope="col">Atribut Informasi</th>
              <th scope="col">Aksi</th>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Area Parkir</td>
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
                  <td>Email</td>
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
                  <td>Telp</td>
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
                  <td>Wifi</td>
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

      <div class="footer">
        <strong>2021 &copy; Dinas Pariwisata Kabupaten Belitung Timur</strong>
      </div>
    </div>
  );
}

export default Atribut;
