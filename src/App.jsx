import { Routes,Route } from 'react-router';

import Login from './components/Login/Login';
import  Register  from './components/Register/Register';
import PostAuthenticate from './components/PostAuthentic/PostAuthenticate';





import { BrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (

      <BrowserRouter>  
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
     
      <Route path="*" element={<NotFound/>}/>

      {/* <Route path='/private' element={<PrivateRoute/>}> */}
      
      <Route path="authenticate" element={<PostAuthenticate/>}/>
      
      
        {/* </Route> */}
     

    </Routes>
    </BrowserRouter> 
   
  );
}

export default App