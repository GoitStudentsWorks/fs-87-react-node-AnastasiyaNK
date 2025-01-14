import styled from 'styled-components';

export const DayNumber = styled.div`
  color: var(--Primery-Color-Black, #2f2f2f);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const Percent = styled.div`
  width: 32px;
  height: 16px;
  color: var(--Secondary-color-4, #9ebbff);
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 34px;
    height: 20px;
    font-size: 13px;
    line-height: 20px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    width: 34px;
    height: 20px;
    font-size: 13px;
    line-height: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 18px;
    font-size: 12px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    width: 32px;
    height: 18px;
    font-size: 12px;
    line-height: 18px;
  }
`;
export const ButtonXmark = styled.button`
  display: flex;
  margin-left: auto;
  border: none;
  background: white;
`;
