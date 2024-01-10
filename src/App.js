// App.js
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './component/router';

function App() {
 return (
    <div className="App flex justify-center items-center bg-gradient-to-r from-green-500 to-blue-500">
      <header className="App-header">
        <div className='h-full w-full flex justify-center items-center'>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        </div>
      </header>
    </div>
 );
}

export default App;