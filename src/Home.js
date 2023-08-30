import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/MayART23/GW_HERO-PC_NTA_V2_2X._CB589493704_.jpg"
          alt="Home Poster"
        ></img>
        <div className="home__row">
          <Product
            id="12321341"
            title=" The Lean Startup: How Constant Innovation Creates Radically Successful
             Businesses Paperback"
            price={646.65}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.11}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />

          <Product
            id="12011151"
            title="Bosch Aquatak 125 1500-Watt High Pressure Washer"
            price={10365.22}
            image="https://m.media-amazon.com/images/I/717wYrO+b0L._SY879_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="iQOO 9 SE 5G (Sunset Sierra, 8GB RAM, 128GB Storage) | Qualcomm Snapdragon 888 | 66W Flash Charge"
            price={30990.15}
            rating={3}
            image="https://m.media-amazon.com/images/I/41UwKwpK40L._SX300_SY300_QL70_FMwebp_.jpg  "
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={8018.19}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={48518.19}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={88693.38}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90829333"
            title="LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UQ7500PSF (Ceramic Black)"
            price={30499}
            rating={4}
            image="https://m.media-amazon.com/images/I/91OzzQSg47L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="90829334"
            title="OnePlus 126 cm (50 inches) Y Series 4K Ultra HD Smart Android LED TV 50Y1S Pro (Black)"
            price={30990.2}
            rating={4}
            image="https://m.media-amazon.com/images/I/81I5oICiIzL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829335"
            title="beatXP Marv Neo with 1.85” HD Display Smartwatch, BT Calling, 24 * 7 Continous Health Monitoring, Fast Charging, 100+ Sports Modes, Cloud Based Watch Faces & IP68 Rating (Electric Black)"
            price={999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71vgX-vkOPL._SX522_.jpg"
          />
          <Product
            id="90829336"
            title="beatXP Vega X 1.43' AMOLED 466 * 466px Display One-Tap BT 5.2 Calling AI Voice Assistant Smartwatch (Electric Black)"
            price={2199}
            rating={5}
            image="https://m.media-amazon.com/images/I/71HwYxFTXIL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="90829337"
            title="Fire-Boltt Ninja Call Pro Plus 1.83' Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution (Black)"
            price={1499.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61S9aVnRZDL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
