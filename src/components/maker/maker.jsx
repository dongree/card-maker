import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'dream.coder.ellie.gmail.com',
      message: '"Dont forget to code your dream"',
      fileName: 'ellie',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Ellie2',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'dream.coder.ellie.gmail.com',
      message: '"Dont forget to code your dream"',
      fileName: 'ellie',
      fileURL: 'elile.png',
    },
    3: {
      id: '3',
      name: 'Ellie3',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'dream.coder.ellie.gmail.com',
      message: '"Dont forget to code your dream"',
      fileName: 'ellie',
      fileURL: null,
    },
  });
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const handleDelete = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  const handleAddOrUpdate = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.main}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          onAdd={handleAddOrUpdate}
          onDelete={handleDelete}
          onUpdate={handleAddOrUpdate}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
