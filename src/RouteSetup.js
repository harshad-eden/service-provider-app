import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoaderComponenet from './components/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const PreAuths = lazy(() => import('./pages/PreAuths'));
const Claims = lazy(() => import('./pages/Claims'));
const PreAuthPatient = lazy(() => import('./pages/PreAuthPatient'));
const ClaimPatient = lazy(() => import('./pages/ClaimPatient'));
const Reports = lazy(() => import('./pages/Reports'));
const Support = lazy(() => import('./pages/Support'));
const Payments = lazy(() => import('./pages/Payments'));
const PaymentDetails = lazy(() => import('./pages/PaymentDetails'));
const Inpatients = lazy(() => import('./pages/Inpatient'));
const InpatientDetail = lazy(() => import('./pages/InpatientDetail'));
const Login = lazy(() => import('./pages/Login'));
const RestPassword = lazy(() => import('./pages/RestPassword'));
const DocView = lazy(() => import('./pages/DocView'));
const NotFound = lazy(() => import('./pages/404'));

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
        <Route path="/reset-password" element={<RestPassword />} />
        <Route path="/view/:viewdoc" element={<DocView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouteSetup;
