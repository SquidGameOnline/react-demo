import * as TYPES from '../global/constants'
export function inc(num: number) {
  return (dispatch: any) => {
      setTimeout(
          () => dispatch(
              {
                  type: TYPES.INC,
                  name: num
              }
          ), 3000
      )
  }
}

export function dec(num: number) {
    return {
        type: TYPES.DEC,
        name: num
    }
}
