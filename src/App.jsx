import { useState } from "react";

import { RiHome4Line ,RiStore2Fill,RiGridFill, RiWirelessChargingFill, RiUserStarFill, RiDownloadFill, RiSettings3Fill, RiRadioButtonLine, RiMenuFill, RiCloseFill, RiNotification3Line, RiSearch2Fill, RiArrowRightCircleLine, RiArrowRightLine, RiArrowLeftLine} from "react-icons/ri";


function App() {
  const [showMenu ,setShowMenu] = useState (false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#141414] min-h-screen">
      <sidebar className={`z-50 fixed top-0 w-60 h-full overflow-y border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414] transition-all duration-500 lg:left-0 ${showMenu ? "left-0" : "-left-full"}`}>
      <div>
        <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10">Villafañe
        </h1> 
        <ul>
          <li>
            <a href="#"className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiHome4Line/>Home</a></li>
              <li>
            <a href="#"className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiStore2Fill/>Store</a></li>
              <li>
            <a href="#"className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiGridFill/>Library</a></li>
              <li>
            <a href="#"className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiUserStarFill/>Friends</a></li>
              <li>
            <a href="#"className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiWirelessChargingFill/>Live</a></li>
              
            </ul>
            </div>   
            <div>
              <ul>
                <li>
                <a href="#"className="text-gray-300 flex  gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiDownloadFill/>Downloads
              </a>
              <li>
                <a href="#"className="text-gray-300 flex  gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiSettings3Fill/>Setting
              </a>
                  </li>
                  <li>
                <a href=""className="relative text-gray-300 flex  gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <img src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=740&t=st=1667343045~exp=1667343645~hmac=4ce99f4f7ac69d2ca1311f481276e825f708576aa81afe3fa3458399fe897dfd" className="w-6 h-6 object-cover rounded-full"/>
              <RiRadioButtonLine className="absolute text-green-700 bottom-3 left-8 text-[8px]"/>Freddy Mark
              </a>
                  </li>
                  </li>
                  </ul>      
                  </div>           
                  <button onClick={toggleMenu} className="z-50 lg:hidden bg-blue-600 text-white fixed bottom-4 right-1 p-2 text-lg rounded-full">
                  {showMenu ? <RiCloseFill/> : <RiMenuFill/> }
</button>                  
                  </sidebar>
                  <header className="fixed lg:pl-80 w-full flex flex-col md:flex-row items-center gap-4 justify-between gap-4 p-8 bg-[#141414] z-40 "  >
                    <nav className="flex items-center gap-4 xs:order-1 lg-order-none">
                    <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full ">Discover</a>    
                    <a href="#" className="text-gray-500 py-2 px-4 rounded-full ">Browse</a>       
                    <a href="#" className="text-gray-500 py-2 px-4 rounded-full ">Wishlist</a>       
   
                    

                     </nav>
                    <div>
                      <ul className="flex items-center gap-4">
                      <li>
                        <a href="" className="text-gray-500 text-lg"><RiNotification3Line/>{" "} </a></li>
                        <li>
                          <form className="relative">
                          <RiSearch2Fill className="text-gray-500 absolute top-3 left-2"/>
                            <input type="text" className="bg-[#232323] outline-none text-gray-300 rounded-full py-2 pl-8 pr-4 w-full" placeholder="Search"/></form></li></ul> </div></header>
                            <main className="lg:pl-[340px] p-8 pt-36 ">
                              <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
                              <div className="md:col-span-5 relative ">
                                <img  className="w-full h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl " src="https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/banner_bg.jpg " alt="" />
                             <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">Villafañe Gamer</h1>
                             <div className="absolute left-0 bottom-0 text-white p-8 max-w-w-xl">
                              <p className="text-gray-200">Update</p>
                              <h2 className="text-4xl font-extrabold mb-4">The hunt is on Gamer chapter 2- Season 9 : Zero Point</h2>
                              <button className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group-hover">Play for free <RiArrowRightCircleLine className="hover:translate-x-1 transition-all"/></button>
                             </div>
                              </div>
                              <div className="col-span-1 h-[500px] w-full bg-[#232323] lg:rounded-tr-xl lg:rounded-br-xl">
                                <ul className="p-5 lg-p-2 w-20  flex flex-col gap-6 h-full overflow-y rounded-tr-xl rounded-br-xl">
                                  <li>
                                    <a href="" className="flex items-center gap-4 text-white text-lm">
                                      <img src="https://cdn2.unrealengine.com/en-egs-genshin-impact-3-2-carousel-thumb-1200x1600-f12004b2e08b.jpg?h=480&resize=1&w=360" className="w-30 h-20 object-cover  " />{" "} <span className="md:hidden lg:block">Genshin Impact</span> 
                                    </a>
                                  </li>
                                  <li>
                                    <a href="" className="flex items-center gap-4 text-white text-lm">
                                      <img src="https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg?h=480&resize=1&w=360" className="w-20 h-20 object-cover  " />{" "} <span className="md:hidden lg:block">Mount & Blade II</span> 
                                    </a>
                                  </li>
                                  <li>
                                    <a href="" className="flex items-center gap-4 text-white text-lm">
                                      <img src="https://cdn2.unrealengine.com/egs-honkai-carousel-thumb-1200x1600-d4632fd43325.jpg?h=480&resize=1&w=360" className="w-20 h-20 object-cover  " />{" "} <span className="md:hidden lg:block">Honkai Impact 3</span> 
                                    </a>
                                  </li>
                                 
                                    <li>
                                    <a href="" className="flex items-center gap-4 text-white text-lm">
                                      <img src="https://cdn2.unrealengine.com/egs-sins-solar-empire-2-carousel-thumb-1200x1600-5c0b8ea2800d.jpg?h=480&resize=1&w=360" className="w-20 h-20 object-cover  " />{" "} <span className="md:hidden lg:block"> Sins of a Solar</span> 
                                    </a>
                                  </li>
                                  
                                </ul>
                              </div>

                              </div>
                              <div className="mt-10 mb-6 flex items-center justify-between">
                                <h5 className="text-gray-500 text-2xl">Game on sale</h5>
                                <div className="text-gray-400 text-2xl flex items-center gap-4">
                                <RiArrowLeftLine className="cursor-pointer"/>
                                <RiArrowRightLine className="cursor-pointer text-white"/>
                                </div>
                              </div>
                              {/*VideoGame*/ }
                              <div className="grid lg:grid lg:grid-cols-5">
                              <div className="p-4">
                                <img src="https://cdn1.epicgames.com/spt-assets/3cb7b27265f544c1826264534fb8bbd0/evil-nun-the-broken-mask-1nf74.png?h=854&resize=1&w=640" className="w-full h-70 object-cover rounded-xl mb-2"  />
                                <h3 className="text-gray-300 text-lg">Evil Nun</h3>
                                <p className="text-gray-500 mb-3">Action game</p>
                                <span className="text-white ">$8.15</span>

                              </div>
                              <div className="p-4">
                                <img src="https://cdn1.epicgames.com/offer/7f1853beef0a4b40827038d0f47606f3/EGS_DOOM3_idSoftwarePanicButton_S2_1200x1600-ea552d0725a456dad637318dbf2f50c3?h=854&resize=1&w=640" className="w-full h-70 object-cover rounded-xl mb-2"  />
                                <h3 className="text-gray-300 text-lg">Doom 3</h3>
                                <p className="text-gray-500 mb-3">Action game</p>
                                <div className="flex items-center gap-2">
                                  <span className="bg-blue-800 p-1 text-white rounded-lg" >-10%</span>
                                  <span className="text-gray ">$100</span>

                                <span className="text-white ">$90.00</span>
                                </div>

                              </div>
                              <div className="p-4">
                                <img src="https://cdn1.epicgames.com/offer/aa102e1c575d42868a11ac8e79af2126/EGS_Partisans1941_AlterGames_S2_1200x1600-ba0c71510a30532eceafe90b268fca46_1200x1600-ba0c71510a30532eceafe90b268fca46_1200x1600-ba0c71510a30532eceafe90b268fca46?h=854&resize=1&w=640" className="w-full h-70 object-cover rounded-xl mb-2"  />
                                <h3 className="text-gray-300 text-lg">Partisans</h3>
                                <p className="text-gray-500 mb-3">Rpg game</p>
                                <span className="text-white ">$75.15</span>

                              </div>
                              <div className="p-4">
                                <img src="https://cdn1.epicgames.com/spt-assets/dc57439aac3c481aaa52ccb443a4d01a/download-unrailed-offer-11wt8.jpg?h=854&resize=1&w=640" className="w-full h-70 object-cover rounded-xl mb-2"  />
                                <h3 className="text-gray-300 text-lg">Unriled!</h3>
                                <p className="text-gray-500 mb-3">Action y Rpg</p>
                                <span className="text-white ">$18.15</span>

                              </div>
                              <div className="p-4">
                                <img src="https://cdn1.epicgames.com/spt-assets/8d3a5b6098084617a7ce082cc141a9c4/download-the-dark-prophecy-offer-zz80e.png?h=854&resize=1&w=640" className="w-full h-70 object-cover rounded-xl mb-2"  />
                                <h3 className="text-gray-300 text-lg">The dark prophecy</h3>
                                <p className="text-gray-500 mb-3">Terror game</p>
                                <span className="text-white ">$6.15</span>

                             </div>                             </div>


                            
                            </main> 
                  </div>   
       

  );
}

export default App
