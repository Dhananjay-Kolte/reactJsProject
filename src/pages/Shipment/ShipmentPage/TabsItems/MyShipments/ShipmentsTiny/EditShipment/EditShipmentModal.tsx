import { FC } from 'react';
import './editShipmentModal.scss';
import { IEditShipmentModalProps } from './types';
import CreateShipmentPageContent from '../../../../../CreateShipmentPage/CreateShipmentPageContent/CreateShipmentPageContent';
import { Modal } from '@/shared/ui/Modal';

const EditShipmentModal: FC<IEditShipmentModalProps> = ({
  open,
  setOpenEditShipmentModal,
}) => {
  const handleModalClose = () => setOpenEditShipmentModal();

  return (
    <Modal
      isOpen={open}
      className='edit-shipment-modal__content'
      onClose={handleModalClose}
    >
      <CreateShipmentPageContent />
    </Modal>
  );
};

export default EditShipmentModal;
