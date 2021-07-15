import { ThemeProvider } from '@material-ui/core/styles';
import theme from './UI/theme';

import './App.css';
import StepForm from './StepForm/StepForm';

import Personal from './StepForm/PersonalInfoForm';
import PolicyInfoForm from './StepForm/PolicyInfoForm';
import AccountInfoForm from './StepForm/AccountInfoForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1 style={{ margin: '0px' }}>Multistep form app.</h1>
        <StepForm />
        {/* <Personal />
        <PolicyInfoForm />
        <AccountInfoForm /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
