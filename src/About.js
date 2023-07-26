import exterijer from "./images/about.jpg"
import "./About.css"
import Contact from "./Contact"

export default function About() {
    return (
        <div>
        <div id="about">
            <h1 className="naslov">About</h1>
            <div className="info">
                <img src={exterijer} alt="" className="info-img"/>
                <p>Welcome to <span>ciao</span> pizzeria, where passion and quality unite to create exceptional pizzas. Since 2010, we have been crafting American-style pizzas using locally sourced ingredients. Our commitment to traditional techniques and attention to detail ensure each bite is a taste of perfection. Join us in the heart of Bijeljina, as we celebrate the art of pizza-making.</p>
            </div>
        </div>
        <Contact />
        </div>
    )
}