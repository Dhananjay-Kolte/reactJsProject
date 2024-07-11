import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const SuccessFace: FC<ISvgProps> = ({ width = '40', height = '40' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 0.5C1/6.1433 0.5 12.3731 1.64366 9.16639 3.78634C5.95963 5.92903 3.46027 8.97451 1.98436 12.5377C0.508449 16.1008 0.122284 20.0216 0.874696 23.8043C1.62711 27.5869 3.4843 31.0615 6.21143 33.7886C8.93855 36.5157 12.4131 38.3729 16.1957 39.1253C19.9784 39.8777 23.8992 39.4916 27.4623 38.0156C31.0255 36.5397 34.071 34.0404 36.2137 30.8336C38.3564 27.6269 39.5 23.8567 39.5 20C39.4901 14.8313 37.4325 9.87718 33.7776 6.22237C30.1228 2.56755 25.1687 0.509911 20 0.5ZM26.75 14C27.195 14 27.63 14.132 28 14.3792C28.3701 14.6264 28.6584 14.9778 28.8287 15.389C28.999 15.8001 29.0436 16.2525 28.9568 16.689C28.87 17.1254 28.6557 17.5263 28.341 17.841C28.0263 18.1557 27.6254 18.37 27.189 18.4568C26.7525 18.5436 26.3001 18.499 25.889 18.3287C25.4778 18.1584 25.1264 17.87 24.8792 17.5C24.632 17.13 24.5 16.695 24.5 16.25C24.5 15.6533 24.7371 15.081 25.159 14.659C25.581 14.2371 26.1533 14 26.75 14ZM13.25 14C13.695 14 14.13 14.132 14.5 14.3792C14.8701 14.6264 15.1584 14.9778 15.3287 15.389C15.499 15.8001 15.5436 16.2525 15.4568 16.689C15.37 17.1254 15.1557 17.5263 14.841 17.841C14.5263 18.1557 14.1254 18.37 13.689 18.4568C13.2525 18.5436 12.8001 18.499 12.389 18.3287C11.9778 18.1584 11.6264 17.87 11.3792 17.5C11.132 17.13 11 16.695 11 16.25C11 15.6533 11.2371 15.081 11.659 14.659C12.081 14.2371 12.6533 14 13.25 14ZM29.0938 25.25C28.1723 26.8464 26.8467 28.1721 25.2504 29.0939C23.6541 30.0156 21.8433 30.5008 20 30.5008C18.1567 30.5008 16.3459 30.0156 14.7496 29.0939C13.1533 28.1721 11.8278 26.8464 10.9063 25.25C10.7889 25.0797 10.708 24.8869 10.6686 24.6839C10.6293 24.4808 10.6324 24.2718 10.6778 24.0699C10.7231 23.8681 10.8097 23.6779 10.9321 23.5111C11.0545 23.3444 11.21 23.2047 11.389 23.101C11.5679 22.9972 11.7664 22.9316 11.9719 22.9083C12.1775 22.8849 12.3856 22.9043 12.5833 22.9653C12.7809 23.0262 12.9639 23.1274 13.1206 23.2625C13.2772 23.3975 13.4043 23.5635 13.4938 23.75C14.1544 24.8906 15.1032 25.8374 16.2451 26.4957C17.387 27.1539 18.6819 27.5004 20 27.5004C21.3181 27.5004 22.613 27.1539 23.7549 26.4957C24.8968 25.8374 25.8457 24.8906 26.5063 23.75C26.7205 23.4391 27.0442 23.2205 27.4125 23.1378C27.7809 23.055 28.1669 23.1142 28.4936 23.3036C28.8202 23.4929 29.0634 23.7985 29.1747 24.1593C29.2859 24.5201 29.257 24.9096 29.0938 25.25Z'
      fill='#5BEAFF'
    />
  </svg>
);
const SuccessFaceSVG = memo(SuccessFace);
export default SuccessFaceSVG;