
  # @sensio/op-sn-multihash

  Blockchain Version **bafy2bzacea24txwqzwanzte5laqhsy3umk4wq43h3llvlvkebp7gv73kzuzsi**
  

  ## Description 
  
  Generic blake2b-256 multihash operation.
  
  ##  Links and Repo

  * npm: https://www.npmjs.com/package/@sensio/op-sn-multihash
  * repo: [repo folder](https://gitlab.com/sensio_group/network-js/-/tree/master/operations/snMultihash)
  * support: [Discord server #dev channel](https://discord.gg/JsdKZ5K) 

  ## Install
  
  ```sh
  # install latest version
  yarn add @sensio/op-sn-multihash

  # or specific version
  yarn add @sensio/op-sn-multihash@0.3.1
  ```
  
  ## Usage
  
  ```ts
  import snMultihash from '@sensio/op-sn-multihash'


  const data = new U8intArray(7)
  await snMultihash(data)
  ```
  
  ## Contributing
  
  PRs accepted.
  
  ## License
  
  Longer version is in LICENSE file
  
  Apache-2.0 © [Sensio Group](https://sensio.group) 
  