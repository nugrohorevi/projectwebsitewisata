import React from "react";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import Navbar from "../container/Navbar";

function TambahBerita() {
  return (
    <div class="isi">
      <Navbar />
      <hr />
      <div class="judul">Tambah Berita</div>
      <hr />
      <Card style={({ width: "50rem" }, { flexDirection: "row" })}>
        <Card.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Judul Berita</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tanggal Publikasi</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Label htmlFor="basic-url">Gambar Berita</Form.Label>
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
              <label class="custom-file-label" for="inputGroupFile01"></label>
            </div>
          </div>
          <Button variant="danger" type="reset">
            Cancel
          </Button>
          <Button variant="success" type="submit">
            Simpan
          </Button>
        </Card.Body>
      </Card>

      <div class="footer">
        <strong>2021 &copy; Dinas Pariwisata Kabupaten Belitung Timur</strong>
      </div>
    </div>
  );
}

export default TambahBerita;
