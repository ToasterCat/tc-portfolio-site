import './Footer.scss';

export default function Header() {
  return (
    <footer>
        <div>Copyright @ 2022 - ToasterCat Studios LLC</div>
        
        <div className="footer-contact">
            <p>Contact:</p>
            <div className="footer-contact-list">
                <a href="mailto">contact@toastercat.tech</a>
                <p>|</p>
                <a href="tel">919-740-8062</a>
                <p>|</p>
                <p>1717 NE 124th St Seattle, WA. 98125</p>
            </div>
        </div>
    </footer>
  );
}
