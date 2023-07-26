import "./OnlineMenu.css"
import onlineMenuImg from "./images/online-menu.png"
import appStore from "./images/app-store.png"
import googlePlay from "./images/google-play.png"

export default function OnlineMenu() {
    return (
        <div className="online-menu">
            <h1 className="naslov">Online Menu</h1>
            <div className="info">
                <p>
                    Let our offer always be at your fingertips with the mobile ordering application. FoodBooking is a platform used by over 25,000 restaurants in more than 150 countries worldwide. Download it for your mobile device and order food quickly, easily, and enjoyably! No tedious registrations, logins, and confirmations.
                    <a href="https://apps.apple.com/us/app/foodbooking/id1039788926" className="store">
                        <img src={appStore} alt="" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.foodbooking.clientapp&hl=en" className="store">
                        <img src={googlePlay} alt=""/>
                    </a>
                </p>
                <img src={onlineMenuImg} alt="" className="info-img"/>
            </div>

        </div>
    )
}