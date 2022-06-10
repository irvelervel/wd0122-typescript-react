import { useState } from 'react'

interface FunctionalComponentProps {
  subTitle: string
  subTitleColor: string
}

interface Pasta {
  name: string
  description: string
}

const FunctionalComponent = ({
  subTitle,
  subTitleColor,
}: FunctionalComponentProps) => {
  // let's replicate count and loading from the state object of ClassComponent

  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  const [selectedPasta, setSelectedPasta] = useState<null | Pasta>(null)
  // the problem we have is that selectedPasta AUTOMATICALLY GETS from TS
  // a NULL type from its initial value assignment!
  // therefore it will never get any other value than null...

  return (
    <div>
      <h1>TypeScript in React!</h1>
      <h2 style={{ color: subTitleColor || 'red' }}>{subTitle}</h2>
      <p onClick={() => setCount(count + 1)}>
        The value of the counter is: {count}
        <button
          onClick={() =>
            setSelectedPasta({
              name: 'Amatriciana',
              description: 'Very good!',
            })
          }
        >
          ASSIGN A PASTA
        </button>
      </p>
      {selectedPasta && <div>COMMENTS GO HERE!</div>}
    </div>
  )
}

export default FunctionalComponent
