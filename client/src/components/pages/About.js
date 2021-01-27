import React from 'react';
import Education from '../sidebar/Education';
//import Skills from '../sidebar/Skills';

const About = () => {
  return (
    <div className="About ">


      


      <div className="row">

          {/* <div className="col hide-on-med-and-down m4 sid-background">
            {/* background 
          </div> */}

          <div className="col s11 l11 m11  about-content center">

                <div className="row">
                    <div className="col  s11 ">
                      <h2 className="  blue-grey-text  text-darken-4 ">About Me</h2>
                    </div>
                </div>
                      
                      
                <div className="row ">
                  <div className="col Box Details s12 l8 offset-l2 deep-orange darken-4 card-panel  hover">
                      
                      <p >I am an enthusiastic and a self-motivated professional having good theoretical and practical experience in full stack web development. 

I have been teaching the web technology programming to the engineering students in areas of HTML5, CSS, Java Script, PHP, React.JS, Boot Strap & Type Script and consuming and sending data through web API’s, DOM traversal and parsing of data. Apart from this, I also have knowledge of SQL / Postgre-SQL queries and data handling in various formats like traditional RDBMS, JSON & NoSQL. 
<br/><br/>

Recently, I have also worked as an online Web Boot Camp instructor for an organization in Sweden. I also have good experience in the administration activities like campaigning & managing the admissions and the college events, presentations and mentoring the students
                      <br/><br/>
                      I have earned a Masters in Computer Applications and have excellent academic results. My education has been approved by NOKUT.no as well. 
                      </p>
                  </div>
                </div>


                      
                <div className="row Education-row">
                <div className="col s12 l8 offset-l2">
                  <Education/>
                </div>
                </div>



                {/* <div className="row ">
                  <div className="col Box  s12 ">
                      <Skills></Skills>
                  </div>
                </div> */}

          </div>

      </div>

  </div>
    

  );
};

export default About;
