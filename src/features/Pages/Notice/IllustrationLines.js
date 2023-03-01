import { useThemeContext } from '../../Contexts/ThemeContext';

function Dot({ data }) {
  return (
    <circle
      {...data}
      r='1.88'
      style={{ transformOrigin: `${data.cx}px ${data.cy}px` }}
    />
  );
}

function Line({ data }) {
  const mode = useThemeContext();

  const { start, end } = data;
  const { d, origin } = data.path;

  const lineClass = `illustration--stroke ${mode}`;

  return (
    <>
      <path className={lineClass} d={d} style={{ transformOrigin: origin }} />
      <Dot data={{...start, className: lineClass}} />
      <Dot data={{...end, className: lineClass}} />
    </>
  );
}

export default function Lines() {
  const leftLine = {
    path: {
      d: 'M73,262.67H63.8a2.71,2.71,0,0,1-2.71-2.7V154a2.71,2.71,0,0,1,2.71-2.71h50.82',
      origin: '87.855px 206.98px'
    },
    start: { cx: '116.96', cy: '151.31' },
    end: { cx: '74.72', cy: '262.68' }
  }
  const rightLine = {
    path: {
      d: 'M268.77,107.34h88.57a1,1,0,0,1,1,1v20.34',
      origin: '313.555px 118.01px'
    },
    start: { cx: '266.89', cy: '107.34' },
    end: { cx: '358.32', cy: '130.45' }
  }

  return (
    <g id='lines'>
      <Line data={leftLine} />
      <Line data={rightLine} />
    </g>
  );
}
