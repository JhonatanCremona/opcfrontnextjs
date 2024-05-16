"use client"
//Componentes 
import NavEquipos from "@/nav/NavEquipos";
import Titulo from "@/lib/Titulo";
import Link from "next/link";

//Chart JS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import zoomPlugin, { pan, zoom } from 'chartjs-plugin-zoom';
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);
/*
  const salesData = [
    { month: "January", sales: 100 },
    { month: "February", sales: 150 },
    { month: "March", sales: 200 },
    { month: "April", sales: 120 },
    { month: "May", sales: 180 },
    { month: "June", sales: 250 },
  ];
  */

  export const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
      zoom:  {
        
        pan: {
          enabled: true, 
          mode: 'xy',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch : {
            enabled: true,
          },
          mode: 'xy',
          onZoomComplete({chart}) {
            // This update is needed to display up to date zoom level in the title.
            // Without this, previous zoom level is displayed.
            // The reason is: title uses the same beforeUpdate hook, and is evaluated before zoom.
            chart.update('none');
          }
      
        }
      }
    }

  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

export default function Maquina({params}) {
    
    
    let {id} = params;
    return (
        <>
            <NavEquipos url = {"controlpanel"} />
            <main>
                <Titulo title= {""} properties={"RECETA"} description= {""} report= {true} />
                <section className="border-solid border-2 border-sky-500 ">
                    <article>
                        <div>
                            <h2></h2>
                            <Link href= {""}>
                            </Link>
                        </div>
                    </article>
                </section>

                <section className="border-solid border-2 border-sky-500 my-3.5">
                    <Line data={data} options={options}></Line>
                </section>

            </main>
        </>
    )
}