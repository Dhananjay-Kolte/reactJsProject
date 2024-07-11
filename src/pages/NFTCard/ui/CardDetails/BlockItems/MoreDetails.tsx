import { FC, memo, useCallback, useMemo } from 'react';
import { ICardDetailMoreProps } from '../../../model/types/types';
import cls from '../cardDetails.module.scss';
import {
  Copy2SVG,
  GradingSVG,
  GreenCircleApproveSVG,
  ListIconSVG,
  LockSVG,
  RedCircleRejectedSVG,
} from '@/shared/assets/svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { convertNumberInK } from '@/shared/lib/helpers/convertNumberInK';
import { copyInBuffer } from '@/shared/lib/helpers/copyInBuffer';
import { IconButton } from '@/shared/ui/Buttons';
import { Tooltip } from '@/shared/ui/Popovers';
import { HStack, VStack } from '@/shared/ui/Stack';

export const MoreDetails: FC<ICardDetailMoreProps> = memo(props => {
  const {
    moreDetails: {
      contractAddress,
      nftAddress,
      blockchain,
      vault,
      location,
      vaultId,
      gradingCompany,
      grade,
      centering,
      corners,
      edges,
      surface,
      qualifiers,
      authenticated,
      insuredValue,
      gradeNum,
      gradeId,
    },
  } = props;

  const currentNetwork = environment.NETWORK;

  const currentQualifiers = useMemo(() => {
    if (qualifiers)
      return typeof qualifiers === 'string'
        ? qualifiers
        : qualifiers.join(', ');

    return '';
  }, [qualifiers]);

  const blockGrading = useMemo(
    () => [
      { title: 'Grading company', value: gradingCompany },
      { title: 'Grading ID', value: gradeId },
      { title: 'Grade', value: grade },
      { title: 'Generic Grade', value: String(gradeNum) },
      { title: 'Centering', value: centering },
      { title: 'Corners', value: corners },
      { title: 'Edges', value: edges },
      { title: 'Surface', value: surface },
      { title: 'Qualifiers', value: currentQualifiers },
      { title: 'Authenticated', value: authenticated },
      { title: 'Insured value', value: insuredValue },
    ],
    [
      authenticated,
      centering,
      corners,
      currentQualifiers,
      edges,
      grade,
      gradeId,
      gradeNum,
      gradingCompany,
      insuredValue,
      surface,
    ],
  );

  const contractInfo = useMemo(
    () => [
      {
        blueText: 'blue-text',
        onClick: () =>
          window.open(
            `https://solana.fm/address/${contractAddress.trim()}?cluster=${
              currentNetwork === 'devnet' ? 'devnet' : 'mainnet'
            }`,
            '_blank',
          ),
        title: 'Contract Address',
        value: `${contractAddress.slice(0, 6)}...${contractAddress.slice(
          contractAddress.length - 5,
        )}`,
      },
      {
        blueText: 'blue-text',
        onClick: () =>
          window.open(
            `https://solana.fm/address/${nftAddress.trim()}?cluster=${
              currentNetwork === 'devnet' ? 'devnet' : 'mainnet'
            }`,
            '_blank',
          ),
        title: 'Token ID',
        value: `${nftAddress.slice(0, 14)}...`,
      },
      {
        blueText: '',
        title: 'Blockchain',
        value: blockchain,
      },
    ],
    [blockchain, contractAddress, currentNetwork, nftAddress],
  );

  const vaultDetails = useMemo(
    () => [
      { title: 'Vault', value: vault },
      { title: 'Vault ID', value: vaultId },
      {
        title: 'Location',
        value: location[0],
        value2: location[1],
        value3: location[2],
        value4: location[3],
      },
    ],
    [location, vault, vaultId],
  );

  const copy = useCallback(
    (title: string) =>
      copyInBuffer(title === 'Contract Address' ? contractAddress : nftAddress),
    [contractAddress, nftAddress],
  );

  const selectItems = (
    title: string,
    value: string | boolean,
    auth: boolean | null,
  ) => {
    if (title === 'Authenticated')
      return auth ? <GreenCircleApproveSVG /> : <RedCircleRejectedSVG />;

    if (title === 'Insured value' && typeof value === 'string')
      return convertNumberInK(value);
    return value;
  };

  return (
    <HStack
      max
      justify='between'
      align='start'
      className={cls['dropdown-details']}
    >
      <VStack className={cls.left}>
        <HStack max align='center' gap={0.25} className={cls.header}>
          <GradingSVG />
          <h3>Grading</h3>
        </HStack>
        <VStack max gap={0.25} justify='start' className={cls.infos}>
          {blockGrading.map(
            item =>
              item.value && (
                <HStack key={item?.title} max justify='between' align='start'>
                  <p className={cls['text-left']}>{item?.title}</p>
                  <HStack gap={0.25} align='center'>
                    {selectItems(item.title, item.value, authenticated)}
                  </HStack>
                </HStack>
              ),
          )}
        </VStack>
      </VStack>
      <div className={cls.left}>
        <HStack max align='center' gap={0.25} className={cls.header}>
          <ListIconSVG />
          <h3>Contract info</h3>
        </HStack>
        <VStack max gap={0.25} className={cls.infos}>
          {contractInfo.map(
            item =>
              item.value && (
                <HStack key={item?.title} max justify='between' align='start'>
                  <p className={cls['text-left']}>{item.title}</p>
                  <HStack
                    gap={0.25}
                    align='center'
                    className={classNames(cls['text-right'], {
                      [cls.blue]: item.blueText,
                    })}
                  >
                    <span onClick={item.onClick}>{item.value}</span>
                    {item.title !== 'Blockchain' && (
                      <Tooltip titleText='Copy'>
                        <IconButton onClick={() => copy(item.title)}>
                          <Copy2SVG />
                        </IconButton>
                      </Tooltip>
                    )}
                  </HStack>
                </HStack>
              ),
          )}
        </VStack>
        <HStack max align='center' gap={0.25} className={cls.header}>
          <LockSVG />
          <h3>Vault details</h3>
        </HStack>
        <VStack max gap={0.25} className={cls.infos}>
          {vaultDetails.map(
            item =>
              item.value && (
                <HStack key={item?.title} max justify='between' align='start'>
                  <p className={cls['text-left']}>{item.title}</p>
                  <VStack align='end'>
                    <div className={cls.location}>{item.value}</div>
                    {!!item.value2 && (
                      <div className={cls.location}>{item.value2}</div>
                    )}
                    {!!item.value3 && (
                      <div className={cls.location}>{item.value3}</div>
                    )}
                    {!!item.value4 && (
                      <div className={cls.location}>{item.value4}</div>
                    )}
                  </VStack>
                </HStack>
              ),
          )}
        </VStack>
      </div>
    </HStack>
  );
});
