import {Logo} from '/src/assets/icons/index'
export const Heading = () => {
    return(
        <> 
        <div className="space-y-2">
            <div className="flex flex-row gap-20 justify-end pr-9 flex-grow mt-5" >
            <Logo/>
            <button className="text-neutral-400 font-semibold  pt-3 pb-3 pl-3 pr-3 hover:text-textColor"> Banco de Horas </button>
            <button className="text-stone-400 font-semibold pt-3 pb-3 pl-3 pr-3  hover:text-textColor">Escalas</button>
            <button className="text-stone-400 font-semibold  pt-3 pb-3 pl-3 pr-3  hover:text-textColor">Horários de trabalho</button>
            <button className="text-stone-400 font-semibold  pt-3 pb-3 pl-3 pr-3  hover:text-textColor">Configurações extras</button>        
            </div>
            <hr className="border-t border-gray-300 my-4" />
            
        </div>
        </>
    )
}

  