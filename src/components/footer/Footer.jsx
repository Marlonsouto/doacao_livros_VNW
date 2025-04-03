import facebook from '../../assets/IconesFooter/facebook.png'
import twitter from '../../assets/IconesFooter/twitter.png'
import youtube from '../../assets/IconesFooter/youtube.png'
import linkedin from '../../assets/IconesFooter/linkedin.png'
import instagram from '../../assets/IconesFooter/instagram.png'
import footerStyle from './footer.module.scss'

export default function Footer() {
    return (

        <section >
            <section className={footerStyle.contatos}>
                <p>4002-8922</p>

                <nav className={footerStyle.navFooter}>
                    <ul>
                        <li>
                            <a href="#"><img src={facebook} alt="icone facebook" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={twitter} alt="icone twitter" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={youtube} alt="icone youtube" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={linkedin} alt="icone linkedin" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={instagram} alt="icone instagram" /></a>
                        </li>
                    </ul>
                </nav>
            </section>

            <section className={footerStyle.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </section>
    )
} 