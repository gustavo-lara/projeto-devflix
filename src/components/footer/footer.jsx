// para utilizar o componente, faça o imports na pagina que deseja 
// coloque o nome+icone entre <Footer>nome</Footer>
// passe a informacao dentro da tag Footer - LINK
// <Footer link=()> Gustavolara</Footer>

import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css"

const Footer = ({children,link}) => {
    return(
        <footer>
            <p>
                Feito com <ion-icon name="heart" /> por
                <a href={link} target="_blank" rel="noopener noreferrer">{children}</a>
            </p>
                <SocialLinks icon={"logo-instagram"} href={"#"}/>
                <SocialLinks icon={"logo-facebook"} href={"#"}/>
                <SocialLinks icon={"logo-twitter"} href={"#"}/>
                <SocialLinks icon={"logo-github"} href={"#"}/>   
            </footer>
    );
};

export default Footer;