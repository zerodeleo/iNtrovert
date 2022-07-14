import React from 'react';

// Components
import Description from './Description';

import * as styles from '../../css/styles';

const NavBarSignedOut = () => {
  return (
    <article className={`NavBarSignedOut ${styles.NavBarSignedOut}`}>
      <div style={{height: 100}}/>
    </article>);
}

export default NavBarSignedOut;
