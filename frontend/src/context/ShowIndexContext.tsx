import React, {
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react'

export const ShowIndexContext =
  React.createContext<{
    showIndex: number
    setShowIndex: Dispatch<SetStateAction<number>>
  }>({
    showIndex: 0,
    setShowIndex: () => {},
  })

export const ShowIndexProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [showIndex, setShowIndex] = useState(0)

  return (
    <ShowIndexContext.Provider
      value={{ showIndex, setShowIndex }}
    >
      {children}
    </ShowIndexContext.Provider>
  )
}
