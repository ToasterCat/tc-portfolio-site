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
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/ai-policy" component={AiPolicyPage} />

          {/* The old /projects page. Production answers it with a permanent
              (301) redirect in vercel.json before the app loads; this covers
              the dev server and in-app navigation. */}
          <Redirect exact from="/projects" to="/portfolio" />

          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
