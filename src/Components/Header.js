import PropTypes from 'prop-types';
import Buttons from "./Buttons";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Buttons 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'close' : 'Add'} 
          onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header