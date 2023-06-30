function PodcastFooter() {
  return (
    <>
      <div className="footer-box">
        <div className="box-left-section">
          <h2>
            Learn how to start a business<br /> the 
            <span> right way. </span>
          </h2>
          <p>
            {" "}
            Many desktop publishing packages and web page editors now use lorem
            as their default model{" "}
          </p>
        </div>
        <div className="box-right-section">
          <button className="button"> Subscribe-&gt;</button>
        </div>
          </div>
          <div className = "footer-tagline">
          <div className = "footer-tagline-logo">
                   <img className="logo" src       = ".././src/assets/Logo2.svg" alt = "logo" />
              <p>Copyright © vieweb.co.in All rights reserved.</p>
              </div>
       
              <img className="social-icons" src=".././src/assets/Social Icons.svg" alt="social" />
          </div>
    </>
  );
}

export default PodcastFooter;
