// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const ProjectItem = ({
//   title,
//   backgroundImage,
//   projectUrl,
//   stack,
//   darkMode,
// }) => {
//   return (
//     <Link href={projectUrl}>
//       <div
//         style={{ height: "100%", width: "100%", objectFit: "cover" }}
//         className={
//           darkMode
//             ? "rounded-xl relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounde-xl p-4 group hover:bg-gradient-to-r from-[#379237] to-[#54B435] bg-[#fff]"
//             : "rounded-xl relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounde-xl p-4 group hover:bg-gradient-to-r from-[#379237] to-[#54B435]"
//         }
//       >
//         <Image
//           className="group-hover:opacity-10"
//           src={backgroundImage}
//           alt={title}
//           style={{ height: "75%", width: "95%", objectFit: "cover" }}
//         />
//         <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//           <h3 className="pb-4 text-2xl text-white tracking-wider text-center">
//             {title}
//           </h3>
//           <p className="pb-4 pt-2 text-white text-center">{stack}</p>
//           <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-large cursor-pointer">
//             More Info
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProjectItem;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImage,
  projectUrl,
  stack,
  darkMode,
}) => {
  return (
    <Link href={projectUrl}>
      <div
        className={`rounded-xl relative shadow-xl shadow-gray-400 p-4 group w-full 
          ${
            darkMode
              ? "hover:bg-gradient-to-r from-[#379237] to-[#54B435] bg-[#fff]"
              : "hover:bg-gradient-to-r from-[#379237] to-[#54B435]"
          }`}
      >
        {/* Image wrapper */}
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover group-hover:opacity-10 transition duration-300 ease-in-out"
            priority
          />
        </div>

        {/* Hover content */}
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="pb-4 text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{stack}</p>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
