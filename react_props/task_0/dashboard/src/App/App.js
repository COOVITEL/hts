import logo from './logo_holbertong.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';
import { Notification } from './Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='root-notifications'>
        <Notification />
      </div>
      <Header />
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label for="email">Email:</label>
          <input type="text" id='email'></input>
          <label for="password">Password:</label>
          <input type="password" id='password'></input>
          <button>OK</button>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default App;
