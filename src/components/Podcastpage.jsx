import "../App.css";
import PodcastCard from "./PodcastCard";
import PodcastNotes from "./PodcastNotes";
import PodcastPlayer from "./Podcastplayer";

// const PodcastDetails = () => {
//     return (
//       <div className="text">
//         <img
//           className="super-excited-aka-t"
//           alt="Super excited aka t"
//           src="https://generation-sessions.s3.amazonaws.com/896b344b8cae2cc482207584b94db684/img/super-excited--aka-t.png"
//         />
//         <p className="indie-stories-jan">Indie Stories · Jan 24 · Episode 234</p>
//       </div>
//     );
//   };

// Main PodcastPage component
export default function PodcastPage() {
  return (
    <>
      <nav>
        <div className="navbar">
          <img src="../assets/logo.png" alt="logo" />

          <div className="subscribe">
            <p>Subscribe-&gt;</p>
          </div>
        </div>
      </nav>
      <PodcastPlayer />
      <PodcastNotes />
{/* / */} */
      <PodcastCard />
    </>
  );
}
