import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './PlaylistButton.css';

export default function OptionButton({ song }) {
  const title = `More options for ${song.title} by ${song.artist.join(', ')}`;
  
  return (
    <Button className='option-button button--off' title={title}>
      <FontAwesomeIcon icon={faEllipsis} />
    </Button>
  );
}
