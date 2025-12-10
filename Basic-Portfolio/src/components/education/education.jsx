import "./education.css";

function Education() {
  function showDetail() {
    
  }

  return (
    <>
      <section className="education" id="education">
        <div className="card">
          <p onChange={showDetail}>
            <span id="heading">SECONDARY</span>
            <div className="detail-div-Container">
              <div>
                <strong>Percentage:</strong> <span>76%</span>
              </div>
              <div>
                <strong>School:</strong> <span>Dream Convent High School</span>
              </div>
              <div>
                <strong>Location:</strong> <span>Mandideep, Satlapur</span>
              </div>
            </div>
          </p>
          <p>
            <span>HR. SECONDARY</span>
          </p>
          <p>
            <span>DEGREE</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Education;
