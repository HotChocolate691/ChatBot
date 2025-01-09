import { FaRegFaceMehBlank } from "react-icons/fa6";
import { SiApifox } from "react-icons/si";

const Message = ({ text, isBot }) => (
  <div
    className={`flex pt-1 md:pt-2 mx-4 my-3 rounded-lg bg-gray-200 ${
      isBot
        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 self-start"
        : "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-semibold self-end"
    }`}
  >
    <div className="mr-3 mt-1">
      {isBot
        ? <SiApifox className="text-purple-500 text-lg" />
        : <FaRegFaceMehBlank className="text-pink-500 text-lg" /> }
    </div><span>{ text }</span>
    
  </div>
);

export default Message;
