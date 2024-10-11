"use client";
import { useState } from "react";
import { Card } from "../../components/ui/card";
import { threads } from "./threads";

export default function DiscussionPage() {

    const [thread, setThread] = useState<number>(-1);

    return (
        <div className="w-full flex h-[calc(100vh-64px)]">
            <div className="w-1/5 overflow-y-auto">
                {threads.map((thread) => (
                    <Card
                        className="h-20 rounded-none p-3"
                        onClick={() => setThread(thread.id)}
                        key={thread.id}
                    >
                        {thread.title}
                    </Card>
                ))}
            </div>
            <div className="w-4/5 p-5 overflow-y-auto">
                {thread === -1 ? (
                    "You have not selected any thread yet."
                ) : (
                    <div className="space-y-5">
                        <h1 className="font-bold text-3xl">{threads[thread].title}</h1>
                        <img className="w-80" src={`${threads[thread].image}`} />
                        <div>{threads[thread].content}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
