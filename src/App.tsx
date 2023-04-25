import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AuthPage } from "./pages/AuthPage";
import { Details } from "./pages/DetailsPage";
import { Navigation } from "./components/Navigation";
import { FooterInfo } from "./components/FooterInfo";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      {/* <FooterInfo /> */}
    </>
  );
}

export default App;
