import { FC, memo } from 'react';
import './shipmentPage.scss';
import { useLocation } from 'react-router-dom';
import { MyShipments } from './TabsItems';
import { Page } from '@/widgets/Page';

const ShipmentPageUI: FC = () => {
  const { state } = useLocation();
  const currentState = state
    ? (state as { typeShipment: ITypeShipments })
    : null;
  const currentTypeContent = currentState?.typeShipment
    ? currentState.typeShipment
    : 'inbound';

  return (
    <Page>
      <div className='shipment-page'>
        <MyShipments currentTypeContent={currentTypeContent} />
      </div>
    </Page>
  );
};
const ShipmentPage = memo(ShipmentPageUI);
export default ShipmentPage;
