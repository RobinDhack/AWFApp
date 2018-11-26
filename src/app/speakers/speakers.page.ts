import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {

  speakers = [
    {
      image: "../../assets/icon/Aboukam-copie-360x360.jpg",
      name: "ABOU KAMAGATE",
      poste: "Consultant Stratégie Web et Digitale",
      description: "Consultant stratégie Web et digitale chez Appatam Solution Numerique de Souzang Groupe."
    },
    {
      image: "../../assets/icon/Pascal.jpg",
      name: "PASCAL BEAUCHESNE",
      poste: "Associé - Arche Innovation",
      description: "Pascal est un citoyen montréalais qui milite pour la place du piéton"
    },
    {
      image: "../../assets/icon/Abibe-Bamba-copie-360x360.jpg",
      name: "HABIB BAMBA",
      poste: "Directeur de la Transformation, du Digital et des Médias Orange Côte d’Ivoire",
      description: "Habib Bamba est Directeur de la Transformation, du Digital et des Médias"
    },
    {
      image: "../../assets/icon/Mehdi-CHAHI-1.png",
      name: "MEHDI CHAHI",
      poste: "Marketing Research Consultant & Digital Strategist",
      description: "Mehdi CHAHI est un Marketing Research Consultant & Digital Strategist avec une"
    },
    {
      image: "../../assets/icon/joel.png",
      name: "JOËL AKAFOU",
      poste: "Auteur-Réalisateu",
      description: "Jeune auteur-réalisateur ivoirien, Joël est diplômé du Master 2 Professionnel Réalisation cinéma"
    },
    {
      image: "../../assets/icon/Tatiana-Yangoupandé-360x360.jpg",
      name: "TATIANA YANGOUPANDÉ",
      poste: "Spécialiste de programme, Direction de la Francophonie Economique et numérique (OIF)",
      description: "Tatiana Yangoupandé travaille au sein de la Direction de la Francophonie économique"
    },
    {
      image: "../../assets/icon/cressant.jpg",
      name: "JEAN CRESSANT",
      description: "L’expertise professionnelle de Jean Cressant a été consolidée au cours des différentes"
    },
    {
      image: "../../assets/icon/lili.jpg",
      name: "YOSRA LILI",
      poste: "Ingenieur en électronique",
      description: "Yosra Lili, 26 ans, entrepreneuse tunisienne et CEO & founder of OMNIDRONE"
    },
    {
      image: "../../assets/icon/samba.jpg",
      name: "SAMBA KONÉ",
      poste: "Journaliste",
      description: "Mr. Koné a une grande et longue expérience dans les domaines des"
    },
    {
      image: "../../assets/icon/moise.jpg",
      name: "MOÏSE MOUGNAN",
      poste: "Journaliste, écrivain et éditeur",
      description: "Journaliste, écrivain et éditeur, Moïse Mougnan, est un passionné de l’histoire et"
    },
    {
      image: "../../assets/icon/mamane.jpg",
      name: "MARIAMA MAMANE",
      poste: "Ingénieur en sciences environnementales",
      description: "Mariama Mamane est une jeune femme ingénieure en sciences environnementales dont le"
    },
    {
      image: "../../assets/icon/cathia.jpg",
      name: "CATHIA CARIOTTE",
      poste: "consultante en stratégie de développement et d’innovation",
      description: "Cathia Cariotte est consultante en stratégie de développement et d’innovation à l’international."
    },
  ]

  constructor() {
  }

  ngOnInit() {
  }

  

}
