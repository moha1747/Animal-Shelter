import '../styles/about.css';

export const About = () => {


  return (

    <section id="about">
      <div className="parent">
        <div className="shadow div1">
          <h2>Our Mission</h2>
          <div className=" item__p">
            <p>
              We are driven by a single belief: every animal deserves a loving home and care. The increasing number of stray and abandoned animals is a poignant reminder of the need for compassionate animal welfare organizations. Our mission is to rescue, rehabilitate, and rehome animals in distress, ensuring they lead a life of love and dignity.
            </p>
          </div>
        </div>

        <div className="shadow div2">
          <h3>Why We Chose This Mission</h3>
          <div className="item__p">
            <p>
              Our commitment to animal welfare stems from several core beliefs:
              <li>Animals enrich our lives in countless ways.</li>
              <li>Rescue and rehabilitation provide animals a second chance at life.</li>
              <li>Every animal, irrespective of its breed or size, is deserving of love and care.</li>
              <li>Building a community of animal lovers can usher in a world of change.</li>
            </p>
          </div>
        </div>

        <div className="shadow div3">
          <div className="item__p">
            <h3>Animal Shelter Facts</h3>
            <ul>
              <li>Millions of animals enter shelters annually, awaiting a forever home.</li>
              <li>A significant number of animals in shelters are lost pets not surrendered by their owners.</li>
              <li>Spaying and neutering pets can significantly reduce the number of unwanted animals.</li>
              <li>Adopting from shelters can save an animal's life and enrich your own.</li>
            </ul>
          </div>
        </div>

        <div className="div4">
          <div className="graph-images">
            <h4></h4>
            <img
              src="https://wellbeingintl.org/wp-content/uploads/2020/12/USA-Roaming-Dogs.png"
              alt="Graph depicting a fact about animal shelters"
            />
            {/* Add more images as required */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
