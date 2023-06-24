import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { SinglePost } from "./pages/SinglePost";

function App() {
  return (
    <div className="App bg-slate-100 h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "5rem",
        }}
      />
    </div>
  );
}

export default App;
