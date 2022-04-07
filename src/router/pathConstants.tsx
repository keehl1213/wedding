export const APP_PREFIX = '/app';
export const IFTTT_PREFIX = '/ifttt';
export const FULLPAGE_PREFIX = '/';

export const ACCOUNT = {
    TENANT_MGM: `${APP_PREFIX}/organization-management`,
    PERMISSION_MGM: `${APP_PREFIX}/role-management`,
    ACCOUNT_MGM: `${APP_PREFIX}/user-management`,
    STAFFING_MGM: `${APP_PREFIX}/staffing-management`,
    VENDOR_MGM: `${APP_PREFIX}/vendor-management`,
};

export const DEVICE = {
    DEVICE_TYPE_MGM: `${APP_PREFIX}/device-type`,
    DEVICE_CONFIG: `${APP_PREFIX}/device-config`,
    GROUPS_DEVICE_MGM: `${APP_PREFIX}/groups-device-management`,
    DEVICE_MGM: `${APP_PREFIX}/device-management`,
    MOBILE_DEVICE_MGM: `${APP_PREFIX}/mobile-device-management`,
    DEVICE_MAP: `${APP_PREFIX}/device-map`,
};

export const AIR_PROGRAM = {
    FIRMWARE_MGM: `${APP_PREFIX}/firmware-management`,
    AIR_OTA_MGM: `${APP_PREFIX}/air-ota-management`,
};

export const TEMPLATE = {
    TRIGGER_TEMPLATE: `${APP_PREFIX}/trigger-template`,
    TRIGGER_ACTION: `${APP_PREFIX}/trigger-action`,
    TRIGGER_RULE: `${APP_PREFIX}/trigger-rule`,
};

export const OTA = {
    VEHICLE_TYPE_MGM: `${APP_PREFIX}/vehicle-type`,
    ECU_MGM: `${APP_PREFIX}/ecu-management`,
    VEHICLE_MGM: `${APP_PREFIX}/vehicle-management`,
    OTA_MGM: `${APP_PREFIX}/ota-management`,
};

export const IFTTT = {
    IFTTT_HOME: IFTTT_PREFIX,
};

const PATH = {
    LOGIN: '/',
    OVERVIEW: `${APP_PREFIX}/overview`,
    DEPARTMENT: `${APP_PREFIX}/department`,
    EXPLANATION: `${APP_PREFIX}/explanation`,
    ...ACCOUNT,
    ...DEVICE,
    ...AIR_PROGRAM,
    ...TEMPLATE,
    ...OTA,
    ...IFTTT,
};

export const keyMap = Object.keys(PATH).reduce(
    (prv, cur) => ({ ...prv, [PATH[cur]]: cur }),
    {}
);

export default PATH;
