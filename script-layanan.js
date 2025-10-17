// MODIFIKASI JAVASCRIPT: Hero Carousel (Berganti Gambar)
const heroImages = document.querySelectorAll('.hero-layanan-image')
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

// Data for services (SUDAH DIMODIFIKASI SEBELUMNYA)
const servicesData = [
    {
        id: 1,
        title: 'Perawatan Sumur (BNSP)',
        category: ['migas', 'bnsp'],
        level: 'Menengah',
        icon: 'fas fa-oil-can'
    },
    {
        id: 2,
        title: 'Pemboran (BNSP)',
        category: ['migas', 'bnsp'],
        level: 'Menengah',
        icon: 'fas fa-dolly-flatbed'
    },
    {
        id: 3,
        title: 'IADC Workover',
        category: ['migas', 'iadc'],
        level: 'Lanjut',
        icon: 'fas fa-hard-hat'
    },
    {
        id: 4,
        title: 'IADC Drilling',
        category: ['migas', 'iadc'],
        level: 'Lanjut',
        icon: 'fas fa-cog'
    },
    {
        id: 5,
        title: 'K3 Pesawat Angkat (Kemenaker)',
        category: ['k3', 'kemenaker'],
        level: 'Pemula',
        icon: 'fas fa-truck-loading'
    },
    {
        id: 6,
        title: 'TKB12 (Kemenaker)',
        category: ['k3', 'kemenaker'],
        level: 'Pemula',
        icon: 'fas fa-fire-extinguisher'
    },
    {
        id: 7,
        title: 'Operator Pesawat Angkat (BNSP)',
        category: ['teknikal', 'bnsp'],
        level: 'Menengah',
        icon: 'fas fa-crane'
    },
    {
        id: 8,
        title: 'Rigger (BNSP)',
        category: ['teknikal', 'bnsp'],
        level: 'Menengah',
        icon: 'fas fa-tools'
    },
    {
        id: 9,
        title: 'K3 Migas Operator & Pengawas (BNSP)',
        category: ['k3', 'migas', 'bnsp'],
        level: 'Menengah',
        icon: 'fas fa-shield-alt'
    },
    {
        id: 10,
        title: 'Teknisi Listrik Utilitas (BNSP)',
        category: ['teknikal', 'bnsp'],
        level: 'Lanjut',
        icon: 'fas fa-bolt'
    },
    {
        id: 11,
        title: 'Mekanik Perawatan Tingkat (BNSP)',
        category: ['teknikal', 'bnsp'],
        level: 'Menengah',
        icon: 'fas fa-wrench'
    },
    {
        id: 12,
        title: 'Mekanik Supervisor (BNSP)',
        category: ['teknikal', 'bnsp'],
        level: 'Lanjut',
        icon: 'fas fa-cogs'
    },
    {
        id: 13,
        title: 'Leadership Training',
        category: ['teknikal'],
        level: 'Lanjut',
        icon: 'fas fa-users'
    }
]

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
        image: '/images/a.jpeg'
    },
    {
        id: 2,
        category: 'training',
        image: '/images/b.jpeg'
    },
    {
        id: 3,
        category: 'training',
        image: '/images/c.jpeg'
    },
    {
        id: 4,
        category: 'events',
        image: '/images/d.jpeg'
    },
    {
        id: 5,
        category: 'events',
        image: '/images/e.jpeg'
    },
    {
        id: 6,
        category: 'training',
        image: '/images/f.jpeg'
    },
    {
        id: 7,
        category: 'events',
        image: '/images/g.jpeg'
    },
    {
        id: 8,
        category: 'training',
        image: '/images/h.jpeg'
    },
    {
        id: 9,
        category: 'events',
        image: '/images/c.jpeg'
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
    { id: 6, name: 'Client F', image: '/images/⁠PT. Greatwall Drilling Asia Pacific.jpeg' },
    { id: 6, name: 'Client F', image: '/images/PT. Major Drlling Indonesia.jpeg' },
    { id: 6, name: 'Client F', image: '/images/PT. Patra Drilling Contractor (Pertamina).jpeg' }
]

// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const navMenu = document.querySelector('nav ul')
const homeMenu = document.getElementById('home-menu')
const aboutMenu = document.getElementById('about-menu')
const serviceMenu = document.getElementById('service-menu')
const filterChips = document.querySelectorAll('.filter-chip')
const servicesGrid = document.querySelector('.services-grid')
const certificationTableBody = document.getElementById('certification-table-body')
const paginationContainer = document.getElementById('pagination')
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
const clientsTrack = document.getElementById('clients-track') // NEW DOM ELEMENT

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
        // In a real implementation, you would change the content to Indonesian
        console.log('Switched to Indonesian')
        redirectToBahasa()
    })
}

if (enLangBtn) {
    enLangBtn.addEventListener('click', () => {
        enLangBtn.classList.add('active')
        idLangBtn.classList.remove('active')
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
        // In a real implementation, you would change the content to Indonesian
        console.log('Switched to Indonesian')
        redirectToBahasa()
    })
}

if (enLangBtnMobile) {
    enLangBtnMobile.addEventListener('click', () => {
        enLangBtnMobile.classList.add('active')
        idLangBtnMobile.classList.remove('active')
        // In a real implementation, you would change the content to English
        console.log('Switched to English')
        redirectToEnglish()
    })
}

window.addEventListener('DOMContentLoaded', () => {
    const { pathname, origin, search, hash } = window.location
    const menuActive = getCookie('menu-active')

    // menu aktif
    if (menuActive === 'home') {
        homeMenu.classList.add('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.remove('menu-active')
    }
    if (menuActive === 'about') {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.add('menu-active')
        serviceMenu.classList.remove('menu-active')
    }
    if (menuActive === 'service') {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.add('menu-active')
    }
    // end menu aktif

    if (pathname.includes('/en')) {
        enLangBtn.classList.add('active')
        enLangBtnMobile.classList.add('active')
        idLangBtn.classList.remove('active')
        idLangBtnMobile.classList.remove('active')
    } else {
        enLangBtn.classList.remove('active')
        enLangBtnMobile.classList.remove('active')
        idLangBtn.classList.add('active')
        idLangBtnMobile.classList.add('active')
    }
})

if (homeMenu) {
    homeMenu.addEventListener('click', () => {
        homeMenu.classList.add('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.remove('menu-active')
        setCookie('menu-active', 'home')
    })
}

if (aboutMenu) {
    aboutMenu.addEventListener('click', () => {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.add('menu-active')
        serviceMenu.classList.remove('menu-active')
        setCookie('menu-active', 'about')
    })
}

if (serviceMenu) {
    serviceMenu.addEventListener('click', () => {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.add('menu-active')
        setCookie('menu-active', 'service')
    })
}

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
        // header.style.background = 'rgba(255, 255, 255, 0.95)'
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
