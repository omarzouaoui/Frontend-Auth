import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ 
      <Layout>
        <Home/>
      </Layout>
    } />
    </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
