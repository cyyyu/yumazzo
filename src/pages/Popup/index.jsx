import React, {Suspense} from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';
import '../../assets/styles/tailwind.css';

render(
  <Suspense fallback={null}>
    <Popup />
  </Suspense>
  , window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
