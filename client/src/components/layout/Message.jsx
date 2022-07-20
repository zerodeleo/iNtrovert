import React from 'react';

const Message = ({ msg, className }) => (
  <article
    className={className}>
    <p
      className={`${className}-msg`}>{msg}
    </p>
  </article>
);

export default Message;
