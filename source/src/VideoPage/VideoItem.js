import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from 'react-player';
import './VideoItem.css'

const VideoItem = ({ video, getDetails }) => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div >
        {/* <Col lg="6" md="6"> */}
        <div className="vitm">
          {showVideo ? (
            <ReactPlayer
              url={video.url}
              controls
              width="100%"
              height="350px"
            />
          ) : (
            <img src={video.image} alt="" className="w-90" style={{ alignItems: "center", justifyContent: "center", paddingLeft: "11.5%" }} onClick={() => {

              getDetails(video);

              navigate('/details');
            }} />

          )}

          {!showVideo && (
            <span className="play__icon">
              <i
                class="ri-play-circle-line"
                onClick={() => setShowVideo(!showVideo)}
              ></i>
            </span>
          )}
        </div>
        <h3 className="videotitle">{video.name}</h3>
        {/* </Col> */}
      </div>
    </div>
  );
}

export default VideoItem;