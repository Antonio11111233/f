import { Socials } from "../constants";
import Image from "next/image";
import React from "react";
import './style.scss'
import '../globals.css'
import { SiDiscord } from "react-icons/si";
const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex  gap-5 md:justify-between md:px-60 p-5">
<div className="box">
<div className="title">
<span id="text_dobro_2" className="block">v4.31</span>
<h1 id="text_dobro_1" className="hero glitch layers text-white text-[45px]" data-text="_Minimo">
  _Minimo<span></span>
  
</h1>
</div>
</div>

      <a href="https://discord.com/channels/@me" target="_blank"><footer>
    <div className="texto">
        <span>
        <div className="flex flex-row gap-5">
        {/* <SiDiscord
          width={24}
          height={24}
        /> */}
        {Socials.map((social) => (
          <Image
            id="discord_icon"
            key={social.name}
            src={social.src}
            alt={social.name}
            width={35}
            height={35}
          />
          
        ))}

      </div>
            <i className="fab fa-youtube"></i>
             Связаться с разработчиком 😊
              </span>
             {/* <div id="chmok">(˵ •̀ ᴗ - ˵ )✧</div> */}
    </div>
</footer>
   </a>
    </div>
    
  );
};

export default Navbar;