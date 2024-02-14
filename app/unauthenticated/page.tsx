export default async function Unauthenticated() {

    return (
        <main className="h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/kingforge_nobg.png')", filter: 'brightness(0.8)' }}></div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative flex flex-col m-6 space-y-8 bg-white rounded-xl md:flex-row md:space-y-0 shadow-lg">
                    <div className="flex flex-col justify-center p-8 md:p-12">
                        <h1 className="text-4xl font-bold mb-4 flex justify-center">Warning: Unauthenticated</h1>
                        <p className="text-gray-700 text-base">This URL is valid but you are not authorized for this content. Please Login</p>
                    </div>
                </div>
            </div>
        </main>

    );
}
