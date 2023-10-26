// Controle das financas
interface FinanceManager{
    id: string;
    nome: string;
    valor: number;
    data: string;
    status: string;
    tipo: string;
    categoria: string;
    descricao: string;
}
// Diz o tipo de conta que vai ser, se será receita ou despesa
interface KindOfCount extends FinanceManager{
    tipoDeConta: string | string
}

// tipo de lembrete para receber ou pagar algo
type listaDeLembretes = {
        dia: string,
        mes: string,
        ano: string,
        lembretes: KindOfCount[]
    }[]

// type listaDeLembretes = {
//     lembretesSaida?: LembreteSaida[],
//     lembretesEntrada?: LembreteEntrada[]
// }

export type { KindOfCount, listaDeLembretes };