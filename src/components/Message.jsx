import { FaRegFaceMehBlank } from "react-icons/fa6";
import { SiApifox } from "react-icons/si";
import ReactMarkdown from 'react-markdown';
import "../App.css";

const Message = ({ text, isBot }) => (
  <div
    className={`flex pt-2 px-4 py-2 mx-4 my-3 rounded-lg ${
      isBot
        ? "bg-transparent text-purple-600 self-start"
        : "bg-transparent text-pink-400 font-semibold self-end"
    }`}
  >
    <div className="mr-3 mt-2">
      {isBot ? (
        <SiApifox className="text-purple-500 text-lg" />
      ) : (
        <FaRegFaceMehBlank className="text-pink-500 text-lg" />
      )}
    </div>
    <div className="result">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  </div>
);

export default Message;
