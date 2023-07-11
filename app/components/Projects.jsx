import React from "react";
import nbapredictor from "@public/assets/projects/NBAPredictor.png";
import nbaImg from "@public/assets/projects/nbamarkup.png";
import ERViz from "@public/assets/projects/ERViz.png";
import SoccerViz from "@public/assets/projects/SoccerViz.png";
import ProjectItem from "./ProjectItem";

const Projects = ({ darkMode }) => {
  return (
    <div id="projects" className={darkMode ? "w-full bg-black" : "w-full"}>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#379237]">
          Side Projects
        </p>
        <h2 className={darkMode ? "py-4 text-[#fff]" : "py-4"}>
          What I've Built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            darkMode={darkMode}
            title="NBA STATS APP"
            backgroundImage={nbaImg}
            projectUrl="/nbaapp"
            stack="REACT"
          />
          <ProjectItem
            darkMode={darkMode}
            title="NBA GAME PREDICTOR"
            backgroundImage={nbapredictor}
            projectUrl="/nbapredictor"
            stack="PYTHON"
          />
          <ProjectItem
            darkMode={darkMode}
            title="EMERGENCY ROOM DASHBOARD"
            backgroundImage={ERViz}
            projectUrl="/erdashboard"
            stack="TABLEAU"
          />
          <ProjectItem
            darkMode={darkMode}
            title="UEFA CHAMPIONS LEAGUE DASHBOARD"
            backgroundImage={SoccerViz}
            projectUrl="/uefadashboard"
            stack="TABLEAU"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
