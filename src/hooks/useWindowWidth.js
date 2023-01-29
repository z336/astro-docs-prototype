import { useState, useEffect } from 'preact/hooks';

export default function WindowWidth() {
  const [width, setWidth] = useState();

  function size() {
    setWidth(window.innerWidth);
  }

  // useEffect(() => {
  //   window.addEventListener('load', size);
  //   return () => window.removeEventListener('load', size);
  // }, []);

  useEffect(() => {
    size();
    window.addEventListener('resize', size);
    return () => window.removeEventListener('resize', size);
  }, []);

  return { width };
}
