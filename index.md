---
layout: default
title: Home
---

<div class="hero-section">
  <h1>FVUtils - Functional Verification Utilities</h1>
  <p class="lead">
    FVUtils is a collection of open-source tools designed for functional verification engineers and developers. 
    From constrained-random stimulus generation to coverage analysis, transaction tracing to HDL integration, 
    FVUtils provides modern, Python-centric solutions for today's verification challenges.
  </p>
</div>

<div class="projects-section">
  <h2>User-Facing Tools</h2>
  <p class="category-intro">
    Production-ready tools for verification engineers working on design verification, stimulus generation, and coverage analysis.
  </p>

  <div class="project-grid">
    
    <!-- PyVSC -->
    <div class="project-card">
      <h3><a href="https://github.com/fvutils/pyvsc">PyVSC</a></h3>
      <p class="project-tagline">Python Verification Stimulus and Coverage</p>
      <div class="project-topics">
        <span class="topic-tag">constrained-random</span>
        <span class="topic-tag">coverage</span>
        <span class="topic-tag">cocotb</span>
      </div>
      <p class="project-description">
        A Python library for verification stimulus and coverage, bringing SystemVerilog-style constrained-random 
        and functional coverage capabilities to Python-based verification environments.
      </p>
      <div class="project-links">
        <a href="https://pyvsc.readthedocs.io" class="project-link docs">Documentation</a>
        <a href="https://github.com/fvutils/pyvsc" class="project-link github">GitHub</a>
        <a href="https://pypi.org/project/pyvsc/" class="project-link pypi">PyPI</a>
      </div>
    </div>

    <!-- PyHDL-IF -->
    <div class="project-card">
      <h3><a href="https://github.com/fvutils/pyhdl-if">PyHDL-IF</a></h3>
      <p class="project-tagline">Python Interface for HDL Simulators</p>
      <p class="project-description">
        Seamless integration between Python and SystemVerilog. Run async pytest tests from SystemVerilog testbenches, 
        call SV functions from Python, and pass structured data using ctypes.Structure. Perfect for modern Python-based 
        verification flows.
      </p>
      <ul class="project-features">
        <li>Start Python behavior from SystemVerilog/UVM</li>
        <li>Run async pytest tests from SV testbenches</li>
        <li>Pass structured data with ctypes.Structure</li>
      </ul>
      <div class="project-links">
        <a href="https://fvutils.github.io/pyhdl-if/" class="project-link docs">Documentation</a>
        <a href="https://github.com/fvutils/pyhdl-if" class="project-link github">GitHub</a>
      </div>
    </div>

    <!-- PyUCIS -->
    <div class="project-card">
      <h3><a href="https://github.com/fvutils/pyucis">PyUCIS</a></h3>
      <p class="project-tagline">Python API to UCIS Coverage Data</p>
      <div class="project-topics">
        <span class="topic-tag">UCIS</span>
        <span class="topic-tag">coverage</span>
        <span class="topic-tag">Accellera</span>
      </div>
      <p class="project-description">
        Python API for reading and manipulating Unified Coverage Interoperability Standard (UCIS) data. 
        Enables programmatic access to coverage databases from any UCIS-compliant tool.
      </p>
      <div class="project-links">
        <a href="https://fvutils.github.io/pyucis" class="project-link docs">Documentation</a>
        <a href="https://github.com/fvutils/pyucis" class="project-link github">GitHub</a>
        <a href="https://pypi.org/project/pyucis/" class="project-link pypi">PyPI</a>
      </div>
    </div>

    <!-- PyUCIS Viewer -->
    <div class="project-card">
      <h3><a href="https://github.com/fvutils/pyucis-viewer">PyUCIS Viewer</a></h3>
      <p class="project-tagline">Qt-based UCIS Coverage Viewer</p>
      <p class="project-description">
        A desktop application for viewing and analyzing UCIS coverage data. Browse coverage hierarchies, 
        analyze metrics, and visualize results from any UCIS-compliant simulator.
      </p>
      <div class="project-links">
        <a href="https://fvutils.github.io/pyucis-viewer" class="project-link docs">Documentation</a>
        <a href="https://github.com/fvutils/pyucis-viewer" class="project-link github">GitHub</a>
      </div>
    </div>

    <!-- IVPM -->
    <div class="project-card">
      <h3><a href="https://github.com/fvutils/ivpm">IVPM</a></h3>
      <p class="project-tagline">IP and Verification Package Manager</p>
      <p class="project-description">
        A Python and Git-centric package manager for managing external project dependencies. 
        Originally designed for hardware design, it works with any Git-based project.
      </p>
      <div class="project-links">
        <a href="https://fvutils.github.io/ivpm/" class="project-link docs">Documentation</a>
        <a href="https://github.com/fvutils/ivpm" class="project-link github">GitHub</a>
      </div>
    </div>

    <!-- PyWellen MCP -->
    <div class="project-card">
      <h3><a href="https://github.com/fvutils/pywellen-mcp">PyWellen MCP</a></h3>
      <p class="project-tagline">Waveform Analysis via Model Context Protocol</p>
      <p class="project-description">
        MCP server enabling LLM agents to analyze digital waveform files (VCD, FST, GHW) using natural language queries. 
        Features 35+ tools for signal analysis, pattern detection, and waveform export.
      </p>
      <ul class="project-features">
        <li>Multi-format waveform support (VCD, FST, GHW, LXT)</li>
        <li>Natural language queries for signal analysis</li>
        <li>GTKWave, Verdi, Simvision integration</li>
      </ul>
      <div class="project-links">
        <a href="https://fvutils.github.io/pywellen-mcp" class="project-link docs">Documentation</a>
        <a href="https://github.com/fvutils/pywellen-mcp" class="project-link github">GitHub</a>
      </div>
    </div>

    <!-- DV Transaction Trace -->
    <div class="project-card">
      <h3><a href="https://github.com/fvutils/dv-transaction-trace">DV Transaction Trace</a></h3>
      <p class="project-tagline">Transaction Logging with Perfetto</p>
      <p class="project-description">
        SystemVerilog and Python bindings for writing transactional data to Perfetto traces. 
        Visualize transaction-level activity from your verification environment using Google's Perfetto UI.
      </p>
      <ul class="project-features">
        <li>SystemVerilog and Python APIs</li>
        <li>UVM recorder integration</li>
        <li>Beautiful Perfetto timeline visualization</li>
      </ul>
      <div class="project-links">
        <a href="https://github.com/fvutils/dv-transaction-trace" class="project-link github">GitHub</a>
      </div>
    </div>

  </div>
</div>

<div class="projects-section">
  <h2>Developer-Focused Tools</h2>
  <p class="category-intro">
    Infrastructure and build tools for developers creating verification environments and EDA workflows.
  </p>

  <div class="project-grid">
    
    <!-- QEMU Model Loader -->
    <div class="project-card">
      <h3><a href="https://github.com/fvutils/qemu-model-loader">QEMU Model Loader</a></h3>
      <p class="project-tagline">Dynamic Device Model Loading for QEMU</p>
      <p class="project-description">
        Research and documentation for loading QEMU device models as dynamically loaded shared libraries. 
        Includes working examples, design documentation, and best practices for extending QEMU without recompilation.
      </p>
      <ul class="project-features">
        <li>Complete technical analysis of QEMU's device architecture</li>
        <li>Working examples with source code</li>
        <li>Security considerations and best practices</li>
      </ul>
      <div class="project-links">
        <a href="https://github.com/fvutils/qemu-model-loader" class="project-link github">GitHub</a>
      </div>
    </div>

    <!-- SVDep -->
    <div class="project-card">
      <h3><a href="https://github.com/fvutils/svdep">SVDep</a></h3>
      <p class="project-tagline">SystemVerilog Dependency Management</p>
      <p class="project-description">
        A dependency management tool for SystemVerilog that tracks when files have been modified, 
        enabling incremental builds and optimized compilation workflows.
      </p>
      <div class="project-links">
        <a href="https://github.com/fvutils/svdep" class="project-link github">GitHub</a>
      </div>
    </div>

    <!-- FLTools -->
    <div class="project-card">
      <h3><a href="https://github.com/fvutils/fltools">FLTools</a></h3>
      <p class="project-tagline">EDA Filelist Utilities</p>
      <p class="project-description">
        Utilities for parsing and manipulating EDA tool filelists. Handles relative paths, comments, 
        duplicate detection, and common filelist formats used across the EDA ecosystem.
      </p>
      <ul class="project-features">
        <li>Parse EDA tool filelists</li>
        <li>Resolve relative paths and working directories</li>
        <li>Detect duplicate filelist inclusion</li>
      </ul>
      <div class="project-links">
        <a href="https://github.com/fvutils/fltools" class="project-link github">GitHub</a>
      </div>
    </div>

  </div>
</div>

<div id="weekly-updates-container">
  <div class="news-section">
    <h2>Weekly Updates</h2>
    <p>Loading weekly updates...</p>
  </div>
</div>

<script src="{{ '/public/js/discussion-feed.js' | relative_url }}"></script>

