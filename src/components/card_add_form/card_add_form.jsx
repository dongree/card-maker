import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = e => {
    e.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: null,
    };
    formRef.current.reset();
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
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
        ref={companyRef}
      />
      <select className={styles.select} name="theme" ref={themeRef}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
        ref={titleRef}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
        ref={emailRef}
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Message"
        ref={messageRef}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
