import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Menu Bar */}
      <header className="w-full h-20 max-sm:h-14 bg-white shadow-md flex max-sm:flex-col">
        <div className="flex w-1/3 bg-white h-full max-sm:hidden"></div>
        <div className="list-none flex w-1/3 h-full justify-center items-center max-sm:w-full">
          <li><a href="#" className="px-4 py-2 hover:font-bold">Home</a></li>
          <li><a href="#" className="px-4 py-2 hover:font-bold">Courses</a></li>
          <li><a href="#" className="px-4 py-2 hover:font-bold">About Us</a></li>
          <li><a href="#" className="px-4 py-2 hover:font-bold">Contact</a></li>
        </div>
        <div className="flex w-1/3 h-full justify-center items-center max-sm:hidden">
          <button className=" text-black  px-7 py-2 max-sm:px-2">Join as Teacher</button>
          <button className=" text-black px-7 py-2">Log in</button>
          <button className="bg-yellow-400 text-black px-7 py-2 rounded-xl hover:bg-yellow-500 h-3/5">Sign Up</button>
        </div>
      </header>

      {/* Main Header */}

      <div className="bg-sky-400 min-h-screen flex flex-col items-center justify-center bg-[url('../images/back.png')] bg-cover">
        <main className="flex flex-col items-center justify-center flex-1 text-center p-10">
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-3xl max-sm:text-5xl">Get your skills <br /> upgraded with us</h1>
          <p className="text-sm drop-shadow-4xl text-white mb-6">Transform your productivity and deliver high-quality solutions customers<br /> want, and respond to threats and opportunities.</p>
          <button className="bg-yellow-400 text-black py-3 px-16 rounded hover:bg-yellow-500">Register to get Exclusive offers</button>
          <p className="text-sm text-white mt-4">500+ Free and paid courses</p>
        </main>
      </div>

      {/* Courses */}

      <div className="py-10 bg-gray-100">
        <div className="max-w-full mx-auto px-10">

          {/* Our Course and DropDown */}
          <div className="flex justify-between max-sm:flex-col">
            <div className="text-2xl font-bold text-gray-700 mb-6">Our Best Courses</div>
            <div className="flex max-sm:justify-end">
              <div className="mx-2">
                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Select Category
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="mx-2">
                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Gender
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Sports */}

          <div className="flex-col py-2">
            <div className="flex justify-between">
              <h1 className="text-base font-semibold text-gray-700 py-2">Sports</h1>
              <a href="#" className="text-sm text-blue-500 py-2">View All</a>
            </div>
            <hr className="border-slate-400 w-full py-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">
                <div className="flex justify-between">
                  <div className="h-44 w-1/2">
                    <img src="cricket.png" className="h-40"></img>
                  </div>

                  <div className="flex bg-sky-500 px-2 text-white text-sm h-6 rounded-full justify-center items-center">8:00 to 9:30PM</div>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys & Girls</p>
                <h1 className="text-[20px] font-semibold py-1">Cricket Coaching</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Some description about the cricket training sessions.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Play Cricket Now</a>
            </div>

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">

                <div className="flex justify-between">
                  <div className="h-44 w-1/2">
                    <img src="basketball.png"></img>
                  </div>

                  <div className="flex bg-sky-500 px-2 text-white text-sm h-6 rounded-full justify-center items-center">2hrs</div>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys only</p>
                <h1 className="text-[20px] font-semibold py-1">Basketball Coaching</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Engage with our best trainers for basketball.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Play Basketball Now</a>
            </div>

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">

                <div className="flex justify-between">
                  <div className="h-44 w-1/2">
                    <img src="football.png"></img>
                  </div>
                  <div className="flex bg-sky-500 px-2 text-white text-sm h-6 rounded-full justify-center items-center">2hrs</div>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys only</p>
                <h1 className="text-[20px] font-semibold py-1">Football Coaching</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Engage with our best trainers for basketball.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Play Football Now</a>
            </div>

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">

                <div className="flex justify-between">
                  <div className="h-44 w-1/2">
                    <img src="badminton.png"></img>
                  </div>
                  <div className="flex bg-sky-500 px-2 text-white text-sm h-6 rounded-full justify-center items-center">2hrs</div>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys only</p>
                <h1 className="text-[20px] font-semibold py-1">Badminton Coaching</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Engage with our best trainers for basketball.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Play Badminton Now</a>
            </div>

          </div>

          {/* Education */}
          <br />
          <div className="flex-col py-2">
            <div className="flex justify-between">
              <h1 className="text-base font-semibold text-gray-700 py-2">Education</h1>
              <a href="#" className="text-sm text-blue-500 py-2">View All</a>
            </div>
            <hr className="border-slate-400 w-full py-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">

                <div className="flex justify-between">
                  <div className="h-44 w-1/2">
                    <img src="math.png"></img>
                  </div>
                  <div className="flex bg-sky-500 px-2 text-white text-sm h-6 rounded-full justify-center items-center">8:00 to 9:30PM</div>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys & Girls</p>
                <h1 className="text-[20px] font-semibold py-1">Mathematics</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Some description about the cricket training sessions.</h1>
              </div>
              <a href="#" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Learn Mathematics</a>
            </div>

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">

                <div className="flex justify-between">
                  <div className="h-44 w-1/2">
                    <img src="science.png"></img>
                  </div>
                  <div className="flex bg-sky-500 px-2 text-white text-sm h-6 rounded-full justify-center items-center">2hrs</div>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys only</p>
                <h1 className="text-[20px] font-semibold py-1">Science</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Engage with our best trainers for basketball.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Learn Science</a>
            </div>

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">

                <div className="flex justify-between">
                  <div className="h-44 w-1/2">
                    <img src="history.png"></img>
                  </div>
                  <div className="flex bg-sky-500 px-2 text-white text-sm h-6 rounded-full justify-center items-center">2hrs</div>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys only</p>
                <h1 className="text-[20px] font-semibold py-1">History</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Engage with our best trainers for basketball.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Learn History</a>
            </div>

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">

                <div className="flex justify-between">
                  <div className="h-44 w-1/2">
                    <img src="math.png"></img>
                  </div>
                  <div className="flex bg-sky-500 px-2 text-white text-sm h-6 rounded-full justify-center items-center">2hrs</div>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys only</p>
                <h1 className="text-[20px] font-semibold py-1">Algebra</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Engage with our best trainers for basketball.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Learn Algebra</a>
            </div>

          </div>

          {/* Education */}
          <br />
          <div className="flex-col py-2">
            <div className="flex justify-between">
              <h1 className="text-base font-semibold text-gray-700 py-2">Education</h1>
              <a href="#" className="text-sm text-blue-500 py-2">View All</a>
            </div>
            <hr className="border-slate-400 w-full py-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">
                <div className="h-44 w-1/2">
                  <img src="math.png"></img>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys & Girls</p>
                <h1 className="text-[20px] font-semibold py-1">Mathematics</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Some description about the cricket training sessions.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Learn Mathematics</a>
            </div>

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">
                <div className="h-44 w-1/2">
                  <img src="science.png"></img>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys only</p>
                <h1 className="text-[20px] font-semibold py-1">Science</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Engage with our best trainers for basketball.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Learn Science</a>
            </div>

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">
                <div className="h-44 w-1/2">
                  <img src="history.png"></img>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys only</p>
                <h1 className="text-[20px] font-semibold py-1">History</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Engage with our best trainers for basketball.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Learn History</a>
            </div>

            <div className="bg-sky-500 rounded-2xl shadow flex-col h-[400px]">
              <div className="h-5/6 bg-white rounded-2xl w-full flex-col py-3 px-5">
                <div className="h-44 w-1/2">
                  <img src="math.png"></img>
                </div>
                <p className="bg-sky-500 inline-block px-1 py-1 rounded-2xl text-xs text-white">Boys only</p>
                <h1 className="text-[20px] font-semibold py-1">Algebra</h1>
                <h1 className="text-sm">On Monday & Thursday</h1>
                <h1 className="text-slate-500">Engage with our best trainers for basketball.</h1>
              </div>
              <a href="" className="h-1/6 flex rounded-2xl w-full justify-center items-center text-white text-lg">Learn Algebra</a>
            </div>

          </div>


          {/* Summer bummer vaccation */}
          <div className="bg-white px-10 py-10 my-16 bg-[url('../images/background.png')] bg-no-repeat bg-[length:850px_auto] h-full w-full bg-right-bottom">
            <div className="flex max-sm:flex-col">
              <div className="h-56 w-56">
                <img src="boy.png"></img>
              </div>
              <div className="px-10">
                <div className="text-3xl font-semibold ">Summer bummer vacations</div>
                <div className="text-slate-500 text-lg">Some recent classes and webinars near your location.</div>
                <br />
                <br />
                <div className="px-4 py-2 bg-sky-500 text-center text-white rounded-md inline-block ">Learn Mathematics with best Teachers</div>
              </div>
            </div>
            <div className="flex w-full max-sm:flex-col">
              <div className="max-sm:w-full w-1/2 mx-2 my-6 px-8 py-8 bg-white border-gray-300 border-2 rounded-xl">
                <div className="flex max-sm:flex-col">
                  <div className="h-48 w-1/3 max-sm:w-full max-sm:h-40">
                    <img src="math.png" className="w-4/5"></img>
                  </div>
                  <div className="w-2/3 max-sm:w-full">
                    <p className="bg-sky-500 inline-block px-2 py-1 my-1 rounded-2xl text-xs text-white">Handicapped</p>
                    <div className="text-2xl font-semibold">Mathematics</div>
                    <div className="text-slate-500 text-base">Get course completion certificate and prizes for 7 grade students participate now.</div>
                    <br />
                    <br />
                    <div className="px-4 py-2 bg-sky-500 text-center text-white rounded-md inline-block max-sm:text-xs">Learn Mathematics with best Teachers</div>
                  </div>
                </div>
              </div>
              <div className="max-sm:w-full w-1/2 mx-2 my-6 px-8 py-8 bg-white border-gray-300 border-2 rounded-xl">
                <div className="flex max-sm:flex-col">
                  <div className="h-48 w-1/3 max-sm:w-full max-sm:h-40">
                    <img src="science.png" className="w-4/5"></img>
                  </div>
                  <div className="w-2/3 max-sm:w-full">
                    <p className="bg-sky-500 inline-block px-2 py-1 my-1 rounded-2xl text-xs text-white">Boys & Girls</p>
                    <div className="text-2xl font-semibold">Science</div>
                    <div className="text-slate-500 text-base">Get course completion certificate and prizes for 7 grade students participate now.</div>
                    <br />
                    <br />
                    <div className="px-4 py-2 bg-sky-500 text-center text-white rounded-md inline-block max-sm:text-xs">Learn Science with best Teachers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Feedback */}

          <div className="w-full px-40 max-sm:px-4">
            <h1 className="text-slate-800 font-bold text-3xl">What our customer say?</h1>
            <div className="flex justify-center items-center">
              <div className="relative w-5/6 bg-white my-10 ring-1 ring-sky-500 rounded-xl px-32 py-20 max-sm:w-full max-sm:px-10 max-sm:py-28">
                <img src="quote.png" className="absolute left-24 top-16 max-sm:left-6 max-sm:top-24" width="25px"></img>
                <h1 className="text-xl">I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.</h1>
                <br />
                <p className="text-2xl font-bold">-Nia Kyle</p>
                <a href="" className="flex justify-center items-center h-full absolute bg-sky-500 w-20 top-0 right-0 rounded-r-xl max-sm:h-10 max-sm:w-full max-sm:rounded-b-xl max-sm:rounded-tr-none max-sm:bottom-0 max-sm:left-0 max-sm:top-auto max-sm:right-auto">
                  <img src="arrow.png" width="30px" alt=""></img>
                </a>
                <img src="robo.png" className="h-48 w-48 absolute top-14 -left-24 max-sm:h-32 max-sm:w-32 max-sm:-top-10 max-sm:left-20"></img>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="flex bg-white w-full py-10 max-sm:flex-col">
        <div className="max-sm:w-full w-1/3 bg-[url('../images/group.png')] bg-no-repeat bg-[length:auto_100px] h-24 bg-center"></div>
        <div className="max-sm:w-full w-1/6 text-center max-sm:my-5">
          <h1 className="font-semibold text-lg">ABOUT US</h1>
          <a className="block font-normal my-2" href="">Who we are</a>
          <a className="block font-normal" href="">Work with us</a>
        </div>
        <div className="w-1/6 max-sm:w-full text-center max-sm:my-5">
          <h1 className="font-semibold text-lg">EXPLORE</h1>
          <a className="block font-normal  my-2" href="">Batches and Classes</a>
          <a className="block font-normal" href="">Community</a>
        </div>
        <div className="w-1/6 max-sm:w-full text-center max-sm:my-5">
          <h1 className="font-semibold text-lg">LEGAL</h1>
          <a className="block font-normal my-2" href="">Privacy Policy</a>
          <a className="block font-normal" href="">Terms & Conditions</a>
        </div>
        <div className="w-1/6 max-sm:w-full text-center max-sm:my-5">
          <h1 className="font-semibold text-lg">CONTACT</h1>
          <a className="block font-normal my-2" href="">+92-2323092928</a>
          <a className="block font-normal" href="">Icons</a>
        </div>
      </div>

    </div>
  );
}