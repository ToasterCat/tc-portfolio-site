import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Homepage from '../../routes/Homepage/Homepage';
import ProjectsPage from '../../routes/Projects/ProjectsPage';
import ContactPage from '../../routes/Contact/ContactPage';
import ComingSoon from '../../routes/ComingSoon/ComingSoon';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 50rem)' });
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 50rem)',
  });

  return (
    <div className="App">

      <Header
        isMobileDevice={isMobileDevice} />
      <Sidebar />
      
      <main>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/blog" component={ComingSoon} />
        <Route exact path="/store" component={ComingSoon} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
