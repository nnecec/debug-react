import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes, Home } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {routes.map((route) => {
          const { component: Component, path } = route;
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
