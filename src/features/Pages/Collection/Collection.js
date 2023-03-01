import { libraryList } from '../../../data/audio';
import AddButton from '../../Components/Button/AddButton';
import CollectionButton from '../../Components/Button/CollectionButton';
import './Collection.css';

export default function Collection({ handleCollectionClick }) {
  const collectionButtons = [...libraryList].reverse().map(li => (
    <li key={li} className='collection-item'>
      <CollectionButton
        playlist={li}
        onCollectionClick={function () { handleCollectionClick(li); }}
      />
    </li>
  ));

  const addButton = <li className='collection-item'><AddButton /></li>;

  return (
    <>
      <h2 className='collection-heading'>Playlists</h2>
      <div className='collection-container'>
        <ul className='collection-list'>
          {addButton}
          {collectionButtons}
        </ul>
      </div>
    </>
  );
}
