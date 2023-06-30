import "../App.css";
import PodcastFooter from "./PodcastFooter";
import PodcastCard from "./PodcastCard";
import PodcastNotes from "./PodcastNotes";
import PodcastPlayer from "./Podcastplayer";


                                                                                                                                                          
function PodcastPage() {
  return (
    <>
      <nav>
        <div className = "navbar">
        <img src       = "../../src/assets/logo.png" alt = "logo" />

          <button className = "button">
           Subscribe-&gt;
          </button>
        </div>
      </nav>
      <PodcastPlayer />
      <PodcastNotes />
      <br />
      <PodcastCard />
      <br/>
      <PodcastFooter/>
    </>
  );
}

export default PodcastPage;