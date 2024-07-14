import { OPEN_AI_KEY, OPENAI_KEY } from "./constant";

const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
