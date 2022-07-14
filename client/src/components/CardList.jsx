import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Components
import CardItem from './CardItem';

// Styles
import * as styles from '../css/styles';

const CardList = ({auth, cards}) => {
  if (!auth.uid) return <Navigate to="/signin" />;

  return (
    <article className={`CardList ${styles.CardList}`} >
      {cards.map(card => <CardItem key={card.createdAt} card={card} />)}
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
  auth: state.auth,
  cards: state.cards,
}};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
