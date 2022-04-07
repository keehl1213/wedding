import React, { lazy, Suspense } from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';
import PATH, {
    APP_PREFIX,
    IFTTT_PREFIX,
    FULLPAGE_PREFIX,
} from './pathConstants';
import Authentication from './Authentication';

export const WaitingComponent = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<div>Module loading....</div>}>
            <Component {...props} />
        </Suspense>
    );

const EmptyPage = () => (
    <>Opps... Something went wrong. Please check your url path again.</>
);

/*
  Layout
*/
const App = lazy(() => import('container/App/App/App'));
const FullPage = lazy(() => import('container/App/FullPage/FullPage'));
const IFTTT = lazy(() => import('container/App/IFTTT/IFTTT'));

const routes = () => (
    <Authentication>
        <Switch>
            <Route path={APP_PREFIX} render={WaitingComponent(App)} />
            <Route path={IFTTT_PREFIX} render={WaitingComponent(IFTTT)} />
            <Route path={FULLPAGE_PREFIX} render={WaitingComponent(FullPage)} />
            <Route render={EmptyPage} />
        </Switch>
    </Authentication>
);

/*
  APP Routes
*/
const DeviceConfig = lazy(() => import('container/ProductBuild/ProductBuild'));
const DeviceType = lazy(() => import('container/DeviceType/DeviceType'));
const VehicleType = lazy(() => import('container/VehicleType/VehicleType'));
const VehicleMgmt = lazy(() => import('container/VehicleMgmt/VehicleMgmt'));
const EcuMgmt = lazy(() => import('container/EcuMgmt/EcuMgmt'));
const OtaMgmt = lazy(() => import('container/OtaMgmt/OtaMgmt'));
const Explanation = lazy(() => import('container/Explanation/Explanation'));
const DeviceMgmt = lazy(() => import('container/DeviceMgmt/DeviceMgmt'));
const StaffingMgmt = lazy(() => import('container/StaffingMgmt/StaffingMgmt'));
const OverView = lazy(() => import('container/OverView/OverView'));
const RoleMgmt = lazy(() => import('container/RoleMgmt/roleMgmt'));
const OrganizationMgmt = lazy(
    () => import('container/OrganizationMgmt/OrganizationMgmt')
);
const UserMgmt = lazy(() => import('container/UserMgmt/UserMgmt'));
const DeviceMap = lazy(() => import('container/DeviceMap/DeviceMap'));
const DeptMgmt = lazy(() => import('container/DeptMgmt/DeptMgmt'));
const FirmwareMgmt = lazy(() => import('container/FirmwareMgmt/FirmwareMgmt'));
const AirOtaMgmt = lazy(() => import('container/AirOtaMgmt/AirOtaMgmt'));
const TriggerTemplate = lazy(
    () => import('container/TriggerTemplate/TriggerTemplate')
);
const TriggerAction = lazy(
    () => import('container/TriggerAction/TriggerAction')
);
const TriggerRule = lazy(() => import('container/TriggerRule/TriggerRule'));
const VendorMgmt = lazy(() => import('container/VendorMgmt/VendorMgmt'));
const GroupsDeviceMgmt = lazy(
    () => import('container/GroupsDeviceMgmt/GroupsDeviceMgmt')
);
const MobileDeviceMgmt = lazy(
    () => import('container/MobileDeviceMgmt/MobileDeviceMgmt')
);

const appRoutes: RouteProps[] = [
    { path: PATH.OVERVIEW, render: WaitingComponent(OverView) },
    { path: PATH.PERMISSION_MGM, render: WaitingComponent(RoleMgmt) },
    { path: PATH.ACCOUNT_MGM, render: WaitingComponent(UserMgmt) },
    { path: PATH.TENANT_MGM, render: WaitingComponent(OrganizationMgmt) },
    { path: PATH.DEVICE_TYPE_MGM, render: WaitingComponent(DeviceType) },
    { path: PATH.DEVICE_CONFIG, render: WaitingComponent(DeviceConfig) },
    { path: PATH.DEVICE_MGM, render: WaitingComponent(DeviceMgmt) },
    { path: PATH.DEPARTMENT, render: WaitingComponent(DeptMgmt) },
    { path: PATH.DEVICE_MAP, render: WaitingComponent(DeviceMap) },
    { path: PATH.VEHICLE_TYPE_MGM, render: WaitingComponent(VehicleType) },
    { path: PATH.VEHICLE_MGM, render: WaitingComponent(VehicleMgmt) },
    { path: PATH.ECU_MGM, render: WaitingComponent(EcuMgmt) },
    { path: PATH.OTA_MGM, render: WaitingComponent(OtaMgmt) },
    { path: PATH.EXPLANATION, render: WaitingComponent(Explanation) },
    { path: PATH.STAFFING_MGM, render: WaitingComponent(StaffingMgmt) },
    { path: PATH.FIRMWARE_MGM, render: WaitingComponent(FirmwareMgmt) },
    { path: PATH.AIR_OTA_MGM, render: WaitingComponent(AirOtaMgmt) },
    { path: PATH.TRIGGER_TEMPLATE, render: WaitingComponent(TriggerTemplate) },
    { path: PATH.TRIGGER_ACTION, render: WaitingComponent(TriggerAction) },
    { path: PATH.TRIGGER_RULE, render: WaitingComponent(TriggerRule) },
    { path: PATH.VENDOR_MGM, render: WaitingComponent(VendorMgmt) },
    {
        path: PATH.GROUPS_DEVICE_MGM,
        render: WaitingComponent(GroupsDeviceMgmt),
    },
    {
        path: PATH.MOBILE_DEVICE_MGM,
        render: WaitingComponent(MobileDeviceMgmt),
    },
    { render: WaitingComponent(OverView) },
];

export const AppRoutes = () => (
    <Switch>
        {appRoutes.map((config) => (
            <Route key={`route_${config.path}`} exact {...config} />
        ))}
    </Switch>
);

/*
  IFTTT Routes
*/
const IftttHome = lazy(() => import('container/IftttHome/IftttHome'));

const iftttRoutes: RouteProps[] = [
    { path: PATH.IFTTT_HOME, render: WaitingComponent(IftttHome) },
];

export const IftttRoutes = () => (
    <Switch>
        {iftttRoutes.map((config) => (
            <Route key={`route_${config.path}`} exact {...config} />
        ))}
    </Switch>
);

/*
  FULLPAGE Routes
*/
const Login = lazy(() => import('container/Login/Login'));

const fullpageRoutes: RouteProps[] = [
    { path: PATH.LOGIN, render: WaitingComponent(Login) },
    { render: EmptyPage },
];

export const FullpageRoutes = () => (
    <Switch>
        {fullpageRoutes.map((config) => (
            <Route key={`route_${config.path}`} exact {...config} />
        ))}
    </Switch>
);

export default routes;
