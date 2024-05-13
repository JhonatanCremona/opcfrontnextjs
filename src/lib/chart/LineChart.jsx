import { Chart } from "chart.js";

const data = [20,40,80,100]

export const LineChart = new Chart(ctx, {
    type: 'line',
    data: data, 
    options:{ 
        
    }
})  