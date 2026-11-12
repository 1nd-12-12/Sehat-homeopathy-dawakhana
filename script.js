/**
 * ============================================================================
 * SEHAT HOMOEOPATHY DAWAKHANA - INTERACTIVE FUNCTIONALITY
 * Handles Bilingual Toggle (HI/EN), Dark/Light Theme, 10 Treatment Cards,
 * Real Email Form Submission, WhatsApp Booking & Modals.
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "hi";

  // 1. Set Current Year in Footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Sync Map & Phone Links from config.js
  if (typeof CLINIC_CONFIG !== "undefined") {
    const mapFrame = document.getElementById("clinic-map-frame");
    if (mapFrame && CLINIC_CONFIG.googleMapsEmbedUrl) {
      mapFrame.src = CLINIC_CONFIG.googleMapsEmbedUrl;
    }
  }

  // 3. 10 Official Treatment Categories Data (Ethical & Medically Responsible)
  const treatmentsData = [
    {
      id: 1,
      icon: "❤️",
      titleHi: "हृदय संबंधी समस्याएं",
      titleEn: "Heart Related Concerns",
      shortHi: "रक्तचाप संतुलन, घबराहट एवं सामान्य हृदय स्वास्थ्य हेतु सहायक परामर्श।",
      shortEn: "Supportive consultation for blood pressure wellness, palpitations, and general cardiac lifestyle care.",
      detailHi: "हृदय संबंधी लक्षणों (जैसे ब्लड प्रेशर में उतार-चढ़ाव, घबराहट या थकान) के लिए विस्तृत केस हिस्ट्री और नियमित जांच रिपोर्ट के आधार पर सहायक होम्योपैथिक परामर्श दिया जाता है। महत्वपूर्ण: सीने में तेज दर्द या आपातकालीन स्थिति में तुरंत नजदीकी अस्पताल जाएं और अपनी चल रही हृदय की दवाएं डॉक्टर की सलाह के बिना बंद न करें।",
      detailEn: "Supportive homoeopathic consultation is offered based on detailed case history and diagnostic reports. Important: In case of acute chest pain or emergency, visit the nearest hospital immediately and never stop prescribed cardiac medications without medical supervision."
    },
    {
      id: 2,
      icon: "🩸",
      titleHi: "शुगर / डायबिटीज",
      titleEn: "Sugar / Diabetes Management",
      shortHi: "ब्लड शुगर नियंत्रण, कमजोरी एवं जीवनशैली सुधार हेतु सहायक होम्योपैथिक देखभाल।",
      shortEn: "Supportive homoeopathic care alongside diet and blood sugar monitoring.",
      detailHi: "डायबिटीज प्रबंधन में नियमित ब्लड शुगर जांच, संतुलित आहार और व्यायाम के साथ-साथ सहायक होम्योपैथिक परामर्श दिया जाता है। यह चल रही आवश्यक शुगर दवाओं का विकल्प नहीं है; किसी भी बदलाव से पहले उचित चिकित्सकीय मूल्यांकन आवश्यक है।",
      detailEn: "Diabetes care integrates regular blood glucose monitoring, balanced nutrition, and supportive homoeopathic guidance. It does not replace essential prescribed diabetes medication."
    },
    {
      id: 3,
      icon: "🫁",
      titleHi: "सांस की समस्याएं",
      titleEn: "Respiratory Concerns",
      shortHi: "एलर्जी, सर्दी-खांसी, साइनस एवं सांस लेने में असुविधा हेतु सौम्य परामर्श।",
      shortEn: "Gentle consultation for seasonal allergies, cough, sinus discomfort, and breathing wellness.",
      detailHi: "पुरानी सर्दी, एलर्जिक राइनाइटिस, साइनस या मौसम बदलने पर होने वाली सांस की तकलीफों के लिए व्यक्तिगत लक्षणों के अनुसार परामर्श उपलब्ध है। गंभीर सांस फूलने की स्थिति में तत्काल आपातकालीन चिकित्सा लें।",
      detailEn: "Individualized consultation is available for recurrent colds, sinusitis, and seasonal respiratory sensitivity. Seek urgent medical attention for acute breathlessness."
    },
    {
      id: 4,
      icon: "🌿",
      titleHi: "पाचन तंत्र की समस्याएं",
      titleEn: "Digestive System Concerns",
      shortHi: "गैस, एसिडिटी, अपच, कब्ज एवं पेट संबंधी समस्याओं का व्यक्तिगत मूल्यांकन।",
      shortEn: "Individualized assessment for acidity, gas, indigestion, constipation, and gut health.",
      detailHi: "अम्लता (Acidity), पेट फूलना, अपच, कब्ज और भूख न लगने जैसी पाचन समस्याओं में खान-पान की आदतों और लक्षणों के आधार पर सौम्य होम्योपैथिक परामर्श दिया जाता है।",
      detailEn: "Gentle homoeopathic consultation tailored to dietary habits and digestive symptoms including acidity, bloating, indigestion, and constipation."
    },
    {
      id: 5,
      icon: "🦴",
      titleHi: "जोड़ों का दर्द",
      titleEn: "Joint & Musculoskeletal Pain",
      shortHi: "घुटनों, कमर, गर्दन एवं मांसपेशियों की जकड़न व दर्द में सहायक देखभाल।",
      shortEn: "Supportive care for knee, back, neck, and joint stiffness or discomfort.",
      detailHi: "जोड़ों में दर्द, सुबह की जकड़न, कमर या गर्दन के दर्द के लिए रोगी की उम्र, शारीरिक गतिविधि और जांच के अनुरूप सहायक होम्योपैथिक परामर्श प्रदान किया जाता है।",
      detailEn: "Supportive homoeopathic consultation for joint stiffness, knee discomfort, and back or neck pain based on clinical evaluation."
    },
    {
      id: 6,
      icon: "✨",
      titleHi: "त्वचा संबंधी समस्याएं",
      titleEn: "Skin Related Concerns",
      shortHi: "खुजली, एलर्जी, दाद, मुंहासे एवं त्वचा की संवेदनशीलता हेतु परामर्श।",
      shortEn: "Consultation for itching, skin allergies, acne, eczema tendencies, and skin sensitivity.",
      detailHi: "त्वचा पर चकत्ते, खुजली, एलर्जी, मुंहासे और रूखेपन जैसी समस्याओं में आंतरिक लक्षणों को समझकर सौम्य होम्योपैथिक परामर्श दिया जाता है।",
      detailEn: "Holistic homoeopathic evaluation for skin allergies, itching, acne, and recurring dermatological sensitivities."
    },
    {
      id: 7,
      icon: "🧠",
      titleHi: "मानसिक तनाव एवं चिंता",
      titleEn: "Stress, Anxiety & Sleep Wellness",
      shortHi: "मानसिक तनाव, बेचैनी, चिड़चिड़ापन एवं अनिद्रा हेतु संवेदनशील परामर्श।",
      shortEn: "Compassionate consultation for mental stress, restlessness, and sleep disturbances.",
      detailHi: "दैनिक जीवन के तनाव, चिंता, थकान और नींद की कमी से जूझ रहे व्यक्तियों को शांत वातावरण में गोपनीय और संवेदनशील होम्योपैथिक परामर्श प्रदान किया जाता है।",
      detailEn: "Confidential, supportive homoeopathic consultation for everyday stress, restlessness, and disturbed sleep patterns."
    },
    {
      id: 8,
      icon: "👶",
      titleHi: "बच्चों की स्वास्थ्य समस्याएं",
      titleEn: "Child Health & Wellness",
      shortHi: "बच्चों की रोग प्रतिरोधक क्षमता, सर्दी-जुकाम एवं पाचन हेतु सौम्य देखभाल।",
      shortEn: "Gentle care for children's immunity, recurrent colds, and digestive wellness.",
      detailHi: "बच्चों में बार-बार होने वाली सर्दी-खांसी, पेट दर्द, भूख की कमी और सामान्य विकास संबंधी चिंताओं के लिए माता-पिता के साथ मिलकर सौम्य होम्योपैथिक परामर्श दिया जाता है। तेज बुखार या गंभीर स्थिति में तुरंत बाल रोग विशेषज्ञ/अस्पताल से संपर्क करें।",
      detailEn: "Gentle homoeopathic consultation for children's recurrent colds, appetite, and digestive comfort. Seek immediate pediatric hospital care for high fever or acute illness."
    },
    {
      id: 9,
      icon: "🌸",
      titleHi: "महिला स्वास्थ्य संबंधी समस्याएं",
      titleEn: "Women's Health Concerns",
      shortHi: "मासिक धर्म अनियमितता, कमजोरी एवं हार्मोनल संतुलन हेतु गोपनीय परामर्श।",
      shortEn: "Confidential consultation for menstrual irregularities, fatigue, and women's wellness.",
      detailHi: "महिलाओं में मासिक धर्म से जुड़ी अनियमितताओं, दर्द, कमजोरी और जीवन के विभिन्न चरणों की स्वास्थ्य आवश्यकताओं के लिए संवेदनशील एवं गोपनीय परामर्श उपलब्ध है।",
      detailEn: "Respectful, confidential homoeopathic consultation addressing menstrual discomfort, fatigue, and holistic women's wellness."
    },
    {
      id: 10,
      icon: "🩺",
      titleHi: "पुरानी स्वास्थ्य समस्याएं",
      titleEn: "Chronic Health Conditions",
      shortHi: "लंबे समय से चली आ रही शारीरिक समस्याओं का व्यवस्थित केस विश्लेषण।",
      shortEn: "Structured case analysis for long-standing recurring health conditions.",
      detailHi: "लंबे समय से चली आ रही बार-बार उभरने वाली स्वास्थ्य समस्याओं में संपूर्ण मेडिकल इतिहास की समीक्षा कर नियमित फॉलो-अप के साथ सहायक होम्योपैथिक परामर्श दिया जाता है।",
      detailEn: "Comprehensive medical history review and structured follow-up consultation for long-standing health concerns."
    }
  ];

  // Render Treatment Cards
  const treatmentsGrid = document.getElementById("treatments-grid");
  function renderTreatments() {
    if (!treatmentsGrid) return;
    treatmentsGrid.innerHTML = treatmentsData
      .map((item) => {
        const title = currentLang === "hi" ? item.titleHi : item.titleEn;
        const desc = currentLang === "hi" ? item.shortHi : item.shortEn;
        const btnText = currentLang === "hi" ? "विस्तार से देखें (View Details)" : "View Details";
        return `
          <article class="treatment-card">
            <div>
              <div class="t-icon-wrap" aria-hidden="true">${item.icon}</div>
              <h3>${item.id}.${title}</h3>
              <p>${desc}</p>
            </div>
            <button type="button" class="t-details-btn" data-treatment-id="${item.id}">
              ${btnText}
            </button>
          </article>
        `;
      })
      .join("");
  }
  renderTreatments();

  // Treatment Details Modal Handler
  const treatmentModal = document.getElementById("treatment-modal");
  const treatmentModalBody = document.getElementById("treatment-modal-body");

  document.addEventListener("click", (e) => {
    const detailBtn = e.target.closest("[data-treatment-id]");
    if (detailBtn) {
      const id = Number(detailBtn.getAttribute("data-treatment-id"));
      const item = treatmentsData.find((t) => t.id === id);
      if (item && treatmentModal && treatmentModalBody) {
        const title = currentLang === "hi" ? item.titleHi : item.titleEn;
        const detail = currentLang === "hi" ? item.detailHi : item.detailEn;
        const bookLabel = currentLang === "hi" ? "इस समस्या हेतु अपॉइंटमेंट बुक करें" : "Book Appointment for This Concern";
        treatmentModalBody.innerHTML = `
          <div style="font-size:2.4rem; margin-bottom:8px;">${item.icon}</div>
          <h3 style="margin-bottom:12px;">${title}</h3>
          <p style="margin-bottom:16px; line-height:1.7;">${detail}</p>
          <div style="background:rgba(4,120,87,0.08); padding:12px; border-radius:10px; font-size:0.88rem; margin-bottom:18px;">
            <strong>डॉ. इस्लाम — B.H.M.S. (होम्योपैथी)</strong><br/>
            सेहत होम्योपैथी दवाखाना • समय: सुबह 9 बजे से पहले एवं शाम 4 बजे के बाद।
          </div>
          <a href="#appointment" class="btn btn-primary btn-block" id="modal-book-btn" data-problem="${item.titleHi}">
            📅 ${bookLabel}
          </a>
        `;
        treatmentModal.classList.add("open");
        treatmentModal.setAttribute("aria-hidden", "false");
      }
    }

    if (e.target && e.target.id === "modal-book-btn") {
      const problemVal = e.target.getAttribute("data-problem");
      const selectEl = document.getElementById("healthProblem");
      if (selectEl && problemVal) {
        for (let opt of selectEl.options) {
          if (opt.value.includes(problemVal)) {
            selectEl.value = opt.value;
            break;
          }
        }
      }
      treatmentModal.classList.remove("open");
    }
  });

  // 4. Bilingual Switcher (Hindi <-> English)
  const langToggleBtn = document.getElementById("lang-toggle");
  const langLabel = document.getElementById("lang-label");

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    if (langLabel) langLabel.textContent = lang === "hi" ? "EN" : "हिंदी";

    document.querySelectorAll("[data-hi][data-en]").forEach((el) => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });

    renderTreatments();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      applyLanguage(currentLang === "hi" ? "en" : "hi");
    });
  }

  // 5. Dark / Light Theme Toggle
  const themeToggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("sehat_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (themeToggleBtn) themeToggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("sehat_theme", next);
      themeToggleBtn.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }

  // 6. Mobile Navigation Menu
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // 7. WhatsApp Integration Helper
  function openWhatsApp(phoneType = "primary", customMessage = "") {
    const rawPhone =
      phoneType === "secondary"
        ? CLINIC_CONFIG.secondaryPhoneRaw
        : CLINIC_CONFIG.primaryPhoneRaw;

    const defaultMsg =
      `नमस्ते डॉ. इस्लाम (सेहत होम्योपैथी दवाखाना),\n` +
      `मैं परामर्श/अपॉइंटमेंट के बारे में जानकारी लेना चाहता/चाहती हूँ।\n` +
      `पता: अहवर, शेख आलम, गंज बाजार`;

    const finalText = encodeURIComponent(customMessage || defaultMsg);
    window.open(`https://wa.me/${rawPhone}?text=${finalText}`, "_blank", "noopener");
  }

  // Floating WhatsApp Popup Controls
  const floatingWaBtn = document.getElementById("floating-wa-btn");
  const waPopup = document.getElementById("whatsapp-popup");
  const closeWaPopup = document.getElementById("close-wa-popup");

  if (floatingWaBtn && waPopup) {
    floatingWaBtn.addEventListener("click", () => {
      waPopup.classList.toggle("open");
    });
  }
  if (closeWaPopup && waPopup) {
    closeWaPopup.addEventListener("click", () => waPopup.classList.remove("open"));
  }

  document.querySelectorAll(".wa-option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const phoneType = btn.getAttribute("data-phone");
      const msgType = btn.getAttribute("data-type");
      const msg =
        msgType === "appointment"
          ? `नमस्ते डॉ. इस्लाम,\nमैं सेहत होम्योपैथी दवाखाना में अपॉइंटमेंट बुक करना चाहता/चाहती हूँ।\nनाम:\nउम्र:\nसमस्या:\nपसंदीदा समय (सुबह 9 से पहले / शाम 4 के बाद):`
          : `नमस्ते डॉ. इस्लाम (सेहत होम्योपैथी दवाखाना), मुझे आपसे परामर्श के संबंध में बात करनी है।`;
      openWhatsApp(phoneType, msg);
    });
  });

  const contactWaBtn = document.getElementById("contact-whatsapp-btn");
  if (contactWaBtn) {
    contactWaBtn.addEventListener("click", () => openWhatsApp("primary"));
  }

  // 8. Real Appointment Form Submission (FormSubmit AJAX -> mdrehanfazal716@gmail.com + WhatsApp Option)
  const appointmentForm = document.getElementById("appointment-form");
  const formStatus = document.getElementById("form-status");
  const submitApptBtn = document.getElementById("submit-appointment-btn");
  const waApptBtn = document.getElementById("whatsapp-appointment-btn");

  // Set min date to today
  const apptDateInput = document.getElementById("appointmentDate");
  if (apptDateInput) {
    apptDateInput.min = new Date().toISOString().split("T")[0];
  }

  function getAppointmentFormData() {
    return {
      patientName: document.getElementById("patientName").value.trim(),
      mobileNumber: document.getElementById("mobileNumber").value.trim(),
      patientAge: document.getElementById("patientAge").value.trim(),
      patientGender: document.getElementById("patientGender").value,
      healthProblem: document.getElementById("healthProblem").value,
      appointmentDate: document.getElementById("appointmentDate").value,
      appointmentTime: document.getElementById("appointmentTime").value,
      symptomsMessage: document.getElementById("symptomsMessage").value.trim() || "कोई अतिरिक्त संदेश नहीं"
    };
  }

  function validateAppointment(data) {
    if (!data.patientName || !data.mobileNumber || !data.patientAge || !data.patientGender || !data.healthProblem || !data.appointmentDate || !data.appointmentTime) {
      return currentLang === "hi"
        ? "कृपया सभी अनिवार्य (*) फ़ील्ड भरें।"
        : "Please fill in all required (*) fields.";
    }
    const digitsOnly = data.mobileNumber.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      return currentLang === "hi"
        ? "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।"
        : "Please enter a valid 10-digit mobile number.";
    }
    return null;
  }

  if (waApptBtn) {
    waApptBtn.addEventListener("click", () => {
      const data = getAppointmentFormData();
      const err = validateAppointment(data);
      if (err) {
        formStatus.className = "form-status error";
        formStatus.textContent = "⚠️ " + err;
        return;
      }
      const waText =
        `*नया अपॉइंटमेंट अनुरोध - सेहत होम्योपैथी दवाखाना*\n` +
        `डॉक्टर: डॉ. इस्लाम (B.H.M.S.)\n` +
        `--------------------------\n` +
        `👤 रोगी का नाम: ${data.patientName}\n` + `📞 मोबाइल: ${data.mobileNumber}\n` +
        `🎂 उम्र / लिंग: ${data.patientAge} वर्ष / ${data.patientGender}\n` +
        `🩺 समस्या: ${data.healthProblem}\n` + `📅 तारीख: ${
