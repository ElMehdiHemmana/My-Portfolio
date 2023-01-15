import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Front-End Developer</button>
                    <h1 className="white">Designing for the user</h1>
                    <h1 className="white">developing for the future.</h1>
                    <p className="gray">Designing visually appealing and user-centric websites.</p>
                    <a className="green" href="mailto:contact@HemmanaDev.com">Let&#39;s chat!</a>
                </div>
                <Image src="/images/blaiti.png" width={463} height={513} alt="blaiti"  /> 
            </div>
        </header>
    )
}