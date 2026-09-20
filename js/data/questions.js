/* ==========================================================================
   Interview Coach V8 - Domain-Isolated Question Bank Engine
   Standard: Exactly 25 Base Questions (difficulty 1-3) & 30 Total Questions (difficulty 1-4)
   ========================================================================== */

(function() {
    const globalScope = typeof window !== 'undefined' ? window : globalThis;

    // ----------------------------------------------------------------------
    // 1. UNIVERSAL QUESTIONS BLOCK (Soft Skills, Logic, Leadership & Mindset)
    // 10 Base Questions (Difficulty 1-3) + 2 Bonus Questions (Difficulty 4) = 12 Total
    // ----------------------------------------------------------------------
    function getUniversalBlock(titleAr, titleEn) {
        return [
            {
                id: "u_q1",
                difficulty: 1,
                stars: "★☆☆☆",
                dimension: "logic",
                q_ar: `كيف تتصرف كـ ${titleAr} عند تداخل مهمتين عاجلتين في الموعد النهائي نفسه؟`,
                q_en: `How do you handle two competing urgent tasks as a ${titleEn}?`,
                answers: [
                    { text_ar: "تقسيم وقت العمل بالتساوي بين المهمتين لإنجاز جزء من كل منهما.", text_en: "Splitting daily working time equally between both tasks.", points: 1 },
                    { text_ar: "التركيز الكامل على المهمة الأكثر تعقيداً أولاً ثم الانتقال للثانية.", text_en: "Completing the most complex task first before tackling the second.", points: 2 },
                    { text_ar: "العمل بساعات إضافية لتسليم المهمتين بالكامل في الموعد المعتمد.", text_en: "Working overtime hours to deliver both deliverables on schedule.", points: 3 },
                    { text_ar: "تقييم أثر المهمتين على العمل، والتواصل مع الإدارة لتنسيق الأولويات والمهل الزمنية.", text_en: "Evaluating business impact, consulting stakeholders to align priorities, and adjusting scope.", points: 5, hr_exp_ar: "تعديل الأولويات بناءً على الأثر التجاري يضمن تسليم المهام الحيوية دون إهدار للجهد.", hr_exp_en: "Realigning priorities with stakeholders based on business impact delivers optimal value." }
                ]
            },
            {
                id: "u_q2",
                difficulty: 1,
                stars: "★☆☆☆",
                dimension: "mindset",
                q_ar: `عند التعرّض لملاحظات نقدية حول أحد حلولك الفنية كـ ${titleAr}، كيف تتدرب على التعامل معها؟`,
                q_en: `How do you handle technical criticism on one of your solutions as a ${titleEn}?`,
                answers: [
                    { text_ar: "توضيح وجهة نظرك والدفاع عن الحل ما دام يؤدي الغرض المطلوب.", text_en: "Defending your design decision if it already meets functional requirements.", points: 1 },
                    { text_ar: "تطبيق التعديلات المطلوبة سريعاً للحفاظ على سلاسة العمل بين أعضاء الفريق.", text_en: "Implementing requested changes quickly to maintain team harmony.", points: 2 },
                    { text_ar: "مناقشة الملاحظات مع الزملاء والأخذ برأي الأغلبية في التصميم.", text_en: "Discussing feedback with team members and following standard majority advice.", points: 3 },
                    { text_ar: "دراسة النقد بموضوعية، عقد مراجعة فنية مع الفريق، وتطوير الحل بناءً على الأفضلية.", text_en: "Analyzing feedback objectively, holding a review, and refining the solution.", points: 5, hr_exp_ar: "التقييم الموضوعي للنقد واستغلاله لتطوير الجودة يبرز عقلية التعلم والنمو المستمر.", hr_exp_en: "Objective feedback analysis combined with technical reviews demonstrates a strong growth mindset." }
                ]
            },
            {
                id: "u_q3",
                difficulty: 1,
                stars: "★☆☆☆",
                dimension: "mindset",
                q_ar: `ما هو نهجك كـ ${titleAr} للتنسيق مع أعضاء الفريق الذين يعملون عن بعد؟`,
                q_en: `What is your primary method as a ${titleEn} for coordinating with remote teammates?`,
                answers: [
                    { text_ar: "التواصل عبر الرسائل المباشرة الفردية كلما دعت الحاجة لمتابعة مهمة محددة.", text_en: "Communicating via direct messages whenever a specific update is needed.", points: 1 },
                    { text_ar: "تنظيم اجتماعات دورية قصيرة لمشاركة ما تم إنجازه والخطوات القادمة.", text_en: "Holding brief sync meetings to recap progress and outline next steps.", points: 2 },
                    { text_ar: "تحديث حالة المهام باستمرار على منصة إدارة المشاريع الخاصة بالفريق.", text_en: "Updating task progress cards daily on project management tools.", points: 3 },
                    { text_ar: "تأسيس نظام توثيق واضح (Async Communication)، اجتماعات محددة، ومشاركة المعرفة بشفافية.", text_en: "Establishing clear async documentation, focused check-ins, and transparent knowledge sharing.", points: 5, hr_exp_ar: "التواصل القائم على التوثيق الفعال يضمن إنتاجية الفريق الموزع ووضوح الرؤية للجميع.", hr_exp_en: "Clear asynchronous documentation keeps distributed teams aligned and productive." }
                ]
            },
            {
                id: "u_q4",
                difficulty: 1,
                stars: "★☆☆☆",
                dimension: "logic",
                q_ar: `عند تسلم متطلبات غير كاملة لمشروع جديد كـ ${titleAr}، كيف تبدأ خطواتك؟`,
                q_en: `Faced with incomplete specifications for a new assignment, how do you proceed as a ${titleEn}?`,
                answers: [
                    { text_ar: "تطبيق الحلول المتعارف عليها في المشاريع المشابهة وتوضيح التعديلات لاحقاً.", text_en: "Applying standard baseline options and refining details as work progresses.", points: 1 },
                    { text_ar: "الطلب من المسؤولين إكمال المتطلبات قبل البدء الفعلي في العمل.", text_en: "Asking leads for complete requirements before starting active development.", points: 2 },
                    { text_ar: "البدء في بناء الأجزاء المؤكدة وتأجيل المتطلبات الغامضة لحين اتضاحها.", text_en: "Building confirmed core modules first while postponing ambiguous requirements.", points: 3 },
                    { text_ar: "صياغة سيناريوهات الاستخدام، عقد جلسة توضيح مع الإدارة، وتحديد نطاق العمل ومعايير القبول.", text_en: "Mapping out user stories, conducting scope alignment sessions, and setting clear acceptance criteria.", points: 5, hr_exp_ar: "تحديد نطاق العمل ومعايير القبول مبكراً يمنع سوء الفهم وهدر وقت الفريق.", hr_exp_en: "Early scope alignment and acceptance criteria prevent wasted development effort." }
                ]
            },
            {
                id: "u_q5",
                difficulty: 1,
                stars: "★☆☆☆",
                dimension: "mindset",
                q_ar: `كيف تنظم جدول عملك كـ ${titleAr} في فترات الضغط وتسليم المشروعات الحرج؟`,
                q_en: `How do you organize your work bandwidth during high-stakes deadlines as a ${titleEn}?`,
                answers: [
                    { text_ar: "التفرغ الكامل للتنفيذ وتأجيل الأنشطة الأخرى كالمقابلات والاجتماعات.", text_en: "Focusing 100% on execution while skipping routine sync meetings.", points: 1 },
                    { text_ar: "العمل بساعات إضافية مكثفة لإنجاز قائمة المهام بالكامل دون استثناء.", text_en: "Working overtime hours to complete every single item in the queue.", points: 2 },
                    { text_ar: "ترتيب المهام حسب الأولوية وتنفيذها بالتتابع واحدة تلو الأخرى.", text_en: "Sorting tasks strictly by priority and executing them sequentially.", points: 3 },
                    { text_ar: "التركيز على الميزات الأساسية المطلوبة للإطلاق (MVP)، تنظيم الوقت، وإدارة طاقة العمل بحكمة.", text_en: "Prioritizing core MVP deliverables, timeboxing tasks, and managing personal capacity wisely.", points: 5, hr_exp_ar: "التركيز على إطلاق الـ MVP وإدارة الطاقة الشخصية يضمنان التسليم الناجح دون إرهاق.", hr_exp_en: "Focusing on MVP essentials protects release deadlines and team sustainability." }
                ]
            },
            {
                id: "u_q6",
                difficulty: 2,
                stars: "★★☆☆",
                dimension: "mindset",
                q_ar: `كيف تساعد كـ ${titleAr} زميلاً يواجه صعوبة في تسليم مهمته في الوقت المحدد؟`,
                q_en: `How do you support a teammate struggling to meet their task deadline as a ${titleEn}?`,
                answers: [
                    { text_ar: "تنبيه قائد الفريق لوجود احتمال تأخير في التسليم لتعديل الجدول.", text_en: "Notifying the team lead of potential timeline risks to adjust sprint goals.", points: 1 },
                    { text_ar: "تقديم النصيحة والإجابة على استفساراته الفنية عند الطلب.", text_en: "Providing technical guidance and answering questions whenever requested.", points: 2 },
                    { text_ar: "تخصيص جزء من وقتك للمساعدة في حل الجزء الأكثر تعقيداً.", text_en: "Allocating dedicated time to help debug their technical blocker directly.", points: 3 },
                    { text_ar: "العمل التشاركي (Pair Working)، تحليل المعوقات معاً، وإعادة توزيع المهام عند الحاجة.", text_en: "Conducting collaborative sessions, troubleshooting together, and rebalancing tasks.", points: 5, hr_exp_ar: "العمل التشاركي وحل المعوقات معاً يعززان روح الفريق ويضمنان التسليم في الموعد.", hr_exp_en: "Collaborative troubleshooting builds strong teamwork and protects release goals." }
                ]
            },
            {
                id: "u_q7",
                difficulty: 2,
                stars: "★★☆☆",
                dimension: "mindset",
                q_ar: `كيف تشرح القرارات الفنية المعقدة في تخصصك كـ ${titleAr} للمسؤولين غير التقنيين؟`,
                q_en: `How do you explain complex ${titleEn} decisions to non-technical stakeholders?`,
                answers: [
                    { text_ar: "تقديم ملخص تنفيذي يركز على النتائج دون الخوض في التفاصيل الفنية.", text_en: "Providing a brief summary of final results without technical jargon.", points: 1 },
                    { text_ar: "إرفاق دليل مصطلحات توضيحي مع العرض الفني لتسهيل المتابعة.", text_en: "Delivering technical decks alongside a reference glossary for key terms.", points: 2 },
                    { text_ar: "استخدام المخططات التوضيحية وشرح أثر الخيارات على الجدول الزمني والميزانية.", text_en: "Using flowcharts and mapping options to project timeline and cost.", points: 3 },
                    { text_ar: "تبسيط المفاهيم بأمثلة من واقع العمل، والتركيز على العائد على الاستثمار (ROI) ومصفوفة المخاطر.", text_en: "Translating technical metrics to business terms, focusing on ROI and risk matrices.", points: 5, hr_exp_ar: "ربط القرار الفني بالعائد التجاري (ROI) والمخاطر يكسب ثقة الإدارة وييسر اتخاذ القرار.", hr_exp_en: "Connecting technical options to business ROI builds executive confidence and alignment." }
                ]
            },
            {
                id: "u_q8",
                difficulty: 3,
                stars: "★★★☆",
                dimension: "mindset",
                q_ar: `إذا اكتشفت أن كوداً أو حلاً قمت بنشره تسبب في مشكلة غير مقصودة كـ ${titleAr}، كيف تتعامل مع الموقف؟`,
                q_en: `Upon discovering a solution you shipped introduced an issue as a ${titleEn}, how do you respond?`,
                answers: [
                    { text_ar: "إصلاح المشكلة بنشر تحديث سريع وتوثيق السبب في سجل الصيانة.", text_en: "Deploying a quick fix and documenting the issue in maintenance logs.", points: 1 },
                    { text_ar: "إبلاغ الفريق بالمشكلة وخطوات المعالجة والتنسيق لنشر الإصلاح.", text_en: "Alerting the team of the issue and coordinating patch deployment.", points: 2 },
                    { text_ar: "تحمل المسؤولية المهنية، تقديم تقرير للأثر، والبحث عن سبل منع تكرارها.", text_en: "Taking responsibility, presenting an impact report, and setting prevention steps.", points: 3 },
                    { text_ar: "تحمل المسؤولية كاملة، تطبيق خطة الاحتواء، وإجراء تحليل محايد لما بعد الحدث (Blameless Post-Mortem).", text_en: "Taking full ownership, executing containment, and leading a Blameless Post-Mortem review.", points: 5, hr_exp_ar: "التحليل المحايد (Post-Mortem) يطور آليات الفحص ويحمي النظام من تكرار الأخطاء.", hr_exp_en: "Leading a Blameless Post-Mortem turns incident lessons into long-term system resilience." }
                ]
            },
            {
                id: "u_q9",
                difficulty: 3,
                stars: "★★★☆",
                dimension: "logic",
                q_ar: `كيف توازن كـ ${titleAr} بين الابتكار واعتماد الحلول الجديدة وبين الاستقرار التشغيلي للنظام؟`,
                q_en: `How do you balance innovation and adoption of new tech with system operational stability as a ${titleEn}?`,
                answers: [
                    { text_ar: "تطبيق التقنيات الحديثة مباشرة في المشاريع الجديدة لمواكبة التطور.", text_en: "Adopting new tech stacks directly in fresh builds to stay modern.", points: 1 },
                    { text_ar: "الانتظار لحين مرور عدة سنوات على التقنية قبل التفكير في تجريبها.", text_en: "Waiting until tools achieve multi-year maturity before evaluating.", points: 2 },
                    { text_ar: "اختبار التقنيات الجديدة في بيئة فرعية وعرض نتائج التقييم على الفريق.", text_en: "Testing new technologies in staging labs and presenting evaluations.", points: 3 },
                    { text_ar: "إجراء إثبات مفهوم (PoC) محدد النطاق، تقييم مستوى الدعم والامتثال، وحساب تكلفة التحول.", text_en: "Executing scoped Proof-of-Concept (PoC) pilots, evaluating ecosystem maturity, and analyzing ROI.", points: 5, hr_exp_ar: "إثبات المفهوم PoC يضمن تبني التقنيات الواعدة بدراسة وافية دون المخاطرة بالخدمات الحية.", hr_exp_en: "Scoped PoC pilots and ROI analyses mitigate transition risks while fostering innovation." }
                ]
            },
            {
                id: "u_q10",
                difficulty: 3,
                stars: "★★★☆",
                dimension: "mindset",
                q_ar: `عند التخطيط لتطوير مهاراتك الفنية كـ ${titleAr} على المدى الطويل، ما هي استراتيجيتك؟`,
                q_en: `What is your long-term strategy for professional skill development as a ${titleEn}?`,
                answers: [
                    { text_ar: "متابعة المقالات والمستجدات اليومية في مجال التخصص عبر وسائل التواصل.", text_en: "Browsing daily domain articles and news on social media.", points: 1 },
                    { text_ar: "الحصول على شهادات معتمدة كلما أتيحت الفرصة لتعزيز السيرة الذاتية.", text_en: "Obtaining industry certifications whenever feasible to strengthen candidate CVs.", points: 2 },
                    { text_ar: "المشاركة في مشاريع جانبية وتطبيق تقنيات جديدة بشكل عملي.", text_en: "Participating in side projects and practicing modern tools hands-on.", points: 3 },
                    { text_ar: "صياغة خطة تعلم مخصصة، المساهمة في المشاريع مفتوحة المصدر، ومشاركة المعرفة بالتدريب والتوثيق.", text_en: "Formulating a personal learning matrix, contributing to open source, and mentoring peers.", points: 5, hr_exp_ar: "خطة التعلم المستمر ونقل المعرفه للزملاء يبرزان الاستثمار الذاتي القيادي والقدرة المستمرة على النمو.", hr_exp_en: "A structured learning matrix paired with peer mentorship demonstrates continuous growth and leadership." }
                ]
            },
            {
                id: "u_q11",
                difficulty: 4,
                stars: "★★★★",
                dimension: "mindset",
                q_ar: `عند التعرض لضغوط الإسراع بنشر مشروع يحتوي عيوباً قبل المراجعة كموقف قيادي كـ ${titleAr}، كيف تتصرف؟`,
                q_en: `Facing pressure to bypass quality audits and ship a vulnerable ${titleEn} deliverable, what is your action?`,
                answers: [
                    { text_ar: "الموافقة على النشر مع التوثيق الرسمي لتحفظك الفني وتحميل الإدارة المسؤولية.", text_en: "Approving release while documenting technical objections to transfer liability.", points: 1 },
                    { text_ar: "تأجيل التعيين وتوفير حلول مؤقتة لتقليل خطورة العيوب لحين معالجتها.", text_en: "Applying temporary mitigations to lower risk prior to sign-off.", points: 2 },
                    { text_ar: "الرفض الفني وتوضيح المخاطر المالية والقانونية المحتملة لقيادة الشركة.", text_en: "Refusing sign-off and demonstrating potential financial/legal risks to leadership.", points: 3 },
                    { text_ar: "الرفض التام، توثيق المخاطر في تقرير رسمي، وإبلاغ جهات الامتثال والجودة (Compliance & Quality).", text_en: "Refusing release, documenting risks officially, and escalating to Compliance & Quality.", points: 5, hr_exp_ar: "النزاهة الأخلاقية والتوثيق الرسمي يحميان المؤسسة والمستخدمين من الكوارث الأمنيّة والتشغيلية.", hr_exp_en: "Uncompromising ethical integrity and compliance escalation protect corporate stability." }
                ]
            },
            {
                id: "u_q12",
                difficulty: 4,
                stars: "★★★★",
                dimension: "mindset",
                q_ar: `عند قيادتك كـ ${titleAr} لفريق يضم موظفين أكثر منك خبرة، كيف تبني سلطتك القيادية بفعالية؟`,
                q_en: `Appointed to lead a ${titleEn} team containing senior members with longer tenure, how do you establish authority?`,
                answers: [
                    { text_ar: "التركيز على دعم الفريق وتوفير الموارد واجتناب التدخل في قراراتهم.", text_en: "Focusing on operational support and removing blockers while granting autonomy.", points: 1 },
                    { text_ar: "تقدير خبراتهم والاستعانة بآرائهم في اتخاذ القرارات الرئيسية.", text_en: "Actively seeking their expert consultation when formulating major decisions.", points: 2 },
                    { text_ar: "عقد جلسات فردية لفهم تطلعاتهم وإعطائهم مساحة لقيادة المبادرات التطويرية.", text_en: "Hosting 1-on-1 sessions to understand career goals and delegating ownership.", points: 3 },
                    { text_ar: "تطبيق نموذج القيادة بالخدمة (Servant Leadership)، الاستماع الفعال، وتمكينهم كشركاء في القرار.", text_en: "Embodying Servant Leadership, active listening, and empowering them as co-architects.", points: 5, hr_exp_ar: "القيادة بالخدمة Servant Leadership تمكن الكوادر وأصحاب الخبرات وتحولهم لشركاء نجاح.", hr_exp_en: "Servant leadership and empathetic collaboration transform potential friction into trust." }
                ]
            }
        ];
    }

    // ----------------------------------------------------------------------
    // 2. FRONTEND & UI/UX BLOCK
    // 15 Base Questions (Difficulty 1-3) + 3 Bonus Questions (Difficulty 4) = 18 Total
    // ----------------------------------------------------------------------
    function getFrontendBlock(titleAr, titleEn) {
        return [
            {
                id: "fe_q1", difficulty: 1, stars: "★☆☆☆", dimension: "tech",
                q_ar: `كيف تضمن كـ ${titleAr} تقديم تجربة مستخدم سهلة وسلسة في تطبيقات الواجهات؟`,
                q_en: `How do you ensure a clean and intuitive user experience as a ${titleEn}?`,
                answers: [
                    { text_ar: "جمع ملاحظات المستخدمين بعد الإطلاق وتعديل الواجهات في التحديثات القادمة.", text_en: "Collecting user feedback post-launch and improving UI in future updates.", points: 1 },
                    { text_ar: "الالتزام التام بالتصاميم الواردة من فريق الـ UI/UX دون تعديل.", text_en: "Adhering strictly to provided mockups without additional testing.", points: 2 },
                    { text_ar: "فحص الأداء وتوافق التصميم على مختلف الأجهزة والشاشات المختلفة.", text_en: "Testing application layout across various screen breakpoints and web browsers.", points: 3 },
                    { text_ar: "تطبيق معايير سهولة الوصول (WCAG)، استخدام نظم التصميم الموحدة، وااختبار تجربة المستخدم مبكراً.", text_en: "Applying accessibility standards (WCAG), leveraging design systems, and testing usability early.", points: 5, hr_exp_ar: "تطبيق معايير WCAG ونظم التصميم الموحدة يضمن وصول المنتج لجميع المستخدمين بمرونة.", hr_exp_en: "Applying WCAG standards and design system rules delivers an inclusive user experience." }
                ]
            },
            {
                id: "fe_q2", difficulty: 1, stars: "★☆☆☆", dimension: "tech",
                q_ar: `عند بناء واجهات متجاوبة كـ ${titleAr}، ما هي استراتيجيتك الأساسية للتحكم في الأداء والسرعة؟`,
                q_en: `When building responsive UIs as a ${titleEn}, how do you optimize frontend render speed?`,
                answers: [
                    { text_ar: "دمج الصور والمكتبات في ملف واحد وتقليل استخدام الخطوط الخارجية.", text_en: "Bundling images and using basic CSS reset rules.", points: 1 },
                    { text_ar: "استخدام تقنيات التحميل المتأخر (Lazy Loading) وتأجيل تحميل الصور والملفات غير الضرورية.", text_en: "Implementing lazy loading for media assets below the fold.", points: 2 },
                    { text_ar: "ضغط الصور واستخدام صيغ الحديثة (WebP/AVIF) وتقليل حجم الملفات (Minification).", text_en: "Optimizing WebP assets and minifying CSS/JS bundles.", points: 3 },
                    { text_ar: "قياس مؤشرات الأداء الحيوية (Core Web Vitals)، تفعيل التجزئة (Code Splitting)، وضبط التحميل المتأخر.", text_en: "Monitoring Core Web Vitals (LCP, CLS, INP), implementing Code Splitting, and lazy loading assets.", points: 5, hr_exp_ar: "متابعة مؤشرات Core Web Vitals وتجزئة الأكواد يضمنان سرعة استجابة الواجهة وسلاسة التصفح.", hr_exp_en: "Core Web Vitals profiling and code splitting guarantee high frontend performance metrics." }
                ]
            },
            {
                id: "fe_q3", difficulty: 1, stars: "★☆☆☆", dimension: "tech",
                q_ar: `كيف تدير حالة البيانات داخل واجهة التطبيق (State Management) كـ ${titleAr}؟`,
                q_en: `How do you architect application state management as a ${titleEn}?`,
                answers: [
                    { text_ar: "تخزين البيانات في عناصر المتصفح المحلية (LocalStorage) لتسهيل الوصول إليها.", text_en: "Storing state directly in LocalStorage for fast lookup.", points: 1 },
                    { text_ar: "تمرير البيانات بين المكونات من خلال الروابط والمتغيرات المحلية (Props).", text_en: "Passing state through component props across levels.", points: 2 },
                    { text_ar: "فصل الحالة العامة عن المحلية واستخدام أدوات إدارة الحالة المناسبة.", text_en: "Separating local UI state from global data stores.", points: 3 },
                    { text_ar: "اعتماد نمط البيانات أحادي الاتجاه (Unidirectional Flow)، إدارة الحالة بحسب النطاق، والحفاظ على عدم قابلية التعديل المباشر (Immutability).", text_en: "Enforcing Unidirectional Data Flow, immutable state updates, and clear scope separation.", points: 5, hr_exp_ar: "إدارة الحالة الأحادية تحمي الواجهة من الأخطاء غير المتوقعة وسهولة تتبع تغير البيانات.", hr_exp_en: "Unidirectional data flow and immutability guarantee predictable UI behavior." }
                ]
            },
            {
                id: "fe_q4", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `كيف تحمي تطبيقات الواجهات الأمامية كـ ${titleAr} من ثغرات الحقن (XSS & CSRF)؟`,
                q_en: `How do you secure frontend web applications against XSS and CSRF risks as a ${titleEn}?`,
                answers: [
                    { text_ar: "تشفير المدخلات في استمارات التسجيل وتحديد طول النصوص المسموحة.", text_en: "Validating input form lengths and sanitizing search bars.", points: 1 },
                    { text_ar: "تنقية مدخلات المستخدم واستخدام مكتبات الأمان للتحقق من البيانات.", text_en: "Sanitizing user input strings before rendering to the DOM.", points: 2 },
                    { text_ar: "استخدام خيارات ملفات الكوكيز الآمنة (SameSite & HttpOnly) وتجنب استخدام innerHTML.", text_en: "Using SameSite/HttpOnly cookies and avoiding dangerous innerHTML calls.", points: 3 },
                    { text_ar: "تطبيق استراتيجية أمان المحتوى (CSP Headers)، تنقية الأكواد آلياً، واستخدام رموز CSRF Tokens المصحوبة بكوكيز أمنة.", text_en: "Enforcing Content Security Policy (CSP), automated input sanitization, and CSRF token verification.", points: 5, hr_exp_ar: "تطبيق CSP وتشفير الكوكيز يحميان المستخدم من سرقة البيانات والجلسات عبر الواجهة.", hr_exp_en: "Strict Content Security Policies and HttpOnly CSRF protections guard user sessions." }
                ]
            },
            {
                id: "fe_q5", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `عند بناء مكتبة مكونات واجهة مستخدم (Design System Component Library) كـ ${titleAr}، ما هو نهجك؟`,
                q_en: `How do you architect scalable reusable UI design systems as a ${titleEn}?`,
                answers: [
                    { text_ar: "كتابة الأنماط والمكونات لكل صفحة بشكل مستقل لتسهيل التعديل.", text_en: "Writing independent page styles to allow custom modifications.", points: 1 },
                    { text_ar: "تجميع المكونات الشائعة في مجلد موحد وإعادة استخدامها عند الحاجة.", text_en: "Grouping common UI elements into a shared component folder.", points: 2 },
                    { text_ar: "بناء مكونات مرنة تعتمد على المتغيرات الموحدة للألوان والخطوط.", text_en: "Building configurable components leveraging global design tokens.", points: 3 },
                    { text_ar: "تطبيق منهجية التصميم الذري (Atomic Design)، توحيد متغيرات التصميم (Design Tokens)، وإجراء اختبارات تفاعلية مستمورة.", text_en: "Architecting Atomic Design systems, design tokens, and interactive Storybook testing.", points: 5, hr_exp_ar: "التصميم الذري ونظم Tokens يضمنان التناسق البصري وسرعة تطوير الواجهات عبر الفرق.", hr_exp_en: "Atomic Design methodology combined with tokens ensures consistent visual standards." }
                ]
            },
            {
                id: "fe_q6", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `كيف تضمن الدعم الكامل لعدة لغات (i18n & RTL/LTR Layouts) كـ ${titleAr} دون حدوث كسر في تنسيق الواجهة؟`,
                q_en: `How do you implement robust internationalization (i18n) and RTL/LTR layout stability as a ${titleEn}?`,
                answers: [
                    { text_ar: "إنشاء صفحات منفصلة لكل لغة لتفادي اختلاط التنسيقات.", text_en: "Creating separate HTML pages per language to isolate CSS styles.", points: 1 },
                    { text_ar: "استخدام ملفات ترجمة نصية وتبديل الاتجاه عبر إضافة كلاس CSS منفصل.", text_en: "Using translation files and toggling global container body classes.", points: 2 },
                    { text_ar: "اعتماد متغيرات الاتجاه وتطبيق خاصية CSS Logical Properties في جميع العناصر.", text_en: "Leveraging CSS Logical Properties (margin-inline, padding-block) across stylesheets.", points: 3 },
                    { text_ar: "استخدام CSS Logical Properties، تثبيت شبكة الكروت الهيكلية (Grid Freeze)، وفصل نصوص الترجمة آلياً مع التحقق من تكامل الأبعاد.", text_en: "Enforcing CSS Logical Properties, locking layout grid structures, and dynamically injecting reactive translations.", points: 5, hr_exp_ar: "خاصية CSS Logical Properties وتثبيت الشبكة الهيكلية يضمنان عدم انكسار التنسيق بتبديل اللغات.", hr_exp_en: "CSS Logical Properties combined with strict grid locks guarantee seamless multi-language layout stability." }
                ]
            },
            {
                id: "fe_q7", difficulty: 2, stars: "★★☆☆", dimension: "logic",
                q_ar: `عند اكتشاف خطأ في العرض يحدث فقط في متصفحات أو شاشات معينة كـ ${titleAr}، كيف تبدأ المعالجة؟`,
                q_en: `Troubleshooting a cross-browser rendering bug occurring on specific viewports as a ${titleEn}, how do you resolve it?`,
                answers: [
                    { text_ar: "إضافة قواعد CSS مخصصة للمتصفح المتأثر (Browser Hacks).", text_en: "Adding quick vendor-prefix CSS hacks targeting the specific browser.", points: 1 },
                    { text_ar: "تعديل قيم الأبعاد الثابتة (Px) للتأكد من ملاءمة العنصر للشاشة.", text_en: "Adjusting hardcoded pixel values until elements fit visually.", points: 2 },
                    { text_ar: "استخدام أدوات فحص العناصر (DevTools) واختبار بدائل التنسيق المرنة.", text_en: "Inspecting elements using DevTools and applying flexible CSS rules.", points: 3 },
                    { text_ar: "عزل المشكلة في بيئة اختبار مصغرة (Reproduction Sandbox)، استخدام Autoprefixer، والاعتماد على ميزات التوافق المعيارية.", text_en: "Creating a isolated minimal reproduction sandbox, leveraging Autoprefixer, and adhering to W3C standards.", points: 5, hr_exp_ar: "عزل المشكلة في بيئة اختبار وتطبيق حلول W3C المعيارية يمنعان تكرار العيوب البصرية.", hr_exp_en: "Isolating cross-browser bugs in minimal test sandboxes guarantees resilient standards-compliant code." }
                ]
            },
            {
                id: "fe_q8", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `إذا حدث إعادة رسم متكررة وغير ضرورية في شجرة العناصر (DOM Re-rendering) كـ ${titleAr}، كيف تعالجها؟`,
                q_en: `Facing excessive unnecessary DOM re-renders in a complex app as a ${titleEn}, how do you optimize it?`,
                answers: [
                    { text_ar: "تقليل عدد العناصر المعروضة في الصفحة واستخدام الترقيم (Pagination).", text_en: "Reducing render items and enabling pagination.", points: 1 },
                    { text_ar: "استخدام تقنيات الحفظ المؤقت لدوال ومكونات الواجهة (Memoization).", text_en: "Applying component memoization wrappers where possible.", points: 2 },
                    { text_ar: "تحليل شجرة التفاعل وتحديث المكونات المتأثرة فقط بالبيانات.", text_en: "Profiling component trees to isolate updated state scopes.", points: 3 },
                    { text_ar: "استخدام أدوات الفحص الفني (Profiler)، تطبيق الحفظ المؤقت (Memoization)، وفصل الـ State الحرج لمنع إعادة رسم الشجرة بالكامل.", text_en: "Profiling Virtual DOM updates, strategic memoization, and atomizing state to eliminate redundant renders.", points: 5, hr_exp_ar: "تحليل شجرة الـ DOM وتجزئة الـ State يحافظان على معدل إطارات سلس (60fps) واستجابة فورية.", hr_exp_en: "Virtual DOM profiling and state isolation preserve high frame-rate responsiveness." }
                ]
            },
            {
                id: "fe_q9", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند تحسين توافق الواجهات مع محركات البحث (SEO & Server-Side Rendering) كـ ${titleAr}، كيف تبني المعمارية؟`,
                q_en: `Architecting web applications for SSR and Search Engine Optimization as a ${titleEn}, what is your approach?`,
                answers: [
                    { text_ar: "إضافة علامات Meta وصور التوضيح في رأس صفحة الـ HTML الأساسية.", text_en: "Adding standard meta tags and Open Graph titles.", points: 1 },
                    { text_ar: "استخدام توليد الصفحات الثابتة (Static Generation) للمحتوى الإخباري والمقالات.", text_en: "Leveraging Static Site Generation (SSG) for public marketing pages.", points: 2 },
                    { text_ar: "المزج بين التقديم من الخادم (SSR) والتطبيق أحادي الصفحة (SPA) بحسب طبيعة المحتوى.", text_en: "Combining Server-Side Rendering (SSR) for dynamic SEO and CSR for interactive dashboards.", points: 3 },
                    { text_ar: "اعتماد المعمارية الهجينة (Hybrid SSR/SSG/ISR)، صياغة بيانات هيكلية (JSON-LD)، وترطيب الواجهة التدريجي (Hydration).", text_en: "Implementing Hybrid SSR/SSG/ISR, JSON-LD Structured Data, and progressive hydration.", points: 5, hr_exp_ar: "المعمارية الهجينة والبيانات الهيكلية تضمنان أعلى تصدر في محركات البحث مع السرعة العالية.", hr_exp_en: "Hybrid SSR/SSG and JSON-LD metadata optimize both search indexability and UX." }
                ]
            },
            {
                id: "fe_q10", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `كيف تدير تحميل الأصول والحزم البرمجية (Asset & Bundle Optimization) كـ ${titleAr} لتقليل وقت التفاعل الأول (TBT)؟`,
                q_en: `How do you optimize bundle splitting and asset loading as a ${titleEn} to minimize Total Blocking Time (TBT)?`,
                answers: [
                    { text_ar: "تجميع الأكواد في حزمة واحدة كبيرة لتسهيل تحميل الملفات.", text_en: "Bundling all scripts into a single file to simplify HTTP requests.", points: 1 },
                    { text_ar: "تأجيل تحميل كافة ملفات JavaScript الخارجية لما بعد تحميل الـ HTML.", text_en: "Deferring all external JavaScript files until after main HTML load.", points: 2 },
                    { text_ar: "تقسيم الأكواد بحسب الصفحات (Route-based Splitting) وتنظيف المكتبات غير المستعملة.", text_en: "Implementing route-based code splitting and tree-shaking unused libraries.", points: 3 },
                    { text_ar: "تطبيق التجزئة الديناميكية (Dynamic Import Tree-Shaking)، ضغط Brotli، والاستفادة من HTTP/3 Resource Hints.", text_en: "Enforcing dynamic code splitting, Tree-Shaking, Brotli compression, and HTTP/3 Resource Hints.", points: 5, hr_exp_ar: "التجزئة الديناميكية وضغط Brotli يقللان وقت الاستجابة والتفاعل الأولي بدرجة ملحوظة.", hr_exp_en: "Dynamic Imports and Tree-Shaking minimize bundle payloads and dramatically reduce TBT." }
                ]
            },
            {
                id: "fe_q11", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند التعامل مع البيانات الضخمة والقوائم الطويلة في الواجهة كـ ${titleAr}، كيف تمنع بطء التصفح والتجميد؟`,
                q_en: `Handling large data sets and infinite lists in UI as a ${titleEn}, how do you ensure 60fps scrolling performance?`,
                answers: [
                    { text_ar: "تقليل حجم الخطوط والصور لتقليل استهلاك الذاكرة في الصفحة.", text_en: "Reducing font and image sizes to conserve browser memory.", points: 1 },
                    { text_ar: "تقسيم القوائم عبر أزرار الانتقال بين الصفحات (Standard Pagination).", text_en: "Splitting elements using standard page-by-page numbers.", points: 2 },
                    { text_ar: "استخدام التمرير اللانهائي (Infinite Scroll) مع تحميل الأجزاء تدريجياً.", text_en: "Implementing Infinite Scroll with progressive API data fetches.", points: 3 },
                    { text_ar: "اعتماد تقنية القوائم الافتراضية (DOM Virtualization / Windowing) لرسم العناصر المرئية فقط.", text_en: "Implementing DOM Virtualization/Windowing to render only visible viewport items.", points: 5, hr_exp_ar: "تقنية Virtualization تضمن تصفحاً خفيفاً وسلساً مهما بلغ عدد عناصر القائمة.", hr_exp_en: "DOM Virtualization restricts active nodes to the viewport, delivering smooth 60fps scrolling." }
                ]
            },
            {
                id: "fe_q12", difficulty: 3, stars: "★★★☆", dimension: "mindset",
                q_ar: `كيف تضمن التوافق الكامل مع معايير إتاحة الاستخدام لذوي الهمم (Accessibility - WCAG 2.1 AA) كـ ${titleAr}؟`,
                q_en: `How do you systematically validate accessibility standards (WCAG 2.1 AA) as a ${titleEn}?`,
                answers: [
                    { text_ar: "إضافة نصوص alt على الصور والتأكد من وضوح ألوان الخطوط.", text_en: "Adding image alt tags and maintaining high contrast body text.", points: 1 },
                    { text_ar: "استخدام العناصر الدلالية (Semantic HTML) واختبار التنقل بلفتات لوحة المفاتيح.", text_en: "Using HTML5 semantic markup and manual keyboard tab navigation.", points: 2 },
                    { text_ar: "دمج أدوات الفحص التلقائي مثل Axe-core والتأكد من ملاءمة التباين البصري.", text_en: "Integrating automated audit tools like Axe-core and checking contrast ratios.", points: 3 },
                    { text_ar: "اعتماد HTML5 الدلالية، ARIA Landmark Attributes، اختبار قارئات الشاشة (NVDA/VoiceOver)، والفحص المدمج.", text_en: "Enforcing Semantic HTML5, explicit ARIA attributes, screen reader audit flows, and automated Axe testing.", points: 5, hr_exp_ar: "اختبار قارئات الشاشة والـ ARIA يضمنان حق الجميع في استخدام التطبيق بكرامة وسهولة.", hr_exp_en: "Full WCAG 2.1 AA compliance with screen-reader auditing opens products to all user demographics." }
                ]
            },
            {
                id: "fe_q13", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند بناء تطبيقات ويب تقدم تجربة مشابهة للتطبيقات الأصلية (PWA & Offline Capability) كـ ${titleAr}، كيف تبني الطبقة التخزينية؟`,
                q_en: `Designing Progressive Web Apps (PWA) with offline capabilities as a ${titleEn}, how do you structure offline storage?`,
                answers: [
                    { text_ar: "تخزين بيانات المستخدم في LocalStorage لاسترجاعها عند انقطاع الشبكة.", text_en: "Persisting user application data into LocalStorage for offline recovery.", points: 1 },
                    { text_ar: "تفعيل ملف Service Worker بسيط لحفظ الصور والملفات الثابتة.", text_en: "Registering a basic Service Worker to cache static assets.", points: 2 },
                    { text_ar: "تطبيق استراتيجية التخزين المؤقت الشبكي (Cache-First) للملفات الثابتة و Network-First للبيانات.", text_en: "Applying Cache-First strategies for assets and Network-First for dynamic endpoints.", points: 3 },
                    { text_ar: "بناء Service Worker مخصص، الاستعانة بـ IndexedDB للتخزين المحلي، واستراتيجيات المزامنة التلقائية (Background Sync).", text_en: "Architecting custom Service Workers, leveraging IndexedDB, and implementing background synchronization.", points: 5, hr_exp_ar: "استخدام IndexedDB والمزامنة الخلفية يوفران تجربة تصفح بدون انقطاع حتى مع عدم وجود إنترنت.", hr_exp_en: "Service Workers paired with IndexedDB and Background Sync provide app-like offline capability." }
                ]
            },
            {
                id: "fe_q14", difficulty: 3, stars: "★★★☆", dimension: "logic",
                q_ar: `كيف تتعامل كـ ${titleAr} مع بطء استجابة واجهات واجهة البرمجة (API Delays) دون إشعار المستخدم بالانتظار الممل؟`,
                q_en: `How do you handle slow backend API response latency without harming user engagement as a ${titleEn}?`,
                answers: [
                    { text_ar: "عرض مؤشر تحميل دائر (Spinner) في منتصف الشاشة لحين اكتمال البيانات.", text_en: "Displaying a centered full-screen loading spinner during API calls.", points: 1 },
                    { text_ar: "إظهار رسالة تنبيه للمستخدم تفيد بأن البيانات قيد التحميل.", text_en: "Prompting a toast notification stating that data is fetching.", points: 2 },
                    { text_ar: "استخدام الهياكل العظمية التوضيحية (Skeleton Screens) لإعطاء انطباع بالسرعة.", text_en: "Implementing Skeleton Loader screens to maintain perceived layout continuity.", points: 3 },
                    { text_ar: "تطبيق التحديث المتفائل (Optimistic UI Updates)، استخدام Skeleton Screen، والاحتفاظ بالذاكرة المؤقتة (Stale-While-Revalidate).", text_en: "Applying Optimistic UI Updates, Skeleton Screens, and Stale-While-Revalidate (SWR) data fetching.", points: 5, hr_exp_ar: "التحديث المتفائل والـ SWR يمنحان المستخدم شعوراً فورياً بالاستجابة دون انتظار.", hr_exp_en: "Optimistic UI patterns and SWR fetching eliminate perceived waiting time for users." }
                ]
            },
            {
                id: "fe_q15", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند قياس أمان حزم الاعتماديات والمكتبات المستوردة (NPM Dependencies) كـ ${titleAr}، ما هي استراتيجيتك؟`,
                q_en: `How do you audit and manage third-party NPM security risks as a ${titleEn}?`,
                answers: [
                    { text_ar: "تحديث المكتبات بانتظام كلما ظهر إصدار جديد على المنصة.", text_en: "Updating packages regularly whenever new semantic versions deploy.", points: 1 },
                    { text_ar: "تشغيل أمر npm audit وفحص التنبيهات عالية الخطورة يدوياً.", text_en: "Running npm audit commands and manually patching critical alerts.", points: 2 },
                    { text_ar: "تثبيت أصدارات المكتبات المطلوبة ومنع التحديث التلقائي لتجنب المشاكل.", text_en: "Locking dependency versions via lockfiles to avoid breaking updates.", points: 3 },
                    { text_ar: "أتمتة الفحص في أنبوب الـ CI/CD (Snyk/Dependabot)، الالتزام بملفات lockfile، وتقليل الاعتماد على المكتبات المجهولة.", text_en: "Automating CI dependency scanning (Snyk/Dependabot), enforcing lockfile integrity, and vetting package maintainership.", points: 5, hr_exp_ar: "أتمتة فحص المكتبات الخارجية في CI/CD تمنع دخول الثغرات وسرقة التبعيات.", hr_exp_en: "Automating dependency vulnerability scanning prevents supply-chain attacks." }
                ]
            },
            {
                id: "fe_q16", difficulty: 4, stars: "★★★★", dimension: "tech",
                q_ar: `عند قيادة تطوير تطبيق واجهات دقيق للغاية (Micro-Frontends) كـ ${titleAr}، كيف تضمن استقلالية الفرق والتوافق البصري؟`,
                q_en: `Leading a Micro-Frontends architecture transition as a ${titleEn}, how do you govern autonomy and visual consistency?`,
                answers: [
                    { text_ar: "تحديد إطار عمل موحد لجميع الفرق وإلزام الجميع بنفس النسخ المكتبية.", text_en: "Mandating a unified framework version across all domain teams.", points: 1 },
                    { text_ar: "فصل التطبيقات إلى مشاريع مستقلة وربطها عبر شاشة رئيسية موحدة.", text_en: "Separating applications and integrating via container shell routing.", points: 2 },
                    { text_ar: "استخدام تقنية Module Federation لمشاركة المكونات والمكتبات الأساسية وقت التشغيل.", text_en: "Utilizing Webpack Module Federation for runtime dependency sharing.", points: 3 },
                    { text_ar: "تطبيق معمارية (Module Federation)، توحيد نظام التصميم الخارجي، وتأمين نطاقات CSS عبر Shadow DOM / Scoped CSS.", text_en: "Architecting Webpack Module Federation, shared design tokens, and Web Components / Shadow DOM encapsulation.", points: 5, hr_exp_ar: "تقنية Module Federation وتأمين النطاقات تتيح للفرق الاستقلالية الكاملة دون تضارب الواجهات.", hr_exp_en: "Module Federation and Shadow DOM isolation empower autonomous deployment without visual regressions." }
                ]
            },
            {
                id: "fe_q17", difficulty: 4, stars: "★★★★", dimension: "tech",
                q_ar: `عند تصحيح أخطاء الأداء المعقدة الناتجة عن تسريب الذاكرة (Browser Memory Leaks) كـ ${titleAr}، كيف تشخصها وتزيلها؟`,
                q_en: `Diagnosing and rectifying complex browser JavaScript memory leaks as a ${titleEn}, what profiling workflow do you execute?`,
                answers: [
                    { text_ar: "إعادة تشغيل المتصفح وتصفية الكاش لتحديد الصفحة المؤدية للبطء.", text_en: "Refreshing browser tabs and clearing local cache stores.", points: 1 },
                    { text_ar: "مراجعة الكود وإزالة المستمعين الأحداث (Event Listeners) غير الضرورية.", text_en: "Inspecting source files and unbinding unused event listeners manually.", points: 2 },
                    { text_ar: "تسجيل لقطات الذاكرة (Heap Snapshots) في Chrome DevTools ومقارنتها.", text_en: "Taking Chrome DevTools Heap Snapshots before and after user interactions.", points: 3 },
                    { text_ar: "أخذ لقطات الذاكرة المتعاقبة (Allocation Timelines)، تتبع العناصر المتأرجحة (Detached DOM Nodes)، وتنظيف المؤشرات المرجعية الدائرية.", text_en: "Analyzing Memory Allocation Timelines, isolating Detached DOM Nodes, and eliminating circular closures.", points: 5, hr_exp_ar: "تتبع العناصر المتأرجحة وتفريغ الذاكرة المستمرة يحميان التطبيقات الممتدة من التوقف المفاجئ.", hr_exp_en: "Heap Timeline analysis and resolving Detached DOM Nodes eliminate browser memory leaks." }
                ]
            },
            {
                id: "fe_q18", difficulty: 4, stars: "★★★★", dimension: "tech",
                q_ar: `كيف تضمن سلامة أداء الرسومات المعقدة والتفاعلات ثلاثية الأبعاد (WebGL / Canvas) كـ ${titleAr} على الأجهزة الضعيفة؟`,
                q_en: `Architecting high-performance WebGL/Canvas graphics rendering for low-spec devices as a ${titleEn}, what optimizations do you mandate?`,
                answers: [
                    { text_ar: "تقليل دقة العرض وتصغير حجم ملفات المجسمات ثلاثية الأبعاد.", text_en: "Lowering render resolution and compressing 3D mesh files.", points: 1 },
                    { text_ar: "تعطيل المؤثرات البصرية المتقدمة عند اكتشاف بطء في المتصفح.", text_en: "Disabling dynamic visual effects upon detecting browser lag.", points: 2 },
                    { text_ar: "استخدام تقنيات ضغط الأنسجة وتقليل عدد المضلعات الرسمية (Poly-count).", text_en: "Applying texture compression and optimizing mesh polygon counts.", points: 3 },
                    { text_ar: "اعتماد OffscreenCanvas، خيوط المعالجة الفرعية (Web Workers)، ضغط KTX2/BASIS، وتقنية LOD للرسومات.", text_en: "Leveraging OffscreenCanvas, Web Workers multithreading, KTX2/BASIS textures, and Level of Detail (LOD) algorithms.", points: 5, hr_exp_ar: "استخدام OffscreenCanvas و Web Workers يفصل العمليات الثقيلة عن خيط الواجهة الرئيسي ويضمن سلاسة العرض.", hr_exp_en: "OffscreenCanvas rendering and Web Worker multithreading keep complex graphics fluid on low-end hardware." }
                ]
            }
        ];
    }

    // ----------------------------------------------------------------------
    // 3. BACKEND & INFRASTRUCTURE BLOCK
    // 15 Base Questions (Difficulty 1-3) + 3 Bonus Questions (Difficulty 4) = 18 Total
    // ----------------------------------------------------------------------
    function getBackendBlock(titleAr, titleEn) {
        return [
            {
                id: "be_q1", difficulty: 1, stars: "★☆☆☆", dimension: "tech",
                q_ar: `عند البدء في تصميم نظام جديد كـ ${titleAr}، ما هو أسلوبك الأساسي في التخطيط والبناء الفني؟`,
                q_en: `When starting a new system architecture project as a ${titleEn}, what is your primary development strategy?`,
                answers: [
                    { text_ar: "البدء المباشر في التنفيذ السريع وتجربة الحلول عملياً لتفادي تعقيدات التخطيط المبكر.", text_en: "Jumping directly into rapid execution to test solutions hands-on.", points: 1 },
                    { text_ar: "اعتماد المكتبات والقوالب الجاهزة لإنجاز النسخة الأولى في أسرع وقت ممكن.", text_en: "Using ready-made templates and libraries to launch an initial prototype fast.", points: 2 },
                    { text_ar: "تحليل المتطلبات الفنية، اختيار التقنيات المستقرة، وتوثيق معمارية النظام.", text_en: "Analyzing requirements, selecting stable tech stacks, and documenting core architecture.", points: 3 },
                    { text_ar: "بناء مخطط معماري متكامل يحدد هيكلية النظام، خطط التوسع، وإدارة المخاطر التقنية.", text_en: "Designing a comprehensive architecture plan defining system scalability and risk controls.", points: 5, hr_exp_ar: "التخطيط المعماري المتكامل يضمن استقرار الأنظمة وتجنب المشكلات التقنية المستقبلية.", hr_exp_en: "A comprehensive architecture blueprint prevents technical debt and ensures system scalability." }
                ]
            },
            {
                id: "be_q2", difficulty: 1, stars: "★☆☆☆", dimension: "logic",
                q_ar: `إذا لاحظت تراجعاً مفاجئاً في سرعة استجابة الخوادم كـ ${titleAr}، ما هي خطوتك الأولى؟`,
                q_en: `If you detect a sudden slowdown in server responsiveness as a ${titleEn}, what is your first action?`,
                answers: [
                    { text_ar: "زيادة موارد الخادم بشكل مؤقت لاستيعاب ضغط العمل الحالي.", text_en: "Temporarily boosting server hardware resources to absorb traffic pressure.", points: 1 },
                    { text_ar: "الاستعانة بالنسخة السابقة المستقرة واختبار التعديلات في بيئة فرعية.", text_en: "Reverting to the previous stable build and testing changes in staging.", points: 2 },
                    { text_ar: "فحص سجلات الأخطاء والمبيعات الأخيرة لتحديد مصدر البطء بدقة.", text_en: "Checking recent updates and application logs to pinpoint the bottleneck.", points: 3 },
                    { text_ar: "تحليل قراءات التتبع (Telemetry)، فحص مؤشرات الأداء، وتحديد السبب الجذر قبل الاتخاذ القرار.", text_en: "Analyzing distributed telemetry, profiling system metrics, and conducting Root-Cause Analysis.", points: 5, hr_exp_ar: "التحليل الرقمي وقراءات التتبع تكشف السبب الحقيقي للبطء دون خيارات عشوائية.", hr_exp_en: "Telemetry metrics and Root-Cause Analysis accurately identify performance issues." }
                ]
            },
            {
                id: "be_q3", difficulty: 1, stars: "★☆☆☆", dimension: "tech",
                q_ar: `ما مدى أهمية كتابة التوثيق الفني والقرارات المعمارية (ADRs) كـ ${titleAr}؟`,
                q_en: `How important is writing technical documentation and Architectural Decision Records (ADRs) as a ${titleEn}?`,
                answers: [
                    { text_ar: "حفظ الشفرات والنصوص الأساسية للاستعانة بها عند الصيانة المستقبليّة.", text_en: "Saving code snippets for personal reference during future updates.", points: 1 },
                    { text_ar: "توفير معلومات تسليم المشروعات لفرق المراجعة والإدارة عند طلبها.", text_en: "Providing handoff summaries for review teams and management upon request.", points: 2 },
                    { text_ar: "مساعدة أعضاء الفريق الجدد على فهم الكود وسرعة الانضمام للعمل.", text_en: "Helping onboard new team members to understand project components quickly.", points: 3 },
                    { text_ar: "ضمان استدامة النظام، تقليل الديون التقنية، وتوثيق القرارات المعمارية (ADRs).", text_en: "Ensuring long-term maintainability, cutting tech debt, and keeping Architectural Decision Records (ADRs).", points: 5, hr_exp_ar: "توثيق القرارات المعمارية يحمي معرفة الشركة ويضمن سهولة التطوير والصيانة مستقبلاً.", hr_exp_en: "Architecture Decision Records preserve core project insights and ease future maintenance." }
                ]
            },
            {
                id: "be_q4", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `عند تراكم الديون التقنية (Technical Debt) في مشروعك كـ ${titleAr}، ما هي خطتك لتقليلها؟`,
                q_en: `How do you strategically address technical debt accumulation as a ${titleEn}?`,
                answers: [
                    { text_ar: "إصلاح الأجزاء القديمة أثناء العمل على المهام اليومية المتعلقة بها.", text_en: "Refactoring legacy code opportunistically while completing assigned daily tasks.", points: 1 },
                    { text_ar: "تخصيص فترات بين المشروعات لإعادة كتابة وتطهير الأكواد المتهالكة.", text_en: "Scheduling dedicated maintenance windows between project release cycles.", points: 2 },
                    { text_ar: "تسجيل نقاط الدين التقني وتنبيه الإدارة لأهمية معالجتها مستقبلاً.", text_en: "Logging tech debt items in the backlog and advocating for remediation time.", points: 3 },
                    { text_ar: "حساب أثر الدين التقني بالأرقام، وتخصيص نسبة ثابتة من كل دورة عمل (Sprint) لمعالجته.", text_en: "Quantifying debt impact in ROI terms and reserving fixed sprint capacity for refactoring.", points: 5, hr_exp_ar: "تخصيص جزء ثابت من كل Sprint يمنع تدهور جودة المشروع دون تعطيل تسليم الميزات.", hr_exp_en: "Securing dedicated sprint allocation for continuous refactoring prevents tech debt accumulation." }
                ]
            },
            {
                id: "be_q5", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `كيف تصمم الخوادم وقواعد البيانات كـ ${titleAr} لتتحمل الزيادات الحادة في عدد الزيارات (Scalability)؟`,
                q_en: `How do you design application backends for high traffic scalability as a ${titleEn}?`,
                answers: [
                    { text_ar: "ترقية مواصفات وسعة الخوادم الحالية لاستيعاب ضغط الاستخدام.", text_en: "Upgrading existing server hardware resources vertically to handle demand.", points: 1 },
                    { text_ar: "اعتماد التخزين المؤقت للبيانات الشائعة وتوفير نسخ إضافية من قواعد البيانات.", text_en: "Implementing memory caching layers and read-replica database nodes.", points: 2 },
                    { text_ar: "تفعيل التوسع التلقائي (Auto-Scaling) وتوزيع الأحمال عبر شبكات التوزيع (CDN).", text_en: "Enabling horizontal auto-scaling and offloading static content to CDNs.", points: 3 },
                    { text_ar: "بناء معمارية عديمة الحالة (Stateless)، تفعيل التوسع الأفقي الآلي، واستخدام قواطع الدائرة (Circuit Breakers).", text_en: "Architecting stateless services, automated horizontal scaling, and circuit breakers.", points: 5, hr_exp_ar: "البناء عديم الحالة وقواطع الدائرة يوفران حماية ممتازة للنظام أثناء طفرات الضغط.", hr_exp_en: "Stateless architecture and circuit breakers guarantee resilient enterprise scale under load." }
                ]
            },
            {
                id: "be_q6", difficulty: 2, stars: "★★☆☆", dimension: "logic",
                q_ar: `إذا طلبت الإدارة إضافة ميزة قد تؤثر على زمن استجابة الخادم كـ ${titleAr}، كيف تتصرف؟`,
                q_en: `When requested to implement a backend requirement compromising system latency as a ${titleEn}, what do you do?`,
                answers: [
                    { text_ar: "تنفيذ الميزة المطلوبة مع إرفاق ملاحظة توضح التأثير المتوقع على السرعة.", text_en: "Implementing the requested requirement while adding a warning about latency.", points: 1 },
                    { text_ar: "تعديل الميزة لتقليل التأثير الفني قبل إطلاقها للإدارة.", text_en: "Modifying the feature scope to lessen latency impact before deployment.", points: 2 },
                    { text_ar: "شرح الآثار التقنية للإدارة وعرض المقايضات المتاحة بين الأداء والوظيفة.", text_en: "Explaining technical trade-offs to management and offering alternative options.", points: 3 },
                    { text_ar: "عرض تقرير بالأرقام، واقتراح تنفيذ الميزة عبر معالجة لا تزامنية (Async/Background) للحفاظ على السرعة.", text_en: "Presenting metrics on performance impact and proposing async background processing.", points: 5, hr_exp_ar: "المعالجة اللاتزامنية تلبي متطلبات الأعمال وتصون سرعة استجابة التطبيق في الوقت نفسه.", hr_exp_en: "Proposing async background execution satisfies business needs while protecting app SLA." }
                ]
            },
            {
                id: "be_q7", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `ما هو نهجك كـ ${titleAr} لإدارة الشفرات والتكامل المستمر (Git Flow & CI/CD)؟`,
                q_en: `What Git workflow and CI/CD practice do you strictly follow as a ${titleEn}?`,
                answers: [
                    { text_ar: "رفع التعديلات مباشرة للفرع الرئيسي بعد التأكد من عملها محلياً.", text_en: "Committing directly to the main branch after verifying local functionality.", points: 1 },
                    { text_ar: "استخدام فروع مخصصة للميزات ودمجها بعد موافقة أحد الزملاء.", text_en: "Using feature branches and merging after peer approval.", points: 2 },
                    { text_ar: "اعتماد طلبات الدمج (Pull Requests) وااشتراط نجاح الاختبارات الآلية.", text_en: "Enforcing mandatory Pull Request reviews and automated test passes.", points: 3 },
                    { text_ar: "تطبيق فروع الميزات، مراجعات دقيقة، واشتراط فحص الأمان وااختبارات الـ CI قبل الدمج.", text_en: "Enforcing Feature Branching, strict code reviews, and automated security/CI checks.", points: 5, hr_exp_ar: "الفحص الآلي ومراجعة الأكواد يحميان بيئة الإنتاج من الثغرات والأخطاء المفاجئة.", hr_exp_en: "Automated CI quality checks and peer code reviews prevent bugs in production." }
                ]
            },
            {
                id: "be_q8", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `متى تختار معمارية الخدمات المصغرة (Microservices) بدلاً من النظام الموحد (Monolith) كـ ${titleAr}؟`,
                q_en: `When is Microservices architecture preferred over Monolith in your ${titleEn} domain?`,
                answers: [
                    { text_ar: "عند الرغبة في استخدام لغات وتقنيات متعددة في أجزاء المشروع.", text_en: "When planning to use multiple programming languages across modules.", points: 1 },
                    { text_ar: "عند زيادة حجم فريق العمل والحاجة لفصل ملكية الأكواد بين الأقسام.", text_en: "When scaling engineering teams requiring separated code ownership.", points: 2 },
                    { text_ar: "عندما تطلب بعض مكونات النظام معدلات توسع وتحديث مختلفة عن البقية.", text_en: "When specific modules demand independent scaling and deployment rates.", points: 3 },
                    { text_ar: "عند تعقد نطاقات العمل، حاجة الخدمات للتوسع المنفصل، بدءاً من النظام الموحد المنظم (Modular Monolith).", text_en: "When high domain complexity and scaling autonomy require it, starting from a Modular Monolith.", points: 5, hr_exp_ar: "البدء بنظام موحد منظم والتحول للخدمات المصغرة عند الحاجة يمنع التعقيد المبكر.", hr_exp_en: "Evolving from a modular monolith to microservices prevents premature complexity." }
                ]
            },
            {
                id: "be_q9", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `إذا حدث توقف أو بطء شديد في قواعد البيانات أثناء الذروة كـ ${titleAr}، كيف تدير غرفة الأزمات؟`,
                q_en: `Facing a production database outage/latency spike during peak load as a ${titleEn}, what is your action plan?`,
                answers: [
                    { text_ar: "توجيه جزء من الزيارات لخوادم قراءة احتياطية لتخفيف الضغط الفوري.", text_en: "Routing traffic to standby read replicas to ease instant load.", points: 1 },
                    { text_ar: "متابعة لوحات التتبع وتجميد التحديثات الجديدة لبحث سبب البطء.", text_en: "Monitoring dashboards and freezing deployments to inspect logs.", points: 2 },
                    { text_ar: "إيقاف بعض الميزات الثانوية مؤقتاً لتخفيف الضغط على الخوادم.", text_en: "Temporarily disabling non-critical features to reduce strain.", points: 3 },
                    { text_ar: "إدارة غرفة الأزمات (War Room)، تفعيل نمط التدهور المقبول، التتبع الموزع، ونشر إصلاح سريع (Hotfix).", text_en: "Commanding a War Room, triggering Circuit Breakers, using Distributed Tracing, and releasing a Hotfix.", points: 5, hr_exp_ar: "إدارة الأزمات الاحترافية وتفعيل نمط الحماية ينقذان الخدمة من التوقف الكامل.", hr_exp_en: "Structured War Room coordination and circuit breakers contain critical operational outages." }
                ]
            },
            {
                id: "be_q10", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند النقل إلى معمارية جديدة بدون انقطاع الخدمة نهائياً (Zero Downtime Migration) كـ ${titleAr}، كيف تنفذ ذلك؟`,
                q_en: `How do you execute a zero-downtime database and system migration as a ${titleEn}?`,
                answers: [
                    { text_ar: "إجراء عملية النقل في أوقات الصيانة المنخفضة بعد اختبار النسخة الجديدة.", text_en: "Executing migration during low-traffic maintenance windows after testing.", points: 1 },
                    { text_ar: "مزامنة البيانات بين النظامين ونقل المستخدمين على مراحل تدريجية.", text_en: "Synchronizing data layers and phasing user migration step by step.", points: 2 },
                    { text_ar: "تشغيل النظامين معاً لفترة للتأكد من مطابقة النتائج قبل إلغاء القديم.", text_en: "Running dual systems in parallel to verify data parity before deprecating legacy nodes.", points: 3 },
                    { text_ar: "تطبيق نمط (Strangler Fig)، الكتابة المزدوجة للبيانات، والإطلاق التدريجي (Canary Deployment).", text_en: "Applying the Strangler Fig pattern, dual-writing data, and running Canary deployments.", points: 5, hr_exp_ar: "نمط Strangler Fig والإطلاق التدريجي يضمنان نقل الأنظمة الكبيرة دون أدنى انقطاع للخدمة.", hr_exp_en: "Strangler Fig pattern and Canary deployments ensure safe zero-downtime migration." }
                ]
            },
            {
                id: "be_q11", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند تقييم معمارية الأنظمة الموزعة (CAP Theorem) كـ ${titleAr}، كيف توازن بين الاتساق والتوافر؟`,
                q_en: `Evaluating distributed system trade-offs (CAP Theorem) as a ${titleEn}, how do you balance Consistency vs Availability?`,
                answers: [
                    { text_ar: "تفضيل الاتساق الدائم لمنع أي تضارب في البيانات بغض النظر عن سرعة الاستجابة.", text_en: "Prioritizing strong consistency universally to prevent data mismatch.", points: 1 },
                    { text_ar: "تفضيل التوافر العالي لضمان عمل الخدمة مع معالجة الاتساق لاحقاً.", text_en: "Prioritizing high availability to ensure uptime while reconciling consistency later.", points: 2 },
                    { text_ar: "مواءمة الاختيار بحسب طبيعة كل وحدة: الاتساق للمعاملات والتوافر للتصفح.", text_en: "Tailoring choices per module: enforcing consistency for transactions and availability for feeds.", points: 3 },
                    { text_ar: "تطبيق الاتساق القوي (CP) للأنظمة المالية، والاتساق النهائي (AP) لخدمات البيانات الضخمة.", text_en: "Applying Strong Consistency (CP) for financial ledgers, and Eventual Consistency (AP) for high-volume streams.", points: 5, hr_exp_ar: "المواءمة الدقيقة لمعادلة CAP بحسب نوع الخدمة تضمن الدقة المالية والسرعة معاً.", hr_exp_en: "Aligning CAP trade-offs per domain guarantees transactional integrity where vital and speed elsewhere." }
                ]
            },
            {
                id: "be_q12", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `كيف تصمم خطة التعافي من الكوارث (Disaster Recovery) كـ ${titleAr} عند انقطاع الخدمة السحابية؟`,
                q_en: `How do you architect Disaster Recovery for ${titleEn} systems against cloud outage incidents?`,
                answers: [
                    { text_ar: "الاعتماد على النسخ الاحتياطية التلقائية لدى مزود الخدمة في نفس المنطقة.", text_en: "Relying on automated multi-zone snapshots within the same region.", points: 1 },
                    { text_ar: "تجهيز بيئة خوادم بديلة في منطقة سحابية أخرى وتفعيلها عند الطوارئ.", text_en: "Maintaining a secondary warm-standby environment in another region.", points: 2 },
                    { text_ar: "اعتماد بنية متعددة المناطق (Multi-Region) مع التزامن المستمر لقواعد البيانات.", text_en: "Deploying a Multi-Region active-passive setup with DB replication.", points: 3 },
                    { text_ar: "تصميم بنية متعددة المناطق/السحب (Multi-Region/Cloud)، أتمتة التحويل (Failover)، وتقليل RTO & RPO.", text_en: "Architecting Multi-Region / Multi-Cloud active setups with automated failover and minimal RTO & RPO.", points: 5, hr_exp_ar: "تقليل أزمنة RTO & RPO والتعدد السحابي يضمنان استمرار الخدمة دون توقف.", hr_exp_en: "Multi-region setup with minimal RTO/RPO metrics guarantees unbroken continuity." }
                ]
            },
            {
                id: "be_q13", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `كيف تضمن سلامة وأمان تداول الرسائل والمعاملات بين الخوادم (Message Queues & Event-Driven) كـ ${titleAr}؟`,
                q_en: `Designing resilient Event-Driven messaging pipelines (Kafka/RabbitMQ) as a ${titleEn}, how do you prevent message loss?`,
                answers: [
                    { text_ar: "إعادة إرسال الرسائل الفاشلة فوراً حتى تكتمل المعالجة بنجاح.", text_en: "Retrying failed messages continuously until successful execution.", points: 1 },
                    { text_ar: "تخزين الرسائل في جداول محددة بقاعدة البيانات قبل النشر للشبكة.", text_en: "Persisting messages in application database tables before publishing.", points: 2 },
                    { text_ar: "استخدام طوابير الرسائل الميتة (Dead Letter Queues) لعزل الرسائل التالفة.", text_en: "Configuring Dead Letter Queues (DLQ) to route unprocessable payloads.", points: 3 },
                    { text_ar: "اعتماد نمط Outbox Pattern، ضمان المعالجة لمرة واحدة على الأقل (At-least-once) مع جعل المستهلكين Idempotent.", text_en: "Enforcing Transactional Outbox Pattern, At-Least-Once Delivery, Dead Letter Queues, and Idempotent consumers.", points: 5, hr_exp_ar: "نمط Outbox Pattern وجعل المستهلكين Idempotent يمنعان ضياع وتكرار البيانات تماماً.", hr_exp_en: "Transactional Outbox and Idempotent consumer design guarantee zero message loss and exact-once processing." }
                ]
            },
            {
                id: "be_q14", difficulty: 3, stars: "★★★☆", dimension: "logic",
                q_ar: `عند تحسين أداء استعلامات قواعد البيانات الضخمة (SQL Indexing & Query Tuning) كـ ${titleAr}، ما هو نهجك؟`,
                q_en: `Troubleshooting high execution latency in relational database queries as a ${titleEn}, what tuning steps do you perform?`,
                answers: [
                    { text_ar: "إضافة الفهارس (Indexes) على كافة الأعمدة المستخدمة في الاستعلام.", text_en: "Adding B-Tree indexes across all columns referenced in WHERE clauses.", points: 1 },
                    { text_ar: "زيادة حجم الذاكرة المؤقتة المخصصة لقاعدة البيانات في الخادم.", text_en: "Increasing database buffer pool sizes to hold larger result sets.", points: 2 },
                    { text_ar: "تحليل خطة تنفيذ الاستعلام (EXPLAIN ANALYZE) وإنشاء فهارس مركبة مناسبة.", text_en: "Inspecting execution plans using EXPLAIN ANALYZE and adding composite indexes.", points: 3 },
                    { text_ar: "استخدام EXPLAIN ANALYZE، إلغاء عمليات المسح الكلي (Full Table Scans)، بناء Composite/Covering Indexes، وتقسيم الجداول (Partitioning).", text_en: "Executing EXPLAIN ANALYZE profiling, eliminating table scans via covering indexes, and partitioning large tables.", points: 5, hr_exp_ar: "تحليل خطة التنفيذ وتطبيق الفهارس المركبة يقللان زمن تنفيذ الاستعلام من ثوانٍ إلى ميلي ثانية.", hr_exp_en: "EXPLAIN ANALYZE execution profiling and covering indexes convert multi-second queries to sub-millisecond lookups." }
                ]
            },
            {
                id: "be_q15", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `كيف تحمي الواجهات الخلفية (APIs) كـ ${titleAr} من هجمات الإغراق والطلبات المفرطة (Rate Limiting & DDoS)?`,
                q_en: `How do you secure backend API endpoints from brute force and denial of service attacks as a ${titleEn}?`,
                answers: [
                    { text_ar: "طلب إدخال الكابتشا (CAPTCHA) في كافة استمارات التسجيل.", text_en: "Requiring CAPTCHA verification on all submission forms.", points: 1 },
                    { text_ar: "حظر عناوين الـ IP التي تجاوزت عدداً محدداً من الطلبات المتكررة.", text_en: "Blacklisting IP addresses exceeding static request thresholds.", points: 2 },
                    { text_ar: "تطبيق حدود الاستخدام (Rate Limiting) بناءً على مفتاح المستخدم أو عنوان الـ IP.", text_en: "Implementing Token Bucket rate limiting per user token or IP.", points: 3 },
                    { text_ar: "تطبيق خوارزمية Token Bucket / Leaky Bucket، جدار حماية التطبيقات (WAF)، وحماية DDoS الموزعة على الحافة (Edge Protection).", text_en: "Deploying Distributed Rate Limiting (Token Bucket), Web Application Firewall (WAF), and Edge DDoS Mitigation.", points: 5, hr_exp_ar: "استخدام خوارزمية Token Bucket والـ WAF يحميان خدمات الخلفية من هجمات DDoS والضغط غير المشروع.", hr_exp_en: "Token Bucket rate-limiting paired with WAF guards APIs against abuse and server exhaustion." }
                ]
            },
            {
                id: "be_q16", difficulty: 4, stars: "★★★★", dimension: "tech",
                q_ar: `عند إعادة هندسة الأنظمة المعقدة (Re-engineering) كـ ${titleAr}، كيف تدير مقاومة التغيير بين الفرق؟`,
                q_en: `Leading system re-engineering as a ${titleEn}, how do you manage organizational resistance to change?`,
                answers: [
                    { text_ar: "تطبيق التغيير تدريجياً وإلزام الفرق بالمعايير الجديدة في المشروعات الحديثة فقط.", text_en: "Phasing in changes gradually and mandating new standards strictly for new projects.", points: 1 },
                    { text_ar: "توضيح فوائد المعمارية الجديدة للفرق وعقد جلسات تدريبية لتسهيل التحول.", text_en: "Highlighting architecture benefits and hosting workshops to upskill teams.", points: 2 },
                    { text_ar: "تمكين قادة الفرق من مشاركة صياغة المعمارية واكتساب موافقتهم المبكرة.", text_en: "Engaging tech leads early to co-design architectural standards.", points: 3 },
                    { text_ar: "تطبيق إطار إدارة التغيير (ADKAR)، إشراك الفرق مبكراً، وإثبات النجاح بمشاريع تجريبية (Pilot).", text_en: "Applying the ADKAR change model, involving teams early, and demonstrating Pilot wins.", points: 5, hr_exp_ar: "تطبيق نموذج ADKAR وإثبات النجاح بمشاريع تجريبية يحولان المقاومة لدعم كامل للتحول.", hr_exp_en: "Empowering teams via ADKAR change management builds lasting transformation buy-in." }
                ]
            },
            {
                id: "be_q17", difficulty: 4, stars: "★★★★", dimension: "logic",
                q_ar: `عند تعارض الموعد المستهدف لإطلاق المنتج مع جاهزية المعمارية الفنية كـ ${titleAr}، ما هي مصفوفة القرار التي تقدمها؟`,
                q_en: `When product launch deadlines conflict with ${titleEn} architecture readiness, what framework do you offer?`,
                answers: [
                    { text_ar: "تقليل نطاق الميزات وإطلاق النسخة الأساسية في الموعد المحدد واستكمال الباقي لاحقاً.", text_en: "Scoping down non-essential features to meet launch date while deferring modules.", points: 1 },
                    { text_ar: "عرض المخاطر الفنية للتسرع واقتراح تمديد الموعد النهائي لضمان الجودة.", text_en: "Presenting risk metrics of rushed delivery and advocating for timeline extension.", points: 2 },
                    { text_ar: "اعتماد خيار الإطلاق التدريجي لشريحة محدودة من المستخدمين لتجربة النظام.", text_en: "Proposing a phased release to a limited user cohort to validate performance.", points: 3 },
                    { text_ar: "تقديم مصفوفة تقييم المقايضات (Trade-off Matrix) توضح التكلفة الفنية والتجارية، واقتراح إطلاق نسخة MVP محددة.", text_en: "Presenting a Trade-off Decision Matrix detailing business vs tech risks and proposing an MVP rollout.", points: 5, hr_exp_ar: "تقديم مصفوفة تقييم المقايضات Trade-off Matrix يعين القيادة على اتخاذ القرار الأنسب بتوازن.", hr_exp_en: "Delivering a transparent Trade-off Decision Matrix enables balanced, risk-aware governance." }
                ]
            },
            {
                id: "be_q18", difficulty: 4, stars: "★★★★", dimension: "tech",
                q_ar: `عند إدارة أنظمة توزيع المعاملات المالية الحساسة (Saga Pattern & Distributed Transactions) كـ ${titleAr}، كيف تضمن الاتساق التام؟`,
                q_en: `Designing distributed transactional systems across microservices as a ${titleEn}, how do you ensure eventual consistency and rollback via Saga Pattern?`,
                answers: [
                    { text_ar: "استخدام بروتوكول التزامن المزدوج (Two-Phase Commit) عبر كافة الخدمات.", text_en: "Enforcing Two-Phase Commit (2PC) protocols universally across microservices.", points: 1 },
                    { text_ar: "إيقاف المزايدة والتراجع اليدوي عند حدوث خطأ في إحدى الخطوات.", text_en: "Halting pipeline execution and manually triggering rollback scripts.", points: 2 },
                    { text_ar: "اعتماد نمط Saga القائم على الأحداث وتوثيق خطوات التراجع التعويضي.", text_en: "Implementing Event-driven Saga Pattern with compensating transaction steps.", points: 3 },
                    { text_ar: "تطبيق معمارية Saga Pattern (Choreography/Orchestration)، تصميم Compensating Transactions لكل خدمة، ومراقبة حالة المعاملة بمركز محاذات centralized state.", text_en: "Architecting Orchestrated Saga Workflows, idempotent Compensating Transactions, and centralized Saga Execution Coordinators.", points: 5, hr_exp_ar: "نمط Orchestrated Saga مع المعاملات التعويضية يحميان النظام الموزع من التضارب المالي بمرونة عالية.", hr_exp_en: "Orchestrated Saga Pattern combined with idempotent compensating actions delivers bulletproof distributed data consistency." }
                ]
            }
        ];
    }

    // ----------------------------------------------------------------------
    // 4. CYBERSECURITY BLOCK
    // 15 Base Questions (Difficulty 1-3) + 3 Bonus Questions (Difficulty 4) = 18 Total
    // ----------------------------------------------------------------------
    function getCybersecurityBlock(titleAr, titleEn) {
        return [
            {
                id: "cs_q1", difficulty: 1, stars: "★☆☆☆", dimension: "tech",
                q_ar: `كـ ${titleAr}، ما هي خطتك لحماية البيانات الحساسة وتأمين الصلاحيات داخل التطبيقات؟`,
                q_en: `As a ${titleEn}, how do you protect sensitive data and manage access control in application environments?`,
                answers: [
                    { text_ar: "تفعيل جدران الحماية الحالية واشتراط كلمات مرور قوية للمستخدمين.", text_en: "Enforcing basic firewalls and requiring strong user passwords.", points: 1 },
                    { text_ar: "تشفير البيانات في قاعدة البيانات وتحديد الصلاحيات بحسب الأدوار العامة.", text_en: "Encrypting database records and applying role-based user access controls.", points: 2 },
                    { text_ar: "تشفير البيانات أثناء النقل والتخزين مع مراجعة إجراءات الأمان دورياً.", text_en: "Encrypting data in transit and at rest with regular security protocol reviews.", points: 3 },
                    { text_ar: "تطبيق مبدأ الصلاحيات الأدنى (Least Privilege)، تشفير المفاتيح، واعتماد نموذج Zero-Trust.", text_en: "Implementing Principle of Least Privilege, key vaults, and Zero-Trust access control.", points: 5, hr_exp_ar: "نموذج Zero-Trust وحماية المفاتيح يمثلان المعيار الأفضل لحماية بيانات المؤسسات.", hr_exp_en: "Zero-Trust models and strict credential isolation provide robust enterprise data protection." }
                ]
            },
            {
                id: "cs_q2", difficulty: 1, stars: "★☆☆☆", dimension: "tech",
                q_ar: `كيف تحمي الأنظمة والتطبيقات كـ ${titleAr} من الثغرات الأمنية المعروفة (مثل OWASP Top 10)؟`,
                q_en: `How do you systematically protect systems from security risks (e.g. OWASP Top 10) as a ${titleEn}?`,
                answers: [
                    { text_ar: "كتابة الأكواد باتباع قواعد الأمان العامة وتحديث المكتبات عند تنبيه الأمن.", text_en: "Writing code following standard security guidelines and updating packages on alert.", points: 1 },
                    { text_ar: "مراجعة الكود والتأكد من تنقية المدخلات في النقاط الرئيسية.", text_en: "Reviewing code and ensuring input sanitization on main endpoints.", points: 2 },
                    { text_ar: "استخدام أدوات فحص الكود الآلية ومراجعة الاعتماديات الخارجية.", text_en: "Using static code scanners and auditing third-party libraries.", points: 3 },
                    { text_ar: "دمج الفحص الآلي المستمر (SAST/DAST)، تنقية البيانات، وتحديث الاعتماديات آلياً.", text_en: "Integrating continuous SAST/DAST testing, input sanitization, and automated patching.", points: 5, hr_exp_ar: "الفحص الآلي SAST/DAST يوفر حماية أمنية مستمرة ضد كافة الثغرات البرمجية.", hr_exp_en: "Automated SAST/DAST scans integrated into delivery pipelines maintain high security." }
                ]
            },
            {
                id: "cs_q3", difficulty: 1, stars: "★☆☆☆", dimension: "mindset",
                q_ar: `عند نشر سياسات الأمان الجديدة بين موظفي الشركة كـ ${titleAr}، كيف تبني وعياً أمنياً مستداماً؟`,
                q_en: `Promultgating corporate security policies across non-technical staff as a ${titleEn}, how do you build security culture?`,
                answers: [
                    { text_ar: "إرسال وثيقة السياسات الأمنية بالبريد الإلكتروني وإلزام الجميع بالتوقيع عليها.", text_en: "Emailing policy PDFs and requiring employee sign-off.", points: 1 },
                    { text_ar: "تطوير اختبار معلومات أمني سنوي لمعرفة مدى الالتزام بالتعليمات.", text_en: "Conducting an annual compliance quiz to test protocol familiarity.", points: 2 },
                    { text_ar: "تنظيم دورات تدريبية دورية واستغلال منصات المحاكاة للتوعية ضد التصيد.", text_en: "Hosting regular training workshops and anti-phishing simulations.", points: 3 },
                    { text_ar: "تنفيذ حملات محاكاة التصيد (Phishing Simulations)، دورات توعوية تفاعلية، والمكافأة على الإبلاغ مبكراً.", text_en: "Running automated Phishing Simulations, interactive gamified awareness, and rewarding vulnerability reporting.", points: 5, hr_exp_ar: "حملات المحاكاة والمكافأة على الإبلاغ يحولان الموظفين لخط دفاع أول لحماية المؤسسة.", hr_exp_en: "Continuous phishing simulations and reporting incentives transform staff into an active defense layer." }
                ]
            },
            {
                id: "cs_q4", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `عند اكتشاف تنبيه أمني طارئ أو محاولة اختراق سحابية كـ ${titleAr}، ما هي استراتيجيتك للاحتواء؟`,
                q_en: `Detecting an active security breach attempt as a ${titleEn}, what is your incident containment playbook?`,
                answers: [
                    { text_ar: "إعادة تشغيل الخوادم المتأثرة لتصفية الجلسات المشبوهة.", text_en: "Rebooting affected nodes to clear active malicious sessions.", points: 1 },
                    { text_ar: "عزل الخادم المتأثر عن الشبكة وإعادة تعيين كلمات مرور الوصول.", text_en: "Isolating compromised hosts and rotating administrative keys.", points: 2 },
                    { text_ar: "تتبع مصدر الاختراق وتحديث قواعد جدار الحماية لإغلاق الثغرة.", text_en: "Tracing IP artifacts and updating firewall rules to block vectors.", points: 3 },
                    { text_ar: "تفعيل بروتوكول الاستجابة للحوادث (Incident Response)، عزل النطاق، حفظ الأدلة الرقمية (Forensics)، وتغيير المفاتيح آلياً.", text_en: "Executing Incident Response protocols, domain isolation, digital forensics preservation, and automated credential rotation.", points: 5, hr_exp_ar: "عزل النطاق وحفظ الأدلة الرقمية يمنعان انتشار الاختراق ويحددان ثغرة الدخول بدقة.", hr_exp_en: "Domain isolation and digital forensics stop breach propagation while identifying entry vectors." }
                ]
            },
            {
                id: "cs_q5", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `كيف تضمن سلامة وتشفير اتصالات الأجهزة والواجهات (API & Traffic Encryption) كـ ${titleAr}؟`,
                q_en: `How do you secure API transport security and data encryption as a ${titleEn}?`,
                answers: [
                    { text_ar: "استخدام بروتوكول HTTPS العادي وإظهار قفل الأمان في المتصفح.", text_en: "Enforcing standard HTTPS and maintaining valid SSL certificates.", points: 1 },
                    { text_ar: "تطبيق شهادات TLS 1.3 وتشفير مدخلات المستخدم الحساسة.", text_en: "Upgrading to TLS 1.3 and encrypting sensitive payload fields.", points: 2 },
                    { text_ar: "اعتماد تشفير التراسل الثنائي (mTLS) وتأمين توقيع الرسائل عبر JWT.", text_en: "Implementing Mutual TLS (mTLS) and signing payload tokens via JWT.", points: 3 },
                    { text_ar: "تطبيق التشفير المتبادل (mTLS)، توثيق الشهادات (Certificate Pinning)، وتشفير بيانات النطاق من البداية للنهاية (E2EE).", text_en: "Enforcing Mutual TLS (mTLS), Certificate Pinning, and End-to-End Payload Encryption (E2EE).", points: 5, hr_exp_ar: "تطبيق mTLS وتوثيق الشهادات يمنعان هجمات التصنت وسرقة الهوية بين الخوادم.", hr_exp_en: "mTLS and Certificate Pinning eliminate Man-in-the-Middle eavesdropping and spoofing risks." }
                ]
            },
            {
                id: "cs_q6", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `عند إدارة الهويات وسجلات الوصول للموظفين (Identity & Access Management - IAM) كـ ${titleAr}، ما هو معيارك؟`,
                q_en: `Managing corporate Identity & Access Management (IAM) lifecycle as a ${titleEn}, how do you govern privilege boundaries?`,
                answers: [
                    { text_ar: "إنشاء حسابات الموظفين وتعيين صلاحيات المسؤولين حسب الحاجة.", text_en: "Creating user accounts and granting admin rights upon request.", points: 1 },
                    { text_ar: "تطبيق المصادقة الثنائية (2FA) وتعيين أدوار الموظفين حسب القسم.", text_en: "Enforcing 2FA and assigning department-level role templates.", points: 2 },
                    { text_ar: "استخدام نظام تسجيل الدخول الموحد (SSO) وتجديد الصلاحيات دورياً.", text_en: "Deploying Enterprise Single Sign-On (SSO) and performing quarterly access reviews.", points: 3 },
                    { text_ar: "اعتماد نظام الدخول الموحد (SSO/SAML)، التوثيق المتعدد (MFA/FIDO2)، الوصول المشروط (Just-In-Time Access)، ومراجعات الصلاحيات الآلية.", text_en: "Implementing Enterprise SSO (SAML/OIDC), FIDO2 MFA, Just-In-Time (JIT) access, and automated privilege de-provisioning.", points: 5, hr_exp_ar: "المصادقة عبر FIDO2 والوصول المؤقت JIT يضمنان حماية الحسابات من التسريب.", hr_exp_en: "FIDO2 MFA and Just-In-Time access controls restrict privilege escalation window." }
                ]
            },
            {
                id: "cs_q7", difficulty: 2, stars: "★★☆☆", dimension: "logic",
                q_ar: `إذا طلب أحد المدراء استثناء أمنياً مؤقتاً لتمرير مهمة عاجلة كـ ${titleAr}، كيف تتصرف؟`,
                q_en: `When an executive requests a temporary security exception to bypass a control as a ${titleEn}, how do you respond?`,
                answers: [
                    { text_ar: "الموافقة على الاستثناء فوراً لتسهيل سير العمل وإبلاغ الفريق.", text_en: "Granting immediate approval to avoid operational delays.", points: 1 },
                    { text_ar: "طلب موافقة كتابية من المدير قبل تفعيل الاستثناء لضمان المسؤولية.", text_en: "Requiring written email sign-off before applying the override.", points: 2 },
                    { text_ar: "تقييم المخاطر وتجهيز ضوابط أمنية مؤقتة بديلة لتقليل الخطر.", text_en: "Evaluating potential risks and setting temporary alternative controls.", points: 3 },
                    { text_ar: "تقييم المخاطر رسمياً، وضع ضوابط تعويضية (Compensating Controls)، توقيع نموذج مخاطر (Risk Acceptance)، وتحديد مهلة زمنية إجبارية.", text_en: "Conducting formal risk scoring, establishing Compensating Controls, securing signed Risk Acceptance, and setting hard expiration limits.", points: 5, hr_exp_ar: "الضوابط التعويضية وتحديد المهلة الزمنية يحميان المؤسسة دون تعطيل العمليات العاجلة.", hr_exp_en: "Formal risk acceptance and compensating controls manage business needs while maintaining boundary integrity." }
                ]
            },
            {
                id: "cs_q8", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند تنفيذ اختبار اختراق أخلاقي (Penetration Test) شامل لنظام حرج كـ ${titleAr}، كيف تدير الخطة؟`,
                q_en: `Executing an enterprise red-team penetration test for a critical system as a ${titleEn}, how do you structure it?`,
                answers: [
                    { text_ar: "استخدام أدوات الفحص التلقائية الشائعة وإرسال تقرير بالثغرات المكتشفة.", text_en: "Running automated scanners and forwarding raw vulnerability reports.", points: 1 },
                    { text_ar: "فحص الثغرات الحساسة محلياً واقتراح التعديلات الأمنية المناسبة.", text_en: "Auditing high-risk endpoints locally and proposing remediation patches.", points: 2 },
                    { text_ar: "محاكاة هجمات حقيقية على بيئة معزولة وتوثيق درجة الخطورة وسيناريوهات الاستغلال.", text_en: "Simulating attacks in staging, rating vulnerability severity, and drafting mitigation steps.", points: 3 },
                    { text_ar: "تطبيق نطاق عمل دقيق (Scope)، محاكاة التهديدات المتقدمة (APT)، توثيق الاستغلال، واقتراح خطة معالجة معتمدة على (CVSS).", text_en: "Defining test scopes, APT threat simulation, CVSS scoring impact analysis, and remediation roadmaps.", points: 5, hr_exp_ar: "تقييم الثغرات بدلالة CVSS ومحاكاة التهديدات المتقدمة يضمنان سد الفجوات الحقيقية.", hr_exp_en: "CVSS severity scoring and advanced threat simulation secure production boundaries." }
                ]
            },
            {
                id: "cs_q9", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `كيف تضمن حماية الحاويات والبيئة السحابية (Container & Kubernetes Security) كـ ${titleAr}؟`,
                q_en: `How do you secure container images and Kubernetes cluster infrastructure as a ${titleEn}?`,
                answers: [
                    { text_ar: "تحديث صور الحاويات وتطبيق كلمات مرور قوية لحسابات الوصول.", text_en: "Updating base docker images and using strong admin credentials.", points: 1 },
                    { text_ar: "فحص الحاويات قبل التشغيل وعزل الشبكات الافتراضية.", text_en: "Scanning container images prior to deployment and isolating networks.", points: 2 },
                    { text_ar: "استخدام صور حاويات مصغرة (Minimal Base Images) وتحديد صلاحيات التشغيل بدون Root.", text_en: "Leveraging minimal base images and enforcing non-root container user execution.", points: 3 },
                    { text_ar: "فحص صور الحاويات آلياً (Image Scanning)، تشغيل العناصر كـ Rootless، تفعيل سياسات الشبكة (Network Policies)، والتوقيع الرقمي (Cosign).", text_en: "Enforcing continuous container vulnerability scanning, Rootless pods, Kubernetes NetworkPolicies, and Cosign image signatures.", points: 5, hr_exp_ar: "تشغيل الحاويات كـ Rootless وتوقيع الصور يمنعان اختراق البنية السحابية وتجاوز صلاحيات الخادم.", hr_exp_en: "Rootless pod execution and signed container images guarantee cloud-native isolation." }
                ]
            },
            {
                id: "cs_q10", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `كيف تصمم مركز مراقبة الأحداث الأمنية (SIEM & SOC Operations) كـ ${titleAr} لاكتشاف التهديدات فور وقوعها؟`,
                q_en: `Designing a Security Information and Event Management (SIEM) pipeline as a ${titleEn}, how do you tune detection rules?`,
                answers: [
                    { text_ar: "تجميع سجلات النظام في مكان موحد ومراجعتها عند حدوث بلاغات.", text_en: "Centralizing system logs and searching them during incident reports.", points: 1 },
                    { text_ar: "تعديل قواعد التنبيهات المعتادة على الخوادم لتنبيه المسؤولين عن الأخطاء.", text_en: "Configuring standard syslog alerts for major server errors.", points: 2 },
                    { text_ar: "ربط سجلات التطبيقات والخوادم بمركز SIEM وإعداد تنبيهات فورية للمخاطر.", text_en: "Integrating application and server logs into a SIEM dashboard with automated threshold alerts.", points: 3 },
                    { text_ar: "تجميع السجلات لحظياً (Real-time SIEM Ingestion)، أتمتة الاستجابة (SOAR Playbooks)، ومراعاة خفض الإيجابيات الزائفة (False Positives).", text_en: "Structuring real-time log ingestion, executing SOAR automation playbooks, and continuously tuning SIGMA/YARA detection rules.", points: 5, hr_exp_ar: "أتمتة الاستجابة عبر SOAR وتنقيه التنبيهات يمنحان فريق الأمان سرعة قياسية في حسم التهديدات.", hr_exp_en: "SOAR playbooks and fine-tuned SIEM correlation rules eliminate alert fatigue and ensure instant threat resolution." }
                ]
            },
            {
                id: "cs_q11", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند التعامل مع هجمات الفدية وتشفير البيانات (Ransomware Mitigation) كـ ${titleAr}، كيف تبني خطة الحصانة؟`,
                q_en: `Architecting corporate resilience against Ransomware encryption threats as a ${titleEn}, what layered strategy do you deploy?`,
                answers: [
                    { text_ar: "الاعتماد على مضاد الفيروسات التقليدي وعمل نسخ احتياطية أسبوعية.", text_en: "Relying on endpoint antivirus software and weekly local server backups.", points: 1 },
                    { text_ar: "فصل النسخ الاحتياطية وتحديث برامج التشغيل باستمرار على الأجهزة.", text_en: "Offloading backups to secondary drives and maintaining OS patch updates.", points: 2 },
                    { text_ar: "اعتماد نسخ احتياطية معزولة عن الشبكة (Air-Gapped) وتطبيق حماية الأجهزة (EDR).", text_en: "Maintaining immutable air-gapped backups and deploying EDR agents across endpoints.", points: 3 },
                    { text_ar: "توفير نسخ احتياطية غير قابلة للتغيير (Immutable & Air-Gapped)، حلول EDR/XDR المتقدمة، وتطبيق تقطيع الشبكة (Micro-segmentation).", text_en: "Deploying immutable air-gapped backups, zero-trust micro-segmentation, and EDR/XDR behavioral anomaly blockers.", points: 5, hr_exp_ar: "النسخ غير القابلة للتغير وتقطيع الشبكة Micro-segmentation يمنعان انتشار هجمات الفدية نهائياً.", hr_exp_en: "Immutable air-gapped backups and network micro-segmentation guarantee full recovery without paying ransom." }
                ]
            },
            {
                id: "cs_q12", difficulty: 3, stars: "★★★☆", dimension: "logic",
                q_ar: `كيف تضمن أمان سلسلة التوريد البرمجية (Software Supply Chain Security) كـ ${titleAr} في المشروعات الحساسة؟`,
                q_en: `How do you safeguard your organization against Software Supply Chain attacks as a ${titleEn}?`,
                answers: [
                    { text_ar: "تحميل الحزم البرمجية من المصادر الرسمية فقط وتحديثها عند الإمكان.", text_en: "Downloading dependencies only from official repositories.", points: 1 },
                    { text_ar: "فحص المكتبات قبل استخدامها وتثبيت أرقام الإصدارات المعتمدة.", text_en: "Scanning third-party libraries and locking release versions.", points: 2 },
                    { text_ar: "توليد قائمة المكونات البرمجية (SBOM) وفحص الثغرات في التبعيات.", text_en: "Generating Software Bill of Materials (SBOM) and auditing dependency trees.", points: 3 },
                    { text_ar: "توليد قائمة المكونات آلياً (SBOM), فحص التبعيات المستمر، التوقيع الرقمي للمخرجات، وتوفير مستودعات محلية معزولة (Private Repositories).", text_en: "Enforcing automated SBOM generation, artifact signing, provenance verification (SLSA), and mirrored internal registries.", points: 5, hr_exp_ar: "توليد SBOM والتوقيع الرقمي يمنعان تسلل الأكواد الخبيثة عبر الاعتماديات الخارجية.", hr_exp_en: "Automated SBOM validation and cryptographic build provenance (SLSA) eliminate supply chain tampering risks." }
                ]
            },
            {
                id: "cs_q13", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند إجراء تحليل الأدلة الرقمية (Digital Forensics) بعد وقوع حادث أمني كـ ${titleAr}، كيف تحفظ الأدلة؟`,
                q_en: `Conducting Digital Forensics and Incident Response (DFIR) following a cyber incident as a ${titleEn}, how do you preserve chain of custody?`,
                answers: [
                    { text_ar: "نسخ سجلات الخادم الملوثة إلى قرص خارجي وبدء الفحص الفوري.", text_en: "Copying server log files to an external drive for immediate inspection.", points: 1 },
                    { text_ar: "حفظ صورة من الذاكرة العشوائية وتوثيق تاريخ وقت الحادث بالتفصيل.", text_en: "Capturing RAM dumps and logging timestamped incident notes.", points: 2 },
                    { text_ar: "أخذ لقطات قرص كاملة (Disk Imaging) وحساب التوقيع الرقمي (Cryptographic Hash) لمنع التعديل.", text_en: "Creating bit-stream disk images and generating cryptographic hashes to prove integrity.", points: 3 },
                    { text_ar: "أخذ لقطات ذاكرة وقرص قطاعاً بقطاع (Bit-stream Imaging)، حساب التوقيع الرقمي (SHA-256)، وتوثيق التسلسل الجنائي (Chain of Custody).", text_en: "Executing volatile memory captures, bit-stream disk imaging, SHA-256 hash verification, and strict Chain of Custody logging.", points: 5, hr_exp_ar: "التوقيع الرقمي SHA-256 وتوثيق التسلسل الجنائي يضمنان اعتماد الأدلة الرقمية قضائياً وفنياً.", hr_exp_en: "Bit-stream imaging and SHA-256 hash verification protect digital evidence integrity for legal and audit scrutiny." }
                ]
            },
            {
                id: "cs_q14", difficulty: 3, stars: "★★★☆", dimension: "mindset",
                q_ar: `كيف تضمن كـ ${titleAr} الالتزام بقوانين حماية البيانات العامة (GDPR & Local Privacy Laws) في تطبيقات المؤسسة؟`,
                q_en: `How do you architect data privacy compliance (GDPR/CCPA) into backend systems as a ${titleEn}?`,
                answers: [
                    { text_ar: "إضافة شروط الاستخدام وسياسة الخصوصية في تذييل الموقع.", text_en: "Adding standard Privacy Policy text in the website footer.", points: 1 },
                    { text_ar: "توفير خيار للمستخدم لحذف حسابه عند الطلب عبر بريد الدعم.", text_en: "Providing an email support request link for account deletion.", points: 2 },
                    { text_ar: "تطبيق الخصوصية بالتصميم (Privacy by Design)، وتسهيل طلبات التصدير والحذف الآلي.", text_en: "Implementing Privacy by Design and building automated data export/erasure endpoints.", points: 3 },
                    { text_ar: "اعتماد الخصوصية بالتصميم (Privacy by Design)، التشفير الحركي والتخزيني، خلط البيانات (Pseudonymization)، وأتمتة طلبات الحذف والتصدير.", text_en: "Enforcing Privacy by Design, automated Right-to-be-Forgotten workflows, data pseudonymization, and consent audit logs.", points: 5, hr_exp_ar: "تطبيق الخصوصية بالتصميم وأتمتة خلط البيانات يحميان المؤسسة من الغرامات التنظيمية الباهظة.", hr_exp_en: "Privacy by Design and automated data erasure workflows eliminate severe regulatory fine liabilities." }
                ]
            },
            {
                id: "cs_q15", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `كيف تصمم معمارية إدارة المفاتيح والتشفير (Key Management & HSM) كـ ${titleAr} لحماية الأسرار الحساسة؟`,
                q_en: `Architecting Enterprise Key Management and Vault Infrastructure as a ${titleEn}, how do you secure master keys?`,
                answers: [
                    { text_ar: "حفظ مفاتيح التشفير في ملفات الإعدادات المحمية على الخادم.", text_en: "Storing encryption keys inside restricted server environment config files.", points: 1 },
                    { text_ar: "استخدام خزائن الأسرار السحابية وتدوير المفاتيح سنوياً.", text_en: "Leveraging cloud secret vaults with annual manual key rotations.", points: 2 },
                    { text_ar: "فصل مفاتيح التشفير في خزينة مخصصة (Vault) وتعديلها تلقائياً بانتظام.", text_en: "Isolating keys in a dedicated Vault with automated periodic rotation.", points: 3 },
                    { text_ar: "اعتماد أجهزة التشفير المتخصصة (HSM)، خزائن الأسرار السحابية (Vault)، التدوير التلقائي للمفاتيح، وتقسيم الصلاحيات.", text_en: "Utilizing Hardware Security Modules (HSM), HashiCorp Vault key rotation, Envelope Encryption, and strict RBAC key policies.", points: 5, hr_exp_ar: "استخدام أجهزة HSM والتشفير المغلف Envelope Encryption يمنعان كشف أسرار المؤسسة حتى لو تم تسريب قواعد البيانات.", hr_exp_en: "HSM hardware integration and envelope encryption safeguard master keys against physical and logical compromise." }
                ]
            },
            {
                id: "cs_q16", difficulty: 4, stars: "★★★★", dimension: "tech",
                q_ar: `عند تصميم بنية أمنية سحابية متكاملة لشركة مؤسسية كـ ${titleAr}، كيف تضمن الامتثال (Compliance) والوقاية؟`,
                q_en: `Designing enterprise cloud security architecture as a ${titleEn}, how do you balance compliance and zero-trust prevention?`,
                answers: [
                    { text_ar: "تفعيل سجلات المراجعة التلقائية وتحديث شهادات الأمان بشكل دوري.", text_en: "Enabling automated audit logs and updating SSL certificates regularly.", points: 1 },
                    { text_ar: "اعتماد معايير الأمان العالمية واشتراط المصادقة الثنائية (2FA) لجميع الموظفين.", text_en: "Enforcing 2FA authentication and aligning with baseline compliance frameworks.", points: 2 },
                    { text_ar: "تطبيق فحص الامتثال المستمر وتشفير البيانات في كافة المراحل مع إدارة الصلاحيات.", text_en: "Implementing continuous compliance scans, data encryption, and IAM controls.", points: 3 },
                    { text_ar: "تأسيس بنية أمنية قائمة على (Zero-Trust)، مراقبة SIEM لحظية، وتشفير مفاتيح HSM، والالتزام بمعايير ISO27001/SOC2.", text_en: "Building Zero-Trust architectures, real-time SIEM monitoring, HSM key management, and ISO27001/SOC2 compliance.", points: 5, hr_exp_ar: "الجمع بين Zero-Trust وإدارة المفاتيح عبر HSM يحمي الشركة من الخسائر المالية والهجمات المعقدة.", hr_exp_en: "Zero-Trust frameworks combined with HSM security ensure strict compliance and threat immunity." }
                ]
            },
            {
                id: "cs_q17", difficulty: 4, stars: "★★★★", dimension: "tech",
                q_ar: `عند تصميم شبكة الأمان المعزولة (Micro-segmentation & Deception Technology) كـ ${titleAr}، كيف تخدع المهاجمين داخل الشبكة؟`,
                q_en: `Architecting Deception Technology and Honeypots within micro-segmented networks as a ${titleEn}, how do you entrap internal adversaries?`,
                answers: [
                    { text_ar: "وضع خوادم وهمية بسيطة ورصد أي محاولات الاتصال بها.", text_en: "Setting up basic fake servers and alerting on connection attempts.", points: 1 },
                    { text_ar: "نشر مصايد المخترقين (Honeypots) في الأجزاء الحساسة من الشبكة.", text_en: "Deploying isolated Honeypot endpoints in sensitive subnetworks.", points: 2 },
                    { text_ar: "توزيع الأهداف الوهمية (Decoys) وتفخيم التنبيهات الأمنية عند لمسها.", text_en: "Distributing deceptive credentials and high-priority alarms.", points: 3 },
                    { text_ar: "تأطير تقنية الخداع (Deception Framework)، نشر مصايد عالية التفاعل (High-Interaction Honeypots)، فخاخ البيانات الوهمية (Honeytokens)، وتقطيع الشبكة الميكروي.", text_en: "Architecting Deception Frameworks, High-Interaction Honeypots, Honeytokens embedded in Active Directory, and micro-segmentation isolation.", points: 5, hr_exp_ar: "نشر الفخاخ الرقمية Honeytokens والتقطيع الميكروي يكشفان التحركات الجانبية للمخترقين فوراً.", hr_exp_en: "Honeytokens and deception assets trap lateral movement attempts instantly before data loss occurs." }
                ]
            },
            {
                id: "cs_q18", difficulty: 4, stars: "★★★★", dimension: "tech",
                q_ar: `كيف تجهز مؤسستك كـ ${titleAr} لمرحلة التشفير ما بعد الكم (Post-Quantum Cryptography - PQC) لحماية البيانات المستقبلية؟`,
                q_en: `Preparing corporate data infrastructure for Post-Quantum Cryptography (PQC) standards as a ${titleEn}, what migration roadmap do you execute?`,
                answers: [
                    { text_ar: "متابعة أخبار أبحاث الحوسبة الكمية وتأجيل التعديل لحين الجاهزية العامة.", text_en: "Monitoring quantum computing breakthroughs while keeping current RSA standards.", points: 1 },
                    { text_ar: "زيادة طول مفاتيح التشفير الحالية (RSA 4096) لتأخير أثر الحوسبة الكمية.", text_en: "Extending key lengths (RSA 4096 / ECC) to delay quantum deciphering impact.", points: 2 },
                    { text_ar: "فحص كافة خوارزميات التشفير المستعملة واختبار خوارزميات NIST الجديدة.", text_en: "Auditing internal cryptographic assets and testing NIST PQC candidates.", points: 3 },
                    { text_ar: "تطبيق مرونة التشفير (Crypto-Agility)، جرد الأصول المشفرة، واختبار خوارزميات NIST PQC المعتمدة (CRYSTALS-Kyber/Dilithium) هجيناً.", text_en: "Architecting Crypto-Agility frameworks, auditing cryptographic assets, and deploying NIST PQC hybrid algorithms (Kyber/Dilithium).", points: 5, hr_exp_ar: "تطبيق مرونة التشفير Crypto-Agility وتجربة خوارزميات PQC يضمنان سلامة بيانات الشركة ضد أخطار فك التشفير المستقبلي.", hr_exp_en: "Crypto-Agility and hybrid PQC deployment secure sensitive corporate archives against future quantum decryption threats." }
                ]
            }
        ];
    }

    // ----------------------------------------------------------------------
    // 5. BUSINESS, FINANCE, MARKETING & HR BLOCK
    // 15 Base Questions (Difficulty 1-3) + 3 Bonus Questions (Difficulty 4) = 18 Total
    // ----------------------------------------------------------------------
    function getBusinessBlock(titleAr, titleEn) {
        return [
            {
                id: "biz_q1", difficulty: 1, stars: "★☆☆☆", dimension: "logic",
                q_ar: `عند البدء في تخطيط استراتيجية العمل أو مشروع جديد كـ ${titleAr}، ما هي خطوتك الأولى؟`,
                q_en: `When initiating a new business strategy or project as a ${titleEn}, what is your first step?`,
                answers: [
                    { text_ar: "البدء الفوري في التنفيذ وتعديل المسار بناءً على النتائج المباشرة.", text_en: "Starting immediate execution and adapting as results come in.", points: 1 },
                    { text_ar: "استخدام النماذج السابقة المشابهة لتطبيقها على المشروع الحالي لتوفير الوقت.", text_en: "Adapting prior project templates to save initial planning time.", points: 2 },
                    { text_ar: "دراسة السوق، تحديد الجمهور المستهدف، وتحليل المنافسين بعناية.", text_en: "Conducting market research, defining target audiences, and analyzing competitors.", points: 3 },
                    { text_ar: "إجراء تحليل متكامل (SWOT & Feasibility Study)، تحديد المؤشرات الرئيسية (KPIs)، وصياغة خريطة العمل.", text_en: "Conducting a comprehensive SWOT analysis, setting clear KPIs, and crafting a strategic roadmap.", points: 5, hr_exp_ar: "تحليل SWOT وتحديد الـ KPIs يضمنان تحقيق أهداف الأعمال بأقل نسبة مخاطرة.", hr_exp_en: "SWOT analysis and clear KPI targets mitigate business risks and ensure high ROI." }
                ]
            },
            {
                id: "biz_q2", difficulty: 1, stars: "★☆☆☆", dimension: "logic",
                q_ar: `كيف تدير الميزانية والموارد المتاحة كـ ${titleAr} لضمان عدم تجاوز التكاليف المعتمدة؟`,
                q_en: `How do you manage budget allocation and resources as a ${titleEn} to prevent cost overruns?`,
                answers: [
                    { text_ar: "متابعة النفقات في نهاية كل شهر ورفع تقرير بالإجمالي للمسؤولين.", text_en: "Reviewing monthly expenses at end-of-period and submitting summaries.", points: 1 },
                    { text_ar: "تخصيص ميزانية احتياطية لتغطية المصاريف الطارئة أثناء العمل.", text_en: "Maintaining contingency buffers to absorb unplanned expenses.", points: 2 },
                    { text_ar: "توزيع التكاليف على بند المشاريع وتتبع الفواتير دورياً مع الموردين.", text_en: "Tracking project line items and reconciling vendor invoices regularly.", points: 3 },
                    { text_ar: "تطبيق التخطيط المالي الدقيق، متابعة معدل الاستهلاك (Burn Rate)، والتحكم في التكاليف التشغيلية (OpEx & CapEx).", text_en: "Enforcing financial controls, monitoring Burn Rate metrics, and optimizing OpEx vs CapEx allocation.", points: 5, hr_exp_ar: "ضبط الـ Burn Rate والموازنة الدقيقة يحميان سيولة المؤسسة واستمرارية المشاريع.", hr_exp_en: "Monitoring Burn Rate and strict financial controls preserve corporate liquidity." }
                ]
            },
            {
                id: "biz_q3", difficulty: 1, stars: "★☆☆☆", dimension: "mindset",
                q_ar: `كيف تبني بيئة عمل محفزة وتعزز مشاركة الموظفين (Employee Engagement) كـ ${titleAr}؟`,
                q_en: `How do you foster a high-performance culture and elevate employee engagement as a ${titleEn}?`,
                answers: [
                    { text_ar: "تقديم مكافآت مالية إضافية في نهاية العام لأصحاب الإنجازات العالية.", text_en: "Distributing annual financial bonuses to top individual performers.", points: 1 },
                    { text_ar: "تنظيم أنشطة ترفيهية دورية وجلسات شكر جماعية لتعزيز الروح المعنوية.", text_en: "Hosting periodic team bonding events and appreciation sessions.", points: 2 },
                    { text_ar: "تقديم التقدير المعنوي، توفير فرص التطوير المهني، وإتاحة مرونة العمل.", text_en: "Recognizing achievements, offering professional development paths, and providing work flexibility.", points: 3 },
                    { text_ar: "تطبيق نظام التقدير المستمر، خطط النمو المهني الفردية، وقياس مؤشر رضا الموظفين (eNPS) بانتظام.", text_en: "Architecting continuous recognition programs, tailored career progression paths, and monitoring eNPS scores.", points: 5, hr_exp_ar: "خطط النمو المهني ومتابعة مؤشر eNPS يرفعان معدل استبقاء الكفاءات وإنتاجيتها.", hr_exp_en: "Tailored career paths and continuous engagement feedback minimize turnover and boost performance." }
                ]
            },
            {
                id: "biz_q4", difficulty: 2, stars: "★★☆☆", dimension: "mindset",
                q_ar: `كيف تتصرف كـ ${titleAr} عند التعامل مع عميل أو طرف رئيسي غير راضٍ عن النتائج المقدمة؟`,
                q_en: `How do you resolve dissatisfaction from a major client or key stakeholder as a ${titleEn}?`,
                answers: [
                    { text_ar: "توضيح شروط العقد وبنود التسليم المتفق عليها مسبقاً للدفاع عن موقفك.", text_en: "Referencing contractual terms and sign-offs to justify current deliverables.", points: 1 },
                    { text_ar: "تقديم خصم أو خدمة إضافية مجانية لاستعادة رضا العميل سريعاً.", text_en: "Offering goodwill discounts or complimentary services to appease the client.", points: 2 },
                    { text_ar: "عقد اجتماع فوري للاستماع لملاحظات العميل واقتراح تعديلات مرنة.", text_en: "Scheduling a sync meeting to listen to feedback and offer adjustments.", points: 3 },
                    { text_ar: "الاستماع الفعال، إجراء تحليل فجوة الاحتياجات (Gap Analysis)، وتعديل خطة التسليم بما يحقق القيمة دون الإضرار بالربحية.", text_en: "Active listening, conducting a Gap Analysis, and realigning deliverables to ensure value without eroding margins.", points: 5, hr_exp_ar: "تحليل الفجوة والحل التشاركي يحولان العميل الغاضب إلى شريك دائم للمؤسسة.", hr_exp_en: "Conducting gap analysis and collaborative realignment restores client trust and protects relationship lifetime value." }
                ]
            },
            {
                id: "biz_q5", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `كيف تقيس كـ ${titleAr} نجاح المبادرات والحملات أو القرارات الاستثمارية في مجال عملك؟`,
                q_en: `How do you measure the success and return on investment (ROI) of business initiatives as a ${titleEn}?`,
                answers: [
                    { text_ar: "الاعتماد على انطباعات الفريق وملاحظات الإدارة الإيجابية حول النتائج.", text_en: "Relying on qualitative team impressions and management feedback.", points: 1 },
                    { text_ar: "مقارنة إجمالي الإيرادات أو المبيعات قبل وبعد المبادرة بشكل عام.", text_en: "Comparing macro sales numbers before and after launch.", points: 2 },
                    { text_ar: "تتبع مؤشرات النمو ونسبة رضا العملاء عبر الاستبيانات الدورية.", text_en: "Tracking growth metrics and customer satisfaction net scores (NPS).", points: 3 },
                    { text_ar: "قياس العائد على الاستثمار (ROI)، تكلفة الاستحواذ (CAC)، القيمة الممتدة للعميل (LTV)، وتحليل لوحات البيانات (BI).", text_en: "Measuring precise ROI, Customer Acquisition Cost (CAC), Lifetime Value (LTV), and leverage BI dashboards.", points: 5, hr_exp_ar: "ربط القرارات بمؤشرات CAC و LTV و ROI يضمن النمو المستدام والربحية الفعلية.", hr_exp_en: "Rigorous evaluation of CAC, LTV, and ROI metrics guarantees data-driven profitability." }
                ]
            },
            {
                id: "biz_q6", difficulty: 2, stars: "★★☆☆", dimension: "logic",
                q_ar: `عند استقطاب وتعيين الكفاءات العالية (Talent Acquisition) كـ ${titleAr}، ما هي استراتيجية التقييم لديك؟`,
                q_en: `Architecting executive talent acquisition and candidate evaluation strategies as a ${titleEn}, what is your workflow?`,
                answers: [
                    { text_ar: "الاعتماد على سابقة الخبرة في السيرة الذاتية والمظهر العام في المقابلة.", text_en: "Relying on resume credentials and interview gut feeling.", points: 1 },
                    { text_ar: "طرح أسئلة عامة حول التخصص والتأكد من المهارات اللغوية والتواصل.", text_en: "Asking standard domain questions and testing communication fluency.", points: 2 },
                    { text_ar: "استخدام مقابلات مبنية على السلوك (Behavioral Interviews) وتقييم التوافق الثقافي.", text_en: "Conducting Behavioral Interviews and assessing cultural fit.", points: 3 },
                    { text_ar: "تطبيق التقييم المبني على الكفايات (Competency-Based Scoring)، المقابلة التفاعلية، وتقييم المهارات الفنية والشخصية بمؤشرات محددة.", text_en: "Enforcing Structured Competency-Based Evaluation, practical case study assessments, and 3-dimensional scorecards.", points: 5, hr_exp_ar: "التقييم المبني على الكفايات وبطاقات القياس يضمنان تعيين العناصر الأنسب وتجنب أخطاء التوظيف.", hr_exp_en: "Structured competency evaluation and objective scorecards eliminate hiring bias and elevate talent quality." }
                ]
            },
            {
                id: "biz_q7", difficulty: 2, stars: "★★☆☆", dimension: "logic",
                q_ar: `كيف تدير المفاوضات التجارية والعقود كـ ${titleAr} لتحقيق أقصى مكسب للمؤسسة؟`,
                q_en: `Leading high-stakes commercial negotiations as a ${titleEn}, how do you ensure win-win outcomes?`,
                answers: [
                    { text_ar: "التقديم المبكر للتنازلات لضمان التوقيع المباشر على الصفقة.", text_en: "Offering upfront price concessions to close deals quickly.", points: 1 },
                    { text_ar: "التمسك بموقف صلب للحصول على أفضل سعر وأعلى شروط لصالح شركتك.", text_en: "Holding firm positions to maximize financial gain for your firm.", points: 2 },
                    { text_ar: "دراسة احتياجات الطرف الآخر والبحث عن نقاط التوافق المشترك.", text_en: "Analyzing opponent interests and finding middle-ground compromises.", points: 3 },
                    { text_ar: "تطبيق خيار البديل الأفضل للاتفاق (BATNA)، التركيز على القيمة بدلاً من السعر، وصياغة عقود مرنة تحقق المنفعة المتبادلة.", text_en: "Establishing clear BATNA boundaries, focusing on mutual value creation, and structuring win-win contractual terms.", points: 5, hr_exp_ar: "اعتماد منهجية BATNA يمنحك قوة تفاوضية عالية ويحمي أرباح المؤسسة.", hr_exp_en: "Defining a strong BATNA and focusing on value exchange creates sustainable commercial partnerships." }
                ]
            },
            {
                id: "biz_q8", difficulty: 3, stars: "★★★☆", dimension: "logic",
                q_ar: `عند تقييم مخاطر التوسع أو إطلاق خدمة جديدة كـ ${titleAr}، كيف تبني مصفوفة إدارة المخاطر؟`,
                q_en: `Evaluating expansion risks or launching a new service line as a ${titleEn}, how do you construct a Risk Matrix?`,
                answers: [
                    { text_ar: "تحديد المخاطر الواردة وتجنب الخيارات ذات الخطورة العالية فقط.", text_en: "Identifying obvious threats and avoiding high-risk options.", points: 1 },
                    { text_ar: "وضع استراتيجية تخفيف للمخاطر الأكثر احتمالاً للحدوث.", text_en: "Drafting mitigation plans for top probable operational risks.", points: 2 },
                    { text_ar: "تقييم أثر المخاطر على الميزانية والجدول الزمني وصياغة خطط طوارئ.", text_en: "Assessing budget and timeline impact metrics to outline contingency scenarios.", points: 3 },
                    { text_ar: "بناء مصفوفة مخاطر متكاملة (Risk Matrix: Likelihood vs Impact)، تحديد خطط الاحتواء، وتخصيص احتياطي المخاطر.", text_en: "Architecting a quantitative Risk Matrix (Likelihood vs Impact), setting containment triggers, and reserving risk buffers.", points: 5, hr_exp_ar: "مصفوفة المخاطر الكمية تمنح الشركة الجرأة الاستثمارية المحسوبة دون مفاجآت.", hr_exp_en: "A quantitative Risk Matrix empowers informed strategic expansion while safeguarding assets." }
                ]
            },
            {
                id: "biz_q9", difficulty: 3, stars: "★★★☆", dimension: "mindset",
                q_ar: `كيف تدير الأزمات الإعلامية أو السمعة المؤسسية (PR Crisis Management) كـ ${titleAr} عند وقوع مشكلة؟`,
                q_en: `Managing a high-profile public relations (PR) crisis as a ${titleEn}, what messaging strategy do you execute?`,
                answers: [
                    { text_ar: "تجاهل المشكلة مؤقتاً لحين انحسار التغطية الإعلامية.", text_en: "Ignoring social media noise until media attention wanes.", points: 1 },
                    { text_ar: "نشر بيان صحفي سريع ينفي المشكلة ويؤكد التزام الشركة بالمعايير.", text_en: "Issuing a quick press release denying issues and asserting standards.", points: 2 },
                    { text_ar: "الاعتذار الصريح وتوضيح خطوات الحل الفورية لمعالجة الأضرار.", text_en: "Issuing a transparent apology and detailing corrective action plans.", points: 3 },
                    { text_ar: "تفعيل غرفة أزمات العلاقات العامة، التواصل الشفاف السريع، تحمل المسؤولية، وعرض خطة إصلاح قابلة للقياس.", text_en: "Mobilizing a PR crisis response cell, communicating transparently, owning accountability, and publishing verifiable remediation metrics.", points: 5, hr_exp_ar: "الاستجابة السريعة الشفافة وتحديد الخطوات العلاجية يحميان سمعة المؤسسة ويعيدان الثقة.", hr_exp_en: "Transparent crisis mobilization and accountable action restore public trust and mitigate brand damage." }
                ]
            },
            {
                id: "biz_q10", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند اتخاذ قرارات التخصيص التسويقي أو مبيعات المنتجات كـ ${titleAr}، كيف تستغل بيانات ذكاء الأعمال (BI)?`,
                q_en: `Utilizing Business Intelligence (BI) and customer data analytics as a ${titleEn}, how do you optimize market positioning?`,
                answers: [
                    { text_ar: "الاعتماد على التقارير الشهرية التقليدية لتحديد المنتجات الأكثر مبيعاً.", text_en: "Relying on standard monthly sales reports to identify top products.", points: 1 },
                    { text_ar: "تقسيم العملاء إلى شرائح عامة بناءً على الموقع الجغرافي والعمر.", text_en: "Segmenting audiences using broad demographic and geographic buckets.", points: 2 },
                    { text_ar: "استخدام أدوات التحليل لتحديد نمط سلوك الشراء واستهداف الشرائح مربحة.", text_en: "Leveraging analytics to identify purchase behavioral trends and profitable segments.", points: 3 },
                    { text_ar: "تجميع البيانات في لوحات تحكم لحظية (Real-time Dashboards)، تقسيم العملاء السلوكي الدقيق (RFM Analysis)، والتنبؤ بسلوك الشراء.", text_en: "Building real-time BI dashboards, executing RFM customer segmentation, and deploying predictive churn modeling.", points: 5, hr_exp_ar: "تحليل RFM والتنبؤ بالسلوك يرفع مبيعات المؤسسة ويزيد القيمة الممتدة للعميل LTV.", hr_exp_en: "RFM behavioral segmentation and predictive analytics maximize marketing ROI and LTV retention." }
                ]
            },
            {
                id: "biz_q11", difficulty: 3, stars: "★★★☆", dimension: "logic",
                q_ar: `كيف تصمم سلاسل الإمداد والتوريد (Supply Chain Optimization) كـ ${titleAr} لضمان مرونة التشغيل وتقليل الهدر؟`,
                q_en: `Optimizing supply chain operations and inventory holding costs as a ${titleEn}, what logistics model do you implement?`,
                answers: [
                    { text_ar: "تخزين كميات ضخمة من البضائع لتفادي أي انقطاع مفاجئ في المخزون.", text_en: "Stockpiling high inventory volumes to absorb supply shortages.", points: 1 },
                    { text_ar: "الاعتماد على مورد واحد رئيسي لكل خامة للحصول على أفضل الخصومات.", text_en: "Sourcing strictly from single primary vendors to maximize volume discounts.", points: 2 },
                    { text_ar: "تنويع الموردين وتطبيق متابعة دورية لمعدل دوران المخزون.", text_en: "Diversifying suppliers and monitoring inventory turnover metrics.", points: 3 },
                    { text_ar: "تطبيق التوريد الآني (Just-In-Time)، تنويع قاعدة الموردين، واستخدام التنبؤ بالطلب القائم على البيانات.", text_en: "Deploying Just-In-Time (JIT) logistics, multi-sourcing strategies, and data-driven demand forecasting.", points: 5, hr_exp_ar: "نظام JIT والتنبؤ بالطلب يقللان رأس المال المجمّد في المخازن مع تلبية طلبات السوق.", hr_exp_en: "Just-In-Time inventory management paired with predictive demand forecasting reduces working capital friction." }
                ]
            },
            {
                id: "biz_q12", difficulty: 3, stars: "★★★☆", dimension: "mindset",
                q_ar: `كيف تضمن كـ ${titleAr} بناء خطة تعاقب الوظائف والقيادات (Succession Planning) داخل المؤسسة؟`,
                q_en: `Structuring executive succession planning and leadership development pipelines as a ${titleEn}, what framework do you build?`,
                answers: [
                    { text_ar: "اختيار البدلاء الفوريين من بين الموظفين الأكثر أقدمية في القسم.", text_en: "Appointing immediate successors based strictly on tenure.", points: 1 },
                    { text_ar: "تحديد قائمة بالموظفين المتميزين وتوفير التدريب عند رغبتهم.", text_en: "Maintaining high-performer shortlists and offering voluntary training.", points: 2 },
                    { text_ar: "تحديد المهارات القيادية المطلوبة وتكليف المرشحين بمهام إشرافية.", text_en: "Identifying critical competencies and assigning candidate leadership stretch tasks.", points: 3 },
                    { text_ar: "تطبيق شبكة تقييم الأداء والجهوزية (9-Box Grid)، وتدريب الصف الثاني، وتصميم مسارات قيادية واضحة.", text_en: "Architecting a 9-Box Talent Grid, structured mentorship, and targeted executive readiness programs.", points: 5, hr_exp_ar: "استخدام شبكة 9-Box Grid وتدريب الصف الثاني يضمنان استقرار المؤسسة عند مغادرة القيادات.", hr_exp_en: "9-Box Grid talent mapping paired with readiness development secures seamless leadership continuity." }
                ]
            },
            {
                id: "biz_q13", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند صياغة استراتيجيات التسعير (Pricing Strategies) كـ ${titleAr} للمنتجات والخدمات الجديدة، كيف تحدد القيمة؟`,
                q_en: `Designing strategic product and service pricing models as a ${titleEn}, what pricing architecture do you leverage?`,
                answers: [
                    { text_ar: "حساب التكلفة الفعلية وإضافة نسبة ربح ثابتة (Cost-Plus Pricing).", text_en: "Calculating total cost of production plus a fixed margin percentage.", points: 1 },
                    { text_ar: "تقليد أسعار المنافسين المباشرين في السوق لضمان المنافسة السعرية.", text_en: "Matching direct competitor pricing points to maintain parity.", points: 2 },
                    { text_ar: "تقديم أسعار منخفضة جداً في البداية لجذب أكبر عدد من العملاء.", text_en: "Using penetration pricing with low entry rates to gain market share.", points: 3 },
                    { text_ar: "تطبيق التسعير القائم على القيمة المدركة (Value-Based Pricing)، إجراء اختبارات المرونة السعرية، وصياغة باقات متعددة المستويات.", text_en: "Executing Value-Based Pricing, testing price elasticity curves, and structuring tiered value bundles.", points: 5, hr_exp_ar: "التسعير القائم على القيمة يضمن أقصى هوامش ربحية ويبرز تميز المنتج في نظر العملاء.", hr_exp_en: "Value-Based pricing maximizes profit margins by capturing customer willingness-to-pay." }
                ]
            },
            {
                id: "biz_q14", difficulty: 3, stars: "★★★☆", dimension: "logic",
                q_ar: `كيف تدير عملية التحول الرقمي وتطبيق أنظمة التخطيط المؤسسي (ERP / CRM System Rollout) كـ ${titleAr}؟`,
                q_en: `Leading enterprise digital transformation and ERP/CRM system implementations as a ${titleEn}, how do you ensure seamless adoption?`,
                answers: [
                    { text_ar: "فرض النظام الجديد مباشرة على الموظفين واستبدال الأنظمة القديمة فوراً.", text_en: "Mandating immediate cutover to the new ERP system across all teams.", points: 1 },
                    { text_ar: "توفير الدليل التشغيلي للنظام الجديد وتنظيم ورش عمل عامة.", text_en: "Distributing software manuals and running general user training.", points: 2 },
                    { text_ar: "التطبيق التدريجي عبر الأقسام مع إجراء اختبارات مطابقة البيانات.", text_en: "Phasing module rollouts by department alongside data validation testing.", points: 3 },
                    { text_ar: "تطوير خطة إدارة التغيير (Change Management)، تنقية البيانات التاريخية، الإشراك المباشر للمستخدمين الفاعلين، والتطبيق المرحلة بدعم كامل.", text_en: "Formulating Change Management roadmaps, data cleansing protocols, champion user enablement, and phased go-lives.", points: 5, hr_exp_ar: "إدارة التغيير وتنقية البيانات يمنعان ارتباك التشغيل ويضمنان نجاح الاستثمار الرقمي.", hr_exp_en: "Structured change management and clean data migration guarantee enterprise system adoption." }
                ]
            },
            {
                id: "biz_q15", difficulty: 3, stars: "★★★☆", dimension: "mindset",
                q_ar: `كيف تضمن الامتثال للحوكمة المؤسسية والمسؤولية الاجتماعية (ESG Governance) كـ ${titleAr}؟`,
                q_en: `Integrating Environmental, Social, and Governance (ESG) frameworks as a ${titleEn}, how do you deliver impact?`,
                answers: [
                    { text_ar: "المشاركة في المبادرات التبرعية وتنظيم فعاليات خيرية موسيقية.", text_en: "Sponsoring community charity events and volunteer days.", points: 1 },
                    { text_ar: "إصدار تقرير مسؤولية مجتمعية سنوي لتعزيز الصورة الإعلامية.", text_en: "Publishing annual CSR marketing brochures.", points: 2 },
                    { text_ar: "التأكد من التزام الشركة بالمعايير البيئية والعمالية القانونية.", text_en: "Auditing compliance with local environmental and employment laws.", points: 3 },
                    { text_ar: "دمج معايير ESG في الاستراتيجية التشغيلية، قياس الأثر البيئي والحوكمة بالأرقام، وإصدار تقارير شفافة معتمدة.", text_en: "Embedding ESG metrics into core business strategy, auditing carbon footprint & governance transparently, and reporting to GRI standards.", points: 5, hr_exp_ar: "دمج معايير ESG يرفع القيمة الاستثمارية للشركة ويجذب المستثمرين والمؤسسات العالمية.", hr_exp_en: "Embedding ESG into core strategy elevates investor confidence and ensures sustainable enterprise value." }
                ]
            },
            {
                id: "biz_q16", difficulty: 4, stars: "★★★★", dimension: "logic",
                q_ar: `عند قيادة عملية إعادة هيكلة أو تحول استراتيجي في المؤسسة كـ ${titleAr}، كيف تضمن الاستمرارية والربحية؟`,
                q_en: `Leading organizational restructuring or strategic transformation as a ${titleEn}, how do you sustain productivity and margins?`,
                answers: [
                    { text_ar: "إيقاف المشاريع غير الضرورية والتركيز فقط على الأنشطة المدرة للدخل السريع.", text_en: "Halting non-essential projects and focusing solely on immediate cash-flow drivers.", points: 1 },
                    { text_ar: "عقد جلسات توجيهية للفرق وتحديد الأدوار الجديدة بوضوح لمنع الارتباك.", text_en: "Hosting town halls and clarifying new operational responsibilities.", points: 2 },
                    { text_ar: "إعادة توزيع الموارد البشرية والمالية بحسب الأولويات الجديدة وتقليل الهدر.", text_en: "Reallocating talent and budget according to revised corporate priorities.", points: 3 },
                    { text_ar: "تطبيق إطار التحول الاستراتيجي، التواصل الشفاف مع الإدارة والفرق، وربط الأهداف بمؤشرات الأداء التكتيكية (OKRs).", text_en: "Executing strategic transformation frameworks, transparent stakeholder engagement, and cascading OKRs.", points: 5, hr_exp_ar: "ربط التحول المؤسسي بإطار الـ OKRs يضمن مشاركة جميع الموظفين في تحقيق الهدف الاستراتيجي.", hr_exp_en: "Cascading OKRs across restructuring phases aligns organizational energy and sustains performance." }
                ]
            },
            {
                id: "biz_q17", difficulty: 4, stars: "★★★★", dimension: "logic",
                q_ar: `عند تقييم عمليات الاستحواذ والاندماج (Mergers & Acquisitions - M&A) كـ ${titleAr}، كيف تجري الفحص النافي للجهالة (Due Diligence)؟`,
                q_en: `Conducting due diligence for complex M&A transactions as a ${titleEn}, how do you evaluate synergy risks?`,
                answers: [
                    { text_ar: "مراجعة القوائم المالية الأخيرة ومقارنة سعر السهم بالقيم السوقية.", text_en: "Reviewing recent financial statements and market share valuation metrics.", points: 1 },
                    { text_ar: "استعانة بمكاتب مراجعة خارجية لتقديم تقرير التقييم المالي والقانوني.", text_en: "Hiring external audit firms for standard financial and legal due diligence.", points: 2 },
                    { text_ar: "تحليل القوائم المالية، الأصول التقنية، والالتزامات القانونية بعناية.", text_en: "Analyzing financial balances, tech stack IP assets, and legal liabilities.", points: 3 },
                    { text_ar: "إجراء فحص شامل (Financial, Operational, Tech & Cultural Due Diligence)، تقييم التكامل، وحساب التكاليف الخفية.", text_en: "Executing comprehensive 4-dimensional Due Diligence (Financial, Tech, Legal, Cultural), modeling integration synergies, and auditing post-merger integration risks.", points: 5, hr_exp_ar: "الفحص الشامل وتقييم التوافق الثقافي والتقني يضمنان نجاح الدمج وتحقيق العوائد المرجوة.", hr_exp_en: "Multi-dimensional due diligence modeling integration synergies prevents M&A failure." }
                ]
            },
            {
                id: "biz_q18", difficulty: 4, stars: "★★★★", dimension: "logic",
                q_ar: `كيف تدير معضلات تخصيص رأس المال والحوكمة المالية في الأزمات الاقتصادية الحادة (Stagflation / Recession) كـ ${titleAr}؟`,
                q_en: `Navigating capital allocation and financial governance during macro-economic stagflation as a ${titleEn}, what strategic moves do you execute?`,
                answers: [
                    { text_ar: "تجميد الإنفاق وتأجيل كافة المشروعات الاستثمارية لحين تعافي السوق.", text_en: "Freezing all capital expenditure and holding cash reserves.", points: 1 },
                    { text_ar: "تخفيض التكاليف التشغيلية بنسبة ثابتة عبر كافة الأقسام بدون استثناء.", text_en: "Applying uniform budget cuts across all business departments.", points: 2 },
                    { text_ar: "إعادة التحوط المالي والتأكد من توافر التدفقات النقدية التشغيلية.", text_en: "Hedging financial exposure and securing core operating cash flow lines.", points: 3 },
                    { text_ar: "إعادة توزيع التدفقات النقدية بحسب الأولوية، التحوط ضد التضخم، حماية الهوامش التشغيلية، والاستثمار في الفرص المستهدفة ذات الأثر العالي.", text_en: "Re-architecting capital deployment, hedging inflationary risks, protecting gross margins, and opportunistically acquiring distressed assets.", points: 5, hr_exp_ar: "إعادة توزيع رأس المال والتحوط المالي يحولان الأزمات الاقتصادية لفرص استراتيجية للتوسع.", hr_exp_en: "Agile capital re-allocation and strategic hedging protect profit margins while capturing counter-cyclical growth." }
                ]
            }
        ];
    }

    // ----------------------------------------------------------------------
    // 6. GENERAL TECH & SUPPORT BLOCK
    // 15 Base Questions (Difficulty 1-3) + 3 Bonus Questions (Difficulty 4) = 18 Total
    // ----------------------------------------------------------------------
    function getGeneralTechBlock(titleAr, titleEn) {
        return [
            {
                id: "gt_q1", difficulty: 1, stars: "★☆☆☆", dimension: "logic",
                q_ar: `عند استلام تذكرة دعم أو مشكلة تقنية غامضة من أحد المستخدمين كـ ${titleAr}، كيف تبدأ التشخيص؟`,
                q_en: `When receiving an ambiguous support ticket or technical issue as a ${titleEn}, how do you begin troubleshooting?`,
                answers: [
                    { text_ar: "طلب إعادة محاولة التشغيل ومتابعة التذكرة إذا تكررت المشكلة.", text_en: "Asking the user to retry the operation and reopen if persistent.", points: 1 },
                    { text_ar: "البحث في الأسئلة الشائعة وتطبيق الحل الأكثر شيوعاً للمشكلة.", text_en: "Consulting knowledge bases for common workarounds.", points: 2 },
                    { text_ar: "جمع تفاصيل النظام، بيئة التشغيل، ورسائل الأخطاء بدقة لتحديد السبب.", text_en: "Gathering system environment details and error logs to isolate root cause.", points: 3 },
                    { text_ar: "اتباع منهجية التشخيص التدريجي (Root Cause Analysis)، توثيق خطوات إعادة التكرار، وتحديث دليل الحلول.", text_en: "Applying Root Cause Analysis, documenting precise reproduction steps, and updating knowledge base documentation.", points: 5, hr_exp_ar: "التشخيص المنظم وتوثيق الخطوات يمنعان تكرار الشكاوى ويوفران وقت فريق الدعم.", hr_exp_en: "Structured Root Cause Analysis and knowledge base updates cut resolution times and repeat tickets." }
                ]
            },
            {
                id: "gt_q2", difficulty: 1, stars: "★☆☆☆", dimension: "tech",
                q_ar: `كيف تضمن كـ ${titleAr} كتابة توثيق واضح ومحدث للأنظمة والأدوات التقنية؟`,
                q_en: `How do you ensure clear and continuously updated technical documentation as a ${titleEn}?`,
                answers: [
                    { text_ar: "كتابة التعليقات داخل الشفرة البرمجية فقط عند الانتهاء من العمل.", text_en: "Writing inline code comments only upon completing feature tasks.", points: 1 },
                    { text_ar: "تحديث وثائق المشروع عند طلب الفحص أو الانضمام لموظف جديد.", text_en: "Updating documentation during onboarding or audit compliance requests.", points: 2 },
                    { text_ar: "استخدام منصات التوثيق التشاركية وإنشاء أدلة تشغيل مستمرة.", text_en: "Leveraging wiki platforms and maintaining operational runbooks.", points: 3 },
                    { text_ar: "اعتماد التوثيق ككود (Docs-as-Code)، أتمتة توليد مراجع الـ API، والربط بطلبات الدمج.", text_en: "Enforcing Docs-as-Code workflows, automated API reference generation, and locking PR approvals on doc updates.", points: 5, hr_exp_ar: "منهجية Docs-as-Code تضمن تحديث التوثيق تلقائياً مع كل شفرة جديدة دون إهمال.", hr_exp_en: "Docs-as-Code automation guarantees that documentation stays synchronized with codebase changes." }
                ]
            },
            {
                id: "gt_q3", difficulty: 1, stars: "★☆☆☆", dimension: "mindset",
                q_ar: `كيف تتعامل كـ ${titleAr} مع التغييرات المستمرة في متطلبات المشروع أثناء العمل؟`,
                q_en: `How do you adapt to shifting project requirements and scope changes as a ${titleEn}?`,
                answers: [
                    { text_ar: "الاعتراض على التعديلات لحين إنجاز النسخة الحالية المعالم.", text_en: "Resisting mid-sprint scope changes to protect planned deliverables.", points: 1 },
                    { text_ar: "تنفيذ التعديلات الجديدة مباشرة مع إبلاغ الفريق بالتأخير المتوقع.", text_en: "Absorbing requested scope changes immediately and absorbing delays.", points: 2 },
                    { text_ar: "تقييم أثر التعديلات على الجدول الزمني وتنسيق الأولويات مع الإدارة.", text_en: "Evaluating scope change impacts on timelines and re-aligning priorities.", points: 3 },
                    { text_ar: "استخدام منهجية أجايل (Agile Change Control)، إعادة تقدير الأثر الفني والزمني، وتعديل خريطة العمل.", text_en: "Applying Agile Change Control frameworks, re-estimating story points, and transparently adjusting roadmaps.", points: 5, hr_exp_ar: "منهجية أجايل تتيح مرونة التعديل مع حماية الجدول الزمني وجودة المخرجات.", hr_exp_en: "Agile change control manages shifting requirements effectively without compromising velocity." }
                ]
            },
            {
                id: "gt_q4", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `كيف تضمن كـ ${titleAr} جودة التسليمات والحد من الأخطاء أثناء فترات إطلاق الميزات الجديدة؟`,
                q_en: `How do you guarantee deliverable quality and minimize regressions during release cycles as a ${titleEn}?`,
                answers: [
                    { text_ar: "فحص الوظائف الرئيسية يدوياً قبل الإطلاق المباشر للمستخدمين.", text_en: "Performing manual smoke testing prior to live deployment.", points: 1 },
                    { text_ar: "إعداد خطة اختبار تغطي حالات الاستخدام الشائعة وتوثيق النتائج.", text_en: "Designing test plans covering primary user happy paths.", points: 2 },
                    { text_ar: "استخدام أدوات الاختبار الآلي المتاحة ومتابعة التغطية البرمجية.", text_en: "Executing automated test scripts and monitoring code coverage metrics.", points: 3 },
                    { text_ar: "تطبيق استراتيجية اختبار متكاملة (Unit, Integration & E2E Testing)، أتمتة الفحص في CI/CD، وتوثيق القبول.", text_en: "Architecting end-to-end test pyramids (Unit, Integration, E2E), CI/CD test automation, and clear acceptance criteria.", points: 5, hr_exp_ar: "أتمتة الفحص الشامل في CI/CD يحمي بيئة العمل الحية من التدهور والأخطاء المفاجئة.", hr_exp_en: "Automated test pyramid integration into CI/CD pipelines ensures robust release quality." }
                ]
            },
            {
                id: "gt_q5", difficulty: 2, stars: "★★☆☆", dimension: "logic",
                q_ar: `عند إدارة الأصول التقنية والأجهزة في المؤسسة (IT Asset Management) كـ ${titleAr}، ما هو أسلوبك؟`,
                q_en: `Managing enterprise IT hardware, software licenses, and asset lifecycles as a ${titleEn}, how do you maintain control?`,
                answers: [
                    { text_ar: "تسجيل الأجهزة في ملف اكسل وتحديثه عند طلب الشراء أو التبديل.", text_en: "Tracking physical assets in spreadsheets updated during procurement.", points: 1 },
                    { text_ar: "استخدام قاعدة بيانات مركزية لتتبع الأجهزة والمسؤولين عنها.", text_en: "Maintaining a central asset database for inventory lookups.", points: 2 },
                    { text_ar: "تتبع تراخيص البرامج والأجهزة دورياً والتأكد من صلاحتها.", text_en: "Auditing software licenses and hardware warranty expirations regularly.", points: 3 },
                    { text_ar: "أتمتة إدارة الأصول (ITAM System)، التتبع التلقائي للبرمجيات، وتطبيق دورة حياة الأجهزة من الشراء حتى التكهين.", text_en: "Deploying automated ITAM systems, software license compliance tracking, and hardware lifecycle management.", points: 5, hr_exp_ar: "أتمتة نظام ITAM تمنع خرق التراخيص وتوفر نفقات الصلاحيات والمعدات المفقودة.", hr_exp_en: "Automated ITAM lifecycle tracking ensures legal license compliance and optimizes hardware spend." }
                ]
            },
            {
                id: "gt_q6", difficulty: 2, stars: "★★☆☆", dimension: "tech",
                q_ar: `كيف تضمن كـ ${titleAr} استمرار وتطبيق اتفاقيات مستوى الخدمة (SLAs & SLOs) مع العملاء والمستخدمين؟`,
                q_en: `How do you define and enforce Service Level Agreements (SLAs) and Objectives (SLOs) as a ${titleEn}?`,
                answers: [
                    { text_ar: "معالجة التذاكر بحسب أسبقية ورودها لنظام الدعم.", text_en: "Resolving incoming tickets chronologically.", points: 1 },
                    { text_ar: "تحديد زمن استجابة مستهدف ومتابعة التذاكر المتأخرة.", text_en: "Setting response target times and chasing breach tickets.", points: 2 },
                    { text_ar: "تصنيف المشكلات بحسب الأهمية وتحديد أوقات حل ملزمة لكل فئة.", text_en: "Categorizing incident severity tiers with defined resolution timeframes.", points: 3 },
                    { text_ar: "تحديد مؤشرات (SLIs/SLOs/SLAs) دقيقة، أتمتة تصعيد التنبيهات، وحساب ميزانية الأخطاء (Error Budgets).", text_en: "Structuring precise SLIs/SLOs/SLAs, automated escalation triggers, and error budget governance.", points: 5, hr_exp_ar: "متابعة الـ SLOs وميزانية الأخطاء يضمنان ثقة العملاء وجودة استجابة فريق الدعم.", hr_exp_en: "SLO metrics and error budget management balance delivery speed with guaranteed reliability." }
                ]
            },
            {
                id: "gt_q7", difficulty: 2, stars: "★★☆☆", dimension: "mindset",
                q_ar: `عند مواجهة عطل مفاجئ في أنظمة الاتصالات أو الشبكة المحلية كـ ${titleAr}، كيف تدير الدعم الميداني؟`,
                q_en: `Managing urgent infrastructure network or communications outages as a ${titleEn}, what is your incident procedure?`,
                answers: [
                    { text_ar: "إعادة تشغيل أجهزة الشبكة والانتظار لحين عودة الخدمة.", text_en: "Power-cycling network routers and observing link lights.", points: 1 },
                    { text_ar: "إرسال فني للموقع واختبار التوصيلات والمبدلات المباشرة.", text_en: "Dispatching technicians for physical cable and switch diagnostics.", points: 2 },
                    { text_ar: "تفعيل التوصيلات الاحتياطية وتتبع نقاط الفشل في المخطط.", text_en: "Flipping failover links and tracing link failure nodes.", points: 3 },
                    { text_ar: "تفعيل مسارات الشبكة الاحتياطية (Redundant Links)، تتبع التشخيص الآلي، والتواصل الفعال مع المستخدمين.", text_en: "Triggering automated redundant network failover, running diagnostic sweeps, and broadcasting status updates.", points: 5, hr_exp_ar: "التشغيل التلقائي للمسارات الاحتياطية يضمن استمرار العمل دون توقف التشغيل.", hr_exp_en: "Automated network failover and proactive incident status updates minimize office downtime." }
                ]
            },
            {
                id: "gt_q8", difficulty: 3, stars: "★★★☆", dimension: "mindset",
                q_ar: `كيف تضمن كـ ${titleAr} إزالة المعوقات وتحسين إنتاجية وسرعة تسليم الفريق (Sprint Velocity)؟`,
                q_en: `How do you optimize team sprint velocity and remove technical blockers as a ${titleEn}?`,
                answers: [
                    { text_ar: "تذكير الفريق بالمواعيد النهائية وتشجيعهم على زيادة ساعات العمل.", text_en: "Reminding team members of sprint deadlines and encouraging extra hours.", points: 1 },
                    { text_ar: "تنظيم اجتماعات الوقوف اليومية (Daily Standups) لمتابعة الإنجازات.", text_en: "Facilitating daily standup meetings to monitor task status.", points: 2 },
                    { text_ar: "تحليل العقبات الفنية وحلها فوراً بالتنسيق بين أعضاء الفريق.", text_en: "Analyzing technical blockers and coordinating resolution directly.", points: 3 },
                    { text_ar: "إدارة جلسات تحسين العمليات (Retrospectives)، تحديد الديون الفنية، وتذليل العقبات لتوفير بيئة عمل سلسة.", text_en: "Facilitating impactful Retrospectives, identifying workflow bottlenecks, and creating an unblocked delivery environment.", points: 5, hr_exp_ar: "إزالة العقبات وإدارة الـ Retrospective بفعالية يرفعان إنتاجية الفريق بروح إيجابية.", hr_exp_en: "Effective retrospective facilitation and obstacle removal drive continuous team velocity." }
                ]
            },
            {
                id: "gt_q9", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند إدارة بيئات الاختبار المتعددة (Dev, Staging & Prod Environments) كـ ${titleAr}، كيف تضمن مطابقتها؟`,
                q_en: `Managing multi-tier testing environments as a ${titleEn}, how do you eliminate configuration drift?`,
                answers: [
                    { text_ar: "تحديث بيئة Staging يدوياً عند كل إطلاق جديد للمنتج.", text_en: "Updating staging servers manually during major code releases.", points: 1 },
                    { text_ar: "مقارنة ملفات الإعدادات بين الخوادم وتعديل الفروق يدوياً.", text_en: "Diffing config files manually across environments.", points: 2 },
                    { text_ar: "استخدام الحاويات (Docker) لتوحيد بيئة التشغيل بين المطورين والخادم.", text_en: "Containerizing services with Docker for environmental parity.", points: 3 },
                    { text_ar: "اعتماد البنية التحتية ككود (Infrastructure as Code - IaC)، الحاوية الشاملة، وأتمتة مطابقة الإعدادات.", text_en: "Enforcing Infrastructure as Code (IaC - Terraform/Ansible), full containerization, and continuous drift detection.", points: 5, hr_exp_ar: "استخدام IaC والكونتنر يمنعان أي تفاوت بين بيئات التطوير والإنتاج نهائياً.", hr_exp_en: "Infrastructure as Code (IaC) and container orchestration totally eliminate environmental drift." }
                ]
            },
            {
                id: "gt_q10", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `كيف تصمم بنية مراقبة الأداء وتتبع الأخطاء اللحظي (APM & Logging) كـ ${titleAr}؟`,
                q_en: `Designing Application Performance Monitoring (APM) and centralized logging as a ${titleEn}, what architecture do you implement?`,
                answers: [
                    { text_ar: "حفظ سجلات الأخطاء في ملفات نصية محددة على كل خادم.", text_en: "Writing application logs to server text files.", points: 1 },
                    { text_ar: "استخدام مكتبات التتبع وتنبيه الفريق بالبريد عند وقوع خطأ كود.", text_en: "Integrating exception tracking tools that email developers on crash.", points: 2 },
                    { text_ar: "تجميع السجلات في منصة مركزية واستخدام لوحات متابعة الأخطاء.", text_en: "Aggregating logs into central platforms (ELK/Grafana) for dashboard visibility.", points: 3 },
                    { text_ar: "بناء نظام مراقبة مركزية (ELK/Datadog APM)، التتبع الموزع (OpenTelemetry)، وتحديات التنبيه الذكي.", text_en: "Deploying OpenTelemetry distributed tracing, centralized log ingestion, and anomaly-based alerting rules.", points: 5, hr_exp_ar: "التتبع الموزع عبر OpenTelemetry يكشف أسباب الأعطال المعقدة بين الخوادم فوراً.", hr_exp_en: "Distributed tracing via OpenTelemetry provides end-to-end visibility into cross-service latency." }
                ]
            },
            {
                id: "gt_q11", difficulty: 3, stars: "★★★☆", dimension: "logic",
                q_ar: `كيف تضمن الحفاظ على استمرارية الأعمال (Business Continuity Plan) كـ ${titleAr} عند انقطاع الخدمات الأساسية؟`,
                q_en: `Developing a comprehensive Business Continuity Plan (BCP) as a ${titleEn}, how do you structure crisis recovery?`,
                answers: [
                    { text_ar: "توفير أجهزة ومولدات كهربائية احتياطية في مقر المؤسسة.", text_en: "Maintaining backup power generators on company premises.", points: 1 },
                    { text_ar: "إعداد دليل الخطوات البديلة للعمل يدوياً عند توقف الأنظمة.", text_en: "Drafting manual fallback procedures for critical department workflows.", points: 2 },
                    { text_ar: "اختبار خطة الطوارئ سنوياً وتخصيص فرق دعم الاستجابة السريعة.", text_en: "Conducting annual BCP drills and maintaining response contact sheets.", points: 3 },
                    { text_ar: "بناء خطة استمرارية الأعمال (BCP)، أتمتة خوادم التعافي، إجراء اختبارات محاكاة الأزمات (Chaos Engineering)، وتقليل الـ RTO/RPO.", text_en: "Architecting BCP roadmaps, Chaos Engineering resilience drills, automated failover triggers, and strict RTO/RPO metrics.", points: 5, hr_exp_ar: "اختبارات Chaos Engineering وتحديد RTO/RPO يضمنان جاهزية المؤسسة التامة لأي كوارث طارئة.", hr_exp_en: "Chaos engineering drills and strict RTO/RPO targets ensure absolute organizational resilience under crises." }
                ]
            },
            {
                id: "gt_q12", difficulty: 3, stars: "★★★☆", dimension: "mindset",
                q_ar: `كيف تدير عملية تقييم واختيار البرمجيات والحلول الخارجية (Vendor Selection & Evaluation) كـ ${titleAr}؟`,
                q_en: `Leading third-party vendor selection and software procurement evaluations as a ${titleEn}, what scoring model do you use?`,
                answers: [
                    { text_ar: "اختيار الحل الأقل تكلفة مالية بين العروض المقدمة لتقليل ميزانية المشتريات.", text_en: "Selecting the lowest commercial bid to minimize upfront costs.", points: 1 },
                    { text_ar: "طلب تجربة مجانية واختبار سهولة الاستخدام بين الموظفين قبل الشراء.", text_en: "Running free trial tests and assessing UI simplicity among staff.", points: 2 },
                    { text_ar: "مقارنة الميزات الفنية، الدعم، والتكلفة في مصفوفة تقييم شاملة.", text_en: "Comparing technical features, support SLAs, and costs in a vendor matrix.", points: 3 },
                    { text_ar: "بناء مصفوفة تقييم متعددة المحاور (Technical, Security, SLA & Total Cost of Ownership - TCO)، وتجربة الحل بيئة العمل.", text_en: "Architecting a multi-criteria scoring matrix (Tech, Security, Compliance, TCO), evaluating vendor SLAs, and executing PoC validation.", points: 5, hr_exp_ar: "حساب التكلفة الإجمالية للتمتع بالخدمة (TCO) وفحص الأمان يمنعان التكاليف الخفية والمخاطر الفنية.", hr_exp_en: "Evaluating Total Cost of Ownership (TCO) alongside security compliance prevents costly long-term vendor lock-in." }
                ]
            },
            {
                id: "gt_q13", difficulty: 3, stars: "★★★☆", dimension: "tech",
                q_ar: `عند إدارة مشروعات تكنولوجيا المعلومات المعقدة (IT Project Management) كـ ${titleAr}، كيف تضمن الاتزان بين الجودة والوقت؟`,
                q_en: `Managing complex IT projects across cross-functional teams as a ${titleEn}, how do you govern the Iron Triangle (Scope, Cost, Time)?`,
                answers: [
                    { text_ar: "التركيز على الموعد النهائي فقط حتى لو تطلب الأمر تقليل مستويات الاختبار.", text_en: "Prioritizing deadlines strictly even if testing must be reduced.", points: 1 },
                    { text_ar: "إضافة موارد بشرية جديدة للمشروع لزيادة سرعة الإنجاز.", text_en: "Adding temporary headcount to accelerate late project streams.", points: 2 },
                    { text_ar: "متابعة خريطة الطريق وتعديل المهام بالتنسيق بين القادة الفنيين.", text_en: "Monitoring project roadmaps and adjusting scope with tech leads.", points: 3 },
                    { text_ar: "تطبيق إدارة المثلث الحديدي (Iron Triangle Balance)، تقسيم النطاق لمراحل مرنة (Agile Sprints)، وتتبع مؤشرات الإنجاز (EVM).", text_en: "Governing Iron Triangle trade-offs, managing Earned Value (EVM metrics), and timeboxing Agile deliverables.", points: 5, hr_exp_ar: "موازنة المثلث الحديدي وتتبع مؤشر EVM يضمنان تسليم المشاريع بالجودة المطلوبة وبدون تجاوز للميزانية.", hr_exp_en: "Rigorous Iron Triangle balance and Earned Value Management ensure predictable IT project delivery." }
                ]
            },
            {
                id: "gt_q14", difficulty: 3, stars: "★★★☆", dimension: "mindset",
                q_ar: `كيف تضمن أتمتة مهام الدعم الفني اليومية والعمليات الروتينية (IT Automation & Scripting) كـ ${titleAr}؟`,
                q_en: `How do you automate repetitive IT administration tasks and support workflows as a ${titleEn}?`,
                answers: [
                    { text_ar: "تنفيذ المهام الروتينية يدوياً للتأكد من سلامة التنفيذ وتفادي أخطاء البرمجة.", text_en: "Executing routine operational tasks manually to avoid scripting bugs.", points: 1 },
                    { text_ar: "كتابة سكربتات بسيطة للأوامر المتكررة وتشغيلها عند الحاجة.", text_en: "Writing basic bash/PowerShell scripts for execution on request.", points: 2 },
                    { text_ar: "استخدام منصات الأتمتة المتاحة لجدولة مهام النسخ الاحتياطي والصيانة.", text_en: "Leveraging cron schedulers and automation tools for routine maintenance.", points: 3 },
                    { text_ar: "بناء مكتبة أتمتة موحدة (Infrastructure/Operations Automation)، ربط تذاكر الدعم بـ Webhooks، والتخلص من العمل اليدوي المكرر (Eliminating Toil).", text_en: "Architecting automated operational workflows, integrating support webhooks, and actively eliminating manual toil (SRE practice).", points: 5, hr_exp_ar: "التخلص من العمل اليدوي المكرر (Toil) يفرغ طاقة الفريق للمبادرات التطويرية الاستراتيجية.", hr_exp_en: "Systematic toil elimination frees engineering bandwidth for high-impact strategic projects." }
                ]
            },
            {
                id: "gt_q15", difficulty: 3, stars: "★★★☆", dimension: "logic",
                q_ar: `كيف تضمن الحفاظ على الامتثال التنظيمي وحقوق الملكية الفكرية للتطبيقات (Software Licensing & IP Compliance) كـ ${titleAr}؟`,
                q_en: `Governing software licensing models, open-source compliance, and IP rights as a ${titleEn}, what auditing steps do you take?`,
                answers: [
                    { text_ar: "الاعتماد على المكتبات الفتوحة المصدر دون النظر لشروط الترخيص.", text_en: "Utilizing open-source libraries freely without checking license types.", points: 1 },
                    { text_ar: "مراجعة شروط ترخيص المكتبات عند الرغبة في بيع التعديلات.", text_en: "Checking library licenses when preparing commercial software releases.", points: 2 },
                    { text_ar: "فحص تراخيص البرمجيات المستوردة والتأكد من عدم وجود تعارض مع القانون.", text_en: "Auditing third-party licenses to avoid copyleft conflicts.", points: 3 },
                    { text_ar: "اعتماد سياسة حوكمة التراخيص (Open Source License Compliance), فحص التبعيات لتجنب تراخيص Copyleft (GPL), وحماية الملكية الفكرية.", text_en: "Enforcing Open Source License Governance, automated scanning for Copyleft risks (GPL/AGPL), and securing enterprise IP ownership.", points: 5, hr_exp_ar: "فحص التراخيص المفتوحة وحوكمة الـ IP يحميان كود المؤسسة من المخاطر القانونية والالتزامات القسرية.", hr_exp_en: "Open source license auditing eliminates copyleft legal liabilities and protects corporate software IP." }
                ]
            },
            {
                id: "gt_q16", difficulty: 4, stars: "★★★★", dimension: "logic",
                q_ar: `عند إدارة كوارث البنية التحتية الكبرى وفشل الأنظمة المزدوجة كـ ${titleAr}، كيف تضمن الاستعادة الكاملة (Bare-Metal Recovery)?`,
                q_en: `Executing Bare-Metal Disaster Recovery during catastrophic physical or virtual platform destruction as a ${titleEn}, what sequence do you command?`,
                answers: [
                    { text_ar: "إعادة تثبيت أنظمة التشغيل يدويًا ثم استرجاع أحدث نسخة احتياطية.", text_en: "Reinstalling base OS layers manually prior to restoring backups.", points: 1 },
                    { text_ar: "استخدام صور النظام الجاهزة وتفعيل الخوادم الاحتياطية المتاحة.", text_en: "Deploying system disk images to available standby hardware.", points: 2 },
                    { text_ar: "تنفيذ خطة الاستعادة الأوتوماتيكية واختبار سلامة البيانات والشبكة.", text_en: "Executing automated restore playbooks and verifying data integrity.", points: 3 },
                    { text_ar: "تفعيل خطة التعافي المباشر (Bare-Metal Automated Orchestration)، أتمتة الشبكات، إعادة بناء البنية عبر IaC، والتحقق الحجمي الرقمي.", text_en: "Commanding automated Bare-Metal Orchestration, re-provisioning infrastructure via IaC, and performing automated integrity verification.", points: 5, hr_exp_ar: "أتمتة استعادة البنية التحتية بالكامل عبر IaC تعيد الخدمات المعقدة في وقت قياسي دون أخطاء بشرية.", hr_exp_en: "Orchestrated Bare-Metal recovery and IaC re-provisioning minimize recovery metrics during catastrophic failures." }
                ]
            },
            {
                id: "gt_q17", difficulty: 4, stars: "★★★★", dimension: "tech",
                q_ar: `عند بناء معمارية اختبار الإجهاد وسعة تحمل النظام (Chaos Engineering & Stress Testing) كـ ${titleAr}، كيف تبدأ التخطيط؟`,
                q_en: `Architecting enterprise Chaos Engineering experiments (Chaos Mesh / Gremlin) as a ${titleEn}, how do you validate system resilience?`,
                answers: [
                    { text_ar: "زيادة الحمل على الخوادم في بيئة الإنتاج لرؤية لحظة التوقف.", text_en: "Overloading production servers to observe crash points.", points: 1 },
                    { text_ar: "محاكاة انقطاع بعض الخدمات في بيئة Staging وتثبيت التنبيهات.", text_en: "Simulating service drops in staging labs to inspect error alerts.", points: 2 },
                    { text_ar: "حقن أخطاء متحكم بها في بيئة فرعية وتقييم قدرة النظام على التعافي الذاتي.", text_en: "Injecting controlled latency in test environments to evaluate self-healing.", points: 3 },
                    { text_ar: "تأسيس فرضيات المرونة (Steady State Hypothesis)، إدخال أعطال عشوائية مؤتمتة (Latency/Pod Kills)، واختبار التكيف والتعافي التلقائي.", text_en: "Formulating Steady-State Hypotheses, executing controlled fault injections (Chaos Engineering), and verifying automated self-healing resilience.", points: 5, hr_exp_ar: "اختبارات الفوضى Chaos Engineering تكشف الثغرات ونقاط الفشل الخفية قبل أن تؤثر على المستخدمين.", hr_exp_en: "Chaos Engineering fault injection validates self-healing system boundaries under true failure conditions." }
                ]
            },
            {
                id: "gt_q18", difficulty: 4, stars: "★★★★", dimension: "mindset",
                q_ar: `كيف تقود التحول لثقافة الهندسة الاعتمادية والموثوقية (Site Reliability Engineering - SRE) كـ ${titleAr} في مؤسستك؟`,
                q_en: `Leading organizational transformation towards Site Reliability Engineering (SRE) practices as a ${titleEn}, what cultural & technical shift do you drive?`,
                answers: [
                    { text_ar: "دمج فريق الدعم مع فريق التطوير في مكتب واحد لتسهيل التواصل.", text_en: "Co-locating ops and dev teams to improve daily communication.", points: 1 },
                    { text_ar: "تكليف المطورين بمتابعة بلاغات الدعم الفني بشكل دوري.", text_en: "Assigning developers to support ticket rotations.", points: 2 },
                    { text_ar: "تطبيق مفاهيم أتمتة العمليات وتقليل مهام الصيانة اليدوية.", text_en: "Implementing ops automation to reduce manual maintenance workload.", points: 3 },
                    { text_ar: "تطبيق مبادئ SRE، تحديد ميزانيات الأخطاء (Error Budgets)، قياس الـ Toil، وأتمتة التعافي، والموازنة بين سرعة الإطلاق والاستقرار.", text_en: "Establishing SRE principles, enforcing Error Budget policies, capping manual toil at 50%, and aligning feature velocity with system reliability.", points: 5, hr_exp_ar: "تطبيق مبادئ SRE وميزانية الأخطاء يضمنان الاستقرار التشغيلي مع المحافظة على سرعة تطوير ميزات جديدة.", hr_exp_en: "SRE error budgets and toil caps balance rapid product innovation with rock-solid system stability." }
                ]
            }
        ];
    }

    // ----------------------------------------------------------------------
    // DOMAIN RESOLVER FUNCTION (Match Job Category to Specific Block)
    // ----------------------------------------------------------------------
    function getDomainForJob(jobId, category) {
        const id = (jobId || "").toLowerCase();

        // Cybersecurity Domain
        if (id.includes("cyber") || id.includes("penetration") || id.includes("soc") || id.includes("malware") || id.includes("security")) {
            return "cybersecurity";
        }

        // Frontend & UI Domain
        if (id.includes("frontend") || id.includes("ui_") || id.includes("ux_") || id.includes("react") || 
            id.includes("angular") || id.includes("vue") || id.includes("flutter") || id.includes("android") || 
            id.includes("ios") || id.includes("mobile") || id.includes("web3") || id.includes("graphic") || 
            id.includes("video") || id.includes("game") || id.includes("unity") || id.includes("unreal")) {
            return "frontend";
        }

        // Backend & Infrastructure Domain
        if (id.includes("backend") || id.includes("fullstack") || id.includes("node") || id.includes("python") || 
            id.includes("java") || id.includes("csharp") || id.includes("cpp") || id.includes("php") || 
            id.includes("laravel") || id.includes("go_") || id.includes("ruby") || id.includes("rust") || 
            id.includes("devops") || id.includes("sre") || id.includes("dba") || id.includes("cloud") || 
            id.includes("aws") || id.includes("gcp") || id.includes("azure") || id.includes("architect") || 
            id.includes("network") || id.includes("system_admin") || id.includes("embedded") || id.includes("iot")) {
            return "backend";
        }

        // Business, HR, Marketing Domain
        if (category === "business" || category === "marketing" || category === "hr" || 
            id.includes("account") || id.includes("audit") || id.includes("finance") || id.includes("marketing") || 
            id.includes("sales") || id.includes("hr_") || id.includes("recruiter") || id.includes("manager") || 
            id.includes("supply") || id.includes("logistics") || id.includes("hotel") || id.includes("tourism") || id.includes("event")) {
            return "business";
        }

        // Default General Tech
        return "general_tech";
    }

    // ----------------------------------------------------------------------
    // MAIN PUBLIC API: window.getJobQuestions
    // Standard Mode (includeExtra = false): Exactly 25 questions (difficulty <= 3)
    // Extra Mode (includeExtra = true): Exactly 30 questions (difficulty 1 to 4)
    // ----------------------------------------------------------------------
    globalScope.getJobQuestions = function(jobId, includeExtra = false) {
        const jobsList = globalScope.jobsList || globalScope.JOBS_LIST || [];
        const job = jobsList.find(j => j.id === jobId) || {
            title_ar: "التخصص المطلوب",
            title_en: "Specialist Role",
            category: "tech"
        };

        const titleAr = job.title_ar;
        const titleEn = job.title_en;

        // ------ الأولوية الأولى: بنك أسئلة مخصص لهذه الوظيفة بالاسم ------
        let domainBlock;
        const dedicatedBank = globalScope.JOB_QUESTION_BANKS && globalScope.JOB_QUESTION_BANKS[jobId];

        if (dedicatedBank && dedicatedBank.length > 0) {
            domainBlock = dedicatedBank;
        } else {
            // ------ Fallback مؤقت (نظام قديم): يُستخدم فقط للوظائف اللي لسه ------
            // ------ معملهاش بنك مخصص. TODO: امسح الـ else ده بالكامل بعد اكتمال الترحيل ------
            domainBlock = [];
            const domain = getDomainForJob(jobId, job.category);
            if (domain === "cybersecurity") {
                domainBlock = getCybersecurityBlock(titleAr, titleEn);
            } else if (domain === "frontend") {
                domainBlock = getFrontendBlock(titleAr, titleEn);
            } else if (domain === "backend") {
                domainBlock = getBackendBlock(titleAr, titleEn);
            } else if (domain === "business") {
                domainBlock = getBusinessBlock(titleAr, titleEn);
            } else {
                domainBlock = getGeneralTechBlock(titleAr, titleEn);
            }
        }

        // Fetch Universal Mindset Questions
        const universalBlock = getUniversalBlock(titleAr, titleEn);

        // Combine: Domain questions + Universal questions
        let combined = [...domainBlock, ...universalBlock];

        // Filter based on requested count:
        // Base (25 Qs): difficulty <= 3 (15 domain base + 10 universal base)
        // Bonus (30 Qs): all difficulties 1 to 4 (18 domain + 12 universal)
        if (!includeExtra) {
            return combined.filter(q => q.difficulty <= 3);
        }

        return combined;
    };

    globalScope.getQuestionsForJob = globalScope.getJobQuestions;
})();
