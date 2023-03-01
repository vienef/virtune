import Background from './IllustrationBackground';
import Lines from './IllustrationLines';
import LeftInterface from './IllustrationLeftInterface';
import MiddleInterface from './IllustrationMiddleInterface';
import RightInterface from './IllustrationRightInterface';
import Desktop from './IllustrationDesktop';
import Character from './IllustrationCharacter';
import Device from './IllustrationDevice';
import Plant from './IllustrationPlant';
import './Illustration.css';

export default function Illustration() {
  return (
    <svg
      id='illustration'
      className='animated'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlnssvgjs='http://svgjs.com/svgjs'
      viewBox='0 0 500 500'
      version='1.1'
    >
      <Background />
      <Lines />
      <LeftInterface />
      <MiddleInterface />
      <RightInterface />
      <Desktop />
      <Character />
      <Device />
      <Plant />
    </svg>
  );
}
