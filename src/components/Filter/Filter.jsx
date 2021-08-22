import React from 'react';
import shortid from 'shortid';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  const id = shortid.generate();
  return (
    <>
      <label htmlFor={id} className={s.label}>
        Find contacts by name{' '}
      </label>
      <input
        className={s.input}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
