type HeaderProps = {
    storeName: string
    tagline: string
    cartCount: number
    onCartClick: () => void
}

function Header({ storeName, tagline, cartCount, onCartClick }: HeaderProps){
    return (
    <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
            <div>
                <h1 className="text-2xl font-bold">{storeName}</h1>
                
                <p className="text-sm text-gray-500">{tagline}</p>
            </div>
            
            <div className="font-semibold">
                <button onClick={onCartClick}
                    className="font-semibold transition hover:opacity-70">
                    🛒 Cart ({cartCount})
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header