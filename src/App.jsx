import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./router/home/Home";
import Like from "./router/like/Like";
import PlayList from "./router/playlest/PlayList";
import NotFound from "./router/notfound/NotFound";
import Menu from "./components/menu/Menu";

const App = () => {
  return (
      <Router>
        <div className="body">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/like" element={<Like />} />
            <Route path="/playlist/:id" element={<PlayList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Menu />
        </div>
      </Router>
  );
};

export default App;
