import { useThemeContext } from '../../Contexts/ThemeContext';

export default function Device() {
  const mode = useThemeContext();

  const accent = 'illustration--accent-color';
  const stroke = `illustration--stroke ${mode}`;
  const screenClass = `illustration--fixed-color illustration--line ${stroke}`;
  const caseClass = `${accent} ${stroke}`;

  return (
    <g id='device'>
      <path
        className={screenClass}
        d='M208.32,452.38H161.08a3.94,3.94,0,0,1-3.57-2.38L146.2,416.29c-.44-1.32.45-2.38,2-2.38h47.23a3.92,3.92,0,0,1,3.57,2.38L210.29,450C210.73,451.31,209.85,452.38,208.32,452.38Z'
        style={{ transformOrigin: '178.245px 433.145px' }}
      />
      <path
        className={caseClass}
        d='M206.32,454.38H159.08a3.94,3.94,0,0,1-3.57-2.38L144.2,418.29c-.44-1.32.45-2.38,2-2.38h47.23a3.92,3.92,0,0,1,3.57,2.38L208.29,452C208.73,453.31,207.85,454.38,206.32,454.38Z'
        style={{ transformOrigin: '176.245px 435.145px' }}
      />
      <path
        className={accent}
        d='M149.88,440.45h0a.87.87,0,0,0-.67.41L141.4,453a.92.92,0,0,0,.78,1.43H201.9V440.45Z'
        style={{ transformOrigin: '171.573px 447.44px' }}
      />
      <path
        d='M149.88,440.45h0a.87.87,0,0,0-.67.41L141.4,453a.92.92,0,0,0,.78,1.43H201.9V440.45Z'
        style={{ opacity: .2, transformOrigin: '171.573px 447.44px' }}
      />
      <path
        className={stroke}
        d='M149.88,440.45h0a.87.87,0,0,0-.67.41L141.4,453a.92.92,0,0,0,.78,1.43H201.9V440.45Z'
        style={{ transformOrigin: '171.573px 447.44px' }}
      />
      <path
        className={accent}
        d='M206.11,454.38H194.18a.92.92,0,0,1-.78-1.43l7.8-12.08a.93.93,0,0,1,1.66.21L207,453.15A.94.94,0,0,1,206.11,454.38Z'
        style={{ transformOrigin: '200.146px 447.414px' }}
      />
      <path
        d='M206.11,454.38H194.18a.92.92,0,0,1-.78-1.43l7.8-12.08a.93.93,0,0,1,1.66.21L207,453.15A.94.94,0,0,1,206.11,454.38Z'
        style={{ opacity: .5, transformOrigin: '200.146px 447.414px' }}
      />
      <path
        className={stroke}
        d='M206.11,454.38H194.18a.92.92,0,0,1-.78-1.43l7.8-12.08a.93.93,0,0,1,1.66.21L207,453.15A.94.94,0,0,1,206.11,454.38Z'
        style={{ transformOrigin: '200.146px 447.414px' }}
      />
    </g>
  );
}
