/* ==========================================================================
   Interview Coach V3 - Results View, Adaptive Routing & Job Specs / Courses
   ========================================================================== */

function renderResultsView() {
    const lang = AppState.language;
    const dict = translations[lang] || translations.ar;
    const container = document.getElementById('view-jobs');
    if (!container) return;

    const exam = AppState.exam;
    const jobId = exam.jobId || AppState.selectedJobId || 'frontend_dev';
    const job = (window.jobsList || []).find(j => j.id === jobId) || { title_ar: "الوظيفة", title_en: "Job Role" };

    const percentage = exam.percentage || 0;
    const isPassed = exam.isPassed || (percentage >= 75);
    const questions = exam.questions || [];
    const userAnswers = exam.userAnswers || {};
    const dimScores = exam.dimScores || {
        tech: { earned: 0, max: 1 },
        logic: { earned: 0, max: 1 },
        mindset: { earned: 0, max: 1 }
    };

    // Calculate dimension percentages safely
    const techPct = Math.round((dimScores.tech.earned / (dimScores.tech.max || 1)) * 100);
    const logicPct = Math.round((dimScores.logic.earned / (dimScores.logic.max || 1)) * 100);
    const mindsetPct = Math.round((dimScores.mindset.earned / (dimScores.mindset.max || 1)) * 100);

    // Dynamic dimension label for Tech vs non-Tech jobs
    const isTechJob = job.category === 'tech';
    const dimTechLabel = isTechJob ? (dict.dim_tech || "الجانب التقني والبرمجي") : (dict.dim_domain || "المعرفة التخصصية والمهنية");

    container.innerHTML = `
        <div class="results-wrapper glass-card" style="max-width: 950px; margin: 0 auto; padding: 40px;">
            <!-- Header Banner -->
            <div class="results-header" style="text-align: center; margin-bottom: 36px; padding-bottom: 28px; border-bottom: 1px solid var(--border-subtle);">
                <div class="section-badge" style="background: ${isPassed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'}; border-color: ${isPassed ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}; color: ${isPassed ? '#10b981' : '#ef4444'}; font-size: 1rem; padding: 8px 20px; margin-bottom: 16px;">
                    <i class="fa-solid fa-${isPassed ? 'circle-check' : 'triangle-exclamation'}"></i> ${isPassed ? dict.passed_badge : dict.failed_badge}
                </div>

                <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 12px;">
                    ${dict.results_title}: <span class="gold-text">${lang === 'ar' ? job.title_ar : job.title_en}</span>
                </h2>

                <!-- Big Percentage Gauge -->
                <div class="score-circle-wrapper" style="margin: 24px auto; width: 140px; height: 140px; border-radius: 50%; background: radial-gradient(circle, var(--bg-surface) 60%, transparent 65%), conic-gradient(${isPassed ? '#10b981' : '#f59e0b'} ${percentage}%, var(--bg-primary) 0); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px ${isPassed ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'};">
                    <div style="text-align: center;">
                        <span style="font-size: 2.2rem; font-weight: 900; color: var(--text-main);">${percentage}%</span>
                        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">${exam.totalScore} / ${exam.maxScore} pts</div>
                    </div>
                </div>
            </div>

            <!-- Dimensions Breakdown Bars -->
            <div class="dimensions-section" style="margin-bottom: 40px; background: rgba(31, 41, 55, 0.4); padding: 24px; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
                <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 20px; color: var(--primary-gold);">
                    <i class="fa-solid fa-chart-simple"></i> ${dict.dimensions_breakdown}
                </h3>

                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <!-- Tech/Domain Dimension Bar -->
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; margin-bottom: 6px;">
                            <span><i class="fa-solid fa-${isTechJob ? 'code' : 'briefcase'}" style="color: #3b82f6;"></i> ${dimTechLabel}</span>
                            <span style="color: #3b82f6;">${techPct}%</span>
                        </div>
                        <div style="width: 100%; height: 10px; background: var(--bg-primary); border-radius: var(--radius-full); overflow: hidden;">
                            <div style="width: ${techPct}%; height: 100%; background: #3b82f6; border-radius: var(--radius-full);"></div>
                        </div>
                    </div>

                    <!-- Logic Dimension Bar -->
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; margin-bottom: 6px;">
                            <span><i class="fa-solid fa-brain" style="color: #8b5cf6;"></i> ${dict.dim_logic}</span>
                            <span style="color: #8b5cf6;">${logicPct}%</span>
                        </div>
                        <div style="width: 100%; height: 10px; background: var(--bg-primary); border-radius: var(--radius-full); overflow: hidden;">
                            <div style="width: ${logicPct}%; height: 100%; background: #8b5cf6; border-radius: var(--radius-full);"></div>
                        </div>
                    </div>

                    <!-- Mindset Dimension Bar -->
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; margin-bottom: 6px;">
                            <span><i class="fa-solid fa-user-gear" style="color: #10b981;"></i> ${dict.dim_mindset}</span>
                            <span style="color: #10b981;">${mindsetPct}%</span>
                        </div>
                        <div style="width: 100%; height: 10px; background: var(--bg-primary); border-radius: var(--radius-full); overflow: hidden;">
                            <div style="width: ${mindsetPct}%; height: 100%; background: #10b981; border-radius: var(--radius-full);"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons (Conditional Routing) -->
            <div class="results-actions" style="display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 40px;">
                ${isPassed ? `
                    <button class="primary-gold-btn" id="res-job-desc-btn" style="font-size: 1.05rem; padding: 14px 28px;">
                        <i class="fa-solid fa-file-contract"></i> ${dict.view_job_desc_btn}
                    </button>
                ` : `
                    <button class="primary-gold-btn" id="res-courses-btn" style="font-size: 1.05rem; padding: 14px 28px; background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
                        <i class="fa-solid fa-graduation-cap"></i> ${dict.discover_courses_btn}
                    </button>
                `}

                <button class="secondary-btn" id="res-retake-btn" style="font-size: 1.05rem; padding: 14px 24px;">
                    <i class="fa-solid fa-rotate-right"></i> ${dict.retake_exam_btn}
                </button>
            </div>

            <!-- Detailed Answer Review List -->
            <div class="answers-review-section">
                <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 24px; color: var(--text-main); border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                    <i class="fa-solid fa-list-check" style="color: var(--primary-gold);"></i> ${dict.review_answers_title}
                </h3>

                <div style="display: flex; flex-direction: column; gap: 24px;">
                    ${questions.map((q, qIdx) => {
                        const selectedAnsIdx = userAnswers[qIdx];
                        const selectedAns = selectedAnsIdx !== undefined ? q.answers[selectedAnsIdx] : null;
                        const optimalAns = q.answers.find(a => a.points === 5) || q.answers[3];

                        const ptsEarned = selectedAns ? selectedAns.points : 0;
                        const isOptimal = ptsEarned === 5;

                        return `
                            <div class="review-card" style="background: var(--bg-primary); border: 1px solid ${isOptimal ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-subtle)'}; border-radius: var(--radius-md); padding: 20px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                                    <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary-gold);">
                                        ${dict.question_counter} ${qIdx + 1} (${q.stars})
                                    </span>
                                    <span style="font-size: 0.85rem; font-weight: 800; padding: 4px 12px; border-radius: var(--radius-full); background: ${isOptimal ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)'}; color: ${isOptimal ? '#10b981' : '#f59e0b'};">
                                        ${ptsEarned} / 5 pts
                                    </span>
                                </div>

                                <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 14px; color: var(--text-main);">
                                    ${lang === 'ar' ? q.q_ar : q.q_en}
                                </h4>

                                <!-- Selected Answer -->
                                <div style="margin-bottom: 10px; font-size: 0.95rem; padding: 10px 14px; background: rgba(31, 41, 55, 0.5); border-radius: var(--radius-sm); border-${lang === 'ar' ? 'right' : 'left'}: 4px solid ${isOptimal ? '#10b981' : '#f59e0b'};">
                                    <strong style="color: var(--text-muted);">${dict.your_answer}</strong> 
                                    <span style="color: var(--text-main);">${selectedAns ? (lang === 'ar' ? selectedAns.text_ar : selectedAns.text_en) : (lang === 'ar' ? 'لم يتم اختيار إجابة' : 'No answer selected')}</span>
                                </div>

                                <!-- Explanation for the answer the user actually picked -->
                                ${selectedAns && selectedAns.hr_exp_ar ? `
                                    <div style="font-size: 0.88rem; color: var(--text-muted); padding-top: 4px; padding-bottom: 8px; font-style: italic;">
                                        <i class="fa-solid fa-comment-dots" style="color: ${isOptimal ? '#10b981' : '#f59e0b'};"></i> <strong>${dict.hr_explanation}</strong> ${lang === 'ar' ? selectedAns.hr_exp_ar : selectedAns.hr_exp_en}
                                    </div>
                                ` : ''}

                                <!-- Optimal Answer (يظهر فقط لو المستخدم ما اخترش الإجابة المثالية) -->
                                ${!isOptimal ? `
                                    <div style="margin-bottom: 10px; font-size: 0.95rem; padding: 10px 14px; background: rgba(16, 185, 129, 0.08); border-radius: var(--radius-sm); border-${lang === 'ar' ? 'right' : 'left'}: 4px solid #10b981;">
                                        <strong style="color: #10b981;">${dict.optimal_answer}</strong> 
                                        <span style="color: var(--text-main);">${lang === 'ar' ? optimalAns.text_ar : optimalAns.text_en}</span>
                                    </div>
                                ` : ''}

                                <!-- HR Rationale Explanation for the optimal answer -->
                                ${!isOptimal && optimalAns.hr_exp_ar ? `
                                    <div style="font-size: 0.88rem; color: #10b981; padding-top: 8px; font-style: italic;">
                                        <i class="fa-solid fa-user-tie" style="color: var(--primary-gold);"></i> <strong>${dict.hr_explanation}</strong> ${lang === 'ar' ? optimalAns.hr_exp_ar : optimalAns.hr_exp_en}
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;

    // Attach Event Listeners
    const jobDescBtn = document.getElementById('res-job-desc-btn');
    if (jobDescBtn) {
        jobDescBtn.addEventListener('click', () => {
            AppState.setJobsSubView('job-description');
            renderJobDescriptionView();
        });
    }

    const coursesBtn = document.getElementById('res-courses-btn');
    if (coursesBtn) {
        coursesBtn.addEventListener('click', () => {
            AppState.setJobsSubView('courses');
            renderCoursesView();
        });
    }

    const retakeBtn = document.getElementById('res-retake-btn');
    if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
            AppState.exam.questions = null;
            AppState.exam.currentIndex = 0;
            AppState.exam.userAnswers = {};
            AppState.setJobsSubView('exam');
            Router.navigateTo('jobs', 'exam');
        });
    }
}

// Render Job Description View
function renderJobDescriptionView() {
    const lang = AppState.language;
    const dict = translations[lang] || translations.ar;
    const container = document.getElementById('view-jobs');
    if (!container) return;

    const jobId = AppState.selectedJobId || AppState.exam.jobId || 'frontend_dev';
    const descData = window.getJobDescriptionData(jobId);

    container.innerHTML = `
        <div class="job-desc-wrapper glass-card" style="max-width: 900px; margin: 0 auto; padding: 40px;">
            <button class="secondary-btn" id="back-to-jobs-btn-1" style="margin-bottom: 24px;">
                <i class="fa-solid fa-${lang === 'ar' ? 'arrow-right' : 'arrow-left'}"></i> ${dict.back_to_jobs_btn}
            </button>

            <div class="section-header" style="text-align: ${lang === 'ar' ? 'right' : 'left'}; margin-bottom: 32px;">
                <div class="section-badge"><i class="fa-solid fa-file-contract"></i> ${dict.job_desc_title}</div>
                <h2 class="section-title">${lang === 'ar' ? descData.title_ar : descData.title_en}</h2>
            </div>

            <!-- Responsibilities -->
            <div style="margin-bottom: 32px;">
                <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--primary-gold); margin-bottom: 14px;">
                    <i class="fa-solid fa-list-check"></i> ${dict.responsibilities_title}
                </h3>
                <ul style="list-style: disc; padding-${lang === 'ar' ? 'right' : 'left'}: 24px; color: var(--text-main); font-size: 1rem; line-height: 1.8;">
                    ${(lang === 'ar' ? descData.responsibilities_ar : descData.responsibilities_en).map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <!-- Skills Required -->
            <div style="margin-bottom: 32px;">
                <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--primary-gold); margin-bottom: 14px;">
                    <i class="fa-solid fa-brain"></i> ${dict.skills_title}
                </h3>
                <ul style="list-style: disc; padding-${lang === 'ar' ? 'right' : 'left'}: 24px; color: var(--text-main); font-size: 1rem; line-height: 1.8;">
                    ${(lang === 'ar' ? descData.skills_ar : descData.skills_en).map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <!-- Expected Salary -->
            <div style="margin-bottom: 32px; background: rgba(245, 158, 11, 0.08); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--primary-gold); margin-bottom: 8px;">
                    <i class="fa-solid fa-money-bill-wave"></i> ${dict.salary_title}
                </h3>
                <p style="font-size: 1rem; color: var(--text-main);">${lang === 'ar' ? descData.salary_ar : descData.salary_en}</p>
            </div>

            <!-- Career Progression -->
            <div style="margin-bottom: 32px;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--primary-gold); margin-bottom: 8px;">
                    <i class="fa-solid fa-route"></i> ${dict.career_path_title}
                </h3>
                <p style="font-size: 1rem; color: var(--text-main); font-weight: 700;">${lang === 'ar' ? descData.career_path_ar : descData.career_path_en}</p>
            </div>
        </div>
    `;

    const backBtn = document.getElementById('back-to-jobs-btn-1');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            AppState.setJobsSubView('list');
            Router.navigateTo('jobs', 'list');
        });
    }
}

// Render Courses View
function renderCoursesView() {
    const lang = AppState.language;
    const dict = translations[lang] || translations.ar;
    const container = document.getElementById('view-jobs');
    if (!container) return;

    const jobId = AppState.selectedJobId || AppState.exam.jobId || 'frontend_dev';
    const job = (window.jobsList || []).find(j => j.id === jobId) || { title_ar: "الوظيفة", title_en: "Job Role" };
    const courses = window.getJobCoursesData(jobId);

    container.innerHTML = `
        <div class="courses-wrapper glass-card" style="max-width: 900px; margin: 0 auto; padding: 40px;">
            <button class="secondary-btn" id="back-to-jobs-btn-2" style="margin-bottom: 24px;">
                <i class="fa-solid fa-${lang === 'ar' ? 'arrow-right' : 'arrow-left'}"></i> ${dict.back_to_jobs_btn}
            </button>

            <div class="section-header" style="text-align: ${lang === 'ar' ? 'right' : 'left'}; margin-bottom: 32px;">
                <div class="section-badge"><i class="fa-solid fa-graduation-cap"></i> ${dict.courses_title} ${lang === 'ar' ? job.title_ar : job.title_en}</div>
                <h2 class="section-title">${dict.courses_title} ${lang === 'ar' ? job.title_ar : job.title_en}</h2>
                <p class="section-subtitle">${dict.courses_sub}</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 20px;">
                ${courses.map(course => `
                    <div style="background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 24px; display: flex; flex-direction: column; justify-content: space-between; transition: var(--transition-fast);">
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                                <span style="font-size: 0.8rem; font-weight: 700; padding: 4px 12px; border-radius: var(--radius-full); background: rgba(59, 130, 246, 0.15); color: #3b82f6;">
                                    ${course.provider}
                                </span>
                                <span style="font-size: 0.8rem; color: var(--text-muted);">${course.type}</span>
                            </div>
                            
                            <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px; color: var(--text-main);">
                                ${lang === 'ar' ? course.title_ar : course.title_en}
                            </h3>

                            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.6;">
                                ${lang === 'ar' ? course.desc_ar : course.desc_en}
                            </p>
                        </div>

                        <a href="${course.url}" target="_blank" rel="noopener noreferrer" class="primary-gold-btn" style="align-self: flex-start; text-decoration: none; font-size: 0.9rem; padding: 10px 20px;">
                            ${dict.watch_course_btn}
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const backBtn = document.getElementById('back-to-jobs-btn-2');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            AppState.setJobsSubView('list');
            Router.navigateTo('jobs', 'list');
        });
    }
}
