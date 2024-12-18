import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import LayOut from "./LayOut";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>}/>
        </Route>
      </Routes>
    /* </BrowserRouter> */
  );
}

export default App;
