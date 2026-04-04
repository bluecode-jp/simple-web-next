import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            header
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}