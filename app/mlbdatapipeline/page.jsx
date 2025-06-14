import Image from "next/image";
import React from "react";
import excelbikeproj from "@public/assets/projects/excelbikeproj.png";
import MLBFactTable from "@public/assets/projects/MLBFactTable.png";
import DWDiagram from "@public/assets/projects/DWDiagram.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={MLBFactTable}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MLB Data Warehouse Data Pipeline</h2>
          <h3> Python, Postgres, Airflow, R, Docker </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <div className="w-[55px] mb-4">
            <Link href="/#projects">
              <p className="underline cursor-pointer">Back</p>
            </Link>
          </div>
          <p className="text-[#379237]">Project</p>
          <h2>Overview</h2>
          <p>
            This project showcases a fully automated data pipeline built with
            Docker and Apache Airflow, designed to ingest and transform MLB data
            on a daily schedule. The pipeline itself runs daily on my Raspberry
            Pi 5, it leverages an R script powered by the baseballr library to
            extract comprehensive play-by-play, team, and player data. Once
            ingested, the data is loaded into a PostgreSQL database, where a
            combination of SQL and dbt is used to perform robust
            transformations. The end result is a well-structured Kimball-style
            data warehouse, complete with conformed fact and dimension tables
            that support advanced baseball analytics and reporting. This project
            highlights my ability to orchestrate complex workflows, integrate
            multiple technologies, and apply best practices in modern data
            engineering. Let’s walk through how I developed this project and
            deployed it to my Raspberry Pi.
          </p>
          <p className="mt-4">
            First and foremost, this tutorial will focus on the steps I took to
            deploy the project to my Raspberri Pi, rather than the development
            of the pipeline itself. The steps I took to develop the pipeline
            itself can be found in the README file in the github repository for
            this project, located here:{" "}
            <a
              href="https://github.com/Karns11/MLB-Data-Warehouse-Pipeline--Raspberry-Pi"
              target="_blank"
              style={{ textDecoration: "underline", color: "blue" }}
            >
              MLB-Data-Warehouse-Pipeline--Raspberry-Pi.
            </a>
          </p>
          <p className="mt-4">
            Alright, let's get started. The first thing I did was unbox and
            setup my Raspberry Pi. I purchased the{" "}
            <a
              href="https://www.amazon.com/CanaKit-Raspberry-Starter-Kit-PRO/dp/B0CRSNCJ6Y/?_encoding=UTF8&ref_=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d"
              target="_blank"
              style={{ textDecoration: "underline", color: "blue" }}
            >
              CanaKit Raspberry Pi Starter Kit from Amazon
            </a>
            , and that came with everything I needed to get started. After
            putting all of the hardware together, the first step was to plug in
            a keyboard, mouse and hdmi into the pi. After turning it on, running
            the setup wizard, and applying updates, I updated the system and
            installed docker and docker compose with the following commands:
            <br></br> <br></br> sudo apt update && sudo apt upgrade -y<br></br>
            curl -sSL https://get.docker.com | sh <br></br>
            sudo usermod -aG docker $USER <br></br>newgrp docker
            <br></br>sudo apt-get update<br></br> sudo apt-get install
            libffi-dev libssl-dev <br></br> sudo apt install python3-dev
            python3-pip <br></br> sudo pip3 install docker-compose
          </p>
          <p className="mt-4">
            Next, also on the pi itself, run the following command to allow ssh:{" "}
            <br></br>
            <br></br> sudo raspi-config <br></br># Go to: Interface Options,
            then SSH, then Enable <br></br> <br></br> Then, run the following
            command to obtain the hostname of the pi: <br></br> <br></br>{" "}
            hostname -I
          </p>
          <p className="mt-4">
            Now, create a project directory and clone the following github repo
            in that directory: <br></br>{" "}
            https://github.com/Karns11/MLB-Data-Warehouse-Pipeline--Raspberry-Pi
          </p>
          <p className="mt-4">
            After cloning the repo, you will need to create a couple folders and
            files in the same directory that were not pushed to guthub. So, run
            the following commands: <br></br> <br></br> mkdir dags logs plugins
            config project-db-data-postgres15 project-db-data <br></br> touch
            .env <br></br> mkdir dbt/dbt_packages dbt/target dbt/logs
          </p>
          <p className="mt-4">
            Once that is complete, add the following env variables to the .emv
            file, the values can be whatever values your heart desires:{" "}
            <br></br> AIRFLOW_UID
            <br></br> MY_PG_USER
            <br></br> MY_PG_PASSWORD
            <br></br> MY_PG_DB
            <br></br> MY_PG_HOST
            <br></br> MY_PG_PORT
            <br></br> _AIRFLOW_WWW_USER_USERNAME
            <br></br> _AIRFLOW_WWW_USER_PASSWORD
          </p>

          <p className="mt-4">
            At this point, you have everything you need in order to run:{" "}
            <br></br> docker compose build <br></br> docker compose up
            airflow-init <br></br> docker compose up <br></br> <br></br> This
            will start up your airlfow ui and postgres db. In order to connect
            to the postgres db, you should install pgadmin, then register a new
            server. In the input fields, create a name for the server, then
            enter the Raspberry Pi's host name for the host name field (which
            you obtained earlier), and then enter the user name and password
            that you entered in the .env file. Boom! Now you should be able to
            see the database you defined the .env file as well!
          </p>
          <p className="mt-4">
            Next, navigate over to: localhost:8080 or pihostname:8080 in order
            to access the airflow ui. You should be able to login to the website
            with the values you entered for these vairables:
            _AIRFLOW_WWW_USER_USERNAME & _AIRFLOW_WWW_USER_PASSWORD. Once you
            login you should see the "run r script daily" dag. You can now turn
            it on and trigger it if you'd like.
          </p>

          <p className="mt-4">
            By default, once turned on, (and this can be changed in the
            "run_r_script_dag.py" file) the dag will run daily at 10am est to
            obtain yesterdays play-by-play data. If you want to change this
            behavior and backfill, you must change the BACKFILL_FLAG variable to
            1, and enter in the dates you would like to run the process for
            (Skip days that didn't have any MLB games).
          </p>

          <p className="mt-4">
            Lastly, and this is optional, we can set up a cloudflare tunnel to
            make sure the airflow UI can be accessed anywhere at anytime (not
            just using the Pi's host name on the local network). To do this
            follow these steps: <br></br> <br></br>Google search cloudflare
            tunnels, Then create an account, then add a tunnel, then copy and
            paste the provided code, add a domain name (might have to purchase
            one, I did), add http:localhost:8080, and you should be good to go!
          </p>

          <p className="mt-4">
            That is all! Now, just leave your Raspberry Pi on at all times and
            you will be able to access the db and airlfow ui whenever you need!
            You can also ssh into the pi with VScode with the remote - ssh
            extension on your desktop and edit the files on your pi, then save
            them and push to the github repo whenever you like. <br></br> I hope
            this very high-level overview was helpful. If you have any
            questions, feel free to email me or message me on linked, both are
            linked here on my portfolio website!
          </p>

          <p className="mt-4">
            Lastly, here is a diagram of the data warehouse that is created with
            this code. Hope you enjoy!
          </p>

          <Image
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={DWDiagram}
            alt="/"
          />

          <a
            href="https://github.com/Karns11/MLB-Data-Warehouse-Pipeline--Raspberry-Pi"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center pt-4"
          >
            <button className="px-8 py-2 mt-4 mr-8">GitHub Repo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 md:h-[300px]">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Postgres
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Airflow
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> R
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Docker
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default property;
