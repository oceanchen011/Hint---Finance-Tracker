import { Card, ProgressBar, Stack, Button } from "react-bootstrap"
import { currencyFormatter } from "../../utils"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../../contexts/BudgetContext"


export default function BudgetCard({ name, amount, max, gray, hideButtons, onAddExpenseClick, onViewExpenseClick, budgetId }) {
    const classNames = [] 
    const { deleteBudget, budgets } = useBudgets() 
    const budget = UNCATEGORIZED_BUDGET_ID === budgetId ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID } : budgets.find(b => b.id === budgetId)
    if (amount > max) {
        classNames.push("bg-danger", "bg-opacity-10")
    }else if (gray){
        classNames.push("bg-light")
    }
    
    return (
        <Card className={classNames.join(" ")}> 
            <Card.Body> 
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3"> 
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormatter.format(amount)} 
                        <span className="text-muted fs-6 ms-1"> / {currencyFormatter.format(max)} </span>
                    </div>
                </Card.Title>
                <ProgressBar 
                    className="rounded-pill" 
                    variant={getProgressBarVarient(amount, max)} 
                    min={0}
                    max={max}
                    now={amount}
                /> 
                {!hideButtons && (
                    <Stack direction="horizontal" gap="2" className="mt-4">
                        <Button variant="outline-primary" className="ms-auto" onClick={onAddExpenseClick}> Add Expense </Button>
                        <Button onClick={onViewExpenseClick} variant="outline-secondary"> View Expenses </Button>
                        <Button onClick={() => {
                            if(!budgetId){
                                console.error("cannot delete budget not found", budgetId)
                                return
                            }
                            deleteBudget(budget)
                        }} size="sm" varient="outline-danger" color='red'>&times;</Button>
                    </Stack>
                )}
            </Card.Body>
        </Card>
    )
}


function getProgressBarVarient(amount, max) {
    const ratio = amount / max 
    if (ratio < .5) return "primary"
    if (ratio < 0.75) return "warning"
    return "danger"
}