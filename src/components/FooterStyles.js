import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  padding: 60px 20px 20px;
  margin-top: auto;
`;

export const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Section = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 50px;
      height: 3px;
      background: #e94560;
      border-radius: 2px;

      @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  p {
    color: #b8b8b8;
    line-height: 1.6;
  }
`;