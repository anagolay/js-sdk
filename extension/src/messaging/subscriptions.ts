// taken from https://github.dev/polkadot-js/extension/blob/master/packages/extension-base/src/background/handlers/subscriptions.ts#L4-L31

import type { MessageTypesWithSubscriptions, SubscriptionMessageTypes } from '../types';

type Subscriptions = Record<string, chrome.runtime.Port>;

const subscriptions: Subscriptions = {};

/**
 * return a subscription callback, that will send the data to the caller via the port
 * @param id -
 * @param port -
 * @returns
 */
export function createSubscription<TMessageType extends MessageTypesWithSubscriptions>(
  id: string,
  port: chrome.runtime.Port
): (data: SubscriptionMessageTypes[TMessageType]) => void {
  subscriptions[id] = port;

  return (subscription: unknown): void => {
    if (subscriptions[id]) {
      port.postMessage({ id, subscription });
    }
  };
}

/**
 * clear a previous subscriber
 * @param id -
 */
export function unsubscribe(id: string): void {
  if (subscriptions[id]) {
    console.log(`Unsubscribing from ${id}`);

    delete subscriptions[id];
  } else {
    console.error(`Unable to unsubscribe from ${id}`);
  }
}
