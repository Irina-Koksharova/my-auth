import {
  buttonForm,
  activeButtonForm,
  authButtonForm
} from './components/Button/styles';
import Button from './components/Button';
import Input from './components/Input';
import Title from './components/Title';

function App() {
  return (
    <>
      <Button
        style={activeButtonForm}
        children={'sign in'}
        aria-label="Sign in"
      />
      <Button
        style={buttonForm}
        children={'sign up'}
        aria-label="Sign up"
      />
      <Button
        style={authButtonForm}
        children={'Google'}
        aria-label="Authorization with Google"
      />
      <Input name='Name' />
      <Input name='E-mail' />
      <Input name='Password' />
      <Title children='Pro Test'/>
    </>
  );
}

export default App;
