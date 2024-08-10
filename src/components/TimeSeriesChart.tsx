import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { CHART_DATA } from "../static/ChartData";
import { Button, Flex } from "@radix-ui/themes";
import { EnterFullScreenIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { useRef } from "react";
import exporting from "highcharts/modules/exporting";
import fullscreen from "highcharts/modules/full-screen";
exporting(Highcharts);
fullscreen(Highcharts);
function TimeSeriesChart() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartComponentRef: any = useRef(null);
  const options = {
    chart: {
      zooming: {
        type: "x",
      },
    },
    navigator: {
      enabled: true,
    },
    exporting: {
      enabled: false, // Disable the hamburger icon (context menu)
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
          color: "rgba(153, 153, 153, 1)",
          width: 2,
          value: 0.8,
          dashStyle: "Dash",
          label: {
            text: "0.8",
            align: "right",
            style: {
              color: "rgba(153, 153, 153, 1)",
            },
          },
          zIndex: 5,
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
        name: "Test",
        data: CHART_DATA,
      },
    ],
  };
  const handleFullScreen = () => {
    if (chartComponentRef.current) {
      chartComponentRef.current?.chart.reflow();
      chartComponentRef.current?.chart.fullscreen.toggle();
    }
  };

  return (
    <>
      <Flex
        gap={"2"}
        style={{
          position: "relative",
          top: "34px",
          zIndex: 1,
          width: "fit-content",
        }}
      >
        <Button onClick={handleFullScreen} variant="soft">
          <EnterFullScreenIcon /> Fullscreen
        </Button>
        <Button variant="soft">
          <PlusCircledIcon /> Compare
        </Button>
      </Flex>
      <HighchartsReact
        highcharts={Highcharts}
        ref={chartComponentRef}
        options={options}
      />
      ;
    </>
  );
}

export default TimeSeriesChart;
