import './WhatsappFlotante.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";



export const WhatsappFlotante = () => {
    return (
        <>
            <section className="container-whatsapp">
                <a
                    href="https://wa.me/5491157953642?text=Hola,%20quiero%20hablar%20contigo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >
                    <span className="tooltip">¿Necesitas Ayuda?</span>
                    <section className="icon"><FontAwesomeIcon icon={faWhatsapp} className="whatsapp" /></section>
                </a>
            </section>

        </>
    )
}