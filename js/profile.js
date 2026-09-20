/* ==========================================================================
   Interview Coach - User Profile & History Dashboard Component
   ========================================================================== */

function renderProfileView() {
    const lang = AppState.language;
    const dict = translations[lang] || translations.ar;
    const container = document.getElementById('view-profile');
    if (!container) return;

    const user = AppState.user;
    const history = AppState.history || [];

    // Calculate Stats
    const totalExams = history.length;
    const passedCount = history.filter(h => h.isPassed || h.score >= 75).length;
    const avgScore = totalExams > 0 
        ? Math.round(history.reduce((acc, h) => acc + (h.score || 0), 0) / totalExams) 
        : 0;

    container.innerHTML = `
        <div class="profile-wrapper" style="max-width: 1050px; margin: 0 auto; position: relative;">
            <!-- User Header Card -->
            <div class="glass-card" style="padding: 32px; margin-bottom: 32px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                <div style="display: flex; align-items: center; gap: 20px;">
                    <div style="width: 72px; height: 72px; border-radius: 50%; background: var(--gold-gradient); color: var(--bg-primary); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; font-weight: 800; box-shadow: var(--shadow-gold);">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div>
                        <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">
                            ${user.name}
                        </h2>
                        <p style="color: var(--text-muted); font-size: 0.95rem;">
                            <i class="fa-solid fa-envelope" style="color: var(--primary-gold);"></i> ${user.email}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Stats Bar Grid -->
            <div class="profile-stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 40px; direction: ltr !important;">
                <div class="glass-card" style="text-align: center; padding: 24px;">
                    <i class="fa-solid fa-award" style="font-size: 2rem; color: var(--primary-gold); margin-bottom: 10px;"></i>
                    <div style="font-size: 2.4rem; font-weight: 900; font-family: var(--font-en), sans-serif; line-height: 1;" class="gold-text">${totalExams}</div>
                    <div style="color: var(--text-muted); font-weight: 600; font-size: 0.95rem;">${dict.user_total_exams}</div>
                </div>

                <div class="glass-card" style="text-align: center; padding: 24px;">
                    <i class="fa-solid fa-chart-line" style="font-size: 2rem; color: #3b82f6; margin-bottom: 10px;"></i>
                    <div style="font-size: 2.4rem; font-weight: 900; font-family: var(--font-en), sans-serif; line-height: 1; color: #3b82f6;">${avgScore}%</div>
                    <div style="color: var(--text-muted); font-weight: 600; font-size: 0.95rem;">${dict.user_avg_score}</div>
                </div>

                <div class="glass-card" style="text-align: center; padding: 24px;">
                    <i class="fa-solid fa-circle-check" style="font-size: 2rem; color: #10b981; margin-bottom: 10px;"></i>
                    <div style="font-size: 2.4rem; font-weight: 900; font-family: var(--font-en), sans-serif; line-height: 1; color: #10b981;">${passedCount}</div>
                    <div style="color: var(--text-muted); font-weight: 600; font-size: 0.95rem;">${dict.user_passed_count}</div>
                </div>
            </div>

            <!-- Attempt History Table Section -->
            <div class="glass-card" style="padding: 32px; margin-bottom: 32px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
                    <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--text-main);">
                        <i class="fa-solid fa-clock-rotate-left" style="color: var(--primary-gold);"></i> ${dict.history_table_title}
                    </h3>
                    ${history.length > 0 ? `
                        <button id="clear-history-btn" style="background: none; border: none; color: var(--text-muted); font-size: 0.85rem; cursor: pointer; text-decoration: underline;">
                            ${lang === 'ar' ? 'مسح السجل' : 'Clear History'}
                        </button>
                    ` : ''}
                </div>

                ${history.length === 0 ? `
                    <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
                        <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.5;"></i>
                        <p style="font-size: 1.05rem;">${dict.no_history}</p>
                    </div>
                ` : `
                    <div class="history-table-container" style="overflow-x: auto; direction: ltr !important;">
                        <table style="width: 100%; border-collapse: collapse; text-align: ${lang === 'ar' ? 'right' : 'left'}; direction: ltr !important;">
                            <thead>
                                <tr style="border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.9rem;">
                                    <th style="padding: 12px;">${dict.col_job}</th>
                                    <th style="padding: 12px;">${dict.col_date}</th>
                                    <th style="padding: 12px;">${dict.col_score}</th>
                                    <th style="padding: 12px;">${dict.col_status}</th>
                                    <th style="padding: 12px;">${dict.col_action}</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${history.map(item => `
                                    <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.04); font-size: 0.95rem;">
                                        <td style="padding: 16px 12px; font-weight: 700; color: var(--text-main);">
                                            ${lang === 'ar' ? item.jobTitleAr : item.jobTitleEn}
                                        </td>
                                        <td style="padding: 16px 12px; color: var(--text-muted); font-size: 0.85rem;">
                                            ${item.date}
                                        </td>
                                        <td style="padding: 16px 12px; font-weight: 800; color: ${item.isPassed ? '#10b981' : '#f59e0b'};">
                                            ${item.score}% (${item.totalPoints}/${item.maxPoints})
                                        </td>
                                        <td style="padding: 16px 12px;">
                                            <span style="font-size: 0.8rem; font-weight: 700; padding: 4px 12px; border-radius: var(--radius-full); background: ${item.isPassed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'}; color: ${item.isPassed ? '#10b981' : '#ef4444'}; border: 1px solid ${item.isPassed ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'};">
                                                ${item.isPassed ? dict.status_pass : dict.status_fail}
                                            </span>
                                        </td>
                                        <td style="padding: 16px 12px;">
                                            <button class="retake-job-history-btn secondary-btn" data-jobid="${item.jobId}" style="padding: 6px 14px; font-size: 0.85rem;">
                                                <i class="fa-solid fa-rotate-right"></i> ${lang === 'ar' ? 'إعادة' : 'Retake'}
                                            </button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                `}
            </div>

            <!-- Bottom Left Sign Out / Sign In Action Area -->
            <div style="text-align: left; margin-top: 24px; padding: 10px 0;">
                ${user.isLoggedIn ? `
                    <button class="secondary-btn" id="profile-logout-btn" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.4); padding: 12px 28px; font-size: 0.95rem;">
                        <i class="fa-solid fa-right-from-bracket"></i> ${dict.logout}
                    </button>
                ` : `
                    <button class="primary-gold-btn" id="profile-login-btn" style="padding: 12px 28px; font-size: 0.95rem;">
                        <i class="fa-solid fa-right-to-bracket"></i> ${dict.login}
                    </button>
                `}
            </div>
        </div>
    `;

    // Attach Listeners
    const loginBtn = document.getElementById('profile-login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            if (typeof openAuthModal === 'function') openAuthModal();
        });
    }

    const logoutBtn = document.getElementById('profile-logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            AppState.logoutUser();
            updateUIStrings();
            renderProfileView();
        });
    }

    const clearBtn = document.getElementById('clear-history-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm(lang === 'ar' ? 'هل أنت تأكد من مسح سجل الامتحانات؟' : 'Are you sure you want to clear your history?')) {
                AppState.clearHistory();
                renderProfileView();
            }
        });
    }

    const retakeBtns = container.querySelectorAll('.retake-job-history-btn');
    retakeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const jobId = btn.getAttribute('data-jobid');
            if (typeof startJobExam === 'function') startJobExam(jobId);
        });
    });
}
