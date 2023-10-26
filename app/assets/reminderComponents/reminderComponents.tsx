'use client'

import './reminder.css'
import { KindOfCount, listaDeLembretes } from "../../types";
import React, { useState, useEffect } from 'react';
import ListDivisor from '../listComponents';

const ReminderListItem = ({ lembrete, alternarStatus }: { lembrete: KindOfCount, alternarStatus?: Function }) => {

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
    const lembretesExemplo: listaDeLembretes = [
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
                        descricao: "Conta de luz do mês de janeiro",
                        tipoDeConta: "Saida"
                    },
                    {
                        id: "2",
                        nome: "Conta de água",
                        valor: 50.00,
                        data: "01/10/2023",
                        status: "Pago",
                        tipo: "Conta",
                        categoria: "Casa",
                        descricao: "Conta de água do mês de janeiro",
                        tipoDeConta: "Saida"
                    },
                    {
                        id: "3",
                        nome: "Conta de aa",
                        valor: 100.00,
                        data: "01/10/2023",
                        status: "Pago",
                        tipo: "Conta",
                        categoria: "Casa",
                        descricao: "Conta de luz do mês de janeiro",
                        tipoDeConta: "Saida"
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
                        descricao: "Conta de água do mês de janeiro",
                        tipoDeConta: "Saida"
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
                        descricao: "Conta de luz do mês de janeiro",
                        tipoDeConta: "Saida"
                    },
                    {
                        id: "6",
                        nome: "Conta de água",
                        valor: 50.00,
                        data: "03/10/2023",
                        status: "Pago",
                        tipo: "Conta",
                        categoria: "Casa",
                        descricao: "Conta de água do mês de janeiro",
                        tipoDeConta: "Saida"
                    }
                ]
            },
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
                        descricao: "Salário do mês de janeiro",
                        tipoDeConta: "Entrada"
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
                        descricao: "Salário do mês de janeiro",
                        tipoDeConta: "Entrada"
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
                        descricao: "Salário do mês de janeiro",
                        tipoDeConta: "Entrada"
                    }
                ]
            }
        
    ]

    useEffect(() => {
        setLembretes(lembretesExemplo);
    },[]);

    // altera status de um lembrete especifico, de acordo com o dia e o id do lembrete
    const alternarStatus = (dia: string, id: string) => {
        // cria uma copia de lembretes
        var lembretesLista = { ...lembretesExemplo };
        var lembreteSaida = lembretesLista.filter((value)=>value.lembretes.filter(value=> value.tipoDeConta === "Saida"));
        var diaSaida = lembreteSaida.find((lembreteSaida) => lembreteSaida.dia === dia)
        var lembreteEntrada = lembretesLista.filter((value)=>value.lembretes.filter(value=> value.tipoDeConta === "Entrada"));
        var diaEntrada = lembreteEntrada.find((lembreteEntrada) => lembreteEntrada.dia === dia);

        if (diaSaida) {
            var lembrete = diaSaida.lembretes.find((lembrete) => lembrete.id === id);
            if (lembrete) {
                lembrete.status = lembrete.status === "Pago" ? "A Pagar" : "Pago";
            }
        }

        if (diaEntrada) {
            var lembrete = diaEntrada.lembretes.find((lembrete) => lembrete.id === id);
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
                        lembretes?.map((diaEntrada) => {
                            return (
                                <div className="reminder-list-entrada-list-item">
                                    <div className='day-title-container'>
                                        <ListDivisor text={diaEntrada.dia} />
                                    </div>
                                    <div className='reminders-list ml-1'>
                                        {
                                            diaEntrada.lembretes.map((diaEntrada, index) => {
                                                return (
                                                    <ReminderListItem key={index} lembrete={diaEntrada} alternarStatus={alternarStatus} />
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
                        lembretes?.map((diaSaida) => {
                            return (
                                <div className="reminder-list-saida-list-item">
                                    <div className='day-title-container'>
                                        <ListDivisor text={diaSaida.dia} />
                                    </div>
                                    <div className='reminders-list ml-1'>
                                        {
                                            diaSaida.lembretes.map((diaSaida) => {
                                                return (
                                                    <ReminderListItem lembrete={diaSaida} alternarStatus={alternarStatus} />
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