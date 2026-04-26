function openInvitation() {
    const envelope = document.getElementById('envelope');
    const content = document.getElementById('mainContent');
    const music = document.getElementById('bgMusic');

    // သီချင်းစဖွင့်ရန်
    music.play().catch(e => console.log("Music play blocked by browser"));

    // စာအိတ်ကို အပေါ်သို့ တွန်းတင်ပြီး ဖျောက်လိုက်ခြင်း
    envelope.style.transform = 'translateY(-120%) rotate(-5deg)';
    envelope.style.opacity = '0';

    setTimeout(() => {
        envelope.style.display = 'none';
        content.classList.remove('hidden');
        // Fade in effect
        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transition = 'opacity 1s ease-in';
        }, 100);
    }, 1000);
}
