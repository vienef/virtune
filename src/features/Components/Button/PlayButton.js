import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPlayCircle,
  faPause,
  faPauseCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faPlayCircle as faPlayBorder,
  faPauseCircle as faPauseBorder
} from '@fortawesome/free-regular-svg-icons';
import { useThemeContext } from '../../Contexts/ThemeContext';
import { Button } from './Button';
import './ControlButton.css';

const playIcons = {
  desktop: {
    dark: {
      play: faPlayCircle,
      pause: faPauseCircle
    },
    light: {
      play: faPlayBorder,
      pause: faPauseBorder
    }
  },
  mobile: {
    play: faPlay,
    pause: faPause
  }
};

export default function PlayButton({ classes, status, onPlayClick }) {
  const theme = useThemeContext();
  const { isDisabled, isDesktop, isPlaying } = status;
  const state = isPlaying ? 'pause' : 'play';
  const icon = isDesktop
    ? playIcons.desktop[theme][state]
    : playIcons.mobile[state];
  const title = `${state[0].toUpperCase()}${state.slice(1)}`;
  const style = `${classes} play-button button--on`;

  return (
    <Button
      className={style}
      title={title}
      disabled={isDisabled}
      onButtonClick={onPlayClick}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  )
}
