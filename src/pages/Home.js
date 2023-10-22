import React from "react";

function Home() {
  return (
    <div className="home">
      <video controls>
        <source src="your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
