import { Header } from "./Header";


export function Footer() {
    return (
        <footer>
            <p>© {new Date(Date.now()).getFullYear()} My Website</p>
            { new Date(Date.now()).getDay() == 1 ? <Header /> : "Enjoy your week!" }
        </footer>
    )
    }