import type { DeviceSupportPackage } from '../types.ts'
import { oneplusRcRemoteView } from './view.ts'

export const oneplusRcSupportPackage: DeviceSupportPackage = {
  kind: 'oneplusRc',
  name: 'OnePlus TV 遥控器',
  model: 'RC-001A',
  artwork: oneplusRcRemoteView.artworkUrl,
  inputs: oneplusRcRemoteView.buttons,
  remoteView: oneplusRcRemoteView,
}
