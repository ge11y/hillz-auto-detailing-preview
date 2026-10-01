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

export const GALLERY_SHOTS = [
  { src: "/assets/truck.webp", alt: "truck" },
  { src: "/assets/truck.jpg", alt: "truck" },
  { src: "/assets/truck-and-plane.jpg", alt: "truck and plane" },
  { src: "/assets/vette.webp", alt: "vette" },
  { src: "/assets/engine-bay.webp", alt: "engine bay" },
  { src: "/assets/paint-correction.webp", alt: "PAINT correction" },
  { src: "/assets/paint-correction-2.webp", alt: "paint correction" },
  { src: "/assets/buffing.webp", alt: "buffing" },
  { src: "/assets/bike-detailing.webp", alt: "Bike detailing" },
  { src: "/assets/mac-truck.webp", alt: "mac truck" },
  { src: "/assets/work-vehicles.webp", alt: "Work Vehicles" },
  { src: "/assets/car-detailing.webp", alt: "car detailing" },
  { src: "/assets/car-detailing-2.webp", alt: "car detailing2" },
  { src: "/assets/car-detail-3.webp", alt: "car detail 3" },
  { src: "/assets/exterior-detail.webp", alt: "Exterior Detail" },
  { src: "/assets/interior-detailing.webp", alt: "Interior Detailing" },
  { src: "/assets/contact-info-photo.jpg", alt: "contact info photo" },
] as const;
