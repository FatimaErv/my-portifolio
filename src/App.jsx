
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './router';
import Sidebar from './pages/SlideBar';


function App() {
  return (
    <div className='wrapper'>
      <div className='app-container'>
     <Sidebar />
     <div className='content'>
       <RouterProvider router={myRouter} />
     </div>
   </div>
    </div>

    
  );
}

export default App;
