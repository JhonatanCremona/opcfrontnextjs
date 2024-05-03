'use client' 

import Style from "./Nav.module.css";
import Image from "next/image";
import { Notification, User } from "@/services/icons";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Nav() {
    const opciones = [
        {
            id: 1,
            nombre: "HOME",
            url: "/"
        },
        {
            id: 2,
            nombre: "PANEL",
            url:"/controlpanel"
        },
        {
            id: 3,
            nombre: "GRAFICOS",
            url: "/graficospanel"
        },{
            id: 4,
            nombre: "CONTACTO",
            url: "/contacto"
        }
    ];
    const pathname = usePathname();
    return (
        <header className={Style.headernav}>
            <nav className={Style.navbar}>
                {/* ---------------Iconos----------------*/}
                <ul className={Style.listaIconos}>
                    <li style={{cursor:"none"}}>
                            <a to={"/usuario"}>
                                <User/>
                            </a>
                    </li>

                    <li style={{cursor:"none"}}>
                            <a to={"/notification"}>
                                <Notification/>
                            </a>
                    </li>
                </ul>
                <ul className={Style.lista}>
                    {
                        opciones.map(({id, url, nombre}) => {
                            return (
                                <li key={id} className={Style.itemNav}>
                                    <Link 
                                    className={`${Style.options} ${pathname === url ? Style.isactive : ""}`} 
                                    href={url} > {nombre} 
                                    
                                    </Link>
                                </li>
                            )
                        })
                    }  
                    <div className={Style.logoNav}>
                        <Link href={"https://www.creminox.com/"} target="_blank"> 
                        <Image 
                            className={Style.logoImagen} 
                            src="/creminox-logo.png"
                            width={300}
                            height={100}
                            alt="logo-creminox" 
                        />
                        </Link>
                </div>
                </ul>
                {/* ---------------Logo----------------*/}
                
            </nav>
            
        </header>
    )
}