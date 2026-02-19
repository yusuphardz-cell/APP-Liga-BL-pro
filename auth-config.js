// auth-config.js
supertokens.init({
    appInfo: {
        appName: "MyPortofolio",
        apiDomain: "https://try.supertokens.com", // Ganti dengan domain API Anda nanti
        apiBasePath: "/auth",
    },
    recipeList: [
        supertokensSession.init(),
        supertokensEmailPassword.init(),
    ],
});

// Cek status sesi saat halaman dimuat
async function checkSession() {
    if (await supertokensSession.doesSessionExist()) {
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'inline-block';
        document.getElementById('secret-info').style.display = 'block';
        document.getElementById('welcome-msg').innerText = "Selamat Datang Kembali!";
    }
}

async function onLogout() {
    await supertokensSession.signOut();
    window.location.reload();
}

checkSession();
