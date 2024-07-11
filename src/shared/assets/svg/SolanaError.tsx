import { FC, memo } from 'react';
import { ISvgProps } from './types';

const SolanaErrorSVG: FC<ISvgProps> = ({ width = '81', height = '74' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 81 74'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='69.499' cy='62.4287' r='11' fill='#FA1157' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M66.0541 57.0334C65.5154 56.4947 64.642 56.4947 64.1033 57.0334C63.5645 57.5721 63.5645 58.4456 64.1033 58.9843L67.5475 62.4285L64.1033 65.8727C63.5645 66.4114 63.5645 67.2849 64.1033 67.8236C64.642 68.3623 65.5154 68.3623 66.0541 67.8236L69.4983 64.3794L72.9425 67.8236C73.4813 68.3623 74.3547 68.3623 74.8934 67.8236C75.4321 67.2849 75.4321 66.4114 74.8934 65.8727L71.4492 62.4285L74.8934 58.9843C75.4321 58.4456 75.4321 57.5721 74.8934 57.0334C74.3547 56.4947 73.4813 56.4947 72.9425 57.0334L69.4983 60.4776L66.0541 57.0334Z'
      fill='#121212'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M74.2134 48.6508C75.6909 44.7151 76.499 40.4519 76.499 36C76.499 16.1177 60.3813 0 40.499 0C20.6168 0 4.49902 16.1177 4.49902 36C4.49902 55.8823 20.6168 72 40.499 72C46.1659 72 51.527 70.6906 56.2963 68.3579C55.2403 66.3771 54.6419 64.1156 54.6419 61.7143C54.6419 53.9034 60.9739 47.5714 68.7847 47.5714C70.7081 47.5714 72.5418 47.9554 74.2134 48.6508Z'
      fill='#282828'
    />
    <path
      d='M30.085 41.6668C30.2738 41.4862 30.5298 41.3848 30.7967 41.3848H55.423C55.8716 41.3848 56.0962 41.904 55.7788 42.2075L50.9128 46.8609C50.724 47.0414 50.468 47.1429 50.201 47.1429H25.5747C25.1262 47.1429 24.9016 46.6237 25.2189 46.3202L30.085 41.6668Z'
      fill='url(#paint0_linear_4356_66976)'
    />
    <path
      d='M30.085 24.282C30.2738 24.1014 30.5298 24 30.7967 24H55.423C55.8716 24 56.0962 24.5192 55.7788 24.8227L50.9128 29.4761C50.7239 29.6566 50.468 29.758 50.201 29.758H25.5747C25.1262 29.758 24.9016 29.2388 25.2189 28.9354L30.085 24.282Z'
      fill='url(#paint1_linear_4356_66976)'
    />
    <path
      d='M50.9128 32.919C50.7239 32.7385 50.468 32.6371 50.201 32.6371H25.5747C25.1262 32.6371 24.9016 33.1562 25.2189 33.4597L30.085 38.1131C30.2738 38.2937 30.5298 38.3951 30.7967 38.3951H55.423C55.8716 38.3951 56.0962 37.8759 55.7788 37.5724L50.9128 32.919Z'
      fill='url(#paint2_linear_4356_66976)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_4356_66976'
        x1='45.9316'
        y1='17.6518'
        x2='30.0344'
        y2='49.4677'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00FFA3' />
        <stop offset='1' stopColor='#DC1FFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_4356_66976'
        x1='45.9316'
        y1='17.6518'
        x2='30.0344'
        y2='49.4677'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00FFA3' />
        <stop offset='1' stopColor='#DC1FFF' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_4356_66976'
        x1='45.9316'
        y1='17.6518'
        x2='30.0344'
        y2='49.4677'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00FFA3' />
        <stop offset='1' stopColor='#DC1FFF' />
      </linearGradient>
    </defs>
  </svg>
);
const SolanaError = memo(SolanaErrorSVG);
export default SolanaError;
