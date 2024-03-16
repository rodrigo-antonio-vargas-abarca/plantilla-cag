import { Href } from '../../../data/tags';
import Link from 'next/link';
import React, { useState } from 'react';
import { Maximize } from 'react-feather';

const MaximizeScreen = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenHandler = (isFullScreen: boolean) => {
    setFullScreen(isFullScreen);
    if (isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document?.exitFullscreen();
    }
  };

  return (
      <li className='maximize-btn' onClick={() => fullScreenHandler(!fullScreen)}>
        <Link className='text-dark'  href={Href}>
          <div style={{display: "flex", justifyContent: "start"}}>
            <Maximize/>
            <span>{fullScreen ? "Minimizar" : "Expandir"}</span>
          </div>

        </Link>
      </li>

)
  ;
};

export default MaximizeScreen;
