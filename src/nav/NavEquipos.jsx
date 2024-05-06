'use client' 
//Dependencias
import Link from "next/link";
import { usePathname } from 'next/navigation'

//Estilos
import Style from "./Nav.module.css";


export default function NavEquipos({url, }) {
    const maquina =  {
        C1: "Cocina1",
        E1: "Enfriador1"
    }
    let idUrl = usePathname().match(/\/controlpanel\/(.+)/);

    return (
        <nav className={`flex justify-content-center`} style={{justifyContent:"center"}}>
            <article className={`  Style.ComponentImagen `}>
                <Link href= {`/${url}/${maquina.C1}`} className={`flex  Style.boxImagen`}
                >
                    <h3>Cocina</h3>
                </Link>
                <div className={ idUrl[1]== "Cocina1" ? Style.Box : Style.BoxInactive}></div>
            </article>
            
            <article>
                <Link 
                    href= {`/${url}/${maquina.E1}`} 
                    className={`flex  Style.boxImagen`}>
                    <h3>Enfriador</h3>
                </Link> 
                <div className={ idUrl[1] == "Enfriador1" ? Style.Box: Style.BoxInactive }></div>    
            </article> 
        </nav>        
    )
}