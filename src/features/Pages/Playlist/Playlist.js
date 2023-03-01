import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faClock as faClockBorder } from '@fortawesome/free-regular-svg-icons';
import { library } from '../../../data/audio';
import { useThemeContext } from '../../Contexts/ThemeContext';
import useTextAnimation from '../../CustomHooks/useTextAnimation';
import { SongArtwork } from '../../Components/Artwork/Artwork';
import { SongInfo } from '../../Components/Artwork/Info';
import { PlayerButton } from '../../Components/Button/PlayerButton';
import PlaylistButton from '../../Components/Button/PlaylistButton';
import OptionButton from '../../Components/Button/OptionButton';
import './Playlist.css';

function PlaylistData({ properties, onPlaylistClick }) {
  const theme = useThemeContext();
  const { id, audio, track, landscape } = properties;
  const { playlist, song } = track;
  const name = 'playlist';

  const isCurrent = id === song && true;

  const rowId = id.replace(/\W/g, '');
  const rowClass = `playlist-data--${theme} ${isCurrent ? 'playlist-data--on' : ''}`;
  useTextAnimation(`#${rowId}>.data-title>.playlist-info`);

  const audioGenre = audio.genre?.join(', ') || '-';
  const audioAlbum = audio.album || `${audio.artist[0]} - Single`;
  const audioTrack = { playlist, song: id };

  const playlistButton = (
    <td className='data-queue'>
      <PlaylistButton
        disabled={isCurrent}
        onPlaylistClick={onPlaylistClick}
      />
    </td>
  );

  const optionButton = <OptionButton song={audio} />;

  const songArtwork = <SongArtwork name={name} track={audioTrack} />;
  const songInfo = <SongInfo name={name} track={audioTrack} />;

  const additionalData = (
    <>
      <td className='data-genre'>{audioGenre}</td>
      <td className='data-album'>{audioAlbum}</td>
    </>
  );

  return (
    <tr id={rowId} className={rowClass}>
      {playlistButton}
      <td className='data-artwork'>{songArtwork}</td>
      <td className='data-title'>{songInfo}</td>
      {landscape && additionalData}
      <td className='data-duration'>{audio.duration}</td>
      <td className='data-more'>{optionButton}</td>
    </tr>
  );
}

export default function Playlist({ properties, handlers }) {
  const theme = useThemeContext();
  const { handleListCloseClick, handlePlaylistClick } = handlers;
  const { landscape, track } = properties;
  const { playlist } = track;

  const closeButton = (
    <PlayerButton
      name='close'
      onPlayerClick={handleListCloseClick}
    />
  );

  // Header
  const durationIcon = theme === 'dark' ? faClock : faClockBorder;
  const durationHeader = <FontAwesomeIcon icon={durationIcon} />;
  const additionalHeader = (
    <>
      <th className='data-genre'>GENRE</th>
      <th className='data-album'>ALBUM</th>
    </>
  );
  const tableHeader = (
    <tr className='playlist-header'>
      <th className='data-queue'>QUEUE</th>
      <th className='data-artwork'>ART</th>
      <th className='data-title'>TITLE</th>
      {landscape && additionalHeader}
      <th className='data-duration' title='duration'>{durationHeader}</th>
      <th className='data-more'>MORE</th>
    </tr>
  );

  // Body
  const tableList = library[playlist].playlist;
  const tableIds = Object.keys(tableList);
  const tableBody = tableIds.map(tr => (
    <PlaylistData
      key={tr}
      properties={{ id: tr, audio: tableList[tr], ...properties }}
      onPlaylistClick={function () { handlePlaylistClick(tr); }}
    />
  ));

  return (
    <section className='playlist'>
      <h2 className='hidden'>Playlist</h2>
      {!landscape && closeButton}
      <table className='playlist-table'>
        <thead>{tableHeader}</thead>
        <tbody>{tableBody}</tbody>
      </table>
    </section>
  );
}
