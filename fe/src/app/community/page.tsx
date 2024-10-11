"use client";
import { useState } from "react";
import { Card } from "../../components/ui/card";
import { threads } from "./threads";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CommunityPage() {

    const [thread, setThread] = useState<number>(-1);

    return (
        <div className="w-full flex h-[calc(100vh-64px)]">
            <div className="w-1/5 overflow-y-auto">
                {threads.map((thread) => (
                    <Card
                        className="rounded-none p-3 cursor-pointer"
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
                        <Image src={`${threads[thread].image}`} width={480} height={640} objectFit="contain" alt="Plant image" />
                        <div>{threads[thread].content}</div>
                        
                        {/* <Separator className="my-4"/> */}
                        <h2 className="text-xl font-bold leading-loose mt-6 mb-4">Comments</h2>
                        <div className="flex space-x-2 items-center">
                            <Textarea placeholder="Join the green discussion!" />
                            <Button className="h-full">Submit</Button>
                        </div>
                        {threads[thread].comments.map((comment) => (
                            <>
                                <div className="space-y-2">
                                    <div className="font-bold">{comment.name}</div>
                                    <div>{comment.message}</div>
                                </div>
                                <Separator className="my-4"/>
                            </>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
