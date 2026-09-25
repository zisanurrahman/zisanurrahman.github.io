/**
 * Fetches publications from PubMed using NCBI E-utilities.
 * Searches by ORCID to get only your papers, then renders them
 * grouped by year using the same pub-card style as the rest of the site.
 *
 * To update: change ORCID below if needed. Everything else is automatic.
 */

const PUBMED_ORCID  = '0000-0001-7566-1696';
const PUBMED_AUTHOR = 'Rahman ASMZ'; // fallback search term
const EUTILS        = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';

// PMIDs where ASMZ Rahman is co-first author (shown with a badge)
const CO_FIRST_PMIDS = new Set(['42690060']);

// Accepted / in-press papers not yet indexed in PubMed. Remove an entry once
// it appears in PubMed (it will be picked up automatically).
const MANUAL_PUBS = [
  {
    uid: 'manual-animal-microbiome-2026',
    title: 'Culture-enriched metagenomics recovers novel, high-quality genome catalogue and a host-linked virome of the cultivable bovine rumen microbiome',
    authors: [
      { name: 'Rahman ASMZ' }, { name: 'Scott L' }, { name: 'Alizadeh A' }, { name: 'Gruninger RJ' },
      { name: 'McAllister TA' }, { name: 'Guan LL' }, { name: 'Derakhshani H' },
    ],
    source: 'Animal Microbiome',
    pubdate: '2026',
    year: 2026,
    status: 'Submitted',
    doi: '',
    link: '',
  },
  {
    uid: 'manual-microbiome-2026',
    title: 'Genome-resolved profiling of an expanded swine gut isolate collection reveals functional signatures of health and disease',
    authors: [
      { name: 'Rahman ASMZ' }, { name: 'Mohammadian Loojaly F' }, { name: 'Farzan A' },
      { name: 'Surette MG' }, { name: 'Walkowiak S' }, { name: 'Yang C' }, { name: 'Derakhshani H' },
    ],
    source: 'Microbiome',
    pubdate: '2026',
    year: 2026,
    status: 'Accepted',
    doi: '',
    link: 'https://github.com/zisanurrahman/PiGICo-main_submission',
  },
];

// Journals to badge specially
const BADGE_MAP = {
  'nat commun':             { cls: 'badge-nc',   label: 'Nature Comms' },
  'nature communications':  { cls: 'badge-nc',   label: 'Nature Comms' },
  'plos comput biol':       { cls: 'badge-plos', label: 'PLOS Comp Bio' },
  'npj antimicrob resist':  { cls: 'badge-npj',  label: 'npj A&R' },
  'acs synth biol':         { cls: 'badge-acs',  label: 'ACS Synth Bio' },
  'j cheminform':           { cls: 'badge-jci',  label: 'J Cheminform' },
  'cell rep':               { cls: 'badge-cell', label: 'Cell Reports' },
  'microbiome':             { cls: 'badge-nc',   label: 'Microbiome' },
};

async function loadPubMedPublications() {
  const container = document.getElementById('pub-dynamic-list');
  const status    = document.getElementById('pub-status');
  if (!container) return;

  try {
    // ── 1. Search by ORCID ───────────────────────────────────────────
    const searchURL =
      `${EUTILS}esearch.fcgi?db=pubmed` +
      `&term=${encodeURIComponent(PUBMED_ORCID + '[auid]')}` +
      `&retmax=100&retmode=json`;

    let pmids = [];
    try {
      const res  = await fetch(searchURL);
      const data = await res.json();
      pmids = data.esearchresult?.idlist ?? [];
    } catch (_) {}

    // Also search by author name: PubMed only tags a few records with an
    // ORCID, so merge both result sets (deduplicated) for full coverage.
    try {
      const nameURL =
        `${EUTILS}esearch.fcgi?db=pubmed` +
        `&term=${encodeURIComponent('"' + PUBMED_AUTHOR + '"[Author]')}` +
        `&retmax=100&retmode=json`;
      const res  = await fetch(nameURL);
      const data = await res.json();
      const byName = data.esearchresult?.idlist ?? [];
      pmids = [...new Set([...pmids, ...byName])];
    } catch (_) {}

    if (pmids.length === 0) {
      status.textContent = 'No publications found. Check ORCID or author name.';
      return;
    }

    // ── 2. Fetch summaries ───────────────────────────────────────────
    const summaryURL =
      `${EUTILS}esummary.fcgi?db=pubmed` +
      `&id=${pmids.join(',')}` +
      `&retmode=json`;

    const sumRes  = await fetch(summaryURL);
    const sumData = await sumRes.json();
    const result  = sumData.result;

    // ── 3. Parse & group by year ─────────────────────────────────────
    const papers = pmids
      .map(id => result[id])
      .filter(p => p && p.uid)
      .map(p => {
        const doi = (p.articleids || []).find(a => a.idtype === 'doi')?.value ?? '';
        const year = parseInt((p.pubdate || p.epubdate || '0').slice(0, 4)) || 0;
        return { ...p, doi, year };
      })
      .filter(p => p.year > 0)
      .sort((a, b) => b.year - a.year || b.uid - a.uid);

    // Hide a preprint when the peer-reviewed version of the same title is present
    const norm = t => (t || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    const isPreprint = p => /biorxiv|medrxiv|researchsquare|preprint/i.test(p.source || '');
    const journalTitles = new Set(papers.filter(p => !isPreprint(p)).map(p => norm(p.title)));
    const deduped = papers.filter(p => !(isPreprint(p) && journalTitles.has(norm(p.title))));

    // Prepend accepted / in-press papers that PubMed does not list yet
    const fetchedTitles = new Set(deduped.map(p => norm(p.title)));
    MANUAL_PUBS.filter(m => !fetchedTitles.has(norm(m.title))).forEach(m => deduped.unshift(m));
    const rank = p => p.status === 'Accepted' ? 2 : p.status ? 1 : 0;
    deduped.sort((a, b) => b.year - a.year || rank(b) - rank(a));

    const byYear = {};
    deduped.forEach(p => {
      if (!byYear[p.year]) byYear[p.year] = [];
      byYear[p.year].push(p);
    });

    // ── 4. Render ────────────────────────────────────────────────────
    status.remove();
    container.innerHTML = '';

    Object.keys(byYear)
      .sort((a, b) => b - a)
      .forEach(year => {
        const group = document.createElement('div');
        group.className = 'pub-year-group';

        const heading = document.createElement('div');
        heading.className = 'pub-year-heading';
        heading.textContent = year;
        group.appendChild(heading);

        const list = document.createElement('div');
        list.className = 'pub-list';

        byYear[year].forEach(p => {
          const card = buildCard(p);
          list.appendChild(card);
        });

        group.appendChild(list);
        container.appendChild(group);
      });

    // Update metric numbers if elements exist
    const totalEl = document.getElementById('metric-total-pubs');
    if (totalEl) totalEl.textContent = deduped.length;

  } catch (err) {
    if (status) status.textContent = 'Could not load publications. See Google Scholar for the full list.';
    console.error('PubMed fetch error:', err);
  }
}

function buildCard(p) {
  const card = document.createElement('div');
  card.className = 'pub-card';

  // Highlight if it's a high-profile journal
  const srcLower = (p.source || '').toLowerCase();
  const badge = Object.entries(BADGE_MAP).find(([key]) => srcLower.includes(key));
  if (badge) card.classList.add('featured');

  // Authors — bold "Rahman" entries
  const authors = (p.authors || [])
    .map(a => /rahman/i.test(a.name) ? `<strong>${a.name}</strong>` : a.name)
    .join(', ');

  // Volume/issue/pages
  const loc = [
    p.volume  ? p.volume  : '',
    p.issue   ? `(${p.issue})` : '',
    p.pages   ? `:${p.pages}` : '',
  ].join('');

  // Link — prefer DOI, fallback to PMID
  const link = p.link
    ? p.link
    : p.doi
      ? `https://doi.org/${p.doi}`
      : p.status
        ? ''
        : `https://pubmed.ncbi.nlm.nih.gov/${p.uid}/`;

  // Badges
  let badgesHTML = '';
  if (p.status) {
    badgesHTML += `<span class="badge badge-status">${p.status}</span>`;
    card.classList.add('featured');
  } else {
    badgesHTML += `<a class="badge badge-pmid" href="https://pubmed.ncbi.nlm.nih.gov/${p.uid}/" target="_blank">PMID: ${p.uid}</a>`;
  }
  const firstAuthor = (p.authors && p.authors[0] && p.authors[0].name) || '';
  if (CO_FIRST_PMIDS.has(String(p.uid))) {
    badgesHTML += `<span class="badge badge-cofirst">Co-first author</span>`;
  } else if (/^rahman\s+asmz/i.test(firstAuthor)) {
    badgesHTML += `<span class="badge badge-first">First author</span>`;
  }
  if (p.doi) {
    badgesHTML += `<a class="badge badge-doi" href="https://doi.org/${p.doi}" target="_blank">DOI</a>`;
  }
  if (badge) {
    badgesHTML += `<span class="badge ${badge[1].cls}">${badge[1].label}</span>`;
  }

  card.innerHTML = `
    <div class="pub-title">
      ${link ? `<a href="${link}" target="_blank" rel="noopener">${p.title.replace(/\.$/, '')}</a>` : p.title.replace(/\.$/, '')}
    </div>
    <div class="pub-authors">${authors}</div>
    <div class="pub-journal">
      <em>${p.source}</em>${loc ? ' ' + loc : ''}${p.status ? ' &middot; ' + (p.status === 'Accepted' ? 'accepted, in press' : p.status.toLowerCase()) : ''}
    </div>
    <div class="pub-badges">${badgesHTML}</div>
  `;

  return card;
}

// Run on page load
document.addEventListener('DOMContentLoaded', loadPubMedPublications);
