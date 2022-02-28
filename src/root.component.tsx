import { BrowserRouter, Route, Routes } from "react-router-dom";

import Doggos from "./Doggos";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doggos" element={<Doggos />} />
      </Routes>
    </BrowserRouter>
  );
}
