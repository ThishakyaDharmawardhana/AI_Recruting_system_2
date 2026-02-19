import { NextResponse } from "next/server";
import OpenAI from "openai"

const QUESTION_PROMPT = `Generate interview questions for a {{jobTitle}} position.
Job Description: {{jobDescription}}
Interview Duration: {{duration}} minutes
Interview Type: {{type}}

Generate exactly {{questionCount}} interview questions based on {{duration}} minutes duration. For each question, specify which type it belongs to from the provided Interview Types.
Return as JSON with format: 
{
  "interviewQuestions": [
    {
      "question": "...",
      "type": "Technical" | "Behavioral" | "Experience" | "Problem Solving" | "Leadership" | "Confidence"
    }
  ]
}`

export async function POST(req) {   

    const{jobPosition, jobDescription, duration, type}=await req.json();
    const questionCount = Math.ceil(parseInt(duration) / 3);
    
    const FINAL_PROMT=QUESTION_PROMPT
    .replace('{{jobTitle}}', jobPosition)
    .replace('{{jobDescription}}', jobDescription)
    .replace('{{duration}}', duration)
    .replace('{{questionCount}}', questionCount)
    .replace('{{type}}', type)

    console.log(FINAL_PROMT);



    try{
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    })

    const completion = await openai.chat.completions.create({
         model: "mistralai/mixtral-8x7b-instruct",
         messages: [
            { role: "user", content: FINAL_PROMT }
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