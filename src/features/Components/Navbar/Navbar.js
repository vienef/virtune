import { useThemeContext } from '../../Contexts/ThemeContext';
import { DefaultArtwork } from '../Artwork/Artwork';
import { linkList, LinkButton } from '../Button/LinkButton';
import ModeButton from '../Button/ModeButton';
import './Navbar.css';

export default function Navbar({ page, isDesktop, handleLinkClick }) {
  const theme = useThemeContext();

  const headerClass = isDesktop ? `shadow--${theme}` : '';
  const headingClass = isDesktop ? 'perfect-center' : 'hidden';
  const listClass = isDesktop ? '' : 'navbar-list';

  const iconStyle = {
    filter: theme === 'dark'
      ? 'invert(100%)'
      : 'invert(0)'
  };

  const linkButtons = linkList.map(li => (
    <li key={li}>
      <LinkButton
        to={li}
        status={{ isOn: page === li && true, isDesktop }}
        onLinkClick={handleLinkClick}
      />
    </li>
  ));

  const modeButton = <li><ModeButton /></li>;

  return (
    <header className={headerClass}>
      <h1 className={headingClass} aria-label='Virtune'>
        <span className='navbar-icon'>
          <DefaultArtwork style={iconStyle} />
        </span>
        <span className='navbar-heading'>virtune</span>
      </h1>
      <nav className='navbar-navigation'>
        <ul className={listClass}>
          {linkButtons}
          {isDesktop && modeButton}
        </ul>
      </nav>
    </header>
  );
}
