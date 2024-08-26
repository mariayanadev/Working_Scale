

function InputCargo() {
    return (
        <div className="flex flex-row content-center justify-center">
            <label className="h-6 px-4 text-base text-black">Cargo</label>
            <input
                id="SearchBar"
                type="text"
                placeholder="Digite seu cargo..."
                className="h-6 px-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" />
        </div>
    )
}

export default InputCargo