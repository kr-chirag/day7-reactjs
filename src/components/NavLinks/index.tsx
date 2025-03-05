import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { PageInterface } from "../../main";

function NavLinks({ pages }: { pages: PageInterface[] }) {
    return (
        <nav className={styles.navlinks}>
            <ul>
                {pages.map((page, idx) => (
                    <li key={idx}>
                        <Link to={page.link}>{page.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavLinks;
