

function InputNome() {
    return (
        <div className="flex flex-row content-center justify-center">
            <label className="h-6 px-4 text-base text-black">Nome</label>
            <input
                id="SearchBar"
                type="text"
                placeholder=""
                className="w-80 h-6 px-2 text-base rounded border-2 border-gray-400 focus:outline-none text-black shadow-md" />
        </div>
    )
}

export default InputNome