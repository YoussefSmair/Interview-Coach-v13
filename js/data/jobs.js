/* ==========================================================================
   Interview Coach V3 - Enterprise 100+ Real Jobs Dataset & View Renderer
   ========================================================================== */

const rawJobsDataset = [
    // ----------------------------------------------------------------------
    // 1. Software Engineering & Technology (50+ Roles)
    // ----------------------------------------------------------------------
    { id: "frontend_dev", title_ar: "مطور واجهات أمامية (Frontend Developer)", title_en: "Frontend Developer", category: "tech", icon: "fa-solid fa-code", description_ar: "تصميم وبناء الواجهات التفاعلية للمواقع والتطبيقات باستخدام HTML5, CSS3, JavaScript وأحدث مكتبات الويب.", description_en: "Building responsive, high-performance UI components using modern HTML, CSS, JavaScript, and web frameworks." },
    { id: "backend_dev", title_ar: "مطور واجهات خلفية (Backend Developer)", title_en: "Backend Developer", category: "tech", icon: "fa-solid fa-server", description_ar: "بناء وإدارة الخوادم، قواعد البيانات، والـ RESTful APIs لضمان السرعة والأمان لمعالجة البيانات.", description_en: "Architecting server-side logic, database schemas, microservices, and secure APIs." },
    { id: "fullstack_dev", title_ar: "مطور تطبيقات شامل (Full Stack Developer)", title_en: "Full Stack Developer", category: "tech", icon: "fa-solid fa-layer-group", description_ar: "تطوير النظم البرمجية المتكاملة بدءًا من الواجهات الأمامية وحتى الأنظمة الخلفية وقواعد البيانات.", description_en: "Mastering end-to-end web architecture from client-side UI to server database integration." },
    { id: "mobile_dev", title_ar: "مطور تطبيقات الموبايل (Mobile App Developer)", title_en: "Mobile App Developer", category: "tech", icon: "fa-solid fa-mobile-screen-button", description_ar: "برمجة وتصميم تطبيقات الهواتف الذكية عالية الأداء لمنصتي Android و iOS.", description_en: "Developing seamless native and cross-platform mobile experiences for modern smartphones." },
    { id: "flutter_dev", title_ar: "مطور فلاتر (Flutter Developer)", title_en: "Flutter Developer", category: "tech", icon: "fa-solid fa-mobile-retro", description_ar: "بناء تطبيقات موبايل وبورتال موحدة باستخدام لغة Dart وإطار العمل Flutter بسرعة وكفاءة عالية.", description_en: "Building sleek multi-platform apps using Dart and Google's Flutter framework." },
    { id: "react_native_dev", title_ar: "مطور React Native", title_en: "React Native Developer", category: "tech", icon: "fa-brands fa-react", description_ar: "تطوير تطبيقات الموبايل متعددة المنصات باستخدام مكتبة React ولغة JavaScript.", description_en: "Engineering native iOS and Android apps using React and JavaScript runtime." },
    { id: "android_dev", title_ar: "مطور أندرويد (Android Developer)", title_en: "Android Developer", category: "tech", icon: "fa-brands fa-android", description_ar: "تطوير تطبيقات أندرويد الأصلية باستغلال Kotlin و Android SDK وأفضل معماريات البرمجة.", description_en: "Developing native Android apps using Kotlin, Jetpack Compose, and Android SDK." },
    { id: "ios_dev", title_ar: "مطور iOS (iOS Developer)", title_en: "iOS Developer", category: "tech", icon: "fa-brands fa-apple", description_ar: "بناء تطبيقات آيفون وآيباد الأصلية باستخدام لغة Swift وبيئة تطوير Xcode.", description_en: "Crafting premium native Apple ecosystem applications using Swift and SwiftUI." },
    { id: "react_dev", title_ar: "مطور React.js", title_en: "React.js Developer", category: "tech", icon: "fa-brands fa-react", description_ar: "تطوير تطبيقات الويب أحادية الصفحة (SPA) المعقدة باستخدام مكتبة React واستراتيجيات إدارة الحالة.", description_en: "Building dynamic scalable web platforms using React.js and Redux/Zustand ecosystem." },
    { id: "angular_dev", title_ar: "مطور أنجولار (Angular Developer)", title_en: "Angular Developer", category: "tech", icon: "fa-brands fa-angular", description_ar: "بناء المنصات البرمجية الضخمة للشركات باستخدام إطار عمل Angular ولغة TypeScript.", description_en: "Building enterprise single-page applications using TypeScript and Google Angular." },
    { id: "vue_dev", title_ar: "مطور Vue.js", title_en: "Vue.js Developer", category: "tech", icon: "fa-brands fa-vuejs", description_ar: "تصميم واجهات المستخدم السلسة والتطبيقات السريعة باستخدام Vue.js و Nuxt framework.", description_en: "Building progressive web interfaces and lightweight apps with Vue 3 and Nuxt." },
    { id: "node_dev", title_ar: "مطور Node.js", title_en: "Node.js Developer", category: "tech", icon: "fa-brands fa-node-js", description_ar: "بناء الخوادم عالية الكفاءة والتطبيقات لحظية البيانات (Real-time) باستخدام Node.js و Express/NestJS.", description_en: "Engineering asynchronous backend servers and API gateways powered by Node.js." },
    { id: "python_dev", title_ar: "مطور بايثون (Python Developer)", title_en: "Python Developer", category: "tech", icon: "fa-brands fa-python", description_ar: "تطوير خوادم السحابة، السكربتات التلقائية، وبوابات الويب باستغلال Python و Django/FastAPI.", description_en: "Building scalable web backends, automation pipelines, and services with Python." },
    { id: "java_dev", title_ar: "مطور جافا (Java Developer)", title_en: "Java Developer", category: "tech", icon: "fa-brands fa-java", description_ar: "تطوير نظم المؤسسات العملاقة والخوادم الموزعة باستغلال Java و Spring Boot framework.", description_en: "Engineering enterprise microservices and secure transaction systems with Spring Boot." },
    { id: "csharp_dev", title_ar: "مطور C# (.NET Developer)", title_en: ".NET / C# Developer", category: "tech", icon: "fa-solid fa-square-code", description_ar: "برمجة تطبيقات الويب والمؤسسات باستخدام منصة .NET Core ولغة C# ذات الأداء العالي.", description_en: "Developing robust backends and enterprise software using C# and .NET Core ecosystem." },
    { id: "cpp_dev", title_ar: "مطور C++ (C++ Developer)", title_en: "C++ Developer", category: "tech", icon: "fa-solid fa-code-branch", description_ar: "تطوير البرمجيات منخفضة المستوى (Low-level)، المحركات، وأنظمة المعالجة السريعة للغاية.", description_en: "Engineering high-performance systems, game engines, and low-latency algorithms in C++." },
    { id: "php_dev", title_ar: "مطور PHP", title_en: "PHP Developer", category: "tech", icon: "fa-brands fa-php", description_ar: "تطوير وبناء المواقع الإلكترونية الديناميكية وأنظمة إدارة المحتوى وقواعد البيانات.", description_en: "Building dynamic server-side applications and e-commerce platforms using PHP." },
    { id: "laravel_dev", title_ar: "مطور لارافل (Laravel Developer)", title_en: "Laravel Developer", category: "tech", icon: "fa-brands fa-laravel", description_ar: "تطوير المنصات وتطبيقات الويب الاحترافية باتباع نمط MVC باستخدام إطار العمل Laravel.", description_en: "Architecting modern web portals and robust REST APIs utilizing PHP Laravel framework." },
    { id: "go_dev", title_ar: "مطور Go (Golang Developer)", title_en: "Golang Developer", category: "tech", icon: "fa-solid fa-bolt", description_ar: "بناء الخدمات السحابية الموزعة والخوادم فائقة السرعة باستغلال توازي العمليات في Golang.", description_en: "Building concurrent high-throughput microservices and cloud infrastructure in Go." },
    { id: "ruby_dev", title_ar: "مطور روبي (Ruby on Rails)", title_en: "Ruby on Rails Developer", category: "tech", icon: "fa-solid fa-gem", description_ar: "تطوير وبناء المنتجات البرمجية السريعة والشركات الناشئة باستغلال قوة Ruby on Rails.", description_en: "Rapidly scaling web platforms and database integrations using Ruby on Rails framework." },
    { id: "rust_dev", title_ar: "مطور رست (Rust Developer)", title_en: "Rust Developer", category: "tech", icon: "fa-solid fa-gear", description_ar: "برمجة الأنظمة الآمنة من أخطاء الذاكرة وأنظمة البلوكشين عالية الكفاءة باستخدام Rust.", description_en: "Building memory-safe high-performance systems, CLI tools, and decentralized node infrastructure." },
    { id: "devops_engineer", title_ar: "مهندس DevOps (DevOps Engineer)", title_en: "DevOps Engineer", category: "tech", icon: "fa-solid fa-infinity", description_ar: "أتمتة خطوط النشر (CI/CD)، إدارة الحاويات (Docker/Kubernetes)، وتسهيل التكامل بين التطوير والتشغيل.", description_en: "Automating CI/CD pipelines, container orchestration, infrastructure as code, and cloud monitoring." },
    { id: "sre_engineer", title_ar: "مهندس موثوقية الأنظمة (SRE)", title_en: "Site Reliability Engineer (SRE)", category: "tech", icon: "fa-solid fa-shield-halved", description_ar: "ضمان استقرار الخوادم الضخمة واستمراريتها بدون توقف والتصدي للأعطال الطارئة في السحابة.", description_en: "Enhancing system scalability, uptime, fault tolerance, and automated incident response." },
    { id: "qa_manual", title_ar: "مختبر جودة يدوي (Manual QA Tester)", title_en: "Manual QA Tester", category: "tech", icon: "fa-solid fa-vial-circle-check", description_ar: "فحص وتتبع أخطاء البرمجيات وتوثيق حالات الاختبار (Test Cases) لضمان تجربة مستخدم خالية من العيوب.", description_en: "Designing meticulous test plans, executing manual test cases, and reporting software defects." },
    { id: "qa_automation", title_ar: "مختبر جودة آلي (Automation QA Tester)", title_en: "Automation QA Engineer", category: "tech", icon: "fa-solid fa-robot", description_ar: "كتابة سكربتات الاختبار الآلي باستخدام Cypress/Selenium لتسريع عمليات الفحص والحد من الأخطاء.", description_en: "Engineering automated test suites, end-to-end framework scripts, and continuous quality checks." },
    { id: "data_analyst", title_ar: "محلل بيانات (Data Analyst)", title_en: "Data Analyst", category: "tech", icon: "fa-solid fa-chart-pie", description_ar: "تحليل البيانات، استخراج الاتجاهات التجارية، وتصميم لوحات التفاعل التفاعلية (Power BI / Tableau).", description_en: "Extracting actionable insights from SQL databases, statistical models, and BI visualization dashboards." },
    { id: "data_scientist", title_ar: "عالم بيانات (Data Scientist)", title_en: "Data Scientist", category: "tech", icon: "fa-solid fa-brain", description_ar: "بناء النماذج الإحصائية والتنبؤية المتطورة باستغلال الخوارزميات وتعلم الآلة.", description_en: "Building predictive algorithms, complex data pipelines, and machine learning hypotheses." },
    { id: "ml_engineer", title_ar: "مهندس تعلم آلي (ML Engineer)", title_en: "Machine Learning Engineer", category: "tech", icon: "fa-solid fa-diagram-project", description_ar: "تدريب ونشر نماذج الذكاء الاصطناعي وتعلم الآلة في بيئات الإنتاج الفعلية.", description_en: "Deploying and optimizing deep learning models and neural networks into scalable production APIs." },
    { id: "ai_engineer", title_ar: "مهندس ذكاء اصطناعي (AI Engineer)", title_en: "Artificial Intelligence Engineer", category: "tech", icon: "fa-solid fa-microchip", description_ar: "تطوير الأنظمة الذكية المعززة بنماذج اللغات الضخمة (LLMs) والرؤية الحاسوبية.", description_en: "Integrating LLMs, generative AI workflows, and intelligent automated agents into applications." },
    { id: "nlp_engineer", title_ar: "مهندس معالجة لغات طبيعية (NLP Engineer)", title_en: "NLP Engineer", category: "tech", icon: "fa-solid fa-language", description_ar: "تطوير خوارزميات فهم واستخراج النصوص وتحليل المشاعر ونماذج الترجمة والتحدث.", description_en: "Engineering text classification, sentiment analysis, speech-to-text models, and LLM fine-tuning." },
    { id: "cv_engineer", title_ar: "مهندس رؤية حاسوبية (Computer Vision Engineer)", title_en: "Computer Vision Engineer", category: "tech", icon: "fa-solid fa-eye", description_ar: "معالجة الصور والفيديوهات الرقمية وتطوير خوارزميات التعرف على الأجسام والوجه.", description_en: "Developing real-time image processing, object detection, and visual recognition neural networks." },
    { id: "cybersecurity_spec", title_ar: "أخصائي أمن سيبراني (Cybersecurity Specialist)", title_en: "Cybersecurity Specialist", category: "tech", icon: "fa-solid fa-user-shield", description_ar: "حماية الأنظمة والشبكات من الهجمات الإلكترونية وتحديد الثغرات وتطبيق بروتوكولات الأمان.", description_en: "Securing corporate networks, threat intelligence, vulnerability assessments, and incident triage." },
    { id: "penetration_tester", title_ar: "مختبر اختراق أخلاقي (Ethical Hacker / Pen Tester)", title_en: "Penetration Tester", category: "tech", icon: "fa-solid fa-bug", description_ar: "محاكاة الهجمات الإلكترونية لاكتشاف الثغرات في المواقع والأنظمة وتوثيق سبل إغلاقها.", description_en: "Conducting ethical hacking simulations, red team engagements, and system vulnerability exploits." },
    { id: "soc_analyst", title_ar: "محلل مركز عمليات الأمان (SOC Analyst)", title_en: "SOC Analyst", category: "tech", icon: "fa-solid fa-tower-observation", description_ar: "مراقبة التنبيهات الأمنية وتحليل السجلات (SIEM) للرد السريع على أي اختراق محتمل.", description_en: "Monitoring SIEM telemetry, analyzing malware artifacts, and mitigating security breaches." },
    { id: "network_engineer", title_ar: "مهندس شبكات (Network Engineer)", title_en: "Network Engineer", category: "tech", icon: "fa-solid fa-network-wired", description_ar: "تصميم وإدارة وتأمين الشبكات السلكية واللاسلكية والموجهات (Routers & Switches).", description_en: "Designing, configuring, and maintaining robust WAN/LAN infrastructure and Cisco/Juniper routing." },
    { id: "system_admin", title_ar: "مدير أنظمة (System Administrator)", title_en: "System Administrator", category: "tech", icon: "fa-solid fa-sliders", description_ar: "إدارة وتكوين أنظمة التشغيل (Linux/Windows Server) والنسخ الاحتياطي والصلاحيات.", description_en: "Managing enterprise Linux and Windows servers, Active Directory, backups, and user permissions." },
    { id: "dba", title_ar: "مدير قواعد بيانات (Database Administrator - DBA)", title_en: "Database Administrator (DBA)", category: "tech", icon: "fa-solid fa-database", description_ar: "تحسين أداء الاستعلامات، تأمين البيانات، وإدارة النسخ الاحتياطي لـ PostgreSQL, MySQL, SQL Server.", description_en: "Optimizing query execution plans, high availability clustering, and database security." },
    { id: "cloud_architect", title_ar: "مهندس معماري سحابي (Cloud Architect)", title_en: "Cloud Architect", category: "tech", icon: "fa-solid fa-cloud-arrow-up", description_ar: "تصميم وإدارة البنية التحتية السحابية الموزعة والتكلفة والموثوقية على AWS, GCP, Azure.", description_en: "Designing multi-cloud architecture strategies, cost optimization, and serverless infrastructure." },
    { id: "aws_architect", title_ar: "مهندس حلول AWS (AWS Certified Architect)", title_en: "AWS Solutions Architect", category: "tech", icon: "fa-brands fa-aws", description_ar: "بناء الأنظمة الموزعة والمستقرة باستغلال خدمات Amazon Web Services المتنوعة.", description_en: "Architecting cloud environments with AWS EC2, S3, Lambda, ECS, and VPC networking." },
    { id: "gcp_architect", title_ar: "مهندس سحابة جوجل (GCP Architect)", title_en: "GCP Architect", category: "tech", icon: "fa-brands fa-google", description_ar: "تطوير الحلول السحابية ونظم معالجة البيانات الضخمة على منصة Google Cloud Platform.", description_en: "Building data pipelines and cloud applications on Google Cloud Platform and BigQuery." },
    { id: "azure_architect", title_ar: "مهندس سحابة أزور (Azure Architect)", title_en: "Azure Architect", category: "tech", icon: "fa-brands fa-microsoft", description_ar: "تصميم وإدارة حلول المؤسسات السحابية على منصة Microsoft Azure.", description_en: "Engineering enterprise hybrid cloud architecture on Microsoft Azure infrastructure." },
    { id: "blockchain_dev", title_ar: "مطور بلوكتشين (Blockchain Developer)", title_en: "Blockchain Developer", category: "tech", icon: "fa-solid fa-cubes", description_ar: "تطوير الأنظمة اللامركزية والبروتوكولات الشفافة على شبكات Ethereum وغيرها.", description_en: "Engineering decentralized consensus protocols and peer-to-peer ledger solutions." },
    { id: "smart_contract_dev", title_ar: "مطور عقود ذكية (Smart Contract Developer)", title_en: "Smart Contract Developer", category: "tech", icon: "fa-solid fa-file-contract", description_ar: "كتابة وفحص العقود الذكية الآمنة بلغة Solidity للتطبيقات اللامركزية (DApps).", description_en: "Authoring, testing, and auditing secure Solidity smart contracts for EVM blockchains." },
    { id: "web3_dev", title_ar: "مطور Web3 (Web3 Frontend Engineer)", title_en: "Web3 Developer", category: "tech", icon: "fa-solid fa-wallet", description_ar: "ربط واجهات الويب بالمحفظة الإلكترونية والعقود الذكية باستخدام Ethers.js و Web3.js.", description_en: "Connecting decentralized frontend UIs to blockchain networks and web3 wallets." },
    { id: "game_developer", title_ar: "مطور ألعاب فيديو (Game Developer)", title_en: "Game Developer", category: "tech", icon: "fa-solid fa-gamepad", description_ar: "برمجة وتطوير آليات اللعب، الفيزياء، والرسوميات لألعاب الموبايل والكمبيوتر.", description_en: "Programming gameplay mechanics, physics, graphics shaders, and multiplayer netcode." },
    { id: "unity_dev", title_ar: "مطور يونيتي (Unity Developer)", title_en: "Unity Developer", category: "tech", icon: "fa-solid fa-shapes", description_ar: "بناء الألعاب والتجارب التفاعلية ثنائية وثلاثية الأبعاد باستخدام محرك Unity ولغة C#.", description_en: "Creating 2D/3D games and interactive simulations utilizing Unity and C#." },
    { id: "unreal_dev", title_ar: "مطور أنريل إنحين (Unreal Engine Developer)", title_en: "Unreal Engine Developer", category: "tech", icon: "fa-solid fa-dragon", description_ar: "تطوير ألعاب الجيل القادم والتجارب فائقة الواقعية باستخدام Unreal Engine 5 ولغة C++.", description_en: "Engineering AAA game experiences using Unreal Engine 5, Blueprints, and high-performance C++." },
    { id: "embedded_engineer", title_ar: "مهندس أنظمة مدمجة (Embedded Systems Engineer)", title_en: "Embedded Systems Engineer", category: "tech", icon: "fa-solid fa-microchip", description_ar: "برمجة الدوائر الإلكترونية والمتحكمات الدقيقة (Microcontrollers) بلغة C/C++ لبيئات العمل الصناعية.", description_en: "Developing real-time firmware and drivers for microcontrollers and hardware devices." },
    { id: "iot_engineer", title_ar: "مهندس إنترنت الأشياء (IoT Engineer)", title_en: "IoT Engineer", category: "tech", icon: "fa-solid fa-wifi", description_ar: "ربط الحساسات والأجهزة الذكية بشبكة الإنترنت وتطوير أنظمة المراقبة والتحكم عن بُعد.", description_en: "Architecting connected sensor arrays, MQTT protocols, and IoT smart device networks." },
    { id: "ar_vr_dev", title_ar: "مطور واقع معزز وافتراضي (AR/VR Developer)", title_en: "AR/VR Developer", category: "tech", icon: "fa-solid fa-vr-cardboard", description_ar: "تصميم وبناء تجارب العالم الافتراضي والواقع المعزز لنظارات Meta Quest و Vision Pro.", description_en: "Building immersive spatial computing applications for Meta Quest, Apple Vision Pro, and mobile AR." },
    { id: "ui_designer", title_ar: "مصمم واجهات المستخدم (UI Designer)", title_en: "UI Designer", category: "tech", icon: "fa-solid fa-palette", description_ar: "تصميم العناصر البصرية، الأيقونات، وأنظمة التصميم (Design Systems) في Figma بصورة مبهرة.", description_en: "Crafting beautiful, pixel-perfect user interfaces, typography grids, and Figma design systems." },
    { id: "ux_designer", title_ar: "مصمم تجربة المستخدم (UX Designer)", title_en: "UX Designer", category: "tech", icon: "fa-solid fa-diagram-next", description_ar: "دراسة سلوك المستخدمين، رسم خرائط رحلة العميل، واختبار النماذج المبدئية لسهولة الاستخدام.", description_en: "Conducting user research, wireframing workflows, and optimizing product usability journeys." },
    { id: "technical_writer", title_ar: "كاتب تقني (Technical Writer)", title_en: "Technical Writer", category: "tech", icon: "fa-solid fa-file-code", description_ar: "توثيق واجهات البرمجة (APIs)، إعداد أدلة الاستخدام، وشرح المعماريات البرمجية بوضوح.", description_en: "Authoring comprehensive developer API documentation, architecture guides, and user manuals." },
    { id: "solutions_architect", title_ar: "مهندس حلول تقنية (Solutions Architect)", title_en: "Solutions Architect", category: "tech", icon: "fa-solid fa-cubes-stacked", description_ar: "ترجمة متطلبات الأعمال الكبرى إلى معمارية تقنية متكاملة ومستقرة وآمنة.", description_en: "Translating business goals into technical enterprise software design blueprints and integration strategies." },

    // ----------------------------------------------------------------------
    // 2. Business, Finance & Accounting Roles
    // ----------------------------------------------------------------------
    { id: "business_analyst", title_ar: "محلل أعمال (Business Analyst)", title_en: "Business Analyst", category: "business", icon: "fa-solid fa-chart-line", description_ar: "تحليل متطلبات المؤسسة، سد الفجوة بين الإدارة والفريق التقني، وتحسين العمليات التشغيلية.", description_en: "Evaluating business processes, gathering functional requirements, and aligning tech deliverables." },
    { id: "financial_analyst", title_ar: "محلل مالي (Financial Analyst)", title_en: "Financial Analyst", category: "business", icon: "fa-solid fa-money-bill-trend-up", description_ar: "تقييم القوائم المالية، بناء النماذج الاستثمارية، وتوقع الأرباح وتكاليف المشاريع.", description_en: "Building financial forecast models, evaluating corporate P&L, and conducting investment valuation." },
    { id: "accountant", title_ar: "محاسب عام (General Accountant)", title_en: "General Accountant", category: "business", icon: "fa-solid fa-calculator", description_ar: "تسجيل القيود اليومية، إعداد الحسابات الختامية، ومتابعة الفواتير والضرائب بدقة.", description_en: "Managing journal entries, general ledger accounts, tax compliance, and financial reconciliation." },
    { id: "auditor", title_ar: "مدقق مالي (Financial Auditor)", title_en: "Financial Auditor", category: "business", icon: "fa-solid fa-magnifying-glass-dollar", description_ar: "مراجعة القوائم المالية والتأكد من مطابقاتها للمعايير المحاسبية والتصدي للأخطاء والتلاعب.", description_en: "Verifying corporate financial statements, auditing internal controls, and ensuring regulatory compliance." },
    { id: "cfo", title_ar: "مدير مالي (Chief Financial Officer - CFO)", title_en: "Chief Financial Officer (CFO)", category: "business", icon: "fa-solid fa-vault", description_ar: "صياغة الاستراتيجيات المالية الكبرى، إدارة السيولة الاستثمارية، والتفاوض مع المستثمرين.", description_en: "Directing high-level financial strategy, capital structure, treasury management, and risk governance." },
    { id: "supply_chain_spec", title_ar: "أخصائي سلسلة إمداد (Supply Chain Specialist)", title_en: "Supply Chain Specialist", category: "business", icon: "fa-solid fa-boxes-packing", description_ar: "إدارة عمليات الشحن والتخزين وتأمين سلاسل التوريد وتقليل التكاليف التشغيلية.", description_en: "Optimizing inventory flows, logistics routing, vendor procurement, and warehouse operations." },
    { id: "logistics_manager", title_ar: "مدير لوجستيات (Logistics Manager)", title_en: "Logistics Manager", category: "business", icon: "fa-solid fa-truck-fast", description_ar: "تنسيق عمليات النقل الدولي والمحلي والتخليص الجمركي وتتبع الشحنات بكفاءة.", description_en: "Overseeing fleet transport, customs clearance procedures, and distribution center networks." },
    { id: "procurement_spec", title_ar: "أخصائي مشتريات (Procurement Specialist)", title_en: "Procurement Specialist", category: "business", icon: "fa-solid fa-cart-flatbed", description_ar: "التفاوض مع الموردين، إدارة العقود الشرائية، وضمان الحصول على أفضل جودة بأقل سعر.", description_en: "Managing vendor sourcing, contract negotiations, purchase orders, and cost reduction targets." },
    { id: "biz_dev_manager", title_ar: "مدير تطوير أعمال (Business Development Manager)", title_en: "Business Development Manager", category: "business", icon: "fa-solid fa-handshake", description_ar: "بناء الشراكات الاستراتيجية، فتح أسواق جديدة، وزيادة إيرادات وتوسع المؤسسة.", description_en: "Establishing strategic B2B partnerships, identifying new market growth channels, and revenue capture." },
    { id: "operations_mgr", title_ar: "مدير عمليات (Operations Manager)", title_en: "Operations Manager", category: "business", icon: "fa-solid fa-gears", description_ar: "إدارة سير العمل اليومي للشركة، رفع إنتاجية الأقسام، وحل العقبات التشغيلية.", description_en: "Optimizing daily organizational workflows, cross-department efficiency, and quality assurance." },
    { id: "project_manager", title_ar: "مدير مشاريع (Project Manager - PMP)", title_en: "Project Manager", category: "business", icon: "fa-solid fa-list-check", description_ar: "تخطيط الجدول الزمني للمشاريع، إدارة الميزانية، وتوجيه فرق العمل لتحقيق الأهداف.", description_en: "Managing project scope, milestones, stakeholder communications, budgets, and deliverable quality." },

    // ----------------------------------------------------------------------
    // 3. Marketing, Sales & Growth Roles
    // ----------------------------------------------------------------------
    { id: "marketing_manager", title_ar: "مدير تسويق (Marketing Manager)", title_en: "Marketing Manager", category: "marketing", icon: "fa-solid fa-bullhorn", description_ar: "صياغة خطط التسويق الشاملة، إدارة الميزانيات الإعلانية، وبناء العلامة التجارية.", description_en: "Directing multi-channel marketing campaigns, brand positioning, and customer acquisition strategies." },
    { id: "digital_marketing_spec", title_ar: "أخصائي تسويق رقمي (Digital Marketing Specialist)", title_en: "Digital Marketing Specialist", category: "marketing", icon: "fa-solid fa-rectangle-ad", description_ar: "إدارة الحملات الإعلانية المدفوعة على Google, Meta, TikTok وتحليل عائد الاستثمار الإعلاني (ROAS).", description_en: "Managing paid acquisition campaigns across Google Ads, Meta, TikTok, and optimizing ROAS." },
    { id: "seo_specialist", title_ar: "أخصائي تحسين محركات البحث (SEO Specialist)", title_en: "SEO Specialist", category: "marketing", icon: "fa-solid fa-magnifying-glass-chart", description_ar: "تحسين تصدر المواقع في محرك البحث Google زيادة الزيارات المجانية غير المدفوعة.", description_en: "Optimizing website technical architecture, keyword targeting, link building, and organic rankings." },
    { id: "content_manager", title_ar: "مدير محتوى (Content Manager)", title_en: "Content Manager", category: "marketing", icon: "fa-solid fa-pen-nib", description_ar: "تخطيط وإدارة استراتيجيات المحتوى النصي والمرئي لتثقيف الجمهور وزيادة التفاعل.", description_en: "Curating editorial content calendars, multi-platform publishing strategies, and brand voice." },
    { id: "copywriter", title_ar: "كاتب نصوص إعلانية (Copywriter)", title_en: "Copywriter", category: "marketing", icon: "fa-solid fa-feather-pointed", description_ar: "كتابة الإعلانات المقنعة والرسائل التسويقية التي تحفز العملاء على الشراء والتفاعل المباشر.", description_en: "Crafting persuasive advertising copy, email campaigns, landing page copy, and sales letters." },
    { id: "social_media_manager", title_ar: "مدير منصات التواصل (Social Media Manager)", title_en: "Social Media Manager", category: "marketing", icon: "fa-solid fa-share-nodes", description_ar: "إدارة صفحات الشركة الرسمية على التواصل الاجتماعي والتفاعل مع المتابعين وبناء المجتمع.", description_en: "Managing brand presence across social platforms, audience engagement, and community outreach." },
    { id: "sales_manager", title_ar: "مدير مبيعات (Sales Manager)", title_en: "Sales Manager", category: "marketing", icon: "fa-solid fa-chart-column", description_ar: "قود فريق المبيعات، تحديد أهداف المبيعات الشهرية، والتفاوض على صفقات الشركات الكبرى.", description_en: "Leading high-performing sales teams, defining target quotas, and closing high-value deals." },
    { id: "sales_rep", title_ar: "مندوب مبيعات (Sales Representative)", title_en: "Sales Representative", category: "marketing", icon: "fa-solid fa-headset", description_ar: "التواصل المباشر مع العملاء المحتملين، عرض خدمات الشركة، وإتمام عمليات البيع بنجاح.", description_en: "Prospecting leads, delivering pitch presentations, addressing client objections, and closing sales." },
    { id: "account_manager", title_ar: "مدير حسابات عملاء (Account Manager)", title_en: "Account Manager", category: "marketing", icon: "fa-solid fa-user-tie", description_ar: "الحفاظ على العلاقات المستدامة مع العملاء الحاليين وضمان رضاهم وتجديد عقودهم.", description_en: "Building long-term client relationships, upselling enterprise solutions, and driving retention." },
    { id: "brand_manager", title_ar: "مدير علامة تجارية (Brand Manager)", title_en: "Brand Manager", category: "marketing", icon: "fa-solid fa-award", description_ar: "بناء الهوية الشخصية للمؤسسة وتعزيز مكانة العلامة التجارية ورسالتها في السوق.", description_en: "Developing corporate brand identity, storytelling, positioning strategy, and market resonance." },

    // ----------------------------------------------------------------------
    // 4. Human Resources & Recruitment Roles
    // ----------------------------------------------------------------------
    { id: "hr_manager", title_ar: "مدير موارد بشرية (HR Manager)", title_en: "HR Manager", category: "hr", icon: "fa-solid fa-users-gear", description_ar: "إدارة سياسات التوظيف، بيئة العمل، الرواتب، وتقييم أداء الموظفين داخل المؤسسة.", description_en: "Directing talent strategies, employee relations, payroll compliance, and corporate organizational culture." },
    { id: "hr_specialist", title_ar: "أخصائي موارد بشرية (HR Specialist)", title_en: "HR Specialist", category: "hr", icon: "fa-solid fa-user-plus", description_ar: "متابعة إجراءات التعيين، التأمينات، الإجازات، وحل المشاكل اليومية للموظفين.", description_en: "Handling onboarding workflows, personnel files, leave requests, and policy implementation." },
    { id: "recruiter", title_ar: "مسؤول توظيف (Recruiter)", title_en: "Corporate Recruiter", category: "hr", icon: "fa-solid fa-user-check", description_ar: "البحث عن المواهب الكفء، فرز السير الذاتية، وإجراء المقابلات المبدئية لاختيار الأنسب.", description_en: "Sourcing candidates, screening resumes, conducting preliminary interviews, and managing pipeline." },
    { id: "talent_acquisition", title_ar: "أخصائي استقطاب مواهب (Talent Acquisition Specialist)", title_en: "Talent Acquisition Specialist", category: "hr", icon: "fa-solid fa-id-badge", description_ar: "جذب الكوادر النادرة والقادة التنفيذيين للمؤسسة وبناء شبكة توظيف مستقبلية متينة.", description_en: "Strategic headhunting, employer branding, executive search, and long-term talent pipelining." },

    // ----------------------------------------------------------------------
    // 5. Diverse Other Domains (Tourism, PR, Legal, Tech Support, Design)
    // ----------------------------------------------------------------------
    { id: "tech_support_spec", title_ar: "أخصائي دعم فني (Technical Support Specialist)", title_en: "Technical Support Specialist", category: "other", icon: "fa-solid fa-headset", description_ar: "مساعدة العملاء في حل المشكلات التقنية وتصحيح أعطال البرمجيات والأجهزة بسرعة.", description_en: "Diagnosing technical tickets, troubleshooting software/hardware issues, and guiding users." },
    { id: "help_desk_agent", title_ar: "موظف مكتب المساعدة (Help Desk Agent)", title_en: "Help Desk Agent", category: "other", icon: "fa-solid fa-phone-volume", description_ar: "استقبال بلاغات الأعطال اليومية وتوجيهها للفنيين وتأكيد إصلاح المشاكل للموظفين.", description_en: "Logging IT support incidents, executing first-line desktop troubleshooting, and escalation." },
    { id: "tourism_manager", title_ar: "مدير شركة سياحة وسفر (Tourism & Travel Manager)", title_en: "Tourism & Travel Manager", category: "other", icon: "fa-solid fa-plane-departure", description_ar: "تنظيم البرامج السياحية الدولية، إدارة حجز الرحلات والفنادق، وتقديم أفضل تجارب السفر.", description_en: "Designing travel itineraries, managing hotel vendor contracts, and overseeing tourism operations." },
    { id: "graphic_designer", title_ar: "مصمم جرافيك (Graphic Designer)", title_en: "Graphic Designer", category: "other", icon: "fa-solid fa-wand-magic-sparkles", description_ar: "ابتكار البوستارات الإعلانية والشعارات وتصاميم الهوية البصرية باستخدام أدوات Adobe.", description_en: "Creating visual branding assets, marketing collateral, logos, and promotional graphics in Photoshop/Illustrator." },
    { id: "video_editor", title_ar: "مونتير ومحرر فيديو (Video Editor)", title_en: "Video Editor", category: "other", icon: "fa-solid fa-film", description_ar: "قص وتعديل الفيديوهات الترويجية وإضافة المؤثرات الصوتية والبصرية الاحترافية.", description_en: "Editing video footages, color grading, motion graphics, and audio sync using Premiere & After Effects." },
    { id: "pr_specialist", title_ar: "أخصائي علاقات عامة (Public Relations Specialist - PR)", title_en: "PR Specialist", category: "other", icon: "fa-solid fa-newspaper", description_ar: "إدارة التواصل مع وسائل الإعلام وصياغة البيانات الرسمية والحفاظ على سمعة الشركة.", description_en: "Managing media relations, drafting press releases, crisis communications, and corporate reputation." },
    { id: "customer_service_mgr", title_ar: "مدير خدمة العملاء (Customer Service Manager)", title_en: "Customer Service Manager", category: "other", icon: "fa-solid fa-comments", description_ar: "قيادة فريق الدعم ورعاية العملاء وضمان تحقيق أعلى معدلات الرضا والولاء للمؤسسة.", description_en: "Directing support teams, SLA response metrics, customer satisfaction (CSAT), and resolution quality." },
    { id: "prompt_engineer", title_ar: "مهندس هندسة الأوامر الذكية (Prompt Engineer)", title_en: "Prompt Engineer", category: "tech", icon: "fa-solid fa-terminal", description_ar: "صياغة وهندسة الاستعلامات لنماذج اللغات الضخمة (LLMs) لتحقيق أقصى قدر من الدقة الفنية.", description_en: "Designing and optimizing prompt strategies, system instructions, and RAG pipelines for LLMs." },
    { id: "scrum_master", title_ar: "سكرام ماستر (Scrum Master)", title_en: "Scrum Master", category: "tech", icon: "fa-solid fa-rotate-right", description_ar: "تسهيل اجتماعات الأجايل، إزالة العقبات عن الفريق، وضمان تسليم البرمجيات في مواعيدها.", description_en: "Facilitating Agile Scrum ceremonies, resolving team blockers, and driving sprint velocity." },
    { id: "agile_coach", title_ar: "مدرب آجايل (Agile Coach)", title_en: "Agile Coach", category: "tech", icon: "fa-solid fa-chalkboard-user", description_ar: "تدريب فرق العمل والمؤسسات على تطبيق منهجيات التحول الرقمي والمرونة البرمجية.", description_en: "Guiding enterprise teams in scaling Agile frameworks, Kanban, and DevOps culture transformation." },
    { id: "technical_pm", title_ar: "مدير منتج تقني (Technical Product Manager)", title_en: "Technical Product Manager", category: "tech", icon: "fa-solid fa-box-open", description_ar: "تحديد رؤية المنتج التقني، تحديد الأولويات، والتنسيق بين الهندسة والتسويق والإدارة.", description_en: "Defining technical product roadmaps, user story specs, and feature prioritization matrices." },
    { id: "cloud_security_eng", title_ar: "مهندس أمن سحابي (Cloud Security Engineer)", title_en: "Cloud Security Engineer", category: "tech", icon: "fa-solid fa-cloud-shield", description_ar: "تأمين حزم البيانات والخوادم السحابية ومنع اختراقات الهوية وتطبيق معايير Compliance.", description_en: "Engineering zero-trust IAM policies, cloud security posture management (CSPM), and encryption." },
    { id: "malware_analyst", title_ar: "محلل برمجيات خبيثة (Malware Analyst)", title_en: "Malware Analyst", category: "tech", icon: "fa-solid fa-virus-slash", description_ar: "تحليل وتفكيك الفيروسات والبرمجيات الخبيثة هندسيًا وفهم آليات عملها للتصدي لها.", description_en: "Reverse engineering malicious binaries, analyzing C2 command protocols, and writing YARA rules." },
    { id: "graphql_dev", title_ar: "مطور APIs & GraphQL", title_en: "GraphQL & API Engineer", category: "tech", icon: "fa-solid fa-diagram-next", description_ar: "تصميم ومعمارية واجهات البرمجة فائقة السرعة واستعلامات GraphQL للخوادم الموزعة.", description_en: "Architecting high-performance GraphQL schemas, RESTful gateways, and gRPC microservices." },
    { id: "salesforce_dev", title_ar: "مطور سيلزفورس (Salesforce Developer)", title_en: "Salesforce Developer", category: "tech", icon: "fa-solid fa-cloud", description_ar: "تخصيص وبرمجة منصات إدارة علاقات العملاء Salesforce باستخدام Apex و LWC.", description_en: "Developing custom Salesforce Apex triggers, Lightning Web Components, and CRM workflows." },
    { id: "sap_consultant", title_ar: "مستشار SAP (SAP ERP Consultant)", title_en: "SAP Consultant", category: "business", icon: "fa-solid fa-building-user", description_ar: "تهيئة وإدارة أنظمة SAP المالية والإدارية للشركات المؤسسية الكبرى.", description_en: "Configuring SAP S/4HANA enterprise modules, business process integration, and client training." },
    { id: "erp_consultant", title_ar: "مستشار أنظمة ERP (ERP Consultant)", title_en: "ERP Consultant", category: "business", icon: "fa-solid fa-cubes", description_ar: "تحليل وتطبيق حلول تخطيط موارد المؤسسات (Odoo/Oracle/SAP) لتكامل الأقسام.", description_en: "Implementing enterprise resource planning systems, business module alignment, and data migration." },
    { id: "risk_manager", title_ar: "مدير مخاطر مالية (Financial Risk Manager)", title_en: "Financial Risk Manager", category: "business", icon: "fa-solid fa-triangle-exclamation", description_ar: "قياس المخاطر الاستثمارية والائتمانية ووضع استراتيجيات الحماية التحوطية للمؤسسة.", description_en: "Assessing credit, market, and operational risk metrics, and developing hedging strategies." },
    { id: "growth_hacker", title_ar: "أخصائي استراتيجيات النمو (Growth Hacker)", title_en: "Growth Hacker", category: "marketing", icon: "fa-solid fa-chart-line-up", description_ar: "دمج البرمجة بالتسويق لاختراق قنوات اكتساب العملاء وزيادة معدلات الانتشار الفيروسي.", description_en: "Combining data analytics, rapid A/B experimentation, and viral loops to accelerate user growth." },
    { id: "event_manager", title_ar: "مدير فعاليات ومؤتمرات (Event Manager)", title_en: "Event Manager", category: "other", icon: "fa-solid fa-calendar-check", description_ar: "تخطيط وتنفيذ المؤتمرات والمعارض الكبرى وإدارة الضيوف والرعاة الاحترافيين.", description_en: "Planning and executing large-scale corporate conferences, vendor logistics, and sponsorships." },
    { id: "hotel_manager", title_ar: "مدير فندق ومنتجع (Hotel & Resort Manager)", title_en: "Hotel Manager", category: "other", icon: "fa-solid fa-hotel", description_ar: "إدارة تشغيل الفنادق والضيافة ومتابعة تقييمات النزلاء وجودة الخدمات الفندقية.", description_en: "Overseeing hospitality operations, guest satisfaction metrics, staff leadership, and revenue management." },
    { id: "legal_counsel", title_ar: "مستشار قانوني (Corporate Legal Counsel)", title_en: "Corporate Legal Counsel", category: "other", icon: "fa-solid fa-scale-balanced", description_ar: "صياغة العقود التجارية، تقديم الاستشارات القانونية، وضمان الالتزام بقوانين الاستثمار والعمل.", description_en: "Drafting commercial contracts, managing corporate governance, regulatory compliance, and IP protection." }
];

// Expose globally for both Browser and Node tests
if (typeof window !== 'undefined') {
    window.jobsList = rawJobsDataset;
} else if (typeof global !== 'undefined') {
    global.window = global.window || {};
    global.window.jobsList = rawJobsDataset;
}

// Render Jobs List View with Search & Category Filters
function renderJobsListView() {
    const lang = AppState.language;
    const dict = translations[lang] || translations.ar;
    const container = document.getElementById('view-jobs');
    if (!container) return;

    let activeCategory = 'all';
    let searchQuery = '';

    container.innerHTML = `
        <div class="jobs-view-container">
            <div class="section-header">
                <div class="section-badge"><i class="fa-solid fa-briefcase"></i> ${dict.jobs_title}</div>
                <h2 class="section-title">${dict.jobs_title}</h2>
                <p class="section-subtitle">${dict.jobs_sub}</p>
            </div>

            <!-- Search Bar & Filters -->
            <div class="jobs-controls-wrapper glass-card" style="padding: 24px; margin-bottom: 32px; direction: ltr !important;">
                <div class="search-box-wrapper" style="position: relative; margin-bottom: 20px;">
                    <i class="fa-solid fa-magnifying-glass" style="position: absolute; ${lang === 'ar' ? 'right: 18px' : 'left: 18px'}; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 1.1rem;"></i>
                    <input type="text" id="jobs-search-input" placeholder="${dict.search_jobs_placeholder}" 
                        style="width: 100%; padding: 14px ${lang === 'ar' ? '50px 14px 18px' : '18px 14px 50px'}; background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: var(--text-main); font-size: 1rem; outline: none; transition: var(--transition-fast);">
                </div>

                <!-- Category Filter Badges -->
                <div class="category-filters-row" style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; direction: ltr !important;">
                    <button class="cat-filter-btn active" data-cat="all"><i class="fa-solid fa-border-all"></i> ${dict.cat_all}</button>
                    <button class="cat-filter-btn" data-cat="tech"><i class="fa-solid fa-laptop-code"></i> ${dict.cat_tech}</button>
                    <button class="cat-filter-btn" data-cat="business"><i class="fa-solid fa-chart-line"></i> ${dict.cat_business}</button>
                    <button class="cat-filter-btn" data-cat="marketing"><i class="fa-solid fa-bullhorn"></i> ${dict.cat_marketing}</button>
                    <button class="cat-filter-btn" data-cat="hr"><i class="fa-solid fa-users-gear"></i> ${dict.cat_hr}</button>
                    <button class="cat-filter-btn" data-cat="other"><i class="fa-solid fa-shapes"></i> ${dict.cat_other}</button>
                </div>
            </div>

            <!-- Jobs Grid -->
            <div id="jobs-grid-container" class="jobs-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px;">
            </div>
        </div>
    `;

    // Filter Buttons Styling CSS
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
        .cat-filter-btn {
            padding: 8px 18px;
            border-radius: var(--radius-full);
            background: rgba(31, 41, 55, 0.6);
            border: 1px solid var(--border-subtle);
            color: var(--text-muted);
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition-fast);
        }
        .cat-filter-btn:hover {
            border-color: var(--primary-gold);
            color: var(--text-main);
        }
        .cat-filter-btn.active {
            background: var(--gold-gradient);
            color: var(--bg-primary);
            font-weight: 700;
            border: none;
            box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }
        .job-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: var(--bg-card);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-lg);
            padding: 24px;
            transition: var(--transition-normal);
        }
        .job-card:hover {
            transform: translateY(-6px);
            border-color: var(--primary-gold);
            box-shadow: var(--shadow-card), var(--shadow-gold);
        }
    `;
    document.head.appendChild(styleEl);

    // Grid update function
    const updateGrid = () => {
        const grid = document.getElementById('jobs-grid-container');
        if (!grid) return;

        const currentJobs = (typeof window !== 'undefined' ? window.jobsList : rawJobsDataset) || [];
        const filtered = currentJobs.filter(job => {
            const matchesCat = activeCategory === 'all' || job.category === activeCategory;
            const title = (lang === 'ar' ? job.title_ar : job.title_en).toLowerCase();
            const desc = (lang === 'ar' ? job.description_ar : job.description_en).toLowerCase();
            const matchesSearch = title.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;" class="glass-card">
                    <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px;"></i>
                    <h3 style="font-size: 1.3rem;">${lang === 'ar' ? 'لم يتم العثور على وظائف مطابقة' : 'No matching jobs found'}</h3>
                    <p style="color: var(--text-muted); margin-top: 8px;">${lang === 'ar' ? 'جرب البحث بكلمات أخرى أو اختر فئة مختلفة' : 'Try searching with different keywords'}</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(job => `
            <div class="job-card">
                <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
                        <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(245, 158, 11, 0.15); color: var(--primary-gold); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                            <i class="${job.icon}"></i>
                        </div>
                        <span style="font-size: 0.75rem; padding: 4px 12px; border-radius: var(--radius-full); background: rgba(255, 255, 255, 0.06); border: 1px solid var(--border-subtle); color: var(--primary-gold); font-weight: 700; text-transform: uppercase;">
                            ${job.category}
                        </span>
                    </div>
                    
                    <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 10px; color: var(--text-main);">
                        ${lang === 'ar' ? job.title_ar : job.title_en}
                    </h3>
                    
                    <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                        ${lang === 'ar' ? job.description_ar : job.description_en}
                    </p>
                </div>

                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 12px;">
                    <button class="primary-gold-btn start-exam-btn" data-jobid="${job.id}" style="width: 100%; font-size: 0.95rem; padding: 12px 18px;">
                        <i class="fa-solid fa-play"></i> ${dict.take_exam_btn}
                    </button>
                    <button class="secondary-btn preview-desc-btn" data-jobid="${job.id}" style="width: 100%; font-size: 0.88rem; padding: 10px 14px;">
                        <i class="fa-solid fa-file-contract"></i> ${dict.view_job_desc_btn}
                    </button>
                </div>
            </div>
        `).join('');

        const startBtns = grid.querySelectorAll('.start-exam-btn');
        startBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const jobId = btn.getAttribute('data-jobid');
                startJobExam(jobId);
            });
        });

        const previewBtns = grid.querySelectorAll('.preview-desc-btn');
        previewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const jobId = btn.getAttribute('data-jobid');
                previewJobDescription(jobId);
            });
        });
    };

    const searchInput = document.getElementById('jobs-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            updateGrid();
        });
    }

    const catBtns = container.querySelectorAll('.cat-filter-btn');
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-cat');
            updateGrid();
        });
    });

    updateGrid();
}

function startJobExam(jobId) {
    AppState.selectedJobId = jobId;
    AppState.exam.jobId = jobId;
    AppState.setJobsSubView('exam');
    Router.navigateTo('jobs', 'exam');
}

function previewJobDescription(jobId) {
    AppState.selectedJobId = jobId;
    AppState.exam.jobId = jobId;
    AppState.setJobsSubView('job-description');
    if (typeof renderJobDescriptionView === 'function') {
        renderJobDescriptionView();
    } else {
        Router.navigateTo('jobs', 'job-description');
    }
}

