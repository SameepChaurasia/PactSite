import { HiDownload } from "react-icons/hi";

export default function Syllabus() {
  return (
    <div className='bg-gradient-to-r from-emerald-50 to-cyan-50 pl-3'>

      <div className="text-center pt-5">
        <a className="font-serif font-bold text-3xl underline decoration-emerald-800">SYLLABUS</a>
      </div><br/>

      <a className="font-serif font-bold text-2xl underline decoration-cyan-800">• Syllabus → Undergraduate</a><br/><br/>
      <a className="font-serif font-bold text-2xl">B. TECH. IN CHEMICAL TECHNOLOGY – PAINT TECHNOLOGY</a>

      <div className="flex flex-row pl-20 pr-20">
        <div className="basis-10/12">
        <div className="font-serif font-semibold pl-3 pr-10 pb-5 border-4 border-cyan-500  ">
          <br/>
          <a>• B.Tech. SEMESTER WISE NEW COURSE STRUCTURE ALL TECHNOLOGY BRANCHES </a> <br/>
          <button>
          <a className="group bg-slate-500 text-white px-4 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:text-cyan-500 active:scale-100 transition cursor-pointer borderBlack dark:bg-slate-500"
                href="/public/btechsyllabus-1.pdf"
                download
                >
                  Download & View{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a></button><hr/><hr/><hr/><hr/><br/>

          <a>• Old Course Structure and detailed syllabus of B. Tech Chemical Technology- Paint Technology <br/>
          <button>
          <a className="group bg-slate-500 text-white px-4 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:text-cyan-500 active:scale-100 transition cursor-pointer borderBlack dark:bg-slate-500"
                href="/public/btechsyllabus-2.pdf"
                download
                >
                  Download & View{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a></button>
            </a><hr/><hr/><hr/><hr/><br/>

          <a>• Revised Course Structure and Detail Syllabus with Course Outcome (CO) of B. Tech Chemical Technology-Paint Technology effective from the session 2017-18</a><br/>
          <button>
          <a className="group bg-slate-500 text-white px-4 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:text-cyan-500 active:scale-100 transition cursor-pointer borderBlack dark:bg-slate-500"
                href="/public/syllabusPTNew.pdf"
                download
                >
                  Download & View{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a></button>
          <br/>

          </div>
        </div>
        <div className="basis-2/12">
        
        </div>
      </div><br/>

      <a className="font-serif font-bold text-2xl underline decoration-cyan-800">• Syllabus → Post Graduate</a><br/>
      <a className="font-serif text-lg">Post Graduate- M. Tech in Chemical Technology-Paint technology would be started from 2019-20 the syllabus would be made available soon.</a><br/><br/>

      <a className="font-serif font-bold text-2xl underline decoration-cyan-800">• Syllabus → PhD</a><br/>
     <a className="font-serif text-lg"> A⟭ Course structure for PhD program in different specializations.</a><br/>
     <a className="font-serif text-lg"> B⟭ PhD courses should be taken by students in consultation with their thesis supervisors.</a><br/>

    </div>
  )
}
