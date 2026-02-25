"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const cards = [
  {
    title: "Make things float",
    description: "Hover over this card to unleash the power of CSS perspective",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "https://twitter.com/mannupaaji",
  },
  {
    title: "Depth & dimension",
    description: "Experience layered 3D interactions with smooth transitions",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop",
    link: "https://twitter.com/mannupaaji",
  },
  {
    title: "Perspective magic",
    description: "Bring your UI to life with dynamic 3D card effects",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2560&auto=format&fit=crop",
    link: "https://twitter.com/mannupaaji",
  },
  {
    title: "Float & interact",
    description: "Smooth perspective shifts on every hover interaction",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2560&auto=format&fit=crop",
    link: "https://twitter.com/mannupaaji",
  },
];

export default function ThreeDCardDemo() {
  return (
    <div className="grid grid-cols-2 gap-1">
      {cards.map((card, index) => (
        <CardContainer key={index} className="inter-var p-0">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-3 border">
            <CardItem
              translateZ="50"
              className="text-sm font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-xs max-w-sm mt-1 dark:text-neutral-300 line-clamp-2"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-2">
              <img
                src={card.image}
                height="1000"
                width="1000"
                className="h-28 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-6">
              <CardItem
                translateZ={20}
                as="a"
                href={card.link}
                target="__blank"
                className="px-2 py-1 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-2 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
