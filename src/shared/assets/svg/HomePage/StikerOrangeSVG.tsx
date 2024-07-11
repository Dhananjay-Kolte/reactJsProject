import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const StikerOrange: FC<ISvgProps> = ({ width = '271', height = '272' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d_244_28802)'>
      <circle cx='135.527' cy='116.174' r='75.2154' fill='#FF6C01' />
    </g>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M133.605 100.688C134.175 99.1328 135.899 98.334 137.454 98.9042L145.734 101.939C147.29 102.51 148.088 104.233 147.518 105.789L143.72 116.15L151.296 118.927C153.831 119.857 153.944 123.4 151.473 124.489L131.392 133.338C129.875 134.006 128.103 133.318 127.436 131.8L118.937 112.475C117.873 110.054 120.233 107.54 122.716 108.45L129.807 111.05L133.605 100.688ZM137.016 103.004L133.218 113.365C132.648 114.921 130.924 115.72 129.369 115.149L123.544 113.014L130.695 129.274L147.59 121.829L141.404 119.561C139.849 118.991 139.05 117.268 139.62 115.712L143.418 105.351L137.016 103.004Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M160.117 67.5683L158.276 66.2183C157.799 66.8647 157.133 67.3482 156.371 67.6029C155.555 67.8262 154.688 67.7626 153.913 67.4227C153.176 67.1813 152.532 66.7164 152.07 66.0925C151.659 65.5065 151.437 64.8089 151.434 64.0932C151.432 63.2467 151.597 62.4081 151.918 61.6251C152.207 60.829 152.645 60.0955 153.209 59.4643C153.694 58.9362 154.325 58.5655 155.023 58.4004C155.775 58.2537 156.555 58.3345 157.261 58.6326C158.06 58.9041 158.744 59.4378 159.201 60.147C159.605 60.8472 159.778 61.6566 159.696 62.4606L161.946 62.6842C162.047 61.43 161.74 60.1766 161.072 59.1107C160.346 57.984 159.265 57.1325 157.999 56.6919C156.926 56.2271 155.745 56.0726 154.588 56.2459C153.522 56.4767 152.545 57.0109 151.775 57.7841C150.905 58.6323 150.235 59.6648 149.817 60.8057C149.356 61.9351 149.162 63.1556 149.249 64.3723C149.328 65.4527 149.723 66.4862 150.384 67.3444C151.102 68.2521 152.06 68.94 153.15 69.3298C154.377 69.8533 155.742 69.9574 157.034 69.626C158.255 69.2864 159.335 68.5654 160.117 67.5683ZM171.916 78.5207L167.503 74.8676L174.463 66.449L172.798 65.0714L164.533 75.0542L170.612 80.0848L171.916 78.5207ZM174.939 85.2745L185.37 77.5838L186.658 79.3304L176.226 87.0211L174.939 85.2745ZM183.147 92.4241C182.39 93.2047 181.876 94.1887 181.668 95.2562C181.468 96.406 181.593 97.5886 182.028 98.6717C182.447 99.9267 183.26 101.013 184.346 101.768C185.409 102.437 186.655 102.755 187.908 102.678L187.71 100.413C186.908 100.487 186.102 100.307 185.407 99.9002C184.694 99.441 184.164 98.7475 183.909 97.9394C183.619 97.2277 183.545 96.4463 183.698 95.6931C183.868 94.9989 184.245 94.3728 184.78 93.8982C185.418 93.3347 186.16 92.9007 186.964 92.6206C187.754 92.317 188.596 92.1668 189.442 92.1782C190.155 92.1929 190.849 92.4168 191.436 92.8221C192.046 93.2876 192.5 93.9273 192.739 94.6566C193.073 95.4343 193.127 96.3041 192.891 97.1171C192.633 97.8838 192.14 98.5498 191.482 99.0205L192.815 100.859C193.825 100.101 194.57 99.0449 194.945 97.8395C195.289 96.5509 195.198 95.1849 194.686 93.9532C194.313 92.8445 193.634 91.8641 192.727 91.1252C191.873 90.4565 190.843 90.0518 189.762 89.961C188.55 89.869 187.332 90.0547 186.202 90.504C185.05 90.9008 184.004 91.5578 183.147 92.4241ZM191.405 112.807L185.364 112.884L185.334 110.722L198.294 110.561L198.324 112.724L192.313 112.805L198.384 117.895L198.419 120.562L191.996 115.073L185.459 121.106L185.426 118.349L191.405 112.807ZM190.135 132.004C189.828 131.663 189.438 131.407 189.003 131.262C188.568 131.117 188.102 131.087 187.652 131.175C187.218 131.268 186.817 131.477 186.493 131.78C186.151 132.09 185.898 132.485 185.759 132.925C185.623 133.338 185.597 133.779 185.682 134.206C185.778 134.643 185.986 135.048 186.285 135.381C186.585 135.713 186.966 135.962 187.391 136.103C187.825 136.253 188.291 136.283 188.741 136.189C189.167 136.102 189.562 135.903 189.885 135.613C190.216 135.321 190.46 134.945 190.592 134.525C190.745 134.102 190.783 133.646 190.703 133.203C190.623 132.761 190.427 132.347 190.135 132.004ZM180.085 144.991C181.267 145.28 182.367 145.834 183.302 146.612C184.259 147.373 185.029 148.343 185.553 149.448C186.021 150.407 186.203 151.481 186.077 152.542C185.873 153.689 185.385 154.767 184.656 155.676C183.928 156.585 182.982 157.297 181.907 157.745C180.887 158.112 179.782 158.174 178.727 157.924C177.56 157.605 176.472 157.05 175.53 156.291C174.588 155.533 173.812 154.589 173.252 153.517C172.776 152.539 172.597 151.442 172.736 150.363C172.94 149.216 173.428 148.138 174.157 147.229C174.885 146.32 175.831 145.608 176.906 145.16C177.927 144.796 179.032 144.737 180.085 144.991ZM181.265 155.714C181.99 155.467 182.625 155.009 183.09 154.4C183.596 153.826 183.915 153.111 184.004 152.351C184.061 151.628 183.899 150.904 183.539 150.273C183.112 149.54 182.545 148.897 181.871 148.381C181.225 147.834 180.476 147.421 179.67 147.165C178.99 146.955 178.262 146.955 177.582 147.165C176.857 147.412 176.221 147.87 175.756 148.479C175.248 149.056 174.929 149.774 174.842 150.538C174.783 151.261 174.945 151.986 175.306 152.616C175.737 153.347 176.303 153.989 176.975 154.508C177.621 155.052 178.37 155.462 179.177 155.714C179.858 155.919 180.584 155.92 181.265 155.714ZM163.527 157.56L168.23 165.396L158.383 160.649L156.49 161.783L163.166 172.893L165.047 171.767L160.344 163.931L170.203 168.67L172.084 167.544L165.41 156.425L163.527 157.56ZM146.595 168.497C147.017 168.637 147.394 168.884 147.691 169.215C147.98 169.549 148.174 169.954 148.254 170.388C148.346 170.841 148.312 171.311 148.157 171.747C147.93 172.381 147.466 172.901 146.863 173.199C146.259 173.497 145.563 173.547 144.923 173.341C144.501 173.191 144.127 172.933 143.837 172.592C143.547 172.251 143.351 171.84 143.27 171.4C143.179 170.962 143.205 170.507 143.348 170.083C143.49 169.658 143.743 169.279 144.08 168.985C144.409 168.695 144.812 168.5 145.243 168.421C145.693 168.327 146.159 168.353 146.595 168.497ZM129.301 165.943L127.154 165.622L125.558 176.436L121.413 175.824L121.12 177.833L131.559 179.369L131.852 177.36L127.706 176.747L129.301 165.943ZM107.164 164.329L112.63 167.101L115.114 162.222L117.043 163.201L111.185 174.759L109.246 173.779L111.717 168.918L106.241 166.145L103.779 171.007L101.85 170.028L107.708 158.47L109.637 159.449L107.164 164.329ZM94.6143 149.386L98.9453 153.825L96.321 156.386L92.7473 152.712L91.2905 154.135L94.8655 157.799L92.5768 160.031L88.2458 155.592L86.7903 157.006L92.6318 163.004L101.913 153.961L96.0711 147.963L94.6143 149.386ZM84.8545 137.651C85.3024 137.684 85.7345 137.831 86.1098 138.078C86.4725 138.325 86.7653 138.662 86.9601 139.056C87.163 139.471 87.2557 139.931 87.2292 140.392C87.2003 140.833 87.0577 141.259 86.8153 141.629C86.5621 142.01 86.2083 142.313 85.7932 142.504C85.3902 142.709 84.9387 142.799 84.4879 142.765C84.0372 142.731 83.6044 142.574 83.2367 142.311C82.8606 142.045 82.5601 141.686 82.3644 141.269C82.1699 140.877 82.081 140.441 82.1063 140.004C82.1316 139.567 82.2703 139.144 82.5088 138.777C82.7679 138.398 83.1244 138.096 83.5408 137.903C83.9475 137.701 84.4018 137.614 84.8545 137.651ZM85.3137 120.718C85.2358 119.387 84.7166 118.12 83.8382 117.116C82.9911 116.188 81.868 115.557 80.6347 115.316L80.2412 117.554C81.0392 117.682 81.7745 118.064 82.3374 118.645C82.9017 119.272 83.2346 120.073 83.2808 120.916C83.3853 121.68 83.2555 122.458 82.9085 123.147C82.5619 123.773 82.0353 124.28 81.3969 124.603C80.6408 124.992 79.8147 125.227 78.9668 125.294C78.1266 125.391 77.2753 125.321 76.4625 125.087C75.7703 124.898 75.1532 124.501 74.6952 123.948C74.2247 123.338 73.9519 122.599 73.9134 121.829C73.7931 120.991 73.9652 120.138 74.4009 119.412C74.8435 118.739 75.4903 118.226 76.2462 117.949L75.4346 115.826C74.2715 116.3 73.29 117.132 72.6328 118.203C71.9633 119.358 71.6986 120.704 71.8805 122.027C71.9589 123.193 72.3606 124.314 73.0405 125.265C73.6975 126.127 74.5885 126.783 75.6073 127.154C76.7545 127.556 77.9784 127.692 79.186 127.551C80.402 127.461 81.5814 127.095 82.6341 126.479C83.5617 125.918 84.3089 125.102 84.787 124.128C85.2807 123.064 85.4633 121.882 85.3137 120.718ZM82.9796 105.708L85.4728 107.235L84.9371 109.403L73.3363 102.33L74.0918 99.2515L87.6788 98.3859L87.1443 100.545L84.2035 100.745L82.9796 105.708ZM75.7484 101.314L81.108 104.596L82.0569 100.888L75.7484 101.314ZM90.1359 81.8348C89.7687 80.9337 89.1222 80.174 88.2914 79.6674C87.741 79.3074 87.1269 79.0559 86.4822 78.9265C85.879 78.805 85.2545 78.8451 84.6718 79.0428C84.0343 79.2821 83.4685 79.6802 83.028 80.1994C82.9295 80.305 82.8362 80.4255 82.7372 80.5535L82.6795 80.6278C82.5583 80.7834 82.4694 80.9231 82.4056 81.0257L79.4612 85.5723L90.3389 92.6222L91.5303 90.761L87.7342 88.2476L89.4134 85.6635L94.3712 86.3118L95.7002 84.2467L90.2664 83.5361C90.3792 82.9678 90.3341 82.3794 90.1359 81.8348ZM88.0865 83.8562C88.046 83.99 87.9886 84.118 87.9157 84.2372C87.8695 84.3745 87.8149 84.5089 87.7521 84.6394L86.0604 87.2421L82.3543 84.811L84.0362 82.2071L84.2613 81.8735C84.3467 81.7638 84.441 81.6614 84.5434 81.5675C84.7811 81.3321 85.0826 81.1717 85.4105 81.106C85.7078 81.0597 86.0116 81.0788 86.3008 81.1619C86.6009 81.2429 86.887 81.3687 87.1496 81.5351C87.3867 81.6921 87.5996 81.883 87.7814 82.1018C87.9804 82.328 88.1214 82.5991 88.1925 82.8918C88.2528 83.2167 88.2159 83.5521 88.0865 83.8562ZM104.132 76.3634L103.627 76.7612L100.361 79.2891L92.4228 69.0433L95.698 66.5167C95.7644 66.4582 95.8987 66.3599 96.0896 66.2201L96.0898 66.22L96.0899 66.2199L96.2125 66.1301C96.4602 65.9405 96.7188 65.7655 96.987 65.6061C97.807 65.1048 98.7541 64.8505 99.715 64.8736C100.662 64.9177 101.583 65.2012 102.391 65.6975C103.276 66.2298 104.051 66.9268 104.674 67.7509C105.317 68.5663 105.801 69.4951 106.101 70.489C106.378 71.3968 106.418 72.3601 106.219 73.288C106.004 74.2226 105.521 75.0742 104.829 75.7385C104.61 75.9518 104.382 76.1539 104.132 76.3634ZM97.5269 67.724L96.9689 68.1351L95.4242 69.3047L100.846 76.3572L102.372 75.1751C102.497 75.0867 102.641 74.9632 102.818 74.8126L102.818 74.8125L102.903 74.7402C103.095 74.5814 103.275 74.4096 103.444 74.2261C103.839 73.7951 104.078 73.2439 104.122 72.6608C104.164 72.0459 104.065 71.4296 103.834 70.8582C103.596 70.2445 103.27 69.6686 102.867 69.1484C102.458 68.6184 101.976 68.1481 101.436 67.7511C100.951 67.3991 100.393 67.1607 99.8031 67.0534C99.2405 66.9667 98.665 67.0649 98.163 67.3332C97.9403 67.4453 97.7276 67.5761 97.5269 67.724ZM119.446 68.4726C120.058 68.2678 120.641 67.9846 121.18 67.6303C121.681 67.2969 122.121 66.8803 122.481 66.3985C122.819 65.937 123.047 65.4047 123.148 64.8419C123.25 64.2333 123.196 63.6088 122.992 63.0264C122.837 62.4989 122.554 62.0183 122.167 61.6275C121.83 61.3135 121.426 61.0812 120.985 60.9485C120.568 60.834 120.138 60.7777 119.706 60.7813C119.377 60.7383 119.072 60.7611 118.798 60.7814C118.724 60.7869 118.653 60.7922 118.584 60.796L116.169 60.9138C115.863 60.9352 115.556 60.9356 115.251 60.9148C114.962 60.8991 114.679 60.8209 114.424 60.6856C114.296 60.6218 114.183 60.5314 114.093 60.4205C114.004 60.3096 113.938 60.1807 113.903 60.0426C113.801 59.7338 113.816 59.3985 113.945 59.1001C114.092 58.7715 114.321 58.4856 114.608 58.2691C114.93 58.0133 115.297 57.8217 115.691 57.7047C116.101 57.5767 116.532 57.527 116.96 57.5581C117.379 57.592 117.783 57.7243 118.14 57.9444C118.509 58.1721 118.815 58.4896 119.028 58.8673L121.102 57.7366C120.705 57.083 120.164 56.5291 119.519 56.1177C118.895 55.725 118.184 55.4934 117.449 55.4436C116.638 55.3839 115.823 55.4938 115.057 55.7661C114.266 55.9973 113.53 56.3845 112.891 56.9049C112.318 57.3545 111.889 57.9604 111.654 58.6493C111.429 59.3671 111.448 60.1396 111.71 60.8451C111.856 61.3165 112.102 61.751 112.431 62.1193C112.713 62.4124 113.054 62.6426 113.432 62.7948C113.776 62.931 114.139 63.0158 114.508 63.0465C114.842 63.075 115.178 63.0851 115.513 63.077L118.998 62.9578C119.225 62.9475 119.453 62.9604 119.678 62.9964C119.864 63.0242 120.044 63.0817 120.211 63.1669C120.357 63.2418 120.487 63.3445 120.595 63.4692C120.703 63.6016 120.785 63.7525 120.839 63.9147C120.965 64.2678 120.95 64.6559 120.798 64.9985C120.625 65.3567 120.37 65.669 120.054 65.9097C119.702 66.1795 119.306 66.387 118.884 66.5232C118.19 66.7685 117.435 66.7864 116.729 66.5743C116.02 66.366 115.415 65.898 115.035 65.2635L113.014 66.3002C113.377 67.0217 113.922 67.6355 114.596 68.0804C115.26 68.5163 116.025 68.7759 116.817 68.8347C117.709 68.9014 118.605 68.778 119.446 68.4726ZM138.566 60.0671C138.558 60.5243 138.43 60.9712 138.195 61.3636C137.972 61.7394 137.653 62.0493 137.271 62.2615C136.889 62.4738 136.457 62.5808 136.02 62.5718C135.551 62.5695 135.091 62.4432 134.686 62.2057C134.316 61.9786 134.011 61.661 133.798 61.2828C133.568 60.8849 133.456 60.4294 133.476 59.9699C133.473 59.5091 133.602 59.0571 133.848 58.6672C134.081 58.2931 134.41 57.988 134.801 57.7832C135.203 57.5678 135.655 57.4634 136.111 57.4806C136.55 57.4835 136.98 57.606 137.355 57.8349C137.728 58.0584 138.034 58.3769 138.243 58.7578C138.463 59.1586 138.575 59.61 138.566 60.0671Z'
      fill='black'
    />
    <defs>
      <filter
        id='filter0_d_244_28802'
        x='0.311768'
        y='0.95874'
        width='270.431'
        height='270.431'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='20' />
        <feGaussianBlur stdDeviation='30' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_244_28802'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_244_28802'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export const StikerOrangeSVG = memo(StikerOrange);
