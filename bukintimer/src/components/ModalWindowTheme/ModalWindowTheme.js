import '../ModalWindowPersons/modalwindowpersons.css';

import { getThemes } from '../../effects/selectRandomColor';

import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const ModalWindowTheme = ({
  opened=false,
  onClose=()=>{}
}) => {

  const themeColors = getThemes();

  const [selectedTheme, setSelectedTheme] = useLocalStorage('bukinTheme', themeColors[0].id);
  
  const handleBackdropClick = (event) => {
      if (event.target.classList.contains('modalWindow__container')){
          onClose();
      }
  };

  const onThemeClick = (theme) => {
    if (!theme || !theme.id || !theme.color) return;

    setSelectedTheme(theme.id);
    document.documentElement.style.setProperty('--bg-color', theme.color);
  };

  return (
    <>
    {
      opened &&
    
      <div className='modalWindow__container' onClick={handleBackdropClick}>
        <div className='modalWindow__content'>
          <span className='modalWindow__close-btn' onClick={onClose}>&times;</span>
          <div  className='modalWindow__list-container'>
            <div className='modalWindow__list-persons'>

              {themeColors.map((theme, index) => (
                <div className="modalWindow__cardPerson" key={`theme-color-${index}`}>
                  <label className="modalWindow__wrapper">

                    <input className="modalWindow__input" 
                      type="radio" 
                      checked={selectedTheme === theme.id}
                      onChange={() => onThemeClick(theme)}
                    />
                      
                    <span className="modalWindow__tile"
                      style={{
                        backgroundColor: theme.color,
                        color: 'white',
                        textShadow: '3px 3px 20px black'
                      }}
                    >
                        <span className="modalWindow__label">{theme.title}</span>
                    </span>
                  </label>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
};