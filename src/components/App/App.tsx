import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollManager from '../ScrollManager/ScrollManager';
import Homepage from '../../routes/Homepage/Homepage';
import PortfolioPage from '../../routes/Portfolio/PortfolioPage';
import ProjectDetailPage from '../../routes/ProjectDetail/ProjectDetailPage';
import ContactPage from '../../routes/Contact/ContactPage';
import PrivacyPage from '../../routes/Privacy/PrivacyPage';
import AiPolicyPage from '../../routes/AiPolicy/AiPolicyPage';
import NotFound from '../../routes/Error/404';
import { PROJECT_CATEGORIES, RENAMED_ALIASES } from '../../PROJECTS';

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
          {/* Renamed projects: old links land on the new alias. */}
          {Object.entries(RENAMED_ALIASES).map(([from, to]) => (
            <Redirect key={from} exact from={`/portfolio/${from}`} to={`/portfolio/${to}`} />
          ))}
          <Route exact path="/portfolio/:alias" component={ProjectDetailPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/ai-policy" component={AiPolicyPage} />

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
