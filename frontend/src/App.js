
import './App.css';
import { UserProvider } from './provider/userProvider';
import Perfil from './components/perfil';
import SideBar from './components/sidebar';
import EditProfile from './components/editProfile';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <Router>
      <SideBar/>
      <Routes>
      <Route path="/" element={<Perfil/>} />
      <Route path="/edit" element={<EditProfile/>} />  
      </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
