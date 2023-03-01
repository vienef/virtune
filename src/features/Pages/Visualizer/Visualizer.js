import {
  DefaultArtwork,
  PlaylistArtwork,
  SongArtwork
} from '../../Components/Artwork/Artwork';
import { PlaylistInfo, SongInfo } from '../../Components/Artwork/Info';
import { generatePlayerButton } from '../../Components/Button/PlayerButton';
import './Visualizer.css';

export default function Visualizer({ properties, isVisualizer, handlers }) {
  const { handleListClick, handleMinimizeClick, handleCloseClick } = handlers;
  const { rgb, window, track } = properties;
  const { portrait, square, landscape } = window;
  const { playlist, song } = track;
  const name = 'visualizer';

  const isDesktop = (square || landscape) && true;

  const visualizerDisplay = landscape ? '' : 'perfect-center';
  const visualizerOrientation = `${name}${portrait ? '-portrait' : ''}`;
  const visualizerClass = `${visualizerDisplay} ${visualizerOrientation}`;
  const visualizerShadow = `0 0 100vh 10vh rgba(var(--accent-code), .75)`;
  const visualizerColor = rgb.some(c => c > 0)
    ? `rgba(var(--accent-code), .5)`
    : 'transparent';
  const visualizerStyle = {
    backgroundColor: isDesktop && !isVisualizer ? visualizerColor : 'transparent',
    boxShadow: landscape ? visualizerShadow : 'none'
  };
  const artworkStyle = { opacity: isVisualizer ? '0' : '1' };

  const playlistArtwork = (
    <PlaylistArtwork
      name={name}
      playlist={playlist}
      style={artworkStyle}
    />
  );
  const songArtwork = <SongArtwork name={name} track={track} />;
  const defaultArtwork = <DefaultArtwork name={name} />;

  const playlistInfo = (
    <PlaylistInfo
      name={name}
      playlist={playlist}
      style={artworkStyle}
    />
  );
  const songInfo = <SongInfo name={name} track={track} />;

  const playerList = ['list', 'minimize', 'close'];
  const playerHandlers = {
    list: handleListClick,
    minimize: handleMinimizeClick,
    close: handleCloseClick
  };
  const playerButtons = generatePlayerButton(playerList, playerHandlers);

  const content = (
    <>
      {isDesktop ? playlistArtwork : song ? songArtwork : defaultArtwork}
      {landscape ? playlistInfo : (portrait && song) && songInfo}
    </>
  );

  return (
    <section className={visualizerClass} style={visualizerStyle}>
      <h2 className='hidden'>Visualizer</h2>
      {content}
      <h3 className='hidden'>Player Control</h3>
      <nav className='visualizer-navigation'>
        <ul className='visualizer-list'>
          {!landscape && playerButtons[0]}
          {(isDesktop || portrait) && playerButtons.slice(1)}
        </ul>
      </nav>
    </section>
  );
}
