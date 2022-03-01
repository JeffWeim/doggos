import { BrowserRouter, Route, Routes } from "react-router-dom";

import Doggos from "./Doggos";
import Dog from "./Dog";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doggos" element={<Doggos />} />

        <Route path="/doggos/dog" element={<Dog />} />
      </Routes>
    </BrowserRouter>
  );
}
