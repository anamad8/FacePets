
import './App.css';
import { UserProvider } from './provider/userProvider';
import Perfil from './components/perfil';

function App() {
  return (
    <UserProvider>
      <Perfil/>
    </UserProvider>
  );
}

export default App;
