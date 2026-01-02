# Vyooma Core Component Library

This document outlines the core UI components developed for the Vyooma foundation. All components are built with Tailwind CSS and Radix UI primitives.

## Component Registry

### Atoms
- **Button**: Standard interactive element with multiple variants (`default`, `outline`, `ghost`, `destructive`).
- **Badge**: Status indicator component (`success`, `warning`, `destructive`, `info`).
- **Input**: Themed text input with support for icons and error states.
- **Label**: Accessible label component for form elements.

### Molecules
- **Card**: Standard container for grouping content with optional headers, footers, and descriptions.
- **StatCard**: Specialized card for displaying key metrics with trend indicators.
- **Table**: Dense data representation component used extensively in Admin and Ops.

### Layouts
- **AdminLayout**: High-density sidebar layout for administrative tasks.
- **PilotLayout**: Ultra-high contrast layout for operational visibility.
- **ClientLayout**: Premium dark-themed "Hub" layout for portfolio management.

## Usage Guidelines

### Role-Based Theming
Components automatically adapt to the parent layout's theme via CSS variables:
- `.theme-admin`: Blue/Slate palette
- `.theme-pilot`: Amber/Black palette (High Contrast)
- `.theme-client-premium`: Slick Dark/Glass palette

### Animations
All page transitions are handled via the `.animate-page-fade` class in `index.css`, providing a subtle 300ms fade-and-lift effect.
