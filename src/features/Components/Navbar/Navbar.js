import { useThemeContext } from '../../Contexts/ThemeContext';
import { linkList, LinkButton } from '../Button/LinkButton';
import ModeButton from '../Button/ModeButton';
import './Navbar.css';

export default function Navbar({ page, isDesktop, handleLinkClick }) {
  const theme = useThemeContext();

  const headerClass = isDesktop ? `shadow--${theme}` : '';
  const headingClass = isDesktop ? 'perfect-center' : 'hidden';
  const listClass = isDesktop ? '' : 'navbar-list';

  const linkButtons = linkList.map(li => (
    <li key={li}>
      <LinkButton
        to={li}
        status={{ isOn: page === li && true, isDesktop }}
        onLinkClick={handleLinkClick}
      />
    </li>
  ));

  const modeButton = <li aria-hidden='true'><ModeButton /></li>;

  return (
    <header className={headerClass}>
      <h1 className={headingClass} aria-label='Virtune'>vt</h1>
      <nav className='navbar-navigation'>
        <ul className={listClass}>
          {linkButtons}
          {isDesktop && modeButton}
        </ul>
      </nav>
    </header>
  );
}
