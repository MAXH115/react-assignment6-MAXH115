/** Component Imports */
import CardImg from './components/CardImg';
import CardText from './components/CardText';
import NameTag from './components/NameTag';
import Share from './components/Share';
import './style.css';
/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles' 
 */


const App = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <CardImg />
        </div>
        <div className="card-content">
          <CardText />
          <div className='bottombar'>
            <NameTag />
            <Share />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

/* <div> <p>Michelle Appleton
  28 Jun 2020

  Share</p></div> */
