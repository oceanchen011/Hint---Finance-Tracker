import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import BudgetCard from "./BudgetCard"
import AddBudgetModal from "../AddBudgetModal"
import { useState } from "react"

function Budget() {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
    return (
        <>
            <Container className="my-4"> 
                <Stack direction="horizontal" gap="2" className="mb-4"> 
                    <h1 className="me-auto"> Budgets </h1>
                    <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}> Add Budget </Button>
                    <Button variant="outline-primary">Add Expense</Button>
                </Stack>
                <div  style={{ display: "grid", getTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start"}}> 
                    <BudgetCard name="Entertainment" amount={10} max={1000}> 
                    </BudgetCard>
                </div>
            </Container>
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => 
                setShowAddBudgetModal(false)}/>
        </>
    )
}

export default Budget