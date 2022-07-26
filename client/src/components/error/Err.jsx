/* eslint-disable max-len */
import React from 'react';

const Err = ({ msg }) => (
  <article className="err__container" style={{ width: '100%', textAlign: 'center', fontFamily: 'Red Hat Display', textTransform: 'uppercase' }}><p className="err-msg">{msg}</p></article>
);

export default Err;
