import styled from '@emotion/styled';

const StyledDetails = styled.div`
  display: flex;
  gap: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const StyledAdditionalInfo = styled.div`
  display: flex;
  gap: 10px;
  justify-content: start;
`;

export { StyledDetails, StyledAdditionalInfo };
