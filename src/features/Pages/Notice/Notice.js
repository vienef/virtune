import { useThemeContext } from '../../Contexts/ThemeContext';
import { Button } from '../../Components/Button/Button';
import Illustration from './Illustration';
import './Notice.css';

export default function Notice({ handleGoBackClick }) {
  const mode = useThemeContext();

  const buttonClass = `go-back-button ${mode}-button`;

  return (
    <section className='notice'>
      <div>
        <h2>Page Is Under Construction</h2>
        <p>We are preparing new features for you.</p>
        <Button className={buttonClass} onButtonClick={handleGoBackClick}>
          GO BACK
        </Button>
      </div>
      <Illustration aria-hidden='true' />
      <a href='https://storyset.com/user' aria-hidden='true'>
        User illustrations by Storyset
      </a>
    </section>
  );
}
