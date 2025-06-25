document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
  const nav = document.getElementById('navbar');
  const icon = document.getElementById('burger-icon');


  nav.classList.toggle('active');

  if (icon.style.transform === 'rotate(45deg)') {
    icon.style.transform = 'rotate(0deg)';
  } else {
    icon.style.transform = 'rotate(45deg)';
  }
}

const botToken = '7952468293:AAHlwmLHAh1GjrIb26jkOrDPl_4LD_33vsI';
const chatId = '5643226867';

 const input = document.querySelector("#phone");


  document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.name.value;
    const district = this.district.value;
    const grade = this.grade.value;
    const phone = this.phone.value;

    const message = `
📥 Yangi Ariza!
👤 Ismi: ${name}
📍 Tuman: ${district}
🎓 Sinfi: ${grade}
📞 Telefon: ${phone}
    `;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    }).then(res => {
      if (res.ok) {
        alert("Arizangiz yuborildi! Tez orada siz bilan bog'lanamiz.");
        this.reset();
      } else {
        alert("Xatolik yuz berdi! Iltimos, qayta urinib ko‘ring.");
      }
    });
  });


  // Закрытие меню при клике на ссылку (для UX)
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});

  document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault(); // если кнопка в теге <a>
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('.maktabhaqida').addEventListener('click', function(e) {
    e.preventDefault(); // если кнопка в теге <a>
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.querySelector('.prices').addEventListener('click', function(e) {
    e.preventDefault(); // если кнопка в теге <a>
    document.getElementById('price').scrollIntoView({ behavior: 'smooth' });
  });
  // backend/server.js
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const token = process.env.BOT_TOKEN; // <-- Загружаем токен из .env

const bot = new TelegramBot(token, { polling: false });

app.use(express.json());

app.post("/sendMessage", (req, res) => {
  const { chatId, text } = req.body;

  bot.sendMessage(chatId, text)
    .then(() => res.send("Message sent"))
    .catch(err => res.status(500).send("Error: " + err));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

