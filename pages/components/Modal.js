import React from "react"
import Image from 'next/image'

const Modal = ({ title, content, show = true, setShow }) => {

    const ref = React.createRef();
    const account = 6680064020;

    React.useEffect(() => {


        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShow(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    const linkConfirm = `whatsapp://send?text=${encodeURIComponent('Assalamualaikum Akhi Hadi, Saya mau konfirmasi donasi Kendaraan Operasional Dakwah - Baturaja OKU ')}&phone=6282280024194`

    return (
        <div className={`fixed top-0 bottom-0 bg-gray-900 bg-opacity-50 w-screen h-full overflow-hidden z-50 ${show ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className={`fixed bottom-0 left-0 w-full transform ${show ? 'translate-y-0' : 'translate-y-full'}`}>
                <div ref={ref} className="w-full max-w-screen-sm mx-auto bg-gray-50 rounded shadow-lg">
                    <header className="px-6 py-3 font-bold flex justify-between items-center border-b">
                        <h3>{title}</h3>
                        <Image src={'/images/bsi.png'} width={100} height={30} />
                    </header>
                    <div className="p-6 flex flex-col space-y-3">

                        <div className="flex justify-between leading-none">
                            <div className="text-sm">Nomor Rekening</div>
                            <div className="font-bold flex items-center space-x-2">
                                <span>{account}</span>
                                <button
                                    onClick={() => { navigator.clipboard.writeText(account) }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 hover:text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between leading-none">
                            <div className="text-sm">Kode Bank BSI</div>
                            <div className="font-semibold">451</div>
                        </div>
                        <div className="text-xs py-3 text-gray-600 border-t">
                            Untuk mempermudah pencatatan Tambahkan angka 02 di belakang sebagai kode unik.
                            Misal Anda mentransfer 500.000 tambahkan menjadi 500.002
                        </div>

                        <a href={linkConfirm} className="text-center px-6 py-2 my-4 bg-green-500 rounded-md text-white">Konfirmasi Transfer</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Modal