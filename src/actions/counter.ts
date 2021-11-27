import * as TYPES from '../global/constants'
export function inc(num: number) {
    return {
        type: TYPES.INC,
        name: num
    }
}

export function dec(num: number) {
    return {
        type: TYPES.DEC,
        name: num
    }

}