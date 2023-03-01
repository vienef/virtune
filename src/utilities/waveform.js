export default function drawWaveform(properties, color, mirror = false ) {
  let { canvas, context, length, array, width, x } = properties;
  let height;

  for (let i = 0; i < length; i++) {
    height = array[i];
    const red = color[0] / i * height;
    const green = color[1] / i * height;
    const blue = color[2] / i * height;
    const positionX = mirror ? canvas.width / 2 - x : canvas.width / 2 + x;
    const positionY = canvas.height - i * height / 75;
    context.fillStyle = `rgb(${red}, ${green}, ${blue})`;
    context.fillRect(positionX, positionY, width, i * height / 125);
    x += width;
  }
}
