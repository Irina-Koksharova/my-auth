import PropTypes from 'prop-types';
import s from './Input.module.css';

const Input = ({ name }) => {
  return (
    <li>
      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={name}
        autoComplete="off"
      ></input>
    </li>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Input;
