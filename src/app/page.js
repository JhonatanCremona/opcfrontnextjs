import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div>
        <h2>
          <span>
            <span>Equipos</span>
          </span>
        </h2>
        <h3 className={""}>
           <span className="text-wrapper">
              <span className="letters">COCINAS & ENFRIADORES</span>
           </span>
        </h3>
      </div>
      <Image 
        src="/template.gif"
        width={1000}
        height={500}
        alt="Picture of the author"
      />


      <section>
        <article>
          <h2>C1: <span></span></h2>
          <div>
            <h3>T. Producto: <span></span></h3>
            <h3>T. Agua: <span></span></h3>
          </div>
        </article>
        <article>

        </article>
      </section>

    </main>
  );
}
