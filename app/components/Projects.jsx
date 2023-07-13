import React from "react";
import nbapredictor from "@public/assets/projects/NBAPredictor.png";
import nbapredictor2 from "@public/assets/projects/NBAPredictor2.jpeg";
import nbaImg from "@public/assets/projects/nbamarkup.png";
import ERViz from "@public/assets/projects/ERViz.png";
import SoccerViz from "@public/assets/projects/SoccerViz.png";
import salesData from "@public/assets/projects/dataanalysispic.png";
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
            title="NBA GAME PREDICTOR"
            backgroundImage={nbapredictor2}
            projectUrl="/nbapredictor"
            stack="PYTHON"
          />
          <ProjectItem
            darkMode={darkMode}
            title="WALMART SALES DATA ANALYSIS PROJECT"
            backgroundImage={salesData}
            projectUrl="/salesdataanalysis"
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
          <ProjectItem
            darkMode={darkMode}
            title="NBA STATS APP"
            backgroundImage={nbaImg}
            projectUrl="/nbaapp"
            stack="REACT"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
