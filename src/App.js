import './App.css';
import user from './avatar-jessica.jpeg';

function App() {
  const links = ['Github', 'Frontend Mentor', 'Linkedin', 'Twitter', 'Instagram'];
  return (
    <div className='App'>
      <div className='link_container'>
        <div className='user_info'>
          <img className='userImage' src={user} alt='userImg' />
          <h2>Jessica Randall</h2>
          <p className='country'>London,United Kingdom</p>
          <p className='desc'>"Front-end developer and avid reader."</p>
          <div className='links'>
            {links.map((item) => (
              <button className='link_btn'>{item}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
