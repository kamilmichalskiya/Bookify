import React, { useState, useRef } from 'react';
import { Collapsible, CollapsibleButton, CollapsibleContentContainer, CollapsibleContent, CollapsibleContentSelection } from './Collapsible-styled';

const FormField = ({ children, label, selection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  return (
    <Collapsible>
      <CollapsibleButton onClick={() => setIsOpen(!isOpen)}>
        {label}
        <CollapsibleContentSelection>{selection}</CollapsibleContentSelection>
      </CollapsibleButton>
      <CollapsibleContentContainer isOpen={isOpen} height={parentRef.current?.scrollHeight} ref={parentRef}>
        <CollapsibleContent>{children}</CollapsibleContent>
      </CollapsibleContentContainer>
    </Collapsible>
  );
};

export default FormField;
