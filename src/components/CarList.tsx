import React from "react";
import { useEffect, useState } from "react";
import { carInterface } from "../common/interfaces";
import Car from "../components/Car";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const CarList = () => {
  const [cars, setCars] = useState<carInterface[]>([]);

  const data = useSelector((state: RootState) => state.cars.cars);

  useEffect(() => {
    setCars([...data.slice(0, 8)]);
  }, [data]);

  const loadMore = () => {
    let currentLength = cars.length;

    setCars([...cars, ...data.slice(currentLength, currentLength + 8)]);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <Container>
        <Row lg="auto">
          {cars.map((car) => {
            return (
              <Col key={car.id}>
                <Car item={car} />
              </Col>
            );
          })}
        </Row>
      </Container>
      {cars.length < data.length ? (
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Button variant="info" onClick={() => loadMore()}>
            Load More...
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CarList;
