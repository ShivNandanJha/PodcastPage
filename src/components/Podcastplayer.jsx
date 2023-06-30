
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
       <img src       = "../../src/assets/backward.svg" alt = "" />
       <img src       = "../../src/assets/forward.svg" alt  = "" />
        <audio controls></audio>
          
         
        </div>
      </div>
    </>
  )
};

export default PodcastPlayer;
