import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FaceRec from "./components/FaceRec";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import HomeScreen from "./components/Landing Page/HomeScreen";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';



function App() {
  return (
    <div className="screen">
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/face' element={<FaceRec/>}/>
          </Route>
            <Route exact path='/' element={<HomeScreen/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
