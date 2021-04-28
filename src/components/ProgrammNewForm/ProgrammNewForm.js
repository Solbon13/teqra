import React from 'react'

const ProgrammNewForm = () => {
    return (
        <div>
            <div>plan <Input value ='План'/></div>
                <div>minPlanAccruals <Input value ='миним начисление'/></div>
                <div>maxPlanAccruals <Input value ='макс начисление'/></div>
                <div>termPlan <Input value ='срок'/></div>
                <div>minPayback <Input value ='окупаемость минимум'/></div>
                <div>maxPayback <Input value ='окупаемость максимум'/></div>
                <div>minPaybackWithdrawal <Input value ='окупаемость минимум со снятием'/></div>
                <div>maxPaybackWithdrawal <Input value ='окупаемость максимум со снятием'/></div>
                <div>minPaybackTerm <Input value ='окупаемость минимум по исетечении срока'/></div>
                <div>maxPaybackTerm <Input value ='окупаемость максимум по исетечении срока'/></div>
        </div>
    )
}

export default ProgrammNewForm
