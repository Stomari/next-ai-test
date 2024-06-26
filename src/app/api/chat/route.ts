import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

export const openAiInstance = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
 
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await openAiInstance.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  })
 
  const stream = OpenAIStream(response)
 
  return new StreamingTextResponse(stream)
}