/* eslint-disable react/button-has-type */
import React from 'react';
import Button from '@mui/material/Button';


function Btn(props) {
  return <Button
    {...props}
  >
    { props.txt }
    { props.txtNextLine ? <><br/>{props.txtNextLine}</> : null }
    { props.icon ? props.icon : null }
  </Button>;
}

export default Btn;
