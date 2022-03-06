import "./ContentBlock.css";
import image from "../../Images/cat.jpg";

export default function ContentBlock(props) {
  return (
    <div className="block">
      <div className="head-bar">
        <h2 className="block-title">{props.title}</h2>
      </div>
      <img src={image} alt="" className="image-in-block" />
      <div className="function-bar"></div>
      <div className="word-block">
        <p className="words">{props.content}</p>
      </div>
    </div>
  );
}
