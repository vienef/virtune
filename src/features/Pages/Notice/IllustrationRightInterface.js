import { useThemeContext } from '../../Contexts/ThemeContext';
import Interface from './IllustrationInterface';

function drawWaveform(n, x) {
  const squareClass = 'illustration--high-emphasize';
  const peakClass = 'illustration--accent-color';

  let bars = [];

  for (let i = 0; i < n; i++) {
    const y = 202.56 - (3.36 * i);
    bars.push(
      <rect
        key={y}
        className={i === n - 1 ? peakClass : squareClass}
        x={x}
        y={y}
        width='5.25'
        height='2.37'
        style={{ transformOrigin: `${x + 2.625}px ${y + 1.185}px` }}
      />
    );
  }

  return bars;
}

function Progress({ data }) {
  const { style } = data;

  const y = '211.45';

  return (
    <line
      className='illustration--line'
      {...data}
      y1={y}
      y2={y}
      style={{ stroke: 'var(--high-emphasize)', ...style }}
    />
  );
}

function Pause({ data }) {
  return <rect {...data} y='233.61' width='3.21' height='9.16' />;
}

function Speaker({ data }) {
  return (
    <>
      <rect {...data.start} y='254.81' width='0.55' height='1.29' />
      <polygon {...data.end} />
    </>
  );
}

export default function RightInterface() {
  const mode = useThemeContext();

  const classes = 'illustration--surface';

  const background = {
    className: `illustration--accent-color illustration--stroke ${mode}`,
    x: '289.86',
    y: '136.97',
    style: { transformOrigin: '358.325px 205.435px' }
  };

  const progressBar = {
    x1: '315.5',
    x2: '401.14',
    style: { transformOrigin: '358.32px 211.45px' }
  };
  const progressTrack = {
    x1: '339.03',
    x2: '315.5',
    style: {
      strokeWidth: '2px',
      transformOrigin: '327.265px 211.45px'
    }
  };
  const waveform = [8, 10, 8, 6, 8, 7, 11, 14, 12, 10, 5, 8];
  const display = (
    <>
      <rect
        className={classes}
        x='300.83'
        y='149.41'
        width='114.99'
        height='67.87'
        style={{ transformOrigin: '358.325px 183.345px' }}
      />
      {waveform.map((n, i) => drawWaveform(n, 402.53 - (8.52 * i)))}
      <Progress data={progressBar} />
      <Progress data={progressTrack} />
    </>
  );

  const pauseLeft = {
    className: classes,
    x: '354.28',
    style: { transformOrigin: '355.885px 238.19px' }
  };
  const pauseRight = {
    className: classes,
    x: '359.16',
    style: { transformOrigin: '360.765px 238.19px' }
  };
  const queue = {
    nextLeft: {
      className: classes,
      points: '382.22 233.61 382.22 242.77 388.42 238.19 382.22 233.61',
      style: { transformOrigin: '385.32px 238.19px' }
    },
    nextRight: {
      className: classes,
      points: '388.22 233.61 388.22 242.77 394.42 238.19 388.22 233.61',
      style: { transformOrigin: '391.32px 238.19px' }
    },
    prevRight: {
      className: classes,
      points: '334.42 242.77 334.42 233.61 328.22 238.19 334.42 242.77',
      style: { transformOrigin: '331.32px 238.19px' }
    },
    prevLeft: {
      className: classes,
      points: '328.42 242.77 328.42 233.61 322.22 238.19 328.42 242.77',
      style: { transformOrigin: '325.32px 238.19px' }
    }
  };
  const queueIds = Object.keys(queue);
  const playback = (
    <>
      <Pause data={pauseLeft} />
      <Pause data={pauseRight} />
      {queueIds.map(q => <polygon key={q} {...queue[q]} />)}
    </>
  );

  const control = {
    track: {
      x1: '315.5',
      y1: '255.45',
      x2: '401.14',
      y2: '255.45',
      style: {
        fill: 'none',
        stroke: 'var(--surface)',
        strokeDot: 'round',
        strokeLinejoin: 'round',
        transformOrigin: '358.32px 255.45px'
      }
    },
    thumb: {
      className: `illustration--fixed-color illustration--stroke ${mode}`,
      d: 'M385.79,255.45a2.47,2.47,0,1,1-2.47-2.47A2.47,2.47,0,0,1,385.79,255.45Z',
      style: { transformOrigin: '383.32px 255.45px' }
    }
  };
  const volumeLow = {
    start: {
      className: classes,
      x: '308.46',
      style: { transformOrigin: '308.735px 255.455px' }
    },
    end: {
      className: classes,
      points: '309.29 254.75 309.29 256.16 310.65 257.16 310.65 253.75 309.29 254.75',
      style: { transformOrigin: '309.97px 255.455px' }
    }
  };
  const volumeHigh = {
    start: {
      className: classes,
      x: '404.46',
      style: { transformOrigin: '404.735px 255.455px' }
    },
    end: {
      className: classes,
      points: '405.29 254.75 405.29 256.16 406.65 257.16 406.65 253.75 405.29 254.75',
      style: { transformOrigin: '405.97px 255.455px' }
    }
  };
  const volumeWave = {
    top: {
      y1: '254.47',
      y2: '253.96',
      style: { transformOrigin: '407.595px 254.215px' }
    },
    mid: {
      y1: '255.45',
      y2: '255.45',
      style: { transformOrigin: '407.755px 255.45px' }
    },
    bottom: {
      y1: '256.44',
      y2: '256.95',
      style: { transformOrigin: '407.595px 256.695px' }
    }
  };
  const volumeWaveIds = Object.keys(volumeWave);
  const wave = volumeWaveIds.map(w => (
    <line
      key={w}
      className='illustration--line'
      x1='407.33'
      x2={w === 'mid' ? '408.18' : '407.86'}
      {...volumeWave[w]}
      style={{
        stroke: 'var(--surface)',
        strokeWidth: .5,
        ...volumeWave[w].style
      }}
    />
  ));
  const volume = (
    <>
      <line {...control.track} />
      <path {...control.thumb} />
      <Speaker data={volumeLow} />
      <Speaker data={volumeHigh} />
      {wave}
    </>
  );

  return (
    <g id='interface--right'>
      <Interface data={background} />
      {display}
      {playback}
      {volume}
    </g>
  );
}
