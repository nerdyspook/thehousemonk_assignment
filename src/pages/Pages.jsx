import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched/:searchTerm" element={<Search />} />
      </Routes>
    </div>
  );
};

export default Pages;
