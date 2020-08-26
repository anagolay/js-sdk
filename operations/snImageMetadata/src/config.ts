/**
 * Operation specification
 */

import { SnOperation } from '@sensio/types'

export const op: SnOperation = {
  id: 'bafy2bzacedq5zlaca4xq4zou7ctovepnx3doegwcii37prgrzvhdhoqthmpii',
  data: {
    desc: 'Extract All Image Metadata',
    name: 'sn_image_metadata',
    input: [
      {
        data: 'SnByteArray',
        decoded: 'SnFileBuffer'
      }
    ],
    output: {
      desc: 'Returns the metadata as SnByteArray and decoded as SnImageMetadata. Accessible as `[exif|iptc|xmp|icc].TAG_NAME`',
      output: 'SnByteArray',
      decoded: 'SnImageMetadata'
    },
    groups: [
      6
    ],
    priority: 1,
    hashingOp: 'sn_cid',
    encOp: 'sn_enc_hex',
    ops: [
      {
        id: 'bafy2bzacea76v6e7qjc2r2p3csvjxi2j7h4o7jaentuyspaxva6wcl6o2bxac',
        data: {
          name: 'sn_file',
          desc: 'Reads the file from given path (data) and returns the buffer. RAW file buffer for other ops to use.',
          input: [
            {
              data: 'SnString',
              decoded: 'SnString'
            }
          ],
          groups: [
            6,
            1
          ],
          priority: 0,
          output: {
            desc: 'Returns the File Buffer.',
            output: 'SnByteArray',
            decoded: 'SnFileBuffer'
          },
          hashingOp: 'sn_cid',
          encOp: 'sn_enc_hex',
          ops: []
        }
      }
    ]
  }
}

export default op
