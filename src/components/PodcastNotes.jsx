// Reusable component for podcast notes
const PodcastNotes = () => {
  return (
    <div className = "content">
    <h1  className = "h-1">Notes</h1>
    <p   className = "Notes-text">
        In this episode,&nbsp;&nbsp;It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the with the release of letraset sheets
        containing passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <div className="hostandGuest_box">
        <h3>Hosts and Guests</h3>
        <div className="profile">
          <img src="../../src/assets/profile1.png" alt="profile" />
          <div className="profile-name">
            <p>
              Jon Buda
              <span className="profile-link">@jonBuda </span>
            </p>
          </div>
        </div>
        <div className="profile">
          <img src="../../src/assets/profile3.png" alt="profile" />
          <div className="profile-name">
            <p>
              Jon Buda
              <span className="profile-link">@jonBuda </span>
            </p>
          </div>
        </div>
        <div className="profile">
          <img src="../../src/assets/profile2.png" alt="profile" />
          <div className="profile-name">
            <p>
              Jon Buda
              <span className="profile-link">@jonBuda </span>
            </p>
          </div>
        </div>
      </div>
      <div className="topics">Topics</div>
      <div className="topic-container">
        <div className="text-2">
          <span className="span">›</span>
          <span className="text-wrapper-5"> 0:55</span>
          <span className="text-wrapper-6">
            {" "}
            Jason&apos;s first podcast ever
            <br />
          </span>
        </div>
        <div className="text-2">
          <span className="span">›</span>
          <span className="text-wrapper-5"> 1:12</span>
          <span className="text-wrapper-6">
            {" "}
            Helen&#39;s been on other podcasts: Startups for the Rest of Us,
            Indie Bites, Indie Worldwide
            <br />
          </span>
        </div>
        <div className="text-2">
          <span className="span">›</span>
          <span className="text-wrapper-5"> 3:06</span>
          <span className="text-wrapper-6">
            {" "}
            Should we invest in the &#34;auto publish to YouTube&#34; feature?
            <br />
          </span>
        </div>
        <div className="text-2">
          <span className="span">›</span>
          <span className="text-wrapper-5"> 13:32</span>
          <span className="text-wrapper-6">
            {" "}
            The best features the ones that feel like &#34;magic&#34; when a
            customer uses them
            <br />
          </span>
        </div>
        <div className="text-2">
          <span className="span">›</span>
          <span className="text-wrapper-5"> 18:46</span>
          <span className="text-wrapper-6">
            {" "}
            The &#34;wait and see&#34; product development philosophy
            <br />
          </span>
        </div>
        <div className="text-2">
          <span className="span">›</span>
          <span className="text-wrapper-5"> 20:27</span>
          <span className="text-wrapper-6">
            {" "}
            A new podcast website builder CMS and website designs
            <br />
          </span>
        </div>
        <div className="text-2">
          <span className="span">›</span>
          <span className="text-wrapper-5"> 32:24</span>
          <span className="text-wrapper-6">
            {" "}
            Making a few new podcast website themes
            <br />
          </span>
        </div>
        <div className="text-2">
          <span className="span">›</span>
          <span className="text-wrapper-5"> 34:30</span>
          <span className="text-wrapper-6">
            {" "}
            How we run our weekly team meetings
          </span>
        </div>
        {/* </div> */}
      </div>

      <div className="contribution-container">
        <div className="text-wrapper-10">Contributors</div>
        <div className="text-2">
          <span className="span">— </span>
          <span className="text-wrapper-8">Jon Buda</span>
          <span className="text-wrapper-5">&nbsp;</span>
          <span className="text-wrapper-6">
            lives in London, UK. He&#39;s been involved in the podcasting world
            since 2013, and has been building software since 2002.
            <br />
          </span>
        </div>
        <div className="text-2">
          <span className="span">—</span>
          <span className="text-wrapper-9">&nbsp;</span>
          <span className="text-wrapper-8">Mark Mitchel</span>
          <span className="text-wrapper-9">&nbsp;</span>
          <span className="text-wrapper-6">
            lives in London, UK. He&#39;s been involved in the podcasting world
            since 2013, and has been building software since 2002.
            <br />
          </span>
        </div>
        <div className="text-2">
          <span className="span">—</span>
          <span className="text-wrapper-6">&nbsp;</span>
          <span className="text-wrapper-8">Mary James</span>
          <span className="text-wrapper-6">
            {" "}
            lives in London, UK. He&#39;s been involved in the podcasting world
            since 2013, and has been building software since 2002.
          </span>
          <p className="if-you-liked-this-ep">
            <span className="text-wrapper-11">
              If you liked this episode, popularised in the with the release of
              letraset sheets containing passages, and more recently with
              desktop{" "}
            </span>
            <span className="text-wrapper-12">@PublishingSoftware</span>
            <span className="text-wrapper-11">.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PodcastNotes;
