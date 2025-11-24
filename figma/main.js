import { courses, featuredCourse, trendingCourses, webinars } from './data.js';
function renderCourses() {
    const box = document.getElementById("courseList");
    if (!box) return;
    box.innerHTML = "";
    courses.forEach(course => {
        box.innerHTML += `
            <div class="bg-white shadow-md hover:shadow-xl transition rounded-xl p-4 flex flex-col">
                <img src="${course.image}" class="rounded-lg h-40 w-full object-cover" alt="${course.title}">
                <h3 class="mt-3 font-semibold text-lg line-clamp-1">${course.title}</h3>
                <p class="text-gray-500 text-sm">${course.teacher}</p>
                <div class="flex items-center gap-2 mt-2 text-yellow-500 text-sm">
                     ${course.rating} 
                    <span class="text-gray-500">(${course.students})</span>
                </div>
                <div class="mt-3 flex items-center gap-2 mt-auto pt-2">
                    <p class="text-[teal] font-bold text-lg">$${course.price}</p>
                    <p class="line-through text-gray-400 text-sm">$${course.oldPrice}</p>
                </div>
            </div>
        `;
    });
}
function renderTrending() {
    const bigBox = document.getElementById("featuredBox");
    const smallBox = document.getElementById("trendingBox");
    if (!bigBox || !smallBox) return;
    bigBox.innerHTML = `
        <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-lg group min-h-[450px]">
            <img src="${featuredCourse.image}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Featured">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-8 text-white z-10">
                <p class="text-sm font-medium text-gray-300 mb-2">${featuredCourse.author}</p>
                <h3 class="text-2xl md:text-3xl font-bold leading-tight">${featuredCourse.title}</h3>
            </div>
        </div>
    `;

    smallBox.innerHTML = "";
    trendingCourses.forEach(item => {
        smallBox.innerHTML += `
            <div class="bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden border border-gray-100 flex flex-col">
                <div class="relative h-44">
                    <img src="${item.image}" class="w-full h-full object-cover" alt="${item.title}">
                    <div class="absolute top-3 left-3 flex gap-2">
                        <span class="bg-[#3DCBB1] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">${item.badge}</span>
                        <span class="bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">${item.discount}</span>
                    </div>
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-bold text-lg mb-1 line-clamp-1 text-gray-800">${item.title}</h3>
                    <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span> ${item.teacher}</span>
                    </div>
                    <p class="text-gray-500 text-xs line-clamp-2 mb-3 ">${item.desc}</p>
                    <div class="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                         <span class="text-gray-400">(${item.students})</span>
                    </div>
                    <div class="flex items-center gap-2 mt-auto border-t pt-2 border-gray-50">
                        <span class="text-xl font-bold text-gray-900">$${item.price}</span>
                        <span class="text-sm text-gray-400 line-through">$${item.oldPrice}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderWebinars() {
    const box = document.getElementById("webinarList");
    if (!box) return;
    box.innerHTML = "";
    webinars.forEach(item => {
        box.innerHTML += `
            <div class="bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl transition duration-300">
                <div class="relative h-40">
                    <img src="${item.image}" class="w-full h-full object-cover" alt="${item.title}">
                    <div class="absolute top-3 left-3 flex gap-2">
                        <span class="bg-[#3DCBB1] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Best Seller</span>
                        <span class="bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">20% OFF</span>
                    </div>
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-bold text-lg mb-1 ">${item.title}</h3>
                    <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span> ${item.teacher}</span>
                    </div>
                    <p class="text-gray-500 text-xs  mb-4 flex-grow">${item.desc}</p>
                    <div class="flex items-center gap-2 mt-auto">
                        <span class="text-xl font-bold text-gray-900">$${item.price}</span>
                        <span class="text-sm text-gray-400 ">$${item.oldPrice}</span>
                    </div>
                </div>
            </div>
        `;
    });
}
function renderAppLayout() {
    const appContainer = document.getElementById('app');
    if (!appContainer) {
        console.error("Ilova uchun asosiy element (#app) topilmadi!");
        return;
    }
    appContainer.innerHTML = `
        <header class="w-full shadow-sm bg-white fixed top-0 z-50">
            <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <div class="flex items-center gap-2">
                    <img src="./img/logo.png" alt="Logo" class="h-8">
                    <span class="font-bold text-xl">MyCourse.io</span>
                </div>
                <div class="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full w-[33.33%]">
                    <input type="text" placeholder="Search for course" class="w-full bg-transparent outline-none text-[14px]">
                    <img src="./img/headerSearch.png" alt="Search" class="w-4 h-4 opacity-50">
                </div>
                <div class="flex items-center gap-4">
                    <img src="./img/arava.png" alt="Cart" class="w-6 h-6 cursor-pointer">
                    <button class="px-5 py-1.5 border border-black rounded-lg text-sm font-medium hover:bg-gray-50">Login</button>
                    <img src="./img/headerbutton.png" alt="Profile" class="w-15 h-8 rounded-full cursor-pointer bg-gray-200">
                </div>
            </div>
        </header>
        <main>
    <section class="pt-20 relative">
    <div class="relative w-full h-[660px] bg-[url('./img/img.png')] bg-cover bg-center bg-no-repeat">
        
        <div class="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Learn something new everyday</h2>
            <p class="text-lg md:text-xl text-gray-200">Become professionals and ready to join the world.</p>
        </div>

    </div>
</section>
            <section class="max-w-6xl mx-auto bg-white shadow-xl pt-16 pr-16 pl-16 pb-16 rounded-2xl -mt-16 relative z-20 mx-4 md:mx-auto">
                <p class="font-bold text-xl mb-4">What do you want to learn?</p>
                <div class="grid grid-cols-1 flex mt-9 md:grid-cols-4 gap-12">
                    <input type="text" placeholder="Find courses, skills, etc" class="border border-gray-200 bg-gray-50 p-3 rounded-lg outline-none focus:border-[teal]">
                    <input type="text" placeholder="Categories" class="border border-gray-200 bg-gray-50 p-3 rounded-lg outline-none focus:border-[teal]">
                    <input type="text" placeholder="Topic" class="border border-gray-200 bg-gray-50 p-3 rounded-lg outline-none focus:border-[teal]">
                    <button class="bg-[#3DCBB1] hover:bg-[#2ba891] text-white font-bold rounded-lg px-4 py-3 transition">Search</button>
                </div>
            </section>
            <section class="max-w-7xl mx-auto mt-20 px-4 text-center">
                <h2 class="text-2xl font-bold mb-6">Browse Our Top Courses</h2>
                <div class="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-10 text-gray-500 font-medium">
                    <button class="text-black border-b-2 border-black pb-1">Design</button>
                    <button class="hover:text-black transition">Developer</button>
                    <button class="hover:text-black transition">Business</button>
                    <button class="hover:text-black transition">Marketing</button>
                    <button class="hover:text-black transition">Photography</button>
                </div>
                <div id="courseList" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            </section>

            <section class="max-w-7xl relative mx-auto mt-20 px-4">
                <div class="bg-[#212844] rounded-3xl relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
                    <div class="relative z-10 max-w-xl text-left">
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Join Klevr now to get 35% off</h2>
                        <p class="text-gray-400 text-lg mb-8">With our responsive themes and mobile and desktop apps, enjoy a seamless experience on any device so will your blog the best visitors.</p>
                        <button class="bg-[#3DCBB1] hover:bg-[#2ba891] text-white font-medium py-3 px-8 rounded-lg transition">Join Klevr</button>
                    </div>
                    <div class="  md:mt-0 flex justify-end z-10">
                        <img src="./img/bannerRight.png" alt="" class=" -top-4 absolute -right-1 md:max-w-md">
                    </div>
                    <div class="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
                        <div class="absolute -right-20 -top-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl mix-blend-screen"></div>
                        <div class="absolute right-20 bottom-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl mix-blend-screen"></div>
                    </div>
                </div>
            </section>

            <section class="max-w-7xl mx-auto mt-20 mb-20 px-4">
                <h2 class="text-3xl font-bold text-center mb-10">Trending Courses</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div id="featuredBox" class="lg:col-span-1 h-full min-h-[400px]"></div>
                    <div id="trendingBox" class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                </div>
            </section>

            <section class="max-w-7xl mx-auto mt-20 mb-20 px-4">
                <h2 class="text-3xl font-bold text-center mb-10">Upcoming Webinar</h2>
                <div id="webinarList" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            </section>
           
            <section class="w-full bg-[#FFF58C] py-16 px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-2xl md:text-3xl font-bold text-black mb-6">Get personal learning recommendations based on your needs</h2>
                    <button class="bg-[#F2D06B] hover:bg-[#e5c055] border border-black/10 text-black font-semibold py-3 px-10 rounded-lg transition shadow-sm">Get Started</button>
                </div>
            </section>
        </main>
        <footer class="bg-[#18181B] text-white pt-16 pb-8">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between gap-10 mb-16">
                    <div class="md:w-1/3">
                        <div class="flex items-center gap-2 mb-4">
                            <img src="./img/logo1.png" alt="" class="h-8 w-auto bg-white shadow-none rounded px-1">
                            <span class="text-xl font-bold">MyCourse.io</span>
                        </div>
                        <p class="text-gray-500 text-sm pr-4">Empowering learners worldwide with the best courses from top professionals.</p>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-[33%]">
                        <div class="flex flex-col gap-3 text-gray-400 text-sm">
                            <a href="#" class="hover:text-white transition">Web Programming</a>
                            <a href="#" class="hover:text-white transition">Mobile Programming</a>
                            <a href="#" class="hover:text-white transition">Java Beginner</a>
                            <a href="#" class="hover:text-white transition">PHP Beginner</a>
                        </div>
                        <div class="flex flex-col gap-3 text-gray-400 text-sm">
                            <a href="#" class="hover:text-white transition">Adobe Illustrator</a>
                            <a href="#" class="hover:text-white transition">Adobe Photoshop</a>
                            <a href="#" class="hover:text-white transition">Design Logo</a>
                        </div>
                        <div class="flex flex-col gap-3 text-gray-400 text-sm">
                            <a href="#" class="hover:text-white transition">Writing Course</a>
                            <a href="#" class="hover:text-white transition">Photography</a>
                            <a href="#" class="hover:text-white transition">Video Making</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
      <div class="max-w-7xl mx-auto ">
            <img src="./img/ciziq.png" alt="ciziq" class="mt-4 mb-6">
        </div> <div class=" max-w-7xl mx-auto flex flex-col md:flex-row justify-between  mb-16">
          <div>
             <p class="text-[#F9F9F999]">Copyright © MyCourse.io 2024. All Rights Reserved</p>
            </div>
                <div class="flex gap-5 mr-[70px]">
                <img src="./img/Twitter.png" alt="tiwetir">
                <img src="./img/Instagram.png" alt="istagram">
                <img src="./img/Facebook.png" alt="faesbook">

         </div>
       </div>
        </footer>
    `;
}
document.addEventListener('DOMContentLoaded', () => {
    renderAppLayout();
    renderCourses();
    renderTrending();
    renderWebinars();
});