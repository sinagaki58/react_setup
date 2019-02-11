export interface StateInterface {
  main: {
    title: string
  }
}

export const initialState: StateInterface = {
  main: {
    title: 'Hello, World.'
  }
}
