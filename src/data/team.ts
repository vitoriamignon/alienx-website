export interface TeamMember {
    id: number;
    name: string;
    roleKey: string;
    image: string;
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Eduardo Serdeiro",
      roleKey: "founder", 
      image: "/assets/team/Eduardo Serdeiro.jpeg"
    },
    {
      id: 2,
      name: "Rodrigo Ravanini",
      roleKey: "leadDev", 
      image: "/assets/team/Rodrigo Ravanini.png"
    },
    {
      id: 3,
      name: "Leônidas Almeida",
      roleKey: "artist", 
      image: "/assets/team/Leônidas Almeida.png"
    },
    {
      id: 4,
      name: "Pedro Almeida",
      roleKey: "designer", 
      image: "/assets/team/Pedro Almeida.jfif"
    },
    {
      id: 5,
      name: "João Vitor Soliva",
      roleKey: "leadDev", 
      image: "/assets/team/João Vitor Soliva.jfif"
    }
  ];