import React from 'react';

/**
 * Utility function for smooth scrolling to a section 
 * @param id - The ID of the element to scroll to
 * @returns A function that handles the click event
 */
export const scrollToSection = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}; 