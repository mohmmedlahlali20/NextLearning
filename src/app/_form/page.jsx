import React from 'react';

function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Contactez-nous</h2>

                <div className="mb-5">
                    <label htmlFor="name" className="text-white text-lg font-medium">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-2 w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent focus:border-pink-400 focus:outline-none shadow-sm"
                        placeholder="Entrez votre nom"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-white text-lg font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-2 w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent focus:border-pink-400 focus:outline-none shadow-sm"
                        placeholder="Entrez votre email"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="text-white text-lg font-medium">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="mt-2 w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent focus:border-pink-400 focus:outline-none shadow-sm"
                        placeholder="Entrez votre message"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 transition ease-in-out duration-200"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
}

export default Page;
