import { FC, memo, useState } from 'react';
import './outboundShipmentItem.scss';
import OutboundShipmentItemLeftBlock from './OutboundShipmentItemLeftBlock';
import OutboundShipmentItemRightBlock from './OutboundShipmentItemRightBlock';
import TableOutboundShipments from '../TableShipments/TableOutboundShipments';
import { IOutboundShipmentsItemProps } from '../types';
import { StatusShipments } from '@/shared/ui/Statuses';

export const OutboundShipmentItem: FC<IOutboundShipmentsItemProps> = memo(
  ({ shipment, typeTiny }) => {
    const { id, customId, status } = shipment;
    const [expand, setExpand] = useState(false);

    return (
      <div className='outbound-shipment' id={customId}>
        <div id={id} style={{ position: 'relative', top: '-10rem' }} />
        <StatusShipments status={status} number={customId} />
        <div className='outbound-shipment__tracking-details'>
          <OutboundShipmentItemLeftBlock shipment={shipment} />
          <OutboundShipmentItemRightBlock
            shipment={shipment}
            expand={expand}
            setExpand={setExpand}
          />
        </div>
        {!!expand && (
          <TableOutboundShipments shipment={shipment} typeTiny={typeTiny} />
        )}
      </div>
    );
  },
);
