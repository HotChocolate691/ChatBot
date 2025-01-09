import axios from "axios";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=GEMINI_API_KEY";
const API_KEY = "AIzaSyC3KjI8EXR0S152ocFcD0ffskNED5SJmEE";

export const getResponse = async (userMessage) => {
  
  try {
    console.log("Sending request with prompt:", userMessage);

    const res = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      method: "POST",
      data: {
        contents: [{ parts: [{ text: userMessage }] }],
      },
    });
    return res.data.candidates[0].content.parts[0].text;

  } catch (error) {
    if (error.response) {
      console.error("Error Response:", error.response.data);
    } else if (error.request) {
      console.error("No Response Received:", error.request);
    } else {
      console.error("Error Message:", error.message);
    }
    return "Sorry, something went wrong. Please try again.";
  }
};
