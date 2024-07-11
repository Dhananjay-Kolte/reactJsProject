import {
  FC,
  memo,
  MouseEvent,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import './createShipmentPageContent.scss';
import { useNavigate } from 'react-router-dom';
import { ShippingTipsModal } from '../../ShippingTips/ShippingTipsModal';
import {
  IFieldsCreateInboundShipment,
  updateInboundShipmentAction,
  createInboundShipmentAction,
  getIsEditInboundShipment,
  getInboundShipmentById,
} from '@/entities/InboundShipment';
import { PhosphorSVG } from '@/shared/assets/svg';
import DollarEmptySVG from '@/shared/assets/svg/DollarEmptySVG';
import { RightArrowSVG } from '@/shared/assets/svg/miniButtons';
import { getRouteShippingDetails } from '@/shared/const/router';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Alert } from '@/shared/ui/Alert/Alert';
import { Checkbox, Button } from '@/shared/ui/Buttons';
import { Input, TextArea } from '@/shared/ui/Inputs';
import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';
import { PrivacyPolicyModal } from '@/widgets/PrivacyPolicy';

const CreateShipmentPageContentUI: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id, numberOfCards, valueOfBox, description } = useAppSelector(
    getInboundShipmentById,
  );
  const isEditInboundShipment = useAppSelector(getIsEditInboundShipment);
  const firstViewTips = localStorage.getItem('firstViewTips');

  const [numberOfCardsLocal, setCardNumberLocal] = useState('');
  const [valueOfBoxLocal, setBoxValueLocal] = useState('');
  const [descriptionLocal, setDescriptionLocal] = useState('');
  const [checkPolicy, setCheckPolicy] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalPrivacy, setOpenPrivacy] = useState(false);
  const [errorNumberOfCard, setErrorNumberOfCard] = useState('');
  const [errorTotalValue, setErrorTotalValue] = useState('');

  const isCustodyChecked = isEditInboundShipment ? true : checkPolicy;
  const disableCreateButton =
    !isCustodyChecked ||
    !!errorNumberOfCard ||
    !!errorTotalValue ||
    !numberOfCardsLocal ||
    !valueOfBoxLocal;

  const handleCheck = () => {
    setCheckPolicy(!checkPolicy);
  };

  const handleOpenModal = (event: MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();
    setOpenPrivacy(true);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (descriptionLocal.length < 2000) {
      if (!firstViewTips && !isEditInboundShipment)
        localStorage.setItem('firstViewTips', '1');

      const shipmentObject: IFieldsCreateInboundShipment = {
        description: descriptionLocal,
        numberOfCards: numberOfCardsLocal,
        valueOfBox: valueOfBoxLocal,
      };

      isEditInboundShipment
        ? dispatch(
            updateInboundShipmentAction({ shipmentId: id, ...shipmentObject }),
          )
        : dispatch(createInboundShipmentAction(shipmentObject));

      navigate(getRouteShippingDetails());
    } else
      showSnackbar(
        'description must be shorter than or equal to 2000 characters',
        'warning',
      );
  };

  useEffect(() => {
    if (isEditInboundShipment) {
      numberOfCards
        ? setCardNumberLocal(`${numberOfCards}`)
        : setCardNumberLocal('');
      valueOfBox ? setBoxValueLocal(`${valueOfBox}`) : setBoxValueLocal('');
      description ? setDescriptionLocal(description) : setDescriptionLocal('');
    } else {
      setCardNumberLocal('');
      setBoxValueLocal('');
      setDescriptionLocal('');
    }
  }, [description, dispatch, isEditInboundShipment, numberOfCards, valueOfBox]);

  return (
    <div className='create-shipment'>
      <form id='form' className='create-shipment__form' onSubmit={handleSubmit}>
        <div className='create-shipment__form__form-title'>
          <p className='create-shipment__form__form-title__title-text'>
            {isEditInboundShipment ? 'Edit a shipment' : 'Create a shipment'}
          </p>
          <Button
            typeButton='ghost'
            img={PhosphorSVG}
            imgLocation='left'
            size='small'
            text='SHIPPING TIPS'
            style={{
              background: 'rgba(91, 234, 255, 0.07)',
              borderRadius: '35px',
              color: '#5BEAFF',
              fill: 'white',
              padding: '0.5rem 1rem',
            }}
            onClick={() => setOpenModal(true)}
          />
        </div>
        <Alert
          status='info'
          size='small'
          text='We accepts graded cards only!'
        />
        <div className='wrapper-inputs'>
          <div className='create-shipment__form__text-input'>
            <Input
              isValidate
              required
              type='number'
              value={numberOfCardsLocal}
              min={1}
              max={100_000}
              label='Number of cards'
              placeholder='Enter number of cards'
              error={errorNumberOfCard}
              setError={setErrorNumberOfCard}
              onChange={setCardNumberLocal}
            />
          </div>
          <div className='create-shipment__form__text-input'>
            <Input
              isValidate
              required
              type='number'
              value={valueOfBoxLocal}
              min={1}
              max={9_000_000_000}
              label='Total value'
              placeholder='Enter value of box'
              startIcon={<DollarEmptySVG width='20' height='20' />}
              error={errorTotalValue}
              setError={setErrorTotalValue}
              onChange={setBoxValueLocal}
            />
          </div>
        </div>
        <div className='create-shipment__form__text-input'>
          <TextArea
            fullWidth
            label='Description'
            value={descriptionLocal}
            placeholder='Tell us what’s in the box.'
            onChange={setDescriptionLocal}
          />
        </div>
        <div className='create-shipment__form__checkbox'>
          <Checkbox
            checked={isCustodyChecked}
            id='create-shipment'
            onChange={handleCheck}
          >
            <div className='create-shipment__form__checkbox__label'>
              <p>I agree with the Terms</p>
              <p onClick={handleOpenModal}>Terms of Service</p>
            </div>
          </Checkbox>
        </div>
        <div className='create-shipment__form__button'>
          <Button
            fullWidth
            typeButton='primary'
            text={isEditInboundShipment ? 'Update' : 'Create'}
            img={RightArrowSVG}
            imgLocation='right'
            type='submit'
            style={{ minWidth: '20rem' }}
            size='large'
            disabled={disableCreateButton}
          />
        </div>
      </form>
      <PrivacyPolicyModal
        open={openModalPrivacy}
        setOpen={setOpenPrivacy}
        typeModal='TermOfService'
      />
      <ShippingTipsModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
};
const CreateShipmentPageContent = memo(CreateShipmentPageContentUI);
export default CreateShipmentPageContent;
