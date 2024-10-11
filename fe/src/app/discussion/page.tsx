"use client";
import { useState } from "react";
import { Card } from "../../components/ui/card";

export default function DiscussionPage() {
  const threads = [
    {
      id: 0,
      title: "Check out my new plant!",
      content:
        "Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image:
        "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Check out my new plant!",
      content:
        "2edwqCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 2,
      title: "Check out my new plant!",
      content:
        "sdrvfeerCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 3,
      title: "Check out my new plant!",
      content:
        "wefrCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 1,
      title: "Check out my new plant!",
      content:
        "2edwqCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 2,
      title: "Check out my new plant!",
      content:
        "sdrvfeerCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 3,
      title: "Check out my new plant!",
      content:
        "wefrCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 1,
      title: "Check out my new plant!",
      content:
        "2edwqCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 2,
      title: "Check out my new plant!",
      content:
        "sdrvfeerCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 3,
      title: "Check out my new plant!",
      content:
        "wefrCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 1,
      title: "Check out my new plant!",
      content:
        "2edwqCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 2,
      title: "Check out my new plant!",
      content:
        "sdrvfeerCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
    {
      id: 3,
      title: "Check out my new plant!",
      content:
        "wefrCheck out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!Check out my new plant!",
      image: "..",
    },
  ];

  const [thread, setThread] = useState<number>(-1);

  return (
    <div className="w-full flex h-screen overflow-y-auto">
      <div className="w-1/5">
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
      <div className="w-4/5 p-5">
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
