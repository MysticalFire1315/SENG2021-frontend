// import React from 'react';

// const Header = () => {
//   return (
//     <header class="header">
//       <h1 style={{ fontSize: '50px' }}>Elegant Builders</h1>
//       <p
//         style={{
//           color: '#243762',
//           fontWeight: 'normal',
//           marginTop: '15px',
//           fontSize: '20px',
//         }}
//       >
//         Bringing the responsive E-invoice creation service directly into the
//         professional&apos;s hands...
//       </p>
//     </header>
//   );
// };
// export default Header;


import React from 'react';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header class="header">
      <h1 className={styles.heading}>Elegant Builders</h1>
      <p className={styles.description}>
        Bringing the responsive E-invoice creation service directly into the
        professional&apos;s hands...
      </p>
    </header>
  );
};
export default Header;
