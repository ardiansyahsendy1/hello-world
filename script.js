const workflowTemplate = [
  {
    id: 'objective',
    label: 'Objective',
    description: 'Captured the user goal, scope, and output preferences.'
  },
  {
    id: 'plan',
    label: 'Research plan',
    description: 'Converted the objective into research questions and a working approach.'
  },
  {
    id: 'sources',
    label: 'Source collection',
    description: 'Selected relevant reports, benchmarks, and qualitative references.'
  },
  {
    id: 'evidence',
    label: 'Evidence extraction',
    description: 'Pulled claims, notes, and supporting excerpts from the source set.'
  },
  {
    id: 'synthesis',
    label: 'Synthesis',
    description: 'Turned evidence into practical findings and tradeoff analysis.'
  },
  {
    id: 'brief',
    label: 'Final brief',
    description: 'Compiled the executive summary, recommendations, risks, and next steps.'
  }
];

const scenarioCatalog = [
  {
    id: 'ai-notes',
    matcher: /note|meeting|transcript|remote team|pilot/i,
    title: 'AI note-taking tools for small teams',
    domain: 'Productivity software',
    summary: 'For a fast pilot rollout, prioritize tools with the shortest setup time, strong meeting summaries, and minimal change management. The scenario indicates that lightweight onboarding and clear collaboration features matter more than broad enterprise functionality during an early team test.',
    plan: [
      'Define the pilot outcome as faster meeting follow-up and clearer action ownership.',
      'Compare onboarding speed, summary quality, integrations, and pricing clarity.',
      'Use a short internal pilot with one cross-functional team before wider rollout.'
    ],
    recommendations: [
      'Shortlist products with setup under one hour and strong calendar integration.',
      'Run a two-week pilot with one team lead and one operations owner.',
      'Measure summary accuracy, adoption, and post-meeting follow-through before choosing a winner.'
    ],
    questions: [
      'Does the preferred tool support the meeting platforms already used by the team?',
      'How much editing is required before summaries can be shared externally?'
    ],
    risks: [
      'Teams may resist adoption if summaries need heavy manual cleanup.',
      'Transcript retention policies may create legal or compliance concerns.'
    ],
    notes: [
      'Onboarding speed consistently shaped trial completion in the scenario sources.',
      'Feature breadth mattered less than summary usefulness during early evaluation.'
    ],
    confidence: 'high',
    findings: [
      {
        title: 'Fast onboarding is the strongest early adoption driver',
        summary: 'Teams are more likely to complete a pilot when setup is simple and the first summary feels immediately usable.',
        confidence: 'high'
      },
      {
        title: 'Action-item clarity matters more than transcript length',
        summary: 'Users care most about concise summaries, clear owners, and quick follow-up workflows.',
        confidence: 'high'
      },
      {
        title: 'Enterprise breadth is not essential in the first pilot',
        summary: 'For a small-team test, ease of rollout outranks advanced admin controls and deeper customization.',
        confidence: 'medium'
      }
    ],
    sources: [
      {
        title: 'SMB Collaboration Adoption Benchmark',
        type: 'benchmark report',
        reliability: 'high',
        relevance: 'Explains why low-friction onboarding improves software trial completion.',
        note: 'Used to evaluate adoption risk during the pilot phase.'
      },
      {
        title: 'Internal Pilot Evaluation Template',
        type: 'operating note',
        reliability: 'medium',
        relevance: 'Defines success metrics for meeting summary workflows and owner tracking.',
        note: 'Used to frame evaluation criteria for the final recommendation.'
      },
      {
        title: 'Meeting Productivity Buyer Signals',
        type: 'market note',
        reliability: 'medium',
        relevance: 'Highlights what small teams prioritize when adopting note automation tools.',
        note: 'Used to rank feature importance for the MVP comparison.'
      }
    ],
    evidence: [
      {
        claim: 'Low setup effort correlates with stronger pilot completion rates.',
        source: 'SMB Collaboration Adoption Benchmark',
        strength: 'high',
        excerpt: 'Short setup windows reduce evaluation friction and increase the chance that teams finish the first trial cycle.'
      },
      {
        claim: 'Teams value useful summaries more than long-form transcripts.',
        source: 'Meeting Productivity Buyer Signals',
        strength: 'high',
        excerpt: 'Decision makers prioritized summary clarity, action extraction, and shareability over raw transcript depth.'
      },
      {
        claim: 'Simple operating metrics make pilot decisions faster.',
        source: 'Internal Pilot Evaluation Template',
        strength: 'medium',
        excerpt: 'When teams track summary accuracy, owner clarity, and turnaround time, product selection becomes easier.'
      }
    ]
  },
  {
    id: 'saas-launch',
    matcher: /launch|go to market|channel|saas|acquisition/i,
    title: 'Launch channels for a niche SaaS',
    domain: 'Go-to-market strategy',
    summary: 'For a niche SaaS launch, the scenario favors focused channels that compound credibility rather than broad paid reach. Founder-led content, targeted communities, and direct outreach appear more efficient than heavy paid campaigns during the first stage.',
    plan: [
      'Identify the narrow buyer profile and where these users already gather.',
      'Compare intent-rich channels against broad awareness channels.',
      'Recommend a launch sequence that creates feedback loops and proof early.'
    ],
    recommendations: [
      'Start with founder-led educational content around the specific customer pain point.',
      'Layer in direct outreach to a targeted prospect list after validating messaging.',
      'Use community participation and case-based content before scaling paid acquisition.'
    ],
    questions: [
      'Which segment has the shortest path from awareness to trial?',
      'What proof point will best convert early skepticism into demos?'
    ],
    risks: [
      'Paid campaigns may burn budget before the positioning is clear.',
      'Community-led growth can stall if the product story is too broad.'
    ],
    notes: [
      'High-intent channels outperform broad awareness during the earliest phase.',
      'Proof and specificity matter more than reach for a niche offer.'
    ],
    confidence: 'medium',
    findings: [
      {
        title: 'Focused channels outperform broad paid awareness early',
        summary: 'Channels with strong problem awareness produce better early feedback and lower acquisition waste.',
        confidence: 'high'
      },
      {
        title: 'Specific messaging converts better than category-level positioning',
        summary: 'The closer the launch message is to a concrete user pain point, the stronger the response.',
        confidence: 'medium'
      },
      {
        title: 'Proof assets should precede scale',
        summary: 'Case examples and concrete outcomes make later channel expansion more efficient.',
        confidence: 'medium'
      }
    ],
    sources: [
      {
        title: 'Early Stage SaaS Channel Efficiency Notes',
        type: 'market note',
        reliability: 'medium',
        relevance: 'Compares feedback quality across paid, community, and outbound channels.',
        note: 'Used to prioritize learning speed over raw reach.'
      },
      {
        title: 'Founder-Led Distribution Patterns',
        type: 'strategy memo',
        reliability: 'medium',
        relevance: 'Shows how narrow educational content builds authority in early launches.',
        note: 'Used to shape the recommended launch sequence.'
      },
      {
        title: 'Niche SaaS Messaging Conversion Review',
        type: 'conversion analysis',
        reliability: 'high',
        relevance: 'Highlights the link between specificity and early conversion quality.',
        note: 'Used to support the messaging recommendation.'
      }
    ],
    evidence: [
      {
        claim: 'Problem-aware audiences deliver better feedback than broad traffic sources.',
        source: 'Early Stage SaaS Channel Efficiency Notes',
        strength: 'high',
        excerpt: 'Narrow distribution channels produced higher quality responses and faster product learning than generalized campaigns.'
      },
      {
        claim: 'Founder voice is a strong trust signal in a niche category.',
        source: 'Founder-Led Distribution Patterns',
        strength: 'medium',
        excerpt: 'Early buyers responded more positively to educational content tied directly to operator experience.'
      },
      {
        claim: 'Specific positioning improves demo conversion.',
        source: 'Niche SaaS Messaging Conversion Review',
        strength: 'high',
        excerpt: 'Messaging anchored to a single urgent pain point converted more consistently than broad category descriptions.'
      }
    ]
  },
  {
    id: 'chatbot-options',
    matcher: /chatbot|support|customer service|website assistant|knowledge base/i,
    title: 'Website chatbot options for customer support',
    domain: 'Support tooling',
    summary: 'For a website support chatbot, the scenario favors solutions that reduce repetitive tickets without creating trust problems. The best option is typically the one with clear handoff paths, reliable knowledge coverage, and easy maintenance by support operations.',
    plan: [
      'Define the top repetitive support intents to automate first.',
      'Compare chatbot quality on knowledge coverage, escalation design, and upkeep effort.',
      'Recommend a rollout that starts with contained, low-risk support journeys.'
    ],
    recommendations: [
      'Start with a support assistant focused on repetitive questions and known workflows.',
      'Require clear escalation to human support for ambiguous or high-risk issues.',
      'Assign ownership for weekly knowledge review before expanding coverage.'
    ],
    questions: [
      'Which support intents are stable enough to automate immediately?',
      'How will the team detect hallucinated or outdated answers in production?'
    ],
    risks: [
      'Poor escalation design can increase frustration instead of reducing ticket load.',
      'Knowledge drift will erode answer quality if no owner reviews content regularly.'
    ],
    notes: [
      'Contained support workflows make early chatbot deployments safer.',
      'Operational ownership is as important as model quality in this scenario.'
    ],
    confidence: 'high',
    findings: [
      {
        title: 'Reliable escalation is a non-negotiable requirement',
        summary: 'Users tolerate automation more when there is an obvious path to a human for edge cases.',
        confidence: 'high'
      },
      {
        title: 'Knowledge maintenance drives long-term answer quality',
        summary: 'Chatbot success depends on keeping the underlying support content current and structured.',
        confidence: 'high'
      },
      {
        title: 'Scoped rollout lowers support risk',
        summary: 'Starting with repetitive support intents creates clearer measurement and fewer trust failures.',
        confidence: 'medium'
      }
    ],
    sources: [
      {
        title: 'Support Automation Operating Guide',
        type: 'operations guide',
        reliability: 'high',
        relevance: 'Explains safe rollout patterns for support automation and human handoff.',
        note: 'Used to define the first release scope.'
      },
      {
        title: 'Knowledge Base Maintenance Review',
        type: 'process review',
        reliability: 'high',
        relevance: 'Connects answer quality with content freshness and ownership.',
        note: 'Used to support the recommendation for weekly review ownership.'
      },
      {
        title: 'Customer Trust Signals in Automated Support',
        type: 'research note',
        reliability: 'medium',
        relevance: 'Highlights why visible escalation and confidence cues matter.',
        note: 'Used to evaluate support experience risk.'
      }
    ],
    evidence: [
      {
        claim: 'Visible human handoff improves user trust in automated support.',
        source: 'Customer Trust Signals in Automated Support',
        strength: 'high',
        excerpt: 'Users were more willing to accept automated answers when escalation paths were immediate and obvious.'
      },
      {
        claim: 'Knowledge freshness is a leading driver of support assistant quality.',
        source: 'Knowledge Base Maintenance Review',
        strength: 'high',
        excerpt: 'Teams with clear content ownership maintained more accurate support automation outcomes over time.'
      },
      {
        claim: 'Low-risk intent scoping reduces launch complexity.',
        source: 'Support Automation Operating Guide',
        strength: 'medium',
        excerpt: 'Beginning with repetitive, rules-based intents reduced incident risk during the first support automation rollout.'
      }
    ]
  }
];

const fallbackScenario = {
  id: 'generic-fallback',
  matcher: /.*/,
  title: 'Generic research scenario',
  domain: 'General analysis',
  summary: 'This fallback scenario creates a structured research brief for objectives that do not match a predefined topic. It emphasizes framing, source diversity, evidence tracking, and practical next steps without claiming live retrieval.',
  plan: [
    'Clarify the target decision, audience, and time horizon for the research request.',
    'Collect a balanced set of reference types to compare assumptions and tradeoffs.',
    'Convert evidence into a concise brief with decisions, risks, and follow-up questions.'
  ],
  recommendations: [
    'Narrow the decision question before expanding the source set.',
    'Validate the most important assumption with one direct evidence stream first.',
    'Use the resulting brief as a decision aid rather than a final proof source.'
  ],
  questions: [
    'Which outcome matters most for this research objective?',
    'What evidence would most quickly confirm or disprove the leading assumption?'
  ],
  risks: [
    'Broad objectives can create shallow findings without a clear decision lens.',
    'Mixed-quality references can reduce confidence if evidence criteria are unclear.'
  ],
  notes: [
    'Fallback mode uses deterministic placeholders rather than live external research.',
    'This static MVP is designed for product validation, not production-grade evidence gathering.'
  ],
  confidence: 'medium',
  findings: [
    {
      title: 'A tighter decision frame improves research quality',
      summary: 'Well-scoped questions lead to clearer plans, more relevant sources, and more actionable findings.',
      confidence: 'high'
    },
    {
      title: 'Source diversity improves tradeoff visibility',
      summary: 'Using multiple source types helps expose assumptions, limitations, and conflicting signals.',
      confidence: 'medium'
    },
    {
      title: 'Structured synthesis is necessary for actionability',
      summary: 'Raw notes become useful only after they are translated into decisions, risks, and next steps.',
      confidence: 'medium'
    }
  ],
  sources: [
    {
      title: 'Research Framing Checklist',
      type: 'playbook',
      reliability: 'medium',
      relevance: 'Provides a decision-led framing model for ambiguous objectives.',
      note: 'Used to shape the fallback research plan.'
    },
    {
      title: 'Evidence Quality Reference Guide',
      type: 'reference note',
      reliability: 'medium',
      relevance: 'Used to separate stronger support from weak assumptions.',
      note: 'Supports confidence scoring in the fallback scenario.'
    },
    {
      title: 'Synthesis Structure Template',
      type: 'analysis template',
      reliability: 'high',
      relevance: 'Helps convert findings into a concise executive brief.',
      note: 'Used to format the final report output.'
    }
  ],
  evidence: [
    {
      claim: 'Decision-led framing raises relevance across the workflow.',
      source: 'Research Framing Checklist',
      strength: 'high',
      excerpt: 'When the research goal is tied to a decision, planning and synthesis become more focused and useful.'
    },
    {
      claim: 'Confidence depends on both source quality and evidence traceability.',
      source: 'Evidence Quality Reference Guide',
      strength: 'medium',
      excerpt: 'Teams trust conclusions more when claims are linked to explicit supporting references.'
    },
    {
      claim: 'A repeatable brief format improves downstream usability.',
      source: 'Synthesis Structure Template',
      strength: 'high',
      excerpt: 'Consistent output structures make research easier to review, compare, and reuse.'
    }
  ]
};

const state = {
  input: {
    objective: '',
    scope: 'standard',
    format: 'brief',
    includeRisks: true,
    includeQuestions: true,
    includeNotes: true
  },
  run: {
    status: 'idle',
    activeStep: -1,
    completedAt: null
  },
  scenarioIndex: 0,
  scenario: fallbackScenario
};

const elements = {
  objectiveInput: document.getElementById('objective-input'),
  scopeInput: document.getElementById('scope-input'),
  formatInput: document.getElementById('format-input'),
  risksToggle: document.getElementById('risks-toggle'),
  questionsToggle: document.getElementById('questions-toggle'),
  notesToggle: document.getElementById('notes-toggle'),
  runButton: document.getElementById('run-demo-button'),
  workflowContainer: document.getElementById('workflow-steps'),
  findingsList: document.getElementById('findings-list'),
  sourcesList: document.getElementById('sources-list'),
  evidenceList: document.getElementById('evidence-list'),
  status: document.getElementById('run-status'),
  reportSummary: document.getElementById('report-summary'),
  reportPlan: document.getElementById('report-plan'),
  reportRecommendations: document.getElementById('report-recommendations'),
  reportQuestions: document.getElementById('report-questions'),
  reportRisks: document.getElementById('report-risks'),
  reportNotes: document.getElementById('report-notes'),
  reportConfidence: document.getElementById('report-confidence'),
  reportTimestamp: document.getElementById('report-timestamp'),
  copySummaryButton: document.getElementById('copy-summary-button'),
  loadScenarioButton: document.getElementById('load-scenario-button')
};

function cloneScenario(scenario) {
  return JSON.parse(JSON.stringify(scenario));
}

function getWorkflowSteps() {
  return workflowTemplate.map((step, index) => {
    let status = 'waiting';
    if (state.run.activeStep === index && state.run.status === 'running') {
      status = 'active';
    }
    if (state.run.activeStep > index || state.run.status === 'complete') {
      status = 'complete';
    }
    return { ...step, status, number: index + 1 };
  });
}

function selectScenarioForObjective(objective) {
  const matched = scenarioCatalog.find((scenario) => scenario.matcher.test(objective));
  return cloneScenario(matched || fallbackScenario);
}

function applyScenarioToInputs() {
  const scenario = scenarioCatalog[state.scenarioIndex % scenarioCatalog.length];
  state.input.objective = scenario.title === 'AI note-taking tools for small teams'
    ? 'Evaluate AI note-taking tools for small remote teams and identify the best option for a fast pilot rollout.'
    : scenario.title === 'Launch channels for a niche SaaS'
      ? 'Determine the most effective launch channels for a niche SaaS with a limited early-stage budget.'
      : 'Compare website chatbot options for customer support and recommend the safest rollout approach.';

  elements.objectiveInput.value = state.input.objective;
  elements.scopeInput.value = 'standard';
  elements.formatInput.value = 'brief';
  elements.risksToggle.checked = true;
  elements.questionsToggle.checked = true;
  elements.notesToggle.checked = true;
}

function readInputs() {
  state.input.objective = elements.objectiveInput.value.trim();
  state.input.scope = elements.scopeInput.value;
  state.input.format = elements.formatInput.value;
  state.input.includeRisks = elements.risksToggle.checked;
  state.input.includeQuestions = elements.questionsToggle.checked;
  state.input.includeNotes = elements.notesToggle.checked;
}

function renderWorkflow() {
  const steps = getWorkflowSteps();
  elements.workflowContainer.innerHTML = steps.map((step) => `
    <article class="workflow-step">
      <div class="workflow-top">
        <span class="workflow-number">${step.number}</span>
        <span class="status-pill status-${step.status}">${step.status}</span>
      </div>
      <h3>${step.label}</h3>
      <p>${step.description}</p>
    </article>
  `).join('');
}

function renderFindings() {
  const findings = state.scenario.findings || [];
  elements.findingsList.innerHTML = findings.map((finding) => `
    <article class="finding-card">
      <div class="card-top">
        <span class="tag confidence-${finding.confidence}">${finding.confidence} confidence</span>
      </div>
      <h4 class="card-title">${finding.title}</h4>
      <p class="finding-summary">${finding.summary}</p>
    </article>
  `).join('') || '<p class="empty-state">No findings yet. Run the demo to populate this panel.</p>';
}

function renderSources() {
  const sources = state.scenario.sources || [];
  elements.sourcesList.innerHTML = sources.map((source) => `
    <article class="source-card">
      <div class="card-top">
        <span class="tag">${source.type}</span>
        <span class="status-pill status-${source.reliability === 'high' ? 'complete' : source.reliability === 'medium' ? 'active' : 'waiting'}">${source.reliability} reliability</span>
      </div>
      <h4 class="card-title">${source.title}</h4>
      <p class="card-meta">${source.relevance}</p>
      <p class="source-note">${source.note}</p>
    </article>
  `).join('') || '<p class="empty-state">No sources yet. Run the demo to populate this panel.</p>';
}

function renderEvidence() {
  const evidence = state.scenario.evidence || [];
  elements.evidenceList.innerHTML = evidence.map((item) => `
    <article class="evidence-card">
      <div class="card-top">
        <span class="tag">${item.strength} strength</span>
      </div>
      <h4 class="card-title">${item.claim}</h4>
      <p class="card-meta">Source: ${item.source}</p>
      <p class="evidence-excerpt">${item.excerpt}</p>
    </article>
  `).join('') || '<p class="empty-state">No evidence yet. Run the demo to populate this panel.</p>';
}

function renderList(target, items, emptyText) {
  target.innerHTML = items.length
    ? items.map((item) => `<li>${item}</li>`).join('')
    : `<li>${emptyText}</li>`;
}

function buildPlanList() {
  return [
    `Objective: ${state.input.objective}`,
    `Scope: ${state.input.scope}`,
    `Output format: ${state.input.format}`,
    ...state.scenario.plan
  ];
}

function renderReport() {
  elements.reportSummary.textContent = state.scenario.summary;
  renderList(elements.reportPlan, buildPlanList(), 'No plan generated yet.');
  renderList(elements.reportRecommendations, state.scenario.recommendations, 'No recommendations generated yet.');
  renderList(
    elements.reportQuestions,
    state.input.includeQuestions ? state.scenario.questions : [],
    state.input.includeQuestions ? 'No open questions generated yet.' : 'Open questions hidden for this run.'
  );
  renderList(
    elements.reportRisks,
    state.input.includeRisks ? state.scenario.risks : [],
    state.input.includeRisks ? 'No risks generated yet.' : 'Risks hidden for this run.'
  );
  renderList(
    elements.reportNotes,
    state.input.includeNotes ? state.scenario.notes : [],
    state.input.includeNotes ? 'No source notes generated yet.' : 'Source notes hidden for this run.'
  );
  elements.reportConfidence.textContent = state.scenario.confidence;
  elements.reportConfidence.className = `tag confidence-${state.scenario.confidence}`;
  elements.reportTimestamp.textContent = state.run.completedAt || 'In progress';
}

function renderAll() {
  renderWorkflow();
  renderFindings();
  renderSources();
  renderEvidence();
  renderReport();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runDemoResearch() {
  readInputs();
  state.scenario = selectScenarioForObjective(state.input.objective || 'generic objective');
  state.run.status = 'running';
  state.run.completedAt = null;
  elements.status.textContent = `Running demo research for: ${state.scenario.title}`;

  for (let index = 0; index < workflowTemplate.length; index += 1) {
    state.run.activeStep = index;
    renderWorkflow();
    await sleep(420);
  }

  state.run.status = 'complete';
  state.run.activeStep = workflowTemplate.length;
  state.run.completedAt = new Date().toLocaleString();
  elements.status.textContent = `Completed research brief for: ${state.scenario.title}`;
  renderAll();
}

async function copySummary() {
  const summary = elements.reportSummary.textContent.trim();
  if (!summary || summary === 'Run the demo to generate a summary.') {
    elements.status.textContent = 'Run the demo before copying the summary.';
    return;
  }

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(summary);
      elements.status.textContent = 'Executive summary copied to clipboard.';
    } else {
      const helper = document.createElement('textarea');
      helper.value = summary;
      document.body.appendChild(helper);
      helper.select();
      document.execCommand('copy');
      document.body.removeChild(helper);
      elements.status.textContent = 'Executive summary copied using fallback copy mode.';
    }
  } catch (error) {
    elements.status.textContent = 'Unable to copy the summary in this browser context.';
  }
}

function loadAnotherScenario() {
  state.scenarioIndex = (state.scenarioIndex + 1) % scenarioCatalog.length;
  applyScenarioToInputs();
  state.scenario = cloneScenario(scenarioCatalog[state.scenarioIndex]);
  state.run.status = 'idle';
  state.run.activeStep = -1;
  state.run.completedAt = null;
  elements.status.textContent = `Loaded scenario: ${state.scenario.title}. Run the demo to generate a new brief.`;
  renderAll();
}

function initialize() {
  applyScenarioToInputs();
  state.scenario = cloneScenario(scenarioCatalog[0]);
  renderAll();
  elements.runButton.addEventListener('click', runDemoResearch);
  elements.copySummaryButton.addEventListener('click', copySummary);
  elements.loadScenarioButton.addEventListener('click', loadAnotherScenario);
}

initialize();
