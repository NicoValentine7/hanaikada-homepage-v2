import React, { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <div className="rounded-full bg-blue-100 p-2 mb-2">
    {children}
  </div>
);

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <IconWrapper>{icon}</IconWrapper>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);