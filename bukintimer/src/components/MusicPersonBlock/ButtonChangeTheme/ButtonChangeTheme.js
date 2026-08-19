import './buttonchangetheme.css';
import paletteIcon from './palette.png';

import { ModalWindowTheme } from '../../ModalWindowTheme/ModalWindowTheme';

import { useState } from 'react';

export const ButtonChangeTheme = () => {

  const [modalOpened, setModalOpened] = useState(false);

  const onChangeThemeClick = () => setModalOpened(true);
  const onModalClose = () => setModalOpened(false);

  return (
    <>
      <ModalWindowTheme opened={modalOpened} onClose={onModalClose} />

      <button
        className='button-change-theme'
        onClick={onChangeThemeClick}
        aria-label="Сменить тему"
      >
        <img src={paletteIcon} className='icon-button' alt='Сменить тему'></img>
      </button>
    </>
  );
};