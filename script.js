const workflowTemplates = [
  {
    id: 'objective',
    label: 'Objective',
    description: 'Captured the research goal, scope, and output preferences.',
  },
  {
    id: 'plan',
    label: 'Research plan',
    description: 'Converted the objective into focused questions and a lightweight methodology.',
  },
  {
    id: 'sources',
    label: 'Source collection',
    description: 'Assembled a small evidence base with relevance and reliability notes.',
  },
  {
    id: 'evidence',
    label: 'Evidence extraction',
    description: 'Linked claims to source-backed notes and signal strength.',
  },
  {
    id: 'synthesis',
    label: 'Synthesis',
    description: 'Consolidated findings into concise insights and decision-ready framing.',
  },
  {
    id: 'report',
    label: 'Final brief',
    description: 'Compiled recommendations, risks, open questions, and confidence level.',
  },
];

const scenarios = [
  {
    id: 'launch-channels',
    matchTerms: ['launch', 'channel', 'saas', 'operations'],
    title: 'Launch Channels for Niche SaaS',
    domain: 'Go-to-market',
    plan: {
      researchQuestion: 'Which early channels are most credible for a niche SaaS targeting small operations teams?',
      subQuestions: [
        'Which channels provide fast feedback loops from ICP buyers?',
        'Which channels compound trust with the lowest setup overhead?',
        'Where can the product demonstrate workflow expertise rather than broad brand awareness?',
      ],
      methodology: [
        'Compare audience intent, cost to test, and feedback speed across candidate channels.',
        'Prefer channels that allow educational positioning and repeated exposure.',
        'Weight recommendations toward channels that a small team can run consistently.',
      ],
    },
    findings: [
      {
        title: 'Founder-led content and outbound conversations are the strongest first wedge.',
        summary: 'Direct problem-oriented outreach and educational content create faster learning cycles than broad paid awareness for a narrow ICP.',
        confidence: 'high',
      },
      {
        title: 'Community participation works best when framed as problem solving, not promotion.',
        summary: 'Niche communities can generate qualified interest, but trust depends on useful answers and examples instead of campaign-style posting.',
        confidence: 'medium',
      },
      {
        title: 'Partnerships outperform scale channels when category education is still immature.',
        summary: 'Integration, consultant, or workflow-adjacent partners can compress trust building more effectively than broad social acquisition.',
        confidence: 'medium',
      },
    ],
    sources: [
      {
        title: 'Founders Interview Synthesis',
        type: 'interview roundup',
        reliability: 'medium',
        relevance: 'Useful for early channel testing patterns and feedback velocity.',
        note: 'Highlights how early teams learned fastest through direct conversations.',
      },
      {
        title: 'B2B SaaS Demand Capture Notes',
        type: 'market note',
        reliability: 'medium',
        relevance: 'Frames the difference between active demand capture and long-term demand creation.',
        note: 'Supports sequencing of narrow acquisition bets before larger awareness efforts.',
      },
      {
        title: 'Operator Community Observation Log',
        type: 'community notes',
        reliability: 'low',
        relevance: 'Shows where operations leaders ask tactical workflow questions.',
        note: 'Useful directional signal, but findings should be validated with live interviews.',
      },
    ],
    evidence: [
      {
        claim: 'Teams in narrow B2B categories learn more from direct outreach than broad awareness campaigns in the first stage.',
        sourceTitle: 'Founders Interview Synthesis',
        strength: 'high',
        excerpt: 'Early teams improved positioning fastest when founders ran repeated problem discovery conversations.'
      },
      {
        claim: 'Community engagement only compounds when the brand consistently solves real workflow questions.',
        sourceTitle: 'Operator Community Observation Log',
        strength: 'medium',
        excerpt: 'Promotional posting underperformed compared with concrete how-to responses and teardown-style examples.'
      },
      {
        claim: 'Partnership channels matter more when buyers need trust transfer before trying an unfamiliar tool.',
        sourceTitle: 'B2B SaaS Demand Capture Notes',
        strength: 'medium',
        excerpt: 'Audience trust was easier to borrow from adjacent service providers than to build from scratch via generic ads.'
      },
    ],
    report: {
      executiveSummary: 'For a niche SaaS targeting small operations teams, the strongest MVP launch path is a focused combination of founder-led outreach, educational content, and a small number of trust-amplifying partnerships. Broad awareness channels can wait until messaging and conversion patterns are sharper.',
      recommendations: [
        'Run a short founder-led outreach sprint tied to one specific workflow pain point.',
        'Publish two or three educational assets that show the product solving real operations bottlenecks.',
        'Test one partnership motion with consultants, agencies, or adjacent workflow tools already trusted by the ICP.',
      ],
      openQuestions: [
        'Which sub-segment of operations teams converts fastest after a live demo?',
        'What proof asset most reduces concern about workflow disruption during adoption?',
      ],
      risks: [
        'Founder-led channels may not scale unless messaging is documented and repeatable.',
        'Community channels can consume time without producing measurable pipeline if participation is inconsistent.',
      ],
      sourceNotes: [
        'Source mix is directional and should be validated with direct customer discovery.',
        'Community observations are useful for language patterns but weaker for quantitative forecasting.',
      ],
      confidence: 'medium',
    },
  },
  {
    id: 'ai-note-taking',
    matchTerms: ['note', 'meeting', 'knowledge', 'team', 'ai'],
    title: 'AI Note-Taking for Small Teams',
    domain: 'Product evaluation',
    plan: {
      researchQuestion: 'What matters most when small teams evaluate AI note-taking tools?',
      subQuestions: [
        'Which adoption factors matter before advanced automation features?',
        'How important are search, sharing, and post-meeting workflows?',
        'Which objections are most likely to slow purchase decisions?',
      ],
      methodology: [
        'Compare onboarding friction, collaboration value, and trust considerations.',
        'Separate must-have usability factors from later-stage differentiators.',
        'Prioritize drivers that affect trial activation within the first week.',
      ],
    },
    findings: [
      {
        title: 'Fast onboarding beats feature depth in early evaluation.',
        summary: 'Small teams judge note-taking tools first by setup friction and clarity of output, not by long-tail automation options.',
        confidence: 'high',
      },
      {
        title: 'Shared visibility matters more than individual capture.',
        summary: 'Teams see more value when notes become searchable, shareable, and tied to action items beyond a single meeting owner.',
        confidence: 'high',
      },
      {
        title: 'Trust and permission concerns remain a purchase blocker.',
        summary: 'Recording policies, transcript accuracy, and governance questions can slow adoption even when the product demo is compelling.',
        confidence: 'medium',
      },
    ],
    sources: [
      {
        title: 'Small Team Tool Evaluation Notes',
        type: 'research memo',
        reliability: 'medium',
        relevance: 'Summarizes evaluation criteria used by budget-conscious teams.',
        note: 'Useful for activation and collaboration priorities.',
      },
      {
        title: 'Meeting Workflow Review',
        type: 'workflow analysis',
        reliability: 'medium',
        relevance: 'Maps note-taking value to follow-up execution quality.',
        note: 'Supports recommendation to emphasize action-item clarity.',
      },
      {
        title: 'Privacy Objection Log',
        type: 'customer objection notes',
        reliability: 'low',
        relevance: 'Captures common hesitation around consent and data retention.',
        note: 'Directional signal that should be validated in live sales calls.',
      },
    ],
    evidence: [
      {
        claim: 'Setup time and transcript clarity dominate first impressions in trial accounts.',
        sourceTitle: 'Small Team Tool Evaluation Notes',
        strength: 'high',
        excerpt: 'Evaluation success correlated most with rapid time to first useful note output.'
      },
      {
        claim: 'Teams retain tools when meeting notes improve accountability across participants.',
        sourceTitle: 'Meeting Workflow Review',
        strength: 'high',
        excerpt: 'Searchable summaries and clear action owners increased perceived team value after the meeting ended.'
      },
      {
        claim: 'Privacy and recording consent concerns can stop rollout even after a positive demo.',
        sourceTitle: 'Privacy Objection Log',
        strength: 'medium',
        excerpt: 'Several objections focused on governance and participant comfort rather than feature capability.'
      },
    ],
    report: {
      executiveSummary: 'Small teams adopt AI note-taking tools when setup is frictionless, outputs are immediately useful, and team-wide follow-up gets easier. Trust and governance concerns remain a meaningful blocker, so the product story should balance convenience with clarity on consent and data handling.',
      recommendations: [
        'Lead product positioning with quick setup and immediate meeting recap value.',
        'Show how summaries, search, and action ownership help the whole team, not just one user.',
        'Address privacy, consent, and admin controls early in the evaluation journey.',
      ],
      openQuestions: [
        'How much transcript accuracy variance is acceptable before trust drops materially?',
        'Which collaboration features create the clearest upgrade path after an initial trial?',
      ],
      risks: [
        'A feature-heavy message can dilute the core value of clarity and speed.',
        'Governance concerns may stall multi-user rollout if not answered early.',
      ],
      sourceNotes: [
        'Objection logs are qualitative and should be paired with direct customer interviews.',
        'Current evidence is stronger on adoption drivers than on pricing sensitivity.',
      ],
      confidence: 'high',
    },
  },
  {
    id: 'chatbot-comparison',
    matchTerms: ['chatbot', 'website', 'support', 'compare', 'assistant'],
    title: 'Website Chatbot Comparison',
    domain: 'Vendor comparison',
    plan: {
      researchQuestion: 'How should a small business compare website chatbot options for support and lead capture?',
      subQuestions: [
        'What baseline capabilities are table stakes for the MVP decision?',
        'Where do implementation complexity and maintenance costs differ most?',
        'How much should human handoff and knowledge quality shape the decision?',
      ],
      methodology: [
        'Compare tools across setup effort, knowledge control, handoff quality, and maintenance burden.',
        'Focus on decision criteria a small team can evaluate quickly.',
        'Separate marketing claims from workflow-level operational impact.',
      ],
    },
    findings: [
      {
        title: 'Knowledge quality matters more than interface polish.',
        summary: 'The most attractive chatbot UI still fails if the knowledge source is thin, outdated, or hard to maintain.',
        confidence: 'high',
      },
      {
        title: 'Human handoff is a decisive trust feature.',
        summary: 'Small teams need a clear fallback path for uncertain answers, high-intent leads, and support escalation.',
        confidence: 'high',
      },
      {
        title: 'Maintenance burden separates simple wins from future drag.',
        summary: 'The wrong tool can create ongoing content maintenance work that outweighs the initial setup speed advantage.',
        confidence: 'medium',
      },
    ],
    sources: [
      {
        title: 'Support Workflow Comparison Notes',
        type: 'comparison memo',
        reliability: 'medium',
        relevance: 'Frames implementation tradeoffs for lean teams.',
        note: 'Useful for ranking setup and maintenance complexity.',
      },
      {
        title: 'Lead Capture Journey Review',
        type: 'journey analysis',
        reliability: 'medium',
        relevance: 'Clarifies where handoff quality impacts conversion and trust.',
        note: 'Supports the recommendation to prioritize escalation design.',
      },
      {
        title: 'Knowledge Base Audit Heuristics',
        type: 'operations notes',
        reliability: 'medium',
        relevance: 'Shows why answer quality depends on knowledge upkeep.',
        note: 'Useful for ongoing ownership planning.',
      },
    ],
    evidence: [
      {
        claim: 'Chatbot performance is constrained by knowledge quality more than interface design.',
        sourceTitle: 'Knowledge Base Audit Heuristics',
        strength: 'high',
        excerpt: 'Weak source material produced poor answers regardless of the visible assistant experience.'
      },
      {
        claim: 'Clear escalation paths matter for both support trust and sales conversion.',
        sourceTitle: 'Lead Capture Journey Review',
        strength: 'high',
        excerpt: 'Users responded better when the assistant could hand off confidently instead of over-answering.'
      },
      {
        claim: 'Maintenance overhead is often underestimated during tool selection.',
        sourceTitle: 'Support Workflow Comparison Notes',
        strength: 'medium',
        excerpt: 'Operational upkeep became a larger burden than initial setup after the first launch phase.'
      },
    ],
    report: {
      executiveSummary: 'A small business comparing chatbot tools should prioritize knowledge quality, human handoff, and maintenance burden ahead of surface-level polish. The best MVP choice is usually the option that can stay accurate and operationally manageable over time.',
      recommendations: [
        'Audit current knowledge sources before comparing chatbot vendors.',
        'Require a clear human handoff path for uncertain answers and high-value conversations.',
        'Score each option on ongoing maintenance ownership, not just setup speed.',
      ],
      openQuestions: [
        'Which conversations should always route to a human immediately?',
        'How frequently will knowledge sources need updating after launch?',
      ],
      risks: [
        'Selecting based on demo polish can hide long-term content maintenance costs.',
        'Weak escalation design can reduce both user trust and lead quality.',
      ],
      sourceNotes: [
        'Current notes are strongest for workflow design and weaker for hard ROI benchmarks.',
        'A real evaluation should include live testing with representative knowledge content.',
      ],
      confidence: 'high',
    },
  },
];

const state = {
  input: {
    objective: '',
    scope: 'standard',
    format: 'brief',
    includeRisks: true,
    includeQuestions: true,
    includeSourceNotes: true,
  },
  run: {
    status: 'idle',
    activeStep: -1,
    startedAt: null,
    completedAt: null,
  },
  scenario: null,
};

const elements = {
  year: document.getElementById('year'),
  objectiveInput: document.getElementById('objective-input'),
  scopeInput: document.getElementById('scope-input'),
  formatInput: document.getElementById('format-input'),
  risksToggle: document.getElementById('risks-toggle'),
  questionsToggle: document.getElementById('questions-toggle'),
  notesToggle: document.getElementById('notes-toggle'),
  runDemoButton: document.getElementById('run-demo-button'),
  workflowButton: document.getElementById('workflow-button'),
  copySummaryButton: document.getElementById('copy-summary-button'),
  loadScenarioButton: document.getElementById('load-scenario-button'),
  runStatus: document.getElementById('run-status'),
  workflowSteps: document.getElementById('workflow-steps'),
  findingsList: document.getElementById('findings-list'),
  sourcesList: document.getElementById('sources-list'),
  evidenceList: document.getElementById('evidence-list'),
  scenarioTitle: document.getElementById('scenario-title'),
  sourceCount: document.getElementById('source-count'),
  evidenceCount: document.getElementById('evidence-count'),
  reportSummary: document.getElementById('report-summary'),
  planList: document.getElementById('plan-list'),
  reportRecommendations: document.getElementById('report-recommendations'),
  reportGaps: document.getElementById('report-gaps'),
  reportRisks: document.getElementById('report-risks'),
  reportSourceNotes: document.getElementById('report-source-notes'),
  reportConfidence: document.getElementById('report-confidence'),
  reportTimestamp: document.getElementById('report-timestamp'),
};

function setYear() {
  if (elements.year) {
    elements.year.textContent = new Date().getFullYear();
  }
}

function readInputState() {
  state.input.objective = elements.objectiveInput.value.trim();
  state.input.scope = elements.scopeInput.value;
  state.input.format = elements.formatInput.value;
  state.input.includeRisks = elements.risksToggle.checked;
  state.input.includeQuestions = elements.questionsToggle.checked;
  state.input.includeSourceNotes = elements.notesToggle.checked;
}

function selectScenario(objective) {
  const normalizedObjective = objective.toLowerCase();
  const matchedScenario = scenarios.find((scenario) =>
    scenario.matchTerms.some((term) => normalizedObjective.includes(term))
  );

  if (matchedScenario) {
    return matchedScenario;
  }

  return {
    id: 'generic-fallback',
    title: 'General Research Scenario',
    domain: 'General analysis',
    plan: {
      researchQuestion: `How should this objective be framed for a ${state.input.format} output?`,
      subQuestions: [
        'What is the core decision or outcome the user needs?',
        'Which assumptions require validation before acting on the recommendation?',
        'What evidence types would most improve confidence in the final brief?',
      ],
      methodology: [
        'Restate the objective in decision-oriented language.',
        'Organize available evidence into findings, gaps, and recommended next steps.',
        'Flag areas that need live research beyond this static MVP simulation.',
      ],
    },
    findings: [
      {
        title: 'The objective is directionally clear but still benefits from tighter success criteria.',
        summary: 'A stronger definition of audience, constraints, and desired outcome would improve prioritization.',
        confidence: 'medium',
      },
      {
        title: 'The most useful first output is a concise brief rather than a broad research program.',
        summary: 'For an MVP, a compact synthesis creates clarity faster than an exhaustive analysis.',
        confidence: 'medium',
      },
      {
        title: 'The next confidence gain should come from live validation, not more abstract planning.',
        summary: 'Direct interviews, usage evidence, or current benchmarks would sharpen the decision significantly.',
        confidence: 'medium',
      },
    ],
    sources: [
      {
        title: 'Objective Intake Notes',
        type: 'input synthesis',
        reliability: 'medium',
        relevance: 'Derived from the submitted objective and selected output preferences.',
        note: 'Acts as the baseline framing layer for this demo scenario.',
      },
      {
        title: 'MVP Research Heuristics',
        type: 'framework notes',
        reliability: 'medium',
        relevance: 'Provides a generic structure for translating objectives into brief-ready outputs.',
        note: 'Useful for planning but not a substitute for live evidence collection.',
      },
    ],
    evidence: [
      {
        claim: 'Clearer constraints usually improve the usefulness of a research brief.',
        sourceTitle: 'Objective Intake Notes',
        strength: 'medium',
        excerpt: 'The input objective indicates intent, but outcome metrics and audience precision remain broad.'
      },
      {
        claim: 'A compact synthesis is the right MVP artifact before deeper operational research begins.',
        sourceTitle: 'MVP Research Heuristics',
        strength: 'medium',
        excerpt: 'Early product decisions benefit from a lightweight synthesis that can be refined with future evidence.'
      },
    ],
    report: {
      executiveSummary: `This demo run translated the objective into a ${state.input.format} shaped output with a lightweight plan, directional findings, and explicit gaps. The result is best used as a framing artifact before live research begins.`,
      recommendations: [
        'Define the target audience and success metric more narrowly.',
        'Validate the top assumptions with real interviews, benchmarks, or workflow observations.',
        'Use this simulated structure as the template for a later live research pipeline.',
      ],
      openQuestions: [
        'Which evidence source would most quickly reduce uncertainty for this objective?',
        'What decision will this brief directly inform once the next layer of evidence is gathered?',
      ],
      risks: [
        'Current findings are simulated and should not be treated as live market evidence.',
        'Broad objectives can produce generic recommendations until constraints are sharpened.',
      ],
      sourceNotes: [
        'This fallback scenario is intentionally generic so the page remains usable with any typed objective.',
        'A real implementation would replace these notes with retrieval-backed citations and timestamps.',
      ],
      confidence: 'low',
    },
  };
}

function getStatusLabel(index) {
  if (state.run.status === 'idle') {
    return 'waiting';
  }

  if (index < state.run.activeStep) {
    return 'complete';
  }

  if (index === state.run.activeStep && state.run.status !== 'complete') {
    return 'active';
  }

  if (state.run.status === 'complete') {
    return 'complete';
  }

  return 'waiting';
}

function getStatusClass(status) {
  if (status === 'active') {
    return 'status-active';
  }

  if (status === 'complete') {
    return 'status-complete';
  }

  return 'status-waiting';
}

function renderWorkflow() {
  const markup = workflowTemplates
    .map((step, index) => {
      const status = getStatusLabel(index);
      return `
        <article class="workflow-step">
          <div class="workflow-step-header">
            <span class="workflow-step-number">${index + 1}</span>
            <span class="status-pill ${getStatusClass(status)}">${status}</span>
          </div>
          <div>
            <h3>${step.label}</h3>
            <p>${step.description}</p>
          </div>
        </article>
      `;
    })
    .join('');

  elements.workflowSteps.innerHTML = markup;
}

function renderList(container, items, renderer, emptyMessage) {
  if (!items.length) {
    container.innerHTML = `<div class="section-card"><p>${emptyMessage}</p></div>`;
    return;
  }

  container.innerHTML = items.map(renderer).join('');
}

function renderFindings() {
  const findings = state.scenario ? state.scenario.findings : [];
  renderList(
    elements.findingsList,
    findings,
    (item) => `
      <article class="finding-card">
        <div class="card-top">
          <h3>${item.title}</h3>
          <span class="tag ${item.confidence === 'high' ? 'confidence-high' : 'confidence-medium'}">${item.confidence} confidence</span>
        </div>
        <p>${item.summary}</p>
      </article>
    `,
    'No findings yet. Run the demo to populate this panel.'
  );
}

function renderSources() {
  const sources = state.scenario ? state.scenario.sources : [];
  elements.sourceCount.textContent = `${sources.length} ${sources.length === 1 ? 'source' : 'sources'}`;
  renderList(
    elements.sourcesList,
    sources,
    (item) => `
      <article class="source-card">
        <div class="card-top">
          <h3>${item.title}</h3>
          <span class="micro-tag">${item.type}</span>
        </div>
        <p>${item.relevance}</p>
        <div class="card-meta">
          <span class="micro-tag">Reliability: ${item.reliability}</span>
          <span class="micro-tag">${item.note}</span>
        </div>
      </article>
    `,
    'No sources yet. The evidence base appears here after a run.'
  );
}

function renderEvidence() {
  const evidence = state.scenario ? state.scenario.evidence : [];
  elements.evidenceCount.textContent = `${evidence.length} ${evidence.length === 1 ? 'note' : 'notes'}`;
  renderList(
    elements.evidenceList,
    evidence,
    (item) => `
      <article class="evidence-card">
        <div class="card-top">
          <h3>${item.sourceTitle}</h3>
          <span class="micro-tag">Strength: ${item.strength}</span>
        </div>
        <p><strong>Claim:</strong> ${item.claim}</p>
        <p><strong>Note:</strong> ${item.excerpt}</p>
      </article>
    `,
    'No evidence notes yet. Run the workflow to attach claims to sources.'
  );
}

function createBulletList(items, fallbackText) {
  if (!items || !items.length) {
    return `<p>${fallbackText}</p>`;
  }

  return `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderReport() {
  if (!state.scenario) {
    elements.scenarioTitle.textContent = 'Scenario not started';
    elements.scenarioTitle.className = 'tag neutral';
    elements.reportSummary.textContent = 'Run the demo to generate a structured summary grounded in mock findings and source notes.';
    elements.planList.innerHTML = '<p>No research plan generated yet.</p>';
    elements.reportRecommendations.innerHTML = '<p>No recommendations yet.</p>';
    elements.reportGaps.innerHTML = '<p>No open questions yet.</p>';
    elements.reportRisks.innerHTML = '<p>No risk notes yet.</p>';
    elements.reportSourceNotes.innerHTML = '<p>No source notes yet.</p>';
    elements.reportConfidence.textContent = 'Confidence pending';
    elements.reportConfidence.className = 'tag neutral';
    elements.reportTimestamp.textContent = 'No completed run yet';
    return;
  }

  const { title, domain, plan, report } = state.scenario;
  elements.scenarioTitle.textContent = `${title} - ${domain}`;
  elements.scenarioTitle.className = 'tag neutral';
  elements.reportSummary.textContent = report.executiveSummary;
  elements.planList.innerHTML = createBulletList(
    [plan.researchQuestion, ...plan.subQuestions, ...plan.methodology],
    'No plan details available.'
  );
  elements.reportRecommendations.innerHTML = createBulletList(
    report.recommendations,
    'No recommendations available.'
  );
  elements.reportGaps.innerHTML = state.input.includeQuestions
    ? createBulletList(report.openQuestions, 'No open questions available.')
    : '<p>Open questions are hidden for this run.</p>';
  elements.reportRisks.innerHTML = state.input.includeRisks
    ? createBulletList(report.risks, 'No risks available.')
    : '<p>Risk notes are hidden for this run.</p>';
  elements.reportSourceNotes.innerHTML = state.input.includeSourceNotes
    ? createBulletList(report.sourceNotes, 'No source notes available.')
    : '<p>Source notes are hidden for this run.</p>';
  elements.reportConfidence.textContent = `${report.confidence} confidence`;
  elements.reportConfidence.className = `tag ${
    report.confidence === 'high'
      ? 'confidence-high'
      : report.confidence === 'low'
        ? 'confidence-low'
        : 'confidence-medium'
  }`;
  elements.reportTimestamp.textContent = state.run.completedAt
    ? `Completed ${new Date(state.run.completedAt).toLocaleString()}`
    : 'Run in progress';
}

function renderStatus() {
  if (state.run.status === 'idle') {
    elements.runStatus.textContent = 'Ready to simulate a research run.';
    return;
  }

  if (state.run.status === 'running') {
    const activeLabel = workflowTemplates[state.run.activeStep]?.label || 'Processing';
    elements.runStatus.textContent = `Running demo research: ${activeLabel}.`;
    return;
  }

  elements.runStatus.textContent = `Research brief complete for ${state.scenario.title}.`;
}

function renderAll() {
  renderStatus();
  renderWorkflow();
  renderFindings();
  renderSources();
  renderEvidence();
  renderReport();
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function runResearchDemo() {
  readInputState();
  state.scenario = selectScenario(state.input.objective);
  state.run.status = 'running';
  state.run.activeStep = 0;
  state.run.startedAt = new Date().toISOString();
  state.run.completedAt = null;
  renderAll();

  for (let index = 0; index < workflowTemplates.length; index += 1) {
    state.run.activeStep = index;
    renderAll();
    await delay(450);
  }

  state.run.status = 'complete';
  state.run.completedAt = new Date().toISOString();
  renderAll();
}

function loadAnotherScenario() {
  const currentScenarioId = state.scenario ? state.scenario.id : null;
  const currentIndex = scenarios.findIndex((scenario) => scenario.id === currentScenarioId);
  const nextScenario = scenarios[(currentIndex + 1 + scenarios.length) % scenarios.length];

  elements.objectiveInput.value = nextScenario.plan.researchQuestion;
  elements.scopeInput.value = currentScenarioId === nextScenario.id ? 'broad' : 'standard';
  elements.formatInput.value = 'brief';
  elements.risksToggle.checked = true;
  elements.questionsToggle.checked = true;
  elements.notesToggle.checked = true;
  state.run.status = 'idle';
  state.run.activeStep = -1;
  state.run.completedAt = null;
  state.scenario = null;
  renderAll();
}

async function copySummary() {
  const summary = elements.reportSummary.textContent.trim();

  if (!summary || summary.startsWith('Run the demo')) {
    elements.runStatus.textContent = 'Run the demo before copying the summary.';
    return;
  }

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(summary);
      elements.runStatus.textContent = 'Executive summary copied to clipboard.';
      return;
    }
  } catch (error) {
    // Fall back to a selection-based copy message below.
  }

  elements.runStatus.textContent = 'Clipboard access is unavailable in this browser. Select and copy the summary manually.';
}

function attachEvents() {
  elements.runDemoButton.addEventListener('click', runResearchDemo);
  elements.copySummaryButton.addEventListener('click', copySummary);
  elements.loadScenarioButton.addEventListener('click', loadAnotherScenario);
  elements.workflowButton.addEventListener('click', () => {
    elements.runStatus.textContent = 'Review the workflow stages below to inspect the simulated orchestration path.';
  });
}

setYear();
attachEvents();
renderAll();
