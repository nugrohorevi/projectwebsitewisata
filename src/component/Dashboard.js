import React, { Component } from "react";
import Navbar from "../container/Navbar";
import moment from "moment";
const dateTime = new Date();

class Dashboard extends React.Component {
  render() {
    return (
      <div class="isi">
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <hr />
            <div class="judul">Dashboard</div>
            <hr />
            <div class="container-fluid">
              <div class="row">
                <div class="col-xl-4 col-md-6 mb-4">
                  <div class="card shadow h-100">
                    <div class="card-body bg-success">
                      <div class="align-items-center">
                        <div class="col mr-2">
                          <i class="fas fa-calendar-alt fa-2x text-white"></i>
                          <div class="text-xl font-weight-bold text-white text-uppercase mb-1">
                            Selamat Datang
                          </div>
                          <div class="text-s mb-0 font-weight-bold text-white">
                            {moment(dateTime).format("DD-MM-YY")}
                          </div>
                        </div>
                        <div class="col-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-md-6 mb-4">
                  <div class="card shadow h-100">
                    <div class="card-body">
                      <div class="align-items-center">
                        <div class="col mr-2">
                          <i class="fas fa-signal fa-2x"></i>
                          <div class="text-xl font-weight-bold text-success text-uppercase mb-1">
                            10
                          </div>
                          <div class="text-s mb-0 font-weight-bold text-gray-800">
                            Total Data Wisata
                          </div>
                        </div>
                        <div class="col-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-md-6 mb-4">
                  <div class="card shadow h-100 ">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <i class="fas fa-signal fa-2x"></i>

                          <div class="text-xl font-weight-bold text-info text-uppercase mb-1">
                            8
                          </div>
                          <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                              <div class="text-s mr-3 font-weight-bold text-gray-800">
                                Tempat Wisata
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-6 col-lg-7">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-dark">
                        5 Wisata Terakhir Diperbarui
                      </h6>
                    </div>

                    <div class="card-body">
                      <table class="table table-borderless text-dark">
                        <th scope="col">No</th>
                        <th scope="col">Nama Wisata</th>
                        <th scope="col">Terakhir Diperbarui</th>

                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Rumah Dinas Bupati Bandung</td>
                            <td>05/12/2021 19:57:41</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Taman Kota Manggar</td>
                            <td>05/12/2021 19:51:48</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Replika Sekolah Langkar Pelangi</td>
                            <td>05/12/2021 19:39:53</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Gangan</td>
                            <td>05/12/2021 19:14:42</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Pantai Serdang</td>
                            <td>05/12/2021 19:03:52</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="col-xl-6 col-lg-5">
                  <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-dark">
                        5 Berita & Informasi Terakhir
                      </h6>
                    </div>

                    <div class="card-body">
                      <table class="table table-borderless text-dark">
                        <th scope="col">No</th>
                        <th scope="col">Judul Berita & Informasi</th>
                        <th scope="col">Tanggal Publikasi</th>

                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Sertifikat 2019 dan 2021 Mulai Dibagikan</td>
                            <td>11/09/2021</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Festival De Senjoebok III, Tahun 2021</td>
                            <td>05/12/2021</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>
                              Kunjungan Kerja Menteri Desa, PDT & Transmigrasi
                            </td>
                            <td>05/12/2021</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>
                              Pelatihan Keamanan dan Keselamatan Pada Destinasi
                              Wisata
                            </td>
                            <td>05/12/2021</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>
                              Koordinasi Pelaksanaan Vaksinasi oleh
                              Kemenparekraf RI
                            </td>
                            <td>05/12/2021</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <strong>2021 &copy; Dinas Pariwisata Kabupaten Belitung Timur</strong>
        </div>
      </div>
    );
  }
}
export default Dashboard;
