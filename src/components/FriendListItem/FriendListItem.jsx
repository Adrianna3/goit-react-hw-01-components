import PropTypes from 'prop-types';


// zrobic jeszcze z isOnline!
export const FriendListItem = ({ avatar, name }) => {
  return (
      <li className="style.item">
          
          <span className="style.status"></span>
      <img className="style.avatar" src={avatar} alt="User avatar" width="48" />
          <p className="style.name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};