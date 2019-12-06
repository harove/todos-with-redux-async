import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

const UserModal = (props) => {
  const { className, user } = props;
  const [modal, setModal] = useState(user.ok);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
    <ModalHeader toggle={toggle}>{user.data.name}</ModalHeader>
        <ModalBody>
            <Row>
                <Col md={6}>{user.data.name}</Col>
                <Col md={6}>{user.data.email}</Col>
                <Col md={6}>{user.data.phone}</Col>
                <Col md={6}>{user.data.company.name}</Col>
            </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default UserModal;