import { useState, useCallback } from 'react';
import { cssVariable } from '../../utilities/theme';
import { findMedian, roundTo } from '../../utilities/math';
import useTimeout from './useTimeout';

function extractColor(data) {
  const rgb = [[], [], []];

  for (let i = 0; i < data.length; i += 4) {
    rgb.map((c, index) => c.push(data[i + index]));
  }

  return rgb;
}

function filterColor(rgb) {
  const color =  [[], [], []];
  const [r, g, b] = rgb;
  const n = 100;

  for (let i = 0; i < r.length; i++) {
    const chroma = [r[i], g[i], b[i]];
    const compression = chroma.map(c => roundTo(c, n));
    const mono = compression.every(c => c === compression[0]);
    const isUpdating = chroma.some((c, i) => !color[i].includes(c));
    if (!mono && isUpdating) color.map((c, i) => c.push(chroma[i]));
  }

  return color;
}

function findMedianColor(color) {
  if (!color) return null;

  const median = color.map(c => findMedian(c));
  const [r, g] = median;
  const hue = Math.max(...median);
  const index = median.map((c, i) => color[i].indexOf(c));

  return hue === r ? index[0] : hue === g ? index[1] : index[2];
}

function pickColor(image) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  const img = document.querySelector(image);

  canvas.width = img.naturalWidth || img.offsetWidth || img.width;
  canvas.height = img.naturalHeight || img.offsetHeight || img.height;

  const { width, height } = canvas;
  
  context.drawImage(img, 0, 0);

  const data = context.getImageData(0, 0, width, height);
  const rgb = extractColor(data.data);
  const color = filterColor(rgb);
  const index = findMedianColor(color);

  canvas.remove();

  return color.map(c => c[index]);
}

export default function useAccentColor(id) {
  const [color, setColor] = useState([]);
  const handleColor = useCallback(() => {
    id
      ? setColor(pickColor('.visualizer-image'))
      : setColor([79, 0, 255]);
  }, [id]);

  useTimeout(handleColor, 500);

  const [r, g, b] = color;
  cssVariable('accent-code', `${r}, ${g}, ${b}`);

  return color;
}
