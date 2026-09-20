/* ==========================================================================
   Interview Coach V3 - Centralized State Management System
   ========================================================================== */

const AppState = {
    // Current Language ('ar' or 'en')
    language: localStorage.getItem('ic_lang') || 'ar',

    // Current Theme ('dark')
    theme: 'dark',

    // Active Top-level Navigation View ('home', 'jobs', 'profile', 'about', 'contact')
    activeView: 'home',

    // Sub-view inside 'jobs' tab ('list', 'exam', 'results', 'job-description', 'courses')
    jobsSubView: 'list',

    // Currently Selected Job ID for Exam or Specs
    selectedJobId: null,

    // Active Exam State
    exam: {
        jobId: null,
        includeExtra: false, // Extra +5 4-star questions checkbox
        questions: [],       // Loaded 25 or 30 questions
        userAnswers: {},     // Mapping of question index -> selected answer index (0..3)
        currentIndex: 0,     // Active question index
        totalScore: 0,       // Accumulated points
        maxScore: 0,         // Total possible points
        percentage: 0,       // Score percentage
        isPassed: false,     // Score >= 75%
        isSubmitted: false   // Exam submission flag
    },

    // User Profile & Authentication State
    user: JSON.parse(localStorage.getItem('ic_user')) || {
        name: 'مستخدم المنصة',
        email: 'guest@interviewcoach.com',
        isLoggedIn: false
    },

    // Historical Exam Attempt Log
    history: JSON.parse(localStorage.getItem('ic_history')) || [],

    /* State Mutators & Utilities */
    
    // Set language and update HTML dir/lang attributes
    setLanguage(lang) {
        this.language = lang;
        localStorage.setItem('ic_lang', lang);
        if (document.documentElement) {
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        }
    },

    // Set Top Level View ('home', 'jobs', etc.)
    setView(viewName) {
        this.activeView = viewName;
    },

    // Set Jobs Sub View ('list', 'exam', 'results', etc.)
    setJobsSubView(subView) {
        this.jobsSubView = subView;
    },

    // Save User Details
    setUser(name, email) {
        this.user = {
            name: name || (this.language === 'ar' ? 'مستخدم المنصة' : 'Platform User'),
            email: email || 'user@interviewcoach.com',
            isLoggedIn: true
        };
        localStorage.setItem('ic_user', JSON.stringify(this.user));
    },

    // Clear User Login
    logoutUser() {
        this.user = {
            name: this.language === 'ar' ? 'مستخدم المنصة' : 'Platform User',
            email: 'guest@interviewcoach.com',
            isLoggedIn: false
        };
        localStorage.removeItem('ic_user');
    },

    // Record Exam Attempt into History
    saveExamAttempt(attemptData) {
        this.history.unshift(attemptData); // Add to top of list
        localStorage.setItem('ic_history', JSON.stringify(this.history));
    },

    // Clear History
    clearHistory() {
        this.history = [];
        localStorage.removeItem('ic_history');
    }
};

window.AppState = AppState;

// Initialize HTML root language on load
AppState.setLanguage(AppState.language);

