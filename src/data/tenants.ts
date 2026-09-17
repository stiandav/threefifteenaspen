export type Tenant = {
  slug: string;
  name: string;
  displayName: string;
  category: string;
  tagline: string;
  suite?: string;
  hours?: string[];
  website?: string;
  instagram?: string;
  email?: string;
  heroImage: string;
  heroImageAlt: string;
  cardImage: string;
  cardImageAlt: string;
  gallery?: { src: string; alt: string }[];
  summary: string;
  body: string[];
  pullQuote?: { text: string; attribution: string };
  facts?: { label: string; value: string }[];
  cta: { label: string; href: string };
};

export const tenants: Tenant[] = [
  {
    slug: "aspen-daily-news",
    name: "Aspen Daily News",
    displayName: "Aspen Daily News",
    category: "News",
    tagline: "If you don't want it printed, don't let it happen.",
    hours: ["Newsroom: Monday–Friday, 9am–5pm", "Published seven days a week"],
    website: "https://www.aspendailynews.com",
    instagram: "https://www.instagram.com/aspendailynews",
    heroImage: "/images/adn-staff-photo.jpg",
    heroImageAlt: "The Aspen Daily News team outside the newsroom at 315 E. Hyman Ave",
    cardImage: "/images/adn-staff-photo.jpg",
    cardImageAlt: "The Aspen Daily News team outside the newsroom at 315 E. Hyman Ave",
    summary:
      "The anchor tenant and free daily newspaper of record for Aspen, published out of the building since its reactivation as ThreeFifteen.",
    body: [
      "Aspen Daily News has covered this town since 1978, free of charge to readers, funded by advertising and a loyal community that has never let the paper's motto go quiet: \"If you don't want it printed, don't let it happen.\"",
      "Publisher David Cook, who also co-owns the ThreeFifteen brand and posts as @dacthree, moved the newsroom back to 315 E. Hyman as part of the building's reactivation, making the paper both the anchor tenant and one of the driving forces behind turning the block back into a real gathering place.",
      "The newsroom publishes seven days a week and covers city hall, the ski areas, real estate, courts, and the arts scene playing out one floor away at the Aspen Arts Club. Stop by, pick up a print copy at the door, or say hello. The newsroom is part of the block, not sealed off from it.",
    ],
    pullQuote: {
      text: "If you don't want it printed, don't let it happen.",
      attribution: "Aspen Daily News, since 1978",
    },
    facts: [
      { label: "Founded", value: "1978" },
      { label: "Publisher", value: "David Cook" },
      { label: "Format", value: "Free daily, print + web" },
    ],
    cta: { label: "Read the paper", href: "https://www.aspendailynews.com" },
  },
  {
    slug: "aspen-arts-club",
    name: "Aspen Arts Club",
    displayName: "Aspen Arts Club",
    category: "Art & Studios",
    tagline: "Art belongs to everyone.",
    suite: "Upper level studios",
    hours: ["Studios: by resident artist schedule", "Public programming: weekly, see calendar"],
    website: "https://www.aspenartsclub.org",
    instagram: "https://www.instagram.com/aspenartsclub",
    heroImage: "/images/aac-studio-doors.jpg",
    heroImageAlt: "Resident artists at work in their studios at the Aspen Arts Club",
    cardImage: "/images/aac-studio-doors.jpg",
    cardImageAlt: "Resident artists at work in their studios at the Aspen Arts Club",
    summary:
      "A Buckhorn Public Arts program that turned eight former offices into free working studios for local artists, with weekly programming open to the whole community.",
    body: [
      "Buckhorn Public Arts took the second-floor offices Gravity Haus left behind and gutted the idea of what they should be. In their place: eight working studios, handed out free of charge to local artists for six-month residencies, launched July 1, 2026.",
      "The inaugural class (Rae Lampe, Axel Livingston, Jamison Menard, Abril Ramos, Greta Zaveckaite, Carol Breen, Aggie Flores, and Kendra Lauren) spans painting, sculpture, macramé, silversmithing, photography, and music, chosen deliberately for a mix of mediums, ages, and backgrounds rather than a single house style.",
      "\"The Aspen Arts Club is about creating more than just workspace,\" says Buckhorn executive director Tim Sack. \"It's about building a community where artists can create alongside one another, share ideas, and grow in their practice.\" Beyond the studios, the Club runs open programming (drawing nights, dance, music, painting sessions) that treats the whole building as a stage, not just a hallway between shops.",
    ],
    pullQuote: {
      text: "The Aspen Arts Club is about creating more than just workspace. It's about building a community where artists can create alongside one another, share ideas, and grow in their practice.",
      attribution: "Tim Sack, Executive Director, Buckhorn Public Arts",
    },
    facts: [
      { label: "Residents", value: "8 artists, 6-month terms" },
      { label: "Launched", value: "July 1, 2026" },
      { label: "Parent org", value: "Buckhorn Public Arts" },
    ],
    cta: { label: "Visit Aspen Arts Club", href: "https://www.aspenartsclub.org" },
  },
  {
    slug: "eddys-marketplace",
    name: "Eddy's Marketplace",
    displayName: "Eddy's Marketplace & Kitchen",
    category: "Coffee & Food",
    tagline: "Aspen's neighborhood marketplace & kitchen.",
    hours: [
      "Marketplace (grab & go): Daily, 7am–6pm",
      "Kitchen (sit & stay): Thursday–Monday, 11am–9:30pm",
      "Happy hour: Thursday–Monday, 4pm–6pm",
    ],
    website: "https://www.eddysmarketplace.com",
    instagram: "https://www.instagram.com/eddysmarketplace",
    heroImage: "/images/eddys-photo-restaurant.jpg",
    heroImageAlt: "An overhead spread of salads, sandwiches, quiche, and cocktails at Eddy's Kitchen",
    cardImage: "/images/eddys-photo-restaurant.jpg",
    cardImageAlt: "Food spread at Eddy's Kitchen",
    gallery: [
      { src: "/images/eddys-photo-2.jpg", alt: "Grab-and-go cooler at Eddy's Marketplace stocked with drinks, salads, and Eddy's-branded goods" },
      { src: "/images/eddys-illustration-storefront.jpg", alt: "Illustrated storefront of Eddy's Marketplace at 315 E. Hyman with striped awnings" },
    ],
    summary:
      "A gourmet grab-and-go market and coffee counter up front, a full sit-down kitchen and bar out back, opened by owner Sondra in the space that once housed Unravel Coffee.",
    body: [
      "Eddy's runs as two businesses sharing one address. Up front, the Marketplace is open daily from 7am to 6pm for locally roasted coffee, chef-prepared sandwiches, fresh salads, pastries, and the chicken salad regulars already ask for by name, plus a case of gourmet groceries and local gifts.",
      "In back, Eddy's Kitchen turns into a full sit-down restaurant and bar Thursday through Monday: elevated comfort food like the Chicken Caesar Parm Crunch Wrap, quiche, shareables, and a full cocktail, beer, and wine list, with happy hour running 4 to 6pm and a shared patio that spills into the building's courtyard.",
      "Owner Sondra opened the marketplace side in August 2026 as part of the building's broader reactivation, giving the block a coffee counter and kitchen it hadn't had since Unravel Coffee closed with Gravity Haus.",
    ],
    facts: [
      { label: "Opened", value: "August 2026" },
      { label: "Owner", value: "Sondra" },
      { label: "Signature", value: "Famous chicken salad" },
    ],
    cta: { label: "See the menu", href: "https://www.eddysmarketplace.com" },
  },
  {
    slug: "mischief-vintage",
    name: "Mischief Vintage",
    displayName: "Mischief Vintage",
    category: "Vintage & Consignment",
    tagline: "Curated vintage and artisan clothing for the bold and adventurous.",
    suite: "Suite #5",
    hours: ["Open daily, 11am–7ish"],
    website: "https://www.mischiefvintage.com",
    instagram: "https://www.instagram.com/mischiefvintage_",
    heroImage: "/images/mischief-poster.jpg",
    heroImageAlt: "The Mischief Vintage logo on a vintage paper backdrop with curated jewelry",
    cardImage: "/images/mischief-poster.jpg",
    cardImageAlt: "The Mischief Vintage logo on a vintage paper backdrop with curated jewelry",
    gallery: [
      { src: "/images/mischief-flatlay-1.jpg", alt: "Curated vintage bolo ties and bowler hats at Mischief Vintage" },
      { src: "/images/mischief-flatlay-2.jpg", alt: "Mischief Vintage flat-lay display reading 'shopping that inspires thoughtful consumption'" },
    ],
    summary:
      "Shiloh Uhlir's artistic project turned retail shop, dealing in one-of-a-kind vintage, consignment, and artisan pieces, with a built-in climate give-back.",
    body: [
      "Mischief Vintage was born from a lifelong obsession with wearing the unexpected: an artisan jacket, a hidden treasure tucked inside a thrift store, your grandmother's style, reinvented. It's less a boutique than an ongoing art project by Shiloh Uhlir, built around clothing that tells a story rather than clothing that matches a rack.",
      "The shop deals almost entirely in vintage, secondhand, handmade, and consigned pieces, and takes consignment from anyone in Aspen with something bold and distinctive sitting unused in their closet. Every purchase chips in, too: two dollars from every sale goes to Protect Our Winters, the climate advocacy nonprofit founded by professional snowboarders.",
      "Find Mischief tucked into Suite #5, open daily from 11am until \"7ish,\" a shop that runs, fittingly, on its own clock.",
    ],
    pullQuote: {
      text: "We're inspired by clothing that tells a story.",
      attribution: "Mischief Vintage",
    },
    facts: [
      { label: "Founder", value: "Shiloh Uhlir" },
      { label: "Giving back", value: "$2 / purchase to Protect Our Winters" },
      { label: "Suite", value: "#5" },
    ],
    cta: { label: "Shop Mischief Vintage", href: "https://www.mischiefvintage.com" },
  },
  {
    slug: "tattoo-aspen",
    name: "Tattoo Aspen",
    displayName: "Tattoo Aspen",
    category: "Tattoo Studio",
    tagline: "A private, appointment-only tattoo experience, 7,908 feet up.",
    hours: ["By appointment, walk-ins welcome", "Artists rotate seasonally, 5–7 day residencies"],
    website: "https://tattooaspen.com",
    instagram: "https://www.instagram.com/tattoo.aspen",
    email: "tattoo@tattooaspen.com",
    heroImage: "/images/tattoo-courtyard.jpg",
    heroImageAlt: "The Tattoo Aspen sign hanging in the courtyard at 315 E. Hyman Ave",
    cardImage: "/images/tattoo-courtyard.jpg",
    cardImageAlt: "The Tattoo Aspen sign hanging in the courtyard at 315 E. Hyman Ave",
    gallery: [
      { src: "/images/tattoo-hero.jpg", alt: "Tattoo Aspen collage of founder Trudy Lines and fine-line tattoo work" },
      { src: "/images/tattoo-studio-1.jpg", alt: "Visiting artists working in the Tattoo Aspen studio" },
    ],
    summary:
      "Aspen's first-ever private tattoo studio, founded by Corina Weikl (Trudy Lines) and built around a rotating roster of internationally recognized guest artists.",
    body: [
      "Corina Weikl, known professionally as Trudy Lines, a former lead artist at Bang Bang Tattoo in New York, brought the first private tattoo studio to Aspen, built around her own fine-line style and a rotating cast of guest artists from around the world.",
      "Roughly seventeen artists cycle through in five-to-seven-day residencies, so the roster changes through the season even as the studio stays put at 315 E. Hyman. Booking runs through a short design consultation: tell the team your idea and preferred dates, they match you to the right artist for it, and the session happens in a calm, minimal space just off the slopes. Walk-ins are genuinely welcome, not just tolerated.",
      "\"I want to create this space where people can be curious,\" Weikl has said of the studio, treating a tattoo less like a souvenir and more like a piece of art a client happens to keep on them permanently.",
    ],
    pullQuote: {
      text: "I want to create this space where people can be curious.",
      attribution: "Corina Weikl (Trudy Lines), Founder",
    },
    facts: [
      { label: "Founder", value: "Corina Weikl (Trudy Lines)" },
      { label: "Guest artists", value: "~17 per season" },
      { label: "Elevation", value: "7,908 ft" },
    ],
    cta: { label: "Request an appointment", href: "https://tattooaspen.com" },
  },
  {
    slug: "the-grove",
    name: "The Grove",
    displayName: "The Grove",
    category: "Membership & Events",
    tagline: "A locals' living room: workspace, lounge, and events on the lower level.",
    suite: "Lower level, 3,000 sq ft",
    hours: ["Members: weekdays for work and meetings", "Community room: public programming by calendar"],
    website: "https://www.groveaspen.club",
    instagram: "https://www.instagram.com/groveaspen.club",
    heroImage: "/images/grove-lounge-1.jpg",
    heroImageAlt: "The Grove's communal table and lounge seating on the lower level of 315 E. Hyman Ave",
    cardImage: "/images/grove-lounge-1.jpg",
    cardImageAlt: "The Grove's communal table and lounge seating on the lower level of 315 E. Hyman Ave",
    gallery: [
      { src: "/images/grove-lounge-2.jpg", alt: "A cozy lounge nook at The Grove with boucle chairs and a shared television" },
      { src: "/images/grove-piano.jpg", alt: "The bar at The Grove, lined with brass fixtures and hanging glassware" },
    ],
    summary:
      "A membership club for Aspen locals built around a workspace, a lounge, and a 2,000-square-foot room where the Aspen Arts Club runs its weekly programming.",
    body: [
      "The Grove took over 3,000 square feet on the lower level in August 2026 as a direct answer to what its founders call Aspen's lost third spaces: a members' living room for the people who make the town run, makers, founders, practitioners, and neighbors, with a daytime workspace, a full bar and lounge, and bookable meeting rooms built for real work.",
      "At its center is a 2,000-square-foot room the Aspen Arts Club uses to run its weekly lineup: yoga and breathwork, hands-on workshops, recurring meet-ups, wellness sessions, and talks, open to the whole building, not just members. Membership itself runs two tiers, a $3,000-a-year coworking membership and a $6,000-a-year patron membership that adds evening events and booking privileges.",
      "The Grove also takes a limited number of private events each month, from 1,000 to 3,000 square feet of lounge and meeting space, in addition to what's bookable through the building at large. See the booking page for details.",
    ],
    pullQuote: {
      text: "This is not another luxury storefront. This is a place for locals to gather.",
      attribution: "The Grove",
    },
    facts: [
      { label: "Opened", value: "August 1, 2026" },
      { label: "Membership", value: "$3,000/yr coworking, $6,000/yr patron" },
      { label: "Programming room", value: "2,000 sq ft, run with Aspen Arts Club" },
    ],
    cta: { label: "Visit The Grove", href: "https://www.groveaspen.club" },
  },
];

export function getTenant(slug: string) {
  return tenants.find((t) => t.slug === slug);
}
