import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '../../Contexts/ThemeContext';
import { Button, ButtonContent } from './Button';
import './CollectionButton.css';

export default function AddButton() {
  const theme = useThemeContext();
  const content = { name: 'add', icon: faPlus, title: 'Create new playlist' };
  const classes = `collection-button add-button ${theme}-button`;

  return (
    <Button className={classes} disabled='true'>
      <ButtonContent content={content} />
    </Button>
  );
}
