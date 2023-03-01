import { useThemeContext } from '../../Contexts/ThemeContext';
import {
  DefaultArtwork,
  PlaylistArtwork,
  SongArtwork
} from '../../Components/Artwork/Artwork';
import { generatePlayerButton } from '../../Components/Button/PlayerButton';
import './Miniplayer.css';

export default function Miniplayer({ track, isDesktop, handlers }) {
  const theme = useThemeContext();
  const { handleMaximizeClick, handleCloseClick } = handlers;
  const { playlist, song } = track;
  const name = 'visualizer';

  const playerList = ['maximize', 'close'];
  const playerHandlers = {
    maximize: handleMaximizeClick,
    close: handleCloseClick
  };
  const playerButtons = generatePlayerButton(playerList, playerHandlers);

  const playlistArtwork = <PlaylistArtwork name={name} playlist={playlist} />;
  const songArtwork = <SongArtwork name={name} track={track} />;
  const defaultArtwork = <DefaultArtwork name={name} />;

  const sectionClass = `perfect-center miniplayer shadow--${theme}`;

  return (
    <section className={sectionClass}>
      <h2 className='hidden'>Miniplayer</h2>
      <nav><ul className='miniplayer-list'>{playerButtons}</ul></nav>
      {isDesktop ? playlistArtwork : song ? songArtwork : defaultArtwork}
    </section>
  );
}
