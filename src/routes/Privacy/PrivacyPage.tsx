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

      <h2>Sharing and retention</h2>
      <ul>
        <li>We do not sell, rent, or share your information with anyone.</li>
        <li>
          We do not keep it past initial contact. Once that first conversation has run its
          course, we delete it.
        </li>
      </ul>

      <h2>Your choices</h2>
      <p>
        You can ask what we hold about you, or ask us to delete it sooner, at any time:{' '}
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
