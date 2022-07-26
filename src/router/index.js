import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoaderComponenet from '../components/Common/Loader';
import { PrivateRoute } from './PrivateRoute';

const Dashboard = lazy(() => import('../components/Dashboard'));
const PreAuths = lazy(() => import('../components/PreAuths'));
const Claims = lazy(() => import('../components/Claims'));
const PreAuthPatient = lazy(() => import('../components/PreAuthPatient'));
const ClaimPatient = lazy(() => import('../components/ClaimPatient'));
const Reports = lazy(() => import('../components/Reports'));
const Support = lazy(() => import('../components/Support'));
const Payments = lazy(() => import('../components/Payments'));
const PaymentDetails = lazy(() => import('../components/PaymentDetails'));
const Inpatients = lazy(() => import('../components/Inpatient'));
const InpatientDetail = lazy(() => import('../components/InpatientDetail'));
const Login = lazy(() => import('../components/Login'));
const RestPasswordReq = lazy(() => import('../components/ResetPasswordReq'));
const RestPassword = lazy(() => import('../components/ResetPassword'));
const DocView = lazy(() => import('../components/DocView'));
const NotFound = lazy(() => import('../components/404'));

const RouteSetup = () => {
  return (
    <Suspense fallback={<LoaderComponenet />}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/pre-auths"
          element={
            <PrivateRoute>
              <PreAuths />
            </PrivateRoute>
          }
        />
        <Route
          path="/claims"
          element={
            <PrivateRoute>
              <Claims />
            </PrivateRoute>
          }
        />
        <Route
          path="/pre-auths/:id"
          element={
            <PrivateRoute>
              <PreAuthPatient />
            </PrivateRoute>
          }
        />
        <Route
          path="/claims/:id"
          element={
            <PrivateRoute>
              <ClaimPatient />
            </PrivateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <Reports />
            </PrivateRoute>
          }
        />
        <Route
          path="/inpatients"
          element={
            <PrivateRoute>
              <Inpatients />
            </PrivateRoute>
          }
        />
        <Route
          path="/inpatients/:id"
          element={
            <PrivateRoute>
              <InpatientDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/payments"
          element={
            <PrivateRoute>
              <Payments />
            </PrivateRoute>
          }
        />
        <Route
          path="/payments/:detail"
          element={
            <PrivateRoute>
              <PaymentDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/support"
          element={
            <PrivateRoute>
              <Support />
            </PrivateRoute>
          }
        />
        <Route
          path="/view/:viewDoc"
          element={
            <PrivateRoute>
              <DocView />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password-request" element={<RestPasswordReq />} />
        <Route path="/reset-password" element={<RestPassword />} />

        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFound />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default RouteSetup;
