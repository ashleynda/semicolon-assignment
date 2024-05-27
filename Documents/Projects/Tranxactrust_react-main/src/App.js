import './App.css';
import { useRoutes } from 'react-router-dom';
import { ROUTES } from './Route/Route';



function App() {
  // const modalRef = useRef();

  // const [isLogin, setLogin] = useState(false);

  // const getLogin = () => {
  //     setLogin(!isLogin);
  // };

  // const toggleModal = (show) => show? modalRef.current.showModal() : modalRef.current.close();

  return useRoutes(ROUTES);
   
}

export default App;
