import React, { useState, useRef } from 'react';
import { Collapsible, CollapsibleButton, CollapsibleContentContainer, CollapsibleContent } from './Collapsible-styled';

const FormField = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  return (
    <Collapsible>
      <CollapsibleButton onClick={() => setIsOpen(!isOpen)}>Toggle</CollapsibleButton>
      <CollapsibleContentContainer isOpen={isOpen} height={parentRef.current?.scrollHeight} ref={parentRef}>
        <CollapsibleContent>{children}</CollapsibleContent>
      </CollapsibleContentContainer>
    </Collapsible>
  );
};

export default FormField;
