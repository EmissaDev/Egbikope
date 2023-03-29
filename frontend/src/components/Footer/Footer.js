import Logo from "../Logo/Logo";

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Logo alt="footer" />
        <p className="footer__copyright">© 2022 Egbikope by EmissaDev. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;