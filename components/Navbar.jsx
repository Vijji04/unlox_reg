import { Container } from "react-bootstrap";
import Link from 'next/link'
import Image from 'next/image'
import Styles from '../styles/components/Navbar.module.scss'


const Navbar = ()=>{
    return(
        <Container fluid className={Styles.navbarContainer}>
            <div className={Styles.navWrapper}>
                <div className={Styles.navlogosec}>
                <Image src={'/images/logo.svg'} className={Styles.logopic} width={64} height={70} alt="unlox logo" />
                </div>
                <div className={Styles.navMain}>
                    <Link href="/community"><a className={Styles.navInfo}>Join our community</a></Link>
                    <Link href="/about"><a className={Styles.navInfo}>About Us</a></Link>
                    <Link href="/contactus"><a className={Styles.navInfo}>Contact Us</a></Link>
                </div>
            </div>

        </Container>
    )
}

export default Navbar