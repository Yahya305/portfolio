export type PortfolioProject = {
    id: string;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    highlights: string[];
    url?: string;
    imageURL?: string;
    confidential?: boolean;
};

export const caseStudies: PortfolioProject[] = [
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
        confidential: true,
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
        confidential: true,
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
        confidential: true,
    },
];

export const publicProjects: PortfolioProject[] = [
    {
        id: "sketcha",
        title: "Sketcha",
        category: "Architecture Diagramming Agent",
        description:
            "A natural-language diagramming agent for generating and iterating on technical visualizations, including UML diagrams and flowcharts.",
        technologies: ["Next.js", "TypeScript", "AI Agents"],
        highlights: [
            "Transforms plain-language requests into technical visualizations.",
            "Supports context-aware iterative design modifications.",
        ],
        url: "https://sketcha-tan.vercel.app",
        imageURL: "/Sketcha.png",
    },
    {
        id: "helion",
        title: "Helion",
        category: "Conversational AI Assistant",
        description:
            "A conversational AI assistant with persistent memory, live tool integrations, web search, weather, and streaming responses.",
        technologies: ["LangGraph", "Gemini", "Streaming", "Tool Calling"],
        highlights: [
            "Combines persistent context with external tool integrations.",
            "Streams responses for a responsive chat experience.",
        ],
        url: "https://github.com/Yahya305/Helion-AI-Chatbot",
        imageURL:
            "https://raw.githubusercontent.com/Yahya305/Helion-AI-Chatbot/refs/heads/master/client/public/ToolsIntegration.png",
    },
    {
        id: "streaming-app",
        title: "Streaming App",
        category: "Video Delivery Architecture",
        description:
            "A video platform architecture built around reliable large-file uploads, adaptive streaming, and real-time processing progress.",
        technologies: ["Cloudflare R2", "FFmpeg", "HLS", "Redis", "SSE"],
        highlights: [
            "Uses resumable direct-to-storage uploads for large media files.",
            "Delivers adaptive bitrate video and non-blocking progress updates.",
        ],
        url: "https://github.com/Yahya305/StreamingApp",
        imageURL: "/StreamingApp.png",
    },
];
