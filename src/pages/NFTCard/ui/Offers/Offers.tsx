import { FC, memo, useCallback, useMemo } from 'react';
import cls from './offers.module.scss';
import { INFTOffersProps } from '../../model/types/types';
import { GreenDotSVG } from '@/shared/assets/svg';
import { BottomArrowSVG, TopArrowSVG } from '@/shared/assets/svg/miniButtons';
import { classNames } from '@/shared/lib/classNames/classNames';
import { dateToValidForm } from '@/shared/lib/helpers/beutifyDates';
import { convertNumberInK } from '@/shared/lib/helpers/convertNumberInK';
import { limitWordCharacters } from '@/shared/lib/limitWordCharacters/limitWordCharacters';
import { Button, IconButton } from '@/shared/ui/Buttons';
import { HStack, VStack } from '@/shared/ui/Stack';
import { IColumnTable, Table } from '@/shared/ui/Table';

export const Offers: FC<INFTOffersProps> = memo(props => {
  const {
    offers,
    isExpanded,
    updateExpand,
    isPublic,
    currentUserWallet,
    handleOpenModalCancelOffers,
    handleOpenAcceptOffer,
    handleOpenMakeOffer,
    cardStatus,
  } = props;
  console.log("off--->",offers);
  const expand = useCallback(
    () => updateExpand('offers', !isExpanded.offers),
    [isExpanded.offers, updateExpand],
  );

  const getSelectElementWithMaxPrice = (rows: IOffer[]) =>
    rows.reduce((x, y) => ({
      ...x,
      price: `${Math.max(+x.price, +y.price)}`,
    }));

  const redirectToProfile = (wallet: string) => {
    window.open(`${window.location.origin}/account/${wallet}`, '_blank');
  };

  const columns: IColumnTable<IOffer>[] = useMemo(
    () => [
      {
        field: 'price',
        headerName: 'Price',
        render: (row: IOffer) => {
          const { id, price } = row;
          return (
            <HStack gap={0.5} justify='start' align='center'>
              {id === getSelectElementWithMaxPrice(offers).id ? (
                <GreenDotSVG />
              ) : (
                <div style={{ height: '14px', width: '14px' }} />
              )}
              <span>{`$ ${convertNumberInK(price)}`}</span>
            </HStack>
          );
        },
        width: '12.25rem',
      },
      {
        field: 'from',
        headerName: 'From',
        render: (row: IOffer) => {
          const { buyer } = row;
          return (
            <HStack
              justify='start'
              align='center'
              className={cls.from}
              onClick={() => buyer.wallet && redirectToProfile(buyer.wallet)}
            >
              {buyer.name ||
                (buyer.wallet &&
                  limitWordCharacters(buyer.wallet, 4, 'centerDots'))}
            </HStack>
          );
        },
        width: '11.938rem',
      },
      {
        field: 'date',
        headerName: 'Expiry Date',
        render: (row: IOffer) => {
          const { expiryDate } = row;
          return (
            <HStack justify='start' align='center' className={cls.date}>
              {dateToValidForm(expiryDate ||"")}
            </HStack>
          );
        },
        width: '15.188rem',
      },
      {
        field: 'action',
        headerName: 'Action',
        render: (row: IOffer) => {
          const { buyerId, id } = row;
          if (isPublic)
            return currentUserWallet === buyerId ? (
              <HStack
                gap={0.5}
                className='offers-table__wrapper__tb__row__action'
              >
                <Button
                  typeButton='white'
                  text='Edit'
                  size='small'
                  disabled={cardStatus === 'Burned'}
                  onClick={() =>
                    handleOpenMakeOffer &&
                    handleOpenMakeOffer(row, 'update-offer')
                  }
                />
                <Button
                  typeButton='secondary'
                  text='Cancel'
                  size='small'
                  onClick={() => handleOpenModalCancelOffers(id, 'offer')}
                />
              </HStack>
            ) : (
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <></>
            );

          return currentUserWallet === buyerId ? (
            <Button
              typeButton='white'
              text='Cancel'
              size='small'
              onClick={() => handleOpenModalCancelOffers(id, 'offer')}
            />
          ) : (
            <Button
              typeButton='white'
              text='Accept'
              size='small'
              disabled={cardStatus === 'Burned'}
              onClick={() => handleOpenAcceptOffer(row)}
            />
          );
        },
        width: '3rem',
      },
    ],
    [
      cardStatus,
      currentUserWallet,
      handleOpenAcceptOffer,
      handleOpenMakeOffer,
      handleOpenModalCancelOffers,
      isPublic,
      offers,
    ],
  );

  return (
    <VStack max className={cls['offers-history']}>
      <HStack
        max
        justify='between'
        align='center'
        className={classNames(cls.title, { [cls.expanded]: isExpanded.offers })}
        onClick={expand}
      >
        <h3>Offers</h3>
        <IconButton>
          {isExpanded?.offers ? <TopArrowSVG /> : <BottomArrowSVG />}
        </IconButton>
      </HStack>
      {!!isExpanded.offers && (
        <Table
          withoutLastBorder
          rows={offers}
          columns={columns}
          className={cls.border}
          emptyContent={
            <HStack max align='center' justify='center' className={cls.empty}>
              There are no offers yet!
            </HStack>
          }
        />
      )}
    </VStack>
  );
});
