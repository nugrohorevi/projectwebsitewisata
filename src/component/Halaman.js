import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import Navbar from "../container/Navbar";

function Halaman() {
  return (
    <div className="isi">
      <Navbar />
      <hr />
      <div class="judul">Halaman</div>
      <hr />
      <div class="col-xl-12 col-md-6 mb-4">
        <div class="card shadow h-100 ">
          <div class="card-body">
            <div class="cari">
              <InputGroup>
                <FormControl
                  placeholder="Cari Halaman"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                  <i class="fas fa-search"></i>
                </Button>
              </InputGroup>
            </div>
            <br />
            <table class="table table-borderless text-dark">
              <th scope="col">No</th>
              <th scope="col">Judul Halaman</th>
              <th scope="col">Terakhir diperbarui</th>
              <th scope="col">Slug</th>
              <th scope="col">Aksi</th>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Jaga kesehatan dan keselamatan dari virus Covid-19</td>
                  <td>05/12/2021</td>
                  <td>covid19</td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Sekilas Pandang Belitung Timur</td>
                  <td>06/12/2021</td>
                  <td>about</td>
                  <td>
                    <a href="" class="btn btn-info btn-sm">
                      <i class="fa fa-edit"></i>
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

export default Halaman;
