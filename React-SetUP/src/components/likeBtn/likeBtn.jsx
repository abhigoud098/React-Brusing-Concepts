import "./likeBtn.css";

function LikeBtn() {
  const ChangeColor = () => {
    document.querySelector(".like-button").style.backgroundColor = "green";
    document.querySelector(".like-button").style.color = "white";
  };

  return (
    <button className="like-button" onClick={ChangeColor}>
      clickME
    </button>
  );
}

export default LikeBtn;
