import "../styles/home.css";

export const Home = () => {
  return (
    <div className="main-hero">
      <img src="https://getwallpapers.com/wallpaper/full/e/1/c/151855.jpg"></img>
      <div className="left-hero ">
        <h1>Welcome to my social justice issue project!</h1>
        <p>
          This is a deep dive into the challenges and issues faced by many in
          our society. I created this to shine a light on areas we can improve,
          grow, and change. Join me in understanding more about these important
          topics and finding ways to make a difference.
        </p>
      </div>
      {/* <div className="hero_p">
        <p>
          This is a deep dive into the challenges and issues faced by many in
          our society. I created this to shine a light on areas we can improve,
          grow, and change. Join me in understanding more about these important
          topics and finding ways to make a difference.
        </p>
      </div> */}
    </div>
  );
};

export default Home;
