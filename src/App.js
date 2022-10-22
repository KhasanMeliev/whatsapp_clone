import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./container/Navbar/Navbar";
import Chats from "./pages/ChatsPage/Chats";
import Status from "./pages/StatusPage/Status";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Chats />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/status" element={<Status />} />
        <Route path="/calls" element={<Chats />} />
      </Routes>
    </>
  );
}

export default App;
