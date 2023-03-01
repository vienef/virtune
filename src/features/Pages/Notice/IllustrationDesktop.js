import { useThemeContext } from '../../Contexts/ThemeContext';

export default function Desktop() {
  const mode = useThemeContext();

  const lines = {
    'line_1': {
      x1: 43.96,
      y1: 454.38,
      x2: 437.98,
      y2: 454.38,
      origin: '240.97px 454.38px'
    },
    'line_2': {
      x1: 127.75,
      y1: 458.47,
      x2: 378.42,
      y2: 458.47,
      origin: '253.085px 458.47px'
    },
    'line_3': {
      x1: 208.4,
      y1: 466.91,
      x2: 278.07,
      y2: 466.91,
      origin: '243.235px 466.91px'
    },
    'line_4': {
      x1: 385.32,
      y1: 458.8,
      x2: 396.64,
      y2: 458.8,
      origin: '390.98px 458.8px'
    },
    'line_5': {
      x1: 196.12,
      y1: 466.91,
      x2: 182.65,
      y2: 466.91,
      origin: '189.385px 466.91px'
    },
    'line_6': {
      x1: 72.56,
      y1: 458.8,
      x2: 58.31,
      y2: 458.8,
      origin: '65.435px 458.8px'
    }
  };

  const lineIds = Object.keys(lines);

  return (
    <g id='desktop'>
      {
        lineIds.map(id => (
          <line
            key={id}
            className={`illustration--stroke illustration--line ${mode}`}
            {...lines[id]}
            style={{ transformOrigin: lines[id].origin }}
          />
        ))
      }
    </g>
  );
}
