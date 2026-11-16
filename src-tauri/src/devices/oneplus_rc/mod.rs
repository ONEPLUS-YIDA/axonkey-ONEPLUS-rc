//! OnePlus TV RC-001A（OnePlus TV 55Q1 配套遥控器）使用其 SVG 描述符里的抓包布局。
use super::device_descriptor::DeviceDescriptor;
use std::sync::OnceLock;

pub(crate) fn descriptor() -> Option<&'static DeviceDescriptor> {
    static DESCRIPTOR: OnceLock<Option<DeviceDescriptor>> = OnceLock::new();
    super::descriptor_registry::load(
        include_str!("../../../../public/device-descriptors/oneplus-rc.svg"),
        &DESCRIPTOR,
    )
}
