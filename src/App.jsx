import { Routes, Route } from "react-router-dom";
import Listing from "./pages/Listing";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Listing />} />
      </Routes>
    </>
  );
}

export default App;
