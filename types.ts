import React from 'react';

export interface ProjectImage {
  id: number;
  url: string;
  title: string;
  category: 'deck' | 'pergola' | 'both';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}