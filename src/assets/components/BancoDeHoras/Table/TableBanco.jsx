function TableBanco() {
    return (
        <>
            <table className="w-[575px] h-[290px] text-center border-4 border-solid border-gray-300">
                <tr className="border-4 border-solid">
                    <th className="borde-4 border-solid">Data</th>
                    <th className="border-4 border-solid">Entrada 01</th>
                    <th className="border-4 border-solid">Saída 01</th>
                    <th className="border-4 border-solid">Entrada 02</th>
                    <th className="border-4 border-solid">Saída 02</th>
                </tr>
                <tr>
                    <td className="border-4 border-solid">01/04/2024</td>
                    <td className="border-4 border-solid">13:00</td>
                    <td className="border-4 border-solid">17:00</td>
                    <td className="border-4 border-solid">13:00</td>
                    <td className="border-4 border-solid">17:00</td>
                </tr>
            </table>
        </>
    )
}

export default TableBanco 