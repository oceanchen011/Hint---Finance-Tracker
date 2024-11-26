import React, { useContext, useState } from 'react'

const IncomeContext = React.createContext() 

export function useIncome() {
    return useContext(IncomeContext)
}

export const IncomeProvider = ({ children }) => {
    const [income, setIncome] = useState(0) 

    function addIncome({ hourlyIncome }){
        if(typeof hourlyIncome === 'number' && hourlyIncome > 0){
            setIncome((prevIncome) => prevIncome + hourlyIncome)
        }
    }
}