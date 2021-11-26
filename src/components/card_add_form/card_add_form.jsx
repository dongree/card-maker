import React, { memo, useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const themeRef = useRef();
  const nationalityRef = useRef();
  const ageRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      theme: themeRef.current.value,
      nationality: nationalityRef.current.value || '',
      age: ageRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        ref={nameRef}
      />
      <select className={styles.select} name="theme" ref={themeRef}>
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
        placeholder="Nationality"
        ref={nationalityRef}
      />
      <input
        className={styles.input}
        type="text"
        name="age"
        placeholder="Age"
        ref={ageRef}
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Message"
        ref={messageRef}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={file.fileName} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
