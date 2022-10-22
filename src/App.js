import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./container/Navbar/Navbar";
import Chats from "pages/ChatsPage/Chats";
import Search from "pages/Search/Search";
import { CallsPage, StatusPage } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Chats />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/calls" element={<CallsPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
