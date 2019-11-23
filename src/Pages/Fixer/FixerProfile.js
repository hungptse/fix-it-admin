import { Button, Modal } from 'react-bootstrap';
import Aux from '../../hoc/_Aux';
import React from 'react'
export default function FixerProfile(props) {
    return (
        <Aux>
            <Modal dialogClassName="modal-80w" show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </Aux>
    );
}
