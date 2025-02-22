import React, { useState } from 'react';
import { Modal, Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const devices = [
  {id:1, name: 'Air Conditioner', imgSrc: '/images/ac.jpg', power_rating:2000, status:'on', active_time:10 },
  {id:2 ,name: 'Fridge', imgSrc: '/images/freedge.jpg', power_rating:500 ,status:'on' ,active_time:10},
  {id:3 ,name: 'Washing Machine', imgSrc: '/images/washing_machine.jpg',power_rating:1200, status:' on',active_time1:5 },
  { id:4, name: 'Desert Air Cooler', imgSrc: '/images/cooler.jpg' ,status:'on',power_rating:180,active_time:10}
];

const DeviceSelector = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState([]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddDevice = (device) => {
    setSelectedDevices([...selectedDevices, device]);
    handleCloseModal(); // Close the modal after adding the device
  };

  return (
    <div className="container mt-4">
      <Row className="align-items-center">
        {/* Selected Devices */}
        {selectedDevices.map((device, index) => (
          <Col key={index} md={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src={device.imgSrc} alt={device.name} />
              <Card.Body>
                <Card.Title>{device.name}</Card.Title>
                <Card.Text>Status: {device.status}</Card.Text>
                
                <Card.Text>Power Consumed: {(device.power_rating *device.active_time)/1000}</Card.Text>

                <Card.Text>Active: {device.active_time} hrs</Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}

        {/* Plus Button */}
        <Col md={3}>
          <Button variant="primary" onClick={handleShowModal} className="btn-lg rounded-circle">
            +
          </Button>
        </Col>
      </Row>

      {/* Modal for Device List */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select a Device</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {devices.map((device, index) => (
              <Col key={index} md={6} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={device.imgSrc} alt={device.name} />
                  <Card.Body>
                    <Card.Title>{device.name}</Card.Title>
                    <Card.Text>{device.description}</Card.Text>
                    <Button variant="success" onClick={() => handleAddDevice(device)}>
                      Add
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeviceSelector;
