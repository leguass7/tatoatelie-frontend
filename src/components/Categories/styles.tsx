import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  border: 0;
  display: flex;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;

  @media (min-width: 768px) {
    justify-content: center;
  }
`

export const CategoryItemContainer = styled.a`
  display: block;
  border: 0;
  padding: 0 3px;
  width: 80px;
  max-width: 80px;
`

export const CategoryIcon = styled.div`
  margin: 0 auto;
  width: 74px;
  height: 74px;
  text-align: center;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    margin-left: 50%;
    margin-top: 50%;
    transform: translate(-50%, -50%);
  }
`
export const CategoryDescription = styled.div<{ colorLabel?: string }>`
  font-size: 14px;
  max-width: 74px;
  min-width: 74px;
  text-align: center;
  color: ${({ colorLabel = 'inherit' }) => colorLabel};
`
