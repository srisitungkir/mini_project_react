import React, { useEffect, useState, useLayoutEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/api";
import ReactLoading from "react-loading";
import FigureComponent from "../../components/figure/figure";

const DetailProduct = () => {
  const [dataProduct, setdataProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const fetchProductById = async () => {
    await setIsLoading(true);
    await getProductById(id)
      .then((response) => setdataProduct(response.data))
      .catch((error) => console.log(error));
    await setIsLoading(false);
  };

  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <div>
      {isLoading ? (
        <ReactLoading
          type="spinningBubbles"
          color="#0D6EFD"
          className="m-auto mt-5"
        />
      ) : (
        // <Container className="mt-5">
          <Row>
            <Col md="2"><FigureComponent dataProduct={dataProduct} /></Col>
            <Col md="10">
            <p>Price : Rp.{dataProduct.price}</p>
            <p>Quantity : {dataProduct.quantity}</p>
            </Col>
          </Row>
          
        // </Container>
      )}
    </div>
  );
};

export default DetailProduct;
