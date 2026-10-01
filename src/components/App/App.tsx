import { Route } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Homepage from '../../routes/Homepage/Homepage';
import ProjectsPage from '../../routes/Projects/ProjectsPage';
import ContactPage from '../../routes/Contact/ContactPage';
import ComingSoon from '../../routes/ComingSoon/ComingSoon';

function App() {
  return (
    <div className="App">

      <Header />

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
