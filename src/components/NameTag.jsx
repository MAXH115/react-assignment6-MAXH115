
import './NameTag.css';


const NameTag = () => {
  return (
    <div className="NameTag">
      <div><img src="../images/avatar-michelle.jpg" alt="Avatar" className="avatar" /></div>
      <div className="author-info">
        <span className='name'>Michelle Appleton</span>
        <p className='date'>28 Jun 2020</p>
      </div>
    </div>
  );
};

export default NameTag;