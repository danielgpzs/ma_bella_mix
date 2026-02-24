export interface Review {
  id: string;
  productId: string;
  customerName: string;
  customerImage: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: "review-1",
    productId: "serum-vitamina-c",
    customerName: "Marina Silva",
    customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marina",
    rating: 5,
    title: "Transformou minha pele!",
    text: "Uso há 3 meses e os resultados são incríveis. Minhas manchas clarearam bastante e a pele ficou muito mais radiante. Recomendo demais!",
    date: "2026-02-15",
    verified: true
  },
  {
    id: "review-2",
    productId: "serum-vitamina-c",
    customerName: "Juliana Costa",
    customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana",
    rating: 5,
    title: "Melhor sérum que já usei",
    text: "A textura é leve, absorve rápido e não deixa a pele oleosa. Notei melhora na luminosidade em apenas 2 semanas. Produto de qualidade premium!",
    date: "2026-02-10",
    verified: true
  },
  {
    id: "review-3",
    productId: "serum-vitamina-c",
    customerName: "Beatriz Santos",
    customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Beatriz",
    rating: 4,
    title: "Muito bom, mas caro",
    text: "Funciona muito bem mesmo, deixa a pele brilhante e hidratada. O preço é um pouco alto, mas considerando a qualidade, vale a pena investir.",
    date: "2026-02-08",
    verified: true
  },
  {
    id: "review-4",
    productId: "serum-vitamina-c",
    customerName: "Fernanda Oliveira",
    customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fernanda",
    rating: 5,
    title: "Pele mais uniforme e clara",
    text: "Uso todas as manhãs e à noite. Minha pele ficou muito mais uniforme, as manchas estão desaparecendo e o brilho natural voltou!",
    date: "2026-02-05",
    verified: true
  },
  {
    id: "review-5",
    productId: "serum-vitamina-c",
    customerName: "Amanda Rocha",
    customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
    rating: 5,
    title: "Entrega rápida e produto perfeito",
    text: "Chegou em 2 dias, bem embalado. O sérum é exatamente como descrito. Já é minha segunda compra, com certeza vou comprar novamente!",
    date: "2026-02-01",
    verified: true
  },
  {
    id: "review-6",
    productId: "hidratante-rosa-nude",
    customerName: "Carolina Mendes",
    customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carolina",
    rating: 5,
    title: "Hidratação profunda",
    text: "Minha pele estava muito seca e este hidratante salvou. Absorve bem, não deixa resíduo e a pele fica macia o dia todo.",
    date: "2026-02-12",
    verified: true
  },
  {
    id: "review-7",
    productId: "hidratante-rosa-nude",
    customerName: "Sophia Alves",
    customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    rating: 4,
    title: "Ótimo custo benefício",
    text: "Produto de boa qualidade, rende bastante e a pele fica muito bem hidratada. Única coisa é que o frasco poderia ser um pouco maior.",
    date: "2026-02-03",
    verified: true
  },
  {
    id: "review-8",
    productId: "limpador-facial",
    customerName: "Isabela Gomes",
    customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabela",
    rating: 5,
    title: "Remove tudo sem agredir",
    text: "Limpa profundamente mas é muito suave. Não resseca a pele e deixa tudo bem limpinho. Uso todos os dias, manhã e noite.",
    date: "2026-02-14",
    verified: true
  },
  {
    id: "review-9",
    productId: "protetor-solar",
    customerName: "Leticia Ferreira",
    customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leticia",
    rating: 5,
    title: "Proteção total sem brancura",
    text: "Finalmente um protetor solar que não deixa aquele aspecto esbranquiçado. Protege bem, hidrata e a maquiagem fica perfeita por cima.",
    date: "2026-02-09",
    verified: true
  },
  {
    id: "review-10",
    productId: "protetor-solar",
    customerName: "Gabriela Teixeira",
    customerImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gabriela",
    rating: 5,
    title: "Melhor protetor solar da marca",
    text: "Uso diariamente há 2 meses. Não irrita, não arde os olhos e a pele fica protegida. Recomendo para todos que se preocupam com proteção solar.",
    date: "2026-02-07",
    verified: true
  }
];

export function getProductReviews(productId: string): Review[] {
  return reviews.filter(review => review.productId === productId);
}

export function getAverageRating(productId: string): number {
  const productReviews = getProductReviews(productId);
  if (productReviews.length === 0) return 0;
  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / productReviews.length) * 10) / 10;
}

export function getRatingDistribution(productId: string): Record<number, number> {
  const productReviews = getProductReviews(productId);
  const distribution: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  
  productReviews.forEach(review => {
    distribution[review.rating]++;
  });
  
  return distribution;
}
