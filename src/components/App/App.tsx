import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Homepage from '../../routes/Homepage/Homepage';
import About from '../../routes/About/About';
import ProjectsPage from '../../routes/Projects/ProjectsPage';
import ContactPage from '../../routes/Contact/ContactPage';
import ComingSoon from '../../routes/ComingSoon/ComingSoon';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 767px)' });
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 767px)',
  });
  return (
    <div className="App">
      {isBigScreen && <Header />}
      {isMobileDevice && (
        <>
          <div className="header-icon">
            <Link to="/" className="header-main-link">
              <img
                src={
                  'https://res.cloudinary.com/dyz6qaw5e/image/upload/v1619030102/toastercat/toastercat_qlm38x.png'
                }
                alt="toastercat-logo"
                className="header-img"
              />
              <h1>ToasterCat</h1>
            </Link>{' '}
          </div>
          <div>
            <Sidebar />
          </div>
        </>
      )}
      <main>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
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
