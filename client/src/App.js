import { useEffect } from "react";
import AllRouter from "./AllRouter";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token]);
  return (
    <Layout token={token}>
      <AllRouter />
    </Layout>
  );
}

export default App;
