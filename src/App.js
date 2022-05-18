import './App.css';
import Profile from './Profile/Profile';
import propTypes from 'prop-types'

function App() {

const user= {
  fullName : "Hatem Masmoudi",
  bio : "fullStack Web Developer",
  profession : "Student"
}

const handleName = (name) => alert(`Hello my name is ${name}`)

  return (
    <div className='App'>
      <Profile user={user} name={handleName}>
        <img src='https://www.nicepng.com/png/full/7-76288_anonymous-transparent-png-anonymous-logo-transparent.png' width={'150px'} height={'150px'} alt={"PI"}></img>
      </Profile>
    </div>
  );
}

App.user.defaultProps = {
  fullName: 'Anonymous',
  bio : "Unknown",
  profession : "Unknown"
}

App.propTypes = {
user: propTypes.any,
}

export default App;
