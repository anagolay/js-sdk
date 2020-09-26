/**
 * Operation specification
 */
import { SnOperation } from '@sensio/types'

export const op: SnOperation = {
  id: 'bafy2bzacebr4fj6rnexne25v6zcuomsfnbfxrv22cwzrrqexeo3ggotd3u3zu',
  data: {
    desc: 'Create the Ownership Claims from the existing PoE from the Sensio Network.',
    name: 'sn_create_ownership_claims',
    input: [
      {
        data: 'SnByteArray',
        decoded: 'SnGenericIds',
      },
    ],
    output: {
      desc: 'Return the list of the Ownership Claims',
      output: 'SnByteArray',
      decoded: 'SnOwnershipClaims',
    },
    groups: [6],
    priority: 0,
    hashingOp: 'sn_cid',
    encOp: 'sn_enc_hex',
    ops: [],
  },
}

export default op