import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Harry Potter",
    profile: "https://links.papareact.com/d0c",
    src: "https://links.papareact.com/d0c",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
          {stories.map(({ name, src, profile }) => (   
        <StoryCard key={src} name={name} src={src} profile={profile} />
      ))}
    </div>
  );
};

export default Stories;
