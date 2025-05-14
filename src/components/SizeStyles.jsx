import React from 'react'
import Section from './Section'
const SizeStyles = ({ width, height, setWidth ,setHeight }) => {
    
  return (
    <>
      <Section title="Size">
        <input
          type="text"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </Section>
      <Section title="Typography">
        <input
          type="text"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </Section>
    </>
  );
};

export default SizeStyles