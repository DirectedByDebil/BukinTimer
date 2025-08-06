import { useState, useEffect } from 'react';
import './index.css';
import InstallationBlock from './components/InstallationBlock/InstallationBlock';
import TimerBlock from './components/TimerBlock/TimerBlock';

export default function App() {


  //#TODO replace to some theme factory
  const selectRandomColor = () => {
    const colors = ['#B7DA5D', '#FF5170', '#EFB391', '#BC4878'];
    const color = Math.floor(Math.random() * colors.length);
    return colors[color];
  };
  

  useEffect(() => {
    const randomColor = selectRandomColor();

    //#TODO looks like sex, but maybe we can do this prettier
    document.documentElement.style.setProperty('--bg-color', randomColor);
  });

  return (
    <>
      <main>
        <InstallationBlock/>
        <TimerBlock/>
      </main>
    </>
  )

}
