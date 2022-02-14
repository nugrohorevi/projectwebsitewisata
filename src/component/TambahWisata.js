import React from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "../container/Navbar";

function TambahWisata() {
  return (
    <div class="isi">
      <Navbar />
      <hr />
      <div class="judul">Tambah Wisata</div>
      <hr />
      <div class="col-xl-12 col-md-6 mb-4">
        <div class="card shadow h-100 ">
          <div class="card-body">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Kategori Wisata</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pilihan Kategori Wisata"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nama Wisata</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Informasi Wisata</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pilihan Informasi Wisata"
                />
              </Form.Group>

              <Form.Group controlId="File" className="mb-3">
                <Form.Label>Foto Utama</Form.Label>
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
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Deskripsi Wisata</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Simpan
              </Button>
              <Button variant="danger" type="reset" href="/wisata">
                Batal
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <div class="footer">
        <strong>2021 &copy; Dinas Pariwisata Kabupaten Belitung Timur</strong>
      </div>
    </div>
  );
}

export default TambahWisata;
