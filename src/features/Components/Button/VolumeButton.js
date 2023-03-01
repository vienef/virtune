import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVolumeHigh,
  faVolumeLow,
  faVolumeMute
} from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './SettingsButton.css';
import { useThemeContext } from '../../Contexts/ThemeContext';

const volumeIcons = {
  volumeHigh: {
    icon: faVolumeHigh,
    title: 'Volume'
  },
  volumeLow: {
    icon: faVolumeLow,
    title: 'Volume'
  },
  volumeMute: {
    icon: faVolumeMute,
    title: 'Volume Muted'
  }
};

export default function VolumeButton({ name, isDesktop, onVolumeClick }) {
  const theme = useThemeContext();
  const icon = volumeIcons[name];

  const buttonOrientation = `settings-button${isDesktop ? '--desktop' : ''}`;
  const buttonType = `perfect-center ${buttonOrientation} square-button`;
  const buttonMode = `${theme}-button`;
  const buttonState = 'button--off';
  const buttonClass = `${buttonType} ${buttonMode} ${buttonState}`;

  return (
    <Button
      className={buttonClass}
      title={icon.title}
      onButtonClick={onVolumeClick}
    >
      <FontAwesomeIcon icon={icon.icon} />
    </Button>
  );
}
