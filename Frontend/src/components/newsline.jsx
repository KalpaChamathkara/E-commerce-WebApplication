import { Link } from "react-router-dom";
import "./css/NewsLine.css";

function NewsLine() {
  return (
    <div className="news-line">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        🚀 Big Sale: Get up to 50% off on all electronics! Limited time offer!
        🎉
      </marquee>
    </div>
  );
}

export default NewsLine;
