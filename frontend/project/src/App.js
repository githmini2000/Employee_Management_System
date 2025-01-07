import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header.js';
import Dashboard from './pages/dashboard/Dashboard.js';
import NoMatch from './pages/noMatch/NoMatch.js';
import PostUser from './pages/employee/PostUser.js';
import ViewUser from './pages/employee/ViewUser.js';
function App() {
  return (
   <>
    <Header/>
    <Routes>
      <Route path ='/' element ={ <Dashboard/>}/>
      <Route path ='/employee' element ={ <PostUser/>}/>
      <Route path="/view-user/:id" element={<ViewUser />} />     
       <Route path ='*' element ={ <NoMatch/>}/>
    </Routes>
   </>
  );
}

export default App;
 