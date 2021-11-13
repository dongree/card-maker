import React from 'react';
import { useRef } from 'react/cjs/react.development';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, onDelete, onUpdate }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const handleDelete = () => {
    onDelete(card);
  };

  const handleUpdate = e => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    onUpdate({ ...card, [e.currentTarget.name]: e.currentTarget.value });
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
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={handleUpdate}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={handleUpdate}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={handleUpdate}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={handleUpdate}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={handleUpdate}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={handleDelete} />
    </form>
  );
};

export default CardEditForm;
