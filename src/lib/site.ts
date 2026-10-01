/** Shared site constants — Hillz peek */
export const PHONE_DISPLAY = "603-235-0453";
export const PHONE_TEL = "tel:6032350453";

/** Goldie online booking (external, open in new tab) */
export const GOLDIE_BOOK =
  "https://book.heygoldie.com/Hillz-Auto-Detailing-LLC#services";

/** Exterior Detail → Goldie Complete Detail */
export const GOLDIE_BOOK_EXTERIOR =
  "https://book.heygoldie.com/Hillz-Auto-Detailing-LLC/checkout?serviceIds=2122d75f-3936-449a-8774-b454bc824462";

/** System X → Goldie Ceramic Top Coat */
export const GOLDIE_BOOK_SYSTEM_X =
  "https://book.heygoldie.com/Hillz-Auto-Detailing-LLC/checkout?serviceIds=9533c3ad-08ec-4c0c-87ab-354c4861c958";

/** Paint Correction — no Goldie SKU; catalog + tel */
export const GOLDIE_BOOK_PAINT = GOLDIE_BOOK;

export const EMAIL = "hillzautodetailing@gmail.com";

export const ADDRESS_LINES = ["4 Owens Ct unit 6", "Hampstead, NH, USA"] as const;

export const MAPS =
  "https://www.google.com/maps/place/?q=place_id:ChIJHzlrNPGr44kRDMT2WsqFQD8";

/** GBP weekly hours — do not swap for Goldie hours */
export const HOURS: Array<[string, string]> = [
  ["Monday", "9:00 AM–6:00 PM"],
  ["Tuesday", "9:00 AM–6:00 PM"],
  ["Wednesday", "9:00 AM–6:00 PM"],
  ["Thursday", "9:00 AM–6:00 PM"],
  ["Friday", "9:00 AM–6:00 PM"],
  ["Saturday", "By Appointment"],
  ["Sunday", "Closed"],
];

export const SERVICE_LINKS = [
  { href: "/#services", label: "Overview" },
  { href: "/services/system-x-ceramic-protection", label: "System X Ceramic Protection" },
  { href: "/services/paint-correction", label: "Paint Correction" },
  { href: "/services/exterior-detail", label: "Exterior Detail" },
] as const;

export type GalleryShot = {
  src: string;
  alt: string;
  /** Link to existing service page only — omit when unclear */
  serviceHref?: string;
  serviceLabel?: string;
};

/**
 * Job photos for gallery. Contact business-card photo lives on Contact only.
 * Service tags inferred from filename/alt — only routes that exist.
 */
export const GALLERY_SHOTS: GalleryShot[] = [
  {
    src: "/assets/paint-correction-hero.webp",
    alt: "Paint correction — polished finish",
    serviceHref: "/services/paint-correction",
    serviceLabel: "Paint Correction",
  },
  {
    src: "/assets/paint-correction.webp",
    alt: "Paint correction detail",
    serviceHref: "/services/paint-correction",
    serviceLabel: "Paint Correction",
  },
  {
    src: "/assets/paint-correction-2.webp",
    alt: "Paint correction results",
    serviceHref: "/services/paint-correction",
    serviceLabel: "Paint Correction",
  },
  {
    src: "/assets/buffing.webp",
    alt: "Buffing and paint correction",
    serviceHref: "/services/paint-correction",
    serviceLabel: "Paint Correction",
  },
  {
    src: "/assets/exterior-detail.webp",
    alt: "Exterior detail",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  {
    src: "/assets/car-detailing.webp",
    alt: "Car detailing",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  {
    src: "/assets/car-detailing-2.webp",
    alt: "Car detailing",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  {
    src: "/assets/car-detail-3.webp",
    alt: "Car detail",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  {
    src: "/assets/vette.webp",
    alt: "Corvette exterior detail",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  {
    src: "/assets/truck.webp",
    alt: "Truck detailing",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  {
    src: "/assets/truck.jpg",
    alt: "Truck detail",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  {
    src: "/assets/mac-truck.webp",
    alt: "Mac truck detailing",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  {
    src: "/assets/work-vehicles.webp",
    alt: "Work vehicles",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  {
    src: "/assets/bike-detailing.webp",
    alt: "Bike detailing",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  {
    src: "/assets/truck-and-plane.jpg",
    alt: "Truck and plane in shop",
    serviceHref: "/services/exterior-detail",
    serviceLabel: "Exterior Detail",
  },
  // No Interior service page — show photo, omit service tag
  { src: "/assets/interior-detailing.webp", alt: "Interior detailing" },
  // Engine bay — service route unclear; omit tag
  { src: "/assets/engine-bay.webp", alt: "Engine bay" },
  // System X / LVP product shot
  {
    src: "/assets/products/LVP.webp",
    alt: "System X LVP ceramic protection",
    serviceHref: "/services/system-x-ceramic-protection",
    serviceLabel: "System X Ceramic Protection",
  },
];

export const CONTACT_PHOTO = {
  src: "/assets/contact-info-photo.jpg",
  alt: "Hillz Auto Detailing business card and keys",
} as const;

/**
 * Real Google review quotes (Exa place library / Google Places aggregate).
 * Reviewer display names were not available from accessible scrapes — do not invent.
 * Stars and text verified; rating lock 4.8 · 17.
 */
export type GoogleReview = {
  stars: 5 | 4 | 3 | 2 | 1;
  text: string;
  date?: string;
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    stars: 5,
    date: "2023-08-31",
    text: "I was recently given a car from a relative who could no longer drive, and the car had a ton of dog fur that we had trouble getting out, along with the smell from the dog fur. We brought the car in to have the interior cleaned, and at the end of the day all of the fur was gone. The car doesn't even smell like dog fur at all anymore. Hillary was extremely nice and did an amazing job!",
  },
  {
    stars: 5,
    date: "2023-08-30",
    text: "My sister & brother in law gifted our son their car. They own 2 dogs so needless to say it was fur haven in this car, they vacuumed it before they gave it to him, then we vacuumed it, well that didn't work!! I'm highly allergic so riding in this car I couldn't breathe, so our son brought the car to Hillz today & OMG Hilary did such an amazing job!!!! All you smell is Clean!!! Not one stitch of dog fur could be found & she was sweet enough to make sure she used a special allergen shampoo so my allergies wouldn't be affected!!! Soooo sweet!!! The money was so worth this cleaning!!!",
  },
  {
    stars: 5,
    date: "2022-12-09",
    text: "MY CAR IS SO CLEAN! I had it cleaned on Monday and it still smells so nice. I will absolutely use them again. It was at a great price for my 19 escape.",
  },
  {
    stars: 5,
    date: "2022-07-19",
    text: "I dropped off my Jeep Wrangler on Monday because of dog hair, dust/crumbs, and a nasty mold smell. Picked it up the next morning and it's pretty much new inside. Smell is completely gone, carpets and seats are vaccummed and cleaned spotless. Has a Wonderful clean new-car smell now. Will definitely be coming back in the future!",
  },
  {
    stars: 5,
    date: "2022-02-26",
    text: "Hillz is amazing! My husband's SUV smelled and was incredibly dirty inside and the seats needed major shampooing. She thoroughly cleaned the interior and restored the car to a new condition. I'm still surprised how good his truck smells. I highly recommend this service.",
  },
  {
    stars: 5,
    date: "2021-09-20",
    text: "I have a 2011 Ford Flex where 2 Brittany spaniels called their 2nd home.... the car had tons of dog hair, pine needles and dirt. My car came back is if it just came off the showroom floor. superior work, very professional highly recommend if you need your vehicle detailed Hillz Auto Dealing is the place to go.",
  },
  {
    stars: 5,
    date: "2019-06-23",
    text: "I had a fish disaster in my trunk. I caught a 30lb striped bass, filleted it and threw it on ice. On the ride home the cooler broke and leaked water and fish guts all over my trunk. The smell was overpowering..and now it's completely gone. She did a wonderful job. I would totally recommend this place.",
  },
  {
    stars: 5,
    date: "2019-03-22",
    text: "Hillary did a great job with my mini van. The van was a big mess with eatables stuck to seat under my kids car seat, which they did a great job of cleaning up. Will definitely go back and recommend them.",
  },
];
