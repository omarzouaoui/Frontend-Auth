import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout/Layout";
import { Forgot } from "./pages/auth/Forgot";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route 
      path="/" 
      element={ 
      <Layout>
        <Home/>
      </Layout>
    } />
    
      <Route 
      path="/login" 
      element={ 
      <Login/>
      } />

      <Route 
      path="/register" 
      element={ 
      <Register/>
      } />

      <Route 
      path="/forgot" 
      element={ 
      <Forgot/>
      } />
  
    </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
