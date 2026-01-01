import CardProjects from "@components/ui/CardProjects";

export const projects = [
    <CardProjects
        key={1}
        title="Helion (AI Assistant)"
        description="An advanced conversational AI agent featuring persistent memory, web search, weather tools, and real-time streaming responses powered by LangGraph and Gemini 2.0. "
        url="https://github.com/Yahya305/Helion-AI-Chatbot"
        imageURL="https://raw.githubusercontent.com/Yahya305/Helion-AI-Chatbot/refs/heads/master/client/public/ToolsIntegration.png"
    />,
    <CardProjects
        key={1}
        title="Sketcha"
        description="An intelligent architectural diagramming agent that transforms natural language into complex technical visualizations (UML, Flowcharts). Features iterative 'context-aware' design modification, persistent library management, and a premium Next.js interface."
        url="https://sketcha-tan.vercel.app"
        imageURL="/Sketcha.png"
    />,
    <CardProjects
        key={1}
        title="Streaming App"
        description="A high-performance architecture featuring resumable direct-to-storage uploads (Cloudflare R2), adaptive bitrate streaming (HLS) via FFmpeg transcoding, and non-blocking real-time progress tracking using Redis and Server-Sent Events."
        url="https://github.com/Yahya305/StreamingApp"
        imageURL="/StreamingApp.png"
    />,
    <CardProjects
        key={1}
        title="AI Resume Analyzer"
        description="Ai Resume Analyzer is a tool which parses information from a resume using natural language processing and finds the keywords, cluster them onto sectors based on their keywords. And lastly show recommendations, predictions, analytics to the applicant based on keyword matching."
        url="https://github.com/Yahya305/AI-Resume-Analyzer"
        imageURL="https://github.com/Yahya305/AI-Resume-Analyzer/raw/main/screenshots/user/1-main-screen.png?raw=true"
    />,
    <CardProjects
        key={2}
        title="Doctor Saab"
        description="Doctor Saab is an AI-powered medical chatbot using LLMs, RAG, vector databases, and a structured knowledge base for accurate, context-aware responses. With a modern UI, it delivers real-time streaming replies, rich HTML-formatted messages, and smooth interactions."
        url="https://github.com/Yahya305/Daaktar-Saab"
        imageURL="/screenshot.png"
    />,
    <CardProjects
        key={2}
        title="Marketplace Admin Panel"
        description="Admin panel for a finance/business platform, featuring advanced data visualizations with interactive graphs, robust management of sub-users, and intuitive controls for seamless administration."
        url="https://github.com/Yahya305/Marketplace-AdminPanel"
        imageURL="https://github.com/Yahya305/Marketplace-AdminPanel/raw/main/public/dashboard.png"
    />,
    <CardProjects
        key={4}
        title="AI Fake News Detector"
        description="This project is relevant to the media industry, news outlets, and social media platforms that are responsible for sharing news articles. Classifying news articles as real or fake can help these organizations improve their content moderation and reduce the spread of fake news."
        url="https://github.com/Yahya305/Fake-News-Detector-AI"
        imageURL="https://github.com/Yahya305/Fake-News-Detector-AI/blob/main/public/demo.jpg?raw=true"
    />,
    <CardProjects
        key={5}
        title="Four More Supports"
        description="A simple and secure app for booking doctor appointments. It streamlines healthcare access with features like specialist search, appointment management, and role-based access control, making it easier for patients to connect with doctors."
        url="https://github.com/Yahya305/FourMoreSupports"
        imageURL="https://github.com/Yahya305/FourMoreSupports/raw/main/four-more-supports-frontend/public/dashboard.png"
    />,
    <CardProjects
        key={3}
        title="AI GitHub Roaster"
        description="A cool AI that roasts your GitHub profile."
        url="https://github.com/Yahya305/AI-GitHub-Roaster"
        imageURL="https://github.com/Yahya305/AI-GitHub-Roaster/blob/main/public/image.png?raw=true"
    />,
];
