import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext.js";
import "./App.css";

// import Home from "./components/Home";
const Home = lazy(() => import("./components/Home"));
// import About from "./components/About";
const About = lazy(() => import("./components/About"));
// import LearnWithMe from "./components/LearnWithMe";
const LearnWithMe = lazy(() => import("./components/LearnWithMe"));
// import ProjectSection from "./components/ProjectSection";
const ProjectSection = lazy(() => import("./components/ProjectSection"));
// import NotFound from "./components/NotFound";
const NotFound = lazy(() => import("./components/NotFound"));
function App() {
  return (
    <ThemeProvider>
      <Suspense
        fallback={
          <div className="lazy-loading-div">
            <div>
              <h1>Welcome...</h1>
            </div>
          </div>
        }
      >
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route exact path="/LearnWithme" element={<LearnWithMe />} />
              <Route exact path="/Projects" element={<ProjectSection />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
