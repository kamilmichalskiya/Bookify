import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 0 30px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const ContentLeftTitle = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  padding: 25px 0px;
  letter-spacing: 0.08em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;

export const ReCaptchaWrapper = styled.div`
  margin: 30px 0 10px;
  max-width: 100%;
`;

export const GreenTextWrapper = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const PaymentHeader = styled.div`
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const PaymentButtonWrapper = styled.div`
  width: 100%;
  margin: 40px 0 30px;
  display: flex;
  justify-content: center;
  button {
    width: unset;
    height: unset;
    padding: 10px 50px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.error};
`;
