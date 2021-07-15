import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export default createTheme({
  palette: {
    primary: {
      main: '#845EC2',
      dark: '#6C48A9',
    },
    secondary: {
      main: '#D65DB1',
      dark: '#580620',
    },
    optional: {
      main: '#009EFA',
      light: '#00D2FC',
      dark: '#3B6896',
    },
  },
});
