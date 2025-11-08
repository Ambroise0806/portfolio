"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "./ui/badge";

import cinema from "../../public/projets/cinema.png";
import meetic from "../../public/projets/meetic.png";
import myh5ai from "../../public/projets/myh5ai.png";
import puissance4 from "../../public/projets/puissance4_2.png";
import responsive from "../../public/projets/responsive.png";
import twitter from "../../public/projets/twitter.png";
import gameImg from "../../public/projets/gameImg.png";
import chessBetImg from "../../public/projets/chessBetImg.png";
import skribbl from "../../public/projets/skribbl.png";

type CompetenceId = "FRONT" | "BACK" | "BDD" | "UI_UX" | "GESTION";

const COMPETENCE_LABELS: Record<CompetenceId, string> = {
  FRONT: "Front",
  BACK: "Back",
  BDD: "BDD",
  UI_UX: "UI/UX",
  GESTION: "Gestion",
};

type Project = {
  title: string;
  slug: string;
  img: StaticImageData;
  description: string;
  techs: string[];
  competencies: CompetenceId[];
};

const projets: Project[] = [
  {
    title: "ChessBet",
    slug: "chess-bet",
    img: chessBetImg,
    description:
      "Plateforme de paris en ligne sur des parties d’échecs, développée avec Next.js et Prisma. Gestion des utilisateurs, des mises et des résultats en temps réel grâce à Pusher. Intégration d’une base de données PostgreSQL sur Neon et d’une logique métier complète pour la validation et le suivi des paris.",
    techs: ["Next.js", "Pusher", "Prisma", "Neon"],
    competencies: ["FRONT", "BACK", "BDD"],
  },
  {
    title: "skribbl.io",
    slug: "skribbl.io",
    img: skribbl,
    description:
      "Jeu en ligne multijoueur de dessin et de devinettes, développé avec Go et React. Comprend un système de salles, de gestion des utilisateurs et de chat en temps réel.",
    techs: ["Go", "React"],
    competencies: ["FRONT", "GESTION", "BACK"],
  },
  {
    title: "SpaceShooter",
    slug: "space-shooter",
    img: gameImg,
    description:
      "Jeu d'arcade spatial créé avec Phaser : gestion dynamique des vagues ennemies, mécaniques de collisions, power-ups et progression de difficulté. Inclut système de scoring, vies multiples et optimisation du rendu Canvas pour des performances fluides.",
    techs: ["Phaser", "JavaScript", "Canvas API"],
    competencies: ["FRONT", "GESTION"],
  },
  {
    title: "Clone Cinéma",
    slug: "clone-cinema",
    img: cinema,
    description:
      "Application web de réservation de films inspirée des sites de cinéma : gestion des comptes, réservations, avis et recherche dynamique. Développement full-stack avec PHP/MySQL, accent mis sur la sécurité, la propreté du code et la performance des requêtes SQL.",
    techs: ["PHP", "MySQL", "HTML", "CSS", "JS"],
    competencies: ["BACK", "BDD", "GESTION"],
  },
  {
    title: "Clone Meetic",
    slug: "clone-meetic",
    img: meetic,
    description:
      "Site de rencontres développé en PHP/MySQL avec système d’inscription, profils, recherche multi-critères et messagerie en temps réel. Focus sur la sécurité des échanges, l’authentification et l’expérience utilisateur.",
    techs: ["PHP", "MySQL"],
    competencies: ["BACK", "BDD", "FRONT", "GESTION"],
  },
  {
    title: "myH5AI",
    slug: "myh5ai",
    img: myh5ai,
    description:
      "Explorateur de fichiers serveur inspiré de h5ai : affichage arborescent des répertoires, prévisualisation et recherche instantanée. Interface en PHP/JS conçue pour offrir une navigation fluide et ergonomique.",
    techs: ["PHP", "JS", "HTML/CSS"],
    competencies: ["BACK", "FRONT", "GESTION"],
  },
  {
    title: "Puissance 4",
    slug: "puissance-4",
    img: puissance4,
    description:
      "Reproduction du célèbre jeu Puissance 4 en JavaScript ES6 : logique de placement, détection de victoire, alternance des tours et architecture modulaire en classes.",
    techs: ["JavaScript ES6", "HTML/CSS"],
    competencies: ["FRONT"],
  },
  {
    title: "Site Responsive",
    slug: "site-responsive",
    img: responsive,
    description:
      "Site vitrine moderne et entièrement responsive : structure en CSS Grid et Flexbox, optimisation SEO et accessibilité (A11y). Adapté à tous les formats d’écran.",
    techs: ["HTML", "CSS", "Grid/Flex"],
    competencies: ["UI_UX", "FRONT"],
  },
  {
    title: "Mini Twitter",
    slug: "mini-twitter",
    img: twitter,
    description:
      "Mini réseau social inspiré de Twitter : publication, affichage dynamique de la timeline et gestion des utilisateurs. Projet axé sur la logique applicative, la structuration du code et la clarté de l’interface.",
    techs: ["JS", "HTML/CSS", "PHP"],
    competencies: ["FRONT", "GESTION", "BACK"],
  },
];

type Filter = "ALL" | CompetenceId;
const FILTERS: Array<{ id: Filter; label: string }> = [
  { id: "ALL", label: "Toutes" },
  ...Object.entries(COMPETENCE_LABELS).map(([id, label]) => ({
    id: id as CompetenceId,
    label,
  })),
];

export default function Projets() {
  const [filter, setFilter] = useState<Filter>("ALL");

  const filtered =
    filter === "ALL"
      ? projets
      : projets.filter((p) => p.competencies.includes(filter));

  return (
    <div className="bg-gray-50">
      <section
        id="projets"
        className="max-w-5xl mx-auto py-12 px-4 scroll-mt-17"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Mes projets</h1>
        </div>

        <div className="flex flex-wrap gap-5 justify-center mb-5">
          {FILTERS.map(({ id, label }) => (
            <Badge
              key={id}
              onClick={() => setFilter(id)}
              className={`cursor-pointer h-10 w-30 ${
                filter === id ? "ring-2 ring-offset-2" : ""
              }`}
              variant={id === "ALL" ? undefined : "outline"}
            >
              {label}
            </Badge>
          ))}
        </div>

        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-xxl mx-auto"
        >
          <CarouselPrevious
            className="cursor-pointer"
            variant="outline"
            size="icon"
          />
          <CarouselContent>
            {filtered.map((proj) => (
              <CarouselItem
                key={proj.slug}
                className="md:basis-1/2 lg:basis-1/2 cursor-pointer"
              >
                <div className="p-7 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-semibold text-center mb-5">
                        {proj.title}
                      </h2>

                      <Image
                        src={proj.img}
                        alt={proj.title}
                        width={800}
                        height={480}
                        className="w-full h-64 object-contain"
                        placeholder="blur"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 548px"
                        quality={85}
                        loading="lazy"
                      />
                      <p className="text-base text-muted-foreground mt-2">
                        {proj.description}
                      </p>
                    </CardContent>

                    <CardContent className="flex flex-col gap-3 mt-2">
                      <div className="flex flex-wrap gap-2">
                        {proj.techs.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {proj.competencies.map((c) => (
                          <Badge key={c} variant="secondary">
                            {COMPETENCE_LABELS[c]}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext
            className="cursor-pointer"
            variant="outline"
            size="icon"
          />
        </Carousel>
      </section>
    </div>
  );
}
