import React, { useState } from "react";
import { Modal, Row, Col, Button, FloatingLabel, Form } from "react-bootstrap";

interface addCarProps {
  show: boolean;
  onSubmit: any;
  onCancel: any;
}
const AddCar = (props: addCarProps) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [horsepower, setHorsepower] = useState("");

  const handleChange = (e: any) => {
    if (e.target.id === "make") {
      setMake(e.target.value);
    } else if (e.target.id === "model") {
      setModel(e.target.value);
    } else if (e.target.id === "year") {
      setYear(e.target.value);
    } else if (e.target.id === "price") {
      setPrice(e.target.value);
    } else if (e.target.id === "horsepower") {
      setHorsepower(e.target.value);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Car to Catalog
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Row>
            <Col>
              <FloatingLabel controlId="make" label="Make" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Make"
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
            <Col>
              {" "}
              <FloatingLabel controlId="model" label="Model" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Model"
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel controlId="year" label="Year" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="year"
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="horsepower"
                label="Horsepower"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="horsepower"
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="price" label="Price" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Price"
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() =>
            props.onSubmit({ make, model, price, year, horsepower })
          }
        >
          Submit
        </Button>
        <Button variant="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCar;
