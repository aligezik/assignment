import './App.css';
import { data } from './helper/data';
import Main from './pages/Main';

function App() {
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <Main data={data} />
    </div>
  );
}

export default App;
