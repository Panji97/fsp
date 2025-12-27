// MODIFIKASI JAVASCRIPT: Hero Carousel (Berganti Gambar)
const heroImages = document.querySelectorAll('.hero-image')
let currentImageIndex = 0

// ---- COOKIE HELPERS ----
function setCookie(name, value, days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + date.toUTCString()
    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Strict`
}

function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
}

function deleteCookie(name) {
    document.cookie = `${name}=; max-age=0; path=/;`
}

function changeHeroBackground() {
    // Sembunyikan semua gambar
    heroImages.forEach((img) => img.classList.remove('active'))

    // Tentukan index gambar berikutnya
    currentImageIndex = (currentImageIndex + 1) % heroImages.length

    // Tampilkan gambar berikutnya
    heroImages[currentImageIndex].classList.add('active')
}

// Atur interval pergantian gambar (5000ms = 5 detik)
setInterval(changeHeroBackground, 5000)
// AKHIR MODIFIKASI HERO CAROUSEL

// Data for BNSP certifications
const certificationsData = [
    { no: 1, name: 'Inspektur Rig' },
    { no: 2, name: 'Operator Pesawat Angkat' },
    { no: 3, name: 'Operator Kran Mobil' },
    { no: 4, name: 'Operator Kran Putar Tetap' },
    { no: 5, name: 'Operator Kran Jembatan' },
    { no: 6, name: 'Ahli Juru Ikat (Rigging)' },
    { no: 7, name: 'Operator Forklift' },
    { no: 8, name: 'Pengeboran Darat' },
    { no: 9, name: 'Juru Bor Darat (Driller)' },
    { no: 10, name: 'Pengoperasian Lantai Bor' },
    { no: 11, name: 'Pengoperasian Menara Bor' },
    { no: 12, name: 'Pengendali Bor' },
    { no: 13, name: 'Perawatan Sumur' },
    { no: 14, name: 'Operator Lantai Perawatan Sumur' },
    { no: 15, name: 'Operator Menara Perawatan Sumur' },
    { no: 16, name: 'Operator Unit Perawatan Sumur' },
    { no: 17, name: 'Ahli Pengendali Perawatan Sumur' },
    { no: 18, name: 'K3 Migas' },
    { no: 19, name: 'Operator K3 Industri Migas' },
    { no: 20, name: 'Pengawas K3 Industri Migas' },
    { no: 21, name: 'Laboratorium Pengujian Migas' },
    { no: 22, name: 'Operator Pengujian Minyak Lumas' },
    { no: 23, name: 'Scaffolding' },
    { no: 24, name: 'Pembantu Operator' },
    { no: 25, name: 'Operator Scaffolding' },
    { no: 26, name: 'Teknisi Maintenance & Repair' },
    { no: 27, name: 'Quality Control' },
    { no: 28, name: 'Pengelobaan SPBU' },
    { no: 29, name: 'Operator SPBU' },
    { no: 30, name: 'Perawatan Mekanik' },
    { no: 31, name: 'Teknisii II' },
    { no: 32, name: 'Teknisii III' },
    { no: 33, name: 'Supervisor' },
    { no: 34, name: 'Instrumentasi dan Kalibrasi' },
    { no: 35, name: 'Teknisi Instrumentasi Tingkat 1' },
    { no: 36, name: 'Teknisi Instrumentasi Tingkat 2' },
    { no: 37, name: 'Pengawas Instrumentasi' },
    { no: 38, name: 'Inspektur Pesawat Angkat/Crane Inspektur' },
    { no: 39, name: 'Inspektur Bejana Tekan' },
    { no: 40, name: 'Inspektur Bahan Peledak' },
    { no: 41, name: 'Inspektur Pipa Penyalur' },
    { no: 42, name: 'Inspektur Rotating Equipment' },
    { no: 43, name: 'Inspektur Tangki Timbun' },
    { no: 44, name: 'Inspektur Kelistrikan' },
    { no: 45, name: 'Pipe Fitter' },
    { no: 46, name: 'Inspektur Casing Tubing' },
    { no: 47, name: 'Inspektur Platform' },
    { no: 48, name: 'Wireline Logging' },
    { no: 49, name: 'Engineer Instrument Sistem Alat Ukur' },
    { no: 50, name: 'Auditor Energi Industri' },
    { no: 51, name: 'Auditor Energi Bangunan Gedung' },
    { no: 52, name: 'Pelaksanaan Audit Energi Sistem Kelistrikan' },
    { no: 53, name: 'Pelaksanaan Audit Termal dan Mekanikal' },
    { no: 54, name: 'Pelaksanaan Audit Energi Bangunan Gedung' },
    { no: 55, name: 'Manajer Energi Industri' },
    { no: 56, name: 'Manajer Energi Bangunan Gedung' },
    { no: 57, name: 'K3 Umum' },
    { no: 58, name: 'Ahli K3 Muda' },
    { no: 59, name: 'Ahli K3 Madya' },
    { no: 60, name: 'Ahli K3 Utama' },
    { no: 61, name: 'Confined Space/Ruang Terbatas' },
    { no: 62, name: 'Ahli Muda Ruang Terbatas' },
    { no: 63, name: 'Teknisi Ruang Terbatas' },
    { no: 64, name: 'K3 Bekerja di Ketinggian' },
    { no: 65, name: 'Teknisi K3 Bekerja di Ketinggian' },
    { no: 66, name: 'Gas Tester' },
    { no: 67, name: 'Pengoperasian Gas Tester Industri Migas' },
    { no: 68, name: 'H2S' },
    { no: 69, name: 'Petugas Penanganan Bahaya Gas H2S' },
    { no: 70, name: 'Operasi Produksi Migas' },
    { no: 71, name: 'Pengoperasian Produksi Minyak dan Gas Alam dan Panas Bumi' },
    { no: 72, name: 'K3 Minerba' },
    { no: 73, name: 'General Supervisor K3 Minerba' },
    { no: 74, name: 'Pengelasan' },
    { no: 75, name: 'Supervisi Pengelasan' },
    { no: 76, name: 'Perencanaan Pengelasan' },
    { no: 77, name: 'Pengelasan Pipa' },
    { no: 78, name: 'Pengelasan Pelat' },
    { no: 79, name: 'Inspeksi Pengelasan Basah' },
    { no: 80, name: 'Inspeksi Pengelasan Komprehensif' },
    { no: 81, name: 'Inspeksi Pengelasan Standar' }
]

// Data for gallery
const galleryData = [
    {
        id: 1,
        category: 'training',
        image: '/images/a.jpeg',
        alt: 'Sesi Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    },
    {
        id: 2,
        category: 'training',
        image: '/images/b.jpeg',
        alt: 'Sesi Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    },
    {
        id: 3,
        category: 'training',
        image: '/images/c.jpeg',
        alt: 'Sesi Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    },
    {
        id: 4,
        category: 'events',
        image: '/images/d.jpeg',
        alt: 'Event Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    },
    {
        id: 5,
        category: 'events',
        image: '/images/e.jpeg'
    },
    {
        id: 6,
        category: 'training',
        image: '/images/f.jpeg',
        alt: 'Sesi Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    },
    {
        id: 7,
        category: 'events',
        image: '/images/g.jpeg',
        alt: 'Event Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    },
    {
        id: 8,
        category: 'training',
        image: '/images/h.jpeg',
        alt: 'Sesi Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    },
    {
        id: 9,
        category: 'events',
        image: '/images/i.jpeg',
        alt: 'Event Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    },
    {
        id: 10,
        category: 'events',
        image: '/images/j.jpeg',
        alt: 'Event Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    },
    {
        id: 11,
        category: 'events',
        image: '/images/k.jpeg',
        alt: 'Event Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    },
    {
        id: 12,
        category: 'training',
        image: '/images/l.jpeg',
        alt: 'Event Training & Sertifikasi Profesional Migas, Konstruksi, dan Pertambangan'
    }
]

// NEW: Data for clients (Dummy data)
const clientLogos = [
    { id: 1, name: 'Client A', image: '/images/PT. Arjuna Petrogas Indonesia.jpeg' }, // Ganti dengan path logo aktual
    { id: 2, name: 'Client B', image: '/images/PT. Asia Petrocom Service.jpeg' },
    { id: 3, name: 'Client C', image: '/images/PT. Asrindo Citraseni Satria.jpg' },
    { id: 4, name: 'Client D', image: '/images/PT. Baker Hughes Indonesia.jpg' },
    { id: 5, name: 'Client E', image: '/images/PT. Bormindo Nusantara.png' },
    { id: 6, name: 'Client F', image: '/images/PT. General buditekindo.jpg' },
    { id: 7, name: 'Client G', image: '/images/⁠PT. Greatwall Drilling Asia Pacific.jpeg' },
    { id: 8, name: 'Client H', image: '/images/PT. Major Drlling Indonesia.jpeg' },
    { id: 9, name: 'Client I', image: '/images/PT. Patra Drilling Contractor (Pertamina).jpeg' },
    { id: 10, name: 'Client J', image: '/images/PT. client1.jpeg' },
    { id: 11, name: 'Client K', image: '/images/PT. client2.jpeg' },
    { id: 12, name: 'Client L', image: '/images/PT. client3.png' },
    { id: 13, name: 'Client M', image: '/images/PT. client4.png' },
    { id: 14, name: 'PT. Radiant Utama Interinsco', image: '/images/PT. Radiant Utama Interinsco.png' },
    { id: 15, name: 'PT. Bohai Drilling Service Indonesia', image: '/images/PT. Bohai Drilling Service Indonesia.png' }
]

// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const navMenu = document.querySelector('nav ul')

const homeMenu = document.getElementById('home-menu')
const aboutMenu = document.getElementById('about-menu')
const serviceMenu = document.getElementById('service-menu')
const informationMenu = document.getElementById('information-menu')

const home = document.getElementById('home')
const about = document.getElementById('about')

const filterChips = document.querySelectorAll('.filter-chip')
const servicesGrid = document.querySelector('.services-grid')
const certificationTableBody = document.getElementById('certification-table-body')
const paginationContainer = document.getElementById('pagination')
const searchInput = document.getElementById('search-certification')
const certificationModal = document.getElementById('certification-modal')
const closeModalBtn = document.querySelector('.close-modal')
const modalTitle = document.getElementById('modal-title')
const modalDescription = document.getElementById('modal-description')
const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn')
const galleryGrid = document.getElementById('gallery-grid')
const lightbox = document.getElementById('lightbox')
const lightboxImage = document.getElementById('lightbox-image')
const closeLightboxBtn = document.querySelector('.close-lightbox')
const contactForm = document.getElementById('contactForm')
const idLangBtn = document.getElementById('id-lang')
const enLangBtn = document.getElementById('en-lang')
const idLangBtnMobile = document.getElementById('id-lang-mobile')
const enLangBtnMobile = document.getElementById('en-lang-mobile')
const langBg = document.getElementById('lang-bg-status')
const langBgMobile = document.getElementById('lang-bg-status-mobile')
const clientsTrack = document.getElementById('clients-track') // NEW DOM ELEMENT

const bg = document.querySelector('.lang-bg')
const container = document.querySelector('.language-toggle')

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

function redirectToEnglish() {
    const { pathname, origin, search, hash } = window.location
    let newPath = pathname

    // Ensure we don’t add '/en' twice
    if (!pathname.includes('/en')) {
        // Add '/en' at the start for cleaner structure
        newPath = pathname.endsWith('/') ? pathname + 'en' : pathname + '/en'
    }

    // Build full URL
    const newUrl = new URL(origin + newPath + search + hash)

    // Redirect only if different
    if (newUrl.href !== window.location.href) {
        window.location.href = newUrl.href
    }
}

function redirectToBahasa() {
    const { pathname, origin, search, hash } = window.location
    let newPath = pathname

    if (pathname.includes('/en')) {
        // Remove only leading or trailing '/en' safely
        newPath = pathname.replace(/\/en(\/)?$/, '').replace(/^\/en(\/)?/, '/')
        if (newPath === '') newPath = '/' // fallback if root path
    }

    const newUrl = new URL(origin + newPath + search + hash)

    if (newUrl.href !== window.location.href) {
        window.location.href = newUrl.href
    }
}

// Language Switcher
if (idLangBtn) {
    idLangBtn.addEventListener('click', () => {
        idLangBtn.classList.add('active')
        enLangBtn.classList.remove('active')
        document.documentElement.lang = 'id'

        langBg.classList.remove('lang-bg-en-active')
        langBg.classList.add('lang-bg-in-active')
        langBgMobile.classList.remove('lang-bg-en-active')
        langBgMobile.classList.add('lang-bg-in-active')

        // In a real implementation, you would change the content to Indonesian
        console.log('Switched to Indonesian')
        redirectToBahasa()
    })
}

if (enLangBtn) {
    enLangBtn.addEventListener('click', () => {
        enLangBtn.classList.add('active')
        idLangBtn.classList.remove('active')
        langBg.classList.remove('lang-bg-in-active')
        langBg.classList.add('lang-bg-en-active')
        langBgMobile.classList.remove('lang-bg-in-active')
        langBgMobile.classList.add('lang-bg-en-active')

        document.documentElement.lang = 'en'

        // In a real implementation, you would change the content to English
        console.log('Switched to English')
        redirectToEnglish()
    })
}

// Language Switcher mobile
if (idLangBtnMobile) {
    idLangBtnMobile.addEventListener('click', () => {
        idLangBtnMobile.classList.add('active')
        enLangBtnMobile.classList.remove('active')

        langBg.classList.remove('lang-bg-en-active')
        langBg.classList.add('lang-bg-in-active')
        langBgMobile.classList.remove('lang-bg-en-active')
        langBgMobile.classList.add('lang-bg-in-active')

        // In a real implementation, you would change the content to Indonesian
        console.log('Switched to Indonesian')
        redirectToBahasa()
    })
}

if (enLangBtnMobile) {
    enLangBtnMobile.addEventListener('click', () => {
        enLangBtnMobile.classList.add('active')
        idLangBtnMobile.classList.remove('active')

        langBg.classList.remove('lang-bg-in-active')
        langBg.classList.add('lang-bg-en-active')
        langBgMobile.classList.remove('lang-bg-in-active')
        langBgMobile.classList.add('lang-bg-en-active')

        // In a real implementation, you would change the content to English
        console.log('Switched to English')
        redirectToEnglish()
    })
}

// const homeMenu = document.getElementById('home-menu')
// const aboutMenu = document.getElementById('about-menu')
// const serviceMenu = document.getElementById('service-menu')

// scroll to section
function handleScrollTo(targetElement) {
    if (targetElement) {
        console.log('targetElement :', targetElement)
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        })

        // Close mobile menu if open
        navMenu.classList.remove('show')
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const { pathname, origin, search, hash } = window.location
    const menuActive = getCookie('menu-active')
    // Select only the #home and #about sections
    const sections = [document.getElementById('home'), document.getElementById('about')]

    // Select only the corresponding menu links
    const navLinks = {
        home: document.getElementById('home-menu'),
        about: document.getElementById('about-menu')
    }

    // Helper function to remove active class
    const removeActive = () => {
        Object.values(navLinks).forEach((link) => link.classList.remove('menu-active'))
    }

    // menu aktif
    if (menuActive === 'home') {
        homeMenu.classList.add('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.remove('menu-active')
        informationMenu.classList.remove('menu-active')
        handleScrollTo(home)
    }
    if (menuActive === 'about') {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.add('menu-active')
        serviceMenu.classList.remove('menu-active')
        informationMenu.classList.remove('menu-active')
        handleScrollTo(about)
    }
    if (menuActive === 'service') {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.add('menu-active')
        informationMenu.classList.remove('menu-active')
    }
    if (menuActive === 'information') {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.remove('menu-active')
        informationMenu.classList.add('menu-active')
    }
    // end menu aktif

    // Start Switch Languange
    if (pathname.includes('/en')) {
        enLangBtn.classList.add('active')
        enLangBtnMobile.classList.add('active')
        idLangBtn.classList.remove('active')
        idLangBtnMobile.classList.remove('active')

        langBg.classList.remove('lang-bg-in-active')
        langBg.classList.add('lang-bg-en-active')
        langBgMobile.classList.remove('lang-bg-in-active')
        langBgMobile.classList.add('lang-bg-en-active')
    } else {
        bg.style.left = '3px'
        enLangBtn.classList.remove('active')
        enLangBtnMobile.classList.remove('active')
        idLangBtn.classList.add('active')
        idLangBtnMobile.classList.add('active')

        langBg.classList.remove('lang-bg-en-active')
        langBg.classList.add('lang-bg-in-active')
        langBgMobile.classList.remove('lang-bg-en-active')
        langBgMobile.classList.add('lang-bg-in-active')
    }
    // End Switch Languange

    // menu active on scroll
    // Create the Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id')

                if (entry.isIntersecting) {
                    console.log('NONONONONONONON')
                    removeActive()
                    if (navLinks[id]) {
                        navLinks[id].classList.add('menu-active')
                        deleteCookie('menu-active')
                    }
                }
            })
        },
        {
            threshold: 0.5 // triggers when 50% of the section is visible
        }
    )

    // Observe each section
    sections.forEach((section) => {
        if (section) observer.observe(section)
    })
    // end menu active on scroll
})

if (homeMenu) {
    homeMenu.addEventListener('click', () => {
        homeMenu.classList.add('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.remove('menu-active')
        informationMenu.classList.remove('menu-active')
        setCookie('menu-active', 'home')
    })
}

if (aboutMenu) {
    aboutMenu.addEventListener('click', () => {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.add('menu-active')
        serviceMenu.classList.remove('menu-active')
        informationMenu.classList.remove('menu-active')
        setCookie('menu-active', 'about')
    })
}

if (serviceMenu) {
    serviceMenu.addEventListener('click', () => {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.add('menu-active')
        informationMenu.classList.remove('menu-active')
        setCookie('menu-active', 'service')
    })
}

if (informationMenu) {
    informationMenu.addEventListener('click', () => {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.remove('menu-active')
        informationMenu.classList.add('menu-active')
        setCookie('menu-active', 'information')
    })
}

// Services Filter
filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
        // Remove active class from all chips
        filterChips.forEach((c) => c.classList.remove('active'))
        // Add active class to clicked chip
        chip.classList.add('active')

        const filterValue = chip.getAttribute('data-filter')
        filterServices(filterValue)
    })
})

// Certification Table with Pagination
const itemsPerPage = 10
let currentPage = 1
let filteredCertifications = [...certificationsData]

function renderCertificationTable(page = 1) {
    certificationTableBody.innerHTML = ''

    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedItems = filteredCertifications.slice(startIndex, endIndex)

    paginatedItems.forEach((cert) => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${cert.no}</td>
        <td>${cert.name}</td>
    `

        row.addEventListener('click', () => {
            showCertificationModal(cert)
        })

        certificationTableBody.appendChild(row)
    })

    renderPagination()
}

function renderPagination() {
    paginationContainer.innerHTML = ''

    const totalPages = Math.ceil(filteredCertifications.length / itemsPerPage)

    // Previous button
    const prevButton = document.createElement('button')
    prevButton.innerHTML = '&laquo;'
    prevButton.disabled = currentPage === 1
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--
            renderCertificationTable(currentPage)
        }
    })
    paginationContainer.appendChild(prevButton)

    // Page buttons
    // Tampilkan hanya tombol-tombol yang relevan (misalnya 3 di kiri dan 3 di kanan dari halaman saat ini, ditambah awal dan akhir)
    let startPage, endPage
    if (totalPages <= 7) {
        // Jika total halaman kurang dari 7, tampilkan semua tombol
        startPage = 1
        endPage = totalPages
    } else {
        // Jika total halaman lebih dari 7, gunakan elipsis
        if (currentPage <= 4) {
            startPage = 1
            endPage = 5
        } else if (currentPage + 2 >= totalPages) {
            startPage = totalPages - 4
            endPage = totalPages
        } else {
            startPage = currentPage - 2
            endPage = currentPage + 2
        }
    }

    // Logika untuk menampilkan tombol di awal (1)
    if (startPage > 1) {
        const firstPageButton = document.createElement('button')
        firstPageButton.textContent = 1
        firstPageButton.addEventListener('click', () => {
            currentPage = 1
            renderCertificationTable(currentPage)
        })
        paginationContainer.appendChild(firstPageButton)
        if (startPage > 2) {
            const ellipsis = document.createElement('span')
            ellipsis.textContent = '...'
            paginationContainer.appendChild(ellipsis)
        }
    }

    // Tombol-tombol halaman utama
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button')
        pageButton.textContent = i
        pageButton.className = i === currentPage ? 'active' : ''
        pageButton.addEventListener('click', () => {
            currentPage = i
            renderCertificationTable(currentPage)
        })
        paginationContainer.appendChild(pageButton)
    }

    // Logika untuk menampilkan tombol di akhir (totalPages)
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span')
            ellipsis.textContent = '...'
            paginationContainer.appendChild(ellipsis)
        }
        const lastPageButton = document.createElement('button')
        lastPageButton.textContent = totalPages
        lastPageButton.addEventListener('click', () => {
            currentPage = totalPages
            renderCertificationTable(currentPage)
        })
        paginationContainer.appendChild(lastPageButton)
    }

    // Next button
    const nextButton = document.createElement('button')
    nextButton.innerHTML = '&raquo;'
    nextButton.disabled = currentPage === totalPages
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++
            renderCertificationTable(currentPage)
        }
    })
    paginationContainer.appendChild(nextButton)
}

// Gallery Filter
galleryFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        galleryFilterBtns.forEach((b) => b.classList.remove('active'))
        // Add active class to clicked button
        btn.classList.add('active')

        const filterValue = btn.getAttribute('data-filter')
        filterGallery(filterValue)
    })
})

function filterGallery(filter) {
    let filteredGallery

    if (filter === 'all') {
        filteredGallery = galleryData
    } else {
        filteredGallery = galleryData.filter((item) => item.category === filter)
    }

    renderGallery(filteredGallery)
}

function renderGallery(galleryItems) {
    galleryGrid.innerHTML = ''

    galleryItems.forEach((item) => {
        const gridItem = document.createElement('div')
        gridItem.className = 'grid-item'
        gridItem.innerHTML = `<img src="${item.image}" class="galery-image" alt="${item.alt} ${item.id}">`

        gridItem.addEventListener('click', () => {
            showLightbox(item.image)
        })

        galleryGrid.appendChild(gridItem)
    })
}

// Lightbox
function showLightbox(imageSrc) {
    lightboxImage.src = imageSrc
    lightbox.style.display = 'flex'
}

closeLightboxBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none'
    }
})

// Initialize gallery
renderGallery(galleryData)

// NEW: Function to render client logos
function renderClients() {
    if (!clientsTrack) return

    clientsTrack.innerHTML = '' // Bersihkan sebelum render

    // Duplikasi data logo agar animasi scroll lancar
    const allLogos = [...clientLogos, ...clientLogos]

    allLogos.forEach((client) => {
        const logoContainer = document.createElement('div')
        logoContainer.className = 'client-logo-container'
        logoContainer.innerHTML = `
            <img src="${client.image}" alt="Logo ${client.name}" class="client-logo" />
        `
        clientsTrack.appendChild(logoContainer)
    })
}

// Call function to render clients
renderClients()

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', { name, email, message })

    // Show success message
    alert('Pesan Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.')

    // Reset form
    contactForm.reset()
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const targetId = this.getAttribute('href')
        if (targetId === '#') return

        const targetElement = document.querySelector(targetId)
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            })

            // Close mobile menu if open
            navMenu.classList.remove('show')
        }
    })
})

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if (window.scrollY > 100) {
        header.style.background = 'var(--white)'
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)'
    } else {
        header.style.background = 'var(--white)'
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
    }
})

// Fade in animation on scroll
const fadeElements = document.querySelectorAll('.service-card, .about-image, .vision, .mission, .contact-form, .footer-column')

const fadeInOnScroll = () => {
    fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1'
            element.style.transform = 'translateY(0)'
        }
    })
}

// Set initial state
fadeElements.forEach((element) => {
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
})

window.addEventListener('scroll', fadeInOnScroll)
// Trigger once on load
fadeInOnScroll()

// Start Layanan Kami
const disclosures = document.querySelectorAll('.disclosure')

disclosures.forEach((disc) => {
    const btn = disc.querySelector('.disclosure__btn')
    const panel = disc.querySelector('.panel-wrap')

    function setOpen(isOpen) {
        disc.setAttribute('aria-expanded', String(isOpen))
        btn.setAttribute('aria-expanded', String(isOpen))
        panel.setAttribute('aria-hidden', String(!isOpen))
        if (isOpen) {
            const h = panel.scrollHeight
            panel.style.maxHeight = h + 'px'
        } else {
            panel.style.maxHeight = 0
        }
    }

    btn.addEventListener('click', () => {
        const open = disc.getAttribute('aria-expanded') === 'true'
        setOpen(!open)
    })
})
// End Layanan Kami
