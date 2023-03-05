import { useThemeContext } from '../../Contexts/ThemeContext';
import {
  DefaultArtwork,
  PlaylistArtwork,
  SongArtwork
} from '../../Components/Artwork/Artwork';
import { PlaylistInfo, SongInfo } from '../../Components/Artwork/Info';
import { generatePlayerButton } from '../../Components/Button/PlayerButton';
import './Miniplayer.css';

export default function Miniplayer({ properties, isPlaying, handlers }) {
  const theme = useThemeContext();
  const { orientation, track } = properties;
  const { handleMaximizeClick, handleCloseClick } = handlers;
  const { playlist, song } = track;
  const { portrait, square, landscape } = orientation;
  const name = 'visualizer';

  const isDesktop = (square || landscape) && true;
  const isMobile = (portrait || square) && true;

  const playerList = ['maximize', 'close'];
  const playerHandlers = {
    maximize: handleMaximizeClick,
    close: handleCloseClick
  };
  const playerButtons = generatePlayerButton(playerList, playerHandlers);

  const playlistArtwork = <PlaylistArtwork name={name} playlist={playlist} />;
  const playlistInfo = <PlaylistInfo name={name} playlist={playlist} />;
  const songArtwork = <SongArtwork name={name} track={track} />;
  const songInfo = <SongInfo name='playback' track={track} />;
  const defaultArtwork = <DefaultArtwork name={name} />;

  const sectionClass = `${isMobile ? '' : 'perfect-center'} miniplayer${
    isMobile
      ? '-portrait'
      : ''
  } shadow--${theme}`;

  return (
    <section className={sectionClass}>
      <h2 className='hidden'>Miniplayer</h2>
      <nav><ul className='miniplayer-list'>{playerButtons}</ul></nav>
      {isDesktop ? playlistArtwork : song ? songArtwork : defaultArtwork}
      {isMobile ? square ? playlistInfo : isPlaying ? songInfo : '' : ''}
    </section>
  );
}
