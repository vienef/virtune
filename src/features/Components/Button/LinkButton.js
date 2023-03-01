import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faChartSimple,
  faMagnifyingGlass,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { ButtonContent } from './Button';
import './LinkButton.css';

const linkIcons = {
  library: {
    icon: faMusic,
    title: 'Music Library'
  },
  equalizer: {
    icon: faChartSimple,
    title: 'Audio Equalizer'
  },
  search: {
    icon: faMagnifyingGlass,
    title: 'Search'
  },
  profile: {
    icon: faUser,
    title: 'My Profile'
  }
};

export const linkList = Object.keys(linkIcons);

export function LinkButton({ to, status, onLinkClick }) {
  const { isDesktop, isOn } = status;
  const content = linkIcons[to];
  const title = isDesktop ? '' : content.title;
  const children = isDesktop
    ? <ButtonContent content={content} />
    : <FontAwesomeIcon icon={content.icon} />;
  const href = `/${to}`;

  const buttonType = `navbar-${isDesktop ? 'rect' : 'square perfect-center'}`;
  const buttonState = `button--${isOn ? 'on' : 'off'}`;
  const buttonClass = `${buttonType} ${buttonState}`;

  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    onLinkClick(to);
  }

  return (
    <a className={buttonClass} href={href} title={title} onClick={handleClick}>
      {children}
    </a>
  );
}
