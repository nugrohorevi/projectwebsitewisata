import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "../container/Navbar";

function Destinasi() {
  return (
    <div class="isi">
      <Navbar />
      <hr />
      <div class="judul">4 Destinasi Wisata Pilihan</div>
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
                Tambah Destinasi
              </button>
            </div>
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
                      Tambah Destinasi Ke Pilihan
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
                          Nama Wisata
                        </label>
                      </div>
                      <select class="custom-select">
                        <option value="44">Alabama | Oleh - Oleh</option>
                        <option value="51">Alabama | Layanan Publik</option>
                        <option value="91">Alabama | Layanan Publik</option>
                        <option value="14">Alabama | Wisata Air</option>
                        <option value="32">Alabama | Tempat Ibadah</option>
                        <option value="56">Alabama | Transportasi</option>
                        <option value="23">Alabama | Wisata Air</option>
                        <option value="76">Alabama | Tempat Ibadah</option>
                        <option value="20">Alabama | Wisata Alam</option>
                        <option value="6">Alaska | Wisata Kuliner</option>
                        <option value="38">Alaska | Wisata Air</option>
                        <option value="52">Alaska | Wisata Sejarah</option>
                        <option value="25">Arizona | Oleh - Oleh</option>
                        <option value="42">Arizona | Tempat Ibadah</option>
                        <option value="94">Arizona | Wisata Pilihan</option>
                        <option value="92">Arizona | Oleh - Oleh</option>
                        <option value="79">Arkansas | Wisata Air</option>
                        <option value="7">Arkansas | Wisata Alam</option>
                        <option value="36">Arkansas | Wisata Air</option>
                        <option value="60">Arkansas | Wisata Air</option>
                        <option value="31">California | Wisata Kuliner</option>
                        <option value="39">Colorado | Wisata Sejarah</option>
                        <option value="89">Connecticut | Transportasi</option>
                        <option value="50">
                          District of Columbia | Tempat Ibadah
                        </option>
                        <option value="33">
                          District of Columbia | Layanan Publik
                        </option>
                        <option value="34">Florida | Wisata Sejarah</option>
                        <option value="86">Georgia | Wisata Air</option>
                        <option value="46">Hawaii | Wisata Edukasi</option>
                        <option value="12">Hawaii | Wisata Pilihan</option>
                        <option value="10">Idaho | Wisata Kuliner</option>
                        <option value="69">Illinois | Wisata Sejarah</option>
                        <option value="59">Indiana | Penginapan</option>
                        <option value="82">Indiana | Oleh - Oleh</option>
                        <option value="77">Iowa | Oleh - Oleh</option>
                        <option value="58">Kansas | Wisata Edukasi</option>
                        <option value="68">Kentucky | Wisata Pilihan</option>
                        <option value="57">Kentucky | Wisata Sejarah</option>
                        <option value="100">Kentucky | Tempat Ibadah</option>
                        <option value="16">Louisiana | Wisata Air</option>
                        <option value="41">Maine | Transportasi</option>
                        <option value="47">Maine | Transportasi</option>
                        <option value="53">Maine | Penginapan</option>
                        <option value="96">Maine | Wisata Kuliner</option>
                        <option value="26">Maryland | Wisata Kuliner</option>
                        <option value="93">Massachusetts | Penginapan</option>
                        <option value="13">Michigan | Wisata Pilihan</option>
                        <option value="70">Michigan | Wisata Sejarah</option>
                        <option value="83">Michigan | Wisata Sejarah</option>
                        <option value="17">Minnesota | Wisata Alam</option>
                        <option value="84">Minnesota | Layanan Publik</option>
                        <option value="62">Minnesota | Wisata Sejarah</option>
                        <option value="48">Minnesota | Wisata Air</option>
                        <option value="40">Mississippi | Oleh - Oleh</option>
                        <option value="30">
                          Mississippi | Sarana Olahraga
                        </option>
                        <option value="27">Mississippi | Wisata Sejarah</option>
                        <option value="61">Nebraska | Wisata Edukasi</option>
                        <option value="81">Nebraska | Wisata Belanja</option>
                        <option value="28">Nevada | Wisata Air</option>
                        <option value="87">
                          New Hampshire | Wisata Edukasi
                        </option>
                        <option value="22">
                          New Hampshire | Layanan Publik
                        </option>
                        <option value="37">
                          New Hampshire | Sarana Olahraga
                        </option>
                        <option value="54">New Jersey | Penginapan</option>
                        <option value="80">New Mexico | Wisata Belanja</option>
                        <option value="71">New Mexico | Layanan Publik</option>
                        <option value="72">New Mexico | Wisata Pilihan</option>
                        <option value="88">New Mexico | Layanan Publik</option>
                        <option value="64">New York | Layanan Publik</option>
                        <option value="15">
                          North Carolina | Transportasi
                        </option>
                        <option value="67">North Carolina | Oleh - Oleh</option>
                        <option value="43">North Dakota | Penginapan</option>
                        <option value="9">North Dakota | Wisata Kuliner</option>
                        <option value="55">North Dakota | Wisata Air</option>
                        <option value="11">Ohio | Penginapan</option>
                        <option value="95">Ohio | Layanan Publik</option>
                        <option value="21">Oregon | Wisata Belanja</option>
                        <option value="98">Oregon | Wisata Air</option>
                        <option value="24">
                          Rhode Island | Wisata Belanja
                        </option>
                        <option value="90">
                          South Carolina | Wisata Pilihan
                        </option>
                        <option value="66">
                          South Carolina | Wisata Kuliner
                        </option>
                        <option value="8">South Dakota | Wisata Edukasi</option>
                        <option value="65">Tennessee | Wisata Kuliner</option>
                        <option value="49">Texas | Tempat Ibadah</option>
                        <option value="99">Texas | Wisata Air</option>
                        <option value="78">Utah | Sarana Olahraga</option>
                        <option value="75">Utah | Transportasi</option>
                        <option value="35">Vermont | Layanan Publik</option>
                        <option value="73">Virginia | Wisata Alam</option>
                        <option value="85">Washington | Transportasi</option>
                        <option value="45">Washington | Wisata Air</option>
                        <option value="18">Wisconsin | Wisata Belanja</option>
                        <option value="19">Wisconsin | Wisata Pilihan</option>
                        <option value="74">Wisconsin | Wisata Belanja</option>
                        <option value="63">Wisconsin | Wisata Alam</option>
                        <option value="29">Wisconsin | Sarana Olahraga</option>
                        <option value="97">Wisconsin | Wisata Sejarah</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
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
                  <td>Gangan</td>
                  <td>Wisata Kuliner</td>
                  <td>
                    Gangan Wani, Tanjung Pendam, Belitung Regency, Bangka
                    Belitung Islands, Indonesia
                  </td>
                  <td>
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
                  <td>Geosite Gunong Lumut</td>
                  <td>Wisata Alam </td>
                  <td>
                    Desa Wisata Gunong Lumut, Jalan Jenderal Sudirman,
                    Limbongan, East Belitung Regency, Bangka Belitung Islands,
                    Indonesia
                  </td>
                  <td>
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
                  <td>Pantai Serdang</td>
                  <td>Wisata Air</td>
                  <td>
                    seafood pantai serdang, Baru, Belitung Regency, Bangka
                    Belitung Islands, Indonesia
                  </td>
                  <td>
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
                  <td>Rumah Dinas Bupati Belitung Timur</td>
                  <td>Wisata Sejarah</td>
                  <td>
                    Bukit Samak Belitung Timur, Lalang, East Belitung Regency,
                    Bangka Belitung Islands, Indonesia
                  </td>
                  <td>
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

export default Destinasi;
