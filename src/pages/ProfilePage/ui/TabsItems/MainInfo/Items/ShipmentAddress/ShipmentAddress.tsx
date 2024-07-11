import { FC, memo, useEffect, useState } from 'react';
import cls from '../../mainInfo.module.scss';
import { getAllShipmentAddresses } from '@/entities/ShipmentAddresses';
import { AddSVG, BasketSVG, PencilSVG } from '@/shared/assets/svg';
import { RightArrowSVG } from '@/shared/assets/svg/miniButtons';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { AddButton, Button, IconButton } from '@/shared/ui/Buttons';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AddressModal } from '@/widgets/AddressModal';
import { RemoveAddressModal } from '@/widgets/RemoveAddressModal';

interface IShipmentAddressProps {
  handleCancelModal: (cause?: 'shipments') => void;
}

export const ShipmentAddress: FC<IShipmentAddressProps> = memo(props => {
  const { handleCancelModal } = props;

  const profileShippingAddresses = useAppSelector(getAllShipmentAddresses);

  const [shippingAddress, setShippingAddress] = useState<IShipmentAddress[]>(
    profileShippingAddresses || [],
  );

  const [openModalEditAddress, setOpenEditAddress] = useState<boolean>(false);
  const [openModalAddAddress, setOpenAddAddress] = useState(false);
  const [openModalRemoveAddress, setOpenRemoveAddress] = useState(false);

  const handleEditAddress = () => setOpenEditAddress(true);
  const handleAddAddress = () => setOpenAddAddress(true);
  const handleRemoveAddress = () => setOpenRemoveAddress(true);

  const handleViewShipmentsButton = () => handleCancelModal('shipments');

  useEffect(() => {
    setShippingAddress(profileShippingAddresses || []);
  }, [profileShippingAddresses]);

  return (
    <VStack max align='end'>
      {!!shippingAddress &&
        !!shippingAddress.length &&
        shippingAddress.map(address => {
          const {
            country,
            streetAddress,
            city,
            state,
            zip,
            apartment,
            id,
            fullName,
            isDefault,
          } = address;
          return (
            <VStack key={id} max>
              <HStack max justify='between'>
                <VStack className={cls.address}>
                  <p>
                    {fullName} | {country}, {state}, {city}
                  </p>
                  <p>
                    {streetAddress}
                    {apartment ? `, ap ${apartment}` : ''}
                    {!!zip && `, ${zip}`}
                  </p>
                </VStack>
                <HStack gap={1}>
                  {!!isDefault && <div className={cls.default}>DEFAULT</div>}
                  <IconButton onClick={handleRemoveAddress}>
                    <BasketSVG width='18' height='18' stroke='#939393' />
                  </IconButton>
                  <IconButton onClick={handleEditAddress}>
                    <PencilSVG />
                  </IconButton>
                </HStack>
              </HStack>
              <div className={cls.border} />
              {!!openModalEditAddress && (
                <AddressModal
                  open={openModalEditAddress}
                  setOpen={setOpenEditAddress}
                  typeModal='Edit'
                  addressData={address}
                />
              )}
              {!!openModalRemoveAddress && (
                <RemoveAddressModal
                  open={openModalRemoveAddress}
                  setOpen={setOpenRemoveAddress}
                  addressId={id || ''}
                />
              )}
            </VStack>
          );
        })}
      <AddButton
        fullWidth
        text='Add new address'
        img={<AddSVG />}
        onClick={handleAddAddress}
      />
      <Button
        typeButton='ghost'
        size='small'
        img={RightArrowSVG}
        imgLocation='right'
        className={cls.ghost}
        text='View my shipments'
        onClick={handleViewShipmentsButton}
      />
      {!!openModalAddAddress && (
        <AddressModal
          open={openModalAddAddress}
          setOpen={setOpenAddAddress}
          typeModal='Add'
        />
      )}
    </VStack>
  );
});
