

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50  pl-5 pb-5 pr-5 pt-5 ">
    <div className="bg-gray-600 text-yellow-50 shadow-2xl border-4 border-indigo-300 border-y-indigo-600  p-0">

      <div
      className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-400 lg:justify-between">
      <div className="mr-12 hidden lg:block">
        <span className="text-yellow-50">Get connected with us on social networks:</span>
      </div>
      
      {/* <!-- Social network icons container --> */}
      <div className="flex justify-center">  
        <a className="mr-5 text-neutral-300 dark:text-neutral-200" href="https://www.linkedin.com/company/paint-technology-department-hbtu-kanpur/posts/?feedView=all">
          <img src="linkedin.png" className="mr-3 h-10 w-10" />
        </a>

        <a className="mr-5 text-neutral-300 dark:text-neutral-200" href="https://www.instagram.com/paint.tech.hbtu/">
            <img src="instagram.png" className="mr-3 h-10 w-10" />
        </a>

        <a className="mr-5 text-neutral-300 dark:text-neutral-200" href="https://www.youtube.com/@paintandcoatingspectrum">
            <img src="youtube.png" className="mr-3 h-10 w-10" />
        </a>

        <a className="mr-5 text-neutral-300 dark:text-neutral-200" href="https://www.facebook.com/PACTHBTU/">
            <img src="fb.png" className="mr-3 h-10 w-10" />
          </a>

      </div>
    </div>

    {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
    <div className="mx-6 py-10 text-center md:text-left">
      <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* <!-- TW Elements section --> */}
        <div className="">
          <h6
            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <img src="pacticon.png" className="mr-3 h-24 w-32" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-4 w-4">
              <path
                d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg> */}
            PACT-HBTU
          </h6>
          <p>
                Paint And Coating Technologist Association
          </p>
        </div>
        {/* <!-- Products section --> */}
        <div className="">
          <h6
            className="mb-4 flex justify-center text-2xl font-serif font-extrabold uppercase md:justify-start">
            Up-Coming Seminar
          </h6>
          <p className="mb-4">
            <a className="text-neutral-200 dark:text-neutral-200"
            >»9th PACT VISION SEMINAR<br/> HARCOURT BUTLER TECHNICAL UNIVERSITY</a>
          </p>
          
         
        </div>
        {/* <!-- Useful links section --> */}
        <div className="">
          <h6
            className="mb-4 flex justify-center text-2xl font-serif font-extrabold uppercase md:justify-start">
            Useful links
          </h6>
          <p className="mb-4">
            <a className="text-neutral-200 dark:text-neutral-200 hover:underline" href="secretary.pact.hbtu@gmail.com" 
            >Email</a>
          </p>
          <p className="mb-4">
            <a className="text-neutral-200 dark:text-neutral-200 hover:underline" href="https://www.instagram.com/paint.tech.hbtu/"
            >Instagram</a>
          </p>
          <p className="mb-4">
            <a className="text-neutral-200 dark:text-neutral-200 hover:underline" href="https://www.linkedin.com/company/paint-technology-department-hbtu-kanpur/posts/?feedView=all"
            >Linkedin</a>
          </p>
          <p className="mb-4">
            <a className="text-neutral-200 dark:text-neutral-200 hover:underline" href="https://www.youtube.com/@paintandcoatingspectrum"
            >Youtube</a>
          </p>
        </div>
        {/* <!-- Contact section --> */}
        <div>
          <h6
            className="mb-4 flex justify-center text-2xl font-serif font-extrabold uppercase md:justify-start">
            Contact
          </h6>
          <p className="mb-4 flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5">
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            Address:↦ Harcourt Butler Technical University, Nawabganj, Kanpur (U.P.)- 208002 
          </p>
          <p className="mb-4 flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5">
              <path
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            secretary.pact.hbtu@gmail.com
          </p>
          <p className="mb-4 flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5">
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd" />
            </svg>
            + 91 9839027026
          </p>
        </div>
      </div>
    </div>

    {/* <!--Copyright section--> */}
    <div className="bg-neutral-200 p-6 text-center dark:bg-gray-800">
      <span>PACT :</span>
      <a
        className="font-semibold text-neutral-600 dark:text-neutral-400"
        href="/"
      >Paint And Coating Technologist Association</a>
    </div>
    
      
    

  </div>
  </div>

  )
}
