import { library } from '../../../data/audio';
import { useThemeContext } from '../../Contexts/ThemeContext';
import './Artwork.css';

function Artwork({ content, ...props }) {
  const theme = useThemeContext();
  const { name, artwork, description } = content;
  const classes = name === 'background' ? 'perfect-center' : '';
  const mode = name === 'visualizer' || name === 'default' ? `shadow--${theme}` : '';
  const picture = `${classes} ${name}-picture ${mode}`;
  const img = `${name}-image`;
  const alt = `Artwork: ${description}`;
  const size = 440;
  const webp = require(`../../../assets/${artwork}.webp`);
  const png = require(`../../../assets/${artwork}.png`);

  return (
    <picture className={picture} {...props}>
      <source srcSet={webp} type='image/webp' />
      <img className={img} src={png} alt={alt} width={size} height={size} />
    </picture>
  );
}

export function DefaultArtwork({...props}) {
  const content = {
    name: 'default',
    artwork: 'virtune',
    description: 'Virtune logo.'
  };

  return <Artwork content={content} {...props} />;
}

export function BackgroundArtwork({ song, ...props }) {
  const content = { name: 'background', artwork: song, description: '' };

  return <Artwork content={content} {...props} />;
}

export function PlaylistArtwork({ name, playlist, ...props }) {
  const description = library[playlist].description;
  const content = { name, artwork: playlist, description };

  return <Artwork content={content} {...props} />;
}

export function SongArtwork({ name, track }) {
  const { playlist, song } = track;
  const description = library[playlist].playlist[song].description;
  const content = { name, artwork: song, description };

  return <Artwork content={content} />;
}
