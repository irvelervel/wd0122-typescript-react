import { Component } from 'react'

// this is the default value of the props in a class component: {}
// you need to define the shape of the props of this component!
// what are the props? an object! how do you define the TS shape of an object?
// with an interface!

interface ClassComponentProps {
  subTitle: string
  subTitleColor?: string // marked as ? --> optional
}

interface ClassComponentState {
  count: number
  loading: boolean
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    count: 0,
    loading: true,
  }

  render() {
    return (
      <div>
        <h1>TypeScript in React!</h1>
        <h2 style={{ color: this.props.subTitleColor || 'red' }}>
          {this.props.subTitle}
        </h2>
        <p>The value of the counter is: {this.state.count}</p>
      </div>
    )
  }
}

export default ClassComponent
