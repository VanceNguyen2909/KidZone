import VideoItem from './VideoItem';
import './video.css'

function Video({ videos, getDetails }) {
  //console.log(10, video.url)  
  console.log(5, videos)


  return (


    
    <div className='vidpage'>
      

    
      <div className='w-full max-w-7xl mx-auto mt-6' style={{ borderRadius: "30px", backgroundColor: "#E0FFFF", background : "linear-gradient(to right, #E0FFFF, #FFBDF0)", paddingTop : "4%", paddingBottom: "4%", paddingLeft: "2%",paddingRight: "2%" }} >
        <h1 className='vidtit'>Funny Learning</h1>
        <div className='vidbody' >
    
        {videos.map(v => (
          <VideoItem key={v.id} video={v} getDetails={getDetails}  />
        ))}

        </div>
        
      </div>
    </div>
  );
}
export default Video;