import * as React from "react"

const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Solo Duel</span>
            </div>
            <div className="grow flex items-center w-auto">
                <a href="/" className="inline-block mt-0 text-teal-200 hover:text-white mr-4">
                    デッキ回し
                </a>
                <a href="/deck" className="inline-block mt-0 text-teal-200 hover:text-white mr-4">
                    デッキ構築
                </a>
            </div>
        </nav>
    )
}

export default Header