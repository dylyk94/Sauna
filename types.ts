import React from 'react';

export interface SaunaRoom {
  id: string;
  name: string;
  price: number;
  durationLabel: string;
  capacity: number;
  extraPersonPrice: number;
  description: string;
  image: string;
  features: string[];
}

export interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}