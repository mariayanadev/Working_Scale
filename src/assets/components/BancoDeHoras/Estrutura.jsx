import ButtonBanco from "../Buttons/ButtonBanco"
import InputNome from "../Inputs/InputBanco"
import ButtonAtualizar from "../Buttons/ButtonAtualizar"

function Estrutura() {
    return (

        <body className="flex justify-center items-center mt-11">
            <div className="w-[800px] h-[500px] border border-gray-500">
                <header className="text-black bg-gray-300 w-full h-12">
                    <h1 className="translate-x-4 translate-y-3">CÁLCULO</h1>
                    <div className="translate-x-1/2 -translate-y-4">
                        <ButtonBanco></ButtonBanco>
                        <ButtonBanco></ButtonBanco>
                        <ButtonBanco></ButtonBanco>

                        <div className="w-full h-10 translate-y-2 -translate-x-1/2">
                            <h2 className="translate-y-4 translate-x-4">
                                Periódo
                            </h2>

                            <h2 className="translate-x-[240px] -translate-y-2">
                                Nº Folha
                            </h2>

                            <h2 className="translate-x-[460px] -translate-y-8">
                                Nome
                            </h2>

                            <div className="w-[193] -translate-y-9 translate-x-4">
                                <InputNome></InputNome>
                            </div>

                            <div className="w-[193] -translate-y-[60px] translate-x-[240px]">
                                <InputNome></InputNome>
                            </div>

                            <div className="w-[193] -translate-y-[85px] translate-x-[460px]">
                                <InputNome></InputNome>
                            </div>

                            <div className="w-[193] -translate-y-[109px] translate-x-[670px]">
                                <ButtonAtualizar></ButtonAtualizar>
                            </div>

                        </div>
                    </div>
                </header>
            </div>
        </body>
    )
}

export default Estrutura