/* ==========================================================================
   Interview Coach - Interactive Exam Simulator & Scoring Engine
   ========================================================================== */

function renderExamView() {
    const lang = AppState.language;
    const dict = translations[lang] || translations.ar;
    const container = document.getElementById('view-jobs');
    if (!container) return;

    const jobId = AppState.selectedJobId || AppState.exam.jobId || 'frontend_dev';
    const job = (window.jobsList || []).find(j => j.id === jobId) || {
        title_ar: "مطور واجهات أمامية",
        title_en: "Frontend Developer",
        icon: "fa-solid fa-code"
    };

    // Helper function for Fisher-Yates shuffle of answers array
    function prepareQuestionsWithShuffledAnswers(rawQs) {
        return (rawQs || []).map(q => {
            const clonedQ = JSON.parse(JSON.stringify(q));
            const answers = clonedQ.answers || [];
            for (let i = answers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [answers[i], answers[j]] = [answers[j], answers[i]];
            }
            clonedQ.answers = answers;
            return clonedQ;
        });
    }

    // Load questions pool based on includeExtra checkbox
    if (!AppState.exam.questions || AppState.exam.questions.length === 0 || AppState.exam.jobId !== jobId) {
        AppState.exam.jobId = jobId;
        const rawQs = window.getJobQuestions(jobId, AppState.exam.includeExtra);
        AppState.exam.questions = prepareQuestionsWithShuffledAnswers(rawQs);
        AppState.exam.currentIndex = 0;
        AppState.exam.userAnswers = {};
    }

    const questions = AppState.exam.questions;
    const totalQs = questions.length;
    const currentIndex = AppState.exam.currentIndex;
    const currentQ = questions[currentIndex] || questions[0];

    // Dimension translations - Dynamically adapt Dimension 1 based on job category
    const isTechJob = job.category === 'tech';
    const dimensionLabels = {
        tech: isTechJob ? (dict.dim_tech || "الجانب التقني والبرمجي") : (dict.dim_domain || "المعرفة التخصصية والمهنية"),
        logic: dict.dim_logic || "المنطق وتحليل المشكلات",
        mindset: dict.dim_mindset || "عقلية وبيئة العمل"
    };

    // Render Exam Card Container - ALL structural containers forced LTR to prevent layout shift
    container.innerHTML = `
        <div class="exam-wrapper glass-card" style="max-width: 950px; margin: 0 auto; padding: 36px; direction: ltr !important;">
            <!-- Exam Header - FIXED LTR structure, only text content changes direction -->
            <div class="exam-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 20px; margin-bottom: 24px; direction: ltr !important;">
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; direction: ltr !important;">
                    <div style="direction: ltr !important;">
                        <div class="section-badge" style="margin-bottom: 6px; direction: ltr !important;">
                            <i class="${job.icon}"></i> ${dict.exam_header_title} ${lang === 'ar' ? job.title_ar : job.title_en}
                        </div>
                        <h2 style="font-size: 1.5rem; font-weight: 800; direction: ltr !important;">
                            ${dict.question_counter} <span class="gold-text">${currentIndex + 1}</span> ${dict.of} ${totalQs}
                        </h2>
                    </div>

                    <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; direction: ltr !important;">
                        <span class="dim-badge" style="padding: 6px 14px; border-radius: var(--radius-full); background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); color: #3b82f6; font-size: 0.85rem; font-weight: 700; direction: ltr !important;">
                            <i class="fa-solid fa-layer-group"></i> ${dimensionLabels[currentQ.dimension] || currentQ.dimension}
                        </span>
                        <span class="star-badge" style="padding: 6px 14px; border-radius: var(--radius-full); background: rgba(245, 158, 11, 0.15); border: 1px solid var(--border-gold); color: var(--primary-gold); font-size: 0.85rem; font-weight: 800; direction: ltr !important;">
                            ${currentQ.stars} ${dict['star_' + currentQ.difficulty]}
                        </span>
                    </div>
                </div>

                <!-- Progress Bar - Always LTR (fills left to right) -->
                <div class="progress-bar-track" style="width: 100%; height: 8px; background: var(--bg-primary); border-radius: var(--radius-full); overflow: hidden; direction: ltr !important;">
                    <div class="progress-bar-fill" style="width: ${Math.round(((currentIndex + 1) / totalQs) * 100)}%; height: 100%; background: var(--gold-gradient); transition: width 0.3s ease;"></div>
                </div>

                <!-- Extra Questions Checkbox - Fixed LTR layout, checkbox always on left -->
                <div class="extra-checkbox-wrapper" style="margin-top: 18px; padding: 12px 18px; background: rgba(31, 41, 55, 0.5); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); display: flex; align-items: center; gap: 12px; direction: ltr !important;">
                    <input type="checkbox" id="toggle-extra-qs" ${AppState.exam.includeExtra ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--primary-gold); cursor: pointer; flex-shrink: 0;">
                    <label for="toggle-extra-qs" style="font-size: 0.9rem; font-weight: 600; cursor: pointer; color: var(--text-main);">
                        <i class="fa-solid fa-square-plus" style="color: var(--primary-gold);"></i> ${dict.extra_qs_checkbox}
                    </label>
                </div>
            </div>

            <!-- Current Question Card - text direction follows language for proper reading -->
            <div class="question-body" style="margin-bottom: 32px; text-align: ${lang === 'ar' ? 'right' : 'left'}; direction: ${lang === 'ar' ? 'rtl' : 'ltr'};">
                <h3 class="question-text" style="font-size: 1.35rem; font-weight: 700; line-height: 1.6; margin-bottom: 24px; color: var(--text-main);">
                    ${lang === 'ar' ? currentQ.q_ar : currentQ.q_en}
                </h3>

                <!-- Choices Radio Group -->
                <div class="choices-group" style="display: flex; flex-direction: column; gap: 14px;">
                    ${currentQ.answers.map((ans, idx) => {
                        const isSelected = AppState.exam.userAnswers[currentIndex] === idx;
                        const optionLetters = ['أ', 'ب', 'ج', 'د'];
                        const optionLettersEn = ['A', 'B', 'C', 'D'];
                        const letter = lang === 'ar' ? optionLetters[idx] : optionLettersEn[idx];

                        return `
                            <label class="choice-option ${isSelected ? 'selected' : ''}" data-idx="${idx}" 
                                style="display: flex; align-items: flex-start; gap: 14px; padding: 16px 20px; background: ${isSelected ? 'rgba(245, 158, 11, 0.12)' : 'var(--bg-primary)'}; border: 1px solid ${isSelected ? 'var(--primary-gold)' : 'var(--border-subtle)'}; border-radius: var(--radius-md); cursor: pointer; transition: var(--transition-fast); text-align: ${lang === 'ar' ? 'right' : 'left'}; direction: ${lang === 'ar' ? 'rtl' : 'ltr'};">
                                <input type="radio" name="exam_choice" value="${idx}" ${isSelected ? 'checked' : ''} style="margin-top: 4px; accent-color: var(--primary-gold); flex-shrink: 0;">
                                <div style="flex: 1;">
                                    <span style="display: inline-block; font-weight: 800; color: var(--primary-gold); margin-${lang === 'ar' ? 'left' : 'right'}: 8px;">(${letter})</span>
                                    <span style="font-size: 1rem; color: var(--text-main); line-height: 1.6;">${lang === 'ar' ? ans.text_ar : ans.text_en}</span>
                                </div>
                            </label>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- Exam Navigation Footer - FIXED LTR: Prev always left, Next always right -->
            <div class="exam-footer-controls" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; border-top: 1px solid var(--border-subtle); padding-top: 20px; direction: ltr !important;">
                <button class="secondary-btn" id="prev-q-btn" ${currentIndex === 0 ? 'disabled style="opacity: 0.4; cursor: not-allowed; direction: ltr !important;"' : 'style="direction: ltr !important;"'}>
                    <i class="fa-solid fa-arrow-left"></i> ${dict.prev_btn}
                </button>

                <div style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600; direction: ltr !important;">
                    ${Object.keys(AppState.exam.userAnswers).length} ${dict.of} ${totalQs} ${lang === 'ar' ? 'إجابة مكتملة' : 'answered'}
                </div>

                ${currentIndex < totalQs - 1 ? `
                    <button class="primary-gold-btn" id="next-q-btn" style="direction: ltr !important;">
                        ${dict.next_btn} <i class="fa-solid fa-arrow-right"></i>
                    </button>
                ` : `
                    <button class="primary-gold-btn" id="submit-exam-btn" style="background: linear-gradient(135deg, #10b981, #059669); box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); direction: ltr !important;">
                        <i class="fa-solid fa-paper-plane"></i> ${dict.submit_exam_btn}
                    </button>
                `}
            </div>
        </div>
    `;

    // Event Listeners

    // Checkbox toggle listener
    const extraCheckbox = document.getElementById('toggle-extra-qs');
    if (extraCheckbox) {
        extraCheckbox.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            const hasAnswers = Object.keys(AppState.exam.userAnswers).length > 0;

            if (hasAnswers) {
                const confirmMsg = lang === 'ar'
                    ? 'تغيير هذا الخيار سيعيد بدء الامتحان من السؤال الأول وسيمسح إجاباتك الحالية. هل تريد المتابعة؟'
                    : 'Changing this option will restart the exam from question 1 and clear your current answers. Continue?';
                if (!confirm(confirmMsg)) {
                    e.target.checked = !isChecked;
                    return;
                }
            }

            AppState.exam.includeExtra = isChecked;
            const rawQs = window.getJobQuestions(jobId, isChecked);
            AppState.exam.questions = prepareQuestionsWithShuffledAnswers(rawQs);
            AppState.exam.userAnswers = {};
            AppState.exam.currentIndex = 0;
            renderExamView();
        });
    }

    // Radio choice selection listener
    const choiceLabels = container.querySelectorAll('.choice-option');
    choiceLabels.forEach(label => {
        label.addEventListener('click', () => {
            const idx = parseInt(label.getAttribute('data-idx'));
            AppState.exam.userAnswers[currentIndex] = idx;
            renderExamView();
        });
    });

    // Previous Button Listener
    const prevBtn = document.getElementById('prev-q-btn');
    if (prevBtn && currentIndex > 0) {
        prevBtn.addEventListener('click', () => {
            AppState.exam.currentIndex--;
            renderExamView();
        });
    }

    // Next Button Listener
    const nextBtn = document.getElementById('next-q-btn');
    if (nextBtn && currentIndex < totalQs - 1) {
        nextBtn.addEventListener('click', () => {
            AppState.exam.currentIndex++;
            renderExamView();
        });
    }

    // Submit Exam Listener
    const submitBtn = document.getElementById('submit-exam-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            submitExam();
        });
    }
}

// Function to calculate scores and transition to Results View
function submitExam() {
    const questions = AppState.exam.questions;
    const userAnswers = AppState.exam.userAnswers;

    let totalPoints = 0;
    let maxPossiblePoints = questions.length * 5; // 5 points per question max

    // Dimension breakdown sums
    const dimScores = {
        tech: { earned: 0, max: 0 },
        logic: { earned: 0, max: 0 },
        mindset: { earned: 0, max: 0 }
    };

    questions.forEach((q, idx) => {
        const dim = q.dimension || 'tech';
        dimScores[dim].max += 5;

        const selectedIdx = userAnswers[idx];
        if (selectedIdx !== undefined && q.answers[selectedIdx]) {
            const pts = q.answers[selectedIdx].points || 0;
            totalPoints += pts;
            dimScores[dim].earned += pts;
        }
    });

    const percentage = Math.round((totalPoints / maxPossiblePoints) * 100);
    const isPassed = percentage >= 75;

    // Save into State
    AppState.exam.totalScore = totalPoints;
    AppState.exam.maxScore = maxPossiblePoints;
    AppState.exam.percentage = percentage;
    AppState.exam.isPassed = isPassed;
    AppState.exam.isSubmitted = true;
    AppState.exam.dimScores = dimScores;

    // Record into User Profile History
    const job = (window.jobsList || []).find(j => j.id === AppState.exam.jobId) || { title_ar: "وظيفة", title_en: "Job Role" };
    AppState.saveExamAttempt({
        id: Date.now(),
        jobId: AppState.exam.jobId,
        jobTitleAr: job.title_ar,
        jobTitleEn: job.title_en,
        date: new Date().toLocaleDateString(AppState.language === 'ar' ? 'ar-EG' : 'en-US'),
        score: percentage,
        totalPoints: totalPoints,
        maxPoints: maxPossiblePoints,
        isPassed: isPassed,
        questionCount: questions.length
    });

    // Transition to Results view under Jobs tab
    AppState.setJobsSubView('results');
    if (typeof Router !== 'undefined') {
        Router.navigateTo('jobs', 'results');
    }
}
