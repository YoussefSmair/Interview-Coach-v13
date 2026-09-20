/* ==========================================================================
   Interview Coach - About & Team Showcase View Component
   ========================================================================== */

function renderAboutView() {
    const lang = AppState.language;
    const dict = translations[lang] || translations.ar;
    const container = document.getElementById('view-about');
    if (!container) return;

    const team = [
        {
            name_ar: "يوسف سمير كمال",
            name_en: "Yusuf Samir Kamal",
            role_ar: "Web Design & Data Analyst",
            role_en: "Web Design & Data Analyst",
            icon: "fa-solid fa-code",
            img: "images/يوسف سمير كمال.jpg"
        },
        {
            name_ar: "أحمد علي رياض",
            name_en: "Ahmed Ali Riad",
            role_ar: "Mobile App Developer & UI/UX",
            role_en: "Mobile App Developer & UI/UX",
            icon: "fa-solid fa-mobile-screen",
            img: "images/احمد علي رياض.png"
        },
        {
            name_ar: "أحمد أشرف شلبي",
            name_en: "Ahmed Ashraf Shalaby",
            role_ar: "Front-end Developer",
            role_en: "Front-end Developer",
            icon: "fa-solid fa-laptop-code",
            img: "images/احمد اشرف شلبي.jpeg"
        },
        {
            name_ar: "ورد علاء محمد",
            name_en: "Ward Alaa Mohamed",
            role_ar: "Mobile App Developer & HR Specialist",
            role_en: "Mobile App Developer & HR Specialist",
            icon: "fa-solid fa-user-gear",
            img: "images/ورد علي محمد.jpeg"
        }
    ];

    container.innerHTML = `
        <div class="about-wrapper" style="max-width: 1250px; margin: 0 auto;">
            <!-- Hero About Header -->
            <div class="glass-card" style="padding: 50px 36px; text-align: center; margin-bottom: 40px; border: 1px solid var(--border-gold);">
                <div class="section-badge" style="margin-bottom: 20px; font-size: 0.95rem;">
                    <i class="fa-solid fa-trophy" style="color: #fbbf24;"></i> ${dict.hero_badge}
                </div>

                <h1 style="font-size: 2.6rem; font-weight: 900; margin-bottom: 20px;" class="gold-text">
                    ${dict.about_hero_title}
                </h1>

                <p style="font-size: 1.15rem; color: var(--text-sub); max-width: 900px; margin: 0 auto; line-height: 1.9;">
                    ${dict.about_hero_desc}
                </p>
            </div>

            <!-- Project Goal & Problem Solved Section -->
            <div class="glass-card" style="padding: 44px; margin-bottom: 48px;">
                <div class="section-badge" style="margin-bottom: 16px;">
                    <i class="fa-solid fa-lightbulb"></i> ${dict.project_goal_title}
                </div>
                
                <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 16px; color: var(--text-main);">
                    ${dict.project_goal_title}
                </h2>

                <p style="font-size: 1.1rem; color: var(--text-muted); line-height: 1.9; max-width: 1100px;">
                    ${dict.project_goal_desc}
                </p>
            </div>

            <!-- Team Section Header -->
            <div class="section-header">
                <div class="section-badge"><i class="fa-solid fa-users"></i> ${dict.team_title}</div>
                <h2 class="section-title">${dict.team_title}</h2>
                <p class="section-subtitle">${dict.team_sub}</p>
            </div>

            <!-- Team Grid (Larger Cards & Enlarged Avatars, NO Social Links) -->
            <div class="team-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 32px;">
                ${team.map(member => `
                    <div class="glass-card team-card" style="text-align: center; padding: 40px 24px; transition: var(--transition-normal);">
                        <div class="avatar-glow-wrapper" style="width: 165px; height: 165px; border-radius: 50%; margin: 0 auto 24px; padding: 5px; background: var(--gold-gradient); box-shadow: var(--shadow-gold);">
                            <img src="${member.img}" alt="${lang === 'ar' ? member.name_ar : member.name_en}" 
                                onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.name_en)}&background=111827&color=fbbf24&size=165';"
                                style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; background: var(--bg-surface);">
                        </div>

                        <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 10px; color: var(--text-main);">
                            ${lang === 'ar' ? member.name_ar : member.name_en}
                        </h3>

                        <div style="font-size: 1.05rem; font-weight: 700; color: var(--primary-gold);">
                            <i class="${member.icon}"></i> ${lang === 'ar' ? member.role_ar : member.role_en}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add card hover CSS
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
        .team-card:hover {
            transform: translateY(-8px);
            border-color: var(--primary-gold);
            box-shadow: var(--shadow-card), var(--shadow-gold);
        }
    `;
    document.head.appendChild(styleEl);
}
