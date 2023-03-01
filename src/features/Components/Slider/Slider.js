import { useThemeContext } from '../../Contexts/ThemeContext';
import './Slider.css';

export default function Slider({ properties, onSliderChange }) {
  const theme = useThemeContext();
  const { name, label, value, disabled } = properties;
  const style = { width: `${name === 'volume' ? value : 0}%` };

  function handleChange(e) {
    e.preventDefault();
    onSliderChange(e);
  }

  return (
    <label className={`slider--${theme} ${name}-slider`}>
      {label}
      <input
        className={`${name}-input`}
        type='range'
        min='0'
        max='100'
        step='1'
        value={name === 'volume' ? value : undefined}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className='slider-background' aria-hidden='true'>
        <span className='slider-track' style={style} />
      </span>
    </label>
  );
}
