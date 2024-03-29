import React from 'react';
import TextField from '@mui/material/TextField';


function Input(props) {
  return (
    <>
      <TextField
        variant="outlined"
        {...props}
        values={null}
      />
      { props.list && props.values ?
        (
          <datalist id={props.list}>
            { props.values.map((value) => (
              <option label={value} key={value} value={value} />
            )) }
          </datalist>
        ) :
        null }
    </>
  );
}

export default Input;
