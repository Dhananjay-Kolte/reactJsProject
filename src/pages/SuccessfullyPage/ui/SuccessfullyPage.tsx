import { FC, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cls from './successfullyPage.module.scss';
import {
  SendSVG,
  EnterSVG,
  VerifySVG,
  ReadySVG,
  SuccessfullySVG,
} from '@/shared/assets/svg/successfullyPage';
import {
  getRouteShipmentInbound,
  getRouteDashboard,
} from '@/shared/const/router';
import { Button } from '@/shared/ui/Buttons';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

type ContentState = { typeContent: 'create' | 'update' } | null;

const SuccessfullyPage: FC = () => {
  const currentState: ContentState = useLocation().state;
  const navigate = useNavigate();

  const typeContent = currentState?.typeContent || 'create';
  const currentTypeContent = typeContent === 'create' ? 'created' : 'updated';

  const steps = useMemo(
    () => [
      {
        image: <SendSVG />,
        title: 'Send your cards to us using your preferred carrier service.',
      },
      {
        image: <EnterSVG />,
        title: 'Enter the Tracking Number on Collection → My Shipments page.',
      },
      { image: <VerifySVG />, title: 'Wait for us to verify your cards.' },
      { image: <ReadySVG />, title: 'Confirm the items in your deposit.' },
    ],
    [],
  );

  const redirectToShipment = () =>
    navigate(getRouteShipmentInbound(), { state: { typeContent: 'shipment' } });

  const redirectToDashboard = () => navigate(getRouteDashboard());

  return (
    <Page align='center'>
      <VStack gap={5} align='center' className={cls.wrapper}>
        <VStack gap={1} align='center'>
          <SuccessfullySVG />
          <h1>{`Shipment ${currentTypeContent} successfully`}</h1>
        </VStack>
        <HStack gap={5.375}>
          {steps.map(item => (
            <HStack key={item.title} align={'start'} gap={1.5}>
              <div className={cls.image}>{item.image}</div>
              <p>{item.title}</p>
            </HStack>
          ))}
        </HStack>
        <HStack gap={1} className={cls.buttons}>
          <Button
            fullWidth
            typeButton='secondary'
            text='To dashboard'
            onClick={redirectToDashboard}
          />
          <Button
            fullWidth
            typeButton='primary'
            text='to My shipments'
            onClick={redirectToShipment}
          />
        </HStack>
      </VStack>
    </Page>
  );
};

export default SuccessfullyPage;
