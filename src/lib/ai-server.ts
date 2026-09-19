import { createServerFn } from "@tanstack/react-start";
import { getSmartAnswer, PORTFOLIO_KNOWLEDGE_BASE } from "./ai-knowledge";

const PORTFOLIO_SYSTEM_PROMPT = `
You are the official AI Assistant for Manikandan K's portfolio website.

MANIKANDAN K'S COMPLETE KNOWLEDGE CONTEXT:
${JSON.stringify(PORTFOLIO_KNOWLEDGE_BASE, null, 2)}

ADDITIONAL DETAILS:
- Manikandan K is an aspiring Generative AI Engineer building intelligent applications.
- Pursuing B.Tech in Information Technology at Mount Zion College of Engineering and Technology (2024-2028).
- Located in Sivaganga / Tamil Nadu, India.
- Email: manidvkit@gmail.com | GitHub: https://github.com/Manikandan-K006 | LinkedIn: https://www.linkedin.com/in/manikandan-k-0162062b1
- Active NCC Cadet (leadership, teamwork) and Open Source Contributor.

INSTRUCTIONS:
- Answer user questions clearly, accurately, and professionally.
- Match Manikandan's tone: enthusiastic, precise, and tech-savvy.
- If asked about contact info, provide email and socials.
- Keep answers concise and well-formatted with bullet points where appropriate.
`;

export const askAiServerFn = createServerFn({ method: "POST" })
  .validator((data: { question: string }) => data)
  .handler(async ({ data }) => {
    const question = data.question?.trim();
    if (!question) {
      return { answer: getSmartAnswer("") };
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return { answer: getSmartAnswer(question) };
    }

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
          messages: [
            { role: "system", content: PORTFOLIO_SYSTEM_PROMPT },
            { role: "user", content: question },
          ],
          max_tokens: 500,
          temperature: 0.2,
        }),
      });

      if (!response.ok) {
        return { answer: getSmartAnswer(question) };
      }

      const payload = await response.json();
      const botAnswer = payload.choices?.[0]?.message?.content?.trim();
      return { answer: botAnswer || getSmartAnswer(question) };
    } catch (err) {
      console.error("AI Server Fn error:", err);
      return { answer: getSmartAnswer(question) };
    }
  });
