import React from 'react';
import ReactMarkdown from 'react-markdown'

const Description = () => {
    let [showMore, setShowMore] = React.useState(true)
    const markdown = `### 🏆  DONASI KENDARAAN OPERASIONAL DAKWAH 🏆
**Untuk Operasional  Ustadz   di Baturaja**

بسم الله الرحمن الرحيم
الحمد لله والصلاة والسلام على رسول الله وعلى آله وصحبه أجمعين؛


Alhamdulillah, telah datang kepada Anda ladang amal untuk bersedeekah di bulan Muharram ini.

Dibutuhkan satu buah kendaraan untuk operasional sehari-hari Ustadz dalam mengajar, dan berdakwah serta kegiatan lainya.

Untuk itu, kami mengajak Bapak/Ibu serta saudara-saudara semua untuk mencukupi dana pembelian kendaraan tersebut yakni berupa Motor Yamaha Mio Second .

🏅 Kebutuhan sebesar: **Rp. 3.500.000**

*Donasi akan ditutup setelah dana terpenuhi
Kelebihan dana akan dialihkan ke Dana Operasional Dakwah (DOD) Yayasan Mutiara Sahabat Sunnah Baturaja.*

Silahkan transfer ke rekening Donasi:

Bank : **Bank Syariah Indonesia  (BSI)**

Nomor : **6680064020**

a.n **Muhamad Syamsul Hadi**

Kode Transfer : **451**



Untuk mempermudah pencatatan Tambahkan angka 02 di belakang sebagai kode unik.

Misal Anda mentransfer 500.000 tambahkan menjadi 500.002

---
Atau konfirmasi ke WA Kami  **[+6282280024194 ](https://wa.me/6282280024194%20)**

atau klik ⬇️

[https://wa.me/6282280024194](https://wa.me/6282280024194)

Semoga Allah membalas pahala berlipat untuk Bapak/Ibu semua.

**Baarakallahu fiikum**`;

    const closes = `#Alhamdulillah, Donasi telah terpenuhi

Kami ucapkan Jazakumullah Khoiron atas partisipasinya, dan donasi dari Antum semua.

Semoga Allah membalas dengan kebaikan yang berlimpah, serta menjadi pemberat di Yaumul Hisab

Baarakallahu Fikum.

`;
    return (
        <div className="relative">
            <ReactMarkdown children={closes} className={`prose lg:prose-md px-4 md:px-6 py-6  overflow-y-hidden relative ${showMore ? 'h-auto' : 'h-60'}`} />
            <div className="h-16 w-full absolute bottom-0 left-0 from-white bg-blend-saturation to-transparent bg-gradient-to-t"></div>
            <button className="w-full text-center text-indigo-500  z-30 py-3 -bottom-10 absolute left-0" onClick={() => setShowMore(!showMore)}>{showMore ? 'Lihat lebih sedikit' : 'Lihat lebih banyak'}</button>
        </div>
    )

}


export default Description;