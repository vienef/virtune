import useTimeout from './useTimeout';

function animateOverflow(element, container) {
  const node = container.querySelector(element);
  const diff = node.offsetWidth - container.offsetWidth;
  return diff > 0 ? translateXInfinity(node, diff, 5) : cancelAnimation(node);
}

function cancelAnimation(node) {
  node.getAnimations().map(animation => animation.cancel());
}

function translateXInfinity(node, distance = 0, offset = 0, unit = 'px') {
  node.animate(
    [
      { transform: `translateX(${offset}${unit})` },
      { transform: `translateX(-${distance + offset}${unit})` },
    ],
    {
      duration: distance * 100,
      iterations: Infinity,
      direction: 'alternate',
    }
  );
}

export default function useTextAnimation(node) {
  useTimeout(() => {
    const container = document.querySelector(node);
    if (container) {
      animateOverflow('.content-title', container);
      animateOverflow('.content-description', container);
    }
  }, 1000);
}
