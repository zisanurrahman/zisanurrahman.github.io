---
layout: default
title: Projects
slug: projects
description: Open-source bioinformatics pipelines, machine-learning models and interactive data apps by A S M Zisanur Rahman.
---

<div class="page-hero">
  <div class="container">
    <p class="page-hero-tag">Software &amp; Pipelines</p>
    <h1>Projects</h1>
    <p>Open-source code behind my research: metagenomics workflows built for HPC clusters, machine-learning models for antibiotic discovery, and interactive apps for exploring large screening datasets. Everything is on <a href="https://github.com/zisanurrahman" target="_blank" rel="noopener">GitHub</a>.</p>
  </div>
</div>

<section class="section">
  <div class="container">

    <!-- ── Group 1: Metagenomics ─────────────────────────────────────── -->
    <div class="project-group">
      <h2 class="project-group-title">Metagenomics &amp; Genome-Resolved Analysis</h2>
      <p class="project-group-desc">Workflows for turning raw shotgun reads into genomes, taxonomic profiles and resistome/mobilome quantification, written to run reproducibly on SLURM clusters.</p>
      <div class="project-grid">

        <div class="project-card featured">
          <div class="project-head">
            <div class="project-name"><a href="https://github.com/zisanurrahman/MAGnet" target="_blank" rel="noopener">MAGnet</a></div>
            <span class="project-lang lang-shell">Shell · SLURM</span>
          </div>
          <p class="project-desc">A <strong>modular metagenomic binning framework</strong> that recovers high-quality metagenome-assembled genomes using ensemble binning followed by fast consensus refinement. Supports direct binning of single assemblies or optional group-based co-assembly of replicates and conditions, with separate Illumina and Nanopore paths.</p>
          <div class="project-tags"><span>MAG recovery</span><span>Ensemble binning</span><span>Co-assembly</span><span>Nanopore</span><span>HPC</span></div>
          <div class="project-links">
            <a href="https://github.com/zisanurrahman/MAGnet" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> GitHub</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-head">
            <div class="project-name"><a href="https://github.com/zisanurrahman/CEMG_analysis_pipeline" target="_blank" rel="noopener">Culture-Enriched Metagenomics Pipeline</a></div>
            <span class="project-lang lang-mixed">Bash · Python · R</span>
          </div>
          <p class="project-desc">End-to-end analysis for a <strong>culture-enriched hybrid metagenomics</strong> study of the AMR footprint of livestock manure in anaerobic digestate: read QC, MetaPhlAn profiling, binning, resistance-gene and mobile-element annotation with RGI, AMRFinder, BacMet and mobileOG, read-mapping quantification (CPM), and publication figures.</p>
          <div class="project-tags"><span>Resistome</span><span>Mobilome</span><span>AMR surveillance</span><span>Livestock</span></div>
          <div class="project-links">
            <a href="https://github.com/zisanurrahman/CEMG_analysis_pipeline" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> GitHub</a>
            <a class="paper" href="https://pubmed.ncbi.nlm.nih.gov/42690060/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Microbiology Spectrum 2026</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-head">
            <div class="project-name"><a href="https://github.com/zisanurrahman/PiGICo-main_submission" target="_blank" rel="noopener">Swine Gut Isolate Collection Analysis</a></div>
            <span class="project-lang lang-mixed">Python · R · Snakemake</span>
          </div>
          <p class="project-desc">Scripts for <strong>genome-resolved profiling of an expanded swine gut isolate collection</strong>: genome annotation, feature integration, read mapping, machine-learning classification of health and disease signatures with XGBoost, and network-based guild analysis. Built for modular use on the Grex HPC cluster.</p>
          <div class="project-tags"><span>Isolate genomics</span><span>XGBoost</span><span>Network analysis</span><span>Swine microbiome</span></div>
          <div class="project-links">
            <a href="https://github.com/zisanurrahman/PiGICo-main_submission" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> GitHub</a>
          </div>
        </div>

      </div>
    </div>

    <!-- ── Group 2: Chemical genomics ────────────────────────────────── -->
    <div class="project-group">
      <h2 class="project-group-title">CRISPRi-seq &amp; Chemical Genomics</h2>
      <p class="project-group-desc">Analysis code and interactive apps from CIMPLE-Seq, a pooled CRISPRi screening approach that maps chemical–genetic interactions across the essential genome of <em>Burkholderia cenocepacia</em> K56-2.</p>
      <div class="project-grid">

        <div class="project-card featured">
          <div class="project-head">
            <div class="project-name"><a href="https://zisanurrahman.shinyapps.io/CGIP2025/" target="_blank" rel="noopener">CIMPLE-Seq CGIP Explorer</a></div>
            <span class="project-lang lang-r">R · Shiny</span>
          </div>
          <p class="project-desc">An <strong>interactive Shiny application</strong> for exploring chemical–genetic interaction profiles of essential-gene knockdown mutants screened against ~5,000 compounds. Includes CGIP normalisation, k-means clustering, t-SNE embedding, Tanimoto similarity search, and filtering by compound, gene target or mechanism of action.</p>
          <div class="project-tags"><span>Shiny</span><span>t-SNE</span><span>Clustering</span><span>Cheminformatics</span></div>
          <div class="project-links">
            <a class="live" href="https://zisanurrahman.shinyapps.io/CGIP2025/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> Live app</a>
            <a href="https://github.com/zisanurrahman/CGIP2025" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> GitHub</a>
            <a class="paper" href="https://pubmed.ncbi.nlm.nih.gov/39541213/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Cell Reports 2024</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-head">
            <div class="project-name"><a href="https://github.com/zisanurrahman/CGIP_Dash_App" target="_blank" rel="noopener">CGIP Dash App</a></div>
            <span class="project-lang lang-python">Python · Dash</span>
          </div>
          <p class="project-desc">A Python/Plotly Dash implementation of the interaction-profile explorer for the <em>B. cenocepacia</em> K56-2 essential genome, packaged for cloud deployment.</p>
          <div class="project-tags"><span>Dash</span><span>Plotly</span><span>Data app</span></div>
          <div class="project-links">
            <a href="https://github.com/zisanurrahman/CGIP_Dash_App" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> GitHub</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-head">
            <div class="project-name"><a href="https://github.com/zisanurrahman/CRISPRi_EGML_Main" target="_blank" rel="noopener">CRISPRi Essential-Gene ML</a></div>
            <span class="project-lang lang-python">Python</span>
          </div>
          <p class="project-desc">Machine-learning analysis of pooled CRISPRi-seq data: <strong>random-forest prediction of mutant depletion</strong>, kernel PCA with k-means cluster labelling, and sgRNA design scripts used to build the rationally designed knockdown library.</p>
          <div class="project-tags"><span>Random forest</span><span>Kernel PCA</span><span>sgRNA design</span></div>
          <div class="project-links">
            <a href="https://github.com/zisanurrahman/CRISPRi_EGML_Main" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> GitHub</a>
            <a class="paper" href="https://pubmed.ncbi.nlm.nih.gov/39541213/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Cell Reports 2024</a>
          </div>
        </div>

      </div>
    </div>

    <!-- ── Group 3: ML for drug discovery ────────────────────────────── -->
    <div class="project-group">
      <h2 class="project-group-title">Machine Learning for Antibiotic Discovery</h2>
      <p class="project-group-desc">Models that learn from high-throughput screening and genomic data to prioritise antibacterial compounds and essential targets.</p>
      <div class="project-grid">

        <div class="project-card featured">
          <div class="project-head">
            <div class="project-name"><a href="https://github.com/zisanurrahman/Prediction-of-ATB-Activity" target="_blank" rel="noopener">Antibacterial Activity Prediction</a></div>
            <span class="project-lang lang-python">Python · Chemprop</span>
          </div>
          <p class="project-desc">Trained weights, raw screening data and benchmarks for a <strong>directed message-passing neural network (D-MPNN)</strong> trained on a high-throughput antibacterial screen. Classification and regression models were evaluated on random and scaffold splits with RDKit descriptors and Morgan fingerprints, and the model measurably increased the hit rate of follow-up screening.</p>
          <div class="project-tags"><span>Graph neural network</span><span>Chemprop</span><span>RDKit</span><span>Scaffold split</span></div>
          <div class="project-links">
            <a href="https://github.com/zisanurrahman/Prediction-of-ATB-Activity" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> GitHub</a>
            <a class="paper" href="https://pubmed.ncbi.nlm.nih.gov/36228001/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> PLOS Comput Biol 2022</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-head">
            <div class="project-name"><a href="https://github.com/zisanurrahman/EssentialDomains" target="_blank" rel="noopener">EssentialDomains</a></div>
            <span class="project-lang lang-python">Python</span>
          </div>
          <p class="project-desc">Domain-search tooling for identifying <strong>putative essential protein domains</strong> from high-density transposon mutagenesis data, supporting target prioritisation for antibacterial discovery.</p>
          <div class="project-tags"><span>Protein domains</span><span>Essential genes</span><span>Tn-seq</span></div>
          <div class="project-links">
            <a href="https://github.com/zisanurrahman/EssentialDomains" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> GitHub</a>
            <a class="paper" href="https://pubmed.ncbi.nlm.nih.gov/35046497/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Scientific Reports 2022</a>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
