import "./Hero.module.css";


export default function Hero() {
    return (
            <header id="hero" className="animate__animated animate__fadeInDown">
                <div id="greeting">
                    <hgroup>
                        <h1>annie oh</h1>
                        <h2>creative software engineering human</h2>
                    </hgroup>
                    <div className="arrow animate__animated animate__bounce"></div>
                    <div className="overlay"></div>
                </div>
            </header>
    )
}