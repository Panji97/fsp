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
    { no: 8, name: 'Pengelasan Darat' },
    { no: 9, name: 'Juru Bor Darat (Driller)' },
    { no: 10, name: 'Pengoperasian Lantai Bor' },
    { no: 11, name: 'Pengoperasian Menara Bor' },
    { no: 12, name: 'Pengendali Bor' },
    { no: 13, name: 'Perawatan Sumur' },
    { no: 14, name: 'Operator Lantai Perawatan Sumur' },
    { no: 15, name: 'Operator Menara Perawatan Sumur' },
    { no: 16, name: 'Operator Unit Perawatan Sumur' },
    { no: 17, name: 'Ahli Pengendali Perawatan Sumur' },
    { no: 18, name: 'KS Migas' },
    { no: 19, name: 'Operator KS Industri Migas' },
    { no: 20, name: 'Pengawas KS Industri Migas' },
    { no: 21, name: 'Laboratorium Pengujian Migas' },
    { no: 22, name: 'Operator Pengujian Minyak Lumas' },
    { no: 23, name: 'Scaffolding' },
    { no: 24, name: 'Pembantu Operator' },
    { no: 25, name: 'Operator Scaffolding' },
    { no: 26, name: 'Teknisi Maintenance & Repair' },
    { no: 27, name: 'Quality Control' },
    { no: 28, name: 'Pengelasan SPBU' },
    { no: 29, name: 'Operator SPBU' },
    { no: 30, name: 'Perawatan Mekanik' },
    { no: 31, name: 'Teknisi II' },
    { no: 32, name: 'Teknisi III' },
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
    { no: 57, name: 'AS Umum' },
    { no: 58, name: 'Ahli KS Muda' },
    { no: 59, name: 'Ahli KS Madya' },
    { no: 60, name: 'Ahli KS Utama' },
    { no: 61, name: 'Confined Space/Ruang Terbatas' },
    { no: 62, name: 'Ahli Muda Ruang Terbatas' },
    { no: 63, name: 'Teknisi Ruang Terbatas' },
    { no: 64, name: 'KS Bekerja di Ketinggian' },
    { no: 65, name: 'Teknisi KS Bekerja di Ketinggian' },
    { no: 66, name: 'Gas Tester' },
    { no: 67, name: 'Pengoperasian Gas Tester Industri Migas' },
    { no: 68, name: 'H2S' },
    { no: 69, name: 'Petugas Penanganan Bahaya Gas H2S' },
    { no: 70, name: 'Operasi Produksi Migas' },
    { no: 71, name: 'Pengoperasian Produksi Minyak dan Gas Alam dan Panas Bumi' },
    { no: 72, name: 'GS Minerba' },
    { no: 73, name: 'General Supervisor KS Minerba' },
    { no: 74, name: 'Pengelasan' },
    { no: 75, name: 'Supervisi Pengelasan' },
    { no: 76, name: 'Perencanaan Pengelasan' },
    { no: 77, name: 'Pengelasan Pipa' },
    { no: 78, name: 'Pengelasan Pelat' },
    { no: 79, name: 'Inspeksi Pengelasan Dasar' },
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
        image: '/images/i.jpeg'
    },
    {
        id: 10,
        category: 'events',
        image: '/images/j.jpeg'
    },
    {
        id: 11,
        category: 'events',
        image: '/images/k.jpeg'
    },
    {
        id: 12,
        category: 'training',
        image: '/images/l.jpeg'
    }
]

// Data for clients (Original data)
const clientLogos = [
    { id: 1, name: 'PT. Arjuna Petrogas Indonesia', image: '/images/PT. Arjuna Petrogas Indonesia.jpeg' },
    { id: 2, name: 'PT. Asia Petrocom Service', image: '/images/PT. Asia Petrocom Service.jpeg' },
    { id: 3, name: 'PT. Asrindo Citraseni Satria', image: '/images/PT. Asrindo Citraseni Satria.jpg' },
    { id: 4, name: 'PT. Baker Hughes Indonesia', image: '/images/PT. Baker Hughes Indonesia.jpg' },
    { id: 5, name: 'PT. Bormindo Nusantara', image: '/images/PT. Bormindo Nusantara.png' },
    { id: 6, name: 'PT. General Buditekindo', image: '/images/PT. General buditekindo.jpg' },
    { id: 7, name: 'PT. Greatwall Drilling Asia Pacific', image: '/images/⁠PT. Greatwall Drilling Asia Pacific.jpeg' },
    { id: 8, name: 'PT. Major Drilling Indonesia', image: '/images/PT. Major Drlling Indonesia.jpeg' },
    { id: 9, name: 'PT. Patra Drilling Contractor (Pertamina)', image: '/images/PT. Patra Drilling Contractor (Pertamina).jpeg' }
]

// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const navMenu = document.querySelector('nav ul')

const homeMenu = document.getElementById('home-menu')
const aboutMenu = document.getElementById('about-menu')
const serviceMenu = document.getElementById('service-menu')

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
const clientsTrack = document.getElementById('clients-track')

// Language Management
let currentLanguage = 'id'

// Translation dictionary
const translations = {
    id: {
        // Navigation
        home: 'Beranda',
        about: 'Tentang',
        services: 'Layanan Kami',
        gallery: 'Galeri',
        clients: 'Klien Kami',
        contact: 'Kontak',

        // Hero Section
        heroTitle: 'Tingkatkan Karier Anda dengan Keunggulan Bersertifikat',
        heroDescription:
            'Bersama PT. FAQIB SURYA PERKASA, tingkatkan keterampilan profesional dan kompetensi anda di bidang migas, pertambangan, konstruksi untuk meraih kesuksesan dan peluang karir. Kami menyediakan pelatihan dengan tenaga pengajar yang berpengalaman di bidangnya untuk sertifikasi resmi dari BNSP, KEMNAKER, dan International Association of Drilling Contractor (IADC)',
        exploreServices: 'Jelajahi Layanan',
        contactUs: 'Hubungi Kami',

        // About Section
        aboutTitle: 'Tentang Kami',
        aboutText1:
            'PT. Faqib Surya Perkasa berdiri pada tahun 2018 yang didirikan dengan tujuan untuk turut berkontribusi meningkatkan kualitas sumber daya manusia khususnya di dunia Migas dan training lainnya agar mampu membawa perubahan yang signifikan ke arah kemajuan dengan memiliki keunggulan kompetitif agar tercapai performa kerja yang unggul dan optimal.',
        aboutText2:
            'Dengan menjalin komunikasi dan hubungan yang harmonis, kami akan menjadi partner yang tepat dalam memberikan layanan terbaik dan akan mampu memberikan kontribusi yang positif bagi perusahaan, serta mampu mengakomodir SDM perusahaan dalam memenuhi kebutuhan perkembangan karir sehingga mampu meningkatkan benefits perusahaan dan value bagi customer.',
        vision: 'Visi',
        visionText:
            'Menjadi penyelenggara training dan sertifikasi yang bisa melayani secara profesional, dan berkomitmen dalam pengembangan sumber daya manusia sesuai dengan kompetensi yang dimiliki dan memberikan kepuasan pelanggan.',
        mission: 'Misi',
        mission1: 'Membangun komitmen yang kuat dengan memberikan layanan penyelenggaraan training dan sertifikasi yang terbaik.',
        mission2: 'Menjadi partner terpercaya bagi perusahaan dan organisasi dalam mengembangkan sumber daya manusia.',
        mission3: 'Menjadikan para peserta yang kompeten di bidang keahliannya.',

        // Gallery Section
        galleryTitle: 'Galeri',
        all: 'Semua',
        training: 'Training',
        companyEvents: 'Acara Perusahaan',

        // Clients Section
        clientsTitle: 'Klien Kami',

        // Contact Section
        contactTitle: 'Kontak Kami',
        contactInfo: 'Informasi Kontak',
        contactDescription: 'Hubungi kami untuk informasi lebih lanjut mengenai layanan training dan sertifikasi.',
        address: 'Alamat',
        phone: 'Telepon',
        email: 'Email',
        sendMessage: 'Kirim Pesan',
        fullName: 'Nama Lengkap',
        message: 'Pesan',

        // Footer
        servicesFooter: 'Layanan',
        trainingCertification: 'Training & Sertifikasi',
        bnspCertification: 'Sertifikasi BNSP',
        iadcCertification: 'Sertifikasi IADC',
        kemnakerCertification: 'Sertifikasi Kemnaker',
        leadershipTraining: 'Leadership Training',
        quickLinks: 'Link Cepat',
        allRightsReserved: 'All Rights Reserved.',

        // Form Messages
        formSuccess: 'Pesan Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.'
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About',
        services: 'Our Services',
        gallery: 'Gallery',
        clients: 'Our Clients',
        contact: 'Contact',

        // Hero Section
        heroTitle: 'Empower Your Career with Certified Excellence',
        heroDescription:
            'With PT. FAQIB SURYA PERKASA, enhance your professional skills and competencies in oil & gas, mining, and construction to achieve success and career opportunities. We provide training with experienced instructors in their fields for official certifications from BNSP, KEMNAKER, and International Association of Drilling Contractor (IADC)',
        exploreServices: 'Explore Services',
        contactUs: 'Contact Us',

        // About Section
        aboutTitle: 'About Us',
        aboutText1:
            'PT. Faqib Surya Perkasa was established in 2018 with the aim of contributing to improving the quality of human resources, especially in the oil & gas sector and other training fields, to bring significant changes towards progress with competitive advantages to achieve excellent and optimal work performance.',
        aboutText2:
            'By establishing harmonious communication and relationships, we will become the right partner in providing the best services and will be able to make positive contributions to companies, as well as accommodate company human resources in meeting career development needs, thereby increasing company benefits and value for customers.',
        vision: 'Vision',
        visionText:
            'To become a training and certification organizer that can serve professionally and be committed to developing human resources according to their competencies and providing customer satisfaction.',
        mission: 'Mission',
        mission1: 'Build strong commitment by providing the best training and certification services.',
        mission2: 'Become a trusted partner for companies and organizations in developing human resources.',
        mission3: 'Make participants competent in their fields of expertise.',

        // Gallery Section
        galleryTitle: 'Gallery',
        all: 'All',
        training: 'Training',
        companyEvents: 'Company Events',

        // Clients Section
        clientsTitle: 'Our Clients',

        // Contact Section
        contactTitle: 'Contact Us',
        contactInfo: 'Contact Information',
        contactDescription: 'Contact us for more information about our training and certification services.',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        sendMessage: 'Send Message',
        fullName: 'Full Name',
        message: 'Message',

        // Footer
        servicesFooter: 'Services',
        trainingCertification: 'Training & Certification',
        bnspCertification: 'BNSP Certification',
        iadcCertification: 'IADC Certification',
        kemnakerCertification: 'Kemnaker Certification',
        leadershipTraining: 'Leadership Training',
        quickLinks: 'Quick Links',
        allRightsReserved: 'All Rights Reserved.',

        // Form Messages
        formSuccess: 'Your message has been sent successfully! We will contact you soon.'
    }
}

// Function to translate the page
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]')

    elements.forEach((element) => {
        const key = element.getAttribute('data-translate')
        if (translations[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key]
            } else {
                element.textContent = translations[language][key]
            }
        }
    })

    // Update specific elements without data-translate attribute
    const heroTitle = document.querySelector('.hero h1')
    const heroDescription = document.querySelector('.hero p')
    const aboutTitle = document.querySelector('.about h2')
    const aboutText1 = document.querySelector('.about-text p:nth-child(1)')
    const aboutText2 = document.querySelector('.about-text p:nth-child(2)')
    const visionText = document.querySelector('.vision p')
    const missionItems = document.querySelectorAll('.mission li')
    const galleryTitle = document.querySelector('.gallery h2')
    const clientsTitle = document.querySelector('.clients h2')
    const contactTitle = document.querySelector('.contact h2')
    const contactInfo = document.querySelector('.contact-info h3')
    const contactDescription = document.querySelector('.contact-info p')
    const sendMessage = document.querySelector('.contact-form h3')

    if (heroTitle) heroTitle.textContent = translations[language]['heroTitle']
    if (heroDescription) heroDescription.textContent = translations[language]['heroDescription']
    if (aboutTitle) aboutTitle.textContent = translations[language]['aboutTitle']
    if (aboutText1) aboutText1.textContent = translations[language]['aboutText1']
    if (aboutText2) aboutText2.textContent = translations[language]['aboutText2']
    if (visionText) visionText.textContent = translations[language]['visionText']
    if (missionItems[0]) missionItems[0].textContent = translations[language]['mission1']
    if (missionItems[1]) missionItems[1].textContent = translations[language]['mission2']
    if (missionItems[2]) missionItems[2].textContent = translations[language]['mission3']
    if (galleryTitle) galleryTitle.textContent = translations[language]['galleryTitle']
    if (clientsTitle) clientsTitle.textContent = translations[language]['clientsTitle']
    if (contactTitle) contactTitle.textContent = translations[language]['contactTitle']
    if (contactInfo) contactInfo.textContent = translations[language]['contactInfo']
    if (contactDescription) contactDescription.textContent = translations[language]['contactDescription']
    if (sendMessage) sendMessage.textContent = translations[language]['sendMessage']
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// Language Switcher
if (idLangBtn) {
    idLangBtn.addEventListener('click', () => {
        switchLanguage('id')
    })
}

if (enLangBtn) {
    enLangBtn.addEventListener('click', () => {
        switchLanguage('en')
    })
}

// Language Switcher mobile
if (idLangBtnMobile) {
    idLangBtnMobile.addEventListener('click', () => {
        switchLanguage('id')
    })
}

if (enLangBtnMobile) {
    enLangBtnMobile.addEventListener('click', () => {
        switchLanguage('en')
    })
}

function switchLanguage(lang) {
    currentLanguage = lang

    // Update active buttons
    document.querySelectorAll('.language-switcher button, .language-switcher-mobile button').forEach((btn) => {
        btn.classList.remove('active')
    })

    if (lang === 'id') {
        idLangBtn.classList.add('active')
        idLangBtnMobile.classList.add('active')
    } else {
        enLangBtn.classList.add('active')
        enLangBtnMobile.classList.add('active')
    }

    // Translate page
    translatePage(lang)

    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang)
}

// scroll to section
function handleScrollTo(targetElement) {
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        })

        // Close mobile menu if open
        navMenu.classList.remove('show')
    }
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'id'
    switchLanguage(savedLanguage)

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
        handleScrollTo(home)
    }
    if (menuActive === 'about') {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.add('menu-active')
        serviceMenu.classList.remove('menu-active')
        handleScrollTo(about)
    }
    if (menuActive === 'service') {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.add('menu-active')
    }
    // end menu aktif

    // menu active on scroll
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id')

                if (entry.isIntersecting) {
                    removeActive()
                    if (navLinks[id]) {
                        navLinks[id].classList.add('menu-active')
                        deleteCookie('menu-active')
                    }
                }
            })
        },
        {
            threshold: 0.5
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
        gridItem.innerHTML = `<img src="${item.image}" class="galery-image" alt="Gallery Image ${item.id}">`

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

// Function to render client logos
function renderClients() {
    if (!clientsTrack) return

    clientsTrack.innerHTML = ''

    // Duplicate data logo untuk animasi scroll lancar
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

    // Show success message in current language
    const successMessage = currentLanguage === 'id' ? 'Pesan Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.' : 'Your message has been sent successfully! We will contact you soon.'

    alert(successMessage)

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
        header.style.background = 'rgba(255, 255, 255, 0.95)'
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
