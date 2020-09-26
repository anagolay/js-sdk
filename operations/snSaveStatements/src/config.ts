/**
 * Operation specification
 */
import { SnOperation } from '@sensio/types'

export const op: SnOperation = {
  id: 'bafy2bzacecmqyut2oozadzigqsggrhkqxd2fxovubcy4djibfyci6iq6t4s4u',
  data: {
    desc:
      'Save the given statements to the Sensio Network. This operation waits until the records are in finalized state. Accepts the list of claims with the list of signatures for each claim. Mapping is done with the index of the list so `param1[0]` and `param2[0]`. If there are mismatches in the either of the params this operation will fail. Meaning that `param1.length === param2.length`',
    name: 'sn_save_statements',
    input: [
      {
        data: 'SnByteArray',
        decoded: 'SnSensioClaim[]',
      },
      {
        data: 'SnByteArray',
        decoded: 'SnSensioSignatures[]',
      },
    ],
    output: {
      desc: 'Return the List of signed statement IDs',
      output: 'SnByteArray',
      decoded: 'SnGenericIds',
    },
    groups: [6],
    priority: 0,
    hashingOp: 'sn_cid',
    encOp: 'sn_enc_hex',
    ops: [],
  },
}

export default op