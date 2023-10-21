import FramePlanejamento from "./frame-planejamento";
import FrameExtrato from "./frame-extrato";
import Link from 'next/link';

export default function Dashboard() {

    const saldo = 1000.00
    const reservado = 100.00

    // funcao para levar à rota de extrato completo

    return (
        <div className="w-full px-6">
            {/* Saldo */}
            <h1>Saldo - R$ {saldo.toFixed(2).replace('.', ',')}</h1>
            <h2>Reservado - R$ {reservado.toFixed(2).replace('.', ',')}</h2>
            {/* Lembretes */}
            <FramePlanejamento />
            {/* Extrato simplificado */}
            <FrameExtrato />
            <Link href="/statement">Ver extrato completo</Link>
            {/* Gráficos */}
        </div>
    )
}