import { FC, memo } from 'react';
import { IOutboundShipmentsItemRightBlockProps } from './types';
import MoreDetailsButton from '../MoreDetailsButton/MoreDetailsButton';
import { InvoiceButton } from '@/pages/PDFworker';
import { BlockCosts } from '@/shared/ui/Statuses/ui/BlocksColor';

const OutboundShipmentItemRightBlockUI: FC<
  IOutboundShipmentsItemRightBlockProps
> = ({ shipment, expand, setExpand }) => {
  const { numberOfCards, valueOfBox } = shipment;
  return (
    <div className='outbound-shipment__tracking-details__right'>
      <BlockCosts status='Valid' value2={valueOfBox} value1={numberOfCards} />
      <div className='outbound-shipment__tracking-details__right__invoice'>
        <InvoiceButton shipment={shipment} />
        <MoreDetailsButton expand={expand} setExpand={setExpand} />
      </div>
    </div>
  );
};
const OutboundShipmentItemRightBlock = memo(OutboundShipmentItemRightBlockUI);
export default OutboundShipmentItemRightBlock;
