// import Outlet component
import { Outlet } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

// App component using Outlet component to route and render specific page components
function App() {
  return (
    <div className='background-container'>
      <Header />
      <SearchBar />
      <div className='content-container'>
        <Outlet />
      </div>
      {/* <Footer />  */}
    </div>
  )
}

export default App;