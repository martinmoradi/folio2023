import React from 'react'

type TestComponentProps = {
  text: string
}

export const TestComponent: React.FC<TestComponentProps> = ({ text }) => {
  return <div>{text}</div>
}
