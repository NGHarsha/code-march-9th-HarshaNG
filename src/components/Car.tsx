import axios from "axios";
import React, { useState, useEffect } from "react";
import { carInterface } from "../common/interfaces";
import { Card, Stack, Container, Row, Col } from "react-bootstrap";

type carProps = {
  item: carInterface;
};
const Car = ({ item }: carProps) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          height: "25rem",
          marginBottom: "1rem",
          borderRadius: "0.8rem",
        }}
      >
        <Card.Img
          variant="top"
          style={{
            borderTopLeftRadius: "0.8rem",
            borderTopRightRadius: "0.8rem",
            height: "65%",
          }}
          src={item.img_url}
        />
        <Card.Body>
          <Card.Title>
            {item.make.charAt(0).toUpperCase() + item.make.slice(1)}
          </Card.Title>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p>{item.model.toUpperCase()}</p>
            <p>{item.year}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p>HorsePower: {item.horsepower}</p>
            <p>${item.price}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Car;
