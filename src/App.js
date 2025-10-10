import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("The Dark Mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("The Light Mode is enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          contact="Contact"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/"
              element={
                <TextForm
                  header="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
