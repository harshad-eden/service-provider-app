/* eslint-disable react/jsx-key */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './index.module.css';
import Logo from '../img/newLogo.png';
import dashboard from '../img/sidebarIcons/dashboard.png';
import dashboardActive from '../img/sidebarIcons/dashboardActive.png';
import fingerprint from '../img/sidebarIcons/fingerprint.png';
import fingerprintActive from '../img/sidebarIcons/fingerprintActive.png';
import patient from '../img/sidebarIcons/patient.png';
import patientActive from '../img/sidebarIcons/patientActive.png';
import claims from '../img/sidebarIcons/claim.png';
import claimsActive from '../img/sidebarIcons/claimsActive.png';
import payment from '../img/sidebarIcons/payment.png';
import paymentActive from '../img/sidebarIcons/dashboardActive.png';
import reports from '../img/sidebarIcons/reports.png';
import reportsActive from '../img/sidebarIcons/reportsActive.png';
import support from '../img/sidebarIcons/support.png';
import supportActive from '../img/sidebarIcons/supportActive.png';

import { RiDashboardLine } from 'react-icons/ri';

const links = [
  {
    name: 'Dashboard',
    path: '/',
    icon: dashboard,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: dashboardActive,
  },
  {
    name: 'Pre-Auths',
    path: '/pre-auths',
    icon: fingerprint,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: fingerprintActive,
  },
  {
    name: 'Inpatients',
    path: '/inpatients',
    icon: patient,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: patientActive,
  },
  {
    name: 'Claims',
    path: '/claims',
    icon: claims,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: claimsActive,
  },
  {
    name: 'Payments',
    path: '/payments',
    icon: payment,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: paymentActive,
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: reports,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: reportsActive,
  },
  {
    name: 'Support',
    path: '/support',
    icon: support,
    reactIcon: <RiDashboardLine size={24} />,
    activeIcon: supportActive,
  },
];

const SideBar = () => {
  return (
    <>
      <Link to={'/'}>
        <img src={Logo} className={styles.logo} />
      </Link>
      <div className={styles.links}>
        {links.map((item) => (
          <NavLink
            key={item.name}
            className={({ isActive }) => (isActive ? styles.linkItemActive : styles.linkItem)}
            to={item.path}
          >
            {/* <img className={styles.sidebarIcon} src={item.icon} alt="" />
            <img className={styles.sidebarIconActive} src={item.activeIcon} alt="" /> */}
            {item.reactIcon}
            <div className={styles.bottomLine} />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default SideBar;
