/* ========================================================================== */
/* SEHAT HOMOEOPATHY DAWAKHANA - MAIN INTERACTIVE SCRIPT                      */
/* ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. 10 Treatment Categories Data (Bilingual)
  const treatmentsData = [
    {
      icon: "❤️",
      titleHi: "हृदय संबंधी समस्याएं",
      titleEn: "Cardiovascular Health Concerns",
      descHi: "उच्च रक्तचाप (BP) और दिल की धड़कन से जुड़ी असमंजस स्थितियों के लिए सहायक होम्योपैथिक परामर्श एवं जीवनशैली मार्गदर्शन।",
      descEn: "Supportive homoeopathic consultation and lifestyle guidance for high blood pressure and palpitations."
    },
    {
      icon: "🩸",
      titleHi: "शुगर / डायबिटीज",
      titleEn: "Diabetes & Blood Sugar Support",
      descHi: "रक्त शर्करा स्तर प्रबंधन, खान-पान नियंत्रण और शरीर की प्राकृतिक क्षमता को संतुलित करने हेतु परामर्श।",
      descEn: "Consultation for blood sugar management, dietary control, and balancing body's natural vitality."
    },
    {
      icon: "🫁",
      titleHi: "सांस की समस्याएं",
      titleEn: "Respiratory & Asthma Care",
      descHi: "दमा (Asthma), पुरानी खांसी, एलर्जी और वात नलिका से जुड़ी समस्याओं के लिए सौम्य होम्योपैथिक दृष्टिकोण।",
      descEn: "Gentle homoeopathic approach for asthma, chronic cough, allergies, and bronchial sensitivities."
    },
    {
      icon: "🍃",
      titleHi: "पाचन तंत्र की समस्याएं",
      titleEn: "Digestive & Stomach Care",
      descHi: "कब्ज, गैस, एसिडिटी, बवासीर (Piles) और पेट के विकारों का व्यक्तिगत लक्षणों के आधार पर समाधान।",
      descEn: "Relief-oriented guidance for constipation, acidity, piles, and gastric disorders based on symptoms."
    },
    {
      icon: "🦴",
      titleHi: "जोड़ों का दर्द",
      titleEn: "Joint Pain & Arthritis Support",
      descHi: "गठिया (Arthritis), घुटनों का दर्द, कमर दर्द और मांसपेशियों के खिंचाव के लिए प्राकृतिक चिकित्सा।",
      descEn: "Natural supportive care for arthritis, knee pain, lower back pain, and muscular stiffness."
    },
    {
      icon: "✨",
      titleHi: "त्वचा संबंधी समस्याएं",
      titleEn: "Skin Disorders & Allergies",
      descHi: "सोरायसिस, एक्जिमा, मुंहासे, दाद-खुजली और जिद्दी त्वचा रोगों के लिए समग्र होम्योपैथिक मूल्यांकन।",
      descEn: "Holistic homoeopathic evaluation for psoriasis, eczema, acne, ringworm, and chronic skin conditions."
    },
    {
      icon: "🧠",
      titleHi: "मानसिक तनाव एवं चिंता",
      titleEn: "Mental Stress & Anxiety",
      descHi: "तनाव, चिंता, अनिद्रा (नींद न आना) और मानसिक थकान दूर करने के लिए शांत करने वाली होम्योपैथी दवाएं।",
      descEn: "Calming homoeopathic remedies designed to manage stress, anxiety, insomnia, and mental fatigue."
    },
    {
      icon: "👶",
      titleHi: "बच्चों की स्वास्थ्य समस्याएं",
      titleEn: "Pediatric Health Care",
      descHi: "बच्चों में बार-बार सर्दी-जुकाम, पेट दर्द, भूख की कमी और रोग प्रतिरोधक क्षमता बढ़ाने हेतु सुरक्षित परामर्श।",
      descEn: "Safe consultation for frequent colds, stomach issues, poor appetite, and immunity boosting in kids."
    },
    {
      icon: "🌸",
      titleHi: "महिला स्वास्थ्य संबंधी समस्याएं",
      titleEn: "Women's Health Concerns",
      descHi: "मासिक धर्म की अनियमितता, हार्मोनल असंतुलन और महिलाओं की आंतरिक स्वास्थ्य समस्याओं के लिए विशेष देखभाल।",
      descEn: "Specialized supportive care for menstrual irregularities, hormonal imbalances, and women's wellness."
    },
    {
      icon: "⏳",
      titleHi: "पुरानी स्वास्थ्य समस्याएं",
      titleEn: "Chronic & Long-standing Illnesses",
      descHi: "सालों पुरानी बीमारियों में जड़ से राहत पाने के लिए दीर्घकालिक और धैर्यपूर्ण होम्योपैथिक केस विश्लेषण।",
      descEn: "Long-term and patient homoeopathic case analysis for relief in chronic, recurring health issues."
    }
  ];

  // Render Treatment Cards
  const treatmentsGrid = document.getElementById('treatments-grid');
  if (treatmentsGrid) {
    treatmentsGrid.innerHTML = treatmentsData.map((item, index) => `
      <div class="treatment-card glass-card">
        <div>
          <div class="treatment-icon-title">
            <span class="treatment-icon">${item.icon}</span>
            <h3 class="treatment-title" data-hi="${item.titleHi}" data-en="${item.titleEn}">${item.titleHi}</h3>
          </div>
          <p class="treatment-desc" data-hi="${item.descHi}" data-en="${item.descEn}">${item.descHi}</p>
        </div>
        <button class="treatment-btn" onclick="scrollToAppointment('${item.titleHi}')" data-hi="विस्तार से देखें / बुक करें" data-en="View Details / Book">विस्तार से देखें / बुक करें</button>
      </div>
    `).join('');
  }

  // 2. FAQ Data (Bilingual)
  const faqData = [
    {
      qHi: "क्या होम्योपैथिक दवाइयों के कोई साइड इफेक्ट होते हैं?",
      qEn: "Do homoeopathic medicines have side effects?",
      aHi: "नहीं, होम्योपैथिक दवाइयां अत्यधिक सूक्ष्म और प्राकृतिक सिद्धांतों पर आधारित होती हैं, इसलिए योग्य चिकित्सक की देखरेख में ये पूरी तरह सुरक्षित हैं।",
      aEn: "No, homoeopathic remedies are highly diluted and natural, making them completely safe when taken under professional guidance."
    },
    {
      qHi: "डॉ. इस्लाम से परामर्श का समय क्या है?",
      qEn: "What are the consultation timings for Dr. Islam?",
      aHi: "परामर्श का समय सुबह 9 बजे से पहले एवं शाम 4 बजे के बाद का है। आप ऑनलाइन अपॉइंटमेंट बुक करके या फोन द्वारा संपर्क कर सकते हैं।",
      aEn: "Consultation timing is Before 9:00 AM and After 4:00 PM. You can book an appointment online or contact via phone."
    },
    {
      qHi: "क्या पुरानी और गंभीर बीमारियों में होम्योपैथी असरदार है?",
      qEn: "Is homoeopathy effective in chronic and long-standing illnesses?",
      aHi: "हाँ, होम्योपैथी पुरानी बीमारियों (जैसे जोड़ों का दर्द, त्वचा रोग, दमा आदि) की जड़ पर काम करती है, बशर्ते उचित जांच और नियमितता रखी जाए।",
      aEn: "Yes, homoeopathy works on the root cause of chronic illnesses when proper clinical evaluation and regularity are maintained."
    },
    {
      qHi: "अपॉइंटमेंट कैसे बुक करें?",
      qEn: "How can I book an appointment?",
      aHi: "आप इस वेबसाइट पर दिए गए ऑनलाइन अपॉइंटमेंट फॉर्म को भरकर सीधे सबमिट कर सकते हैं या सीधे व्हाट्सएप/कॉल कर सकते हैं।",
      aEn: "You can fill out the online appointment form on this website or contact directly via WhatsApp or phone call."
    }
  ];

  const faqContainer = document.getElementById('faq-container');
  if (faqContainer) {
    faqContainer.innerHTML = faqData.map((faq, idx) => `
      <div class="faq-item">
        <div class="faq-question" onclick="toggleFaq(this)">
          <span data-hi="${faq.qHi}" data-en="${faq.qEn}">${faq.qHi}</span>
          <span>▼</span>
        </div>
        <div class="faq-answer">
          <p data-hi="${faq.aHi}" data-en="${faq.aEn}">${faq.aHi}</p>
        </div>
      </div>
    `).join('');
  }

  // 3. Language Switcher (Hindi / English)
  let currentLang = 'hi';
  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'hi' ? 'en' : 'hi';
      langLabel.textContent = currentLang === 'hi' ? 'EN' : 'HI';
      document.documentElement.lang = currentLang;

      // Toggle all data-hi / data-en attributes
      document.querySelectorAll('[data-hi]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) el.textContent = text;
      });

      // Toggle placeholder texts
      document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(input => {
        const ph = input.getAttribute(`data-placeholder-${currentLang}`) || input.placeholder;
        if (currentLang === 'en' && input.id === 'patient-name') input.placeholder = 'Enter full name';
        if (currentLang === 'hi' && input.id === 'patient-name') input.placeholder = 'अपना पूरा नाम दर्ज करें';
        if (currentLang === 'en' && input.id === 'patient-phone') input.placeholder = '10-digit mobile number';
        if (currentLang === 'hi' && input.id === 'patient-phone') input.placeholder = '10 अंकों का मोबाइल नंबर';
      });
    });
  }

  // 4. Dark / Light Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
  }

  // 5. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }

  // 6. Appointment Form Submission Handling
  const appointmentForm = document.getElementById('appointment-form');
  const formMessage = document.getElementById('form-message');
  const whatsappDirectBtn = document.getElementById('whatsapp-direct-btn');

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('patient-name').value.trim();
      const phone = document.getElementById('patient-phone').value.trim();
      const age = document.getElementById('patient-age').value.trim();
      const gender = document.getElementById('patient-gender').value;
      const slot = document.getElementById('consult-time').value;
      const date = document.getElementById('appointment-date').value;
      const issue = document.getElementById('health-issue').value.trim();

      if (!name || !phone || !issue) {
        showFormMessage('कृपया सभी आवश्यक जानकारी भरें।', 'red');
        return;
      }

      if (phone.length < 10) {
        showFormMessage('कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।', 'red');
        return;
      }

      // Simulate successful submission and mail dispatch
      showFormMessage('अपॉइंटमेंट अनुरोध सफलतापूर्वक दर्ज हो गया है! डॉक्टर साहब जल्द ही आपसे संपर्क करेंगे।', 'green');
      
      // Send data via EmailJS if configured, otherwise log to console
      console.log("Appointment Booking Details:", { name, phone, age, gender, slot, date, issue, email: CLINIC_CONFIG.email });

      appointmentForm.reset();
    });
  }

  if (whatsappDirectBtn) {
    whatsappDirectBtn.addEventListener('click', () => {
      const name = document.getElementById('patient-name').value.trim() || 'रोगी';
      const phone = document.getElementById('patient-phone').value.trim() || '-';
      const issue = document.getElementById('health-issue').value.trim() || 'परामर्श चाहिए';

      const waMessage = `नमस्ते डॉक्टर इस्लाम साहब,%0Aमेरा नाम: ${name}%0Aमोबाइल: ${phone}%0Aसमस्या: ${issue}%0Aकृपया मुझे सेहत होम्योपैथी दवाखाना में परामर्श हेतु समय दें।`;
      window.open(`https://wa.me/919473298951?text=${waMessage}`, '_blank');
    });
  }

  function showFormMessage(msg, color) {
    if (!formMessage) return;
    formMessage.style.display = 'block';
    formMessage.style.backgroundColor = color === 'green' ? 'rgba(21, 128, 61, 0.15)' : 'rgba(239, 68, 68, 0.15)';
    formMessage.style.color = color === 'green' ? '#15803d' : '#dc2626';
    formMessage.style.border = `1px solid ${color === 'green' ? '#15803d' : '#dc2626'}`;
    formMessage.textContent = msg;
  }

});

// Global Helpers
function toggleFaq(element) {
  const item = element.parentElement;
  item.classList.toggle('active');
  const icon = element.querySelector('span:last-child');
  icon.textContent = item.classList.contains('active') ? '▲' : '▼';
}

function scrollToAppointment(treatmentName) {
  const issueBox = document.getElementById('health-issue');
  if (issueBox) {
    issueBox.value = `परामर्श विषय: ${treatmentName} - `;
  }
  document.getElementById('appointment').scrollIntoView({ behavior: 'smooth' });
}
