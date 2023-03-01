import { library } from '../../../data/audio';
import { checkPlural } from '../../../utilities/string';
import './Info.css';

function Info({ content, ...props }) {
  return (
    <div className={`${content.name}-info`} {...props}>
      <p className='content-title'>{content.title}</p>
      <p className='content-description'>{content.description}</p>
    </div>
  );
}

export function CollectionInfo({ playlist }) {
  const list = library[playlist];
  const description = `${list.length} songs`;
  const content = { name: 'collection', title: list.title, description };

  return <Info content={content} />;
}

export function PlaylistInfo({ name, playlist, ...props }) {
  const list = library[playlist];
  const { hours, minutes, seconds } = list.duration;
  const hr = checkPlural({ hour: hours });
  const min = checkPlural({ minute: minutes });
  const sec = checkPlural({ second: seconds });
  const description = (
    <>
      <span className='content-note'>{list.note}</span>
      <span className='content-length'>{list.length} songs, {' '}</span>
      {hr} {min} {sec}.
    </>
  );
  const content = { name, title: list.title, description };

  return <Info content={content} {...props} />;
}

export function SongInfo({ name, track }) {
  const { playlist, song } = track;
  const audio = library[playlist].playlist[song];
  const description = audio.artist.join(', ');
  const content = { name, title: audio.title, description };

  return <Info content={content} />;
}
