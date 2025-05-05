

export function PageContent({ targetContent }) {

    if (targetContent == "home") {
        return(
        <main>
            <h2>Welcome to my website!</h2>
            <p>This is a simple React application.</p>
            <p>Feel free to explore the content.</p>
        </main>
        )
    

    } else {
        return (
            <main>
                <h2>GO AWAY!</h2>
            </main>

        )
    }
}
