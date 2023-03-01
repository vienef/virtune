import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShuffle,
  faBackward,
  faBackwardStep,
  faForwardStep,
  faForward,
  faRepeat
} from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './ControlButton.css';

const controlIcons = {
  shuffle: {
    icon: faShuffle,
    type: 'queue-button',
    title: 'Shuffle'
  },
  backward: {
    icon: faBackward,
    type: 'duration-button',
    title: 'Backward'
  },
  previous: {
    icon: faBackwardStep,
    type: 'track-button',
    title: 'Previous'
  },
  next: {
    icon: faForwardStep,
    type: 'track-button',
    title: 'Next'
  },
  forward: {
    icon: faForward,
    type: 'duration-button',
    title: 'Forward'
  },
  repeat: {
    icon: faRepeat,
    type: 'queue-button',
    title: 'Repeat'
  }
};

export const controlList = Object.keys(controlIcons);

export function ControlButton({ properties, status, onControlClick }) {
  const { name, classes } = properties;
  const { isOn, isDisabled } = status;
  const icon = controlIcons[name];
  const { type } = icon;
  const title = `${
    type === 'queue-button'
      ? isOn
        ? 'Disable '
        : 'Enable '
      : ''}${icon.title}`;
  const style = `${classes} ${type} button--${isOn ? 'on' : 'off' }`;

  return (
    <Button
      className={style}
      title={title}
      disabled={isDisabled}
      onButtonClick={onControlClick}
    >
      <FontAwesomeIcon icon={icon.icon} />
    </Button>
  );
}
