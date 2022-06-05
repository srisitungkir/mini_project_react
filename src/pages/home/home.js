import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";
import CardComponent from "../../components/card/card_component";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';


const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [IsLoading, setIsLoading] = useState(false)

  const fetchGetAllProduct = async () => {
    await setIsLoading(true)
    await getAllProducts()
      .then((response) => {
        setDataProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    await setIsLoading(false)
  };

  useEffect(() => {
    fetchGetAllProduct();
  }, []);

  return (
    <div>
      {IsLoading ? ( <ReactLoading type="spinningBubbles" color="#0D6EFD" className="m-auto mt-5" />) : 
      (<Container className="mt-4">
        <div className="d-flex flex-wrap">
          {dataProducts.map((product) => (
            <Link to={`/detail_product/${product.id}`} className="text-decoration-none">
              <CardComponent
                title={product.name}
                price={product.price}
                image={product.image}
              />
            </Link>
          ))}
        </div>
      </Container>
      )}
    </div>
  );
};

export default Home;
