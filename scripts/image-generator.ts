import fs from "fs";
import OpenAI from "openai";
import { env } from "process";

export const generateImage = async (campaign: string) => {
    const openai = new OpenAI({apiKey: process.env.OPEN_AI_KEY}); // Define openai as an instance of OpenAI class
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt:  campaign ,
        n: 1,
        size: "1024x1024",
    });
    const image_url = response.data[0]?.url; // Declare image_url before assigning a value and use a type assertion to ensure it's not undefined
    console.log(image_url);
    return image_url? image_url  : "https://www.placekitten.com/1024/1024"; // Return image_url if it's defined, otherwise return a placeholder image
};


