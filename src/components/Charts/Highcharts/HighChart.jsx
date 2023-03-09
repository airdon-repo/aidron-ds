/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { Column } from "./Column";
import { Line } from "./Line";
import { Button } from "../../Core";

const HighChart = ({ stack, xLabels, children, className }) => {
  const chartComponent = useRef(null);
  const [stackOn, setStackOn] = useState(stack);
  const [series, setSeries] = useState([]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [chartOption] = useState({
    zoomType: "x",
    events: {
      selection: (e) => {
        if (e.resetSelection) {
          setIsZoomed(false);
        } else {
          setIsZoomed(true);
        }
      },
    },
  });

  const resetZoom = () => {
    if (chartComponent && chartComponent.current) {
      chartComponent.current.chart.zoomOut();
    }
  };

  const buildSeries =
    Array.isArray(children) &&
    children
      .map((child) => {
        if (child.type === Column || child.type === Line) {
          return {
            name: child.props.name,
            type: child.props.type,
            color: child.props.color,
            visible: child.props.visible,
            dataLabels: {
              color: child.props.colorLabel || undefined,
              style: child.props.colorLabel
                ? { textOutline: "none", fontWeight: "regular" }
                : {},
              verticalAlign: child.type === Column ? "top" : undefined,
            },
            yAxis: child.props.yAxis,
            data: child.props.data,
            marker: {
              symbol: child.type === Line ? child.props?.marker : undefined,
              fillColor: "#FFFFFF",
              lineWidth: 2,
              lineColor: undefined,
            },
            dashStyle: child.type === Line ? child.props?.dash : undefined,
            tooltip: {
              valueSuffix: child.props.suffix || undefined,
            },
          };
        }
        return false;
      })
      .filter(Boolean);

  useEffect(() => {
    setStackOn(stack);
  }, [stack]);

  useEffect(() => {
    setSeries(buildSeries);
  }, []);

  const optionsDefault = {
    chart: chartOption,
    title: {
      text: undefined,
    },
    subtitle: {
      text: undefined,
    },
    xAxis: [
      {
        categories: xLabels,
        crosshair: true,
      },
    ],
    yAxis: [
      {
        gridLineWidth: 0,
        min: 0,
        labels: {
          format: "{value:.0f}",
        },
        title: {
          text: undefined,
        },
      },
      {
        labels: {
          format: "{value}%",
        },
        title: {
          text: undefined,
        },
        opposite: true,
      },
    ],
    tooltip: {
      backgroundColor: "#181818",
      borderRadius: 4,
      borderWidth: 0,
      padding: 4,
      shadow: false,
      shared: true,
      style: {
        color: "#ffffff",
        fontSize: "10.2px",
      },
    },
    legend: {
      align: "left",
      floating: false,
      itemStyle: {
        fontWeight: "regular",
      },
      layout: "horizontal",
      verticalAlign: "top",
      x: 0,
      y: 0,
    },
    plotOptions: {
      column: {
        stacking: stackOn ? "normal" : undefined,
        dataLabels: { enabled: true },
      },
      series: {
        borderColor: undefined,
      },
    },
    series,
  };

  Highcharts.Chart.prototype.showResetZoom = () => {};

  return (
    <div
      data-testid="highcharts"
      className={["ragnarok", "highcharts", className].join(" ")}
    >
      <HighchartsReact
        ref={chartComponent}
        highcharts={Highcharts}
        options={optionsDefault}
      />
      {isZoomed && (
        <Button className="reset-zoom" icon="zoom-out" onClick={resetZoom} />
      )}
    </div>
  );
};

HighChart.propTypes = {
  /**
   * Should columns stack on top of each other?
   */
  stack: PropTypes.bool,
  /**
   * Labels that show on X Axis
   */
  xLabels: PropTypes.array,
};

HighChart.defaultProps = {
  stack: false,
  xLabels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
};

export { HighChart };
