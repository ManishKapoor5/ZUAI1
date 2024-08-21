import React from "react";
import ZuAI from "../assets/ZuAI.png";
import beta from "../assets/beta.png";
import dashboard from "../assets/dashboard.png";
import book from "../assets/book_4.png";
import FileCopy from "../assets/file_copy.png";
import quiz from "../assets/quiz.png";
import teen1 from "../assets/teen1.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col fixed justify-between py-3 h-[96vh] mx-3 my-3 rounded-3xl w-16 border border-red-800 bg-white">
        <div>
      <div className="h-1 px-3 py-6 mb-10">
        <div className="w-10 border border-red-800">
          <img src={ZuAI} width={80} alt="logo" />
        </div>
        <div className="w-10 flex justify-end">
          <img src={beta} height={10} alt="sub-logo" />
        </div>
      </div>
      <div className="justify-around">
        <div className="bg-indigo-800 mx-3 h-10 w-10 p-3 rounded-3xl">
          <img src={dashboard} color="white" alt="dashboard" />
        </div>
        <div className="mx-5 my-3">
          <img src={book} alt="book icon" />
        </div>
        <div className="mx-5 my-3">
          <img src={FileCopy} alt="File Copy" />
        </div>
        <div className="mx-5 my-3">
          <img src={quiz} alt="Quiz" />
        </div>
      </div>
      </div>
      <div className="px-4">
        <img src={teen1} alt="Teen Picture" />
      </div>
    </div>
  );
};

export default Sidebar;
