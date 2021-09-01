import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { fetchGoogleSheets } from "./api/sheets"
import Description from './components/Descriptions'
import Modal from './components/Modal'
import axios
  from 'axios'
const currencyFormat = number => {
  let formatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' });

  return formatter.format(number)
}
const Home = ({ data, total }) => {
  let imageRef = React.createRef();
  let [width, setWidth] = React.useState(0);
  let [show, setShow] = React.useState(true);

  // const spreadsheetId = '1ntkoy5-3HYQspZ8Ep-eC3uoyQv0V9a7UzFFoCzYqzBo';
  // let [data, setData] = React.useState(null);
  // let [total, seTotal] = React.useState(0);
  React.useEffect(() => {
    if (imageRef.current) {
      setWidth(imageRef.current.offsetWidth)
    }

  })

  // // const getTotal = items =>{

  // //   data && data.reduce((ac, cur) => {
  // //     // let rows = ac.c;
  // //     console.log(ac, cur);
  // //     // return cur + rows[rows.length - 1].v;
  // //   }, 0)

  // // }


  // const downloadImage = async (url) => {
  //   const response = await axios
  //     .get(url, {
  //       responseType: 'arraybuffer'
  //     })

  //   return Buffer.from(response.data, 'binary').toString('base64')
  // };
  const imageURL = 'https://raw.githubusercontent.com/dankerizer/donasi/master/public/images/donasi-kendaraan.jpg';
  let textToShare = `*🏆  DONASI KENDARAAN OPERASIONAL DAKWAH 🏆*
_Untuk Operasional  Ustadz   di Baturaja_

بسم الله الرحمن الرحيم
الحمد لله والصلاة والسلام على رسول الله وعلى آله وصحبه أجمعين؛


Alhamdulillah, telah datang kepada Anda ladang amal untuk bersedeekah di bulan Muharram ini.

Dibutuhkan satu buah kendaraan untuk operasional sehari-hari Ustadz dalam mengajar, dan berdakwah serta kegiatan lainya.

Untuk itu, kami mengajak Bapak/Ibu serta saudara-saudara semua untuk mencukupi dana pembelian kendaraan tersebut yakni berupa Motor Yamaha Mio Second .

🏅 *Kebutuhan sebesar: Rp. 3.500.000*

_Donasi akan ditutup setelah dana terpenuhi_
_Kelebihan dana akan dialihkan ke Dana Operasional Dakwah (DOD) Yayasan Mutiara Sahabat Sunnah Baturaja._

Silahkan transfer ke rekening Donasi:
Bank : Bank Syariah Indonesia  *(BSI)*
Nomor : *6680064020*
a.n *Muhamad Syamsul Hadi*
Kode Transfer : *451*

Untuk mempermudah pencatatan Tambahkan angka 02 di belakang sebagai kode unik.

*Misal Anda mentransfer 500.000 tambahkan menjadi 500.002*

Atau konfirmasi ke WA Kami  +6282280024194
atau klik ⬇️
https://wa.me/6282280024194

Semoga Allah membalas pahala berlipat untuk Bapak/Ibu semua.

Baarakallahu fiikum`;

  const shareURL = 'whatsapp://send?text=' + encodeURIComponent(textToShare);

  const title = 'Donasi Kendaraan Operasional Dakwah';
  const needed = 3500000;


  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto w-full max-w-screen-sm border shadow-sm bg-white">
        <div>
          <div className="heading" ref={imageRef}>
            <Image src={'/images/donasi-kendaraan.webp'} className={'w-full h-auto'} width={width} height={width} />
          </div>
          <div className="px-4 md:px-6 py-3 flex items-center justify-between">
            <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
            <a href={shareURL}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="px-4 md:px-6 flex items-center space-x-3">
          <div className="font-lg text-indigo-600 font-bold"> {currencyFormat(total)}</div>
          <div className="text-gray-500">terkumpul dari  <span className="font-semibold">{currencyFormat(needed)}</span></div>
        </div>
        <div className="px-4 md:px-6 mt-2">
          <div className="h-2 w-full bg-gray-200 rounded">
            <div className="h-2 bg-indigo-400 rounded" style={{ width: (total / needed) * 100 }}></div>
          </div>
        </div>

        <div className="px-4 md:px-6 my-4">
          <button onClick={() => setShow(true)} className="w-full rounded py-3 px-4 bg-indigo-500 text-white hover:bg-indigo-700 focus:bg-indigo-700 font-bold">Donasi Sekarang</button>
        </div>

        <Description />

        <div className="px-4 md:px-6 py-8">


          <h2 className="font-bold my-3">Donatur</h2>
          <div className="flex flex-col space-y-3">
            {data && data.map((item, index) => {
              let rows = item.c;
              let donatur = item.c[0].v;
              let value = item.c[1].v;
              return (
                <div key={index} className="px-4 md:px-6 py-2 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 md:h-10 w-8 md:w-10 rounded-full border flex items-center justify-center bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-6 md:w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{donatur}</h4>
                      <div className="text-sm">Berdonasi sebesar {currencyFormat(value)}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      <Modal title="Silahkan transfer ke rekening Donasi:" content="kwkwk" show={show} setShow={setShow} />

    </div>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const spreadsheetId = '1ntkoy5-3HYQspZ8Ep-eC3uoyQv0V9a7UzFFoCzYqzBo';

  const data = await fetchGoogleSheets(spreadsheetId).then(res => res && res.table && res.table?.rows)
  let total = data && data.reduce((accumulator, currentValue) => accumulator + currentValue.c[1].v, 0)


  // Pass data to the page via props
  return { props: { data, total } }
}



export default Home;