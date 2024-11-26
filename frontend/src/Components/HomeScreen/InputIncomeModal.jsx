import { useRef, useState } from "react"
import { Button, Form, Modal, ModalBody } from "react-bootstrap"

export default function AddIncomeModal({ show, handleClose, onSubmit}) {
    const incomeNameRef = useRef() 
    const hourlyRef = useRef() 

    function handleSubmit(e){
        e.preventDefault()
        onSubmit({
            incomeName: incomeNameRef.current.value, 
            hourlyRate: parseFloat(hourlyRef.current.value),
        })
        handleClose() 
    }

    return (
        <Modal show={show} onHide={handleClose}> 
            <Form onSubmit={handleSubmit}> 
                <Modal.Header closeButton> 
                    <Modal.Title>Add Income</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={incomeNameRef}/>
                    </Form.Group>
                    <Form.Group></Form.Group>
                </Modal.Body>
            </Form>
        </Modal>
    )

}