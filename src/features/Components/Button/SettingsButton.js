import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShuffle,
  faRepeat,
  faClock,
  faWaveSquare
} from '@fortawesome/free-solid-svg-icons';
import { faClock as faClockBorder } from '@fortawesome/free-regular-svg-icons';
import { useThemeContext } from '../../Contexts/ThemeContext';
import { Button } from './Button';
import './SettingsButton.css';

const settingsIcons = {
  shuffle: {
    icon: faShuffle,
    title: 'Shuffle'
  },
  repeat: {
    icon: faRepeat,
    title: 'Repeat'
  },
  timer: {
    icon: { dark: faClock, light: faClockBorder},
    title: 'Timer'
  },
  visualizer: {
    icon: faWaveSquare,
    title: 'Visualizer'
  }
};

export default function SettingsButton({
  name,
  status,
  onSettingsClick
}) {
  const theme = useThemeContext();
  const { isOn, isDesktop } = status;
  const icon = settingsIcons[name];

  const buttonOrientation = `settings-button${isDesktop ? '--desktop' : ''}`;
  const buttonType = `perfect-center ${buttonOrientation} square-button`;
  const buttonMode = `${theme}-button`;
  const buttonState = `button--${isOn ? 'on' : 'off'}`;
  const buttonClass = `${buttonType} ${buttonMode} ${buttonState}`;
  const buttonTitle = `${isOn ? 'Disable' : 'Enable'} ${icon.title}`;
  const buttonIcon = name === 'timer' ? icon.icon[theme] : icon.icon;

  return (
    <Button
      className={buttonClass}
      title={buttonTitle}
      onButtonClick={onSettingsClick}
    >
      <FontAwesomeIcon icon={buttonIcon} />
    </Button>
  );
}
