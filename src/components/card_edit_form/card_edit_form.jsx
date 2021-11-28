import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, onDelete, onUpdate }) => {
  const { name, nationality, age, message, theme, fileName } = card;

  const handleDelete = e => {
    e.preventDefault();
    onDelete(card);
  };

  const handleUpdate = e => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    onUpdate({ ...card, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onFileChange = file => {
    onUpdate({ ...card, fileName: file.name, fileURL: file.url });
  };

  return (
    <form className={styles.form} id={card.id}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={handleUpdate}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={handleUpdate}
      >
        <option value="Arsenal">Arsenal</option>
        <option value="Chelsea">Chelsea</option>
        <option value="Liverpool">Liverpool</option>
        <option value="ManUtd">Manchester United</option>
        <option value="ManCity">Manchester City</option>
        <option value="Tottenham">Tottenham</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="nationality"
        value={nationality}
        onChange={handleUpdate}
      />
      <input
        className={styles.input}
        type="text"
        name="age"
        value={age}
        onChange={handleUpdate}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={handleUpdate}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={fileName} />
      </div>
      <Button name="Delete" onClick={handleDelete} />
    </form>
  );
};

export default CardEditForm;
