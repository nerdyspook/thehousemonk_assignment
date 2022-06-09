import { Routes, Route } from "react-router-dom";
import Details from "./Details";
import Home from "./Home";
import Search from "./Search";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched/:searchTerm" element={<Search />} />
        <Route path="/recipe" element={<Details />} />
      </Routes>
    </div>
  );
};

export default Pages;
