import React from "react";
import { Link } from "react-router-dom";

interface DefaultLayaoutProps{
    children: React.ReactNode;
}

export default function DefaultLayaout({children}:DefaultLayaoutProps) {
    return(<>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    
                    <li>
                        <Link to="/singup">singup</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </>);
}