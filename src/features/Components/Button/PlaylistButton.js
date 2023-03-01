import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faPlayCircle as faPlayBorder
} from '@fortawesome/free-regular-svg-icons';
import { useThemeContext } from '../../Contexts/ThemeContext';
import { Button } from './Button';
import './PlaylistButton.css';

export default function PlaylistButton({ disabled, onPlaylistClick }) {
  const theme = useThemeContext();
  const icon = theme === 'dark' ? faPlayCircle : faPlayBorder;

  const buttonType = 'perfect-center playlist-button square-button';
  const buttonMode = `${theme}-button`;
  const buttonState = 'button--off';
  const buttonClass = `${buttonType} ${buttonMode} ${buttonState}`;

  return (
    <Button
      className={buttonClass}
      title='Play'
      disabled={disabled}
      onButtonClick={onPlaylistClick}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
}
