import useDocumentTitle from '../../hooks/useDocumentTitle';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfoBar from '../../containers/ContactSection/ContactSection';

export default function ContactPage() {
  useDocumentTitle('Contact');

  return (
    <>
      <ContactForm />
      <ContactInfoBar showCta={false} />
    </>
  );
}
