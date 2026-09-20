/* ==========================================================================
   Interview Coach V4 - Multi-Page & Jobs Sub-View Router
   ========================================================================== */

const Router = {
    init() {
        const path = window.location.pathname.toLowerCase();
        let currentView = 'home';

        if (path.includes('jobs.html')) {
            currentView = 'jobs';
        } else if (path.includes('profile.html')) {
            currentView = 'profile';
        } else if (path.includes('about.html')) {
            currentView = 'about';
        } else if (path.includes('contact.html')) {
            currentView = 'contact';
        } else {
            currentView = 'home';
        }

        AppState.setView(currentView);
        this.renderActiveView();
    },

    navigateTo(viewName, subViewName = 'list') {
        AppState.setView(viewName);
        if (viewName === 'jobs') {
            AppState.setJobsSubView(subViewName);
        }

        const path = window.location.pathname.toLowerCase();
        const targetPage = viewName === 'home' ? 'index.html' : `${viewName}.html`;

        if (!path.includes(targetPage)) {
            window.location.href = targetPage;
            return;
        }

        this.renderActiveView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    renderActiveView() {
        const currentView = AppState.activeView;

        switch (currentView) {
            case 'home':
                if (typeof renderHomeView === 'function') renderHomeView();
                break;

            case 'jobs':
                if (typeof renderJobsFlow === 'function') renderJobsFlow();
                break;

            case 'profile':
                if (typeof renderProfileView === 'function') renderProfileView();
                break;

            case 'about':
                if (typeof renderAboutView === 'function') renderAboutView();
                break;

            case 'contact':
                if (typeof renderContactView === 'function') renderContactView();
                break;

            default:
                if (typeof renderHomeView === 'function') renderHomeView();
        }
    }
};
window.Router = Router;
