import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import cls from './AccountBalance.module.scss';
import {
  fetchUserInfo,
  getBalanceSOL,
  getBalanceUSDC,
} from '@/entities/Headers';
import { UsdcSVG } from '@/shared/assets/svg';
import SolanaIcon from '@/shared/assets/svg/Profile/CoinSolana.svg';
import Icon from '@/shared/assets/svg/Profile/Shape.svg';
import { getRouteCoinflow } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Buttons';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface AccountBalanceProps {
  className?: string;
  wallet: string;
}
export const AccountBalance = memo((props: AccountBalanceProps) => {
  const { className, wallet } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const balanceSOL = useAppSelector(getBalanceSOL);
  const balanceUSDC = useAppSelector(getBalanceUSDC);

  const onOpenCoinFlow = useCallback(() => {
    navigate(getRouteCoinflow('withdraw'));
  }, [navigate]);

  const onOpenCoinFlowHistory = useCallback(() => {
    navigate(getRouteCoinflow('history'));
  }, [navigate]);

  useEffect(() => {
    if (wallet) dispatch(fetchUserInfo({ user: wallet }));
  }, [dispatch, wallet]);

  return (
    <VStack
      max
      className={classNames(cls.AccountBalance, {}, [className])}
      gap={2}
    >
      <VStack max gap={1.5}>
        <HStack max justify='between'>
          <div className={cls.title}>Balance</div>
          <Button
            typeButton='secondary'
            size='small'
            onClick={onOpenCoinFlowHistory}
          >
            <Icon />
            View History
          </Button>
        </HStack>
        <HStack max justify='between' className={cls.balance}>
          <HStack
            max
            className={cls.item}
            justify='start'
            gap={1}
            align='start'
          >
            <SolanaIcon
              width='32px'
              height='32px'
              style={{ background: '#000000', borderRadius: '50%' }}
            />
            <VStack>
              <span className={cls.name}>Solana</span>
              <span className={cls.value}>{balanceSOL} SOL</span>
            </VStack>
          </HStack>
          <HStack
            max
            className={cls.item}
            justify='start'
            gap={1}
            align='start'
          >
            <UsdcSVG
              width='32px'
              height='32px'
              fill='#3875C9'
              secondFill='#FFFFFF'
            />
            <VStack>
              <span className={cls.name}>USDC</span>
              <span className={cls.value}>{balanceUSDC} USDC</span>
            </VStack>
          </HStack>
        </HStack>
      </VStack>
      <Button
        typeButton='primary'
        size='medium'
        text='withdraw funds'
        onClick={onOpenCoinFlow}
      />
    </VStack>
  );
});
