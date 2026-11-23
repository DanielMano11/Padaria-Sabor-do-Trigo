import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5588992449472?text=Ol%C3%A1%2C%20Sabor%20do%20Trigo!%20Gostaria%20de%20fazer%20um%20pedido.";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Cel.+Francisco+Rem%C3%ADgio%2C+919%2C+Limoeiro+do+Norte+-+CE";

const photos = {
  hero: "https://images.unsplash.com/photo-1599819055803-717bba43890f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1600",
  bread:
    "https://images.unsplash.com/photo-1559811814-e2c57b5e69df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  cake: "https://images.unsplash.com/photo-1549413468-cd78edb7e75c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  savory:
    "https://images.unsplash.com/photo-1567042661848-7161ce446f85?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  coffee:
    "https://images.unsplash.com/photo-1586765501019-cbe3973ef8fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
};

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name:
    | "arrow"
    | "bag"
    | "clock"
    | "map"
    | "phone"
    | "star"
    | "wheat"
    | "menu"
    | "close"
    | "instagram";
  className?: string;
}) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    bag: (
      <>
        <path d="M6 8h12l1 12H5L6 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-4-1-1.5 2a13 13 0 0 1-8.5-8L9 7 8 3Z" />
    ),
    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),
    wheat: (
      <>
        <path d="M12 21V8" />
        <path d="M12 13c-3 0-5-2-5-5 3 0 5 2 5 5ZM12 8c0-3 2-5 5-5 0 3-2 5-5 5ZM12 18c3 0 5-2 5-5-3 0-5 2-5 5Z" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  };
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const products = [
  {
    name: "Pão Carioquinha",
    text: "Crocante por fora, macio por dentro e sempre quentinho.",
    image: photos.bread,
    tag: "O mais pedido",
  },
  {
    name: "Bolos da Casa",
    text: "Receitas afetivas, fofinhas e preparadas todos os dias.",
    image: photos.cake,
    tag: "Sabor de casa",
  },
  {
    name: "Salgados & Lanches",
    text: "Uma pausa gostosa, com recheio generoso e muito sabor.",
    image: photos.savory,
    tag: "Para toda hora",
  },
];

const reviews = [
  { text: "Tem muitas opções de bolos, pães, tapioca e salgados.", name: "Cliente Sabor do Trigo" },
  { text: "Pão quentinho e um bolo de nata muito gostoso.", name: "Avaliação no Google" },
  { text: "Padaria com bons produtos. Sempre tudo muito fresco.", name: "Cliente local" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F2E8] text-[#2A211B]">
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-12">
          <a href="#inicio" className="flex items-center gap-3 text-white" onClick={closeMenu}>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-white/10 backdrop-blur-sm">
              <Icon name="wheat" className="h-6 w-6" />
            </span>
            <span className="leading-none">
              <span className="font-display block text-xl font-semibold">Sabor do Trigo</span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] text-[#E9C88F]">
                Panificadora & Confeitaria
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-9 text-sm font-semibold text-white/90 lg:flex"
            aria-label="Navegação principal"
          >
            <a className="nav-link" href="#produtos">
              Produtos
            </a>
            <a className="nav-link" href="#sobre">
              Nossa história
            </a>
            <a className="nav-link" href="#avaliacoes">
              Avaliações
            </a>
            <a className="nav-link" href="#contato">
              Contato
            </a>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#F2B441] px-5 py-3 text-sm font-bold text-[#37230D] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#FFC85F] lg:flex"
          >
            <Icon name="bag" className="h-4 w-4" />
            Fazer pedido
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        {menuOpen && (
          <div className="mx-5 rounded-3xl bg-[#FFF9F0] p-6 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-1 font-semibold text-[#39291D]">
              {[
                ["Produtos", "#produtos"],
                ["Nossa história", "#sobre"],
                ["Avaliações", "#avaliacoes"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 hover:bg-[#F5E9D8]"
                >
                  {label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#C94C2C] px-5 py-3 text-white"
              >
                <Icon name="bag" className="h-4 w-4" /> Fazer pedido
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section
          id="inicio"
          className="relative min-h-[820px] overflow-hidden bg-[#39291D] lg:min-h-[780px]"
        >
          <img
            src={photos.hero}
            alt="Pães artesanais frescos da Sabor do Trigo"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(37,24,15,.95)_0%,rgba(48,31,20,.76)_44%,rgba(35,22,14,.2)_76%,rgba(27,17,11,.35)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#251810]/70 to-transparent" />

          <div className="relative mx-auto flex min-h-[820px] max-w-[1400px] items-center px-6 pb-24 pt-36 lg:min-h-[780px] lg:px-12 lg:pb-14 lg:pt-28">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#EBC886]/35 bg-[#EBC886]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F2D49F] backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#F2B441]" />
                +25 anos de tradição
              </div>
              <h1 className="font-display max-w-[800px] text-[3.7rem] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-7xl lg:text-[6.5rem]">
                O sabor que faz você <em className="font-normal text-[#F2B441]">voltar.</em>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/74 sm:text-lg">
                Pães quentinhos, bolos cheios de afeto e delícias feitas todos os dias para levar
                mais sabor à sua mesa.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-primary">
                  Peça pelo WhatsApp <Icon name="arrow" className="h-5 w-5" />
                </a>
                <a href="#produtos" className="button-ghost">
                  Conheça nossas delícias
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 hidden w-[48%] max-w-[670px] grid-cols-3 border-t border-l border-white/15 bg-[#281A12]/70 text-white backdrop-blur-md md:grid">
            <div className="border-r border-white/15 p-5 lg:p-7">
              <span className="mb-2 flex items-center gap-1 text-[#F2B441]">
                <Icon name="star" className="h-4 w-4 fill-current" /> <strong>4,5</strong>
              </span>
              <p className="text-xs text-white/60">130 avaliações</p>
            </div>
            <div className="border-r border-white/15 p-5 lg:p-7">
              <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                <Icon name="clock" className="h-4 w-4 text-[#F2B441]" /> A partir das 5h
              </span>
              <p className="text-xs text-white/60">Pão fresco cedo</p>
            </div>
            <div className="p-5 lg:p-7">
              <span className="mb-2 block text-sm font-bold text-[#F2B441]">R$ 20–40</span>
              <p className="text-xs text-white/60">Média por pessoa</p>
            </div>
          </div>
        </section>

        <section id="produtos" className="relative px-6 py-24 lg:px-12 lg:py-32">
          <div className="decorative-grain" />
          <div className="relative mx-auto max-w-[1320px]">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Feito hoje. Feito com carinho.</p>
                <h2 className="section-title mt-3">
                  Da nossa vitrine
                  <br />
                  para a sua mesa.
                </h2>
              </div>
              <p className="max-w-md text-[15px] leading-7 text-[#6D5B4E]">
                Ingredientes selecionados, receitas que atravessam gerações e aquele cheirinho que
                transforma qualquer momento do dia.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {products.map((product, index) => (
                <article
                  key={product.name}
                  className={`product-card group ${index === 1 ? "md:translate-y-10" : ""}`}
                >
                  <div className="relative h-[390px] overflow-hidden sm:h-[460px] md:h-[420px] lg:h-[500px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#20140D]/90 via-transparent to-black/5" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#FFF9EF]/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5B3924] backdrop-blur-sm">
                      {product.tag}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                      <h3 className="font-display text-3xl font-semibold">{product.name}</h3>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-white/70">
                        {product.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 flex justify-center md:mt-20">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b border-[#A83C24] pb-1 text-sm font-bold text-[#A83C24] transition hover:gap-4"
              >
                Ver cardápio e fazer pedido <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-[#BD4528] px-6 py-20 text-white lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
            <div className="relative">
              <div className="overflow-hidden rounded-t-[11rem]">
                <img
                  src={photos.coffee}
                  alt="Pães preparados artesanalmente"
                  className="h-[520px] w-full object-cover sm:h-[650px]"
                />
              </div>
              <div className="absolute -bottom-7 -right-3 grid h-32 w-32 rotate-6 place-items-center rounded-full border border-[#F4D6A2]/50 bg-[#F2B441] text-center text-[#462A18] shadow-xl sm:right-8 sm:h-40 sm:w-40">
                <div className="-rotate-6">
                  <strong className="font-display block text-4xl">25+</strong>
                  <span className="text-[10px] font-bold uppercase tracking-[.17em]">
                    anos com você
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:pr-12">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#F7D598]">
                Tradição em cada fornada
              </p>
              <h2 className="font-display mt-5 text-5xl font-semibold leading-[1.02] tracking-[-.035em] sm:text-6xl">
                Aqui, cada receita tem uma história.
              </h2>
              <p className="mt-7 text-base leading-8 text-white/75">
                Há mais de duas décadas, a Sabor do Trigo acorda cedo para fazer parte dos melhores
                momentos de Limoeiro do Norte. É o pão do café da manhã, o bolo da comemoração e o
                lanche que reúne a família.
              </p>
              <p className="mt-5 text-base leading-8 text-white/75">
                Nossa receita principal continua a mesma: ingredientes de qualidade, cuidado
                artesanal e o prazer de servir bem.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/20 pt-8">
                <div>
                  <strong className="font-display block text-3xl text-[#F6D18F]">Todo dia</strong>
                  <span className="mt-1 block text-xs text-white/60">produção fresquinha</span>
                </div>
                <div>
                  <strong className="font-display block text-3xl text-[#F6D18F]">+2 mil</strong>
                  <span className="mt-1 block text-xs text-white/60">seguidores no Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="bg-[#33251D] px-6 py-24 text-white lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-[#E7B65B]">Quem prova, recomenda</p>
                <h2 className="font-display mt-3 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-.035em] sm:text-6xl">
                  Tem gosto de casa.
                  <br />E nota 4,5 no Google.
                </h2>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <strong className="font-display text-4xl text-[#F2B441]">4,5</strong>
                <div>
                  <div className="flex gap-0.5 text-[#F2B441]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} name="star" className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="mt-1 block text-[11px] text-white/50">
                    130 avaliações no Google
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {reviews.map((review, index) => (
                <blockquote
                  key={review.text}
                  className="rounded-[2rem] border border-white/10 bg-white/[.045] p-7 transition hover:-translate-y-1 hover:bg-white/[.07] lg:p-9"
                >
                  <span className="font-display text-5xl leading-none text-[#D95332]">“</span>
                  <p className="font-display mt-3 min-h-28 text-2xl leading-snug text-[#FFF8ED]">
                    {review.text}
                  </p>
                  <footer className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs text-white/50">{review.name}</span>
                    <span className="flex gap-0.5 text-[#F2B441]">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Icon key={i} name="star" className="h-3 w-3 fill-current" />
                      ))}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-[#F8F2E8] px-6 py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[2.5rem] bg-[#F0B947] shadow-[0_30px_80px_rgba(76,47,24,.14)] lg:grid-cols-[1.1fr_.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#7A361F]">
                Venha nos visitar
              </p>
              <h2 className="font-display mt-4 text-5xl font-semibold leading-none tracking-[-.04em] text-[#39251A] sm:text-6xl">
                Seu dia merece esse sabor.
              </h2>
              <div className="mt-10 space-y-6">
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="contact-row">
                  <span className="contact-icon">
                    <Icon name="map" />
                  </span>
                  <span>
                    <strong>Av. Cel. Francisco Remígio, 919</strong>
                    <small>Centro, Limoeiro do Norte — CE</small>
                  </span>
                </a>
                <a href="tel:+558834233236" className="contact-row">
                  <span className="contact-icon">
                    <Icon name="phone" />
                  </span>
                  <span>
                    <strong>(88) 3423-3236</strong>
                    <small>Ligue e faça sua encomenda</small>
                  </span>
                </a>
                <div className="contact-row">
                  <span className="contact-icon">
                    <Icon name="clock" />
                  </span>
                  <span>
                    <strong>Aberto a partir das 05:00</strong>
                    <small>Consulte o horário em feriados</small>
                  </span>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#3A261B] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  Como chegar
                </a>
                <a
                  href="https://www.instagram.com/padaria_sabor_do_trigo_/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[#744124]/30 px-6 py-3.5 text-sm font-bold text-[#4A2D1C] transition hover:bg-white/20"
                >
                  <Icon name="instagram" className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>
            <div className="relative min-h-[390px] bg-[#C94C2C] p-7 sm:p-10 lg:min-h-full">
              <div className="absolute inset-0 opacity-15 bread-pattern" />
              <div className="relative flex h-full flex-col justify-between rounded-[1.8rem] border border-white/20 bg-[#A93E25]/65 p-7 text-white backdrop-blur-sm sm:p-10">
                <div>
                  <Icon name="wheat" className="h-10 w-10 text-[#F6CE86]" />
                  <h3 className="font-display mt-7 text-4xl font-semibold">Bateu a vontade?</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
                    Fale com a gente pelo WhatsApp e encomende seus pães, bolos e salgados
                    favoritos.
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-12 flex items-center justify-between rounded-full bg-[#FFF7E9] px-6 py-4 font-bold text-[#4B2B1C] transition hover:scale-[1.02]"
                >
                  Fazer meu pedido <Icon name="arrow" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2B2019] px-6 py-9 text-white/55 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-5 text-center text-xs sm:flex-row sm:text-left">
          <div className="flex items-center gap-2 text-white">
            <Icon name="wheat" className="h-5 w-5 text-[#E9B654]" />
            <span className="font-display text-lg">Sabor do Trigo</span>
          </div>
          <p>Panificadora & Confeitaria · Limoeiro do Norte, CE</p>
          <p>Tradição e sabor todos os dias.</p>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#2E9D56] text-white shadow-[0_8px_30px_rgba(24,102,51,.35)] transition hover:-translate-y-1 lg:hidden"
        aria-label="Fazer pedido pelo WhatsApp"
      >
        <Icon name="phone" className="h-6 w-6" />
      </a>
    </div>
  );
}
