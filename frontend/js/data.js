/**
 * Placeholder project data.
 * Once the Django backend is up, replace this with a fetch() call to
 * GET /api/projects/  (see api.js when that's wired in).
 * Shape mirrors the intended Project model: title, slug, summary, tags,
 * status, ledger (key facts), links, featured.
 */
const PROJECTS = [
  {
    idx: '01',
    slug: 'privverify',
    title: 'PrivVerify',
    status: 'In progress — Final Year Project',
    featured: true,
    summary: 'A privacy-preserving verification framework for agentic RAG pipelines, using a redact-then-restore mechanism to check outputs without exposing sensitive source content.',
    tags: ['RAG', 'Privacy', 'Agentic AI', 'FYP'],
    ledger: [
      ['pipeline', 'three-stage, single verification mechanism'],
      ['benchmark against', 'CHARM (arXiv 2606.04435)'],
      ['built on', 'AI Scholar Chatbot infra'],
    ],
    links: { github: '#', demo: '' },
  },
  {
    idx: '02',
    slug: 'scholar-chatbot',
    title: 'AI Scholar Chatbot',
    status: 'Completed',
    featured: true,
    summary: 'A CPU-only, open-source RAG system that answers questions from a scholar\'s recorded lectures — the retrieval infrastructure PrivVerify is built on.',
    tags: ['RAG', 'NLP', 'CPU-only', 'Open Source'],
    ledger: [
      ['retrieval', 'FAISS IndexFlatIP + BM25 hybrid'],
      ['rerank', 'ms-marco-MiniLM-L-6-v2'],
      ['embeddings', 'BAAI/bge-small-en-v1.5'],
      ['generation', '3–4B quantized LLM via Ollama'],
    ],
    links: { github: '#', demo: '' },
  },
  {
    idx: '03',
    slug: 'distributed-ann-search',
    title: 'Distributed ANN Search',
    status: 'Completed',
    featured: true,
    summary: 'Comparative study of approximate nearest-neighbor search across FAISS and HNSW, deployed and benchmarked over MPI and TCP-based distributed setups.',
    tags: ['Distributed Systems', 'Vector Search', 'FAISS', 'HNSW'],
    ledger: [
      ['compared', 'FAISS vs HNSW'],
      ['deployment', 'MPI and TCP'],
      ['collaborator', 'Maimoon Hanan'],
    ],
    links: { github: 'https://github.com/saneedkhani/Distributed-Approximate-Nearest-Neighbor-Search-for-Large-Scale-Semantic-Text-Retrieval', demo: '' },
  },
  {
    idx: '04',
    slug: 'meeting-to-action-agent',
    title: 'Meeting-to-Action Pipeline',
    status: 'Deployed',
    featured: true,
    summary: 'An AI agent built for an internship application that turns meeting transcripts into structured action items, deployed and tested end-to-end.',
    tags: ['Agents', 'LLM', 'Streamlit'],
    ledger: [
      ['LLM', 'LLaMA 3.3 70B via Groq'],
      ['interface', 'Streamlit'],
      ['status', 'deployed and tested'],
    ],
    links: { github: 'https://github.com/saneedkhani/meeting-pipeline', demo: '' },
  },
  {
    idx: '05',
    slug: 'transformer-rag-from-scratch',
    title: 'Transformer RAG From Scratch',
    status: 'Coursework — NLP Assignment 3',
    featured: false,
    summary: 'A full RAG pipeline built without pretrained models or nn.Transformer: an encoder-only Transformer for classification, cosine-similarity retrieval over 42,000 embeddings, and a decoder-only Transformer for generation.',
    tags: ['Transformers', 'NLP', 'From Scratch'],
    ledger: [
      ['dataset', 'Amazon Reviews'],
      ['retrieval corpus', '42,000 embeddings'],
      ['constraint', 'no pretrained models'],
    ],
    links: { github: '#', demo: '' },
  },
  {
    idx: '06',
    slug: 'social-media-popularity-paper',
    title: 'Viral Trend Prediction (Paper)',
    status: 'Co-authored paper',
    featured: false,
    summary: 'Reproduced the SMP-LLM framework for social media popularity prediction and proposed a lightweight Sentence-BERT Gated Fusion Network alternative.',
    tags: ['Research', 'Deep Learning', 'LaTeX'],
    ledger: [
      ['baseline reproduced', 'SMP-LLM'],
      ['proposed', 'SBERT Gated Fusion Network'],
      ['written in', 'IEEEtran, Overleaf'],
    ],
    links: { github: '#', demo: '' },
  },
  {
    idx: '07',
    slug: 'dropout-prediction',
    title: 'Dropout Risk Prediction',
    status: 'Completed',
    featured: false,
    summary: 'A Random Forest system with probability thresholding to classify students into Low/Medium/High dropout risk, applied to a non-formal education dataset.',
    tags: ['ML', 'Classification', 'Random Forest'],
    ledger: [
      ['model', 'Random Forest + probability thresholding'],
      ['classes', 'Low / Medium / High risk'],
      ['features', 'attendance, migration history, marks'],
    ],
    links: { github: '#', demo: '' },
  },
  {
    idx: '08',
    slug: 'agentic-ai-report',
    title: 'Agentic AI Systems — Strategic Report',
    status: 'Group report',
    featured: false,
    summary: 'A group strategic report examining agentic AI systems across sectors, proposing adoption frameworks.',
    tags: ['Agentic AI', 'Research', 'Strategy'],
    ledger: [
      ['scope', 'agentic AI across sectors'],
      ['output', 'proposed frameworks'],
    ],
    links: { github: '#', demo: '' },
  },
];

const SKILLS = [
  { cat: 'Languages', items: ['Python','Django', 'LaTeX', 'JavaScript / Node.js'] },
  { cat: 'RAG & Retrieval', items: ['FAISS', 'HNSW', 'BM25', 'Cross-encoder reranking', 'Sentence embeddings'] },
  { cat: 'Systems', items: ['Distributed computing (MPI/TCP)', 'CPU-only ML pipelines', 'Django', 'Flask / Streamlit'] },
  { cat: 'ML / DL', items: ['scikit-learn', 'XGBoost', 'CNNs', 'Reinforcement learning', 'Genetic algorithms'] },
];
