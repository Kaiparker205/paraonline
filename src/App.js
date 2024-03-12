import logo from './logo.svg';
import './App.css';
import Routage from './Pfe/Visiteur/Routage';
import UserContextProvider from './Pfe/UserContext';

function App() {
  return (
    <UserContextProvider>
     <Routage/>  
    </UserContextProvider>
  );
}

export default App;
