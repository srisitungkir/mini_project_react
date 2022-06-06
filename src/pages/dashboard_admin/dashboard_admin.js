import React, { useEffect, useState } from "react";
import ProtectedComponent from "../../layout/protected_component";
import { Table, Button } from "react-bootstrap";
import { getAllProducts } from "../../services/api";
import ReactLoading from "react-loading";

const DashboardAdmin = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  const fetchGetAllProduct = async () => {
    await setIsLoading(true)
    await getAllProducts()
      .then((response) => setDataProduct(response.data))
      .catch((error) => console.log(error));
      await setIsLoading(false)
  };

  useEffect(() => {
    fetchGetAllProduct();
    return () => {};
  }, []);

  return (
    <ProtectedComponent>
      <div>
        <h2>Dashboard Admin</h2>
        <div className="d-flex justify-content-end">
          <Button variant="primary" className="my-2">
            Add Product
          </Button>
        </div>
        {IsLoading ? (
          <ReactLoading
            type="spinningBubbles"
            color="#0D6EFD"
            className="m-auto mt-5"
          />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataProduct.map((product) => (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger" className="mx-2">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </ProtectedComponent>
  );
};

export default DashboardAdmin;
