import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';

export default function Header() {
  // const { currentUser } = useSelector((state) => state.user);
  return(
    
    <header className="bg-gradient-to-r from-fuchsia-100 to-cyan-100  border border-indigo-500  ">
           <div className="flex flex-col">
              <div className="basis-1/2 bg-white  border-b border-indigo-500">
             
                <div className="flex flex-row">
                <Link to="/"><div className="pl-28 basis-1/2">
                    <img src="pact-header-logo-new.png"  alt="Blog Logo" className="h-24 w-96 "/>
                  </div>  </Link>

                  <div className="basis-1/2">
                    <div className="flex flex-row pl-44">
                      <div className="basis-1/2 pt-5">
                        <div className="flex flex-row">
                          <div className="basis-1/6">
                          <a className="mr-5 text-neutral-300 dark:text-neutral-200" >
                            <img src="phone-contact.png" className="mr-3 h-10 w-10" />
                          </a>
                          </div>
                          <div className="basis-5/6 pt-2 pl-2">
                          <a className="text-base">+91 88083 00783</a><br/>          
                          </div>
                        </div>
                          
                      </div>
                      <div className="basis-1/2 pt-5">
                      <div className="flex flex-row">
                        <div className="basis-1/6">
                        <a className="mr-5 text-neutral-300 dark:text-neutral-200">
                            <img src="gmail.png" className="mr-3 h-10 w-10" href='/'/>
                          </a>
                        </div>
                        <div className="basis-5/6 pl-2">
                        secretary.pact.hbtu@gmail.com<hr/>
                        durgesh.soni@hbtu.ac.in
                        </div>
                      </div>        
                      </div>
                    </div> 
                   </div> 
                </div>
            
              </div>  
              <div className="basis-1/2">
                  <ul className="flex gap-20 font-serif font-extrabold text-base pl-10 ">
                          
                  <Link to='/'>
                      <li className="list pt-3 pb-3 pl-10 hover:scale-150">
                          Home
                      </li>
                   </Link>

                  <Link to='/aboutus'>
                      <li className="list pt-3 pb-3 hover:scale-150">
                            About Us 
                       </li>
                  </Link>     

                  <Link to='/events'>
                     <li className="list pt-3 pb-3 hover:scale-150">
                        Events
                      </li>
                  </Link>                

                   <Link to='/team'>
                       <li className="list pt-3 pb-3 hover:scale-150 ">
                          Team
                       </li>
                  </Link>

                   <Link to='/pactmembership'>
                       <li className="list pt-3 pb-3 hover:scale-150 ">
                          Pact Membership 
                       </li>
                    </Link>

                    <Link to='/paintdepartment'>
                        <li className="list pt-3 pb-3 hover:scale-150 ">
                          Paint Department
                        </li>
                    </Link>

                    <Link to='/alumninetwork'>
                        <li className="list pt-3 pb-3 hover:scale-150 ">
                          Our Alumni Network
                        </li>
                     </Link>

                     <Link to='/signup'>
                     <div className="pt-1 pb-1 pl-10 pr-3">
                        <li className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
                           Sign up
                        </li></div>
                     </Link>
                      {/* <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-10 w-10 object-cover '
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign In</li>
            )}
          </Link> */}
                          
                  </ul>
              </div>
          </div> 
        
         


 
    </header>
  
  );
};
