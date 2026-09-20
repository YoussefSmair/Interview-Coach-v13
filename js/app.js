/* ==========================================================================
   Interview Coach - Main Application Bootstrap & Home Renderer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Router
    Router.init();

    // Language Toggle Listener
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = AppState.language === 'ar' ? 'en' : 'ar';
            AppState.setLanguage(nextLang);
            updateUIStrings();
            Router.renderActiveView();
        });
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            const mainNav = document.querySelector('.main-nav');
            if (mainNav) {
                mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    // Initial UI String Update
    updateUIStrings();

    // Warn before leaving the page while an exam is in progress and not yet submitted
    window.addEventListener('beforeunload', (e) => {
        const examInProgress = AppState.exam.questions.length > 0 && !AppState.exam.isSubmitted;
        if (examInProgress) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
});

// Update UI strings across elements
function updateUIStrings() {
    const lang = AppState.language;
    const dict = translations[lang] || translations.ar;

    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
        langLabel.textContent = lang === 'ar' ? 'EN' : 'عربي';
    }
}

// Render Home View (Full-Bleed Hero Section with Background Image, NO Card Container Box)
function renderHomeView() {
    const lang = AppState.language;
    const dict = translations[lang] || translations.ar;
    const container = document.getElementById('view-home');
    if (!container) return;

    container.innerHTML = `
        <!-- Full-Bleed Section Background Hero (Like v2.6, NO Card Wrapper) -->
        <div class="hero-full-section" style="position: relative; width: 100vw; margin-left: calc(-50vw + 50%); margin-right: calc(-50vw + 50%); min-height: 78vh; display: flex; align-items: center; justify-content: center; text-align: center; background: transparent; padding: 70px 24px 60px; margin-top: -32px; margin-bottom: 50px;">
            <div style="max-width: 950px; margin: 0 auto; position: relative; z-index: 2;">
                <div class="section-badge" style="margin-bottom: 24px; font-size: 0.95rem; background: rgba(245, 158, 11, 0.15); border: 1px solid var(--border-gold); padding: 8px 20px;">
                    <i class="fa-solid fa-award" style="color: var(--primary-gold);"></i> ${dict.hero_badge}
                </div>
                
                <h1 class="hero-main-title" style="font-size: 3.3rem; font-weight: 900; line-height: 1.25; margin-bottom: 24px; color: var(--text-main);">
                    ${dict.hero_title}
                </h1>
                
                <p class="hero-sub" style="font-size: 1.25rem; color: var(--text-sub); margin: 0 auto 40px; line-height: 1.8; max-width: 850px;">
                    ${dict.hero_subtitle}
                </p>
                
                <div class="hero-actions" style="display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap;">
                    <button class="primary-gold-btn" id="hero-start-btn" style="font-size: 1.15rem; padding: 16px 40px;">
                        <i class="fa-solid fa-arrow-pointer"></i> ${dict.start_practice_btn}
                    </button>
                    <button class="secondary-btn" id="hero-about-btn" style="font-size: 1.15rem; padding: 16px 36px;">
                        <i class="fa-solid fa-users"></i> ${dict.view_about_team_btn}
                    </button>
                </div>
            </div>
        </div>

        <!-- Practical User-Centric Statistics Bar -->
        <div class="stats-bar glass-card" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 28px; margin: 0 0 50px; text-align: center; padding: 36px;">
            <div class="stat-item">
                <div class="stat-num gold-text" style="font-size: 2.6rem; font-weight: 900;">${dict.stat_jobs_count}</div>
                <div class="stat-lbl" style="color: var(--text-muted); font-size: 1rem; font-weight: 600; margin-top: 6px;">${dict.stat_jobs_label}</div>
            </div>
            <div class="stat-item">
                <div class="stat-num gold-text" style="font-size: 2.6rem; font-weight: 900;">${dict.stat_tech_ratio}</div>
                <div class="stat-lbl" style="color: var(--text-muted); font-size: 1rem; font-weight: 600; margin-top: 6px;">${dict.stat_tech_label}</div>
            </div>
            <div class="stat-item">
                <div class="stat-num gold-text" style="font-size: 2.6rem; font-weight: 900;">${dict.stat_eval_stars}</div>
                <div class="stat-lbl" style="color: var(--text-muted); font-size: 1rem; font-weight: 600; margin-top: 6px;">${dict.stat_eval_label}</div>
            </div>
            <div class="stat-item">
                <div class="stat-num gold-text" style="font-size: 2.6rem; font-weight: 900;">${dict.stat_hr_logic}</div>
                <div class="stat-lbl" style="color: var(--text-muted); font-size: 1rem; font-weight: 600; margin-top: 6px;">${dict.stat_hr_label}</div>
            </div>
        </div>

        <!-- Features Grid -->
        <div class="features-section" style="margin-bottom: 60px;">
            <div class="section-header">
                <div class="section-badge"><i class="fa-solid fa-microchip"></i> ${dict.app_name}</div>
                <h2 class="section-title">${dict.features_title}</h2>
                <p class="section-subtitle">${dict.features_sub}</p>
            </div>

            <div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px;">
                <div class="glass-card feat-card" style="padding: 36px;">
                    <div class="feat-icon" style="width: 56px; height: 56px; border-radius: var(--radius-md); background: rgba(245, 158, 11, 0.12); color: var(--primary-gold); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 20px;">
                        <i class="fa-solid fa-comments"></i>
                    </div>
                    <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 12px;">${dict.feat_1_title}</h3>
                    <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7;">${dict.feat_1_desc}</p>
                </div>

                <div class="glass-card feat-card" style="padding: 36px;">
                    <div class="feat-icon" style="width: 56px; height: 56px; border-radius: var(--radius-md); background: rgba(56, 189, 248, 0.12); color: #38bdf8; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 20px;">
                        <i class="fa-solid fa-chart-line"></i>
                    </div>
                    <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 12px;">${dict.feat_2_title}</h3>
                    <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7;">${dict.feat_2_desc}</p>
                </div>

                <div class="glass-card feat-card" style="padding: 36px;">
                    <div class="feat-icon" style="width: 56px; height: 56px; border-radius: var(--radius-md); background: rgba(16, 185, 129, 0.12); color: #10b981; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 20px;">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 12px;">${dict.feat_3_title}</h3>
                    <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7;">${dict.feat_3_desc}</p>
                </div>

                <div class="glass-card feat-card" style="padding: 36px;">
                    <div class="feat-icon" style="width: 56px; height: 56px; border-radius: var(--radius-md); background: rgba(168, 85, 247, 0.12); color: #a855f7; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 20px;">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 12px;">${dict.feat_4_title}</h3>
                    <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7;">${dict.feat_4_desc}</p>
                </div>
            </div>
        </div>
    `;

    // Event Listeners for Home Action Buttons
    const startBtn = document.getElementById('hero-start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => Router.navigateTo('jobs'));
    }

    const aboutBtn = document.getElementById('hero-about-btn');
    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => Router.navigateTo('about'));
    }
}

// Render Jobs Flow Coordinator
function renderJobsFlow() {
    const subView = AppState.jobsSubView;
    switch (subView) {
        case 'list':
            if (typeof renderJobsListView === 'function') renderJobsListView();
            break;
        case 'exam':
            if (typeof renderExamView === 'function') renderExamView();
            break;
        case 'results':
            if (typeof renderResultsView === 'function') renderResultsView();
            break;
        case 'job-description':
            if (typeof renderJobDescriptionView === 'function') renderJobDescriptionView();
            break;
        case 'courses':
            if (typeof renderCoursesView === 'function') renderCoursesView();
            break;
        default:
            if (typeof renderJobsListView === 'function') renderJobsListView();
    }
}

// Render Contact View (Modern Wide 2-Column Layout)
function renderContactView() {
    const lang = AppState.language;
    const dict = translations[lang] || translations.ar;
    const container = document.getElementById('view-contact');
    if (!container) return;

    container.innerHTML = `
        <div style="max-width: 1250px; margin: 0 auto;">
            <div class="section-header" style="margin-bottom: 36px;">
                <div class="section-badge"><i class="fa-solid fa-paper-plane"></i> ${dict.contact_title}</div>
                <h2 class="section-title">${dict.contact_title}</h2>
                <p class="section-subtitle">${dict.contact_sub}</p>
            </div>

            <div class="contact-grid" style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 32px; align-items: start; direction: ltr !important;">
                <!-- Left Info Cards Grid -->
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <div class="glass-card" style="padding: 24px; display: flex; align-items: center; gap: 16px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(245, 158, 11, 0.12); color: var(--primary-gold); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0;">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 2px;">${lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</h4>
                            <p style="color: var(--text-muted); font-size: 0.95rem;">support@interviewcoach.com</p>
                        </div>
                    </div>

                    <div class="glass-card" style="padding: 24px; display: flex; align-items: center; gap: 16px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(245, 158, 11, 0.12); color: var(--primary-gold); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0;">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 2px;">${lang === 'ar' ? 'الهاتف' : 'Phone'}</h4>
                            <p style="color: var(--text-muted); font-size: 0.95rem;" dir="ltr">+20 100 123 4567</p>
                        </div>
                    </div>

                    <div class="glass-card" style="padding: 24px; display: flex; align-items: center; gap: 16px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(245, 158, 11, 0.12); color: var(--primary-gold); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0;">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                            <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 2px;">${lang === 'ar' ? 'الموقع' : 'Location'}</h4>
                            <p style="color: var(--text-muted); font-size: 0.95rem;">${lang === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
                        </div>
                    </div>

                    <div class="glass-card" style="padding: 24px; display: flex; align-items: center; gap: 16px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(245, 158, 11, 0.12); color: var(--primary-gold); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0;">
                            <i class="fa-solid fa-clock"></i>
                        </div>
                        <div>
                            <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 2px;">${lang === 'ar' ? 'ساعات العمل' : 'Working Hours'}</h4>
                            <p style="color: var(--text-muted); font-size: 0.95rem;">${lang === 'ar' ? 'السبت - الخميس: 9 صباحاً - 5 مساءً' : 'Saturday - Thursday: 9 AM - 5 PM'}</p>
                        </div>
                    </div>
                </div>

                <!-- Right Form Card -->
                <div class="glass-card" style="padding: 40px;">
                    <form id="contact-form" onsubmit="event.preventDefault(); alert('${lang === 'ar' ? 'شكراً لتواصلك! هذا النموذج تجريبي حالياً — يرجى التواصل مباشرة عبر البريد الإلكتروني support@interviewcoach.com للحصول على رد.' : 'Thanks for reaching out! This form is a demo for now — please email support@interviewcoach.com directly for a response.'}'); event.target.reset();">
                        <div class="form-group" style="margin-bottom: 20px;">
                            <label style="display:block; margin-bottom:8px; font-weight:600;">${lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}</label>
                            <input type="text" required placeholder="${lang === 'ar' ? 'أدخل اسمك الكامل...' : 'Enter your full name...'}" style="width:100%; padding:14px 16px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit; outline:none;">
                        </div>
                        <div class="form-group" style="margin-bottom: 20px;">
                            <label style="display:block; margin-bottom:8px; font-weight:600;">${lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</label>
                            <input type="email" required placeholder="${lang === 'ar' ? 'you@example.com' : 'you@example.com'}" style="width:100%; padding:14px 16px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit; outline:none;">
                        </div>
                        <div class="form-group" style="margin-bottom: 24px;">
                            <label style="display:block; margin-bottom:8px; font-weight:600;">${lang === 'ar' ? 'الرسالة أو الاستفسار' : 'Message or Inquiry'}</label>
                            <textarea rows="5" required placeholder="${lang === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}" style="width:100%; padding:14px 16px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); color:var(--text-main); font-family:inherit; outline:none; resize:vertical;"></textarea>
                        </div>
                        <button type="submit" class="primary-gold-btn full-width" style="padding: 14px 28px; font-size: 1.05rem;">
                            <i class="fa-solid fa-paper-plane"></i> ${lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
}
