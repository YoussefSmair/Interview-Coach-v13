/* ==========================================================================
   Interview Coach V3 - Real Job Descriptions & Recommended Courses Module
   ========================================================================== */

window.getJobDescriptionData = function(jobId) {
    const job = (window.jobsList || []).find(j => j.id === jobId) || { title_ar: "الوظيفة", title_en: "Job Role", category: "tech" };

    // ------ الأولوية الأولى: وصف مخصص لهذه الوظيفة بالاسم ------
    const dedicatedDesc = window.JOB_DESCRIPTIONS && window.JOB_DESCRIPTIONS[jobId];
    if (dedicatedDesc) {
        return {
            jobId: jobId,
            title_ar: job.title_ar,
            title_en: job.title_en,
            ...dedicatedDesc
        };
    }

    // ------ Fallback مؤقت (نظام قديم): يُستخدم فقط للوظائف اللي لسه معملهاش وصف مخصص ------
    // TODO: امسح كل القوالب اللي تحت دي (Business/HR/Marketing/Other/Default) بعد اكتمال الترحيل
    const category = job.category || "tech";

    // 1. Business, Finance & Accounting Sector
    if (category === "business") {
        return {
            jobId: jobId,
            title_ar: job.title_ar,
            title_en: job.title_en,
            responsibilities_ar: [
                "تحليل البيانات المالية والعمليات التشغيلية للمؤسسة واستخراج المؤشرات الاستراتيجية.",
                "إعداد التقارير المحاسبية والقوائم المالية والميزانيات التقديرية بدقة عالية.",
                "متابعة الالتزام بالقوانين والمعايير المالية والتنظيمية وإدارة المخاطر والرقابة الداخلية.",
                "بناء وتطوير النماذج الاستثمارية والخطط التوسعية لرفع كفاءة الإنفاق والإيرادات.",
                "التنسيق بين الإدارات المختلفة لضمان انسيابية سلاسل الإمداد والعمليات اليومية."
            ],
            responsibilities_en: [
                "Analyze corporate financial telemetry and operational workflows for strategic insights.",
                "Prepare financial statements, general ledger accounting, and annual budget forecasts.",
                "Ensure regulatory compliance with financial frameworks (IFRS), tax audits, and internal controls.",
                "Construct financial investment models and cost-efficiency optimization strategies.",
                "Coordinate across corporate departments to streamline logistics and daily operations."
            ],
            skills_ar: [
                "إتقان التحليل المالي والأنظمة المحاسبية وتخطيط موارد المؤسسات (ERP & Excel/Power BI).",
                "معرفة قوية بالمعايير المحاسبية والمالية الدولية (IFRS) والقوانين الضريبية.",
                "مهارات التفكير الاستراتيجي وإدارة المخاطر والرقابة المالية والمستندية.",
                "القدرة على اتخاذ القرارات بناءً على البيانات وتوقع الاتجاهات المباشرة بالسوق.",
                "مهارات التفاوض مع الموردين والشركاء والتواصل المؤسسي الفعال."
            ],
            skills_en: [
                "Mastery of financial analytics, ERP enterprise software (SAP/Odoo), and advanced Excel.",
                "Deep knowledge of IFRS accounting standards, tax compliance, and auditing procedures.",
                "Strategic thinking, financial risk assessment, and corporate internal audit controls.",
                "Data-driven decision-making and economic trend forecasting capability.",
                "Vendor contract negotiation, partner management, and effective corporate communication."
            ],
            salary_ar: "يتراوح متوسط الرواتب الإقليمي والدولي من $1,000 إلى $4,000+ شهريًا (حسب التخصص ومستوى الخبرة).",
            salary_en: "Regional & International average salary ranges from $1,000 to $4,000+ per month based on seniority.",
            career_path_ar: "Junior Analyst/Accountant ➔ Senior Specialist ➔ Financial/Operations Manager ➔ CFO / Operations Director.",
            career_path_en: "Junior Analyst/Accountant ➔ Senior Specialist ➔ Financial/Operations Manager ➔ CFO / Operations Director."
        };
    }

    // 2. Human Resources & Recruitment Sector
    if (category === "hr") {
        return {
            jobId: jobId,
            title_ar: job.title_ar,
            title_en: job.title_en,
            responsibilities_ar: [
                "صياغة وتنفيذ سياسات الموارد البشرية وإدارة الهيكل التنظيمي للمؤسسة.",
                "استقطاب المواهب والكفاءات وإدارة عمليات الفحص والمقابلات والتعيين.",
                "تطوير برامج التقييم السنوي للرواتب والمكافآت والتعويضات (Comp & Benefits).",
                "تحسين بيئة العمل وحل النزاعات العمالية وضمان الالتزام بقانون العمل.",
                "تصميم وتنفيذ خطط التدريب والتطوير المستمر لرفع كفاءة فريق العمل."
            ],
            responsibilities_en: [
                "Establish corporate HR policies, talent acquisition pipelines, and organizational design.",
                "Source, candidate screen, and execute structured behavioral and professional interviews.",
                "Administer compensation, employee benefits structures, and performance appraisal KPIs.",
                "Foster workplace culture, mitigate labor grievances, and enforce labor law compliance.",
                "Design corporate learning & development workshops to upskill workforce competency."
            ],
            skills_ar: [
                "فهم عميق لقوانين العمل والتأمينات واللوائح التنظيمية للمؤسسات.",
                "إتقان استخدام أنظمة إدارة الموارد البشرية (HRIS) ومنصات الاستقطاب الاحترافية.",
                "مهارات إجراء المقابلات السلوكية والتقييم المحايد للقدرات والمهارات.",
                "مهارات عالية في الذكاء العاطفي، حل النزاعات، والتواصل الإنساني والمؤسسي.",
                "القدرة على التحليل وإعداد تقارير الأداء ومؤشرات دوران العمل (Turnover Rate)."
            ],
            skills_en: [
                "Deep understanding of labor laws, insurance compliance, and corporate regulations.",
                "Proficiency in HRIS systems (Workday, BambooHR) and applicant tracking software (ATS).",
                "Expertise in structured behavioral interview techniques and candidate assessment.",
                "High emotional intelligence, conflict resolution skills, and empathetic communication.",
                "People analytics capability, turnover rate metrics, and performance reporting."
            ],
            salary_ar: "يتراوح متوسط الرواتب الإقليمي والدولي من $900 إلى $3,500+ شهريًا (حسب الحجم المؤسسي والخبرة).",
            salary_en: "Regional & International average salary ranges from $900 to $3,500+ per month based on seniority.",
            career_path_ar: "HR Specialist / Recruiter ➔ Senior HR Officer ➔ HR Manager ➔ Head of People & Culture / CHRO.",
            career_path_en: "HR Specialist / Recruiter ➔ Senior HR Officer ➔ HR Manager ➔ Head of People & Culture / CHRO."
        };
    }

    // 3. Marketing, Sales & Growth Sector
    if (category === "marketing") {
        return {
            jobId: jobId,
            title_ar: job.title_ar,
            title_en: job.title_en,
            responsibilities_ar: [
                "صياغة وتنفيذ الخطط التسويقية والحملات الإعلانية المدفوعة والمجانية عبر المنصات المتنوعة.",
                "تحليل سلوك المستهلك وتحديد الشريحة المستهدفة لزيادة الوعي بالعلامة التجارية.",
                "إعداد المحتوى الإعلاني والتسويقي المقنع وتحسين معدلات التحول (Conversion Rate).",
                "متابعة وتحليل نتائج الحملات التسويقية وحساب عائد الاستثمار الإعلاني (ROAS).",
                "إدارة علاقات العملاء والتفاوض لإتمام الصفقات البيعية وتوسيع قاعدة العملاء."
            ],
            responsibilities_en: [
                "Plan and execute multi-channel marketing campaigns across paid and organic channels.",
                "Analyze consumer behavior, define target buyer personas, and elevate brand awareness.",
                "Craft persuasive advertising copy and optimize conversion funnel metrics.",
                "Track marketing campaign performance metrics, ROAS, and customer acquisition costs (CAC).",
                "Manage B2B/B2C client pipelines, deliver sales presentations, and close strategic deals."
            ],
            skills_ar: [
                "إتقان أدوات التسويق الرقمي والتحليل (Google Analytics, Meta Ads, SEO tools).",
                "مهارات كتابة النصوص الإعلانية (Copywriting) والتواصل البصري والتسويقي.",
                "القدرة على تحليل البيانات وقراءة مؤشرات التفاعل والأداء الإعلاني.",
                "مهارات إقناع عالية، تفاوض، وبناء العلاقات الاستراتيجية طويلة الأجل.",
                "الإبداع والابتكار في طرح حلول تسويقية وفيروسية متميزة."
            ],
            skills_en: [
                "Proficiency in digital marketing platforms (Google Ads, Meta Business, SEO suites).",
                "Compelling copywriting skills, brand storytelling, and visual marketing resonance.",
                "Data analytics expertise to evaluate user engagement and ROI metrics.",
                "Strong persuasive negotiation capability and long-term client relationship building.",
                "Creative campaign brainstorming and innovative growth strategy execution."
            ],
            salary_ar: "يتراوح متوسط الرواتب الإقليمي والدولي من $800 إلى $3,800+ شهريًا (إضافة للعمولات والمكافآت).",
            salary_en: "Regional & International average salary ranges from $800 to $3,800+ per month (plus performance bonuses).",
            career_path_ar: "Marketing/Sales Specialist ➔ Senior Specialist ➔ Marketing/Sales Manager ➔ CMO / VP of Growth.",
            career_path_en: "Marketing/Sales Specialist ➔ Senior Specialist ➔ Marketing/Sales Manager ➔ CMO / VP of Growth."
        };
    }

    // 4. Diverse Fields, Design & Media Sector
    if (category === "other") {
        return {
            jobId: jobId,
            title_ar: job.title_ar,
            title_en: job.title_en,
            responsibilities_ar: [
                "تقديم الخدمة والاستشارات التخصصية بأعلى درجات الاحترافية والمعايير المعتمدة.",
                "الابتكار وتصميم وتطبيق الحلول البصرية أو التشغيلية أو القانونية حسب متطلبات العميل.",
                "التواصل المباشر مع العملاء وأصحاب المصلحة لفهم الاحتياجات وتلبيتها بدقة.",
                "إدارة وتوثيق سريانات العمل والمشاريع لضمان التسليم في المواعيد المحددة.",
                "التطوير المستمر لأدوات وأساليب العمل لمواكبة التغيرات والتطورات بالقطاع."
            ],
            responsibilities_en: [
                "Deliver specialized domain services adhering to corporate quality standards.",
                "Design and implement creative visual, legal, or operational solutions tailored for clients.",
                "Engage directly with key stakeholders to extract requirements and ensure satisfaction.",
                "Manage project deliverables and timelines maintaining rigorous quality oversight.",
                "Continuously refine domain tools and methodologies matching current industry shifts."
            ],
            skills_ar: [
                "إتقان البرامج والأدوات التخصصية بالقطاع (مثل أدوات Adobe، المنظومات القانونية، أو الفندقية).",
                "التفكير الإبداعي والقدرة على حل المشكلات بأساليب مبتكرة وفعالة.",
                "مهارات تواصل واستماع قوية وفهم عميق لاحتياجات العميل ومقدم الخدمة.",
                "تنظيم الوقت وإدارة المهام المتعددة والدقة المتناهية في التفاصيل.",
                "المرونة وسرعة الاستجابة لمتطلبات سوق العمل والعملاء."
            ],
            skills_en: [
                "Mastery of domain-specific professional software tools (Adobe Creative Suite, CRM/Legal suites).",
                "Creative problem-solving capability and innovative solution delivery.",
                "Strong active listening and empathetic communication with stakeholders.",
                "Time management, multi-tasking capacity, and attention to detail.",
                "Agility and swift adaptation to evolving client requirements and market shifts."
            ],
            salary_ar: "يتراوح متوسط الرواتب الإقليمي والدولي من $750 إلى $3,200+ شهريًا (حسب التخصص والخبرة).",
            salary_en: "Regional & International average salary ranges from $750 to $3,200+ per month based on seniority.",
            career_path_ar: "Specialist ➔ Senior Professional ➔ Lead / Unit Manager ➔ Consultant / Department Head.",
            career_path_en: "Specialist ➔ Senior Professional ➔ Lead / Unit Manager ➔ Consultant / Department Head."
        };
    }

    // 5. Default: Software Engineering & Technology Sector
    return {
        jobId: jobId,
        title_ar: job.title_ar,
        title_en: job.title_en,
        responsibilities_ar: [
            "تخطيط وتطوير النظم والحلول البرمجية عالية الجودة وفق معايير 2026/2027.",
            "التعاون مع فرق العمل متعددة التخصصات (UI/UX, Product, DevOps) لضمان تحقيق الأهداف.",
            "مراجعة الأكواد البرمجية (Peer Code Reviews) وضمان اختبارات الجودة الأوتوماتيكية.",
            "مراقبة الأداء وإصلاح الثغرات وتحسين سرعة الاستجابة واستقرار الأنظمة الحية.",
            "توثيق المعماريات الهندسية وواجهات البرمجة (APIs) لتسهيل استدامة التطوير."
        ],
        responsibilities_en: [
            "Architect and develop high-performance applications adhering to modern 2026 standards.",
            "Collaborate with cross-functional product, UX, and DevOps teams to deliver features.",
            "Perform peer code reviews and maintain unit/integration automated test coverage.",
            "Monitor live production metrics, resolve latency bottlenecks, and patch vulnerabilities.",
            "Maintain comprehensive architecture documentation and API integration guides."
        ],
        skills_ar: [
            "إتقان اللغات والأطر البرمجية الحديثة الخاصة بالتخصص.",
            "فهم متعمق لمعماريات الأنظمة الموزعة والتوسع السحابي (Cloud & Microservices).",
            "معرفة قوية بأساسيات الأمان السيبراني وحماية البيانات (OWASP Top 10).",
            "مهارات حل المشكلات المعقدة والتحليل المنطقي المتقدم (Problem Solving).",
            "مهارات تواصل عالية وإدارة الوقت وتطبيق منهجيات الأجايل (Agile/Scrum)."
        ],
        skills_en: [
            "Mastery of modern domain-specific programming languages and frameworks.",
            "Deep expertise in microservices architecture, cloud deployment, and system scalability.",
            "Solid grasp of web security protocols, encryption, and OWASP Top 10 mitigation.",
            "Advanced algorithmic problem-solving and root-cause analytical capability.",
            "Strong communication, time management, and Agile/Scrum sprint collaboration."
        ],
        salary_ar: "يتراوح متوسط الرواتب الإقليمي والدولي من $1,200 إلى $4,500+ شهريًا (حسب مستوى الخبرة والنطاق الجغرافي).",
        salary_en: "Regional & International average salary ranges from $1,200 to $4,500+ per month based on seniority.",
        career_path_ar: "Junior Specialist ➔ Senior Engineer ➔ Tech Lead / Architect ➔ Engineering Manager / CTO.",
        career_path_en: "Junior Specialist ➔ Senior Specialist ➔ Tech Lead / Architect ➔ Department Director / VP."
    };
};

window.getJobCoursesData = function(jobId) {
    const job = (window.jobsList || []).find(j => j.id === jobId) || { title_ar: "الوظيفة", title_en: "Job Role" };

    return [
        {
            title_ar: `الدورة الشاملة لتخصص ${job.title_ar} - من المبتدئ إلى المحترف`,
            title_en: `Mastering ${job.title_en} - Comprehensive Professional Bootcamp`,
            provider: "FreeCodeCamp & YouTube",
            type: "Free Course / Playlist",
            url: "https://www.youtube.com/results?search_query=" + encodeURIComponent(job.title_en + " full course 2026"),
            desc_ar: "مسار تعليمي مجاني كامل يشرح الأساسيات والتطبيقات العملية المتقدمة مع مشاريع حقيقية.",
            desc_en: "Free comprehensive learning path covering core foundations, real-world projects, and advanced concepts."
        },
        {
            title_ar: `المقابلة الشخصية وتخطي أسئلة الـ HR والـ Tech كـ ${job.title_ar}`,
            title_en: `Acing The ${job.title_en} Technical & Behavioral Interview`,
            provider: "Coursera & LinkedIn Learning",
            type: "Specialization Track",
            url: "https://www.youtube.com/results?search_query=" + encodeURIComponent(job.title_en + " interview questions and answers"),
            desc_ar: "دورة مخصصة لمراجعة أهم أسئلة المقابلات الحقيقية والتكتيكات المطلوب إظهارها في المقابلة.",
            desc_en: "Tailored preparation guide reviewing key technical questions, coding challenges, and HR behavioral responses."
        },
        {
            title_ar: `بناء مشروع عملي متكامل وإضافته للـ Portfolio كـ ${job.title_ar}`,
            title_en: `Build & Deploy Real Enterprise Project Portfolio`,
            provider: "Udemy & GitHub Guides",
            type: "Hands-on Workshop",
            url: "https://www.youtube.com/results?search_query=" + encodeURIComponent(job.title_en + " enterprise project tutorial"),
            desc_ar: "خطوة بخطوة لبناء مشروع احترافي حقيقي يثبت مهاراتك ويجذب مسؤول التوظيف على LinkedIn.",
            desc_en: "Step-by-step practical guide to build and showcase a real-world enterprise project on your resume."
        }
    ];
};
