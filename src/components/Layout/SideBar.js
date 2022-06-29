/* eslint-disable react/jsx-key */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './layout.module.css';
import Logo from '../../img/logo.png';
import dashboard from '../../img/sidebarIcons/dashboard.png';
import dashboardActive from '../../img/sidebarIcons/dashboardActive.png';
import fingerprint from '../../img/sidebarIcons/fingerprint.png';
import fingerprintActive from '../../img/sidebarIcons/fingerprintActive.png';
import patient from '../../img/sidebarIcons/patient.png';
import patientActive from '../../img/sidebarIcons/dashboardActive.png';
import claims from '../../img/sidebarIcons/claim.png';
import claimsActive from '../../img/sidebarIcons/dashboardActive.png';
import payment from '../../img/sidebarIcons/payment.png';
import paymentActive from '../../img/sidebarIcons/dashboardActive.png';
import reports from '../../img/sidebarIcons/reports.png';
import reportsActive from '../../img/sidebarIcons/dashboardActive.png';
import { BiSupport } from 'react-icons/bi';

const links = [
  {
    name: 'Dashboard',
    path: '/',
    icon: dashboard,
    activeIcon: dashboardActive,
  },
  {
    name: 'Pre-Auths',
    path: '/pre-auths',
    icon: fingerprint,
    activeIcon: fingerprintActive,
  },
  {
    name: 'Patients',
    path: '/patients',
    icon: patient,
    activeIcon: patientActive,
  },
  {
    name: 'Claims',
    path: '/claims',
    icon: claims,
    activeIcon: claimsActive,
  },
  {
    name: 'Payments',
    path: '/payments',
    icon: payment,
    activeIcon: paymentActive,
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: reports,
    activeIcon: reportsActive,
  },
  {
    name: 'Support',
    path: '/support',
    icon: <BiSupport />,
    activeIcon: <BiSupport color="#f87d4e" />,
  },
];

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <Link to={'/'}>
        <img src={Logo} className={styles.logo} />
      </Link>
      <div className={styles.links}>
        {links.map((item, index) => (
          <NavLink
            key={item.name}
            className={({ isActive }) => (isActive ? styles.linkItemActive : styles.linkItem)}
            to={item.path}
          >
            {index + 1 === links.length ? (
              item.icon
            ) : (
              <>
                <img className={styles.sidebarIcon} src={item.icon} alt="" />
                <img className={styles.sidebarIconActive} src={item.activeIcon} alt="" />
              </>
            )}

            <p>{item.name}</p>
            <div className={styles.bottomLine} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
