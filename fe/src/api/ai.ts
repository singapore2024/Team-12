import axios from "axios";
import { clientPost } from "./base";

export async function getPlantAdvice(){
    // const res = await clientPost("/get-plant-advice")
    // return res.data;
    return `I'd be happy to help you diagnose the issue and provide tips to help your plant recover.\n\nTo get started, could you please tell me:\n\n1. What type of plant is it?\n2. How long has it been dying?\n3. What are the symptoms you're observing (e.g. yellowing leaves, droopy stems, brown tips, etc.)?\n4. What is your plant's environment like (e.g. indoors, outdoors, amount of sunlight, temperature, watering schedule, etc.)?\n5. Have you made any recent changes to your plant's care (e.g. new potting mix, fertilizers, repotting, etc.)?\n\nThe more information you provide, the better I'll be able to assist you in figuring out what's going on and suggesting solutions.\n\nSome common causes of plant death that I can help you troubleshoot include:\n\n* Overwatering or underwatering`
}