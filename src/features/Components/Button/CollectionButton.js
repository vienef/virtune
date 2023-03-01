import { useThemeContext } from '../../Contexts/ThemeContext';
import useTextAnimation from '../../CustomHooks/useTextAnimation';
import { PlaylistArtwork } from '../Artwork/Artwork';
import { CollectionInfo } from '../Artwork/Info';
import { Button } from './Button';
import './CollectionButton.css';

export default function CollectionButton({ playlist, onCollectionClick }) {
  const theme = useThemeContext();
  const classes = `collection-button ${theme}-button`;
  useTextAnimation(`#${playlist}>.collection-info`);

  return (
    <Button
      id={playlist}
      className={classes}
      onButtonClick={onCollectionClick}
    >
      <PlaylistArtwork name='collection' playlist={playlist} />
      <CollectionInfo playlist={playlist} />
    </Button>
  );
}
