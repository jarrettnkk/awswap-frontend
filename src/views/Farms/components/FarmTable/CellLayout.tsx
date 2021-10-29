import React from 'react'
import styled from 'styled-components'

const Label = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: left;
`

const ContentContainer = styled.div`
  min-height: 24px;
  display: flex;
  align-items: center;
`

interface CellLayoutProps {
  label?: string
}

const CellLayout: React.FC<CellLayoutProps> = ({ label = '', children }) => {
  return (
    <div>
      {label && <Label style={{ color: '#A6A6B7' }}>{label}</Label>}
      <ContentContainer>{children}</ContentContainer>
    </div>
  )
}

export default CellLayout
