import React, { ReactElement, useState } from 'react';
import ModalController from './ModalController';
import ModalContainer from './ModalContainer';
import ModalContext from './ModalContext';

export function ModalProvider({children }) {
  const flagState = useState(1)
  const [modalController] = useState(() => new ModalController(flagState));

  return (
    <ModalContext.Provider value={modalController}>
      <>{children}</>
      <ModalContainer />
    </ModalContext.Provider>
  );
}