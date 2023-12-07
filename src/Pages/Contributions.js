import bosch from "../assets/bosch.png";
import reea from "../assets/reea.png";
import nokia from "../assets/nokia.png";
import sda from "../assets/sda.png";
import ImageText from "../Components/ImageText/ImageText";

const Contributions = () => {
  return (
    <div className="page container-fluid d-flex flex-column justify-content-center align-items-center mb-5 pb-5">
      <h2 className="text-center">Want to know more about my contributions? </h2>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <ImageText
          img={bosch}
          title={"Bosch 🛠️"}
          text={`Do you know how corporate life start? I had found out at Bosch! At first,
          I was engaged in a Quality Engineer position where I learned the 8D system and developed
          enhanched problem solving skills, and then I started my own initiative to build a RPA for a
          process we had. It eventually saved a lot of time and it was estimated at 1M EUR savings / year.`}
        />
        <div className="w-100 d-flex justify-content-center align-items-center">
            <hr className="w-25" />
        </div>
        <ImageText
          img={reea}
          title={"Reea 👨🏻‍💻"}
          text={`Still euphoric from the victory achieved working at Bosch, I decided to move forward
          and start my hardest part of the Devleoper life, the junior stage. I am glad I had the
          opportunity to work with Reea in this stage, because the collective was very inclusive
          for a junior developer, and also had the opportunity to work in web outsourcing. This
          was a great jumpstart in my career because I had the opportunity to learn a lot of frameworks
          and see different project patterns.`}
          reverse={true}
        />
        <div className="w-100 d-flex justify-content-center align-items-center">
            <hr className="w-25" />
        </div>
        <ImageText
          img={nokia}
          title={"Nokia 📱"}
          text={`After taking my time as a junior developer, I joined Nokia ranks as a
          Fullstack developer working on some big projects. Some notable projects I've added my contribution
          would be a Task Manager System designed to automatically assign tasks to engineers based on
          what qualifications they had and what team they are on.`}
        />
        <div className="w-100 d-flex justify-content-center align-items-center">
            <hr className="w-25" />
        </div>
        <ImageText
          img={sda}
          title={"Software Development Academy 🧑🏻‍🏫"}
          text={`At some point everyone must try mentoring others. And to be honest I never had
          been thinking of mentoring someone when I was in College, but this opportunity revealed
          I love mentoring others and helping them grow as Developers. So far, I have trained over
          +500 new developers and the number is rising as I write this.`}
          reverse={true}
        />
        <div className="w-100 d-flex justify-content-center align-items-center">
            <hr className="w-25" />
        </div>
        <div className="conclusion d-flex flex-column justify-content-center align-items-center text-center pt-5">
                <h4 className="w-md-50 mb-3">
                    As for my mission for now, I want to help you build great web apps.
                    So, let me know when you are ready for a collab! 🚀
                </h4>
                <button className="btn btn-success">I want to collab!</button>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
