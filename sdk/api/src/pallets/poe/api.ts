/* eslint-disable no-case-declarations */
/**
 * Pallet's api and rpc methods
 * @packageDocumentation
 *
 */
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { KeyringPair } from '@polkadot/keyring/types'
import { getApi } from '@sensio/api/connection'
import createEventEmitter from '@sensio/api/events'
import { networkCallback } from '@sensio/api/utils'
import { SnGenericId, SnGenericIds, SnProof, SnProofWithStorage } from '@sensio/types'
import { EventEmitter } from 'events'
import { map } from 'ramda'
import { EVENT_NAME_BATCH, EVENT_NAME_ERROR, EVENT_NAME_SINGLE } from './config'
import decodeFromStorage, { IncomingParam } from './decodeStorage'

/**
 * Save a single poe to the chain
 * @param d Statement d that we want to save to the chain.
 * @param signer Account that will be owner of the transaction and ones who pays the fees
 */
export async function save(d: SnProof, signer: KeyringPair): Promise<EventEmitter> {
  const broadcast = createEventEmitter()

  // @TODO if we need nonce in the future, this doesn't work
  // const nonce = await api.rpc.system.accountNextIndex(signer.address)
  await createSubmittableExtrinsic(d).signAndSend(signer, {}, (params) =>
    networkCallback(params, broadcast, {
      success: EVENT_NAME_SINGLE,
      error: EVENT_NAME_ERROR,
    }),
  )

  // return the event emitter
  return broadcast
}

/**
 * Create Submittable transactions
 * @param d
 */
export async function createSubmittableExtrinsics(
  d: SnProof[],
): Promise<Array<SubmittableExtrinsic<'promise'>>> {
  const txs = map(createSubmittableExtrinsic, d)

  return txs
}

/**
 * Save many statements in single transaction. It uses the `batch` capability of the chain
 * @param ops
 * @param signer
 *
 * ```ts
  await api.api()

  const statements: SnProof[] = proofs
  const signer = getAlice()
  const o = await api.pallets.statements.saveBulk(statements, signer)

  o.on(EVENT_NAME_BATCH, p => console.log(p.message))
  ```
 */
export async function saveBulk(d: SnProof[], signer: KeyringPair): Promise<EventEmitter> {
  const api = getApi()
  const broadcast = createEventEmitter()
  const txs = map(createSubmittableExtrinsic, d)
  // @TODO if we need nonce in the future, this doesn't work
  // const nonce = await api.rpc.system.accountNextIndex(signer.address)
  await api.tx.utility.batch(txs).signAndSend(signer, {}, (params) =>
    networkCallback(params, broadcast, {
      success: EVENT_NAME_BATCH,
      error: EVENT_NAME_ERROR,
    }),
  )

  // return the event emitter
  return broadcast
}

/**
 * Get all or some Poe from the chain, encoded using SCALE codec.
 * @param items
 * @returns Return item maps SCALE codec encoded
 */
export async function getAll(): Promise<IncomingParam[]> {
  const api = getApi()
  return await api.query.poe.proofs.entries()
}

/**
 * Get all or some Poe from the chain, encoded using SCALE codec.
 * @param items
 * @returns Return item maps SCALE codec encoded
 */
export async function getPoe(item: SnGenericId): Promise<IncomingParam[]> {
  const api = getApi()
  return await api.query.poe.proofs.entries(item)
}

/**
 * Get all PoE proofs from the network then return the list of the Decoded proofs
 * @returns Return item maps SCALE codec decoded
 */
export async function getAllDecoded(): Promise<SnProofWithStorage[]> {
  const d = await getAll()
  return map(decodeFromStorage, d)
}
/**
 * Get some PoE proofs from the network then return the list of the Decoded proofs
 * @param items
 * @returns Return item maps SCALE codec decoded
 */
export async function getSomeDecoded(items: SnGenericIds = []): Promise<SnProofWithStorage[]> {
  const d = await Promise.all(items.map(async (i) => await getPoe(i)))

  return map(decodeFromStorage, d[0])
}

/**
 * Helper function for creating the Submittable result. This can be easily used in the `ramda.map` function with the list of SnProof. Returns the Submittable statement object
 *
 * ```ts
 * import { map } from 'ramda'
 * const txs = map(createSubmittableExtrinsic, d)
 *  ```
 *
 * @param d Typescript native SnProof
 *
 */
export function createSubmittableExtrinsic(d: SnProof): SubmittableExtrinsic<'promise'> {
  const api = getApi()
  return api.tx.poe.createProof(d)
}
