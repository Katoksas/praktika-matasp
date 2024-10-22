import Register from './Register';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <main className="App">
      <Routes>
       <Route path="/register" element={<Register />} ></Route>
       <Route path="/login" element={<Login />} ></Route>
      </Routes>
    </main>
  );
}
 
export default App;