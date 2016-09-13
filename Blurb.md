# Quick and dirty app prototyping for startup founders

## About you:

* You have an idea or a concept for a project like as a startup
* Your concept includes some kind of functional mobile app or web page
* You might know how to use a mobile device or computer, perhaps even a power user
* You might even know how to code, but not for mobile apps

## However:

* you dont currently have the existing knowledge or skills to create an app
* you have skills in other areas - business, design, finance, journalism, etc.
* you dont have time to do the in-depth learning required, even if you are inclined

## Solution:

* learn just enough coding to create a web based mobile app prototype
* use the prototype to undertake lean-startup style customer validation
* use the prototype to reduce the cost of contracting a professional developer

## Outcomes:

* create a functional demonstrable simple app
* create an app that runs on common mobile platforms and is mobile friendly
* collect data using the app
* swish the app up with charts and maps and speech
* know when to use alternatives such as google forms
* learn just enough javascript to cause damage without further study

## Benefits:

* gain ability to produce a working prototype
* working hands on, in a small group so you can get hands on attention from the instructor
* provide you with a skeleton to re-use for creating new prototypes
* better customer validation performance compared to using a 'storyboard' app or powerpoint
* better customer data collection as potential customers use the prototype
* save money by having working prototype
* a simple enough app may be sufficient to gain paying customers

## What this course will not do!

* teach you how to build an app-store or google-play app
* teach you how to build a complex hosted web application
* teach you how to code properly (unless you already can)
* teach you to be a designed - if you need it, hire one - but remember, its a _functional_ prototype
* teach you how to think like a programmer (unless you already are)
* beyond letting you know they exist, and to ask your contractor how they consider it, cover in detail the supporting infrastructure necessary for a real application, such as security, scalable architecture, how to manage servers, how to use AWS, etc.

# Course Architecture

* Three sessions x 2 hours
* Session 1 - introduction, concepts, setup environment, git, basic web "hello world" skeleton for your use, mobile device development, testing
 * TODO: look into splitting the first stuff this over the sessions, so students can achieve something tangible the first week
* Session 2 - Using google forms; Creating a business calculator app; Recording data (introduction to firebase);
* Session 3 - Using D3 for fancy user interfaces ; Using leaflet for maps
 * Go through all the other possibilities not covered

# Prerequisites

* Laptop (Windows, Mac, Linux all ok) with Firefox or Chrome
* Internet access (not totally essential, but makes like much easier, and less homework)
* Text editor
 * Recommended: Atom; Notepad++ (Windows)
* Accounts for:
 * gmail/google drive
 * github
* A mobile device or tablet to test on (desirable, but optional)

## Pre-supplied instructions (pre-homework)

* Installing Firefox
* Installing Chrome
* Installing Notepad++
* Installing Atom
* Installing node.js (used for http-server - second week)
* Creating a gmail Accounts
* Creating a github account

# Syllabus

* Introduction & Background, Self Management
* Responsive mobile interfaces and basic web applications

## Detailed Syllabus

* Background
 * 5 Minutes tops
 * Restate aims
 * What this course is _not_ going to achieve for you
 * Caveats
  * Only so much time, this is an introductory course, so don't expect miracles
  * You need to do the homework to keep up
  * We will avoid cutting edge fancy tools, using old but good libraries
  * You don't need to understand how the provided templates work to use them
  * etc etc

* Lean startup recap - customer validation
  * 5 Minutes tops
  * Relationship of apps to startups
   * from idea to prototype - a typical process
   * from idea to prototype - our process

* Basic concepts
 * 5 Minutes tops
 * HTML, CSS, UX, mobile & responsive design
  * exercise - load web page in Firefox or Chrome using
 * servers, clients, under the hood
 * backups, source code management & git
 * app stores - constructed differently, point is to not bother (refer startup above)

* Exercise 1: create a new repository in github
 * Allow 15 minutes, to help everyone
 * Necessary yak shaving
 * Requires internet access
 * Add a Readme
 * Pro: backup, work anywhere
 * Con: world readable
 * Deploying to gh-pages a simple 'hello world'
 * Debugging console

 * Exercise 2: create a simple four pages of text hello world app
  * Allow 20 minutes
  * Create a new repository
  * Copy the skeleton - USB stick or github
  * Demonstrates responsive mobile
  * Demonstrates placing buttons and handling user touch on buttons
  * Demonstrates placing text
  * Deploying to gh-pages
  * Test on a mobile device

* Aside
 * alternative ways to deploy:
  * ISP hosting
  * CPANEL hosting
  * VPS hosting - but who here knows about system administration? not advisable unless you already familiar
 * not 'proper' program structure for any complex app
  * code should be modularised
  * sub directories for js and css files, etc, assets directory

* Exercise 3: create a simple fuel usage calculator
 * Allow 20 minutes
 * Create a new repository
 * Copy the skeleton - USB stick or github
 * Demonstrates responsive mobile
 * Demonstrates placing buttons and handling user touch on buttons
 * Demonstrates placing text
 * Demonstrates performing computations
 * Test on a mobile device

* Aside
 * Caveats - performance is not necessarily optimal because with libraries we are not
  * using third party libraries in a modular fashion (not using `require()`)
  * relying on third party CDN instead of locally hosting (has pros/cons, including first point)
  * we are not running web app post processing, which compresses the javascript and other things

* Dealing with error messages

* Exercise 4: integration with weebly or other site builders


Break





* security, Licensing, + open source & attribution



## Appendix

* Common app types - many not doable here - but cover
 * fuel usage calculator
 * business benefit calculator
 * interest rate graph calculator
 * flappy birds
 * questionnaire
 * social wall
 * chat
 * charts
 * data journalism
 * weather notification / API integrastion

* Marketing
 * idea - youtube video with A4 'words'

* business
 * Company - carpathia industries t/as phaze space productions
 * Purchase a private github repo for course material
 * Release template under CC0
