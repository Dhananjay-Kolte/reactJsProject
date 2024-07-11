import {
  FC,
  memo,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import cls from './activityTable.module.scss';
import { getActivityIsLoading } from '../../model/selectors/getActivity';
import { IActivitiesFilter, IActivity } from '../../model/types/activity';
import { ActivityFilter } from '../ActivityFilter/ActivityFilter';
import {
  TransferSVG,
  MintedSVG,
  BurnActivitySVG,
  OutsideLinkSVG,
  ListSVG,
  SaleSVG,
} from '@/shared/assets/svg';
import {
  getRouteAllCards,
  getRouteNFTCard,
  getRoutePublicAccount,
} from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { dateToValidForm } from '@/shared/lib/helpers/beutifyDates';
import { convertNumberInK } from '@/shared/lib/helpers/convertNumberInK';
import { getCurrentSizeImageInTable } from '@/shared/lib/helpers/getCurrentSizeImageInTable/getCurrentSizeImageInTable';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { limitWordCharacters } from '@/shared/lib/limitWordCharacters/limitWordCharacters';
import { Button } from '@/shared/ui/Buttons';
import { Tooltip } from '@/shared/ui/Popovers';
import { HStack } from '@/shared/ui/Stack';
import { IColumnTable, Table } from '@/shared/ui/Table';

interface IActivityTableProps {
  classNameTable?: string;
  classNameFilter?: string;
  isOwnerWallet?: boolean;
  typePage?: 'card' | 'profile' | 'sealbox';
  activities: IActivity[];
  selectedFilter: IActivitiesFilter;
  setSelectedFilter: Dispatch<SetStateAction<IActivitiesFilter>>;
}

export const ActivityTable: FC<IActivityTableProps> = memo(props => {
  const {
    classNameTable,
    classNameFilter,
    isOwnerWallet,
    activities,
    selectedFilter,
    setSelectedFilter,
    typePage = 'card',
  } = props;

  const navigate = useNavigate();

  const isLoading = useAppSelector(getActivityIsLoading);

  const actionIcon = useCallback((currentAction: string) => {
    const options = { height: '24', width: '24' };
    console.log("currentAction--->",currentAction);
    let action = currentAction.toLocaleLowerCase()
    console.log("currentActionInLowwercase-->",currentAction.toLocaleLowerCase());
    if (action === 'transfer') return <TransferSVG {...options} />;
    if (action === 'mint') return <MintedSVG {...options} />;
    if (action === 'burn') return <BurnActivitySVG {...options} />;
    if (action === 'list' ) return <ListSVG {...options} />;
    return <SaleSVG {...options} />
  }, []);

  const selectTitle = useCallback(
    (from: { id: string | null; name: string | null; wallet: string | null }) =>
      from.name
        ? limitWordCharacters(from.name as string, 15, 'centerDots')
        : from.wallet && limitWordCharacters(from.wallet, 6, 'centerDots'),
    [],
  );

  const columns: IColumnTable<IActivity>[] = useMemo(
    () => [
      {
        field: 'action',
        fullWidth: typePage !== 'profile',
        headerName: 'Action',
        render: (row: IActivity) => {
          const { action } = row;
          return (
            <HStack align='center' gap={0.5}>
              {actionIcon(action)}
              <p>{action.charAt(0).toUpperCase() + action.slice(1)}</p>
            </HStack>
          );
        },
        width: typePage !== 'profile' ? '' : '6rem',
      },
      ...(typePage === 'sealbox'
        ? [
            {
              field: 'quantity',
              headerName: 'quantity',
              width: '6rem',
            },
          ]
        : []),
      ...(typePage === 'profile'
        ? [
            {
              field: 'item',
              fullWidth: true,
              headerName: 'Item',
              render: (row: IActivity) => {
                const { card } = row;
                const { height, width } = getCurrentSizeImageInTable(
                  card?.orientation as IOrientation,
                );

                return (
                  <Link to={getRouteNFTCard(card ? card.nftAddress : '')}>
                    <HStack gap={1}>
                      <HStack
                        align='center'
                        justify='center'
                        className={cls.images}
                      >
                        <img
                          src={card && card.images ? card.images.frontS : ''}
                          alt='card'
                          width={width}
                          height={height}
                          loading='lazy'
                        />
                      </HStack>
                      <p>{card ? card.itemName : ''}</p>
                    </HStack>
                  </Link>
                );
              },
            },
          ]
        : []),
      {
        field: 'amount',
        headerName: 'Amount',
        justify: 'end',
        render: (row: IActivity) => {
          const { action, amount } = row;
          return (
            <p>
              {action !== 'Burn' && amount && amount !== null
                ? `$ ${convertNumberInK(amount)}`
                : '------'}
            </p>
          );
        },
        style: { marginRight: typePage === 'card' ? '3.5rem' : '' },
        width: '5rem',
      },
      ...(typePage === 'profile'
        ? [
            {
              field: 'collection',
              headerName: 'collection',
              width: '6rem',
            },
          ]
        : []),
      {
        field: 'from',
        headerName: 'From',
        render: (row: IActivity) => {
          const { action, from } = row;
          return from.name !== 'NFT_Collector' &&
            action !== 'Mint' &&
            from.wallet ? (
            <Link to={getRoutePublicAccount(from.wallet)}>
              <p className={cls['table-link']}>{selectTitle(from)}</p>
            </Link>
          ) : (
            <p className={cls['table-link']}>{selectTitle(from)}</p>
          );
        },
        width: '7.25rem',
      },
      {
        field: 'to',
        headerName: 'To',
        render: (row: IActivity) => {
          const { action, to } = row;
          if (action === 'Burn' || action === 'List') return <div>------</div>;

          return to.name !== 'NFT_Collector' && to.wallet ? (
            <Link to={getRoutePublicAccount(to.wallet)}>
              <p className={cls['table-link']}>
                {to.name
                  ? limitWordCharacters(to.name, 15, 'centerDots')
                  : to.wallet &&
                    limitWordCharacters(to.wallet, 6, 'centerDots')}
              </p>
            </Link>
          ) : (
            <p className={cls['table-link']}>
              {to.name
                ? limitWordCharacters(to.name, 15, 'centerDots')
                : to.wallet && limitWordCharacters(to.wallet, 6, 'centerDots')}
            </p>
          );
        },
        width: '7.25rem',
      },
      {
        field: 'createdAt',
        headerName: 'Date',
        render: (row: IActivity) => {
          const { to, createdAt, transactionUrl } = row;
          return (
            <HStack align='center' gap={0.5}>
              <span>{dateToValidForm(createdAt)}</span>
              {to !== null && (
                <Tooltip
                  placement='bottom'
                  titleText={
                    <>
                      View on <br />
                      Solana Explorer
                    </>
                  }
                >
                  <div>
                    <Link to={transactionUrl} target='_blank' rel='noreferrer'>
                      <OutsideLinkSVG style={{ cursor: 'pointer' }} />
                    </Link>
                  </div>
                </Tooltip>
              )}
            </HStack>
          );
        },
        width: '11rem',
      },
    ],
    [actionIcon, selectTitle, typePage],
  );

  const redirectCollection = useCallback(
    () => navigate(getRouteAllCards()),
    [navigate],
  );

  const emptyComponent = useMemo(
    () =>
      typePage === 'card' ? (
        <HStack max align='center' justify='center' className={cls.empty}>
          There are no activities yet!
        </HStack>
      ) : (
        <HStack max align='center' justify='center' className={cls.empty}>
          No activities yet
          {!!isOwnerWallet && (
            <Button
              typeButton='secondary'
              text='Go to my collection'
              onClick={redirectCollection}
            />
          )}
        </HStack>
      ),
    [isOwnerWallet, redirectCollection, typePage],
  );

  return (
    <>
      <ActivityFilter
        withStatuses
        className={classNames(cls.header, {}, [classNameFilter])}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Table
        withoutLastBorder
        rows={activities}
        isLoading={isLoading}
        gap={2}
        columns={columns}
        className={classNames('', {}, [classNameTable])}
        emptyContent={emptyComponent}
      />
    </>
  );
});
