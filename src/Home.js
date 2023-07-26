import home from "./images/home.png"
import "./Home.css"
import Ingredients from "./Ingredients"
import OnlineMenu from "./OnlineMenu"
import Contact from "./Contact"

export default function Home() {
    return (
        <div id="home">
            <main className="main">
                <div>
                    <h1>Welcome to <span className="ciao">CIAO</span> pizzeria</h1>
                    <h2>where every bite tells a story.</h2>
                </div>
                <img src={home} alt="" id="pizza-home-picture" />
            </main>
            <Ingredients />
            <OnlineMenu />
            <Contact />
        </div>
    )
}