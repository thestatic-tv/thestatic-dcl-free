/**
 * ===========================================================================
 *    DELETE THIS ENTIRE FILE WHEN BUILDING YOUR OWN SCENE
 * ===========================================================================
 *
 * This file contains:
 * - Demo API key (for testing without your own key)
 * - Demo scene visuals (floor, signs, metrics board)
 *
 * None of this is needed for visitor tracking to work.
 * Just delete this file and use your own API key in index.ts
 *
 * ===========================================================================
 */

import {
  engine,
  Transform,
  MeshRenderer,
  MeshCollider,
  Material,
  TextShape,
  pointerEventsSystem,
  InputAction
} from '@dcl/sdk/ecs'
import { Color4, Vector3, Quaternion } from '@dcl/sdk/math'
import { openExternalUrl } from '~system/RestrictedActions'
import { staticTV } from './index'

// ===========================================================================
// DEMO KEY - Delete getDemoKey and just use your key directly in index.ts
// ===========================================================================
const decodeB64 = (s: string): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  let r = ''
  for (let i = 0; i < s.length; i += 4) {
    const a = chars.indexOf(s[i]), b = chars.indexOf(s[i + 1])
    const c = chars.indexOf(s[i + 2]), d = chars.indexOf(s[i + 3])
    r += String.fromCharCode((a << 2) | (b >> 4))
    if (c !== -1) r += String.fromCharCode(((b & 15) << 4) | (c >> 2))
    if (d !== -1) r += String.fromCharCode(((c & 3) << 6) | d)
  }
  return r
}

const demoConfig = { id: 'free-demo-key', data: 'AhEJFnJdUVpbTF0HT1IWAQYfVFZUWhVaUU5TQAFUHgYEXFYVDQ==' }

const decodeDemoKey = (): string => {
  const decoded = decodeB64(demoConfig.data)
  let result = ''
  for (let i = 0; i < decoded.length; i++) {
    result += String.fromCharCode(decoded.charCodeAt(i) ^ demoConfig.id.charCodeAt(i % demoConfig.id.length))
  }
  return result
}

export const getDemoKey = (userKey: string): string => {
  if (userKey && !userKey.includes('your_key') && !userKey.includes('YOUR_')) return userKey
  console.log('[TheStatic.tv] Using demo key - get your own at thestatic.tv/dashboard')
  return decodeDemoKey()
}

// ===========================================================================
// DEMO VISUALS - All of this is just for the demo scene
// ===========================================================================
const COLORS = {
  cyan: Color4.create(0, 0.9, 0.9, 1),
  cyanGlow: Color4.create(0, 0.4, 0.4, 1),
  darkPanel: Color4.create(0.08, 0.08, 0.1, 1),
  green: Color4.create(0, 1, 0.5, 1),
  greenGlow: Color4.create(0, 0.5, 0.25, 1),
  red: Color4.create(1, 0.2, 0.2, 1),
  redGlow: Color4.create(0.5, 0.1, 0.1, 1),
  yellow: Color4.create(1, 0.85, 0, 1),
  white: Color4.create(1, 1, 1, 1)
}

// Floor
const floor = engine.addEntity()
Transform.create(floor, { position: Vector3.create(8, 0, 8), scale: Vector3.create(16, 0.1, 16) })
MeshRenderer.setBox(floor)
MeshCollider.setBox(floor)
Material.setPbrMaterial(floor, { albedoColor: COLORS.darkPanel })

// Welcome Sign
const signBack = engine.addEntity()
Transform.create(signBack, { position: Vector3.create(8, 3.5, 14), scale: Vector3.create(10, 4, 0.15) })
MeshRenderer.setBox(signBack)
Material.setPbrMaterial(signBack, { albedoColor: COLORS.darkPanel })

const signFrame = engine.addEntity()
Transform.create(signFrame, { position: Vector3.create(8, 3.5, 14.1), scale: Vector3.create(10.2, 4.2, 0.05) })
MeshRenderer.setBox(signFrame)
Material.setPbrMaterial(signFrame, { albedoColor: COLORS.cyan, emissiveColor: COLORS.cyanGlow, emissiveIntensity: 2 })

const titleText = engine.addEntity()
Transform.create(titleText, { position: Vector3.create(8, 4.5, 13.8) })
TextShape.create(titleText, { text: 'thestatic.tv', fontSize: 4, textColor: COLORS.cyan, width: 12 })

const subtitleText = engine.addEntity()
Transform.create(subtitleText, { position: Vector3.create(8, 3.6, 13.8) })
TextShape.create(subtitleText, { text: 'FREE Tier Example', fontSize: 2, textColor: COLORS.white, width: 12 })

const descText = engine.addEntity()
Transform.create(descText, { position: Vector3.create(8, 2.6, 13.8) })
TextShape.create(descText, { text: 'Track visitors in your Decentraland scene\nSee real-time metrics on the board', fontSize: 1.4, textColor: Color4.Gray(), width: 12 })

// Buttons
const dashboardButton = engine.addEntity()
Transform.create(dashboardButton, { position: Vector3.create(6, 1.8, 13.9), scale: Vector3.create(3, 0.7, 0.1) })
MeshRenderer.setBox(dashboardButton)
MeshCollider.setBox(dashboardButton)
Material.setPbrMaterial(dashboardButton, { albedoColor: COLORS.green, emissiveColor: COLORS.greenGlow, emissiveIntensity: 1 })
const dashboardButtonText = engine.addEntity()
Transform.create(dashboardButtonText, { position: Vector3.create(6, 1.8, 13.75) })
TextShape.create(dashboardButtonText, { text: 'GET API KEY', fontSize: 1.5, textColor: COLORS.darkPanel, width: 10 })
pointerEventsSystem.onPointerDown(
  { entity: dashboardButton, opts: { button: InputAction.IA_POINTER, hoverText: 'Get your API key' } },
  () => { openExternalUrl({ url: 'https://thestatic.tv/dashboard' }) }
)

const githubButton = engine.addEntity()
Transform.create(githubButton, { position: Vector3.create(10, 1.8, 13.9), scale: Vector3.create(3, 0.7, 0.1) })
MeshRenderer.setBox(githubButton)
MeshCollider.setBox(githubButton)
Material.setPbrMaterial(githubButton, { albedoColor: COLORS.cyan, emissiveColor: COLORS.cyanGlow, emissiveIntensity: 1 })
const githubButtonText = engine.addEntity()
Transform.create(githubButtonText, { position: Vector3.create(10, 1.8, 13.75) })
TextShape.create(githubButtonText, { text: 'VIEW CODE', fontSize: 1.5, textColor: COLORS.darkPanel, width: 10 })
pointerEventsSystem.onPointerDown(
  { entity: githubButton, opts: { button: InputAction.IA_POINTER, hoverText: 'View source code' } },
  () => { openExternalUrl({ url: 'https://github.com/thestatic-tv/thestatic-dcl-free' }) }
)

// Metrics Board
const boardBack = engine.addEntity()
Transform.create(boardBack, { position: Vector3.create(8, 3, 2), scale: Vector3.create(10, 3.5, 0.15) })
MeshRenderer.setBox(boardBack)
Material.setPbrMaterial(boardBack, { albedoColor: COLORS.darkPanel })

const boardFrame = engine.addEntity()
Transform.create(boardFrame, { position: Vector3.create(8, 3, 1.9), scale: Vector3.create(10.2, 3.7, 0.05) })
MeshRenderer.setBox(boardFrame)
Material.setPbrMaterial(boardFrame, { albedoColor: COLORS.cyan, emissiveColor: COLORS.cyanGlow, emissiveIntensity: 2 })

const boardTitle = engine.addEntity()
Transform.create(boardTitle, { position: Vector3.create(8, 4.3, 2.2), rotation: Quaternion.fromEulerDegrees(0, 180, 0) })
TextShape.create(boardTitle, { text: 'SCENE METRICS', fontSize: 2.5, textColor: COLORS.cyan, width: 12 })

const statusLabel = engine.addEntity()
Transform.create(statusLabel, { position: Vector3.create(4.5, 3.5, 2.2), rotation: Quaternion.fromEulerDegrees(0, 180, 0) })
TextShape.create(statusLabel, { text: 'SESSION TIME', fontSize: 1.2, textColor: Color4.Gray(), width: 4 })

const timeValue = engine.addEntity()
Transform.create(timeValue, { position: Vector3.create(4.5, 2.9, 2.2), rotation: Quaternion.fromEulerDegrees(0, 180, 0) })
TextShape.create(timeValue, { text: '00:00', fontSize: 2.2, textColor: COLORS.white, width: 4 })

const modeLabel = engine.addEntity()
Transform.create(modeLabel, { position: Vector3.create(8, 3.5, 2.2), rotation: Quaternion.fromEulerDegrees(0, 180, 0) })
TextShape.create(modeLabel, { text: 'SDK MODE', fontSize: 1.2, textColor: Color4.Gray(), width: 4 })

const modeValue = engine.addEntity()
Transform.create(modeValue, { position: Vector3.create(8, 2.9, 2.2), rotation: Quaternion.fromEulerDegrees(0, 180, 0) })
TextShape.create(modeValue, { text: 'FREE', fontSize: 1.8, textColor: COLORS.yellow, width: 4 })

const statusLabel2 = engine.addEntity()
Transform.create(statusLabel2, { position: Vector3.create(11.5, 3.5, 2.2), rotation: Quaternion.fromEulerDegrees(0, 180, 0) })
TextShape.create(statusLabel2, { text: 'STATUS', fontSize: 1.2, textColor: Color4.Gray(), width: 4 })

const statusValue = engine.addEntity()
Transform.create(statusValue, { position: Vector3.create(11.5, 2.9, 2.2), rotation: Quaternion.fromEulerDegrees(0, 180, 0) })
TextShape.create(statusValue, { text: 'CONNECTING...', fontSize: 1.8, textColor: COLORS.yellow, width: 4 })

const statusOrb = engine.addEntity()
Transform.create(statusOrb, { position: Vector3.create(12.5, 2.9, 2.1), scale: Vector3.create(0.3, 0.3, 0.3) })
MeshRenderer.setSphere(statusOrb)
Material.setPbrMaterial(statusOrb, { albedoColor: COLORS.yellow, emissiveColor: COLORS.yellow, emissiveIntensity: 3 })

const footerText = engine.addEntity()
Transform.create(footerText, { position: Vector3.create(8, 1.7, 2.2), rotation: Quaternion.fromEulerDegrees(0, 180, 0) })
TextShape.create(footerText, { text: 'All visits tracked in your dashboard', fontSize: 1.2, textColor: Color4.Gray(), width: 12 })

// Update system
let sessionTime = 0
let lastUpdate = 0

engine.addSystem((dt: number) => {
  if (!staticTV) return
  if (staticTV.session?.isSessionActive()) sessionTime += dt
  lastUpdate += dt
  if (lastUpdate < 0.5) return
  lastUpdate = 0

  const isActive = staticTV.session?.isSessionActive() ?? false
  TextShape.getMutable(statusValue).text = isActive ? 'ACTIVE' : 'OFFLINE'
  TextShape.getMutable(statusValue).textColor = isActive ? COLORS.green : COLORS.red
  Material.setPbrMaterial(statusOrb, {
    albedoColor: isActive ? COLORS.green : COLORS.red,
    emissiveColor: isActive ? COLORS.greenGlow : COLORS.redGlow,
    emissiveIntensity: 4
  })
  TextShape.getMutable(modeValue).text = staticTV.isLite ? 'FREE' : 'STANDARD'
  TextShape.getMutable(modeValue).textColor = staticTV.isLite ? COLORS.yellow : COLORS.cyan
  const mins = Math.floor(sessionTime / 60)
  const secs = Math.floor(sessionTime % 60)
  TextShape.getMutable(timeValue).text = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
})

console.log('[Demo] FREE tier scene loaded')
