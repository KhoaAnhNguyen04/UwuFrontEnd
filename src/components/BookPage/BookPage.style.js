import styled from "styled-components";

export const BookPageLayout = styled.div`
  padding: 7%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.1);

  display: flex;
  .img_container {
    flex-basis: 25%;
    border-radius: 12px;
  }
`;
export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
  flex-basis: 45%;
  padding: 0 60px;
  .rating_block {
    margin-top: -8px;
    display: flex;
    gap: 40px;
  }
`;
export const HorizonBlock = styled.div`
  display: flex;
  .small_block {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const FeedbackContainer = styled.div`
  width: 100%;
  flex-basis: 25%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FeedbackBlock = styled.div`
  padding: 16px;
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--wheat-color);
`;
