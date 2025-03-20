import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({data , reference}) => {
  return (
    <div >
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden  flex-shrink-0">
        <FaRegFileAlt />
        <p className="text-xs mt-5 font-sm leading-tight">{data.desc}</p>
        <div className=" footer absolute bottom-0   w-full   left-0 ">
          <div className="flex items-center py-3 justify-between px-8  mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-5 bg-zinc-600 rounded-full flex items-center justify-center ">
              {data.close ? (
                <IoCloseCircle />
              ) : (
                <MdOutlineFileDownload size=".7em" color="#000" />
              )}
            </span>
          </div>

          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 flex items-center justify-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
              <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Card