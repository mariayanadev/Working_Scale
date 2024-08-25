import { BsFillTelephoneFill } from "react-icons/bs";

export const Footer = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                {/* Conteúdo principal aqui */}
                {/* Substitua pelo seu conteúdo principal */}
            </div>
            <footer className="bg-green-600 border border-gray-600 text-center text-white font-medium p-6">
                <div className="flex flex-wrap justify-center gap-24">
                    <div className="text-left leading-9">
                        <h4 className="font-semibold leading-9 text-2xl text-yellow-300 underline mb-3  decoration-sky-500/30 tracking-wide">Sobre a Working Scale</h4>
                        <p>Esta é a plataforma 
                        <br/>referente aos nossos funcionários 
                        <br/>e suas atividades trabalhistas. 
                        <p className="text-lime-200 italic">Preservamos todas as diretrizes de escala pela CLT </p>
                        </p>
                    </div>
                    <div className="text-left leading-9">
                        <h4 className="font-semibold leading-9 text-2xl text-yellow-300 underline mb-3  decoration-sky-500/30 tracking-wide">Institucional</h4>
                        <a href="#" className="block">Sobre nós</a>
                        <a href="#" className="block">Funcionários</a>
                        <a href="#" className="block"></a>
                        <a href="#" className="block"> FAQ </a>
                        
                    </div>
                    <div className="text-left leading-9">
                        <h4 className="font-semibold leading-9 text-2xl text-yellow-300 underline mb-3 decoration-sky-500/30 tracking-wide">Conteúdos</h4>
                        <a href="#" className="block">Escalas</a>
                        <a href="#" className="block">Banco de Horas</a>
                        <a href="#" className="block">Horários de trabalho</a>
                        <a href="#" className="block">Configurações extras</a>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold leading-9 text-2xl text-yellow-300 underline mb-3 decoration-sky-500/30 tracking-wide"> Siga-nos! </h4>
                        <ul className="list-disc leading-9">
                           <li> <a href="#" className="block"> Instagram </a></li>
                            <li> <a href="#" className="block"> Facebook </a></li>
                            <li> <a href="#" className="block"> LinkedIn </a> </li>
                        </ul>
                    </div> 
                </div>
                <div className="flex flex-col justify-items-center items-center mt-5">
                        <p className="font-semibold leading-9 text-2xl text-yellow-300 underline mb-3 decoration-sky-500/30 tracking-wide"> Contato </p>
                        
                        <button className="flex justify-center items-center gap-2 rounded-3xl bg-lime-200 text-black py-3 px-7"> 
                        <BsFillTelephoneFill/> | (85) 9239-8285</button> 
                        </div>
            </footer>
        </div>
    );
}
