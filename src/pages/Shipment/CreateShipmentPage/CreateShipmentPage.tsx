import { FC, memo } from 'react';
import CreateShipmentPageContent from './CreateShipmentPageContent/CreateShipmentPageContent';
import { getInboundShipmentIsLoading } from '@/entities/InboundShipment';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { Loader } from '@/shared/ui/Loaders';
import { Page } from '@/widgets/Page';

const CreateShipmentPageUI: FC = () => {
  const isLoadingInboundShipment = useAppSelector(getInboundShipmentIsLoading);

  return (
    <Page align='center'>
      {isLoadingInboundShipment ? <Loader /> : <CreateShipmentPageContent />}
    </Page>
  );
};
const CreateShipmentPage = memo(CreateShipmentPageUI);
export default CreateShipmentPage;
