import { useThemeContext } from '../../Contexts/ThemeContext';
import Interface from './IllustrationInterface';

function Bar({ classes, style }) {
  return (
    <rect
      className={classes}
      x='92.4'
      y='255.22'
      rx='2.09'
      width='110.77'
      height='15.89'
      style={{ transformOrigin: '147.785px 263.165px', ...style }}
    />
  );
}

export default function LeftInterface() {
  const mode = useThemeContext();

  const logoClass = 'illustration--high-emphasize';

  const background = {
    className: `illustration--surface illustration--stroke ${mode}`,
    x: '79.32',
    y: '243.43',
    style: { transformOrigin: '147.785px 311.895px' }
  };
  
  const search = (
    <>
      <path
        className={`illustration--accent-color illustration--stroke ${mode}`}
        d='M187.28,255.22h13.8a2.09,2.09,0,0,1,2.09,2.09V269a2.09,2.09,0,0,1-2.09,2.09h-13.8a0,0,0,0,1,0,0V255.22A0,0,0,0,1,187.28,255.22Z'
        style={{ transformOrigin: '195.225px 263.155px' }}
      />
      <path
        className='illustration--high-emphasize'
        d='M200.17,267.17l-2.65-2.65a1,1,0,0,0-1-.25l-.24-.24a3.77,3.77,0,0,0-.32-5,3.9,3.9,0,0,0-5.37,0,3.79,3.79,0,0,0,5,5.69l.24.24a1,1,0,0,0,.24.95l2.66,2.66a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29A1,1,0,0,0,200.17,267.17Zm-8.82-3.46a2.8,2.8,0,1,1,4,0A2.79,2.79,0,0,1,191.35,263.71Z'
        style={{ transformOrigin: '194.924px 263.409px' }}
      />
    </>
  );
  const logo = (
    <>
      <circle
        className='illustration--accent-color'
        cx='147.78'
        cy='321.75'
        r='42.92'
        style={{
          transformOrigin: '147.78px 321.75px',
          transform: 'rotate(-24.37deg)'
        }}
      />
      <ellipse
        className={logoClass}
        cx='155.01'
        cy='342.81'
        rx='15.69'
        ry='10.29'
        style={{ transformOrigin: '155.01px 342.81px' }}
      />
      <path
        className={logoClass}
        d='M153.1,288.08l-10.78,54.73h-3l7.88-40,2.05-10.39a19.39,19.39,0,0,0,3.84-4.3Z'
        style={{ transformOrigin: '146.21px 315.445px' }}
      />
      <path
        className={logoClass}
        d='M153.09,288.1l-2.66,13.23a16.82,16.82,0,0,1-3.23,1.46,25,25,0,0,1-10.4,1.28,12.65,12.65,0,0,0-11.94,6.31c.15-.6,3.24-12.28,14.11-13.47a18.91,18.91,0,0,0,10.28-4.51A19.39,19.39,0,0,0,153.09,288.1Z'
        style={{ transformOrigin: '138.975px 299.24px' }}
      />
    </>
  );

  return (
    <g id='interface--left'>
      <Interface data={background} />
      <Bar classes='illustration--accent-color' />
      <Bar
        classes={`illustration--fixed-color ${mode}`}
        style={{ opacity: .7 }}
      />
      <Bar classes={`illustration--stroke ${mode}`} />
      {search}
      {logo}
    </g>
  );
}
