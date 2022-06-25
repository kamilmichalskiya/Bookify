import React, { useState } from 'react';
import { AccordionItem, AccordionTitle, AccordionContent, GreenIconStyleWrapper, AccordionTitleText } from './Accordion-styled';
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown';
import { KeyboardArrowUp } from '@styled-icons/material/KeyboardArrowUp';

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItem>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <AccordionTitleText>{title}</AccordionTitleText>
        <div>
          {isActive ? (
            <GreenIconStyleWrapper>
              <KeyboardArrowUp size="36" />
            </GreenIconStyleWrapper>
          ) : (
            <GreenIconStyleWrapper>
              <KeyboardArrowDown size="36" />
            </GreenIconStyleWrapper>
          )}
        </div>
      </AccordionTitle>
      {isActive && <AccordionContent>{children}</AccordionContent>}
    </AccordionItem>
  );
};

export default Accordion;
