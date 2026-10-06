import { Link } from 'react-router-dom';
import PolicyDocument from '../../components/PolicyDocument/PolicyDocument';
import { CONTACT_EMAIL } from '../../SITE';

export default function PrivacyPage() {
  return (
    <PolicyDocument title="Privacy Policy" updated="2026-10-05">
      <p>
        ToasterCat Studios LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;) keeps this simple: the
        only personal information we ask for is what you choose to send us, and we use it
        for one thing.
      </p>

      <h2>What we collect</h2>
      <p>
        When you fill out the <Link to="/contact">contact form</Link> or email us, we receive
        what you provide: your name, email address, phone number, and message.
      </p>

      <h2>How we use it</h2>
      <p>
        <strong>Only to start a conversation with you.</strong> We use your contact details to
        reply to your inquiry, and for nothing else. We don&apos;t add you to a mailing list,
        and we don&apos;t use your information for marketing.
      </p>

      <h2>Sharing</h2>
      <p>
        <strong>We don&apos;t share your information with anyone else.</strong> We don&apos;t
        sell it, rent it, or pass it along to other companies.
      </p>

      <h2>Services we use</h2>
      <p>
        Two outside services see some data in the course of running this site. Each handles
        it under its own privacy policy.
      </p>
      <ul>
        <li>
          <strong>Formspree</strong> delivers the contact form. Your submission passes through
          Formspree on its way to our inbox. See{' '}
          <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Formspree&apos;s privacy policy
          </a>
          .
        </li>
        <li>
          <strong>Google Analytics</strong> tells us how our own pages are doing: which ones get
          visited, how often, and where visitors arrive from. We use it to understand traffic to
          this site, not to track you or your browsing history. Google sets cookies to do this;
          see{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&apos;s privacy policy
          </a>
          , or opt out with Google&apos;s{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            browser add-on
          </a>
          .
        </li>
      </ul>

      <h2>Your choices</h2>
      <p>
        You can ask what we hold about you, or ask us to delete it, at any time:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, we&apos;ll update it here and change the date at the top of
        the page.
      </p>
    </PolicyDocument>
  );
}
