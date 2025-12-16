import { ProjectImage } from './types';

// NOTE: In a real scenario with the specific images provided by the user, 
// we would upload them to a host and replace these URLs. 
// For this generated code, we use high-quality placeholders or the user's specific placeholders if available.
// Since the prompt provided images as attachments which I cannot directly link to as persistent URLs in code,
// I have set up the structure to easily accept the real URLs.

export const INSTAGRAM_URL = "https://www.instagram.com/willianrogerde?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
export const COMPANY_NAME = "Pergolife";
export const COMPANY_EMAIL = "contato@pergolife.com.br"; // Placeholder
export const COMPANY_PHONE = "(11) 99999-9999"; // Placeholder

export const PORTFOLIO_IMAGES: ProjectImage[] = [
  {
    id: 1,
    url: "https://picsum.photos/800/600?random=1", 
    title: "Área de Lazer com Deck e Piscina",
    category: "deck"
  },
  {
    id: 2,
    url: "https://picsum.photos/800/600?random=2",
    title: "Construção de Deck Panorâmico",
    category: "deck"
  },
  {
    id: 3,
    url: "https://picsum.photos/800/600?random=3",
    title: "Pergolado Moderno em Residência",
    category: "pergola"
  },
  {
    id: 4,
    url: "https://picsum.photos/800/600?random=4",
    title: "Detalhes de Acabamento em Madeira",
    category: "both"
  },
  {
    id: 5,
    url: "https://picsum.photos/800/600?random=5",
    title: "Garagem com Pergolado",
    category: "pergola"
  },
  {
    id: 6,
    url: "https://picsum.photos/800/600?random=6",
    title: "Estrutura de Madeira Maciça",
    category: "pergola"
  },
  {
    id: 7,
    url: "https://picsum.photos/800/600?random=7",
    title: "Fachada com Pergolado",
    category: "pergola"
  },
  {
    id: 8,
    url: "https://picsum.photos/800/600?random=8",
    title: "Piscina Integrada ao Deck",
    category: "deck"
  },
  {
    id: 9,
    url: "https://picsum.photos/800/600?random=9",
    title: "Spa Noturno com Deck",
    category: "both"
  }
];