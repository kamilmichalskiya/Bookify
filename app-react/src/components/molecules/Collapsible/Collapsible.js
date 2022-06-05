import React, { useState, useRef, useEffect } from 'react';
import { Collapsible, CollapsibleButton, CollapsibleContentContainer, CollapsibleContent, CollapsibleContentSelection } from './Collapsible-styled';

const FormField = ({ children, label, selection, summaryView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && parentRef.current && !parentRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [parentRef, isOpen]);

  return (
    <Collapsible>
      <CollapsibleButton onClick={() => setIsOpen(!isOpen)}>
        {label}
        <CollapsibleContentSelection>{selection}</CollapsibleContentSelection>
      </CollapsibleButton>
      <CollapsibleContentContainer
        isOpen={isOpen}
        height={parentRef.current?.scrollHeight}
        ref={parentRef}
        onBlur={() => {
          setIsOpen(false);
        }}
        autoFocus
        summaryView={summaryView}
      >
        <CollapsibleContent>{children}</CollapsibleContent>
      </CollapsibleContentContainer>
    </Collapsible>
  );
};

export default FormField;
