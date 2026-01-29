// ===========================================================================
//                NOT NEEDED FOR YOUR SCENE - DEMO ONLY
// ===========================================================================
import { getDemoKey } from './DELETE_THIS_DEMO'
import './DELETE_THIS_DEMO'
export let staticTV: StaticTVClient
// ===========================================================================
//                NOT NEEDED FOR YOUR SCENE - DEMO ONLY
// ===========================================================================


// ===========================================================================
//        YOU DO NOT NEED DELETE_THIS_DEMO.ts FOR YOUR SCENE - DEMO ONLY
// ===========================================================================


// ===========================================================================
//               DONT FORGET TO RUN: npm i @thestatic-tv/dcl-sdk
// ===========================================================================


// ===========================================================================
//                     thestatic.tv - FREE Tier
//           Get your key: https://thestatic.tv
// ===========================================================================


// ===========================================================================
//                YOU ONLY NEED WHATS BELOW HERE FOR YOUR SCENE
// ===========================================================================

import { StaticTVClient } from '@thestatic-tv/dcl-sdk'

export function main() {
  staticTV = new StaticTVClient({
    apiKey: getDemoKey('dcls_YOUR_KEY_HERE')  // <-- Put your key here
  })
}
