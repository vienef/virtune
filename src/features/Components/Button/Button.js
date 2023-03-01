import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

export function ButtonContent({ content }) {
  return (
    <>
      <span className='perfect-center button-icon'>
        <FontAwesomeIcon icon={content.icon} />
      </span>
      <span className='button-text'>{content.title}</span>
    </>
  );
}

export function Button({ children, onButtonClick, ...props }) {
  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    onButtonClick();
  }

  return <button onClick={handleClick} {...props}>{children}</button>;
}
