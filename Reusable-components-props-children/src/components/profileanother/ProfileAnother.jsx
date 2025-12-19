import "./ProfileAnother.css";

function ProfileAnother({personTwo}) {
  return (
    <div>
      <div className="card">
        <div className="main-content">
          <div className="header">
            <span>{personTwo.name}</span>
            <span>{personTwo.age}</span>
          </div>
          <p className="heading">{personTwo.bio}</p>
          <div className="categories">
            <span>React</span>
            <span>Css</span>
          </div>
        </div>
        <div className="footer">by Usha</div>
      </div>
    </div>
  );
}

export default ProfileAnother;
