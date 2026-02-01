
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}
