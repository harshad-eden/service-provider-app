import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoaderComponenet from './components/Loader';
// import { PrivateRoute } from './PrivateRoute';

const Dashboard = lazy(() => import('./components/Dashboard'));
const PreAuths = lazy(() => import('./components/PreAuths'));
const Claims = lazy(() => import('./components/Claims'));
const PreAuthPatient = lazy(() => import('./components/PreAuthPatient'));
const ClaimPatient = lazy(() => import('./components/ClaimPatient'));
const Reports = lazy(() => import('./components/Reports'));
const Support = lazy(() => import('./components/Support'));
const Payments = lazy(() => import('./components/Payments'));
const PaymentDetails = lazy(() => import('./components/PaymentDetails'));
const Inpatients = lazy(() => import('./components/Inpatient'));
const InpatientDetail = lazy(() => import('./components/InpatientDetail'));
const Login = lazy(() => import('./components/Login'));
const RestPasswordReq = lazy(() => import('./components/ResetPasswordReq'));
const RestPassword = lazy(() => import('./components/ResetPassword'));
const DocView = lazy(() => import('./components/DocView'));
const NotFound = lazy(() => import('./components/404'));

const RouteSetup = () => {
  return (
    <Suspense fallback={<LoaderComponenet />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pre-auths" element={<PreAuths />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/pre-auths/:detail" element={<PreAuthPatient />} />
        <Route path="/claims/:detail" element={<ClaimPatient />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/inpatients" element={<Inpatients />} />
        <Route path="/inpatients/:detail" element={<InpatientDetail />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/:detail" element={<PaymentDetails />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password-request" element={<RestPasswordReq />} />
        <Route path="/reset-password" element={<RestPassword />} />
        <Route path="/view/:viewDoc" element={<DocView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouteSetup;
