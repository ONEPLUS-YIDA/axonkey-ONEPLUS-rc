import { createDescriptorView, type DescriptorInputId } from '../shared/descriptorSvg.ts'

export type OneplusRcRemoteButtonId = DescriptorInputId<'oneplus-rc'>
export const oneplusRcRemoteView = createDescriptorView('oneplus-rc')
export const oneplusRcRemoteButtons = oneplusRcRemoteView.buttons
export const oneplusRcRemoteButtonIds = oneplusRcRemoteButtons.map(button => button.id)
