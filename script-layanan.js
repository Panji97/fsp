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

// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const navMenu = document.querySelector('nav ul')

const homeMenu = document.getElementById('home-menu')
const aboutMenu = document.getElementById('about-menu')
const serviceMenu = document.getElementById('service-menu')
const informationMenu = document.getElementById('information-menu')

const contactForm = document.getElementById('contactForm')
const idLangBtn = document.getElementById('id-lang')
const enLangBtn = document.getElementById('en-lang')
const idLangBtnMobile = document.getElementById('id-lang-mobile')
const enLangBtnMobile = document.getElementById('en-lang-mobile')
const langBg = document.getElementById('lang-bg-status')
const langBgMobile = document.getElementById('lang-bg-status-mobile')

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
        idLangBtn.classList.add('active');
        enLangBtn.classList.remove('active');
        document.documentElement.lang = 'id';

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
        enLangBtn.classList.add('active');
        idLangBtn.classList.remove('active');
        langBg.classList.remove('lang-bg-in-active')
        langBg.classList.add('lang-bg-en-active')
        langBgMobile.classList.remove('lang-bg-in-active')
        langBgMobile.classList.add('lang-bg-en-active')

        document.documentElement.lang = 'en';

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


window.addEventListener('DOMContentLoaded', () => {
    const { pathname, origin, search, hash } = window.location
    const menuActive = getCookie('menu-active')

    // menu aktif
    if (menuActive === 'home') {
        homeMenu.classList.add('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.remove('menu-active')
        informationMenu.classList.remove('menu-active')
    }
    if (menuActive === 'about') {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.add('menu-active')
        serviceMenu.classList.remove('menu-active')
        informationMenu.classList.remove('menu-active')
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
        enLangBtn.classList.remove('active')
        enLangBtnMobile.classList.remove('active')
        idLangBtn.classList.add('active')
        idLangBtnMobile.classList.add('active')

        langBg.classList.remove('lang-bg-en-active')
        langBg.classList.add('lang-bg-in-active')
        langBgMobile.classList.remove('lang-bg-en-active')
        langBgMobile.classList.add('lang-bg-in-active')
    }
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
    serviceMenu.addEventListener('click', () => {
        homeMenu.classList.remove('menu-active')
        aboutMenu.classList.remove('menu-active')
        serviceMenu.classList.remove('menu-active')
        informationMenu.classList.add('menu-active')
        setCookie('menu-active', 'information')
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
