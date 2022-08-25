/* eslint-disable max-len */
import React from 'react';
import Btn from './layout/Btn';
import { connect } from 'react-redux';
import { CgArrowLongRightL } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const Welcome = ({ uid }) => {
  const navigate = useNavigate();
  // if (uid) navigate('/signin');

  return (
    <section className="home" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <article></article>
      <article></article>
      <article></article>
      <article style={{ paddingLeft: '40px' }}>
        <p style={{
          fontSize: '2.4rem',
          color: 'rgba(255,255,255,0.9)',
          letterSpacing: '3px',
          fontWeight: '600',
          textShadow: '1px 0 0 #ccc, 2px 0 0 #c9c9c9, 3px 0 0 #bbb, 4px 0px 0 #b9b9b9, 5px 0px 0 #aaa, 2px 5 0px rgba(0,0,0,.1), 2px 0px 3px rgba(0,0,0,.3)',
        }}>iNtrovert</p>
        <br/>
        <Btn
          onClick={() => navigate('/signin')}
          sx={{
            color: 'rgba(0,0,0,0.7)',
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: '12px',
            paddingLeft: '20px',
            paddingRight: '20px',
            boxShadow: 'rgba(50, 50, 93, 0.9) 0px 50px 100px -20px, rgba(0, 0, 0, 0.9) 0px 30px 60px -30px',
            fontFamily: 'Red Hat Display',
          }}
          txt="Log in   "
          icon={<div style={{
            paddingLeft: '12px',
            display: 'flex',
          }}><CgArrowLongRightL size={'1.5rem'} /></div>}/>
      </article>
      <article></article>
    </section>
  );
};


const mapStateToProps = (state) => ({
  uid: state.auth.uid,
});

export default connect(mapStateToProps)(Welcome);
