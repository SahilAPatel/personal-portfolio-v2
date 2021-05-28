import { useState } from "react";

const About = () => {
    const [skills, setSkills] = useState("");

    setSkills( {
        skills: [
            { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
            { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
            { id: "JavaScript_skill", content: "JavaScript", porcentage: "90%", value: "90" },
            { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
            { id: "ReactJS_skill", content: "ReactJS", porcentage: "80%", value: "80"},
            { id: "Python_skill", content: "Python", porcentage: "75%", value: "75"},
            { id: "VanillaJS_skill", content: "VanillaJS", porcentage: "85%", value: "85"},
            { id: "Wordpress_skill", content: "Wordpress", porcentage: "80%", value: "80"} 
        ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Welcome to my Portfolio Website! My name is Sahil Patel and I am currently a 4th year Computer Engineering student at McMaster Unviersity. I absolutely love technology, and all thing computers, whether that be hardware or software. I have past internship experiance as a hardware engineer, but moving forward I want to explore more software related positions, perhaps in embbedded systems. When I am not tinkering with computers, you can find me enjoying my hobbies which include many sports, music, videogames and fashion. On this website you can learn all bout my projects, hobbies and interests by flipping over the tabs above! If you wish to get in touch with me, visit the contact tab!"
        }
      ]
})

    return (
<section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}


export default About;
