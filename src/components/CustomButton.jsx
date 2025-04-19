import React from 'react';

export default function CustomButton({ children, icon, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        backgroundColor: '#4F9CF9',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '13px',
        padding: '18px',
        fontWeight: 300, // это для всей кнопки, нежирно
        ...style,
      }}
    >
      <span style={{ fontWeight: 300 }}>{children}</span>
      {icon && (
        <span
          style={{
            
            fontSize: '18px',
      transform: 'scale(0.9)',
      display: 'flex',
      alignItems: 'center',

          }}
        >
          {icon}
        </span>
      )}
    </button>
  );
}
