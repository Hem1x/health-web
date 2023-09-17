import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface PieChartProps {
  data: number[];
  width: number;
  height: number;
}

const Diagram: React.FC<PieChartProps> = ({
  data,
  width,
  height,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const radius = Math.min(width, height) / 2;

    // Определите типы для arc и pie
    const arc = d3
      .arc<any, d3.DefaultArcObject>()
      .innerRadius(0)
      .outerRadius(radius);
    const pie = d3.pie<number>().value((d) => d);

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const arcs = g
      .selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    arcs
      .append('path')
      .attr('d', (d: any) => arc(d))
      .attr('fill', (d, i) => color(i.toString()))
      .attr('style', 'color: white');
  }, [data, height, width]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className="text-white">
      {/* SVG для круговой диаграммы */}
    </svg>
  );
};

export default Diagram;
