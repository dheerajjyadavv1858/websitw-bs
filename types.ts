import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}