type HeaderProps = {
    storeName: string
}

function Header({ storeName }: HeaderProps){
    return(
        <header className="flex items-center justify-between border-b px-10 py-5">
            <h1 className="text-2xl font-bold">
                {storeName}
            </h1>

            <nav className="flex gap-6">
                <a href="#" className="text-gray-700 hover:text-black">Home</a>
                <a href="#" className="text-gray-700 hover:text-black">Products</a>
                <a href="#" className="text-gray-700 hover:text-black">About</a>
            </nav>
        </header>
    )
}

export default Header