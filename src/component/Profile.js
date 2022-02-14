import React from "react";
import { Form, Button, Card } from "react-bootstrap";

function Profile() {
  return (
    <div class="isi">
      <hr />
      <div class="judul">Profile</div>
      <hr />
      <Card
        style={{
          width: "70vh",
          textAlign: "justify",
          marginLeft: 300,
        }}
      >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Foto Profile</Form.Label>
              <br />
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="File" className="mb-3">
              <Form.Label>Isi Password Untuk Mengubah Data</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Ganti Password"
                feedback="Anda Yakin ganti Password?"
                feedbackType="invalid"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Simpan
            </Button>
            <Button variant="danger" type="reset">
              Batal
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div class="footer">
        <strong>2021 &copy; Dinas Pariwisata Kabupaten Belitung Timur</strong>
      </div>
    </div>
  );
}

export default Profile;
