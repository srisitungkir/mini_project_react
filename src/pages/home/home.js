import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";
import CardComponent from "../../components/card/card_component";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);

  const fetchGetAllProduct = async () => {
    await getAllProducts()
      .then((response) => {
        setDataProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchGetAllProduct();
  }, []);

  return (
    <div>
      <Container className="mt-4">
        <div className="d-flex flex-wrap">
          {dataProducts.map((product) => (
            <Link to="/detail_product" className="text-decoration-none">
              <CardComponent
                title={product.name}
                price={product.price}
                image={product.image}
              />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
