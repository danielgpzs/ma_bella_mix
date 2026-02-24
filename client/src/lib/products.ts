/* MA BELLA MIX - Catálogo de Produtos */

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  benefits: string[];
  usage: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "serum-vitamina-c",
    name: "Sérum Vitamina C",
    category: "Séruns",
    price: 129.90,
    originalPrice: 159.90,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/HdSri6v1XJeMqIKpb7beha/sandbox/FZwbug7WjSoSUwDakav74X-img-2_1771948670000_na1fn_cHJvZHVjdC1zZXJ1bQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSGRTcmk2djFYSmVNcUlLcGI3YmVoYS9zYW5kYm94L0Zad2J1ZzdXalNvU1V3RGFrYXY3NFgtaW1nLTJfMTc3MTk0ODY3MDAwMF9uYTFmbl9jSEp2WkhWamRDMXpaWEoxYlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cKKcKO8gcVeJXhMazlBwmx4q4MxGKcKlrrLaHY998S8vpW0AywHGfq4aRZmkqE0jdlK3X6LJPUEKImiWq7KIaI5NMYABTMjVLGHHLAFOUZaBX702UC71oqpSRuWKDQEL07kZop~-AZILbxMj~kO7WjwL-jfX7a4MUoKSB9H6JqhJlj-2AarC3G3WXl93JEc2TM9L986NhPbpjPCsGXXzmOLXYNWYkTUVgZv5NlgJxcwulVOxv1VIGeUgasNmvWu3knl9fzOmX09kgh64ZLdctK4FxxNfdM~HDR7MBjCrvWPFoBKLoEiE2yQik3nl-mYsDjLZjSju2TpwP1limxzJJw__",
    description: "Sérum concentrado com Vitamina C pura que ilumina e revitaliza a pele. Fórmula leve com rápida absorção.",
    benefits: [
      "Ilumina a pele",
      "Reduz manchas e sardas",
      "Combate sinais da idade",
      "Textura leve e rápida absorção"
    ],
    usage: "Aplicar 3 gotas no rosto limpo pela manhã. Seguir com hidratante e protetor solar.",
    rating: 4.8,
    reviews: 234
  },
  {
    id: "hidratante-rosa",
    name: "Hidratante Rosa Nude",
    category: "Hidratantes",
    price: 99.90,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/HdSri6v1XJeMqIKpb7beha/sandbox/FZwbug7WjSoSUwDakav74X-img-3_1771948681000_na1fn_cHJvZHVjdC1tb2lzdHVyaXplcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSGRTcmk2djFYSmVNcUlLcGI3YmVoYS9zYW5kYm94L0Zad2J1ZzdXalNvU1V3RGFrYXY3NFgtaW1nLTNfMTc3MTk0ODY4MTAwMF9uYTFmbl9jSEp2WkhWamRDMXRiMmx6ZEhWeWFYcGxjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hcsSTw1hDVnNsQlv0dUDnDTMCDmYRra3v5ob1TOsK6LgOMBFYgjCWeDdYSMIW0jgpQJztr~umRMMVJJZQCEYjmZ5NUWXb5eqExvR6NdwwZVguRdOCydv~xP37WD2-kzns4AJz8a6-LRvjKKccyZ8nP3R-aO6yiuotqgXvbnLszrpkRQy5sI7BF1t6ZLA561NNwgPmypygz~rapPLs5P0uEM9hWItLkgzBshUzZtqQVPq29H2UoSBOCdZdXbT~nPj8dA6K7OkH0rdpwgfDtjiiJ8fMRqdmfDdxi1Uoa0rdSx~f9URA60YXjHQMNUvqf3rVCOIGqPUPl4Hj-0tzS3O3g__",
    description: "Creme hidratante rico em ativos naturais. Proporciona hidratação profunda e duradoura.",
    benefits: [
      "Hidratação profunda",
      "Nutre a pele",
      "Reduz ressecamento",
      "Textura macia e confortável"
    ],
    usage: "Aplicar na pele limpa, manhã e noite. Massagear suavemente até absorção completa.",
    rating: 4.9,
    reviews: 189
  },
  {
    id: "limpador-suave",
    name: "Limpador Facial Suave",
    category: "Limpeza facial",
    price: 59.90,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/HdSri6v1XJeMqIKpb7beha/sandbox/FZwbug7WjSoSUwDakav74X-img-1_1771948680000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSGRTcmk2djFYSmVNcUlLcGI3YmVoYS9zYW5kYm94L0Zad2J1ZzdXalNvU1V3RGFrYXY3NFgtaW1nLTFfMTc3MTk0ODY4MDAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Xt6UomGdmxbOVi~QJqZXUxYIHzURbMOyyG839gaGiRQY346ZE4AYcOBBe9IrFKgntxJmL-WQ0YHX-4Qqjn4iqv7kCLJW2BKOz8ID-DLZ6CCChO~eBEwG8cnuY44rBvuG8Z0GHwU-KzwtRDFtyD-bqJpgF441pEnyi-vOiYeSfKte7XzdSVTO7kb4SXnK7XmvM3quQSvfkYLUgaV8SFepmRkC2~KAQWTOWKMVyPg1H4G9rUhZksEJfd-ovDIip49aUUsHNH~mVINqGy8D86cZrx3htNmV86trJqqouJIWNrOqFkXnB1QPdVxXdBQtcUetfVCEmVUk7gro5Rm2MMNvaQ__",
    description: "Limpador facial suave que remove impurezas sem ressecar a pele. Fórmula delicada.",
    benefits: [
      "Remove impurezas",
      "Não resseca",
      "Mantém pH natural",
      "Apto para todos os tipos de pele"
    ],
    usage: "Aplicar na pele úmida, massagear suavemente e enxaguar com água morna.",
    rating: 4.7,
    reviews: 156
  },
  {
    id: "protetor-solar",
    name: "Protetor Solar FPS 50",
    category: "Protetor solar",
    price: 79.90,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/HdSri6v1XJeMqIKpb7beha/sandbox/FZwbug7WjSoSUwDakav74X-img-4_1771948681000_na1fn_Y2F0ZWdvcnktaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSGRTcmk2djFYSmVNcUlLcGI3YmVoYS9zYW5kYm94L0Zad2J1ZzdXalNvU1V3RGFrYXY3NFgtaW1nLTRfMTc3MTk0ODY4MTAwMF9uYTFmbl9ZMkYwWldkdmNua3RhR1Z5YncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FIwgTWdwOuo33uQDPAYHvKcVyEeklNJWuabtn8LzCQkkcyOxGBISxYHKwEkIAy5zYTJpiPQEQOWR1BvAzAa379srVv4nBte9msvTO-guZCzsrFfy9Hd-coqOi0dVzurRCC~7Zt4rjJCno0feWC9ni9d~A8WfCeZLdHjRD-JxgKQ~RaFc6SHGsN8Zwvy43lDwYmOm--4mgZ29ulblcbfG1PuNc9Q3KF1LhZRJRU5NXbxYdNALYYjZZPktQssk8ksdnV~4-ZUwvHYe6nhXdLo3AcjpqmU14czqLb3EO69Oz8EoJ41XgYAVvu-JzixZW4gn7JkHNTnVx0vBAdoUaRA8kA__",
    description: "Protetor solar de amplo espectro com FPS 50. Protege contra UVA e UVB.",
    benefits: [
      "Proteção FPS 50",
      "Amplo espectro",
      "Não deixa resíduos",
      "Resistente à água"
    ],
    usage: "Aplicar generosamente no rosto 15 minutos antes da exposição solar. Reaplicar a cada 2 horas.",
    rating: 4.6,
    reviews: 201
  },
  {
    id: "kit-promocional",
    name: "Kit Rotina Completa",
    category: "Kits promocionais",
    price: 299.90,
    originalPrice: 369.60,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/HdSri6v1XJeMqIKpb7beha/sandbox/FZwbug7WjSoSUwDakav74X-img-2_1771948670000_na1fn_cHJvZHVjdC1zZXJ1bQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSGRTcmk2djFYSmVNcUlLcGI3YmVoYS9zYW5kYm94L0Zad2J1ZzdXalNvU1V3RGFrYXY3NFgtaW1nLTJfMTc3MTk0ODY3MDAwMF9uYTFmbl9jSEp2WkhWamRDMXpaWEoxYlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cKKcKO8gcVeJXhMazlBwmx4q4MxGKcKlrrLaHY998S8vpW0AywHGfq4aRZmkqE0jdlK3X6LJPUEKImiWq7KIaI5NMYABTMjVLGHHLAFOUZaBX702UC71oqpSRuWKDQEL07kZop~-AZILbxMj~kO7WjwL-jfX7a4MUoKSB9H6JqhJlj-2AarC3G3WXl93JEc2TM9L986NhPbpjPCsGXXzmOLXYNWYkTUVgZv5NlgJxcwulVOxv1VIGeUgasNmvWu3knl9fzOmX09kgh64ZLdctK4FxxNfdM~HDR7MBjCrvWPFoBKLoEiE2yQik3nl-mYsDjLZjSju2TpwP1limxzJJw__",
    description: "Kit completo com todos os essenciais para uma rotina de skincare profissional.",
    benefits: [
      "4 produtos essenciais",
      "Economia de 19%",
      "Rotina completa",
      "Ideal para iniciantes"
    ],
    usage: "Seguir a sequência: Limpador → Sérum → Hidratante → Protetor Solar.",
    rating: 4.9,
    reviews: 412
  }
];

export const categories = [
  { id: "limpeza-facial", name: "Limpeza facial", icon: "🧼" },
  { id: "seruns", name: "Séruns", icon: "💧" },
  { id: "hidratantes", name: "Hidratantes", icon: "🧴" },
  { id: "protetor-solar", name: "Protetor solar", icon: "☀️" },
  { id: "kits-promocionais", name: "Kits promocionais", icon: "🎁" }
];
