import React from "react";
import ProtectedComponent from "../../layout/protected_component";

const DashboardAdmin = () => {
  return (
    <ProtectedComponent>
      <div>Dashboard Admin</div>
    </ProtectedComponent>
  );
};

export default DashboardAdmin;
