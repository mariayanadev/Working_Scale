function InputContato() {
    return (
        <div className="flex flex-row content-center justify-center">
            <label className="h-6 px-4 text-base text-black">Contato</label>
            <input
                id="SearchBar"
                type="tel"
                placeholder="(xx) xxxx-xxxx"
                className="h-6 px-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
         disabled:shadow-none" />
        </div>
    )
}

export default InputContato