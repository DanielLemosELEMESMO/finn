import ListDivisor from "../../assets/listComponents";
import CategoryIcon from "../../assets/categoryIcons/categoryIcons";

const StatementList = ({ selectedMonth }: { selectedMonth: string }) => {

    const transactions = {
        2023: {
            1: {
                1: {
                    1: { categoria: "lazer", data: "2023-01-01", descricao: "McDonald's", valor: 100 }
                }
            },
            2: {
                1: {
                    1: { categoria: "moradia", data: "2023-02-01", descricao: "Conta de Luz", valor: -50 }
                },
                2: {
                    1: { categoria: "trabalho", data: "2023-02-02", descricao: "GitHub Copilot", valor: -75 }
                },
                3: {
                    1: { categoria: "viagem", data: "2023-02-03", descricao: "Belo Horizonte", valor: -175 }
                },
                4: {
                    1: { categoria: "saude", data: "2023-02-04", descricao: "Remedios", valor: -50 }
                }
            },
            4: {
                1:
                {
                    1:
                        { categoria: "viagem", data: "2023-04-01", descricao: "Belo Horizonte", valor: -175 }
                }
            },
            5: {
                1: {
                    1:
                        { categoria: "saude", data: "2023-05-01", descricao: "Remedios", valor: -50 }
                }
            },
            8: {
                1: {
                    1: { categoria: "moradia", data: "2023-01-01", descricao: "Conta de Luz", valor: -50 },
                    2: { categoria: "trabalho", data: "2023-01-01", descricao: "GitHub Copilot", valor: -75 },
                    3: { categoria: "viagem", data: "2023-01-01", descricao: "Belo Horizonte", valor: -175 },
                    4: { categoria: "saude", data: "2023-01-01", descricao: "Remedios", valor: -50 }
                },
                2: {
                    1: { categoria: "moradia", data: "2023-01-02", descricao: "Conta de Luz", valor: -50 },
                    2: { categoria: "trabalho", data: "2023-01-02", descricao: "GitHub Copilot", valor: -75 },
                    3: { categoria: "viagem", data: "2023-01-02", descricao: "Belo Horizonte", valor: -175 },
                    4: { categoria: "saude", data: "2023-01-02", descricao: "Remedios", valor: -50 }
                },
                3: {
                    1: { categoria: "moradia", data: "2023-01-03", descricao: "Conta de Luz", valor: -50 },
                    2: { categoria: "trabalho", data: "2023-01-03", descricao: "GitHub Copilot", valor: -75 },
                    3: { categoria: "viagem", data: "2023-01-03", descricao: "Belo Horizonte", valor: -175 },
                    4: { categoria: "saude", data: "2023-01-03", descricao: "Remedios", valor: -50 }
                }
            },
        }
    };

    return (
        <div>
            {
                Object.entries(transactions[2023][8]).map(([day, transactions]) => (
                    <div key={day}>
                        <ListDivisor text={day.slice(-2)} />
                        {/* map no dia */}
                        {Object.values(transactions).map((transaction) => (
                            <div key={transaction.descricao} className="grid grid-cols-3 my-1">
                                <CategoryIcon category={transaction.categoria} />
                                <h4>{transaction.descricao}</h4>
                                <h4>{transaction.valor}</h4>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default StatementList;