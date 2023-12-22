import './VideoDetail.css'
import { React, useState } from "react";
import { Container, Row, Col } from "reactstrap";



// import "./choose-us.css";



const VideoDetails = ({ video }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="detailspage">
      <h1>Let's learning !</h1>
      <Container>
        <Row>
          <div>
            <Col> <p><video autoPlay controls src={"../" + video.url} width={1200} height={800} /></p>
              <h3>{video.name}</h3></Col>
          </div>
        </Row>
      </Container>

    </div>
  );
}

export default VideoDetails;