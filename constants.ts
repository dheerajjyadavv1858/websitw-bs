import { BarChart3, Layers, Smartphone, Zap, Users, LayoutTemplate } from 'lucide-react';
import { Service, Stat, TeamMember, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Google Ads',
    description: 'High-intent search campaigns targeting homeowners actively looking for interior design services in your specific locality.',
    icon: BarChart3,
  },
  {
    id: 2,
    title: 'Meta Ads',
    description: 'Visually stunning Instagram and Facebook campaigns that showcase your portfolio to a curated high-net-worth audience.',
    icon: Layers,
  },
  {
    id: 3,
    title: 'Social Management',
    description: 'End-to-end profile management, content strategy, and community engagement to build authority in the design space.',
    icon: Smartphone,
  },
];

export const STATS: Stat[] = [
  { id: 1, value: '₹15k', label: 'Total Ad Spend' },
  { id: 2, value: '169', label: 'Quality Leads' },
  { id: 3, value: '6', label: 'Project Conversions' },
];

export const TEAM: TeamMember[] = [
  { 
    id: 1, 
    name: 'Priya Sharma', 
    role: 'Founder & Strategist', 
    initials: 'PS',
    image: 'priya-sharma-updated.png'
  },
];

export const CONTACT_INFO = {
  phone: '7380311858',
  email: 'priyasharma141428@gmail.com',
};