import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollManager from '../ScrollManager/ScrollManager';
import Homepage from '../../routes/Homepage/Homepage';
import ProjectsPage from '../../routes/Projects/ProjectsPage';
import ProjectDetailPage from '../../routes/ProjectDetail/ProjectDetailPage';
import ContactPage from '../../routes/Contact/ContactPage';
import ComingSoon from '../../routes/ComingSoon/ComingSoon';
import NotFound from '../../routes/Error/404';

function App() {
  return (
    <div className="App">
      <ScrollManager />

      <Header />

      <main>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/portfolio" component={ProjectsPage} />
          <Route exact path="/portfolio/:alias" component={ProjectDetailPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/blog" component={ComingSoon} />
          <Route exact path="/store" component={ComingSoon} />

          {/* Old URL: keep shared links (and their #proj-* anchors) alive. */}
          <Route
            exact
            path="/projects"
            render={({ location }) => (
              <Redirect to={{ pathname: '/portfolio', hash: location.hash }} />
            )}
          />

          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
