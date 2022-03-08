import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  FormControl,
  Form,
  Button,
  Nav,
  Navbar,
} from "react-bootstrap";
import CarList from "./components/CarList";
import AddCar from "./components/AddCar";
import { useDispatch } from "react-redux";
import { formInputInterface } from "./common/interfaces";
import { ADD_CAR, SEARCH_CAR } from "./common/constants";

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const addAndHide = ({
    make,
    model,
    price,
    year,
    horsepower,
  }: formInputInterface) => {
    dispatch({
      type: ADD_CAR,
      payload: {
        make,
        model,
        price,
        year,
        horsepower,
        id: Math.floor(Math.random() * (1000 - 400) + 400),
        img_url: `/images/${Math.floor(Math.random() * (12 - 1) + 1)}.jpg`,
      },
    });
    setModalShow(false);
  };

  const handleSearch = (e: any) => {
    dispatch({
      type: SEARCH_CAR,
      payload: e.target.value.trim().toLowerCase(),
    });
  };

  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Car Catalog</Navbar.Brand>
          <Nav>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Add Car
            </Button>
          </Nav>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search by Model or Make"
                className="me-2"
                aria-label="Search"
                onChange={handleSearch}
              />
            </Form>
            <Navbar.Text>
              Developed By <a href="#">Harsha NG</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CarList />
      <AddCar
        show={modalShow}
        onSubmit={({
          make,
          model,
          price,
          year,
          horsepower,
        }: formInputInterface) =>
          addAndHide({ make, model, price, year, horsepower })
        }
        onCancel={() => setModalShow(false)}
      />
    </>
  );
};

export default App;
