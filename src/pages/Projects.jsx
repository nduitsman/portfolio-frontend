import '../Projects.css'
import { useState, useEffect } from "react";
import Header from "../components/Header";
function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {

    //make api call and get response
    const response = await fetch(props.URL + "projects");

    // turn response into javascript object
    const data = await response.json();
    console.log(props.URL)

    // set the projects state to the data
    setProjects(data);

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData()
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div className='projectContainer'>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <div>
          <a href={project.git}>
            <button>Github</button>
          </a>
          <a href={project.live}>
            <button>Live Site</button>
          </a>
        </div>
      </div>
    ));
  };

  return projects ? <div className = 'projectCard'>{loaded()}</div> : <h1></h1>;
}

export default Projects;