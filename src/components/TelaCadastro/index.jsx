import { toggleContainer } from "../functions";
export const TelaCadastro = () => {
    return (
        <>
            <div id="containerCadastro" className="hidden transition-opacity opacity-0 w-screen h-screen fixed bg-[#000a]">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="flex flex-col w-[500px] h-fit pb-6 bg-[#bbedca] rounded-lg overflow-hidden shadow-lg shadow-gray-600 ">
                        <div
                            id="headerCadastro"
                            className="flex items-center h-10 bg-[#1cac47] pr-2 pl-7 justify-between"
                        >
                            <h1 className="text-center font-robotoBlack text-white text-2xl m-auto">
                                CADASTRAR ESCALA
                            </h1>

                            <button id="cancelar" onClick={toggleContainer}>
                                <img
                                    src="src/assets/icons/cancelar.png"
                                    className="invert size-7 flex "
                                />
                            </button>
                        </div>
                        <form method="post" action="#">
                            <div
                                id="informacoes"
                                className="mt-4 mx-2 text-[#113a1c]"
                            >
                                <div
                                    id="infosTitulo"
                                    className="border-b-2 border-[#113a1c]"
                                >
                                    <h1 className="font-robotoBold text-xl">
                                        Informações do Colaborador
                                    </h1>
                                </div>
                                <div
                                    id="infosInputs"
                                    className="pl-5 mt-2 grid grid-cols-3 gap-1 text-right"
                                >
                                    <label className="h-6 px-4 text-base text-[#113a1c]">
                                        Nome:
                                    </label>
                                    <input
                                        id="SearchBar"
                                        type="text"
                                        name="nome"
                                        placeholder="Digite seu nome..."
                                        className="col-span-2 h-6 px-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                                    />

                                    <label className="h-6 px-4 text-base text-[#113a1c]">
                                        Cargo:
                                    </label>
                                    <input
                                        name="cargo"
                                        id="SearchBar"
                                        type="text"
                                        placeholder="Digite seu cargo..."
                                        className="col-span-2 h-6 px-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                                    />

                                    <label className="h-6 px-4 text-base text-[#113a1c]">
                                        Contato:
                                    </label>
                                    <input
                                        name="contato"
                                        id="SearchBar"
                                        type="tel"
                                        placeholder="(xx) xxxx-xxxx"
                                        className="col-span-2 h-6 px-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                                    />
                                </div>
                            </div>
                            <section
                                id="tipoEscala"
                                className="mt-6 mx-2  text-[#113a1c]"
                            >
                                <div
                                    id="escalaTitulo"
                                    className="border-b-2 border-[#113a1c]"
                                >
                                    <h1 className="font-robotoBold text-xl">
                                        Tipo de escala
                                    </h1>
                                </div>
                                <div
                                    id="escalaRadios"
                                    className="flex flex-row justify-between text-sm font-bold mx-14 mt-4"
                                >
                                    <span className="flex items-center">
                                        <input type="radio" value="6x1" name="tipoEscala" />
                                        <label>6x1 </label>
                                    </span>
                                    <span className="flex items-center">
                                        <input type="radio" value="5x1" name="tipoEscala" />
                                        <label>5x1 </label>
                                    </span>
                                    <span className="flex items-center">
                                        <input type="radio" value="5x2" name="tipoEscala" />
                                        <label>5x2 </label>
                                    </span>
                                    <span className="flex items-center">
                                        <input type="radio" value="12x36" name="tipoEscala" />
                                        <label>12x36 </label>
                                    </span>
                                </div>
                                <div id="horariosEscala" className="mt-6">
                                    <div
                                        id="infosTitulo"
                                        className="border-b-2 border-[#113a1c]"
                                    >
                                        <h1 className="font-robotoBold text-xl">
                                            Informações do horário
                                        </h1>
                                    </div>
                                    <div className="grid grid-cols-2 text-right mr-[8.5rem] mt-3 gap-1">
                                        <label className="h-6 px-4 text-base text-[#113a1c]">
                                            Inicio do turno 1:
                                        </label>
                                        <input
                                            id="SearchBar"
                                            type="time"
                                            name="nome"
                                            placeholder="Digite seu nome..."
                                            className="h-6 px-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                                        />
                                        <label className="h-6 px-4 text-base text-[#113a1c]">
                                            Fim do turno 1:
                                        </label>
                                        <input
                                            id="SearchBar"
                                            type="time"
                                            name="nome"
                                            placeholder="Digite seu nome..."
                                            className="h-6 px-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                                        />
                                        <label className="h-6 px-4 text-base text-[#113a1c]">
                                            Inicio do turno 2:
                                        </label>
                                        <input
                                            id="SearchBar"
                                            type="time"
                                            name="nome"
                                            placeholder="Digite seu nome..."
                                            className="h-6 px-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                                        />
                                        <label className="h-6 px-4 text-base text-[#113a1c]">
                                            Fim do turno 2:
                                        </label>
                                        <input
                                            id="SearchBar"
                                            type="time"
                                            name="nome"
                                            placeholder="Digite seu nome..."
                                            className="h-6 px-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                                        />
                                    </div>
                                </div>
                            </section>
                            <div
                                id="botoes"
                                className="mt-4 flex flex-row ml-4 gap-1"
                            >
                                <button
                                    name="submit"
                                    className="bg-[#113a1c] text-white  rounded p-1 font-robotoBold flex justify-center items-center"
                                >
                                    Enviar
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleContainer}
                                    className="bg-white text-[#113a1c] border-[#113a1c] font-robotoBold h-8 border-2 rounded p-1 flex justify-center items-center"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
