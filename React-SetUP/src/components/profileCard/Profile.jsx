import "./Profile.css";

function Profile({ user }) {
  return (
    <div className="profile-card">
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className="profile-avatar"
      />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-bio">
        <strong>Bio: </strong>
        {user.bio}
      </p>
      <p className="profile-topics">
        <strong>Topics:</strong> {user.Topics}
      </p>
    </div>
  );
}

export default Profile;
