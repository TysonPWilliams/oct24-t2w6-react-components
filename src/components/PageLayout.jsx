import { Footer } from "./Footer";
import { Header } from "./Header";


export function PageLayout({ children }) {

    return(
        <>
            <Header />

            {children}

            <Footer />
        </>
    )


}