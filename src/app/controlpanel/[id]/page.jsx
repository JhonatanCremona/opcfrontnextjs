//Componentes 
import NavEquipos from "@/nav/NavEquipos";

//Dependencas 
import Link from "next/link";

export default function Maquina({params}) {
    let {id} = params;
    return (
        <>
            <NavEquipos url = {"controlpanel"} />
            <main>
                <h2>Maquina: {id}</h2>
                <section>
                    <article>
                        <div>
                            <h2></h2>
                            <Link href= {""}>
                            </Link>
                        </div>
                    </article>
                </section>

            </main>
        </>
    )
}