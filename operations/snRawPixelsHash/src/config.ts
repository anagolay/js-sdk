/**
 * Operation specification
 */

export default {
  id: 'bafy2bzacecbxw2mexfwsheofuogi2jt3th3snnpv4h4cksvqrdciswqpdazbu',
  data: {
    desc: 'RAW PIXELS of the photo',
    name: 'sn_raw_pixels_hash',
    input: [
      {
        data: 'SnByteArray',
        decoded: 'SnFileBuffer'
      }
    ],
    output: {
      desc: 'RAW PIXELS of the photo',
      output: 'SnByteArray',
      decoded: 'SnFileBuffer'
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
