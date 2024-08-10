import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { CHART_DATA } from "../static/ChartData";

function TimeSeriesChart() {
  const options = {
    chart: {
      zooming: {
        type: "x",
      },
    },
    navigator: {
      enabled: true,
    },
    rangeSelector: {
      buttons: [
        {
          type: "day",
          count: 1,
          text: "1D",
        },
        {
          type: "day",
          count: 3,
          text: "3D",
        },
        {
          type: "week",
          count: 1,
          text: "1W",
        },
        {
          type: "month",
          count: 1,
          text: "1M",
        },
        {
          type: "month",
          count: 6,
          text: "6M",
        },
        {
          type: "year",
          count: 1,
          text: "1Y",
        },
        {
          type: "all",
          count: 1,
          text: "Max",
        },
      ],
      selected: 6,
      inputEnabled: false,
      enabled: true,
      buttonPosition: {
        align: "right",
      },
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "",
      },
      plotLines: [
        {
          color: "red", // Color of the line
          width: 2, // Width of the line
          value: 1.2, // Value on the y-axis where the line should appear
          dashStyle: "Dash", // Optional: dash style for the line
          label: {
            text: "Threshold", // Label for the line
            align: "right",
            style: {
              color: "red",
            },
          },
          zIndex: 5, // Ensures the line is on top
        },
      ],
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      area: {
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        color: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "rgba(75, 64, 238, 1)"],
            [1, "rgba(255, 255, 255, 0)"],
          ],
        },
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
    series: [
      {
        type: "area",
        name: "USD to EUR",
        data: CHART_DATA,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default TimeSeriesChart;
