import React from 'react'

const Experience = ({darkMode}) => {
  return (
    <div id="experience" className={darkMode ? "w-full bg-black" : "w-full"}>
        <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#379237]">
          Experience
        </p>
        <h2 className={darkMode ? "py-4 text-[#fff]" : "py-4"}>
          What I've Done
        </h2>
        <div className={darkMode ? "grid md:grid-cols-2 gap-8 text-[#fff] pt-8" : "grid md:grid-cols-2 gap-8 pt-8"}>
            <div className='flex flex-col justify-center'>
                <h3>Data Analyst</h3>
                <h5>September 2022 - May 2023</h5>
                <p>Spartan Analytics Consulting Group</p>
            </div>
            <div>
                    <li className='mb-2'>Demonstrated leadership and analytical skills as a selected member of the prestigious client engagement team.</li>
                    <li className='mb-2'>Conducted comprehensive data analysis encompassing trend identification, statistical modeling, and process improvement 
                        recommendations, empowering local businesses with valuable insights for informed decision-making and strategic growth.</li>
                    <li className='mb-2'>Significantly enhanced my data analysis skills through proficient utilization of Python, R, Excel, SQL, and Tableau, resulting in 
                        exceptional data-driven insights and actionable results.</li>
                    <li className='mb-2'>Exhibited exceptional communication skills through frequent and impactful client interactions, adeptly conveying insights and findings 
                        utilizing powerful data visualization tools like Tableau.</li>
                    <p><span className='font-bold'>Skills Used:</span> R, Python, Tableau, Excel, SQL, Microsoft Office Suite</p>
            </div>
            <div className='flex md:hidden flex-col justify-center'>
                <h3>Market Data Analytics Intern</h3>
                <h5>May 2022 - August 2022</h5>
                <p>McNaughton-McKay Electric Company</p>
            </div>
            <div>
                    <li className='mb-2'>Spearheaded the design and successful implementation of a cutting-edge application leveraging Alteryx, revolutionizing price checking processes 
                    through automation and streamlining operations for enhanced efficiency.</li>
                    <li className='mb-2'>Collaborated with Market Data Analytics team members to conduct market research and forecasting, conduct data analysis, and share proposals/results 
                    through a combination of data visualization reports and presentations.</li>
                    <li className='mb-2'>Mined, cleaned, and interpreted internal and external data sources using data analytics software’s like SQL and Alteryx to support business objectives.</li>
                    <li className='mb-2'>Assisted with ongoing collaboration between corporate marketing, regional sales and engineering teams and manufacturer partners.</li>
                    <p><span className='font-bold'>Skills Used:</span> Alteryx, SQL, Excel, Power BI, Tableau, Python, Microsoft Office Suite</p>
            </div>
            <div className='hidden md:flex flex-col justify-center items-end'>
                <h3>Market Data Analytics Intern</h3>
                <h5>May 2022 - August 2022</h5>
                <p>McNaughton-McKay Electric Company</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Experience
