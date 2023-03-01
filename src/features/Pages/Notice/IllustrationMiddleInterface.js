import { Fragment } from 'react';
import { useThemeContext } from '../../Contexts/ThemeContext';
import Interface from './IllustrationInterface';

function List({ y }) {
  const mode = useThemeContext();

  return (
    <rect
      className={`illustration--stroke illustration--surface ${mode}`}
      x='133.47'
      y={y}
      width='115.91'
      height='24.53'
      rx='3.71'
      style={{ transformOrigin: `191.425px ${y + 12.265}px` }}
    />
  );
}

function Icon({ y, classes }) {
  const point = y - 5.45;
  const cx = 146.715;
  const cy = y + 3.74;

  return (
    <>
      <circle
        className='illustration--accent-color'
        cx='145.5'
        cy={y}
        r='8.04'
        style={{
          transformOrigin: `145.5px ${y}px`,
          transform: 'rotate(-45deg)'
        }}
      />
      <ellipse
        className={classes}
        cx={cx}
        cy={cy}
        rx='2.64'
        ry='1.73'
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <path
        className={classes}
        d={`M146.39,${point}l-1.81,9.22h-.51l1.33-6.74.34-1.75a3.3,3.3,0,0,0,.65-.72Z`}
        style={{ transformOrigin: `145.23px ${y - 4.58}px` }}
      />
      <path
        className={classes}
        d={`M146.39,${point}l-.45,2.22a2.44,2.44,0,0,1-.54.25,4.28,4.28,0,0,1-1.75.22,2.09,2.09,0,0,0-2,1.06,3,3,0,0,1,2.37-2.27,3.16,3.16,0,0,0,1.73-.76A3.3,3.3,0,0,0,146.39,${point}Z`}
        style={{ transformOrigin: `144.025px ${y - 7.315}px` }}
      />
    </>
  );
}

function Info({ y, classes }) {
  const title = y + 11.65;
  const artist = y + 16.88;

  return (
    <>
      <path
        className={classes}
        d={`M185.56,${title}H161a2,2,0,0,1,0-4h24.53a2,2,0,0,1,0,4Z`}
        style={{ transformOrigin: `173.265px ${title - 2}px` }}
      />
      <path
        className={classes}
        d={`M205.26,${artist}H160a1,1,0,0,1,0-2h45.23a1,1,0,0,1,0,2Z`}
        style={{ transformOrigin: `182.615px ${artist - 1}px` }}
      />
    </>
  );
}

function Button({ y, cy }) {
  const mode = useThemeContext();
  
  const squareClass = `illustration--stroke ${
    mode === 'dark'
      ? 'illustration--high-emphasize'
      : ''
  } ${mode}`;
  const lineClass = `illustration--stroke ${
    mode === 'light'
      ? mode
      : ''
  }`;

  const x = 236.29;
  const r = 12.53;
  const rectY = y + 6;

  const style = { transfromOrigin: `${x}px ${cy}px` };

  return (
    <>
      <rect
        className={squareClass}
        x={x - 6.27}
        y={rectY}
        width={r}
        height={r}
        rx='2.06'
        style={style}
      />
      <line
        className={lineClass}
        x1={x}
        y1={cy - 2.73}
        x2={x}
        y2={cy + 2.73}
        style={style}
      />
      <line
        className={lineClass}
        x1={x + 2.73}
        y1={cy}
        x2={x - 2.73}
        y2={cy}
        style={style}
      />
    </>
  );
}

function drawList(n, y, cy) {
  const classes = 'illustration--high-emphasize';

  let boxes = [];

  for (let i = 0; i < n; i++) {
    const boxY = y - (29.37 * i);
    const boxCy = cy - (29.37 * i);
    boxes.push(
      <Fragment key={boxY}>
        <List y={boxY} />
        <Icon y={boxCy} classes={classes} />
        <Info y={boxY} classes={classes} />
        <Button y={boxY} cy={boxCy} />
      </Fragment>
    );
  }

  return boxes;
}

export default function MiddleInterface() {
  const mode = useThemeContext();

  const coordinate = { x: '123.3', y: '83.43' };
  const style = { transformOrigin: '191.765px 151.895px' };
  const patterns = {
    base: { className: 'illustration--accent-color', ...coordinate, style },
    mask: {
      className: `illustration--fixed-color ${mode}`,
      ...coordinate,
      style: { opacity: .4, ...style }
    },
    stroke: { className: `illustration--stroke ${mode}`, ...coordinate, style }
  };

  const patternIds = Object.keys(patterns);
  const background = patternIds.map(id => (
    <Interface key={id} data={patterns[id]} />
  ));

  return (
    <g id='interface--middle'>
      {background}
      {drawList(4, 183.18, 195.45)}
    </g>
  );
}
