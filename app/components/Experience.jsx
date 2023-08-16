import React from "react";

const Experience = ({ darkMode }) => {
  return (
    <div id="experience" className={darkMode ? "w-full bg-black" : "w-full"}>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#379237]">
          Experience
        </p>
        <h2 className={darkMode ? "py-4 text-[#fff]" : "py-4"}>
          Where I've Been
        </h2>
        <div
          className={
            darkMode
              ? "grid md:grid-cols-2 gap-8 text-[#fff] pt-8"
              : "grid md:grid-cols-2 gap-8 pt-8"
          }
        >
          <div className="flex flex-col justify-center">
            <h3>Data Analyst</h3>
            <h5>August 2022 - Present</h5>
            <p>Spartan Analytics Consulting Group</p>
          </div>
          <div>
            <li className="mb-2">
              Implemented targeted strategies and initiatives based on market
              research analysis through data-driven decision-making, resulting
              in a 40% revenue increase.
            </li>
            <li className="mb-2">
              Reduced critical business costs for the client by 15% by
              conducting in-depth cost analysis, identifying inefficiencies, and
              implementing target cost-saving strategies.
            </li>
            <li className="mb-2">
              Utilized Python and R to develop forecasting models, leading to a
              90% accuracy in predicting monthly sales figures.
            </li>
            <li className="mb-2">
              Prepared and presented bi-weekly progress reports to the client,
              utilizing Tableau for tracking KPIs such as revenue growth,
              customer acquisition, and operational efficiency.
            </li>
            <p>
              <span className="font-bold">Skills Used:</span> R, Python,
              Tableau, Excel, SQL, Microsoft Office Suite
            </p>
          </div>
          <div className="flex md:hidden flex-col justify-center">
            <h3>Market Data Analytics Intern</h3>
            <h5>May 2022 - August 2022</h5>
            <p>McNaughton-McKay Electric Company</p>
          </div>
          <div>
            <li className="mb-2">
              Spearheaded the design and implementation of an analytic app using
              Alteryx, based off large amounts of pricing data, which automated
              the price checking process.v
            </li>
            <li className="mb-2">
              Increased pricing efficiency by 50% through continuous data
              analysis and process optimization using SQL and Alteryx.
            </li>
            <li className="mb-2">
              Conducted market research, coupled with data analysis and
              visualizations, resulting in a 20% growth in market share.
            </li>
            <li className="mb-2">
              Developed a new feature for the price check report application,
              enabling the sales team to access pricing data for kit-prods,
              which was previously not possible for the company.
            </li>
            <p>
              <span className="font-bold">Skills Used:</span> Alteryx, SQL,
              Excel, Power BI, Tableau, Python, Microsoft Office Suite
            </p>
          </div>
          <div className="hidden md:flex flex-col justify-center items-end">
            <h3>Market Data Analytics Intern</h3>
            <h5>May 2022 - August 2022</h5>
            <p>McNaughton-McKay Electric Company</p>
          </div>
          <div className="flex flex-col justify-center">
            <h3>Leadership Development Intern</h3>
            <h5>February 2022 - May 2022</h5>
            <p>Ripplematch</p>
          </div>
          <div>
            <li className="mb-2">
              Increased user base on campus by 14% through using diverse
              strategies like social media marketing, email marketing,
              presentations, and networking.
            </li>
            <li className="mb-2">
              Developed dashboards using Tableau to track KPIs such as click
              through rates, customer acquisition costs, and customer retention.
            </li>
            <li className="mb-2">
              Collaboratively utilized strategic analysis to identify and
              implement innovative growth strategies.
            </li>
            <p>
              <span className="font-bold">Skills Used:</span> Excel, Tableau,
              Digital Marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
