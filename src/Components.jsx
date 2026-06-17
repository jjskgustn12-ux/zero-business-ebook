import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.div>
);

export const Section = ({ children, className = '' }) => (
  <section className={`section ${className}`}>
    <div className="content-wrapper">{children}</div>
  </section>
);

export const Bridge = ({ text }) => (
  <div className="bridge-mention">
    <p>{text}</p>
    <ArrowDown size={20} />
  </div>
);

export const FlowCard = ({ children, highlight = false }) => (
  <div className="flow-card" style={highlight ? {
    background: 'rgba(56,189,248,0.1)',
    borderColor: 'var(--accent)',
    color: 'var(--accent)'
  } : {}}>
    {children}
  </div>
);

export const FlowArrow = () => (
  <div className="flow-arrow"><ArrowDown size={18} /></div>
);

export const FlowArrowRight = () => (
  <div className="flow-arrow flow-arrow-right" style={{margin: '0 0.5rem', display: 'flex', alignItems: 'center'}}><ArrowRight size={18} /></div>
);

export const ExampleCard = ({ icon, label, reaction }) => (
  <div style={{
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    marginBottom: '1rem'
  }}>
    <div style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#fff' }}>
      {icon} <strong>{label}</strong>
    </div>
    <div style={{ color: 'var(--accent)', fontSize: '0.95rem' }}>
      {reaction}
    </div>
  </div>
);
