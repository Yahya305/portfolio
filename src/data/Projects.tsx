export type PortfolioProject = {
    id: string;
    title: string;
    category: string;
    description: string;
    technologies?: string[];
    highlights?: string[];
    url?: string;
    imageURL?: string;
};

export const projects: PortfolioProject[] = [
    {
        id: "follow",
        title: "Follow",
        category: "Video-First Social Platform",
        description:
            "Designed the personalization and recommendation engine and proposed the system architecture for a video-first social platform.",
        technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "AWS"],
        highlights: [
            "Architected a platform across 11 independently scaled services.",
            "Built video upload and adaptive-bitrate streaming with S3, MediaConvert, HLS, and CloudFront.",
            "Validated 10,000 concurrent users at a 0.05% error rate and improved feed response time 9x.",
        ],
        url: "https://follow.global/",
        imageURL: "/follow.png",
    },
    {
        id: "membership-sales-coach",
        title: "Membership Sales Coach",
        category: "AI Sales-Training Platform",
        description:
            "Built an AI coaching and role-play platform that helps sales teams learn from a source-grounded knowledge base and practice with AI buyer personas.",
        technologies: ["RAG", "LLM Agents", "PII Redaction", "Prompt Engineering"],
        highlights: [
            "Delivered source citations and hallucination guardrails for coach-mode answers.",
            "Created AI buyer personas and competency-based scoring for live sales-call practice.",
            "Reduced LLM token usage and API cost by roughly 40% per conversation.",
        ],
        url: "https://play.google.com/store/apps/details?id=com.thefitnessflywheel.app&hl=en",
        imageURL: "/membership-sales-coach.jpg",
    },
    {
        id: "shipfacet",
        title: "Shipfacet",
        category: "AI Maritime Operations Platform",
        description:
            "Developed a B2B multi-agent decision-support platform for voyage intelligence, vessel valuation, charter-party analysis, and operational risk assessment.",
        technologies: [
            "Python",
            "FastAPI",
            "LangGraph",
            "Milvus",
            "React",
            "TypeScript",
        ],
        highlights: [
            "Implemented supervisor orchestration, RAG workflows, and vector search with source citations.",
            "Built guarded natural-language-to-SQL valuation and deterministic risk calculations.",
            "Delivered a streaming chat experience for complex maritime operations workflows.",
        ],
        url: "https://shipfacet.com/",
        imageURL: "/shipfacet.jpg",
    },
    {
        id: "helion",
        title: "Helion (AI Assistant)",
        category: "Conversational AI Assistant",
        description:
            "An advanced conversational AI agent featuring persistent memory, web search, weather tools, and real-time streaming responses powered by LangGraph and Gemini 2.0.",
        technologies: ["LangGraph", "Gemini", "Streaming", "Tool Calling"],
        url: "https://github.com/Yahya305/Helion-AI-Chatbot",
        imageURL:
            "https://raw.githubusercontent.com/Yahya305/Helion-AI-Chatbot/refs/heads/master/client/public/ToolsIntegration.png",
    },
    {
        id: "sketcha",
        title: "Sketcha",
        category: "Architecture Diagramming Agent",
        description:
            "An intelligent architectural diagramming agent that transforms natural language into complex technical visualizations, including UML diagrams and flowcharts.",
        technologies: ["Next.js", "TypeScript", "AI Agents"],
        url: "https://sketcha-tan.vercel.app",
        imageURL: "/Sketcha.png",
    },
    {
        id: "streaming-app",
        title: "Streaming App",
        category: "Video Delivery Architecture",
        description:
            "A high-performance architecture featuring resumable direct-to-storage uploads, adaptive bitrate streaming, and non-blocking real-time progress tracking.",
        technologies: ["Cloudflare R2", "FFmpeg", "HLS", "Redis", "SSE"],
        url: "https://github.com/Yahya305/StreamingApp",
        imageURL: "/StreamingApp.png",
    },
    {
        id: "ai-resume-analyzer",
        title: "AI Resume Analyzer",
        category: "Resume Intelligence Tool",
        description:
            "A tool that parses resume information with natural language processing, groups keywords into sectors, and provides recommendations, predictions, and applicant analytics.",
        technologies: ["NLP", "Keyword Analysis", "Analytics"],
        url: "https://github.com/Yahya305/AI-Resume-Analyzer",
        imageURL:
            "https://github.com/Yahya305/AI-Resume-Analyzer/raw/main/screenshots/user/1-main-screen.png?raw=true",
    },
    {
        id: "doctor-saab",
        title: "Doctor Saab",
        category: "AI Medical Chatbot",
        description:
            "An AI-powered medical chatbot using LLMs, RAG, vector databases, and a structured knowledge base for accurate, context-aware responses.",
        technologies: ["LLMs", "RAG", "Vector Database", "Streaming"],
        url: "https://github.com/Yahya305/Daaktar-Saab",
        imageURL: "/screenshot.png",
    },
    {
        id: "marketplace-admin-panel",
        title: "Marketplace Admin Panel",
        category: "Finance Operations Dashboard",
        description:
            "An admin panel for a finance and business platform with interactive data visualizations, sub-user management, and intuitive administration controls.",
        technologies: ["Data Visualization", "User Management", "Admin Tools"],
        url: "https://github.com/Yahya305/Marketplace-AdminPanel",
        imageURL:
            "https://github.com/Yahya305/Marketplace-AdminPanel/raw/main/public/dashboard.png",
    },
    {
        id: "fake-news-detector",
        title: "AI Fake News Detector",
        category: "Content Moderation Tool",
        description:
            "A machine-learning project that classifies news articles as real or fake to support content moderation and reduce misinformation.",
        technologies: ["Machine Learning", "Text Classification", "Content Moderation"],
        url: "https://github.com/Yahya305/Fake-News-Detector-AI",
        imageURL:
            "https://github.com/Yahya305/Fake-News-Detector-AI/blob/main/public/demo.jpg?raw=true",
    },
];
