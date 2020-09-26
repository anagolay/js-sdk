/**
 * MAINTAIN THIS FILE FOR THE TYPESCRIPT NATIVE TYPE CHECKING
 * THE POLKADOT API TYPES ARE IN THE definitions.ts file
 */

import { SnOperation } from '../operations/interfaces'
import {
  SnAccountId,
  SnBlockNumber,
  SnCreatorId,
  SnForWhat,
  SnGenericId,
} from '../sensio/interfaces'

export interface SnRule {
  id: SnGenericId
  data: SnRuleData
}

export interface SnRuleData {
  version: number
  name: string
  desc: string
  creator: SnCreatorId
  groups: SnForWhat[]
  parentId: SnGenericId
  ops: SnOperation[]
}

export interface SnRuleWithStorage {
  storageKey: string
  ruleInfo: SnRuleInfo
}

export interface SnRuleInfo {
  rule: SnRule
  accountId: SnAccountId
  blockNumber: SnBlockNumber
}
