import React from 'react';

// Import your block components
// import Hero from './blocks/Hero';

// 1. Define the map of types to components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Components: Record<string, React.ComponentType<any>> = {
  // hero: Hero,
};

interface IBlockRendererProps {
  block: {
    _type: string;
    _key: string;
    [key: string]: unknown; // Catch-all for block properties
  };
}

const BlockRenderer = ({ block }: IBlockRendererProps) => {
  // 2. Extract the block type
  const type = block._type;

  // 3. Find the corresponding component
  const SelectedComponent = Components[type];

  // 4. Handle cases where the component doesn't exist yet
  if (!SelectedComponent) {
    return (
      <div className="rounded-lg border-2 border-dashed border-red-400 bg-red-50 p-4 text-red-600">
        <p className="font-mono text-sm">
          ⚠️ Component not found for type: <strong>{type}</strong>
        </p>
      </div>
    );
  }

  // 5. Render the component and pass all block data as props
  return <SelectedComponent {...block} />;
};

export default BlockRenderer;
