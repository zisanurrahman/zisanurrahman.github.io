---
layout: default
title: Home
slug: index
---

<!-- ─── Hero ───────────────────────────────────────────────────────── -->
<section id="home-hero">
  <div class="container">
    <div class="home-hero-inner">
      <div class="hero-text">
        <p class="hero-tag">Postdoctoral Researcher &mdash; University of Manitoba</p>
        <h1>A S M Zisanur Rahman</h1>
        <p class="hero-role">Computational Biologist &amp; Bioinformatician</p>
        <p class="hero-sub">
          I build analysis pipelines and machine-learning models that turn sequencing and
          high-throughput screening data into biological insight: from metagenome-assembled genomes
          and resistome profiling in livestock systems to CRISPRi-seq chemical genomics and
          data-driven antibiotic discovery.
        </p>
        <div class="hero-domains">
          <span>Metagenomics</span>
          <span>Machine Learning</span>
          <span>CRISPRi-seq</span>
          <span>Antimicrobial Resistance</span>
          <span>HPC Workflows</span>
        </div>
        <div class="hero-stats">
          <div class="stat"><span class="stat-num">13</span><span class="stat-label">Publications</span></div>
          <div class="stat"><span class="stat-num">229</span><span class="stat-label">Citations</span></div>
          <div class="stat"><span class="stat-num">9</span><span class="stat-label">h-index</span></div>
          <div class="stat"><span class="stat-num">8</span><span class="stat-label">Open-source tools</span></div>
        </div>
        <div class="hero-cta">
          <a class="btn btn-primary" href="/projects">View Projects</a>
          <a class="btn btn-outline" href="/publications">Publications</a>
          <a class="btn btn-ghost" href="/contact">Contact</a>
        </div>
      </div>
      <div class="hero-photo-wrap">
        <div class="hero-photo">
          <img src="/assets/img/zisanur.png" alt="A S M Zisanur Rahman" />
        </div>
        <div class="hero-social">
          <a href="https://github.com/zisanurrahman" target="_blank" rel="noopener">GitHub</a>
          <a href="https://scholar.google.ca/citations?user=k9kXykwAAAAJ&hl=en" target="_blank" rel="noopener">Scholar</a>
          <a href="https://orcid.org/0000-0001-7566-1696" target="_blank" rel="noopener">ORCID</a>
          <a href="https://www.linkedin.com/in/zisanur-rahman-phd-07a81862/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── What I do ──────────────────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <p class="section-label">Expertise</p>
    <h2 class="section-title">What I Do</h2>
    <div class="section-bar"></div>
    <div class="highlight-grid">

      <div class="highlight-card">
        <div class="highlight-card-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
        <div>
          <h3>Metagenomics &amp; Genome Recovery</h3>
          <p>Shotgun and culture-enriched metagenomics on Illumina and Nanopore data: assembly, ensemble binning into MAGs, taxonomic profiling, and resistome and mobilome quantification for AMR surveillance in agricultural systems.</p>
          <div class="tools">MEGAHIT · metaWRAP-style binning · CheckM · MetaPhlAn · RGI · AMRFinder · mobileOG</div>
        </div>
      </div>

      <div class="highlight-card">
        <div class="highlight-card-icon"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg></div>
        <div>
          <h3>Machine Learning for Discovery</h3>
          <p>Graph neural networks and tree-based models trained on high-throughput antibacterial screens and chemical–genetic interaction profiles to prioritise compounds, predict mechanism of action, and classify genomes by host phenotype.</p>
          <div class="tools">Chemprop D-MPNN · scikit-learn · XGBoost · PyTorch · RDKit</div>
        </div>
      </div>

      <div class="highlight-card">
        <div class="highlight-card-icon"><svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg></div>
        <div>
          <h3>CRISPRi-seq &amp; Chemical Genomics</h3>
          <p>Design and analysis of pooled CRISPRi knockdown libraries screened against thousands of compounds, producing interaction profiles that reveal essential-gene function and antibiotic targets in <em>Burkholderia</em>.</p>
          <div class="tools">sgRNA design · depletion modelling · t-SNE / clustering · Tanimoto similarity</div>
        </div>
      </div>

      <div class="highlight-card">
        <div class="highlight-card-icon"><svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg></div>
        <div>
          <h3>Reproducible Pipelines on HPC</h3>
          <p>Modular, SLURM-ready workflows and interactive data apps that let collaborators re-run analyses and explore large datasets without touching the command line.</p>
          <div class="tools">Python · R · Bash · Snakemake · SLURM · Shiny · Dash · Git</div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ─── Featured projects ──────────────────────────────────────────── -->
<section class="section section--alt">
  <div class="container">
    <p class="section-label">Software &amp; Pipelines</p>
    <h2 class="section-title">Featured Projects</h2>
    <div class="section-bar"></div>
    <div class="project-grid">

      <div class="project-card featured">
        <div class="project-head">
          <div class="project-name"><a href="https://github.com/zisanurrahman/MAGnet" target="_blank" rel="noopener">MAGnet</a></div>
          <span class="project-lang lang-shell">Shell · SLURM</span>
        </div>
        <p class="project-desc">Modular, HPC-friendly metagenomic binning and refinement suite that recovers high-quality MAGs with ensemble binning and consensus refinement. Runs on single assemblies or grouped co-assemblies, for Illumina and Nanopore reads.</p>
        <div class="project-tags"><span>Metagenomics</span><span>MAG recovery</span><span>Nanopore</span></div>
      </div>

      <div class="project-card featured">
        <div class="project-head">
          <div class="project-name"><a href="https://zisanurrahman.shinyapps.io/CGIP2025/" target="_blank" rel="noopener">CIMPLE-Seq CGIP Explorer</a></div>
          <span class="project-lang lang-r">R · Shiny</span>
        </div>
        <p class="project-desc">Interactive explorer for chemical–genetic interaction profiles of <em>B. cenocepacia</em> essential-gene knockdowns screened against ~5,000 compounds. Companion to my first-author <em>Cell Reports</em> paper.</p>
        <div class="project-tags"><span>CRISPRi-seq</span><span>Chemical genomics</span><span>Interactive app</span></div>
      </div>

      <div class="project-card featured">
        <div class="project-head">
          <div class="project-name"><a href="https://github.com/zisanurrahman/Prediction-of-ATB-Activity" target="_blank" rel="noopener">Antibacterial Activity Prediction</a></div>
          <span class="project-lang lang-python">Python · Chemprop</span>
        </div>
        <p class="project-desc">Directed message-passing neural network trained on a high-throughput antibacterial screen, with released weights and benchmarks. Published in <em>PLOS Computational Biology</em>, where it increased the hit rate of drug discovery.</p>
        <div class="project-tags"><span>Deep learning</span><span>Drug discovery</span><span>Cheminformatics</span></div>
      </div>

    </div>
    <div class="section-foot">
      <a class="btn btn-outline" href="/projects">All projects &rarr;</a>
      <a class="btn btn-ghost" href="https://github.com/zisanurrahman" target="_blank" rel="noopener">GitHub profile</a>
    </div>
  </div>
</section>

<!-- ─── Recent Publications ───────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <p class="section-label">Latest Work</p>
    <h2 class="section-title">Selected Publications</h2>
    <div class="section-bar"></div>
    <div class="recent-pub-list">

      <div class="recent-pub">
        <span class="recent-pub-year">2026</span>
        <div>
          <div class="recent-pub-title"><a href="https://github.com/zisanurrahman/PiGICo-main_submission" target="_blank" rel="noopener">Genome-resolved profiling of an expanded swine gut isolate collection reveals functional signatures of health and disease</a></div>
          <div class="recent-pub-meta"><strong>ASMZ Rahman</strong>, F Mohammadian Loojaly, A Farzan, MG Surette, S Walkowiak, C Yang, H Derakhshani &mdash; <em>Microbiome</em></div>
          <div class="pub-badges"><span class="badge badge-first">First author</span><span class="badge badge-status">Accepted, in press</span></div>
        </div>
      </div>

      <div class="recent-pub">
        <span class="recent-pub-year">2026</span>
        <div>
          <div class="recent-pub-title"><a href="https://pubmed.ncbi.nlm.nih.gov/42690060/" target="_blank" rel="noopener">Optimizing a culture-enriched hybrid metagenomics pipeline to assess the AMR footprint of livestock manure in anaerobic digestate</a></div>
          <div class="recent-pub-meta">N Rahman, <strong>ASMZ Rahman</strong>, DB Levin, TA McAllister, N Cicek, H Derakhshani &mdash; <em>Microbiology Spectrum</em></div>
          <div class="pub-badges"><span class="badge badge-cofirst">Co-first author</span></div>
        </div>
      </div>

      <div class="recent-pub">
        <span class="recent-pub-year">2024</span>
        <div>
          <div class="recent-pub-title"><a href="https://pubmed.ncbi.nlm.nih.gov/39541213/" target="_blank" rel="noopener">Rationally designed pooled CRISPRi-seq uncovers an inhibitor of bacterial peptidyl-tRNA hydrolase</a></div>
          <div class="recent-pub-meta"><strong>ASMZ Rahman</strong> et al. &mdash; <em>Cell Reports</em> 43(11)</div>
          <div class="pub-badges"><span class="badge badge-first">First author</span><span class="badge badge-cell">Cell Reports</span></div>
        </div>
      </div>

      <div class="recent-pub">
        <span class="recent-pub-year">2023</span>
        <div>
          <div class="recent-pub-title"><a href="https://pubmed.ncbi.nlm.nih.gov/37558695/" target="_blank" rel="noopener">Profiling cell envelope-antibiotic interactions reveals vulnerabilities to &beta;-lactams in a multidrug-resistant bacterium</a></div>
          <div class="recent-pub-meta">AM Hogan, <strong>ASMZ Rahman</strong>, A Motnenko et al. &mdash; <em>Nature Communications</em> 14(1)</div>
          <div class="pub-badges"><span class="badge badge-nc">Nature Comms</span></div>
        </div>
      </div>

      <div class="recent-pub">
        <span class="recent-pub-year">2022</span>
        <div>
          <div class="recent-pub-title"><a href="https://pubmed.ncbi.nlm.nih.gov/36228001/" target="_blank" rel="noopener">A machine learning model trained on a high-throughput antibacterial screen increases the hit rate of drug discovery</a></div>
          <div class="recent-pub-meta"><strong>ASMZ Rahman</strong>, C Liu, H Sturm, AM Hogan et al. &mdash; <em>PLOS Computational Biology</em> 18(10)</div>
          <div class="pub-badges"><span class="badge badge-first">First author</span><span class="badge badge-plos">PLOS Comp Bio</span></div>
        </div>
      </div>

    </div>
    <div class="section-foot">
      <a class="btn btn-outline" href="/publications">All publications &rarr;</a>
    </div>
  </div>
</section>
