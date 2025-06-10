import React from "react";
import nbapredictor from "@public/assets/projects/NBAPredictor.png";
import nbapredictor2 from "@public/assets/projects/NBAPredictor2.jpeg";
// import nba1 from "@public/assets/projects/nba1.jpg";
import nba2 from "@public/assets/projects/nba2.png";
import nbaImg from "@public/assets/projects/nbamarkup.png";
import ERViz from "@public/assets/projects/ERViz.png";
import SoccerViz from "@public/assets/projects/SoccerViz.png";
import excelbikeproj from "@public/assets/projects/excelbikeproj.png";
import salesData2 from "@public/assets/projects/dataanalysispic2.jpeg";
import nbalogodrawing from "@public/assets/projects/nbar.png";
import mlb from "@public/assets/projects/mlb.jpg";
// import mlb5 from "@public/assets/projects/mlb5.jpg";
import mlb6 from "@public/assets/projects/mlb6.png";
import mlbpipeline from "@public/assets/projects/mlb data pipeline.png";
import titanic from "@public/assets/projects/titanic.jpg";
import MagePipeline from "@public/assets/projects/Mage pipeline structure SS2.png";
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
            title="MLB Data Warehouse Data Pipeline"
            backgroundImage={mlbpipeline}
            projectUrl="/mlbdatapipeline"
            stack="Python, Postgres, Airflow, R, Docker"
          />

          <ProjectItem
            darkMode={darkMode}
            title="NFL Data Pipeline"
            backgroundImage={MagePipeline}
            projectUrl="/nfldatapipeline"
            stack="Python, GCP, MAGE, R, Biquery, Docker"
          />

          <ProjectItem
            darkMode={darkMode}
            title="NBA GAME PREDICTOR REGRESSION MODEL"
            backgroundImage={nba2}
            projectUrl="/nbapredictor"
            stack="PYTHON"
          />

          <ProjectItem
            darkMode={darkMode}
            title="MLB PLAYERS HITS AND HRS REGRESSION MODEL"
            backgroundImage={mlb6}
            projectUrl="https://www.kaggle.com/code/nathankarns/mlb-players-hits-and-home-runs-regression-model/notebook"
            stack="R"
          />
          {/* <ProjectItem
            darkMode={darkMode}
            title="WALMART SALES DATA ANALYSIS PROJECT"
            backgroundImage={salesData2}
            projectUrl="/salesdataanalysis"
            stack="PYTHON"
          /> */}

          <ProjectItem
            darkMode={darkMode}
            title="NBA PLAYER PTS REGRESSION MODEL"
            backgroundImage={nbalogodrawing}
            projectUrl="https://www.kaggle.com/code/nathankarns/nba-pts-model/notebook"
            stack="R"
          />
          <ProjectItem
            darkMode={darkMode}
            title="TITANIC SURVIVAL PREDICTIONS REGRESSION MODEL"
            backgroundImage={titanic}
            projectUrl="https://www.kaggle.com/code/nathankarns/titanic-predictions"
            stack="R"
          />

          {/* <ProjectItem
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
          /> */}
          {/* <ProjectItem
            darkMode={darkMode}
            title="EXCEL BIKE DATA DASHBOARD"
            backgroundImage={excelbikeproj}
            projectUrl="/bikedataproject"
            stack="EXCEL"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
