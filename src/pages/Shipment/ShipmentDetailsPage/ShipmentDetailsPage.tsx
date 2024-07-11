import { FC, memo, useState } from 'react';
import ShipmentDetailsPageContent from './ShippingDetailsPageContent/ShippingDetailsPageContent';
import { ShippingTipsModal } from '../ShippingTips/ShippingTipsModal';
import { getIsEditInboundShipment } from '@/entities/InboundShipment';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { Page } from '@/widgets/Page';

const ShipmentDetailsPageUI: FC = () => {
  const isEditInboundShipment = useAppSelector(getIsEditInboundShipment);
  const firstView = localStorage.getItem('firstViewTips');
  const [openTips, setOpenTips] = useState(
    firstView === '1' && !isEditInboundShipment,
  );

  return (
    <Page>
      <ShipmentDetailsPageContent />
      <ShippingTipsModal open={openTips} setOpen={setOpenTips} />
    </Page>
  );
};
const ShipmentDetailsPage = memo(ShipmentDetailsPageUI);
export default ShipmentDetailsPage;
