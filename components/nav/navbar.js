import Link  from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";


const NavBar = (props) => {
  const { userName } = props;

  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} >
        <Link legacyBehavior href={"/"} >
          <a>
            <div className={styles.logoWrapper} >
              <Image 
                  src={"/static/logoW.svg"} 
                  alt={"Villa Tramonto Logo"} 
                  width={128} 
                  height={34} 
              />
            </div>
          </a>
        </Link>
        <nav className={styles.navContainer}>
          <div>
            <ul className={styles.navItems}>
              <li className={styles.navItem}>Info</li>
              <li className={styles.navItem}>Apartamentos</li>
              <div className={styles.navItem2}>
                <button className={styles.usernameBtn}>
                  <span className={styles.username}>Contato</span>
                </button>
              </div>
            </ul>
          </div>
        </nav> 
      </div>
    </div>
  )
}

export default NavBar;