import React from 'react'
import BudgetCard from './Budgets/BudgetCard'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetContext'

export default function UncategorizedBudgetCard(props) {
    const { getBudgetExpenses } = useBudgets() 
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
        (total, expense) => total + expense.amount, 
        0
    )
    if (amount === 0) return null
  return <BudgetCard amount={amount} name="uncategorized" gray {...props} />
}
