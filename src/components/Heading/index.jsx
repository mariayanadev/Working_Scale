import {Logo} from '/src/assets/icons/index'

export const Heading = () => {
    return(
        <> 
        <div className="space-y-2">
            <div className="flex flex-row gap-20 justify-end items-center pr-9" >
                <Logo/>
                <button className="text-neutral-400 font-semibold  pt-3 pb-3 pl-3 pr-3 tracking-wide hover:text-textColor hover:underline" > Banco de Horas </button>
                <button className="text-stone-400 font-semibold pt-3 pb-3 pl-3 pr-3 tracking-wide hover:text-textColor hover:underline">Escalas</button>
                <button className="text-stone-400 font-semibold  pt-3 pb-3 pl-3 pr-3 tracking-wide hover:text-textColor hover:underline">Horários de trabalho</button>
                <button className="text-stone-400 font-semibold  pt-3 pb-3 pl-3 pr-3 tracking-wide hover:text-textColor hover:underline">Configurações extras</button>        
            </div>
            <hr className="border-spacing-1 border-lime-800 my-4" />
            
        </div>
        </>
    )
}

  