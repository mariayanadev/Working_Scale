/* eslint-disable react/prop-types */
import { toggleContainer } from "../functions";
function Button({className}) {
    return (
        <div className={`${className}`}>
            <button id="button_main-screen"
                onClick={toggleContainer}
                className="flex flex-row justify-center items-center text-white text-lg rounded bg-green-base w-80 h-10 hover:bg-green-bold">
                <span className="text-2xl mb-0.75 align-top mx-1">+ </span>
                Nova escala
            </button>

        </div>
    )
}

export default Button
