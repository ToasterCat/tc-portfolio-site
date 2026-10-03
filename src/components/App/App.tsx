import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollManager from '../ScrollManager/ScrollManager';
import Homepage from '../../routes/Homepage/Homepage';
import PortfolioPage from '../../routes/Portfolio/PortfolioPage';
import ProjectDetailPage from '../../routes/ProjectDetail/ProjectDetailPage';
import ContactPage from '../../routes/Contact/ContactPage';
import ComingSoon from '../../routes/ComingSoon/ComingSoon';
import NotFound from '../../routes/Error/404';
import { PROJECT_CATEGORIES } from '../../PROJECTS';

/** Old #proj-* section anchors -> the new service section ids. */
function modernHash(hash: string) {
  const legacy = PROJECT_CATEGORIES.find((c) => `#${c.legacyAnchor}` === hash);
  return legacy ? `#${legacy.anchor}` : hash;
}

function App() {
  return (
    <div className="App">
      <ScrollManager />

      <Header />

      <main>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/portfolio/:alias" component={ProjectDetailPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/blog" component={ComingSoon} />
          <Route exact path="/store" component={ComingSoon} />

          {/* Old URLs: /projects, and #proj-* anchors on either path, land on
              the matching service section. */}
          <Route
            exact
            path="/projects"
            render={({ location }) => (
              <Redirect to={{ pathname: '/portfolio', hash: modernHash(location.hash) }} />
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
