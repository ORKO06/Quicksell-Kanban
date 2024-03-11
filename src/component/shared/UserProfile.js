import Heading1 from '../Typography/Heading1';
import './UserProfile.css';

const UserProfile = ({name,userStatus}) => {
    let initials = ''
    let parts = name.split(' ')
    for (var i = 0; i < parts.length; i++) {
        if (parts[i].length > 0 && parts[i] !== '') {
        initials += parts[i][0]
        }
    }
  
  return (
    <div className='User-Profile-Container' >
        <span className='User-Profile-Picture'>
            <Heading1 classes='ProfileText'>{initials}</Heading1>
        </span>
        <span className={`User-Status ${userStatus ? 'active': 'inactive' }`}></span>
    </div>
  )
}

export default UserProfile