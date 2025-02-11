import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <footer>
            <nav className="footer">
                <p>
                    <Link className="linkText" to="">Home</Link>
                </p>
                <p>
                    <Link className="linkText" to="tips">Study Tips</Link>
                </p>
                <p>
                    <Link className="linkText" to="events">Campus Events</Link>
                </p>
            </nav>
        </footer>
    )
}