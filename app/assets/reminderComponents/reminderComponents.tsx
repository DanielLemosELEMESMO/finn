'use client'

import './reminder.css'
import { LembreteSaida, LembreteEntrada, listaDeLembretes } from "../../types";
import React, { useState, useEffect } from 'react';
import ListDivisor from '../listComponents';

const ReminderListItem = ({ lembrete, alternarStatus }: { lembrete: LembreteSaida | LembreteEntrada, alternarStatus?: Function }) => {

    return (
        <div className="grid grid-cols-3 my-1">
            <input type="checkbox" checked={lembrete.status === "Pago"} className='hiden' id='custom-checkbox' />
            <label htmlFor="custom-checkbox" className="checkbox-label">
                <div className="checkbox-box" onClick={() => { alternarStatus ? alternarStatus(lembrete.data.split('/')[0], lembrete.id) : null }}>
                    <div className='selection-mark'></div>
                </div>
            </label>
            <p>{lembrete.nome}</p>
            <p>{lembrete.valor}</p>
        </div>
    );
}

const ReminderList = () => {

    // lembretes
    const [lembretes, setLembretes] = useState<listaDeLembretes>();

    // definindo valores de exemplo para a lista de lembretes
    const lembretesExemplo: listaDeLembretes = {
        lembretesSaida: [
            {
                dia: "01",
                mes: "10",
                ano: "2023",
                lembretes: [
                    {
                        id: "1",
                        nome: "Conta de luz",
                        valor: 100.00,
                        data: "01/10/2023",
                        status: "A Pagar",
                        tipo: "Conta",
                        categoria: "Casa",
                        descricao: "Conta de luz do mês de janeiro"
                    },
                    {
                        id: "2",
                        nome: "Conta de água",
                        valor: 50.00,
                        data: "01/10/2023",
                        status: "Pago",
                        tipo: "Conta",
                        categoria: "Casa",
                        descricao: "Conta de água do mês de janeiro"
                    },
                    {
                        id: "3",
                        nome: "Conta de aa",
                        valor: 100.00,
                        data: "01/10/2023",
                        status: "Pago",
                        tipo: "Conta",
                        categoria: "Casa",
                        descricao: "Conta de luz do mês de janeiro"
                    },
                ]
            },
            {
                dia: "02",
                mes: "10",
                ano: "2023",
                lembretes: [
                    {
                        id: "4",
                        nome: "Conta de água",
                        valor: 50.00,
                        data: "02/10/2023",
                        status: "Pago",
                        tipo: "Conta",
                        categoria: "Casa",
                        descricao: "Conta de água do mês de janeiro"
                    }
                ]
            },
            {
                dia: "03",
                mes: "10",
                ano: "2023",
                lembretes: [
                    {
                        id: "5",
                        nome: "Conta de luz",
                        valor: 100.00,
                        data: "03/10/2023",
                        status: "Pago",
                        tipo: "Conta",
                        categoria: "Casa",
                        descricao: "Conta de luz do mês de janeiro"
                    },
                    {
                        id: "6",
                        nome: "Conta de água",
                        valor: 50.00,
                        data: "03/10/2023",
                        status: "Pago",
                        tipo: "Conta",
                        categoria: "Casa",
                        descricao: "Conta de água do mês de janeiro"
                    }
                ]
            }
        ],
        lembretesEntrada: [
            {
                dia: "01",
                mes: "10",
                ano: "2023",
                lembretes: [
                    {
                        id: "7",
                        nome: "Salário",
                        valor: 1000.00,
                        data: "01/10/2023",
                        status: "Pago",
                        tipo: "Salário",
                        categoria: "Trabalho",
                        descricao: "Salário do mês de janeiro"
                    }
                ]
            },
            {
                dia: "02",
                mes: "10",
                ano: "2023",
                lembretes: [
                    {
                        id: "8",
                        nome: "Salário",
                        valor: 1000.00,
                        data: "02/10/2023",
                        status: "Pago",
                        tipo: "Salário",
                        categoria: "Trabalho",
                        descricao: "Salário do mês de janeiro"
                    }
                ]
            },
            {
                dia: "03",
                mes: "10",
                ano: "2023",
                lembretes: [
                    {
                        id: "9",
                        nome: "Salário",
                        valor: 1000.00,
                        data: "03/10/2023",
                        status: "A Pagar",
                        tipo: "Salário",
                        categoria: "Trabalho",
                        descricao: "Salário do mês de janeiro"
                    }
                ]
            }
        ]
    }

    useEffect(() => {
        setLembretes(lembretesExemplo);
    }, []);

    // altera status de um lembrete especifico, de acordo com o dia e o id do lembrete
    const alternarStatus = (dia: string, id: string) => {
        // cria uma copia de lembretes
        var lembretesLista = { ...lembretes };
        var lembreteSaida = lembretesLista?.lembretesSaida?.find((lembreteSaida) => lembreteSaida.dia === dia);
        var lembreteEntrada = lembretesLista?.lembretesEntrada?.find((lembreteEntrada) => lembreteEntrada.dia === dia);

        if (lembreteSaida) {
            var lembrete = lembreteSaida.lembretes.find((lembrete) => lembrete.id === id);
            if (lembrete) {
                lembrete.status = lembrete.status === "Pago" ? "A Pagar" : "Pago";
            }
        }

        if (lembreteEntrada) {
            var lembrete = lembreteEntrada.lembretes.find((lembrete) => lembrete.id === id);
            if (lembrete) {
                lembrete.status = lembrete.status === "Pago" ? "A Pagar" : "Pago";
            }
        }

        setLembretes(lembretesLista);
    }

    const resetaLembretes = () => {
        setLembretes(lembretesExemplo);
    }

    return (
        <div className="reminders-container">
            {/* Lembretes de saida */}
            <div className="reminder-list-saida">
                <h3 className='espacoso'>A Receber</h3>
                <div className="reminder-list-entrada-list">
                    {
                        lembretes?.lembretesEntrada?.map((lembreteEntrada) => {
                            return (
                                <div className="reminder-list-entrada-list-item">
                                    <div className='day-title-container'>
                                        <ListDivisor text={lembreteEntrada.dia} />
                                    </div>
                                    <div className='reminders-list ml-1'>
                                        {
                                            lembreteEntrada.lembretes.map((lembreteEntrada, index) => {
                                                return (
                                                    <ReminderListItem key={index} lembrete={lembreteEntrada} alternarStatus={alternarStatus} />
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <h3 className='espacoso'>A Pagar</h3>
                <div className="reminder-list-saida-list">
                    {
                        lembretes?.lembretesSaida?.map((lembreteSaida) => {
                            return (
                                <div className="reminder-list-saida-list-item">
                                    <div className='day-title-container'>
                                        <ListDivisor text={lembreteSaida.dia} />
                                    </div>
                                    <div className='reminders-list ml-1'>
                                        {
                                            lembreteSaida.lembretes.map((lembreteSaida) => {
                                                return (
                                                    <ReminderListItem lembrete={lembreteSaida} alternarStatus={alternarStatus} />
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ReminderList;