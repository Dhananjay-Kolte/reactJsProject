import { memo, useState } from 'react';
import cls from './SealedBoxMoreDetails.module.scss';
import { Copy2SVG } from '@/shared/assets/svg';
import {
  GradingSVG,
  ListSVG,
  VaultSVG,
} from '@/shared/assets/svg/SealedBoxPageIcons';
import { copyInBuffer } from '@/shared/lib/helpers/copyInBuffer';
import { limitWordCharacters } from '@/shared/lib/limitWordCharacters/limitWordCharacters';
import { IconButton } from '@/shared/ui/Buttons';
import { CollapseDetail } from '@/shared/ui/Collapse';
import { Tooltip } from '@/shared/ui/Popovers';
import { PTag } from '@/shared/ui/Ptags/Ptags';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface SealedBoxMoreDetailsProps {
  className?: string;
  sealedBoxInfo: SealedBox;
}
export const MoreDetails = memo((props: SealedBoxMoreDetailsProps) => {
  const { className, sealedBoxInfo } = props;
  const {
    address,
    description,
    insuredValue,
    year,
    category,
    location,
    vault,
    vaultId,
  } = sealedBoxInfo;
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <CollapseDetail
      className={className}
      handleClick={handleClick}
      open={!open}
      title='More details'
    >
      <HStack max gap={1.5} align='start'>
        <VStack max justify='start' gap={2}>
          <VStack max gap={0.5} className={cls.infoWrapper}>
            <HStack max gap={0.3125} className={cls.header}>
              <GradingSVG />
              <PTag tag='value'>Item properties</PTag>
            </HStack>
            <HStack max justify='between' className={cls.firstItem}>
              <PTag tag='name'>Insured value</PTag>
              <PTag tag='value'>${insuredValue}</PTag>
            </HStack>
            <HStack max justify='between'>
              <PTag tag='name'>Year</PTag>
              <PTag tag='value'>{year}</PTag>
            </HStack>
            <HStack max justify='between'>
              <PTag tag='name'>Category</PTag>
              <PTag tag='value'>{category}</PTag>
            </HStack>
          </VStack>
          <VStack max className={cls.infoWrapper}>
            <HStack max gap={0.3125} className={cls.header}>
              <GradingSVG />
              <PTag tag='value'>Description</PTag>
            </HStack>
            <HStack max justify='between' className={cls.firstItem}>
              <PTag textAlign='left' tag='name' className={cls.descriptionText}>
                {description}
              </PTag>
            </HStack>
          </VStack>
        </VStack>
        <VStack max justify='start' gap={2}>
          <VStack max gap={0.5} className={cls.infoWrapper}>
            <HStack max gap={0.3125} className={cls.header}>
              <ListSVG />
              <PTag tag='value'>Contact info</PTag>
            </HStack>
            <HStack max justify='between' className={cls.firstItem}>
              <PTag tag='name'>Contract Address</PTag>
              <HStack>
                <PTag tag='value'>$600</PTag>
                <Tooltip titleText='Copy'>
                  <IconButton onClick={() => copyInBuffer('$600$600')}>
                    <Copy2SVG />
                  </IconButton>
                </Tooltip>
              </HStack>
            </HStack>
            <HStack max justify='between'>
              <PTag tag='name'>Token ID</PTag>
              <HStack>
                <PTag tag='value'>
                  {limitWordCharacters(address, 4, 'centerDots')}
                </PTag>
                <Tooltip titleText='Copy'>
                  <IconButton
                    className={cls.copyButton}
                    onClick={() => copyInBuffer(address)}
                  >
                    <Copy2SVG />
                  </IconButton>
                </Tooltip>
              </HStack>
            </HStack>
            <HStack max justify='between'>
              <PTag tag='name'>Blockchain</PTag>
              <PTag tag='value'>Solana</PTag>
            </HStack>
          </VStack>
          <VStack max gap={0.5} className={cls.infoWrapper}>
            <HStack max gap={0.3125} className={cls.header}>
              <VaultSVG />
              <PTag tag='value'>Vault details</PTag>
            </HStack>
            <HStack max justify='between' className={cls.firstItem}>
              <PTag tag='name'>Vault</PTag>
              <PTag tag='value'>{vault}</PTag>
            </HStack>
            <HStack max justify='between'>
              <PTag tag='name'>Vault ID</PTag>
              <PTag tag='value'>{vaultId}</PTag>
            </HStack>
            <HStack max justify='between' align='start'>
              <PTag tag='name'>Location</PTag>
              <PTag tag='value' textAlign='right'>
                {location[0]}
              </PTag>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </CollapseDetail>
  );
});
