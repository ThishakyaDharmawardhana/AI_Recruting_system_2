import OpenAI from "openai";
import { NextResponse } from "next/server";
import { FEEDBACK_PROMPT } from "@/services/Constants";

export async function POST(req) {
    const{conversation}=await req.json();
    const FINAL_PROMPT=FEEDBACK_PROMPT.replace('{{conversation}}', JSON.stringify(conversation));

    try{
        const openai = new OpenAI({
          baseURL: "https://openrouter.ai/api/v1",
          apiKey: process.env.OPENROUTER_API_KEY,
        })
    
        const completion = await openai.chat.completions.create({
             model: "mistralai/mixtral-8x7b-instruct",
                 messages: [
                     { role: "user", content: FINAL_PROMPT }
                 ],
           
    
        })
        console.log(completion.choices[0].message)
        return NextResponse.json(completion.choices[0].message)
    
    }
    catch(e)
    {
        console.log("Error:", e);
        return NextResponse.json(
            { error: "Failed to generate questions", message: e.message },
            { status: 500 }
        )
    }

    
}