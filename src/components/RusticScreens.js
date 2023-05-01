import React from 'react'
import "../styles/rusticscreens.css"
import splash from "../assets/Splash.png"
import menu from "../assets/Menu.png"
import cart from "../assets/Cart.png"
import order from "../assets/Order.png"
import confirmation from "../assets/Confirmation.png"
import aboutus from "../assets/AboutUs.png"
import specials from "../assets/Specials.png"

import beefstewoverlay from "../assets/BeefStewOverlay.png"
import fishandchips from "../assets/FishandChips.png"
import steakoverlay from "../assets/SteakOverlay.png"
import createacct from "../assets/CreateAcct.png"
import search from "../assets/Search.png"

function RusticScreens() {
  return (
    <div className="RusticRootsBase">
        <h2>Primary Screens</h2>
        <div className="Primary_Screens">
            <img src={splash} alt="Splash"></img>
            <img src={menu} alt="Menu"></img>
            <img src={cart} alt="Cart"></img>
            <img src={order} alt="Order"></img>
            <img src={confirmation} alt="Confirmation"></img>
            <img src={aboutus} alt="About Us"></img>
            <img src={specials} alt="Specials"></img>
        </div>
        <h2>Overlay Screens</h2>
        <div className="Overlay_Screens">
            <img src={beefstewoverlay} alt="beefstewoverlay"></img>
            <img src={fishandchips} alt="fishandchips"></img>
            <img src={steakoverlay} alt="steakoverlay"></img>
            <img src={createacct} alt="Create Account"></img>
            <img src={search} alt="search"></img>
        </div>
    </div>
  )
}

export default RusticScreens
