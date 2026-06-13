export interface RoomCategory {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  maxGuests: number;
  bedType: string;
  view: string;
  image: string;
  amenities: string[];
}

export interface GalleryItem {
  id: string;
  category: "all" | "resort" | "rooms" | "dining" | "activities";
  src: string;
  title: string;
  description: string;
}

export interface Hotspot {
  id: string;
  x: number; // percentage coordinate X (0-100)
  y: number; // percentage coordinate Y (0-100)
  label: string;
  description: string;
  targetEnvironmentId?: string; // If clicked, loads this env
}

export interface TourEnvironment {
  id: string;
  name: string;
  image: string;
  description: string;
  initialPan: number;
  hotspots: Hotspot[];
}

export interface GuestReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  content: string;
  roomType: string;
}
