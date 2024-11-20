import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import BudgetCard from "./BudgetCard"
import AddBudgetModal from "../AddBudgetModal"
import { useState } from "react"
import { BudgetsProvider, UNCATEGORIZED_BUDGET_ID, useBudgets } from "../../contexts/BudgetContext"
import AddExpenseModal from "../AddExpenseModal"
import Sidebar from "../Sidebar/Sidebar"
import UncategorizedBudgetCard from "../UncategorizedBudgetCard"
import "../../Components/Budgets/Budget.css"
import TotalBudgetCard from "../TotalBudgetCard"
import ViewExpensesModal from "../ViewExpensesModal"

function Budget() {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false) 
    const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState() 
    const [viewExpensesModalBudgetId, setviewExpensesModalBudgetId] = useState()
    const { budgets, getBudgetExpenses } = useBudgets() 

    function openAddExpenseModal(budgetId) {
        setShowAddExpenseModal(true)
        setAddExpenseModalBudgetId(budgetId)
    }

    return (
        <body style={{ margin: 0, padding: 0 }}> {/* Ensures no margin for body */}
            <Sidebar />
            <Container 
                className="my-4" 
                style={{ 
                    width: "1400px", // Adjust to leave space for sidebar
                    marginLeft: "6vw", // Offset content to the right of the sidebar
                    height: "800px", 
                    padding: "20px", 
                    margin: "0 auto" 
                }} 
            >
                <Stack direction="horizontal" gap="2" className="mb-4"> 
                    <h1 className="me-auto" style={{ margin: 0 }}>Budgets</h1>
                    <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
                        Add Budget
                    </Button>
                    <Button variant="outline-primary" onClick={openAddExpenseModal}>
                        Add Expense
                    </Button>
                </Stack>
                <div  
                    style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
                        gap: "1rem", 
                        alignItems: "flex-start" 
                    }}
                > 
                    {budgets.map(budget => {
                        const amount = getBudgetExpenses(budget.id).reduce((total, expenses) => total + expenses.amount, 0)
                        return (
                            <BudgetCard 
                                key={budget.id} 
                                name={budget.name} 
                                amount={amount} 
                                max={budget.max} 
                                onAddExpenseClick={() => openAddExpenseModal(budget.id)} 
                                onViewExpenseClick={() => setviewExpensesModalBudgetId(budget.id)} 
                            />
                        )
                    })}
                    <UncategorizedBudgetCard 
                        onAddExpenseClick={openAddExpenseModal} 
                        onViewExpenseClick={() => setviewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)} 
                    />
                    <TotalBudgetCard />
                </div>
            </Container>
            <AddBudgetModal 
                show={showAddBudgetModal} 
                handleClose={() => setShowAddBudgetModal(false)} 
            />
            <AddExpenseModal 
                show={showAddExpenseModal} 
                defaultBudgetId={addExpenseModalBudgetId} 
                handleClose={() => setShowAddExpenseModal(false)} 
            />
            <ViewExpensesModal 
                budgetId={viewExpensesModalBudgetId} 
                handleClose={() => setviewExpensesModalBudgetId(null)} 
            />
        </body>
    )
}

export default Budget
