import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

import project1 from "../../public/ambroise_violoncelle.png";
import project2 from "../../public/wac.png";
import project3 from "../../public/logo_brokoli.png";

const parcours = [
  {
    title: "Brokoli",
    description:
      "Depuis septembre 2024, je travaille chez Brokoli, une marketplace qui centralise les offres d’assurance pour simplifier la vie des courtiers. Je gère la mise en tarif des assureurs via API et participe à des missions de back office pour optimiser les outils internes. Cette expérience m’a permis d’approfondir mes compétences techniques au sein d’une startup tech innovante.",
    img: project3,
    link: "https://brokoli.fr",
  },
  {
    title: "Web@cademie",
    description:
      "Reconversion entamée en novembre 2023 à la Web@cademie by Epitech. Formation en développement web basée sur l’apprentissage par projet et la pratique intensive. Préparation d’un diplôme de niveau Bac +2, prévue pour novembre 2025.",
    img: project2,
    link: "https://www.webacademie.org/",
  },
  {
    title: "Violoncelle",
    description:
      "De 6 à 23 ans, j’ai étudié le violoncelle au Conservatoire de Paris. J’y ai suivi une formation complète en musique classique, participé à de nombreux concerts et concours, et joué au sein de plusieurs ensembles et orchestres. Cette expérience m’a appris la rigueur, la persévérance et le travail en équipe.",
    img: project1,
  },
];

export default function Parcours() {
  return (
    <div id="experiences" className="bg-gray-50 pb-10 scroll-mt-17">
      <div className="max-w-4xl mx-auto py-8 items-center ">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-gray-700 to-gray-500 uppercase tracking-wide font-semibold mb-2 text-center pb-3">
          Les étapes clés de mon chemin professionnel
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center pb-14">
          MON PARCOURS
        </h1>

        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className=" max-w-xxl  mx-auto"
        >
          <CarouselContent className="-mt-1 h-[600px]">
            {parcours.map((item, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-full">
                <div className="p-1">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="h-[600px]">
                      <CardContent className="h-[200px]">
                        <Image
                          src={item.img}
                          alt={item.title}
                          className="w-full h-100 object-cover rounded-md mb-4"
                          width={item.img.width}
                          height={item.img.height}
                        />
                        <h2 className="text-2xl font-semibold mb-2">
                          {item.title}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
