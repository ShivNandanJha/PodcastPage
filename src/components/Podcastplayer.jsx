
const PodcastPlayer = () => {
  return (
    <>
    
      <div className = "rectangle">
        <h1>
        Super Excited (aka The Saturday <br /> Edition)
        </h1>
        <p>
        Indie Stories · Jan 24 · Episode 234
        </p>
        <div className = "player">
        <img src       = "../assets/forward.png" alt = " back" />
        <img src       = "../assets/backward.png" alt = "front" />
        <audio controls></audio>
          
         
        </div>
      </div>
    </>
  )
};

export default PodcastPlayer;
