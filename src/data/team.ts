export interface TeamMember {
  id: number;
  name: string;
  roleKey: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Leônidas Almeida",
    roleKey: "leonidas", 
    image: "/assets/team/Leônidas Almeida.png"
  },
  {
    id: 2,
    name: "Eduardo Assis",
    roleKey: "eduardo", 
    image: "/assets/team/Eduardo Serdeiro.jpeg" // Mantive o nome do arquivo original da pasta
  },
  {
    id: 3,
    name: "João Vitor Soliva",
    roleKey: "joao", 
    image: "/assets/team/João Vitor Soliva.jfif"
  },
  {
    id: 4,
    name: "Pedro Almeida",
    roleKey: "pedro", 
    image: "/assets/team/Pedro Almeida.jfif"
  },
  {
    id: 5,
    name: "Rodrigo Ravanini",
    roleKey: "rodrigo", 
    image: "/assets/team/Rodrigo Ravanini.png"
  }
];