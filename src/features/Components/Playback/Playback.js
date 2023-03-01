import { library } from '../../../data/audio';
import { useThemeContext } from '../../Contexts/ThemeContext';
import useAudioDuration from '../../CustomHooks/useAudioDuration';
import { SongArtwork } from '../Artwork/Artwork';
import { SongInfo } from '../Artwork/Info';
import { ControlButton } from '../Button/ControlButton';
import PlayButton from '../Button/PlayButton';
import { generatePlayerButton } from '../Button/PlayerButton';
import SettingsButton from '../Button/SettingsButton';
import VolumeButton from '../Button/VolumeButton';
import Slider from '../Slider/Slider';
import './Playback.css';

export default function Playback({ properties, status, handlers }) {
  const {
    handleMinimizeClick,
    handleCloseClick,
    handleDurationClick,
    handleQueueClick,
    handleTrackClick,
    handlePlayClick,
    handleTimerClick,
    handleVisualizerClick,
    handleVolumeClick,
    handleDurationChange,
    handleVolumeChange
  } = handlers;
  const theme = useThemeContext();
  const { window, track, queue, timer, volume } = properties;
  const { isPlaying, isDurationChanging, isVisualizer } = status;
  const { portrait, mobile } = window;
  const { playlist, song } = track;
  const audio = playlist !== '' && library[playlist].playlist[song];
  const playback = 'playback';
  const shuffle = 'shuffle';
  const repeat = 'repeat';

  const isDesktop = !(portrait || mobile) && true;
  const isDisabled = !song && true;
  const isHidden = (!song || portrait) && true;
  
  const durationStatus = (isPlaying && !isDurationChanging) && true;
  useAudioDuration(isDesktop, durationStatus, isDisabled);

  // Player View Control
  const playerList = ['minimize', 'close'];
  const playerHandlers = {
    minimize: handleMinimizeClick,
    close: handleCloseClick
  };
  const playerButtons = generatePlayerButton(playerList, playerHandlers);
  const player = (
    <>
      <h3 className='hidden'>Player Control</h3>
      <nav className='playback-player-navigation'>
        <ul className='playback-player-list'>{playerButtons}</ul>
      </nav>
    </>
  );

  // Playback Thumbnail
  const songArtwork = <SongArtwork name={playback} track={track} />;
  const songInfo = <SongInfo name={playback} track={track} />;
  const thumbnail = (
    <section className='playback-thumbnail' aria-hidden={isHidden}>
      <h3 className='hidden'>Current Song</h3>
      {(isDesktop && song) && songArtwork}
      {(!portrait && song) && songInfo}
    </section>
  );

  // Playback Control Buttons
  const controlType = 'perfect-center square-button';
  const controlOrientation = `${isDesktop ? 'desktop' : 'mobile'}-button`;
  const controlMode = `${theme}-button`;
  const controlClass = `${controlType} ${controlOrientation} ${controlMode}`;
  const controlSwitch = isDesktop
    ? [shuffle, repeat]
    : ['backward', 'forward'];
  const controlList = [controlSwitch[0], 'previous', 'next', controlSwitch[1]];
  const controlButtons = controlList.map(li => {
    const handler = li === 'shuffle' || li === 'repeat'
      ? () => handleQueueClick(li)
      : li === 'previous' || li === 'next'
        ? () => handleTrackClick(li)
        : () => handleDurationClick(li);
    return (
      <li key={li}>
        <ControlButton
          properties={{ name: li, classes: controlClass }}
          status={{ isOn: li === queue && true, isDisabled }}
          onControlClick={handler}
        />
      </li>
    );
  });
  const controlPlay = (
    <li>
      <PlayButton
        classes={controlClass}
        status={{ isDisabled, isDesktop, isPlaying }}
        onPlayClick={handlePlayClick}
      />
    </li>
  );
  const controlNavigation = (
    <nav className='playback-control-navigation'>
      <ul className='playback-control-list'>
        {controlButtons.slice(0, 2)}
        {controlPlay}
        {controlButtons.slice(2)}
      </ul>
    </nav>
  );

  // Playback Duration Slider
  const durationStart = <p id='current-time' />;
  const durationEnd = <p>{audio?.duration || '0:00'}</p>;
  const durationInput = (
    <Slider
      properties={{
        name: 'duration',
        label: <span className='hidden'>Duration</span>,
        disabled: isDisabled
      }}
      onSliderChange={handleDurationChange}
    />
  );
  const durationSlider = (
    <form action='' className='playback-control-slider'>
      {durationStart}
      {durationInput}
      {durationEnd}
    </form>
  );

  // Playback Control
  const control = (
    <section className='playback-control'>
      <h3 className='hidden'>Playback Audio Control</h3>
      {!isDesktop && durationStart}
      {controlNavigation}
      {!isDesktop && durationEnd}
      {isDesktop && durationSlider}
    </section>
  );

  // Playback Settings Buttons
  const settingsRight = (
    <div className='playback-settings-right'>
      <SettingsButton
        name='timer'
        status={{ isOn: timer > 0 && true, isDesktop }}
        onSettingsClick={handleTimerClick}
      />
      <SettingsButton
        name='visualizer'
        status={{ isOn: isVisualizer, isDesktop }}
        onSettingsClick={handleVisualizerClick}
      />
    </div>
  );
  const settingsLeft = (
    <div className='playback-settings-left'>
      <SettingsButton
        name={shuffle}
        status={{ isOn: queue === shuffle && true, isDesktop}}
        onSettingsClick={() => handleQueueClick(shuffle)}
      />
      <SettingsButton
        name={repeat}
        status={{ isOn: queue === repeat && true, isDesktop}}
        onSettingsClick={() => handleQueueClick(repeat)}
      />
    </div>
  );

  // Playback Volume Slider
  const volumeIcon = volume < 1
    ? 'volumeMute'
    : volume < 51
      ? 'volumeLow'
      : 'volumeHigh';
  const volumeLabel = (
    <VolumeButton
      name={volumeIcon}
      isDesktop={isDesktop}
      onVolumeClick={handleVolumeClick}
    />
  );
  const volumeSlider = (
    <form action='' className='playback-settings-volume'>
      <Slider
        properties={{ name: 'volume', label: volumeLabel, value: volume }}
        onSliderChange={handleVolumeChange}
      />
    </form>
  );

  // Playback Settings
  const settings = (
    <section className='playback-settings'>
      <h3 className='hidden'>Playback Settings</h3>
      {!isDesktop && settingsLeft}
      {settingsRight}
      {isDesktop && volumeSlider}
    </section>
  );

  return (
    <nav className={playback}>
      <h2 className='hidden'>Playback Control</h2>
      {mobile && player}
      {thumbnail}
      {control}
      {settings}
    </nav>
  );
}
