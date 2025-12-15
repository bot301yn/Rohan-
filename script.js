// একটি মৌলিক ফর্ম সাবমিশন হ্যান্ডলার

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // ফর্মের ডিফল্ট সাবমিশন বন্ধ করা

        // এখানে আপনি ফর্মের ডেটা সংগ্রহ করে একটি API endpoint-এ পাঠাতে পারেন
        // আপাতত, আমরা একটি সাধারণ মেসেজ প্রদর্শন করব
        
        // উদাহরণ: ডেটা সংগ্রহ
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // ডেটা কনসোলে দেখানো
        console.log('ফর্ম ডেটা:', { name, email, message });

        // সফলতার মেসেজ দেখানো এবং ফর্ম রিসেট করা
        formMessage.textContent = 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে! ধন্যবাদ।';
        contactForm.reset();

        // কিছু সময় পর মেসেজটি লুকিয়ে ফেলা
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000); // ৫ সেকেন্ড পর মেসেজ চলে যাবে
    });

    // নেভিগেশন লিঙ্কে ক্লিক করলে মসৃণ স্ক্রলিং (Smooth Scrolling)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
