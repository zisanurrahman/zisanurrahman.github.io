---
layout: default
title: Research
slug: research
description: Research in computational microbiology by A S M Zisanur Rahman - metagenomics, machine learning for antibiotic discovery, CRISPRi-seq chemical genomics and antimicrobial resistance.
---

<div class="page-hero">
  <div class="container">
    <p class="page-hero-tag">Research</p>
    <h1>Computational Microbiology</h1>
    <p>I use genomics, metagenomics, machine learning and genome-scale metabolic models (GEMs) to understand microbial communities, antibiotic resistance, feed efficiency and methane production in livestock. Wet-lab training lets me design the experiments that generate the data, and computational training lets me extract the biology from it.</p>
  </div>
</div>

<!-- ─── Ongoing projects ───────────────────────────────────────────── -->
<section class="section">
  <div class="container">
    <p class="section-label">Ongoing</p>
    <h2 class="section-title">Current Projects &amp; Collaborations</h2>
    <div class="section-bar"></div>
    <p class="section-desc">As a Research Manitoba Postdoctoral Fellow in the <a href="https://tlmicrobiomelab.github.io/" target="_blank" rel="noopener">Translational Livestock Microbiome Research Lab</a> (Derakhshani lab, University of Manitoba), I lead the computational work on two funded collaborations.</p>
    <div class="current-grid">

      <div class="current-card">
        <div class="current-partner">Industry partner <span class="chip">Topigs Norsvin</span></div>
        <h3>Machine learning on the swine gut microbiome to predict feed efficiency</h3>
        <p>Feed is 60 to 70 percent of the cost of pig production, and host genomic selection for feed efficiency has plateaued because the trait is only weakly heritable. The gut microbiome carries much of the remaining variance. With the pig-breeding company Topigs Norsvin we sample animals from lines with divergent feed-efficiency phenotypes and ask which <strong>microbial functions</strong>, rather than which taxa, separate efficient from inefficient pigs.</p>
        <ul>
          <li>Functional reference database from 400+ cultured isolates (80+ genera) and 3,700+ MAGs</li>
          <li>Functional feature matrices (CAZymes, metabolic gene clusters, pathways) as model input</li>
          <li>Interpretable ML: random forest, gradient boosting, FT-Transformer, TabNet with SHAP</li>
          <li>Nested cross-validation, leave-one-farm-out and external-cohort evaluation</li>
        </ul>
        <div class="tools">Snakemake · DAS Tool binning · dbCAN · gutSMASH · scikit-learn · XGBoost · PyTorch · Optuna</div>
      </div>

      <div class="current-card">
        <div class="current-partner">NSERC Alliance <span class="chip">with Prof. Le Luo Guan, UBC</span></div>
        <h3>Machine learning and genome-scale metabolic models (GEMs) for enteric methane mitigation</h3>
        <p>In partnership with the Guan lab at the University of British Columbia, this NSERC Alliance project combines rumen microbiome data, machine learning and genome-scale metabolic models (GEMs) to predict methane phenotypes and identify ways to suppress rumen methanogens without harming the animal or the beneficial community. GEMs are built at two levels: <strong>individual methanogens</strong>, to define essential archaea-specific reactions, and the <strong>rumen community</strong>, to simulate cross-feeding, hydrogen transfer and methane output across methanogens and fermenting bacteria.</p>
        <ul>
          <li>Individual GEMs of <em>Methanobrevibacter smithii</em> and nine other rumen methanogens, built with CarveMe, ModelSEED and RAVEN and curated with memote</li>
          <li>Community-level rumen GEMs integrating methanogens with fermenting bacteria to model hydrogen flow and methane yield</li>
          <li>Flux balance analysis under rumen-like conditions to define essential, archaea-specific reactions</li>
          <li>Virtual screening of ~792,000 natural products against 20 methanogen targets, with MD refinement and bovine-proteome selectivity filtering</li>
          <li>Nanopore rumen metagenomes and F420-based methanogen–bacteria co-culture assays for validation</li>
        </ul>
        <div class="tools">COBRApy · memote · AutoDock Vina · RDKit · OpenMM · Nanopore · SLURM</div>
      </div>

    </div>
  </div>
</section>

<!-- ─── Research Areas ─────────────────────────────────────────────── -->
<section class="section section--alt">
  <div class="container">
    <p class="section-label">Focus Areas</p>
    <h2 class="section-title">Research Themes</h2>
    <div class="section-bar"></div>
    <div class="research-grid">

      <div class="research-card">
        <div class="research-card-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
        <h3>Metagenomics of Livestock Systems</h3>
        <p>Genome-resolved and culture-enriched metagenomics of gut, manure and digestate communities to track how antimicrobial resistance genes and mobile elements move through agricultural systems.</p>
        <ul>
          <li>Culture-enriched metagenomics of the bovine rumen: novel genome catalogue and host-linked virome</li>
          <li>Hybrid Illumina + Nanopore assembly and MAG recovery</li>
          <li>Resistome and mobilome quantification (RGI, AMRFinder, mobileOG)</li>
          <li>Genome-resolved profiling of swine gut isolate collections</li>
          <li>Ensemble binning pipelines for HPC (MAGnet)</li>
        </ul>
        <div class="card-foot">Papers: <em>Microbiome</em> 2026 (accepted), <em>Animal Microbiome</em> (submitted), <em>Microbiol Spectr</em> 2026 &middot; Code: <a href="/projects">MAGnet, CEMG pipeline, SGI analysis</a></div>
      </div>

      <div class="research-card">
        <div class="research-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><line x1="6.5" y1="7.5" x2="10" y2="10.5"/><line x1="17.5" y1="7.5" x2="14" y2="10.5"/><line x1="6.5" y1="16.5" x2="10" y2="13.5"/><line x1="17.5" y1="16.5" x2="14" y2="13.5"/></svg></div>
        <h3>Rumen Methanogens &amp; Genome-Scale Metabolic Models</h3>
        <p>Genome-scale metabolic models (GEMs) of rumen methanogens at the individual level, to map methanogenesis and cofactor biosynthesis and prioritise essential archaea-specific enzymes, and at the rumen community level, to simulate how methanogens and fermenting bacteria exchange hydrogen and shape methane output. Both feed structure-based discovery of anti-methanogenic compounds.</p>
        <ul>
          <li>Ten-species pan-methanogenome of curated individual GEMs</li>
          <li>Community GEMs of the rumen ecosystem</li>
          <li>Flux balance and essentiality analysis under rumen conditions</li>
          <li>Natural-product virtual screening at HPC scale</li>
          <li>Methanogen–bacteria mini-community experiments</li>
        </ul>
        <div class="card-foot">NSERC Alliance with UBC &middot; manuscript in preparation</div>
      </div>

      <div class="research-card">
        <div class="research-card-icon"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg></div>
        <h3>Machine Learning for Antibiotic Discovery</h3>
        <p>Deep learning and tree-based models trained on high-throughput antibacterial screens and chemical–genetic data, used to rank compound libraries and infer mechanism of action before a compound reaches the bench.</p>
        <ul>
          <li>Graph neural networks (D-MPNN) for antibacterial activity</li>
          <li>Mechanism-of-action prediction from large-scale screens</li>
          <li>Random-forest and XGBoost models on genomic features</li>
          <li>Scaffold-aware validation and hit-rate enrichment</li>
        </ul>
        <div class="card-foot">Papers: <em>PLOS Comput Biol</em> 2022, <em>J Cheminform</em> 2022, <em>npj AMR</em> 2025</div>
      </div>

      <div class="research-card">
        <div class="research-card-icon"><svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg></div>
        <h3>CRISPRi-seq &amp; Chemical Genomics</h3>
        <p>Rationally designed pooled CRISPRi libraries targeting the essential genome of <em>Burkholderia cenocepacia</em>, screened against thousands of compounds to build chemical–genetic interaction profiles that expose drug targets and gene function.</p>
        <ul>
          <li>Broad-host-range CRISPRi toolkit for <em>Burkholderia</em></li>
          <li>CIMPLE-Seq: pooled library enrichment sequencing</li>
          <li>Depletion modelling, clustering and t-SNE of interaction profiles</li>
          <li>Discovery of a peptidyl-tRNA hydrolase inhibitor</li>
        </ul>
        <div class="card-foot">Papers: <em>Cell Reports</em> 2024, <em>ACS Synth Biol</em> 2019 &middot; <a href="https://zisanurrahman.shinyapps.io/CGIP2025/" target="_blank" rel="noopener">Explore the data</a></div>
      </div>

      <div class="research-card">
        <div class="research-card-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h3>Antibiotic Resistance Mechanisms</h3>
        <p>Combining functional genomics with computational analysis to map how the bacterial cell envelope shapes antibiotic susceptibility, and to identify essential domains and genetic vulnerabilities in multidrug-resistant pathogens.</p>
        <ul>
          <li>Cell envelope–antibiotic interaction profiling</li>
          <li>Essential protein domains from high-density Tn-seq</li>
          <li>Genetic vulnerabilities to β-lactams</li>
          <li>One Health perspective on AMR transmission</li>
        </ul>
        <div class="card-foot">Papers: <em>Nature Communications</em> 2023, <em>J Bacteriol</em> 2024, <em>Sci Rep</em> 2022</div>
      </div>

    </div>
  </div>
</section>

<!-- ─── Skills ─────────────────────────────────────────────────────── -->
<section class="section section--alt">
  <div class="container">
    <p class="section-label">Methods &amp; Tools</p>
    <h2 class="section-title">Technical Skills</h2>
    <div class="section-bar"></div>
    <div class="skills-grid">

      <div class="skill-group">
        <h3>Bioinformatics &amp; Genomics</h3>
        <ul>
          <li><strong>Metagenomics:</strong> assembly, binning, MAG QC, MetaPhlAn, HUMAnN, Kraken2</li>
          <li><strong>Resistome / mobilome:</strong> RGI (CARD), AMRFinderPlus, BacMet, mobileOG</li>
          <li><strong>Read processing:</strong> fastp, BWA, Bowtie2, minimap2, samtools</li>
          <li><strong>Annotation:</strong> Prokka, dbCAN, DIAMOND, BLAST, HMMER</li>
          <li><strong>Amplicon:</strong> QIIME 2, phyloseq, vegan</li>
          <li><strong>Long reads:</strong> Nanopore assembly and hybrid polishing</li>
          <li><strong>Differential analysis:</strong> DESeq2, GSEA</li>
          <li><strong>Genome-scale metabolic models:</strong> COBRApy, CarveMe, ModelSEED, RAVEN, memote, FBA, community modelling</li>
        </ul>
      </div>

      <div class="skill-group">
        <h3>Machine Learning &amp; Statistics</h3>
        <ul>
          <li><strong>Graph neural networks:</strong> Chemprop D-MPNN</li>
          <li><strong>Classical ML:</strong> scikit-learn, random forest, XGBoost</li>
          <li><strong>Deep learning:</strong> PyTorch, Keras / TensorFlow</li>
          <li><strong>Cheminformatics:</strong> RDKit, Morgan fingerprints, Tanimoto similarity</li>
          <li><strong>Dimensionality reduction:</strong> PCA, kernel PCA, t-SNE, UMAP</li>
          <li><strong>Validation:</strong> scaffold splits, ROC/PRC-AUC, cross-validation</li>
          <li><strong>Tabular deep learning:</strong> FT-Transformer, TabNet</li>
          <li><strong>Interpretability &amp; tuning:</strong> SHAP, attention maps, Optuna</li>
          <li><strong>Structure-based screening:</strong> AutoDock Vina, Meeko, OpenMM MD</li>
          <li><strong>Network analysis:</strong> NetworkX, guild / co-occurrence networks</li>
        </ul>
      </div>

      <div class="skill-group">
        <h3>Programming &amp; Infrastructure</h3>
        <ul>
          <li><strong>Python:</strong> pandas, NumPy, SciPy, Biopython</li>
          <li><strong>R:</strong> tidyverse, ggplot2, ComplexHeatmap, Shiny</li>
          <li><strong>Shell:</strong> Bash, awk, SLURM job scripting</li>
          <li><strong>Workflows:</strong> Snakemake, Nextflow, conda environments</li>
          <li><strong>HPC:</strong> Digital Research Alliance (Narval), Grex cluster</li>
          <li><strong>Data apps:</strong> Shiny, Plotly Dash, shinyapps.io</li>
          <li><strong>Version control:</strong> Git, GitHub</li>
        </ul>
      </div>

      <div class="skill-group">
        <h3>Wet-Lab Foundation</h3>
        <ul>
          <li>CRISPR interference (CRISPRi) library construction</li>
          <li>High-throughput antibacterial screening</li>
          <li>Pooled mutant library sequencing (CRISPRi-seq, Tn-seq)</li>
          <li>Cloning and genetic manipulation of non-model bacteria</li>
          <li>DNA/RNA extraction and sequencing library preparation</li>
          <li>Antimicrobial susceptibility testing (MIC)</li>
          <li>Anaerobic and microbial culture techniques</li>
        </ul>
      </div>

    </div>
  </div>
</section>
