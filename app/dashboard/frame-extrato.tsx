import React from "react";
import StatementList from "../statement/statementComponents/statementComponents";

const LimitedStatement = () => {
    return (
        <div>
            <h2>Histórico (Mes 8)</h2>
            {/* map no mes 8 */}
            
            <StatementList />
        </div>
    );
};

export default LimitedStatement;
