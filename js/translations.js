/* ==========================================================================
   Interview Coach - Enterprise Bilingual Dictionary (Clean UI & Direct Language)
   ========================================================================== */

const translations = {
    ar: {
        // App & Navigation
        app_name: "Interview Coach",
        nav_home: "الرئيسية",
        nav_jobs: "الوظائف",
        nav_profile: "الملف الشخصي",
        nav_about: "عن المشروع",
        nav_contact: "تواصل معنا",
        login: "تسجيل الدخول",
        logout: "تسجيل الخروج",
        guest_user: "مستخدم المنصة",
        language: "English",

        // Hero & Home
        hero_badge: "حاصل على المركز الثاني في Future Academy - منصة محاكاة المقابلات",
        hero_title: "تدرب على المقابلات الشخصية وتخطَّ رهبة التقييم المهني",
        hero_subtitle: "محاكي تفاعلي يقيس المعرفة التخصصية والتقنية، التحليل المنطقي، وعقلية وبيئة العمل عبر أكثر من 100 وظيفة في مختلف القطاعات.",
        start_practice_btn: "تصفح الوظائف وابدأ المقابلة",
        view_about_team_btn: "عن المشروع وفريق العمل",

        // Statistics Bar (User-Centric Practical KPIs)
        stat_jobs_count: "+100",
        stat_jobs_label: "أكثر من 100 وظيفة",
        stat_tech_ratio: "+500",
        stat_tech_label: "سؤال وتقييم تفاعلي",
        stat_eval_stars: "100%",
        stat_eval_label: "تقييم مجاني وتفاعلي",
        stat_hr_logic: "3",
        stat_hr_label: "3 أبعاد تقييم (المعرفة، المنطق، عقلية العمل)",

        // Home Features
        features_title: "مميزات منصة محاكاة المقابلات الشخصية",
        features_sub: "منظومة تقييم متكاملة صممت لتقليل الفجوة بين التحصيل الأكاديمي والمتطلبات الفعلية للمقابلات.",
        feat_1_title: "أسئلة مواقف مهنية محايدة",
        feat_1_desc: "اختبار طريقة التفكير والقدرة على حل المشكلات دون إظهار الإجابة أو توجيه المستخدم.",
        feat_2_title: "نظام نقاط موزون بدقة",
        feat_2_desc: "خيارات تقييم تتراوح من 1 إلى 5 نقاط لمنح نسبة مئوية تعكس جودة القرار المتخذ.",
        feat_3_title: "تحدي الأسئلة الإضافية المتقدمة",
        feat_3_desc: "إمكانية إضافة 5 أسئلة بـ 4 نجوم قيادية لاختبار القدرات التنافسية وتحدي الذات.",
        feat_4_title: "مسارات توجيه تكيفية",
        feat_4_desc: "توجيه تلقائي للوصف الوظيفي عند النجاح، أو للكورسات التطويرية في حالة الحاجة للرفع الكفاءة.",

        // Jobs Page & Filters
        jobs_title: "دليل الوظائف والمقابلات المتاحة",
        jobs_sub: "اختر التخصص المطلوب لبدء جلسة المحاكاة والتنافس في الامتحان التفاعلي.",
        search_jobs_placeholder: "ابحث باسم الوظيفة أو المجال (مثل: Frontend, HR, المحاسب...)",
        cat_all: "جميع القطاعات",
        cat_tech: "البرمجة والتكنولوجيا",
        cat_business: "إدارة الأعمال والمالية",
        cat_marketing: "التسويق والمبيعات",
        cat_hr: "الموارد البشرية والتوظيف",
        cat_other: "تخصصات متنوعة",
        take_exam_btn: "بدء المقابلة",
        job_category_label: "القطاع",

        // Exam Engine
        exam_header_title: "مقابلة وظيفة:",
        question_counter: "السؤال",
        of: "من",
        difficulty_label: "مستوى الصعوبة:",
        star_1: "سهلة",
        star_2: "متوسطة",
        star_3: "صعبة",
        star_4: "صعبة جداً (إضافية)",
        extra_qs_checkbox: "تفعيل الأسئلة الإضافية المتقدمة (+5 أسئلة بـ 4 نجوم ليصبح الإجمالي 30 سؤالاً)",
        dim_tech: "الجانب التقني والبرمجي",
        dim_domain: "المعرفة التخصصية والمهنية",
        dim_logic: "المنطق وتحليل المشكلات",
        dim_mindset: "عقلية وبيئة العمل",
        prev_btn: "السؤال السابق",
        next_btn: "السؤال التالي",
        submit_exam_btn: "إنهاء المقابلة وتسليم التقييم",

        // Results View
        results_title: "تقرير تقييم المقابلة الشخصية",
        overall_score: "النتيجة الكلية",
        passed_badge: "اجتياز المقابلة بنجاح",
        failed_badge: "التوصية بمزيد من التطوير والتدريب",
        score_percentage: "النسبة المئوية الحاصل عليها:",
        dimensions_breakdown: "تحليل الأداء حسب أبعاد التقييم الثلاثة:",
        review_answers_title: "مراجعة خيارات المقابلة والتفسير والتحليل المهني للإجابات:",
        your_answer: "الخيار الذي اخترته:",
        optimal_answer: "الخيار الأكثر ملاءمة معايير العمل (5 نقاط):",
        hr_explanation: "التفسير والتحليل المهني للإجابة:",
        view_job_desc_btn: "عرض الوصف الوظيفي المعتمد",
        discover_courses_btn: "استكشاف الدورات التدريبية الموصى بها",
        retake_exam_btn: "إعادة أداء المقابلة",

        // Job Description View
        job_desc_title: "الوصف الوظيفي المعتمد لمهنة:",
        responsibilities_title: "المسؤوليات والمهام الأساسية:",
        skills_title: "المهارات والخبرات المطلوبة:",
        salary_title: "المعدل المتوقع للرواتب بالسوق:",
        career_path_title: "مسار التطور والترقي الوظيفي:",
        back_to_jobs_btn: "العودة إلى دليل الوظائف",

        // Courses View
        courses_title: "الدورات والمصادر التدريبية الموصى بها لمهنة:",
        courses_sub: "ترشيحات تدريبية لرفع الكفاءة واكتساب المهارات المطلوبة في المقابلة القادمة.",
        watch_course_btn: "الانتقال إلى المحتوى التدريبي",

        // User Profile View
        profile_title: "الملف الشخصي وإحصائيات الأداء",
        profile_sub: "سجل متابعة الامتحانات السابقة ومتوسط نتائج التقييم في المقابلات.",
        user_total_exams: "إجمالي المقابلات",
        user_avg_score: "متوسط التقييم",
        user_passed_count: "المقابلات الناجحة",
        history_table_title: "سجل محاولات التقييم السابقة",
        col_job: "الوظيفة",
        col_date: "التاريخ",
        col_score: "النسبة المئوية",
        col_status: "الحالة",
        col_action: "إجراء",
        status_pass: "اجتياز (>=75%)",
        status_fail: "تطوير مطلوب (<75%)",
        no_history: "لا يوجد سجل امتحانات سابق. اختر وظيفة وابدأ اختبارك الأول.",

        // About Team & Project Scope Page
        about_hero_title: "عن مشروع Interview Coach",
        about_hero_desc: "مشروع حاصل على المركز الثاني في Future Academy، تم تطويره بالكامل لمساعدة الطلاب والخريجين والباحثين عن عمل ليتجاوزوا رهبة المقابلات الشخصية وتضييق الفجوة بين الدراسة الأكاديمية ومتطلبات سوق العمل.",
        project_goal_title: "الهدف والحل الذي يقدمه المشروع",
        project_goal_desc: "يوفر مشروع Interview Coach منصة محاكاة تفاعلية شاملة تضم أكثر من 100 وظيفة، حيث يقيم المتقدم عبر أسئلة سلوكية وتقنية ومنطقية محايدة تدربه على اتخاذ القرارات المهنية الصائبة مع تقديم تقارير أداء فورية وتوجيه ذكي نحو الدورات التدريبية لرفع كفاءته.",
        team_title: "فريق العمل المطور للمشروع",
        team_sub: "الكوادر التي ساهمت في تصميم وبناء المنصة:",
        member_1_name: "يوسف سمير كمال",
        member_1_role: "Web Design & Data Analyst",
        member_2_name: "أحمد علي رياض",
        member_2_role: "Mobile App Developer & UI/UX",
        member_3_name: "أحمد أشرف شلبي",
        member_3_role: "Front-end Developer",
        member_4_name: "ورد علاء محمد",
        member_4_role: "Mobile App Developer & HR Specialist",

        // Contact Page
        contact_title: "تواصل مع فريق تطوير المنصة",
        contact_sub: "نرحب بكافة الاستفسارات والآراء الفنية لتطوير وتحديث المنصة باستمرار.",
        contact_email_label: "البريد الإلكتروني",
        contact_phone_label: "الهاتف",
        contact_loc_label: "الموقع",
        contact_loc_val: "القاهرة، مصر",
        contact_hours_label: "ساعات العمل",
        contact_hours_val: "السبت - الخميس: 9 صباحاً - 5 مساءً",
        contact_name: "الاسم بالكامل",
        contact_email: "البريد الإلكتروني",
        contact_message: "نص الرسالة",
        send_message_btn: "إرسال الرسالة",
        contact_success_alert: "تم استلام رسالتك بنجاح. شكرًا لتواصلك معنا.",

        // Auth Modal
        auth_modal_title: "تسجيل الدخول للمنصة",
        auth_modal_sub: "أدخل بياناتك لحفظ نتائج التقييم في ملفك الشخصي",
        email_label: "البريد الإلكتروني",
        name_label: "الاسم بالكامل",
        auth_submit_btn: "تسجيل الدخول",

        // Footer
        footer_tagline: "منصة محاكاة المقابلات الشخصية الذكية المعززة بتقنيات التقييم المؤسسي الحديثة.",
        footer_copyright: "جميع الحقوق محفوظة © 2026 لـ Interview Coach."
    },
    en: {
        // App & Navigation
        app_name: "Interview Coach",
        nav_home: "Home",
        nav_jobs: "Jobs",
        nav_profile: "Profile",
        nav_about: "About",
        nav_contact: "Contact",
        login: "Sign In",
        logout: "Sign Out",
        guest_user: "Platform User",
        language: "العربية",

        // Hero & Home
        hero_badge: "2nd Place Winner at Future Academy - Interview Simulator",
        hero_title: "Practice Job Interviews & Overcome Evaluation Anxiety",
        hero_subtitle: "An interactive simulator measuring technical & domain knowledge, analytical logic, and workplace mindset across 100+ job roles.",
        start_practice_btn: "Explore Jobs & Start Interview",
        view_about_team_btn: "Meet The Team & Project Scope",

        // Statistics Bar
        stat_jobs_count: "100+",
        stat_jobs_label: "Over 100 Jobs",
        stat_tech_ratio: "500+",
        stat_tech_label: "Interactive Scenario Questions",
        stat_eval_stars: "100%",
        stat_eval_label: "Free Assessment & Instant Feedback",
        stat_hr_logic: "3",
        stat_hr_label: "3 Assessment Dimensions (Knowledge, Logic, Mindset)",

        // Home Features
        features_title: "Platform Capabilities & Assessment Systems",
        features_sub: "Integrated evaluation suite designed to bridge academic knowledge with actual corporate interview requirements.",
        feat_1_title: "Neutral Professional Scenarios",
        feat_1_desc: "Evaluates logic and problem-solving without revealing answers or leading candidate choices.",
        feat_2_title: "Precision Weighted Scoring",
        feat_2_desc: "Graded responses ranging from 1 to 5 points providing an authentic output percentage.",
        feat_3_title: "Advanced Bonus Challenge",
        feat_3_desc: "Optionally add 5 4-star high-difficulty questions to test competitive limits.",
        feat_4_title: "Adaptive Direction Pathways",
        feat_4_desc: "Automatic routing to verified Job Descriptions upon passing, or curated Courses when enhancement is needed.",

        // Jobs Page & Filters
        jobs_title: "Directory of Available Job Interviews",
        jobs_sub: "Select a specialized role to launch your interactive interview evaluation session.",
        search_jobs_placeholder: "Search by job title or keyword (e.g. Frontend, HR, Accountant...)",
        cat_all: "All Sectors",
        cat_tech: "Software & Tech",
        cat_business: "Business & Finance",
        cat_marketing: "Marketing & Sales",
        cat_hr: "Human Resources",
        cat_other: "Diverse Fields",
        take_exam_btn: "Start Interview",
        job_category_label: "Sector",

        // Exam Engine
        exam_header_title: "Interview for:",
        question_counter: "Question",
        of: "of",
        difficulty_label: "Difficulty:",
        star_1: "Easy",
        star_2: "Medium",
        star_3: "Hard",
        star_4: "Extreme (Bonus)",
        extra_qs_checkbox: "Enable Advanced Challenge (+5 4-Star Extreme Questions, Total 30 Questions)",
        dim_tech: "Technical Knowledge",
        dim_domain: "Specialized Domain Knowledge",
        dim_logic: "Logic & Problem Solving",
        dim_mindset: "Workplace Mindset",
        prev_btn: "Previous Question",
        next_btn: "Next Question",
        submit_exam_btn: "Submit & Complete Evaluation",

        // Results View
        results_title: "Interview Performance Assessment Report",
        overall_score: "Overall Percentage",
        passed_badge: "Interview Passed Successfully",
        failed_badge: "Skill Improvement Recommended",
        score_percentage: "Score Percentage:",
        dimensions_breakdown: "Performance Breakdown by Assessment Dimensions:",
        review_answers_title: "Choice Review & Professional Rationale:",
        your_answer: "Your Selected Choice:",
        optimal_answer: "Optimal Choice (5 Points):",
        hr_explanation: "Professional Rationale & Explanation:",
        view_job_desc_btn: "View Verified Job Description",
        discover_courses_btn: "Explore Recommended Training Courses",
        retake_exam_btn: "Retake Interview",

        // Job Description View
        job_desc_title: "Verified Job Description for:",
        responsibilities_title: "Core Responsibilities & Operations:",
        skills_title: "Required Skillsets & Qualifications:",
        salary_title: "Expected Industry Salary Ranges:",
        career_path_title: "Career Progression Trajectory:",
        back_to_jobs_btn: "Back to Jobs Directory",

        // Courses View
        courses_title: "Recommended Training Courses for:",
        courses_sub: "Curated learning paths to elevate technical competency for your upcoming interview.",
        watch_course_btn: "Open Training Course",

        // User Profile View
        profile_title: "User Profile & Performance Metrics",
        profile_sub: "Historical evaluation logs and performance averages.",
        user_total_exams: "Total Interviews",
        user_avg_score: "Average Rating",
        user_passed_count: "Passed Interviews",
        history_table_title: "Evaluation History Log",
        col_job: "Job Role",
        col_date: "Date",
        col_score: "Percentage",
        col_status: "Status",
        col_action: "Action",
        status_pass: "Passed (>=75%)",
        status_fail: "Improvement (<75%)",
        no_history: "No historical attempts logged yet. Select a job role to launch your first session.",

        // About Team Page
        about_hero_title: "About Interview Coach",
        about_hero_desc: "Award-winning project (2nd Place Winner at Future Academy), developed to help students, graduates, and job seekers master job interviews and bridge the gap between academic study and corporate market demands.",
        project_goal_title: "Project Scope & Purpose",
        project_goal_desc: "Interview Coach offers an interactive simulation platform spanning over 100 job roles. Candidates practice technical, logical, and soft-skill scenarios with immediate feedback reports and adaptive course recommendations.",
        team_title: "Development Core Team",
        team_sub: "The core team members behind the platform design and implementation:",
        member_1_name: "Yusuf Samir Kamal",
        member_1_role: "Web Design & Data Analyst",
        member_2_name: "Ahmed Ali Riad",
        member_2_role: "Mobile App Developer & UI/UX",
        member_3_name: "Ahmed Ashraf Shalaby",
        member_3_role: "Front-end Developer",
        member_4_name: "Ward Alaa Mohamed",
        member_4_role: "Mobile App Developer & HR Specialist",

        // Contact Page
        contact_title: "Contact Development Team",
        contact_sub: "We welcome feedback and technical inquiries to continuously refine the platform.",
        contact_email_label: "Email Address",
        contact_phone_label: "Phone",
        contact_loc_label: "Location",
        contact_loc_val: "Cairo, Egypt",
        contact_hours_label: "Working Hours",
        contact_hours_val: "Saturday - Thursday: 9 AM - 5 PM",
        contact_name: "Full Name",
        contact_email: "Email Address",
        contact_message: "Message Content",
        send_message_btn: "Send Message",
        contact_success_alert: "Your message has been received. Thank you for reaching out.",

        // Auth Modal
        auth_modal_title: "Sign In to Platform",
        auth_modal_sub: "Enter your account details to log evaluation results to your profile",
        email_label: "Email Address",
        name_label: "Full Name",
        auth_submit_btn: "Sign In",

        // Footer
        footer_tagline: "Intelligent interview simulator equipped with modern corporate evaluation metrics.",
        footer_copyright: "All rights reserved © 2026 Interview Coach."
    }
};

window.translations = translations;
