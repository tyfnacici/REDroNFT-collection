import React from "react";

export default function MyApp() {
  const faqList = [
    {
      title: "WHAT IS AN NFT?",
      text: 'NFT stands for "Non-fungible token," a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. While some NFT\'s function as digital art, they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects. Think of it as a unique piece of art that can also serve as a one-of-a-kind "members-only" card.',
    },
    {
      title: "How to i buy an NFT?",
      text: "You need a wallet! Download the metamask.io extension for the Chrome/Brave browser or app on mobile. Once joined, you will be able to kiss your frog after minting the NFT. FYI, there will be a fee associated with every transaction related to gas prices. Once you have made your purchase, the Frogz in your wallet will be viewable on OpenSea.",
    },
    {
      title: "How many NFTs can i buy at once?",
      text: "You can buy as many as you want with the limit of 3 per transaction.",
    },
  ];

  return (
    <div
      id="faq"
      className="flex flex-wrap space-x-5 justify-center items-center align-middle mt-16 h-fit"
    >
      {faqList.map((yazi) => {
        return (
          <div
            className="block p-6 max-w-xs h-96 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-300 "
            key={yazi}
          >
            <p className="mb-2 text-2xl font-bold  text-gray-900">
              {yazi.title}
            </p>
            <p className="font-normal text-gray-700 ">{yazi.text}</p>
          </div>
        );
      })}
    </div>
  );
}
