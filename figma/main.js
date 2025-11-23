const courses = [{
    title: "UI Design For Beginners",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    rating: 4.5,
    students: "1.2K",
    image: "./img/imgThere.png"
}, {
    title: "Vue JavaScript Course",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    rating: 4.7,
    students: "1.2K",
    image: "./img/imgfour.png"
}, {
    title: "Mobile Dev React Native",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    rating: 4.6,
    students: "1.2K",
    image: "./img/imgFive.png"
}, {
    title: "Website Dev Zero To Hero",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    rating: 4.8,
    students: "1.2K",
    image: "./img/imgSex.png"
},];

function renderCourses() {
    const box = document.getElementById("courseList");
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

const featuredCourse = {
    image: "./img/img_1.png", author: "Ana Kursova", title: "Masterclass in Design Thinking, Innovation & Creativity"
};

const trendingCourses = [{
    title: "Design Fundamentals",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    students: "1.2K",
    image: "./img/image1.png",
    badge: "Best Seller",
    discount: "20% OFF",
    desc: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator..."
}, {
    title: "Ionic - Build iOS, Android & Web...",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    students: "1.2K",
    image: "./img/image2.png",
    badge: "Best Seller",
    discount: "20% OFF",
    desc: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator..."
}, {
    title: "Bootcamp Vue.js Web Framework",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    students: "1.2K",
    image: "./img/image3.png",
    badge: "Best Seller",
    discount: "20% OFF",
    desc: "Learn how to make web application with Vue.js Framework."
}, {
    title: "Bootcamp Vue.js Web Framework",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    students: "1.2K",
    image: "./img/image4.png",
    badge: "Best Seller",
    discount: "20% OFF",
    desc: "Learn how to make web application with Vue.js Framework."
}];

function renderTrending() {
    const bigBox = document.getElementById("featuredBox");
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

    const smallBox = document.getElementById("trendingBox");
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
                    <p class="text-gray-500 text-xs line-clamp-2 mb-3 leading-relaxed">${item.desc}</p>
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

const webinars = [{
    title: "Adobe Illustrator Scratch Course",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    image: "./img/rasm1.png",
    desc: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator..."
}, {
    title: "Bootcamp Vue.js Web Framework",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    image: "./img/rasm2.png",
    desc: "Learn how to make web application with Vue.js Framework."
}, {
    title: "Design Fundamentals",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    image: "./img/rasm3.png",
    desc: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator..."
}, {
    title: "Ionic - Build iOS, Android & Web...",
    teacher: "Kitani Studio",
    price: 24.92,
    oldPrice: 32.90,
    image: "./img/rasm4.png",
    desc: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator..."
}];

function renderWebinars() {
    const box = document.getElementById("webinarList");
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
                    <h3 class="font-bold text-lg mb-1 leading-tight line-clamp-1">${item.title}</h3>
                    <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span> ${item.teacher}</span>
                    </div>
                    <p class="text-gray-500 text-xs line-clamp-2 mb-4 flex-grow">${item.desc}</p>
                    <div class="flex items-center gap-2 mt-auto">
                        <span class="text-xl font-bold text-gray-900">$${item.price}</span>
                        <span class="text-sm text-gray-400 line-through">$${item.oldPrice}</span>
                    </div>
                </div>
            </div>
            <div>
      <div class="max-w-7xl mx-auto ">
            <img src="./img/ciziq.png" alt="ciziq" class="mt-4">
        </div> <div class=" max-w-7xl mx-auto flex flex-col md:flex-row justify-between  mb-16">
          <div>
             <p>Copyright © MyCourse.io 2024. All Rights Reserved</p>
            </div>
                <div class="flex gap-5">
                <img src="./img/Twitter.png" alt="tiwetir">
                <img src="./img/Instagram.png" alt="istagram">
                <img src="./img/Facebook.png" alt="faesbook">

</div>
</div>
        </footer>
    `;
}

renderCourses();
renderTrending();
renderWebinars();
