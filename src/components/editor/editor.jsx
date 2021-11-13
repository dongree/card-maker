import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, onAdd, onDelete, onUpdate }) => {
  const handleAdd = info => {
    onAdd(info);
  };

  const handleDelete = id => {
    onDelete(id);
  };

  const handleUpdate = card => {
    onUpdate(card);
  };
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map(key => (
        <CardEditForm
          key={key}
          card={cards[key]}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
      <CardAddForm onAdd={handleAdd} />
    </section>
  );
};

export default Editor;
