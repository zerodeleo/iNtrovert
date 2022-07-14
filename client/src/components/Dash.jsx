import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FiAlertTriangle } from "react-icons/fi";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

// Styles
import * as styles from '../css/styles';
import CardList from './CardList';

const Dash = ({auth}) => {
  if (!auth.uid) return <Navigate to="/signin" />;
  return (
    <section className={`Dash ${styles.Dash}`} >
      <div>
      <br/>
        <h3 className={'shadow fs-1-5'}  >Grattis på födelsedagen</h3>
        <p >Jag tänkte att vi skulle lösa<br/> ditt körkort tillsammans.</p>
        <br/>
        <p >Detta är:</p>
        <br/>
        <h1 className={'c-green shadow fs-3'} >En complete guide till ditt<p className={'fs-5'}>körkort</p> Januari 2023</h1>
        <br/>
        <br/>
        <p >P.s. jag diggade domännamnet</p>
        <p >så vi kan göra något annat<br/> kul med det här sen</p>
        <br/>
        <h2 >Bara som en pointer:</h2>
        <p >Jag har ju aldrig fattat varför<br/>folks körkort är så dyra.</p>
        <br/>
        <p >Prislista, ca priser:</p>
          <p>1. Handledarkurs ca 300kr</p>
          <p>2. Synundersökning ca 150kr</p>
          <p>3. Riskettan & risktvåan ca 2500kr</p>
          <p>4. Teoriprov ca 400kr</p>
          <p>5. Körprov ca 1000kr</p>
        <br/>
        <h2 >Totalt ca 4350kr</h2>
        <p style={{fontStyle:'italic', textAlign:'center'}}>varav ca 2800kr<br/> har jag redan betalat för dig:</p>
        <p >handledarkurs + riskettan + risktvåan</p>
        <br/>
        <div >
          <p>Sen kommer julafton,<br/>så möjligtvis att du får en<br/> och annan körlektion ;)</p>
          <br/>
          <p>Jag tog bara en körlektion,<br/>men det var mer för att<br/>känna på trafikverkets bilar.</p><br/>
          <p>De är lite kraftigare än<br/>morsans leksaksbil liksom<br/>eftersom de är diesel.</p>
        </div>
        <br/>
        <br/>

      </div>
      <section className={`CardList ${styles.CardList}`}>
        <article className={`CardItem ${styles.CardItem} flex flex-col`}>
            <h1 className={'fs-2 mb-20'}>LEGEND</h1>
            <div className='flex flex-row align-center font-left mb-10'>
              <div className={`CardItemLegend ${styles.CardItemLegend} red`}></div>
              <h1 className={'ml-20'}>URGENT<br/>Gör detta NU!</h1>
            </div>
            <div className='flex flex-row align-center font-left mb-10'>
              <div className={`CardItemLegend ${styles.CardItemLegend} orange`}></div>
              <p className={'ml-20'}>Saker behöver göras </p>
            </div>
            <div className='flex flex-row align-center font-left mb-10'>
              <div className={`CardItemLegend ${styles.CardItemLegend} green`}></div>
              <p className={'ml-20'}>Bokat och betalt</p>
            </div>
        </article>
      </section>
      <CardList />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
  auth: state.auth,
}};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
