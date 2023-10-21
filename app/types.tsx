// tipo a pagar
type LembreteSaida = {
    id: string;
    nome: string;
    valor: number;
    data: string;
    status: string;
    tipo: string;
    categoria: string;
    descricao: string;
}

type LembreteEntrada = {
    id: string;
    nome: string;
    valor: number;
    data: string;
    status: string;
    tipo: string;
    categoria: string;
    descricao: string;
}

type listaDeLembretes = {
    lembretesSaida?:
    {
        dia: string,
        mes: string,
        ano: string,
        lembretes: LembreteSaida[]
    }[],
    lembretesEntrada?:
    {
        dia: string,
        mes: string,
        ano: string,
        lembretes: LembreteEntrada[]
    }[]
}

// type listaDeLembretes = {
//     lembretesSaida?: LembreteSaida[],
//     lembretesEntrada?: LembreteEntrada[]
// }

export type { LembreteSaida, LembreteEntrada, listaDeLembretes };