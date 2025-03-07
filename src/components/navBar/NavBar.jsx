import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useMediaQuery } from 'react-responsive';
import logo from '../../assets/logo.png';
import styles from './NavBar.module.css';

function MarvelNavBar({title}) {
      //TODO: useMediaQuery a librarie to use responnsive breack-poinnts with ES6
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

   const handleClick = () => {
       window.location.reload();
   };

    return (
        <>
            <Navbar
                className={`${styles.bgColor}`}
                data-bs-theme="dark"
                fixed={`${isMobile ? 'bottom' : 'top'}`}
            >
                <Container className="d-flex justify-content-center align-items-center flex-column">
                    <Navbar.Brand
                        href="#home"
                        className={`d-flex flex-column align-items-center ${styles.navbarBrand}`}
                        onClick={handleClick}
                    >
                        <img
                            alt=""
                            src={logo}
                            className={`d-inline-block align-center ${styles.logo} ${styles.imgAnimationScale}`}
                        />
                        <span
                            className={`${styles.titleNavBar}`}
                        >
                            {title}
                        </span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default MarvelNavBar;
