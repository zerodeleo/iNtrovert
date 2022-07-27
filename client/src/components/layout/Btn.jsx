/* eslint-disable react/button-has-type */
import React from 'react';
import Button from '@mui/material/Button';


function Btn(props) {
  return <Button
    {...props}
  >
    { props.txt }
    { props.txtnextline ? <><br/>{props.txtnextline}</> : null }
    { props.icon ? props.icon : null }
  </Button>;
}

export default Btn;
