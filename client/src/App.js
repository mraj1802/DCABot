import {useEffect} from "react";
import AllRouter from './AllRouter';
import Layout from './Layout';
import logo from './logo.svg';
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (!token) {
            navigate("/signin");
        }
    }, [token, navigate]);
  return (
    <Layout>
      <AllRouter/>
    </Layout>
  );
}

export default App;
