import { HiDownload } from "react-icons/hi";

export default function Achievement() {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 pl-3"> 

    <div className="text-center pt-5">
            <a className="font-serif font-bold text-5xl underline decoration-emerald-800">Achievement</a>
    </div><br/>

          <div className="text-center">
          <button>
          <a className="group bg-cyan-600 text-white px-44 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:scale-125 active:scale-100 transition cursor-pointer borderBlack "
                href="/public/Acheivements-of-DepartmentPT.pdf"
                download
                >
                  ⇒ Click Here To View Achievements Of Department{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a></button><br/><br/><hr/><hr/><hr/><hr/><hr/><br/></div> 

          <div className="text-center">
          <button>
          <a className="group bg-cyan-600 text-white px-44 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:scale-125 active:scale-100 transition cursor-pointer borderBlack "
                href="/public/Achievements-of-FacultyPT.pdf"
                download
                >
                  ⇒ Click Here To View Achievements Of Faculty{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a></button><br/><br/><hr/><hr/><hr/><hr/><hr/><br/></div>

          <div className="text-center">
          <button>
          <a className="group bg-cyan-600 text-white px-44 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:scale-125 active:scale-100 transition cursor-pointer borderBlack "
                href="/public/Achievements-of-Student.pdf"
                download
                >
                  ⇒ Click Here To View Achievements Of Students{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a></button><br/></div>

    </div>
  )
}

