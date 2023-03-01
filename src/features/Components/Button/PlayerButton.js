import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListUl,
  faCompress,
  faExpand,
  faClose
} from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '../../Contexts/ThemeContext';
import { Button } from './Button';
import './PlayerButton.css';

const playerIcons = {
  list: {
    icon: faListUl,
    title: 'Playlist'
  },
  minimize: {
    icon: faCompress,
    title: 'Miniplayer'
  },
  maximize: {
    icon: faExpand,
    title: 'Expand'
  },
  close: {
    icon: faClose,
    title: 'Close'
  }
}

export function PlayerButton({ name, onPlayerClick, ...props }) {
  const theme = useThemeContext();
  const { icon, title } = playerIcons[name];

  const buttonType = 'perfect-center player-button square-button';
  const buttonMode = `${theme}-button`;
  const buttonState = 'button--off';
  const buttonClass = `${buttonType} ${buttonState} ${buttonMode}`;

  return (
    <Button
      className={buttonClass}
      title={title}
      onButtonClick={onPlayerClick}
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
}

export function generatePlayerButton(list, handlers) {
  return list.map(li => (
    <li key={li}>
      <PlayerButton
        id={li === 'list' ? 'list-button' : ''}
        name={li}
        onPlayerClick={handlers[li]}
      />
    </li>
  ));
}
