'use client'

import { Message, Sender } from "@/types/message";
import ChatMessage from "./ChatMessage";
import ChatWidgetForm, { formSchema } from "./ChatWidgetForm";
import { z } from "zod";
import { useEffect, useRef } from "react";

type P = {
    messages: Message[];
    currMessage: Message;
    onSubmit: (values: string) => void;
    loading: boolean
}

export default function ChatBox(props: P) {

    const {messages, currMessage, onSubmit: sendMessage, loading: isGenerating } = props;
    const latestMessageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // auto-scroll for messages on sendMessage and another time when message is completed
        if (messages.length === 0) return;
        const lastMessage = messages[messages.length - 1];
        if (lastMessage.sender === Sender.USER || currMessage) {
            latestMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages])

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        sendMessage(values.text);
    }

    return (
        <div className='fixed bottom-14 right-4 flex flex-col w-4/5 h-3/4 border-2 border-slate-300 mb-4 '>
            <div className="flex flex-col space-y-2 py-2 min-h-[200px] h-full bg-gray-100 rounded overflow-y-auto overflow-x-hidden">
                {messages.map((message, index) => (
                    <ChatMessage 
                    key={index}
                    message={message} />
                ))}
                {/* Hide the currMessage if its text is null */}
                {currMessage.text ? <ChatMessage 
                    message={currMessage}/> : null}
                <div ref={latestMessageRef}></div> 
            </div>
            <ChatWidgetForm 
                messages={messages}
                isGenerating={isGenerating}
                onSubmit={onSubmit} />
        </div>
    )
}