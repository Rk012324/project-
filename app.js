

const AVATAR_COLORS = ['#7b9ce8','#e8c97b','#7be8a3','#e87b9c','#a07be8','#e8a07b','#7be8e8'];

const SAMPLE_AUTHORS = [
  { name: 'Harshal M.',  initials: 'HM', color: AVATAR_COLORS[0], posts: 12 },
  { name: 'Priya S.',    initials: 'PS', color: AVATAR_COLORS[1], posts: 9  },
  { name: 'Arjun K.',    initials: 'AK', color: AVATAR_COLORS[2], posts: 7  },
  { name: 'Sneha R.',    initials: 'SR', color: AVATAR_COLORS[3], posts: 11 },
  { name: 'Dev P.',      initials: 'DP', color: AVATAR_COLORS[4], posts: 5  },
];

const SAMPLE_POSTS = [
  {
    id: 1,
    title: 'Getting Started with NumPy for Machine Learning',
    excerpt: 'A practical guide for ECE students stepping into ML. We cover array ops, broadcasting, and how NumPy powers libraries like scikit-learn.',
    content: '<h2>Why NumPy?</h2><p>NumPy is the backbone of scientific computing in Python. Before you touch pandas or scikit-learn, you need NumPy cold.</p><h2>Arrays vs Lists</h2><p>Python lists are flexible but slow. NumPy arrays are typed, contiguous in memory, and vectorized.</p><pre>import numpy as np\na = np.array([1, 2, 3, 4])\nprint(a * 2)   # [2 4 6 8]</pre><h2>Broadcasting</h2><p>Broadcasting lets you operate on arrays of different shapes without copying data. Critical for ML pipelines.</p><blockquote>NumPy broadcasting is the silent engine behind most ML math you will ever write.</blockquote><p>Once comfortable with this, pandas and scikit-learn will feel natural. Practice daily.</p>',
    author: 'Harshal M.', initials: 'HM', color: AVATAR_COLORS[0],
    category: 'AI/ML', tags: ['numpy','python','ml','beginner'],
    date: '2025-07-12', readTime: 5, likes: 34, liked: false, coverImage: null,
    comments: [
      { author: 'Priya S.', text: 'This helped me finally understand broadcasting. Thanks!', time: '2 days ago' }
    ]
  },
  {
    id: 2,
    title: 'ICA & NMF for Bearing Fault Diagnosis - My Research Journey',
    excerpt: 'How I combined Independent Component Analysis and NMF to separate fault signals from industrial bearing datasets (CWRU & Ottawa).',
    content: '<h2>The Problem</h2><p>Rotating machinery faults are buried under noise. Classic signal processing fails because sources are mixed in unknown ways.</p><h2>Blind Source Separation</h2><p>ICA assumes statistical independence between sources and separates them without knowing the mixing matrix.</p><pre>from sklearn.decomposition import FastICA\nica = FastICA(n_components=4, random_state=42)\nS = ica.fit_transform(X_mixed)</pre><h2>Adding NMF for Ottawa Dataset</h2><p>NMF basis vectors correspond to fault frequency patterns - physically interpretable.</p><blockquote>Combining ICA and NMF gave a 6% accuracy boost over ICA-only on the Ottawa dataset.</blockquote>',
    author: 'Harshal M.', initials: 'HM', color: AVATAR_COLORS[0],
    category: 'Tech', tags: ['research','ica','nmf','signal-processing'],
    date: '2025-07-18', readTime: 8, likes: 52, liked: false, coverImage: null,
    comments: []
  },
  {
    id: 3,
    title: '8051 Microcontroller: LCD Interfacing Explained Simply',
    excerpt: 'A no-fluff guide to driving a 16x2 HD44780 LCD from your 8051 board. Includes Mazidi-style ALP and the COMD/DATA_WRT subroutines.',
    content: '<h2>Hardware Setup</h2><p>Connect RS, RW, EN to P2 control bits. Data lines D4-D7 go to P1.4-P1.7 (4-bit mode).</p><h2>Initialization Sequence</h2><p>The HD44780 needs a specific init. Each step needs an EN pulse and enough delay.</p><pre>COMD_WRT:\n  MOV P1, A\n  CLR RS\n  SETB EN\n  ACALL DELAY\n  CLR EN\n  RET</pre><blockquote>The most common bug: forgetting the EN pulse. Always toggle EN high, delay, then low.</blockquote>',
    author: 'Arjun K.', initials: 'AK', color: AVATAR_COLORS[2],
    category: 'Electronics', tags: ['8051','lcd','microcontroller','ece'],
    date: '2025-07-08', readTime: 6, likes: 41, liked: false, coverImage: null,
    comments: [
      { author: 'Dev P.', text: 'Finally an explanation that makes sense. Bookmarked.', time: '5 days ago' }
    ]
  },
  {
    id: 4,
    title: 'How I Use AI to Pick Better Stocks (Beginner Approach)',
    excerpt: 'Combining sentiment analysis on news headlines with simple ML models to build a stock screening tool - what worked and what did not.',
    content: '<h2>The Idea</h2><p>I invest in Indian equities and wondered: can a simple ML model beat gut-feel stock picking? Spoiler - not reliably, but a fantastic learning project.</p><h2>Data Sources</h2><p>Scraped NSE announcements using BeautifulSoup. For prices, used yfinance across 50 mid-cap stocks.</p><pre>import yfinance as yf\ndf = yf.download("RELIANCE.NS", start="2023-01-01")\nprint(df["Close"].tail())</pre><blockquote>Do not over-engineer. A logistic regression on 5 features outperformed a fancy LSTM on this small dataset.</blockquote>',
    author: 'Priya S.', initials: 'PS', color: AVATAR_COLORS[1],
    category: 'Finance', tags: ['stocks','ai','python','project'],
    date: '2025-07-20', readTime: 7, likes: 67, liked: false, coverImage: null,
    comments: []
  },
  {
    id: 5,
    title: 'DSP Lab: FFT Explained Without the Math Overload',
    excerpt: 'Intuitive understanding of the Fast Fourier Transform with MATLAB examples. Perfect for your BECE301P lab exams.',
    content: '<h2>What FFT Actually Does</h2><p>FFT takes a time-domain signal and tells you which frequencies are present. Like a prism splitting white light into colors.</p><h2>MATLAB Example</h2><pre>Fs = 1000; t = 0:1/Fs:1-1/Fs;\nx = sin(2*pi*50*t) + sin(2*pi*120*t);\nX = fft(x);\nf = (0:length(X)-1)*Fs/length(X);\nplot(f(1:500), abs(X(1:500)))</pre><p>You will see two spikes at 50 Hz and 120 Hz - the FFT found your sine waves.</p><blockquote>N-point FFT reduces DFT complexity from O(N^2) to O(N log N) by exploiting periodicity and symmetry.</blockquote>',
    author: 'Sneha R.', initials: 'SR', color: AVATAR_COLORS[3],
    category: 'Electronics', tags: ['dsp','fft','matlab','exam-prep'],
    date: '2025-07-15', readTime: 5, likes: 89, liked: false, coverImage: null,
    comments: [
      { author: 'Harshal M.', text: 'The prism analogy is perfect. Should have been in our textbook.', time: '3 days ago' }
    ]
  },
  {
    id: 6,
    title: "Andrew Ng's Deep Learning Specialization - Is It Worth It?",
    excerpt: 'My honest review after completing Course 1 (Neural Networks & Deep Learning). What I learned, what surprised me.',
    content: '<h2>Why I Started</h2><p>After finishing the Machine Learning Specialization, deep learning was the natural next step. With Coursera financial aid it is essentially free.</p><h2>What Course 1 Covers</h2><p>You build a neural network from scratch using just numpy. No PyTorch, no Keras. Forward prop, backprop, gradient descent - all from scratch.</p><blockquote>Building backprop from scratch with numpy taught me more than 6 months of using PyTorch would have.</blockquote><h2>Verdict</h2><p>Yes, if you want to actually understand what happens inside neural networks. Prof. Ng makes the math feel inevitable rather than arbitrary.</p>',
    author: 'Dev P.', initials: 'DP', color: AVATAR_COLORS[4],
    category: 'AI/ML', tags: ['coursera','deep-learning','review','andrew-ng'],
    date: '2025-07-22', readTime: 6, likes: 73, liked: false, coverImage: null,
    comments: []
  }
];

const ALL_TAGS = ['All','AI/ML','Tech','Electronics','Finance','Science','Life & Campus','Project Showcase','Mathematics'];


var posts           = JSON.parse(localStorage.getItem('thinkink_posts') || 'null') || SAMPLE_POSTS;
var currentUser     = JSON.parse(localStorage.getItem('thinkink_user')  || 'null');
var activeFilter        = 'All';
var activeExploreFilter = 'All';
var currentPostId   = null;
var coverImageData  = null;
var _inlineImgMode  = 'upload';
var _savedRange     = null;


function savePosts() {
  try { localStorage.setItem('thinkink_posts', JSON.stringify(posts)); }
  catch (e) { showToast('Storage full - images may not save.', 'error'); }
}

function saveUser(u) {
  currentUser = u;
  localStorage.setItem('thinkink_user', JSON.stringify(u));
}

function showToast(msg, type) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(function() { t.className = 'toast'; }, 2800);
}

function getInitials(name) {
  return name.trim().split(/\s+/).map(function(w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
}

function randomColor() {
  return AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
}

function timeAgo(dateStr) {
  var diff = (Date.now() - new Date(dateStr)) / 1000;
  if (diff < 60)    return 'just now';
  if (diff < 3600)  return Math.floor(diff / 60)   + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600)  + 'h ago';
  return Math.floor(diff / 86400) + 'd ago';
}

function countWords(html) {
  var text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text ? text.split(' ').length : 0;
}

function readFileAsDataURL(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload  = function(e) { resolve(e.target.result); };
    reader.onerror = function()  { reject(new Error('Failed to read file')); };
    reader.readAsDataURL(file);
  });
}


function showPage(name) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  var target = document.getElementById('page-' + name);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(function(l) {
    l.classList.toggle('active', l.dataset.page === name);
  });
  window.scrollTo(0, 0);
}


function renderFilterTags() {
  var c = document.getElementById('filterTags');
  if (!c) return;
  c.innerHTML = ALL_TAGS.map(function(t) {
    return '<button class="tag-pill' + (t === activeFilter ? ' active' : '') + '" data-tag="' + t + '">' + t + '</button>';
  }).join('');
  c.querySelectorAll('.tag-pill').forEach(function(b) {
    b.addEventListener('click', function() {
      activeFilter = b.dataset.tag;
      renderFilterTags();
      renderPostsGrid();
    });
  });
}

function renderPostsGrid() {
  var filtered = activeFilter === 'All'
    ? posts
    : posts.filter(function(p) { return p.category === activeFilter || p.tags.indexOf(activeFilter.toLowerCase()) !== -1; });
  var c = document.getElementById('postsGrid');
  if (!c) return;
  if (!filtered.length) {
    c.innerHTML = '<div class="empty-state"><span>📭</span>No posts yet in this category.</div>';
    return;
  }
  c.innerHTML = filtered.map(function(p, i) {
    return '<div class="post-card" data-id="' + p.id + '" style="animation-delay:' + (i * 0.05) + 's">' +
      (p.coverImage ? '<img class="card-cover" src="' + p.coverImage + '" alt="cover"/>' : '') +
      '<div class="card-tag">' + p.category + '</div>' +
      '<div class="card-title">' + p.title + '</div>' +
      '<div class="card-excerpt">' + p.excerpt + '</div>' +
      '<div class="card-meta">' +
        '<div class="card-avatar" style="background:' + p.color + '22;color:' + p.color + '">' + p.initials + '</div>' +
        '<span class="card-meta-author">' + p.author + '</span>' +
        '<span class="card-meta-dot">·</span>' +
        '<span>' + p.readTime + ' min</span>' +
        '<span class="card-meta-time">' + timeAgo(p.date) + '</span>' +
        '<span class="card-likes' + (p.liked ? ' liked' : '') + '" data-id="' + p.id + '">♥ ' + p.likes + '</span>' +
      '</div>' +
    '</div>';
  }).join('');

  c.querySelectorAll('.post-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
      if (!e.target.classList.contains('card-likes')) openPost(Number(card.dataset.id));
    });
  });
  c.querySelectorAll('.card-likes').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleLike(Number(btn.dataset.id));
    });
  });
}

function renderWriters() {
  var c = document.getElementById('writersRow');
  if (!c) return;
  c.innerHTML = SAMPLE_AUTHORS.map(function(a) {
    return '<div class="writer-card">' +
      '<div class="writer-avatar" style="background:' + a.color + '22;color:' + a.color + '">' + a.initials + '</div>' +
      '<div><div class="writer-name">' + a.name + '</div><div class="writer-count">' + a.posts + ' posts</div></div>' +
    '</div>';
  }).join('');
}


function renderExploreTagBar() {
  var c = document.getElementById('exploreTagBar');
  if (!c) return;
  c.innerHTML = ALL_TAGS.map(function(t) {
    return '<button class="tag-pill' + (t === activeExploreFilter ? ' active' : '') + '" data-tag="' + t + '">' + t + '</button>';
  }).join('');
  c.querySelectorAll('.tag-pill').forEach(function(b) {
    b.addEventListener('click', function() {
      activeExploreFilter = b.dataset.tag;
      renderExploreTagBar();
      renderExploreList();
    });
  });
}

function renderExploreList(query) {
  query = query || '';
  var filtered = activeExploreFilter === 'All'
    ? posts
    : posts.filter(function(p) { return p.category === activeExploreFilter || p.tags.indexOf(activeExploreFilter.toLowerCase()) !== -1; });
  if (query) {
    var q = query.toLowerCase();
    filtered = filtered.filter(function(p) {
      return p.title.toLowerCase().indexOf(q) !== -1 ||
             p.author.toLowerCase().indexOf(q) !== -1 ||
             p.tags.some(function(t) { return t.indexOf(q) !== -1; });
    });
  }
  var c = document.getElementById('exploreList');
  if (!c) return;
  if (!filtered.length) {
    c.innerHTML = '<div class="empty-state"><span>🔍</span>No posts found.</div>';
    return;
  }
  c.innerHTML = filtered.map(function(p, i) {
    return '<div class="list-card" data-id="' + p.id + '" style="animation-delay:' + (i * 0.04) + 's">' +
      '<div class="list-num">' + String(i + 1).padStart(2, '0') + '</div>' +
      '<div class="list-card-body">' +
        '<div class="list-tag">' + p.category + '</div>' +
        '<div class="list-title">' + p.title + '</div>' +
        '<div class="list-excerpt">' + p.excerpt + '</div>' +
        '<div class="list-meta">' +
          '<span>By ' + p.author + '</span><span>·</span>' +
          '<span>' + p.readTime + ' min read</span><span>·</span>' +
          '<span>♥ ' + p.likes + '</span><span>·</span>' +
          '<span>' + timeAgo(p.date) + '</span>' +
        '</div>' +
      '</div>' +
      (p.coverImage ? '<img class="list-card-thumb" src="' + p.coverImage + '" alt="cover"/>' : '') +
    '</div>';
  }).join('');

  c.querySelectorAll('.list-card').forEach(function(card) {
    card.addEventListener('click', function() { openPost(Number(card.dataset.id)); });
  });
}


function openPost(id) {
  var p = posts.find(function(x) { return x.id === id; });
  if (!p) return;
  currentPostId = id;
  var c = document.getElementById('postView');
  if (!c) return;

  var dateStr = new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  var tagsStr = p.tags.map(function(t) { return '#' + t; }).join(' ');

  c.innerHTML =
    '<div class="pv-back" id="pvBack">← Back</div>' +
    '<div class="pv-tag">' + p.category + ' · ' + tagsStr + '</div>' +
    '<h1 class="pv-title">' + p.title + '</h1>' +
    '<div class="pv-meta">' +
      '<div class="pv-avatar" style="background:' + p.color + '22;color:' + p.color + '">' + p.initials + '</div>' +
      '<span class="pv-author">' + p.author + '</span><span>·</span>' +
      '<span>' + p.readTime + ' min read</span><span>·</span>' +
      '<span>' + dateStr + '</span>' +
    '</div>' +
    (p.coverImage ? '<img class="pv-cover" src="' + p.coverImage + '" alt="cover"/>' : '') +
    '<div class="pv-body">' + p.content + '</div>' +
    '<div class="pv-actions">' +
      '<button class="pv-like-btn' + (p.liked ? ' liked' : '') + '" id="pvLike">♥ ' + p.likes + ' Likes</button>' +
      '<button class="pv-share-btn" id="pvShare">⤴ Share</button>' +
    '</div>' +
    '<div class="comments-section">' +
      '<h3>Comments (' + p.comments.length + ')</h3>' +
      '<div class="comment-form">' +
        '<input id="cmtName" placeholder="Your name" value="' + (currentUser ? currentUser.name : '') + '"/>' +
        '<textarea id="cmtText" placeholder="Write a comment..."></textarea>' +
        '<button class="btn-primary" id="cmtSubmit">Post Comment</button>' +
      '</div>' +
      '<div class="comment-list" id="commentList"></div>' +
    '</div>';

  renderComments(p);

  document.getElementById('pvBack').addEventListener('click', function() { showPage('home'); });

  document.getElementById('pvLike').addEventListener('click', function() {
    toggleLike(id);
    var updated = posts.find(function(x) { return x.id === id; });
    var btn = document.getElementById('pvLike');
    if (btn && updated) {
      btn.textContent = '♥ ' + updated.likes + ' Likes';
      btn.classList.toggle('liked', updated.liked);
    }
  });

  document.getElementById('pvShare').addEventListener('click', function() {
    var url = window.location.href.split('#')[0] + '#post-' + id;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url)
        .then(function()  { showToast('Link copied!', 'success'); })
        .catch(function() { showToast('Could not copy link.', 'error'); });
    } else {
      showToast('Link: ' + url);
    }
  });

  document.getElementById('cmtSubmit').addEventListener('click', function() {
    var name = document.getElementById('cmtName').value.trim();
    var text = document.getElementById('cmtText').value.trim();
    if (!name || !text) { showToast('Please enter your name and comment.', 'error'); return; }
    p.comments.push({ author: name, text: text, time: 'just now' });
    savePosts();
    renderComments(p);
    document.getElementById('cmtText').value = '';
    showToast('Comment posted!', 'success');
    var h3 = document.querySelector('.comments-section h3');
    if (h3) h3.textContent = 'Comments (' + p.comments.length + ')';
  });

  showPage('post');
}

function renderComments(p) {
  var c = document.getElementById('commentList');
  if (!c) return;
  if (!p.comments.length) {
    c.innerHTML = '<div class="empty-state" style="padding:20px 0"><span style="font-size:1.5rem">💬</span>No comments yet. Be the first!</div>';
    return;
  }
  c.innerHTML = p.comments.map(function(cm) {
    return '<div class="comment-item">' +
      '<div class="comment-author">' + cm.author + '</div>' +
      '<div class="comment-text">'   + cm.text   + '</div>' +
      '<div class="comment-time">'   + cm.time   + '</div>' +
    '</div>';
  }).join('');
}


function toggleLike(id) {
  var p = posts.find(function(x) { return x.id === id; });
  if (!p) return;
  p.liked = !p.liked;
  p.likes += p.liked ? 1 : -1;
  savePosts();
  renderPostsGrid();
  var explorePage = document.getElementById('page-explore');
  var searchInput = document.getElementById('searchInput');
  if (explorePage && explorePage.classList.contains('active')) {
    renderExploreList(searchInput ? searchInput.value : '');
  }
}


function initEditor() {
  var body  = document.getElementById('editorBody');
  var wcEl  = document.getElementById('wordCount');
  var rtEl  = document.getElementById('readTime');
  if (!body) return;

  body.addEventListener('input', function() {
    var count = countWords(body.innerHTML);
    if (wcEl) wcEl.textContent = count + ' word' + (count !== 1 ? 's' : '');
    if (rtEl) rtEl.textContent = '~' + Math.max(1, Math.ceil(count / 200)) + ' min read';
  });

  document.querySelectorAll('#toolbar button[data-cmd]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.execCommand(btn.dataset.cmd, false, btn.dataset.val || null);
      body.focus();
    });
  });

  var insertCodeBtn = document.getElementById('insertCode');
  if (insertCodeBtn) {
    insertCodeBtn.addEventListener('click', function() {
      document.execCommand('insertHTML', false, '<pre><code>// your code here</code></pre><p><br></p>');
      body.focus();
    });
  }

  var insertImgBtn = document.getElementById('insertImageBtn');
  if (insertImgBtn) {
    insertImgBtn.addEventListener('click', function() { openInlineImageModal(); });
  }

  var publishBtn = document.getElementById('publishBtn');
  if (publishBtn) publishBtn.addEventListener('click', publishPost);
}

function publishPost() {
  var titleEl  = document.getElementById('postTitle');
  var authorEl = document.getElementById('postAuthor');
  var tagsEl   = document.getElementById('postTags');
  var catEl    = document.getElementById('postCategory');
  var bodyEl   = document.getElementById('editorBody');

  var title    = titleEl  ? titleEl.value.trim()  : '';
  var authorRaw = authorEl ? authorEl.value.trim() : '';
  var author   = authorRaw || (currentUser ? currentUser.name : 'Anonymous');
  var tagsRaw  = tagsEl   ? tagsEl.value.trim()   : '';
  var category = (catEl && catEl.value) ? catEl.value : 'Tech';
  var content  = bodyEl   ? bodyEl.innerHTML.trim() : '';

  if (!title)   { showToast('Please enter a title.', 'error');      return; }
  if (!content) { showToast('Write something first!', 'error');     return; }

  var tags     = tagsRaw ? tagsRaw.split(',').map(function(t) { return t.trim().toLowerCase(); }).filter(Boolean) : [];
  var initStr  = getInitials(author);
  var color    = currentUser ? (currentUser.color || randomColor()) : randomColor();
  var wc       = countWords(content);
  var readTime = Math.max(1, Math.ceil(wc / 200));
  var stripped = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  var excerpt  = stripped.slice(0, 160) + (stripped.length > 160 ? '...' : '');

  var newPost = {
    id: Date.now(),
    title: title, content: content, excerpt: excerpt,
    author: author, initials: initStr, color: color,
    category: category, tags: tags,
    date: new Date().toISOString().slice(0, 10),
    readTime: readTime, likes: 0, liked: false, comments: [],
    coverImage: coverImageData || null
  };

  posts.unshift(newPost);
  savePosts();

  if (titleEl)  titleEl.value  = '';
  if (authorEl) authorEl.value = '';
  if (tagsEl)   tagsEl.value   = '';
  if (catEl)    catEl.value    = '';
  if (bodyEl)   bodyEl.innerHTML = '';
  var wcEl = document.getElementById('wordCount');
  var rtEl = document.getElementById('readTime');
  if (wcEl) wcEl.textContent = '0 words';
  if (rtEl) rtEl.textContent = '~0 min read';

  coverImageData = null;
  resetCoverUI();

  showToast('Post published successfully!', 'success');
  renderPostsGrid();
  renderExploreList();
  setTimeout(function() { showPage('home'); }, 800);
}


function resetCoverUI() {
  var placeholder = document.getElementById('coverPlaceholder');
  var preview     = document.getElementById('coverPreview');
  var removeBtn   = document.getElementById('coverRemoveBtn');
  var area        = document.getElementById('coverUploadArea');
  if (placeholder) placeholder.hidden = false;
  if (preview)   { preview.hidden = true; preview.src = ''; }
  if (removeBtn)   removeBtn.hidden = true;
  if (area)        area.style.minHeight = '160px';
}

function setCoverImage(dataUrl) {
  coverImageData = dataUrl;
  var preview     = document.getElementById('coverPreview');
  var placeholder = document.getElementById('coverPlaceholder');
  var removeBtn   = document.getElementById('coverRemoveBtn');
  var area        = document.getElementById('coverUploadArea');
  if (preview)    { preview.src = dataUrl; preview.hidden = false; }
  if (placeholder)  placeholder.hidden = true;
  if (removeBtn)    removeBtn.hidden = false;
  if (area)         area.style.minHeight = 'auto';
}

function initCoverUpload() {
  var area      = document.getElementById('coverUploadArea');
  var input     = document.getElementById('coverImageInput');
  var removeBtn = document.getElementById('coverRemoveBtn');
  if (!area || !input || !removeBtn) return;

  area.addEventListener('click', function(e) {
    if (removeBtn.contains(e.target)) return;
    input.click();
  });

  input.addEventListener('change', function() {
    var file = input.files[0];
    if (!file) return;
    readFileAsDataURL(file).then(function(data) {
      setCoverImage(data);
    }).catch(function() {
      showToast('Could not read image file.', 'error');
    });
    input.value = '';
  });

  removeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    coverImageData = null;
    resetCoverUI();
  });

  area.addEventListener('dragover', function(e) {
    e.preventDefault();
    area.classList.add('drag-over');
  });
  area.addEventListener('dragleave', function() { area.classList.remove('drag-over'); });
  area.addEventListener('drop', function(e) {
    e.preventDefault();
    area.classList.remove('drag-over');
    var file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) {
      showToast('Please drop an image file.', 'error');
      return;
    }
    readFileAsDataURL(file).then(function(data) {
      setCoverImage(data);
    }).catch(function() {
      showToast('Could not read image file.', 'error');
    });
  });
}


function openInlineImageModal() {
  var sel = window.getSelection();
  _savedRange = (sel && sel.rangeCount > 0) ? sel.getRangeAt(0).cloneRange() : null;

  _inlineImgMode = 'upload';
  var fileInput = document.getElementById('inlineImgFile');
  var urlInput  = document.getElementById('imgUrlInput');
  var miniPrev  = document.getElementById('imgPreviewMini');
  var upPanel   = document.getElementById('imgUploadPanel');
  var urlPanel  = document.getElementById('imgUrlPanel');
  var tabUp     = document.getElementById('imgTabUpload');
  var tabUrl    = document.getElementById('imgTabUrl');

  if (fileInput) fileInput.value = '';
  if (urlInput)  urlInput.value  = '';
  if (miniPrev)  { miniPrev.src = ''; miniPrev.style.display = 'none'; }
  if (upPanel)   upPanel.style.display  = '';
  if (urlPanel)  urlPanel.style.display = 'none';
  if (tabUp)     tabUp.classList.add('active');
  if (tabUrl)    tabUrl.classList.remove('active');

  var modal = document.getElementById('imgUrlModal');
  if (modal) modal.classList.add('open');
}

function closeInlineImageModal() {
  var modal = document.getElementById('imgUrlModal');
  if (modal) modal.classList.remove('open');
}

function buildInlineImageModal() {
  if (document.getElementById('imgUrlModal')) return;

  var div = document.createElement('div');
  div.className = 'img-url-modal';
  div.id = 'imgUrlModal';
  div.innerHTML =
    '<div class="img-url-box">' +
      '<h4>Insert Image</h4>' +
      '<div class="tab-row">' +
        '<button class="active" id="imgTabUpload">Upload File</button>' +
        '<button id="imgTabUrl">Image URL</button>' +
      '</div>' +
      '<div id="imgUploadPanel">' +
        '<input type="file" id="inlineImgFile" accept="image/*" ' +
          'style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;' +
          'padding:10px 14px;color:var(--text);font-family:var(--font-body);font-size:.85rem;' +
          'outline:none;width:100%;cursor:pointer"/>' +
      '</div>' +
      '<div id="imgUrlPanel" style="display:none">' +
        '<input type="url" id="imgUrlInput" placeholder="https://example.com/image.jpg"/>' +
        '<img class="img-preview-mini" id="imgPreviewMini" alt="preview" style="display:none;margin-top:8px"/>' +
      '</div>' +
      '<div class="img-url-actions">' +
        '<button class="btn-ghost" id="imgModalCancel">Cancel</button>' +
        '<button class="btn-primary" id="imgModalInsert">Insert Image</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(div);

  document.getElementById('imgTabUpload').addEventListener('click', function() {
    _inlineImgMode = 'upload';
    document.getElementById('imgUploadPanel').style.display  = '';
    document.getElementById('imgUrlPanel').style.display     = 'none';
    document.getElementById('imgTabUpload').classList.add('active');
    document.getElementById('imgTabUrl').classList.remove('active');
  });

  document.getElementById('imgTabUrl').addEventListener('click', function() {
    _inlineImgMode = 'url';
    document.getElementById('imgUploadPanel').style.display  = 'none';
    document.getElementById('imgUrlPanel').style.display     = '';
    document.getElementById('imgTabUrl').classList.add('active');
    document.getElementById('imgTabUpload').classList.remove('active');
  });

  document.getElementById('imgUrlInput').addEventListener('input', function(e) {
    var mini = document.getElementById('imgPreviewMini');
    var url  = e.target.value.trim();
    if (url) { mini.src = url; mini.style.display = 'block'; }
    else     { mini.src = ''; mini.style.display = 'none';  }
  });

  document.getElementById('imgModalCancel').addEventListener('click', closeInlineImageModal);

  div.addEventListener('click', function(e) {
    if (e.target === div) closeInlineImageModal();
  });

  document.getElementById('imgModalInsert').addEventListener('click', function() {
    if (_inlineImgMode === 'upload') {
      var file = document.getElementById('inlineImgFile').files[0];
      if (!file) { showToast('Please select an image file.', 'error'); return; }
      readFileAsDataURL(file).then(function(data) {
        insertInlineImage(data);
      }).catch(function() {
        showToast('Could not read image file.', 'error');
      });
    } else {
      var url = document.getElementById('imgUrlInput').value.trim();
      if (!url) { showToast('Please enter an image URL.', 'error'); return; }
      insertInlineImage(url);
    }
  });
}

function insertInlineImage(src) {
  var imgHtml = '<img src="' + src + '" alt="inline image" style="max-width:100%;border-radius:10px;margin:12px 0;display:block"/>';
  var editor  = document.getElementById('editorBody');
  if (!editor) { closeInlineImageModal(); return; }

  editor.focus();
  if (_savedRange) {
    var sel = window.getSelection();
    if (sel) { sel.removeAllRanges(); sel.addRange(_savedRange); }
  }
  document.execCommand('insertHTML', false, '<p>' + imgHtml + '</p>');

  var count = countWords(editor.innerHTML);
  var wcEl  = document.getElementById('wordCount');
  var rtEl  = document.getElementById('readTime');
  if (wcEl) wcEl.textContent = count + ' word' + (count !== 1 ? 's' : '');
  if (rtEl) rtEl.textContent = '~' + Math.max(1, Math.ceil(count / 200)) + ' min read';

  closeInlineImageModal();
  showToast('Image inserted!', 'success');
}


function openModal(mode) {
  mode = mode || 'login';
  var modal = document.getElementById('authModal');
  if (modal) modal.classList.add('open');
  renderModalBody(mode);
  var tl = document.getElementById('tabLogin');
  var ts = document.getElementById('tabSignup');
  if (tl) tl.classList.toggle('active', mode === 'login');
  if (ts) ts.classList.toggle('active', mode === 'signup');
}

function closeModal() {
  var modal = document.getElementById('authModal');
  if (modal) modal.classList.remove('open');
}

function renderModalBody(mode) {
  var c = document.getElementById('modalBody');
  if (!c) return;

  if (mode === 'login') {
    c.innerHTML =
      '<label>Email</label>' +
      '<input type="email" id="authEmail" placeholder="you@vit.ac.in"/>' +
      '<label>Password</label>' +
      '<input type="password" id="authPass" placeholder="Password"/>' +
      '<button class="btn-primary modal-submit" id="authSubmit">Log In</button>' +
      '<div class="modal-alt">No account? <span id="switchToSignup">Sign up</span></div>';
    document.getElementById('authSubmit').addEventListener('click', doLogin);
    document.getElementById('switchToSignup').addEventListener('click', function() {
      renderModalBody('signup');
      document.getElementById('tabLogin').classList.remove('active');
      document.getElementById('tabSignup').classList.add('active');
    });
  } else {
    c.innerHTML =
      '<label>Full Name</label>' +
      '<input type="text" id="authName" placeholder="Your Name"/>' +
      '<label>Email</label>' +
      '<input type="email" id="authEmail" placeholder="you@vit.ac.in"/>' +
      '<label>Password</label>' +
      '<input type="password" id="authPass" placeholder="Password"/>' +
      '<label>Department</label>' +
      '<input type="text" id="authDept" placeholder="ECE, CSE ..."/>' +
      '<button class="btn-primary modal-submit" id="authSubmit">Create Account</button>' +
      '<div class="modal-alt">Have an account? <span id="switchToLogin">Log in</span></div>';
    document.getElementById('authSubmit').addEventListener('click', doSignup);
    document.getElementById('switchToLogin').addEventListener('click', function() {
      renderModalBody('login');
      document.getElementById('tabSignup').classList.remove('active');
      document.getElementById('tabLogin').classList.add('active');
    });
  }
}

function doLogin() {
  var email = document.getElementById('authEmail').value.trim();
  var pass  = document.getElementById('authPass').value;
  if (!email || !pass) { showToast('Please fill all fields.', 'error'); return; }
  var users = JSON.parse(localStorage.getItem('thinkink_users') || '[]');
  var user  = users.find(function(u) { return u.email === email && u.password === pass; });
  if (!user) { showToast('Invalid email or password.', 'error'); return; }
  saveUser(user);
  closeModal();
  updateNavForUser();
  showToast('Welcome back, ' + user.name + '!', 'success');
}

function doSignup() {
  var name  = document.getElementById('authName').value.trim();
  var email = document.getElementById('authEmail').value.trim();
  var pass  = document.getElementById('authPass').value;
  var dept  = document.getElementById('authDept').value.trim();
  if (!name || !email || !pass) { showToast('Please fill all fields.', 'error'); return; }
  var users = JSON.parse(localStorage.getItem('thinkink_users') || '[]');
  if (users.find(function(u) { return u.email === email; })) {
    showToast('Email already registered.', 'error'); return;
  }
  var user = { name: name, email: email, password: pass, dept: dept, color: randomColor(), initials: getInitials(name) };
  users.push(user);
  localStorage.setItem('thinkink_users', JSON.stringify(users));
  saveUser(user);
  closeModal();
  updateNavForUser();
  showToast('Account created! Welcome, ' + name, 'success');
}

function updateNavForUser() {
  var actions = document.querySelector('.nav-actions');
  if (!actions) return;
  if (currentUser) {
    actions.innerHTML =
      '<div class="card-avatar" style="background:' + currentUser.color + '22;color:' + currentUser.color + ';width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:500;cursor:pointer" title="' + currentUser.name + '">' + currentUser.initials + '</div>' +
      '<button class="btn-ghost" id="logoutBtn">Log Out</button>';
    document.getElementById('logoutBtn').addEventListener('click', function() {
      currentUser = null;
      localStorage.removeItem('thinkink_user');
      updateNavForUser();
      showToast('Logged out.');
      renderPostsGrid();
    });
  } else {
    actions.innerHTML =
      '<button class="btn-ghost" id="loginBtn">Log In</button>' +
      '<button class="btn-primary" id="signupBtn">Sign Up</button>';
    document.getElementById('loginBtn').addEventListener('click',  function() { openModal('login');  });
    document.getElementById('signupBtn').addEventListener('click', function() { openModal('signup'); });
  }
}


window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});


document.addEventListener('DOMContentLoaded', function() {

  // Nav links
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var page = link.dataset.page;
      showPage(page);
      if (page === 'explore') { renderExploreTagBar(); renderExploreList(); }
    });
  });

  var navBrand = document.querySelector('.nav-brand');
  if (navBrand) navBrand.addEventListener('click', function() { showPage('home'); });

  var startWritingBtn = document.getElementById('startWritingBtn');
  if (startWritingBtn) startWritingBtn.addEventListener('click', function() { showPage('write'); });

  var exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn) exploreBtn.addEventListener('click', function() {
    showPage('explore');
    renderExploreTagBar();
    renderExploreList();
  });

 
  var loginBtn  = document.getElementById('loginBtn');
  var signupBtn = document.getElementById('signupBtn');
  if (loginBtn)  loginBtn.addEventListener('click',  function() { openModal('login');  });
  if (signupBtn) signupBtn.addEventListener('click', function() { openModal('signup'); });

  var closeModalBtn = document.getElementById('closeModal');
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  var authModal = document.getElementById('authModal');
  if (authModal) authModal.addEventListener('click', function(e) { if (e.target === authModal) closeModal(); });

  var tabLogin  = document.getElementById('tabLogin');
  var tabSignup = document.getElementById('tabSignup');
  if (tabLogin)  tabLogin.addEventListener('click',  function() { renderModalBody('login');  tabLogin.classList.add('active');  tabSignup.classList.remove('active'); });
  if (tabSignup) tabSignup.addEventListener('click', function() { renderModalBody('signup'); tabSignup.classList.add('active'); tabLogin.classList.remove('active');  });

  // Search
  var searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.addEventListener('input', function(e) { renderExploreList(e.target.value); });

  // Hamburger
  var hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      var navLinks   = document.querySelector('.nav-links');
      var navActions = document.querySelector('.nav-actions');
      if (navLinks)   navLinks.style.display   = navLinks.style.display   === 'flex' ? 'none' : 'flex';
      if (navActions) navActions.style.display  = navActions.style.display  === 'flex' ? 'none' : 'flex';
    });
  }

  initEditor();
  initCoverUpload();
  buildInlineImageModal();


  renderFilterTags();
  renderPostsGrid();
  renderWriters();
  renderExploreTagBar();
  renderExploreList();


  if (currentUser) updateNavForUser();

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeModal(); closeInlineImageModal(); }
  });
});
