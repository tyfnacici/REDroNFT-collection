import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const listeTitles = [
  "RedPunch Studios",
  "Pearl Dragon",
  "Goblin The Gourmand",
  "Agent Colby",
  "1Bit Skeleton",
  "Agent Benedict",
  "Fire Dragon",
  "1Bit Traveler",
  "Goblin The Gourmand",
  "Agent Jonas",
  "Redpunch Studios & Cuberium",
  "Obsidian Dragon",
  "Goblin King",
  "Cuberium",
  "Agent Soul",
  "Redpunch Studios",
  "1Bit Hunter",
  "Cuberium",
];

const nftList = [
  {
    name: "RedPunch Studios",
    image: "/images/0.png",
    text: "An indie game company.",
  },
  {
    name: "Pearl Dragon",
    image: "/images/1.png",
    text: "A Pearl Dragon",
  },
  {
    name: "Goblin The Gourmand",
    image: "/images/2.png",
    text: "A Gourmand Goblin",
  },
  {
    name: "Agent Colby",
    image: "/images/3.png",
    text: "An Agent",
  },
  {
    name: "1Bit Skeleton",
    image: "/images/4.png",
    text: "It's all 1 bit!",
  },
  {
    name: "Agent Benedict",
    image: "/images/5.png",
    text: "An Agent",
  },
  {
    name: "Fire Dragon",
    image: "/images/6.png",
    text: "A Fire Dragon",
  },
  {
    name: "1Bit Traveler",
    image: "/images/7.png",
    text: "It's all 1 bit!",
  },
  {
    name: "Goblin The Confused",
    image: "/images/8.png",
    text: "A Confused Goblin!",
  },
  {
    name: "Agent Jonas",
    image: "/images/9.png",
    text: "An Agent",
  },
  {
    name: "Redpunch Studios & Cuberium",
    image: "/images/10.png",
    text: "Collaboration Time!",
  },
  {
    name: "Obsidian Dragon",
    image: "/images/11.png",
    text: "An Obsidian Dragon",
  },
  {
    name: "Goblin King",
    image: "/images/12.png",
    text: "A true King!",
  },
  {
    name: "Cuberium",
    image: "/images/13.png",
    text: "A Mascot!",
  },
  {
    name: "Agent Soul",
    image: "/images/14.png",
    text: "An Agent",
  },
  {
    name: "Redpunch Studios",
    image: "/images/15.png",
    text: "A Mascot!",
  },
  {
    name: "1Bit Hunter",
    image: "/images/16.png",
    text: "It's all 1 bit!",
  },
  {
    name: "Cuberium",
    image: "/images/17.jpg",
    text: "#blockchain and #ai team within Siber Vatan.",
  },
];

const Gallery = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
  }, [embla, onSelect, onScroll]);

  return (
    <div className="text-white flex flex-wrap justify-center items-center align-middle mt-16 h-fit bg-gradient-to-br from-red-700 to-primary">
      {nftList.map((nft) => {
        return (
          <div className="flex flex-col py-6 px-4" key={nft}>
            <div className="rounded-lg shadow-lg flex h-96 md:h-80 flex-col  bg-white hover:bg-gray-300 border-2  border-white ">
              <img
                className="rounded-t-lg md:h-48 h-72"
                src={nft.image}
                alt=""
              />
              <div className="pt-4 px-3 md:w-48 ">
                <h5 className="text-gray-900 text-xl font-semibold mb-2">
                  {nft.name}
                </h5>
                <p className="text-black text-sm ">{nft.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
