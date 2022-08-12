import React from 'react';

export default function Highlight({children, color}) {
  const styles = {
    backgroundColor: color,
    borderRadius: '2px',
    color: 'var(--ifm-color-white)',
    padding: '0.2rem'
  };
  return (
    <span style={styles}>{children}</span>
  );
}
