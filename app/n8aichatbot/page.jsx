import Image from "next/image";
import React from "react";
import N8AI2 from "@public/assets/projects/HomePage.png";
import N8AI3 from "@public/assets/projects/MostHomeRunsResponse.png";
import N8AI4 from "@public/assets/projects/Follow-up response.png";
import N8AI5 from "@public/assets/projects/AllStatsFollowUpResponse.png";
import N8AI6 from "@public/assets/projects/TigersTriplesResponse.png";
import N8AI7 from "@public/assets/projects/TigersTeamHrResponse.png";
import N8AI8 from "@public/assets/projects/DatabaseStatusPic.png";
import N8AI from "@public/assets/projects/N8AIChatBot.png";
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
          src={N8AI}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">N8AI SQL Chat Bot</h2>
          <h3> Django, OpenAI, JavaScript, SQL, Python </h3>
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
            Excited to share a project I’ve been working on: an AI-powered SQL
            chatbot for data warehouses, built with Django, OpenAI, and
            PostgreSQL!
          </p>

          <p className="mt-4">
            This application empowers users—regardless of SQL expertise—to
            interact with their data warehouse using natural language. Users can
            ask questions like
            <em>
              “How many home runs did the Detroit Tigers hit this year?”
            </em>{" "}
            and instantly receive safe, read-only SQL queries and results, all
            within a modern web interface.
          </p>

          <p className="mt-4">
            The system leverages OpenAI’s language models to translate user
            queries into optimized SQL, while enforcing strict rules for
            security and accuracy (e.g., only generating <code>SELECT</code>{" "}
            statements, using the correct fact tables for stats, and never
            exposing sensitive operations).
          </p>

          <p className="mt-4">
            <strong>Key features include:</strong>
          </p>
          <ul>
            <li>
              <strong>Natural Language to SQL:</strong> Type questions in plain
              English; the AI generates and executes SQL, then returns results
              and a human-readable summary.
            </li>
            <li>
              <strong>Contextual Awareness:</strong> Maintains chat history and
              schema context for follow-up questions in a natural flow.
            </li>
            <li>
              <strong>Admin Tools:</strong> Manage chat sessions, view query
              logs, update schema files, and monitor database health from a
              dedicated panel.
            </li>
            <li>
              <strong>Schema-Driven Intelligence:</strong> Uses a YAML schema
              file to understand table relationships and business logic,
              ensuring accurate queries.
            </li>
            <li>
              <strong>Security First:</strong> Enforces read-only access and
              validates queries to prevent unsafe operations.
            </li>
            <li>
              <strong>User Experience:</strong> Clean, responsive UI with chat
              history, message copying, and robust error handling.
            </li>
          </ul>

          <p className="mt-4">
            Whether you’re a data analyst, business user, or developer, this
            tool makes exploring your data warehouse as easy as having a
            conversation. If you’re interested in AI-driven analytics or want to
            see a demo, let’s connect!
          </p>

          <p className="mt-4">
            Here are some additional pictures of some cool questions I asked the
            chat bot. Hope you enjoy!
          </p>

          <Image
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={N8AI2}
            alt="/"
          />

          <Image
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={N8AI3}
            alt="/"
          />

          <Image
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={N8AI4}
            alt="/"
          />

          <Image
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={N8AI5}
            alt="/"
          />

          <Image
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={N8AI6}
            alt="/"
          />

          <Image
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={N8AI7}
            alt="/"
          />

          <Image
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={N8AI8}
            alt="/"
          />

          <a
            href="https://github.com/Karns11/N8AI-ChatBot"
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
                <RiRadioButtonFill className="pr-1" /> Django
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> OpenAI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default property;
