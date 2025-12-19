import "./profile.css";

function Profile({children}) {
  return (
    <div>
      <div className="card">
        <div className="main-content">
          <div className="header">
            <span>{children.name}</span>
            <span>{children.age}</span>
          </div>
          <p className="heading">{children.bio}</p>
          <div className="categories">
            <span>React</span>
            <span>Css</span>
          </div>
        </div>
        <div className="footer">by Abhi</div>
      </div>
    </div>
  );
}

export default Profile;
