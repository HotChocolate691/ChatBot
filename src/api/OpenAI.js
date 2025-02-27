import axios from "axios";

const API_KEY = "AIzaSyC3KjI8EXR0S152ocFcD0ffskNED5SJmEE";

export const getResponse = async (userMessage) => {
  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: userMessage }] }],
      }
    );

    let ans = res.data.candidates?.[0]?.content?.parts?.[0]?.text;

    console.log(ans)
    return ans || "No response";

  } catch (error) {
    console.error("API Error:", error);
    return "Sorry, something went wrong. Please try again.";
  }
};
