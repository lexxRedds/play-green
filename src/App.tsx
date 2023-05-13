import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

import { DatabaseProvider, AuthProvider, useFirebaseApp } from 'reactfire';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//import './App.css';
import AuthRoute from './components/AuthRoute';
import Home from './pages/Home';
import Homepage from './pages/Testing';
import History from './pages/History';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth(app);

  if (process.env.NODE_ENV !== 'production') {
    connectDatabaseEmulator(database, 'localhost', 9000);
    connectAuthEmulator(auth, 'http://localhost:9099');
  }

  return (
    <>
      <AuthProvider sdk={auth}>
        <DatabaseProvider sdk={database}>
          <BrowserRouter>      
            <Routes>
              <Route path="/" element={<AuthRoute><Home /></AuthRoute>} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/home" element={<AuthRoute><Home /></AuthRoute>} />
              <Route path="/home/:sport" element={<AuthRoute><Home /></AuthRoute>} />
              <Route path="/history" element={<AuthRoute><History /></AuthRoute>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<AuthRoute><Logout /></AuthRoute>} />
            </Routes>
          </BrowserRouter>
        </DatabaseProvider>
      </AuthProvider>
    </>
  )
}

export default App