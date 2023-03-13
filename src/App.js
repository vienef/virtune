import { useState, useRef, useEffect, useCallback } from 'react';
import { library } from './data/audio';
import { playSong, switchSong } from './utilities/audio';
import {
  changeDuration,
  generateTarget,
  moveDuration
} from './utilities/helper';
import drawWaveform from './utilities/waveform';
import { ThemeProvider } from './features/Contexts/ThemeContext';
import useWindowResize from './features/CustomHooks/useWindowResize';
import useTextAnimation from './features/CustomHooks/useTextAnimation';
import useAccentColor from './features/CustomHooks/useAccentColor';
import useNextSong from './features/CustomHooks/useNextSong';
import useAudioVolume from './features/CustomHooks/useAudioVolume';
import { BackgroundArtwork } from './features/Components/Artwork/Artwork';
import Navbar from './features/Components/Navbar/Navbar';
import Playback from './features/Components/Playback/Playback';
import Collection from './features/Pages/Collection/Collection';
import Visualizer from './features/Pages/Visualizer/Visualizer';
import Playlist from './features/Pages/Playlist/Playlist';
import Miniplayer from './features/Pages/Miniplayer/Miniplayer';
import Notice from './features/Pages/Notice/Notice';
import './App.css';

export default function App() {
  const [page, setPage] = useState('library');
  const [playlist, setPlaylist] = useState('');
  const [song, setSong] = useState('');
  const [queue, setQueue] = useState('normal');
  const [timer, setTimer] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMiniplayer, setIsMiniplayer] = useState(false);
  const [isListOpened, setIsListOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDurationChanging, setIsDurationChanging] = useState(false);
  const [isVisualizer, setIsVisualizer] = useState(false);

  const display = useWindowResize();
  const audioList = playlist !== '' && Object.keys(library[playlist].playlist);
  const { portrait, square, landscape } = display;
  const track = { playlist, song };
  const isDesktop = (square || landscape) && true;
  const isLibrary = page === 'library' && true;
  const imageId = isDesktop ? playlist : song;
  const rgb = useAccentColor(imageId);
  useTextAnimation('.visualizer-info');
  useTextAnimation('.playback-info');
  useNextSong(handlePlaylistClick, audioList, song, queue, timer);
  useAudioVolume(volume);

  const audioRef = useRef();
  const analyserRef = useRef();
  const canvasRef = useRef();
  const canvasContextRef = useRef();
  const rafIdRef = useRef();
  const firstClickRef = useRef(false);

  // Audio Waveform
  function initializeCanvas() {
    const container = document.querySelector('.spectrum');
    canvasContextRef.current = canvasRef.current.getContext('2d');
    canvasRef.current.width = container.offsetWidth;
    canvasRef.current.height = container.offsetHeight;
  }
  function initializeAudio() {
    const audioContext = new window.AudioContext();
    const source = audioContext.createMediaElementSource(audioRef.current);
    analyserRef.current = audioContext.createAnalyser();
    source.connect(analyserRef.current);
    analyserRef.current.connect(audioContext.destination);
  }
  function calculateBarDimensions() {
    analyserRef.current.fftSize = 2048;
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const barWidth = canvasRef.current.width / bufferLength;
    return { bufferLength, dataArray, barWidth };
  }
  const animateWaveform = useCallback(() => {
    const { bufferLength, dataArray, barWidth } = calculateBarDimensions();
    let x = 0;
    const properties = {
      canvas: canvasRef.current,
      context: canvasContextRef.current,
      length: bufferLength,
      array: dataArray,
      width: barWidth,
      x
    };
    canvasContextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    analyserRef.current.getByteFrequencyData(dataArray);
    drawWaveform(properties, rgb, true);
    drawWaveform(properties, rgb);
    rafIdRef.current = requestAnimationFrame(animateWaveform);
  }, [rgb]);
  useEffect(() => {
    isPlaying && isVisualizer
      ? animateWaveform()
      : cancelAnimationFrame(rafIdRef.current);
    return () => cancelAnimationFrame(rafIdRef.current);
  }, [isPlaying, isVisualizer, animateWaveform]);

  // Background
  const isBackgroundNeeded = (!isDesktop && song) && true;
  const isUsingBackground = (isDesktop && (isVisualizer && playlist)) && true;
  const isBackgroundActive = (isBackgroundNeeded || isUsingBackground) && true;
  const isBackgroundSeen = (isBackgroundActive && !isMiniplayer) && true;
  const artwork = isDesktop && isVisualizer ? playlist : song;
  const background = <BackgroundArtwork song={artwork} aria-hidden='true' />;

  // Navbar
  const navbar = (
    <Navbar
      page={page}
      isDesktop={isDesktop}
      handleLinkClick={function (id) {
        setPage(id);
        id !== 'library' && setIsListOpened(false);
      }}
    />
  );

  // Collection
  const collection = (
    <Collection
      handleCollectionClick={function (id) {
        setPlaylist(id);
        if (id !== playlist) {
          setSong('');
          audioRef.current.pause();
        }
        setIsMiniplayer(false);
      }}
    />
  );

  // Player View Control
  function handleListClick() { setIsListOpened(true); }
  function handleMinimizeClick() { setIsMiniplayer(true); }
  function handleMaximizeClick() { setIsMiniplayer(false); }
  function handleCloseClick() {
    setPlaylist('');
    setSong('');
    setIsMiniplayer(false);
    setIsPlaying(false);
    audioRef.current.pause();
  }

  // Visualizer
  const visualizer = (
    <Visualizer
      properties={{ rgb, window: display, track }}
      isVisualizer={isVisualizer}
      handlers={{ handleListClick, handleMinimizeClick, handleCloseClick }}
    />
  );

  // Playlist
  function handlePlaylistClick(id) {
    setSong(id);
    setIsPlaying(true);
    playSong(audioRef.current, id);
    if (!firstClickRef.current) {    
      initializeCanvas();
      initializeAudio();
      firstClickRef.current = true;
    }
  };
  const list = (
    <Playlist
      properties={{ landscape, track }}
      handlers={{
        handleListCloseClick() { setIsListOpened(false); },
        handlePlaylistClick
      }}
    />
  );

  // Miniplayer
  const miniplayer = (
    <Miniplayer
      properties={{ orientation: display, track }}
      handlers={{ handleMaximizeClick, handleCloseClick }}
    />
  );

  // Playback
  const isPlaylistSeen = (!isDesktop && playlist) && true;
  const isPlayerSeen = (isPlaylistSeen && !isMiniplayer) && true;
  const isPlaybackSeen = (isPlayerSeen && isLibrary) && true;
  const playback = (
    <Playback
      properties={{ window: display, track, queue, timer, volume }}
      status={{ isPlaying, isDurationChanging, isVisualizer }}
      handlers={{
        handleMinimizeClick,
        handleCloseClick,
        handleDurationClick(id) {
          const audio = audioRef.current;
          const target = switchSong(audioList, song);
          moveDuration(id, audio, () => handlePlaylistClick(target));
        },
        handleQueueClick(id) { setQueue(q => q === id ? 'normal' : id); },
        handleTrackClick(id) {
          const target = generateTarget(id, song, queue, audioList);
          handlePlaylistClick(target);
        },
        handlePlayClick() {
          setIsPlaying(!isPlaying);
          isPlaying ? audioRef.current.pause() : audioRef.current.play();
        },
        handleTimerClick() { setTimer(t => t === 0 ? 3000 : 0); },
        handleVisualizerClick() { setIsVisualizer(!isVisualizer); },
        handleVolumeClick() { setVolume(v => v < 1 ? 50 : 0); },
        handleDurationChange(e) {
          const audio = audioRef.current;
          setIsDurationChanging(true);
          changeDuration(e, audio, () => setIsDurationChanging(false));
        },
        handleVolumeChange(e) { setVolume(e.target.value); }
      }}
    />
  );

  // Pages
  const pages = {
    collection: (
      <>
        {collection}
        {isMiniplayer && miniplayer}
      </>
    ),
    player: (
      <>
        {visualizer}
        {((landscape || (!landscape && isListOpened))) && list}
      </>
    ),
    equalizer: <Notice handleGoBackClick={() => setPage('library')} />,
    search: <Notice handleGoBackClick={() => setPage('library')} />,
    profile: <Notice handleGoBackClick={() => setPage('library')} />
  };

  // Main
  const mainStyle = {
    height: ((portrait && playlist) && isLibrary) && !isMiniplayer
      ? 'var(--main-height-shrinked)'
      : 'var(--main-height)'
  };

  // Audio
  const audio = (
    <audio
      ref={audioRef}
      preload='auto'
      style={{ display: 'none' }}
      muted={volume < 1 && true}
      aria-hidden='true'
    />
  );

  // Canvas
  const isVisualizerSeen = (isLibrary && song) && true;
  const isSpectrum = (isVisualizerSeen && isVisualizer) && true;
  const canvasStyle = { zIndex: isSpectrum && !isMiniplayer ? '0' : '-1' };
  const canvas = (
    <div className='spectrum' style={canvasStyle} aria-hidden='true'>
      <canvas ref={canvasRef} className='spectrum-canvas' />
    </div>
  );

  return (
    <ThemeProvider>
      {(isBackgroundSeen && isLibrary) && background}
      {navbar}
      <main className={`${page}-main`} style={mainStyle}>
        {
          isLibrary
            ? playlist && !isMiniplayer
              ? pages.player
              : pages.collection
            : pages[page]
        }
      </main>
      {(isPlaybackSeen || isDesktop) && playback}
      {audio}
      {canvas}
    </ThemeProvider>
  );
}
