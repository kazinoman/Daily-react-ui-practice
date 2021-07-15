import './App.css';
import MyComponent from './MyComponent';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './UI/Theme';

import Nav from './Nav';
import Hero from './Hero';
import BlogSection from './BlogSection';
import Footer from './Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <Hero />
        <BlogSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
