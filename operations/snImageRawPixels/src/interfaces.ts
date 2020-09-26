import { SnInputParamsImplementation, SnFileBuffer, SnByteArray, SnImageData } from '@sensio/types'

export interface ReturnParams extends SnInputParamsImplementation {
  data: SnByteArray // value of `data.output.output`
  decode: () => SnImageData // value of `data.output.decoded`
}

export interface InputParam0 extends SnInputParamsImplementation {
  data: SnByteArray
  decode: () => SnFileBuffer
}
export type InputParams = [InputParam0]
