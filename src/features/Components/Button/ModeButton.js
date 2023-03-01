import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {
  useThemeContext,
  useThemeSetContext
} from '../../Contexts/ThemeContext';
import { Button, ButtonContent } from './Button';
import './LinkButton.css';

export default function ModeButton() {
  const theme = useThemeContext();
  const setTheme = useThemeSetContext();
  const content = {
    icon: theme === 'dark' ? faSun : faMoon,
    title: 'Switch Mode'
  };

  return (
    <Button className='navbar-rect mode-button' onButtonClick={setTheme}>
      <ButtonContent content={content} />
    </Button>
  );
}
