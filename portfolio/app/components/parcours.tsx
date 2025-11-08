import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

import project1 from "../../public/imgCello.jpeg";
import project2 from "../../public/wac.png";
import project3 from "../../public/logo_brokoli.png";

const parcours = [
  {
    title: "Brokoli",
    description:
      "  Depuis septembre 2024, je fais partie de l’équipe de Brokoli, une marketplace qui centralise les offres d’assurance pour simplifier le quotidien des courtiers. J’y gère la mise en tarif des assureurs via API et participe à l’optimisation des outils internes grâce à des missions de back office. Cette expérience m’a permis d’approfondir mes compétences techniques sur Next.js, Prisma et Neon, tout en évoluant dans l’environnement dynamique d’une startup tech innovante. Je poursuis cette aventure avec eux à la fin de mon alternance, ce qui me permet de continuer à développer mes compétences et ma polyvalence sur des projets concrets.",
    img: project3,
    link: "https://brokoli.fr",
  },
  {
    title: "Web@cademie",
    description:
      "  Reconversion entamée en novembre 2023 après plusieurs années de pratique du violoncelle. J’ai intégré la Web@cademie by Epitech, une formation en développement web basée sur l’apprentissage par projet et la pratique intensive. Cette formation de 24 mois combine 10 mois à plein temps à l’école et 14 mois en alternance (3 semaines en entreprise, 1 semaine à l’école), me permettant de découvrir de nombreux langages et technologies web tout en développant des compétences concrètes sur des projets réels. Préparation d’un diplôme de niveau Bac +2, prévu pour novembre 2025.",
    img: project2,
    link: "https://www.webacademie.org/",
  },
  {
    title: "Violoncelle",
    description:
      " De 6 à 23 ans, j’ai étudié le violoncelle dans plusieurs conservatoires, dont le Conservatoire de Paris, suivant une formation complète en musique classique. J’ai participé à de nombreuses masterclasses et concours, joué en musique de chambre, en orchestre et en tant que soliste. Ces expériences m’ont permis de développer rigueur, persévérance, écoute attentive et travail en équipe, des qualités que je continue d’appliquer dans mon parcours professionnel en développement web.",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-7 text-center pb-14">
          MON PARCOURS
        </h1>

        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="max-w-xxl mx-auto py-5 px-4"
        >
          <CarouselContent className="-mt-1 h-[600px]">
            {parcours.map((item, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-full">
                <div className="p-1">
                  <Card className="h-[600px]">
                    <CardContent className="h-full flex flex-col">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          className="w-full h-80 object-cover rounded-md mb-4"
                          width={item.img.width}
                          height={item.img.height}
                        />
                      </a>
                      <h2 className="text-2xl font-semibold mb-2">
                        {item.title}
                      </h2>
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-lg text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
}
