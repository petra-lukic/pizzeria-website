import MenuCard from "./MenuCard"
import menuData from "./menuData"
import OnlineMenu from "./OnlineMenu"
import Contact from "./Contact"
import "./Menu.css"

export default function Menu () {
    const menuCardEl = menuData.map(pizza => {
        return(
            <MenuCard 
                name={pizza.name}
                img={pizza.img}
                topings={pizza.topings}
                standard={pizza.standardPrice}
                familly={pizza.famillyPrice}
            />)
    })
    return (
        <div>
            <div id="menu">
                <h1 className="naslov">Menu</h1>
                <div className="menu-cards">
                    {menuCardEl}
                </div>
            </div>
            <OnlineMenu />
            <Contact />
        </div>
    )
}