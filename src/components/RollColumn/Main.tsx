import RollColumnProvider, { RollColumnProviderProps } from './Provider'
import { MainContainer } from './styles'

interface MainProps extends RollColumnProviderProps {}

const RollColoumnMain: React.FC<MainProps> = ({ children, onColumnChange, duration }) => {
  return (
    <RollColumnProvider onColumnChange={onColumnChange} duration={duration}>
      <MainContainer>{children}</MainContainer>
    </RollColumnProvider>
  )
}

export default RollColoumnMain
