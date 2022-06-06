import React, { useEffect, useState } from "react";
import ProtectedComponent from "../../layout/protected_component";
import { Table, Button } from "react-bootstrap";
import { deleteProduct, getAllProducts } from "../../services/api";
import ReactLoading from "react-loading";

const DashboardAdmin = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const fetchGetAllProduct = async () => {
    await setIsLoading(true);
    await getAllProducts()
      .then((response) => setDataProduct(response.data))
      .catch((error) => console.log(error));
    await setIsLoading(false);
  };

  const deleteProductById = async (id) => {
    await deleteProduct(id)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    setRefresh(!refresh);
  };

  useEffect(() => {
    fetchGetAllProduct();
  }, [refresh]);

  return (
    <ProtectedComponent>
      <div>
        <h2>Dashboard Admin</h2>
        <div className="d-flex justify-content-end">
          <Button variant="primary" className="my-2">
            Add Product
          </Button>
        </div>
        {isLoading ? (
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
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteProductById(product.id)}
                    >
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
