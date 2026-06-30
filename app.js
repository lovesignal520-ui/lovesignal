// ==========================================
// 1. GLOBAL STATE & DATA
// ==========================================
let allShows = [
    {
        "id": "love-actually-5",
        "title": "Love Actually 5",
        "status": "Airing",
        "badge": "C-Reality",
        "rating": "4.7",
        "episodesCount": "12",
        "year": "2026",
        "image": "https://i.mydramalist.com/JB43mY_4m.jpg",
        "heroImage": "https://i.mydramalist.com/JB43mY_4c.jpg?v=1",
        "episodeLinks": [
            { "name": "Episode 1", "url": "https://youtu.be/iacXr4cN5lQ?si=KwJ4xqz8F6UNBEQW" },
            { "name": "Episode 2", "url": "https://youtu.be/sSyPfgkXWOM?si=Y_yPiNyyLcRGOlvm" },
            { "name": "Episode 3", "url": "https://youtu.be/pKgRrqbCECg?si=lojpcCwov2WGgK6o" },
            { "name": "Episode 4", "url": "https://youtu.be/7BuyVdrhdGQ?si=eeODUt-TPmWZ8w2v" },
            { "name": "Episode 5", "url": "https://youtu.be/C4nVYxlU-rM?si=yR4JS1pSIwrcUKEo" },
            { "name": "Episode 6", "url": "https://youtu.be/hEeMHO6KMps?si=L5PmZUXv38LONJtC" },
            { "name": "Episode 7", "url": "https://youtu.be/YEH3QDStDkw?si=gVHu42xH4f_3nCH_" },
            { "name": "Episode 8", "url": "https://youtu.be/xRIxjmhDjbw?si=oTWCdVXHmq1UTjum" },
            { "name": "Episode 9", "url": "https://youtu.be/gPId-Q5oAos?si=xodd7DcwlHna3EOG" },
            { "name": "Episode 10", "url": "https://youtu.be/rRqAsivsAeI?si=XIkickTs4UgnsvIP" },
            { "name": "Episode 11", "url": "https://youtu.be/WGQY2hToS1U?si=Qc0Ukb3_AZbUUIBV" },
            { "name": "Episode 12", "url": "https://youtu.be/5Lu1QZPbtAw?si=XQNRsAIMj8b1I9C-" },
            { "name": "Episode 13", "url": "https://youtu.be/6GUKwP2W0VU?si=pBK0QkFfFDTfTBt4" },
            { "name": "Episode 14", "url": "https://youtu.be/4spklOKBwLQ?si=ui1fYryoUEmjf1CP" },
            { "name": "Episode 15", "url": "https://youtu.be/8uj2NyQghH4?si=qDp0Nnvbn2ey-UsR" },
            { "name": "Episode 16", "url": "https://youtu.be/HLqLy8qMNqU?si=HiVbbeCIkt_56bdf" },
            { "name": "Episode 17", "url": "https://youtu.be/Oubuu08sVtU?si=E-THuVryytvpvyav" },
            { "name": "Episode 18", "url": "https://youtu.be/TygPnrIAJDk?si=_k4la4LOUxfgt5ew" },
            { "name": "Episode 19", "url": "https://youtu.be/MYJXcY7SSJs?si=uFed6xnMqbtx9FEE" },
            { "name": "Episode 20", "url": "https://youtu.be/2uz9w3guwT8?si=MO2ci-UTAxwoRVMb" },
            { "name": "Episode 21", "url": "https://youtu.be/xGjRhyo73AI?si=QIaXOcrnrvMe7mms" },
            { "name": "Episode 22", "url": "https://youtu.be/MyYIk0yHfZc?si=K4GmckGA0zN5FoFK" },
            { "name": "Episode 23", "url": "https://youtu.be/R7-L6ND7470?si=ex9iba4D5EGCJgos" },
            { "name": "Episode 24", "url": "https://youtu.be/FFuaEwRblMY?si=JQYxEXqlZsQuSJcx" },
            { "name": "Episode 25", "url": "https://youtu.be/ucQB8kBWWdw?si=8kddgAOkj5tufP_P" },
            { "name": "Episode 26", "url": "https://youtu.be/jTmkjvo5yfc?si=X1IwuaL_GJCxV5yP" },
            { "name": "Episode 27", "url": "https://youtu.be/SygZRM3IP90?si=LWLFaXLkf2bqc-MS" },
            { "name": "Episode 28", "url": "https://youtu.be/PNtkY4Mxux8?si=JTYh_N5p4b4Ffosb" },
            { "name": "Episode 29", "url": "https://youtu.be/KMFregFkDcw?si=tYyxwafgCAnjmruM" },
            { "name": "Episode 30", "url": "https://youtu.be/G0-Un7WxQCk?si=zJVt2aCXzCkWvFdo" }
        ],
        "desc": "A romantic reality show where singles navigate modern dating, career aspirations, and relationship challenges in a bustling city.",
        "tags": ["Dating", "City Romance", "Heartwarming"]
    },
    {
        "id": "heart-signal-5",
        "title": "Heart Signal 5",
        "status": "Airing",
        "badge": "K-Reality",
        "rating": "4.9",
        "episodesCount": "15",
        "year": "2026",
        "image": "https://i.mydramalist.com/81lbJW_4m.jpg",
        "heroImage": "https://i.mydramalist.com/mO51Y3_3m.jpg",
        "episodeLinks": [
            { "name": "Episode 10", "url": "https://youtu.be/1aWf75cyJNg?si=OzTS7R8PBFDXDm6J" },
            { "name": "Episode 11", "url": "https://youtu.be/enBN8ONtLbc?si=-VZwiNlVy5ZgNZuz" },
            { "name": "Episode 12", "url": "https://youtu.be/ptXNwoKBemE?si=GEgSZCu7IlHblZuZ" },
            { "name": "Episode 13", "url": "https://youtu.be/pKG86hqTZvo?si=YHDix5gu8DOeCIbt" },
            { "name": "Episode 14", "url": "https://youtu.be/69KwbjGcV1w?si=7VDliHHtaYrqTNSm" },
            { "name": "Episode 15", "url": "https://youtu.be/L5Y0gg75Q8M?si=fobwO-Z6mkLXlYTI" },
            { "name": "Episode 16", "url": "https://youtu.be/6fzkC7zOLMI?si=pbqITFgH9iG4EDkk" }
        ],
        "desc": "Young men and women move into the Signal House. Celebrity panelists observe their everyday interactions to decode their hidden romantic signals.",
        "tags": ["Romance", "Mystery", "Cohabitation"]
    },
    {
        "id": "yes-i-do-6",
        "title": "Yes, I Do 6",
        "status": "Airing",
        "badge": "C-Reality",
        "rating": "4.8",
        "episodesCount": "10",
        "year": "2026",
        "image": "https://i.mydramalist.com/DkeYLo_4c.jpg?v=1",
        "heroImage": "https://i.mydramalist.com/oQwjPv_4m.jpg",
        "episodeLinks": [
            { "name": "Episode 1", "url": "https://youtu.be/o19x4HnPXqk?si=IFGoedyDCkMjr3dL" },
            { "name": "Episode 2", "url": "https://youtu.be/TNI_eZuFL5g?si=ZuVa0hN52JItMuKo" },
            { "name": "Episode 3", "url": "https://youtu.be/f_y6wOI5bYo?si=p3EKjrvlGjBhPShF" },
            { "name": "Episode 4", "url": "https://youtu.be/DGrGJVD-LJ8?si=8xotO0fm18Cdp9ku" },
            { "name": "Episode 5", "url": "https://youtu.be/rHGi1dobtSY?si=znQv2L4IoS0OxbcB" },
            { "name": "Episode 6", "url": "https://youtu.be/mcBydEwChaU?si=MwmbCsgSYQgW2Fn4" },
            { "name": "Episode 7", "url": "https://youtu.be/sR_BZRexSiU?si=Fl5v2mAz-fZznqSM" },
            { "name": "Episode 8", "url": "https://youtu.be/og2jryvi2TQ?si=qrIatzhXOjvkbrtN" },
            { "name": "Episode 9", "url": "https://youtu.be/a5DVv_FuZTE?si=i77kPMrv_HKK4LRk" },
            { "name": "Episode 10", "url": "https://youtu.be/ZiDEtNy1Q04?si=kwVDLph_y8vE1vO2" },
            { "name": "Episode 10", "url": "https://youtu.be/ZiDEtNy1Q04?si=kwVDLph_y8vE1vO2" },
            { "name": "Episode 11", "url": "https://youtu.be/SjAVBsrai7M?si=xMwKv9HPWu_0SxDt" },
            { "name": "Episode 12", "url": "https://youtu.be/oNXu84vgyjg?si=pyr4wGrxPaeT_5oB" },
            { "name": "Episode 13", "url": "https://youtu.be/VBrIRvVaIGQ?si=SYoOGs-Xqd1Mn-IP" },
            { "name": "Episode 14", "url": "https://youtu.be/iv7BJtjASXA?si=sl4EjaPKEhN8B-t5" },
            { "name": "Episode 15", "url": "https://youtu.be/bK4sxtVVdKo?si=e5sEMrEFfO-WYaiX" },
            { "name": "Episode 16", "url": "https://youtu.be/GblZGzmArPU?si=xbQ5xz9FHowMY33L" },
            { "name": "Episode 17", "url": "https://youtu.be/oru9qxQTt04?si=DCJ9aiYjRIIQDwae" },
            { "name": "Episode 18", "url": "https://youtu.be/PncpDDpRPQQ?si=IDA-rU_ahPOgfwH_" },
            { "name": "Episode 19", "url": "https://youtu.be/taW2ag4304k?si=1nsNET2XZf-cNlwA" },
            { "name": "Episode 20", "url": "https://youtu.be/-GkcYc631Vw?si=DQ3E-HzIl1P_oopg" },
            { "name": "Episode 21", "url": "https://youtu.be/gDCGze5PqCU?si=Bq3wyfh9Iiv8_jUn" },
            { "name": "Episode 22", "url": "https://youtu.be/e5kdgnG3thE?si=PILcm_WB0t1i4Pec" },
            { "name": "Episode 23", "url": "https://youtu.be/12-M265i0S0?si=AalRNGir7ut2BDaS" },
            { "name": "Episode 24", "url": "https://youtu.be/9RGiRq2ejkQ?si=HhSiWQ0HcGNne5Gk" },
            { "name": "Episode 25", "url": "https://youtu.be/Z-qfyILMd2E?si=MtQvPJXYxL8_uf8O" },
            { "name": "Episode 26", "url": "https://youtu.be/aNNiCZKuh8M?si=HVIsLi2NWG2Qu9zI" },
            { "name": "Episode 27", "url": "https://youtu.be/lCPpDBO3lzA?si=KWQGgXnTApnI9UVE" },
            { "name": "Episode 28", "url": "https://youtu.be/O0epdqyXIg4?si=qddu8EYkD7QiAZeA" },
            { "name": "Episode 29", "url": "https://youtu.be/GpgpbQvH0Ig?si=QXSCYf8vLbyj6_rA" },
            { "name": "Episode 30", "url": "https://youtu.be/ZO2VQ3psEYg?si=5u7VLDWewslcqBi5" },
            { "name": "Episode 31", "url": "https://youtu.be/zk_F2pBBH0Y?si=7l1RNTIooRei_YoD" }
        ],
        "desc": "A deeply emotional reality program following couples as they prepare for marriage and navigate the complexities of long-term commitment.",
        "tags": ["Marriage", "Reality", "Emotional"]
    },
    {
        "id": "noona-you-are-a-woman-to-me-2",
        "title": "Noona You Are a Woman to Me 2",
        "status": "Airing",
        "badge": "K-Reality",
        "rating": "4.6",
        "episodesCount": "14",
        "year": "2026",
        "image": "https://i.mydramalist.com/81XKzN_4c.jpg?v=1",
        "heroImage": "https://i.mydramalist.com/Kp6Wg8_4s.jpg",
        "episodeLinks": [
            { "name": "Episode 1", "url": "https://youtu.be/eZM4-LE3ccQ?si=8CvIhGv_yhoiJ3bg" },
            { "name": "Episode 2", "url": "https://youtu.be/u1Bey_2Hlvg?si=F1jtxEeh0EyVVuEL" },
            { "name": "Episode 3", "url": "https://youtu.be/KT6imtGl448?si=OHDAU6wf93IAbFFX" },
            { "name": "Episode 4", "url": "https://youtu.be/9dzP50UH-VE?si=3kg0edVhCBO8jGHV" },
            { "name": "Episode 5", "url": "https://youtu.be/V4WFYLuKrQs?si=KCBkVsLwoQmNUvi-" },
            { "name": "Episode 6", "url": "https://youtu.be/0uteHQQPDYs?si=C_m3K8NlGEVdU5--" },
            { "name": "Episode 7", "url": "https://youtu.be/4hBhA5wQSaA?si=sG3_tW_WDA7LCTCp" },
            { "name": "Episode 8", "url": "https://youtu.be/sQScp95xriI?si=ljPTjD7anDoEmxUP" },
            { "name": "Episode 9", "url": "https://youtu.be/mJv425lLjKI?si=o_vedjLddIEbnXxh" },
            { "name": "Episode 10", "url": "https://youtu.be/hE7ysflvTj8?si=Iccx4t1E-ry3RU_m" }
        ],
        "desc": "A provocative and honest love story about a man and woman with a younger partner who overcome the barrier of age difference and are bold and honest in their love.",
        "tags": ["Noona Romance", "Sweet", "Dating"]
    },
    {
        "id": "the-love-lab",
        "title": "The Love Lab",
        "status": "Airing",
        "badge": "K-Reality",
        "rating": "4.8",
        "episodesCount": "12",
        "year": "2026",
        "image": "https://i.mydramalist.com/placeholder_poster.jpg",
        "heroImage": "https://i.mydramalist.com/placeholder_banner.jpg",
        "episodeLinks": [
            { "name": "Episode 1", "url": "https://youtu.be/7_ky9qWYHk8?si=EZSFExYJL0hB5qL-" },
            { "name": "Episode 2", "url": "https://youtu.be/c_6sBKqxg9Y?si=UHWMfBuH46FXpcgF" },
            { "name": "Episode 3", "url": "https://youtu.be/i5_jnh-pelU?si=UWVpKPMGjBAfW92L" },
            { "name": "Episode 4", "url": "https://youtu.be/SKGDMBrLh_s?si=k47iMTFTa3Azbttv" },
            { "name": "Episode 5", "url": "https://youtu.be/IRjfYYQfmWA?si=ChtXaZ4f4oy86y_Q" },
            { "name": "Episode 6", "url": "https://youtu.be/Bor2JWi3ZQM?si=55yuuqrVR1acNTUP" },
            { "name": "Episode 7", "url": "https://youtu.be/n3BlzIbf5y0?si=KBxM0gamm6PIdEbY" },
            { "name": "Episode 8", "url": "https://youtu.be/wKGad2NuJbA?si=5jSsXW_N0ux5qOlG" },
            { "name": "Episode 9", "url": "https://youtu.be/K_xPHQUFFKM?si=iqnoFYsYUzVqM1NW" },
            { "name": "Episode 10", "url": "https://youtu.be/nFIFCAwmBRY?si=6lblBi6i_7_yeLX2" },
            { "name": "Episode 11", "url": "https://youtu.be/2x2W87y5c_I?si=_4xk84Xfb_-WfsPA" },
            { "name": "Episode 12", "url": "https://youtu.be/1c_qEUvhd6k?si=H-wiazAkukyXeoR4" }
        ],
        "desc": "A social experiment dating show that throws singles into wild, unpredictable scenarios to capture the exact moment their dormant romantic instincts spark to life.",
        "tags": ["Social Experiment", "Dating", "Reality"]
    },
    {
        "id": "stand-bi-me",
        "title": "Stand Bi Me",
        "status": "Airing",
        "badge": "K-Reality",
        "rating": "4.5",
        "episodesCount": "10",
        "year": "2026",
        "image": "https://i.mydramalist.com/placeholder_poster.jpg",
        "heroImage": "https://i.mydramalist.com/placeholder_banner.jpg",
        "episodeLinks": [
            { "name": "Episode 1", "url": "https://youtu.be/KVp-gsYpxio?si=jfmwPTQ9FKw-PfjA" },
            { "name": "Episode 2", "url": "https://youtu.be/2YngUJ44U_A?si=6EE0854XRPYozhdu" },
            { "name": "Episode 3", "url": "https://youtu.be/dMNgxK7mKx8?si=nvdu_G9eVsvod1ry" },
            { "name": "Episode 4", "url": "https://youtu.be/mD2iB1wPAzg?si=VK6gzDOwL5PwfyLn" },
            { "name": "Episode 5", "url": "https://youtu.be/UvedxF8iOuo?si=wHukE9mLnvR0wnDh" },
            { "name": "Episode 6", "url": "https://youtu.be/q2lQUs1RRSI?si=KkNHTh_AeqdJohpo" },
            { "name": "Episode 7", "url": "https://youtu.be/WFdjcXwJCuI?si=DzBm1Obzs7-OH-s1" },
            { "name": "Episode 8", "url": "https://youtu.be/zuxh8mj6g0k?si=waSe3bvwdxg2WBlt" },
            { "name": "Episode 9", "url": "https://youtu.be/kX49soc1wzM?si=pdnW9pq2NlrOZ4hb" },
            { "name": "Episode 10", "url": "https://youtu.be/eownSxi8VI0?si=vcXZByXRmU2GZGZU" }
        ],
        "desc": "A dating reality show where participants gather to explore all the possibilities of love and relationships in a shared house.",
        "tags": ["Dating", "Reality", "Romance"]
    },
    {
        "id": "match-to-marry-with-parents-2",
        "title": "Match to Marry: With Parents 2",
        "status": "Airing",
        "badge": "K-Reality",
        "rating": "4.6",
        "episodesCount": "8",
        "year": "2026",
        "image": "https://i.mydramalist.com/placeholder_poster.jpg",
        "heroImage": "https://i.mydramalist.com/placeholder_banner.jpg",
        "episodeLinks": [
            { "name": "Episode 1", "url": "https://youtu.be/60XgFyPQWAo?si=e5JrhkE7qsknNoUh" },
            { "name": "Episode 2", "url": "https://youtu.be/AD3Wr-8SBjk?si=-TZIiWrO6QJQ81Tu" },
            { "name": "Episode 3", "url": "https://youtu.be/RAnRf0Nt-Zc?si=tG08pRkb4eahBq0P" },
            { "name": "Episode 4", "url": "https://youtu.be/XRHYXtWwW1A?si=Gfq0Gq4v8iM8Dc_t" },
            { "name": "Episode 5", "url": "https://youtu.be/8DfNenb5XTA?si=o_EfxBtsI_Zv6r8v" },
            { "name": "Episode 6", "url": "https://youtu.be/xMHvpiD5wic?si=ACy_ee76Mbb5qx2i" },
            { "name": "Episode 7", "url": "https://youtu.be/qI6Iydls6NU?si=4B1JrqskNkaZplAc" },
            { "name": "Episode 8", "url": "https://youtu.be/Hkb46K00Tc4?si=eWXu8ad9JiOxApT5" }
        ],
        "desc": "A unique matchmaking reality program where singles seek their future spouses while living together under the watchful eyes of their parents.",
        "tags": ["Marriage", "Reality", "Family"]
    },
];

let upcomingShows = [
    {
        "id": "heart-signal-9",
        "title": "Heart Signal 9",
        "image": "https://i.mydramalist.com/KpOmbJ_4c.jpg?v=1"
    }
];

let watchlist = JSON.parse(localStorage.getItem('lovesignal_watchlist')) || [];
let currentDetailShow = null; 
let tempSelectedAvatar = null; 

// ==========================================
// 2. ROUTING LOGIC
// ==========================================
function switchTab(viewId, navIndex) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        const svg = item.querySelector('svg');
        if(svg && svg.hasAttribute('stroke')) svg.setAttribute('stroke', 'currentColor');
    });
    
    if(navIndex >= 0 && navItems[navIndex]) {
        const activeNav = navItems[navIndex];
        activeNav.classList.add('active');
        const activeSvg = activeNav.querySelector('svg');
        if(activeSvg && activeSvg.hasAttribute('stroke')) activeSvg.setAttribute('stroke', '#E8618C');
    }
    window.scrollTo(0, 0); 
}

function switchShowTab(clickedTab, tabName) {
    const tabs = document.querySelectorAll('#showsTopTabs .tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    clickedTab.classList.add('active');

    let showsToDisplay = [];

    if (tabName === 'Recent') {
        showsToDisplay = [...allShows].reverse();
    } else if (tabName === 'Completed') {
        showsToDisplay = allShows.filter(show => show.status === "Completed");
    } else if (tabName === 'New Release') {
        showsToDisplay = allShows.filter(show => show.status === "Airing");
    } else if (tabName === 'Upcoming Shows') {
        showsToDisplay = upcomingShows.map(show => ({
            ...show,
            badge: "Coming Soon",
            episodesCount: "TBA",
            year: "Future",
            rating: "-",
            desc: "Get ready for this exciting new show! Set a reminder so you don't miss the premiere.",
            tags: ["Anticipated", "Upcoming"]
        }));
    }

    renderFilteredShows(showsToDisplay);
}

// ==========================================
// 3. INITIAL LOAD & RENDER
// ==========================================
function loadShows() {
    // A. Hero Carousel
    const heroCard = document.querySelector('.hero-card');
    const heroTitle = document.querySelector('.hero-card .serif-title');
    const watchBtn = document.getElementById('homeHeroWatchBtn');
    const dots = document.querySelectorAll('.carousel-dots .dot');

    if (heroCard && allShows.length > 0) {
        let currentSlide = 0;
        const carouselShows = allShows.slice(0, 3); 

        function updateCarousel(index) {
            const show = carouselShows[index];
            heroCard.style.backgroundImage = `linear-gradient(to top, rgba(31, 21, 37, 0.8), transparent), url('${show.heroImage}')`;
            heroCard.style.backgroundSize = 'cover';
            heroCard.style.backgroundPosition = 'center';
            heroCard.style.transition = 'background-image 0.5s ease-in-out'; 
            
            if(heroTitle) heroTitle.innerText = show.title;
            if(watchBtn) {
                watchBtn.onclick = (e) => {
                    e.stopPropagation(); 
                    let searchQuery = encodeURIComponent(`${show.title} trailer`).replace(/'/g, "%27");
                    window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
                };
            }

            dots.forEach(dot => dot.classList.remove('active'));
            if(dots[index]) dots[index].classList.add('active');
        }

        updateCarousel(0);
        setInterval(() => {
            currentSlide = (currentSlide + 1) % carouselShows.length;
            updateCarousel(currentSlide);
        }, 4000);

        dots.forEach((dot, index) => {
            dot.onclick = (e) => {
                e.stopPropagation();
                currentSlide = index;
                updateCarousel(currentSlide);
            };
        });
    }

    // B. Load Trending Shows
    const trendingGrid = document.getElementById('homeTrendingGrid');
    if (trendingGrid) {
        trendingGrid.innerHTML = '';
        allShows.forEach((show, index) => {
            const colors = ['card-pink', 'card-purple', 'card-light-purple'];
            
            const wrapper = document.createElement('div');
            wrapper.className = 'scroll-item-wrapper';
            wrapper.onclick = () => openDetailView(show);

            const card = document.createElement('div');
            card.className = `show-card tall-card ${colors[index % colors.length]}`;
            card.style.backgroundImage = `url('${show.image}')`;
            
            const title = document.createElement('span');
            title.className = 'card-title-under';
            title.innerText = show.title;

            wrapper.appendChild(card);
            wrapper.appendChild(title);
            trendingGrid.appendChild(wrapper);
        });
    }

    // C. Load Recent Updates 
    const recentList = document.getElementById('homeRecentUpdatesList');
    if (recentList) {
        recentList.innerHTML = '';
        recentList.className = 'horizontal-scroll'; 
        const recentShows = [...allShows].reverse();
        
        recentShows.forEach((show, index) => {
            const colors = ['card-light-pink', 'card-purple', 'card-pink', 'card-light-purple'];
            
            const wrapper = document.createElement('div');
            wrapper.className = 'scroll-item-wrapper';
            wrapper.onclick = () => openDetailView(show);

            const card = document.createElement('div');
            card.className = `show-card tall-card ${colors[index % colors.length]}`;
            card.style.backgroundImage = `url('${show.image}')`;
            
            const title = document.createElement('span');
            title.className = 'card-title-under';
            title.innerText = show.title;

            wrapper.appendChild(card);
            wrapper.appendChild(title);
            recentList.appendChild(wrapper);
        });
    }

    // D. Populate Shows Tab
    const listContainer = document.getElementById('showsListContainer');
    if (listContainer) {
        listContainer.innerHTML = '';
        allShows.forEach(show => {
            const card = document.createElement('div');
            card.className = 'list-card';
            card.onclick = () => openDetailView(show);
            card.innerHTML = `
                <div class="list-thumb" style="background-image: url('${show.image}'); background-size: cover; background-position: center;"></div>
                <div class="list-info">
                    <span class="mini-tag">${show.badge}</span>
                    <h4 style="margin-top: 5px;">${show.title}</h4>
                    <p style="color: var(--text-light); font-size: 0.8rem; margin-top: 4px;">${show.tags.join(' • ')}</p>
                </div>
            `;
            listContainer.appendChild(card);
        });
    }

    // E. Load Upcoming Shows
    const upcomingContainer = document.getElementById('upcomingShowsList');
    if (upcomingContainer) {
        upcomingContainer.innerHTML = '';
        upcomingShows.forEach((show, index) => {
            const colors = ['card-pink', 'card-purple', 'card-light-pink'];
            upcomingContainer.innerHTML += `
                <div class="scroll-item-wrapper">
                    <div class="show-card tall-card ${colors[index % colors.length]}" style="background-image: url('${show.image}');"></div>
                    <span class="card-title-under">${show.title}</span>
                    <button class="pill-btn outline-btn remind-btn" style="padding: 8px; font-size: 0.85rem; justify-content: center; margin-top: 5px;">Remind me</button>
                </div>
            `;
        });
    }
}

function renderFilteredShows(showsToRender) {
    const showsContainer = document.getElementById('showsListContainer');
    if (!showsContainer) return;
    showsContainer.innerHTML = ''; 
    
    if (showsToRender.length === 0) {
        showsContainer.innerHTML = `<p style="text-align: center; color: var(--text-light); margin-top: 20px;">No shows found.</p>`;
        return;
    }

    showsToRender.forEach((show, index) => {
        const colors = ['card-purple', 'card-pink', 'card-purple'];
        const bgClass = colors[index % colors.length];
        const card = document.createElement('div');
        card.className = 'list-card';
        card.style.cursor = 'pointer';
        card.onclick = () => openDetailView(show);

        const tagsHTML = show.tags.map(tag => `<span class="outline-tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="list-thumb ${bgClass}" style="background-image: url('${show.image}'); border: none;"></div>
            <div class="list-content">
                <div>
                    <span class="mini-tag">${show.badge}</span>
                    <h3 style="margin-top: 5px;">${show.title}</h3>
                    <div class="meta-row" style="margin-top: 5px;">
                        <span>📺 ${show.episodesCount} Episodes</span> |
                        <span>📅 ${show.year}</span> |
                        <span>⭐ ${show.rating}</span>
                    </div>
                    <p class="list-desc">${show.desc}</p>
                </div>
                <div class="tags-row">${tagsHTML}</div>
            </div>
        `;
        showsContainer.appendChild(card);
    });
}

// ==========================================
// 4. DETAIL VIEW LOGIC
// ==========================================
function openDetailView(show) {
    currentDetailShow = show; 
    
    document.getElementById('detailHeroBg').style.backgroundImage = `url('${show.heroImage}')`;
    document.getElementById('detailHeroTitle').innerText = show.title;
    document.getElementById('detailPoster').style.backgroundImage = `url('${show.image}')`;
    document.getElementById('detailBadge').innerText = show.badge;
    document.getElementById('detailTags').innerHTML = show.tags.map(tag => `<span class="outline-tag">${tag}</span>`).join('');
    
    const descEl = document.getElementById('detailDescription');
    if(descEl) descEl.innerText = show.desc;

    const detailWatchBtn = document.querySelector('#detailHeroBg .watch-btn');
    if(detailWatchBtn) {
        detailWatchBtn.onclick = () => {
            let searchQuery = encodeURIComponent(`${show.title} trailer`).replace(/'/g, "%27");
            window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank');
        };
    }

    const watchBtn = document.getElementById('detailWatchlistBtn');
    if(watchBtn) {
        watchBtn.onclick = () => toggleWatchlist(show.id);
        updateWatchlistButton(show.id);
    }

    const epContainer = document.getElementById("episode-links-container");
    if (epContainer) {
        epContainer.innerHTML = ""; 
        if (show.episodeLinks && show.episodeLinks.length > 0) {
            show.episodeLinks.forEach(link => {
                const btn = document.createElement("a");
                btn.href = link.url;
                btn.textContent = link.name;
                btn.className = "episode-btn";
                btn.target = "_blank"; 
                epContainer.appendChild(btn);
            });
        }
    }

    const relatedScroll = document.querySelector('#detailView .horizontal-scroll');
    if (relatedScroll) {
        relatedScroll.innerHTML = ''; 
        const relatedShows = allShows.filter(s => s.id !== show.id).slice(0, 3);
        
        relatedShows.forEach((relatedShow, index) => {
            const bgColors = ['card-purple', 'card-pink', 'card-light-purple'];
            relatedScroll.innerHTML += `
                <div class="scroll-item-wrapper square" onclick="openDetailView(allShows.find(s => s.id === '${relatedShow.id}'))">
                    <div class="show-card square-card ${bgColors[index % bgColors.length]} related-card" 
                         style="background-image: url('${relatedShow.image}'); background-size: cover; cursor:pointer;">
                        <svg class="play-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#E8618C"/><path d="M10 8L16 12L10 16V8Z" fill="white"/></svg>
                    </div>
                    <span class="card-title-under">${relatedShow.title}</span>
                </div>
            `;
        });
    }

    switchTab('detailView', 1); 
}

// ==========================================
// 5. WATCHLIST LOGIC
// ==========================================
function toggleWatchlist(showId) {
    const index = watchlist.indexOf(showId);
    if (index === -1) {
        watchlist.push(showId);
        showToast("❤️ Added to My List!");
    } else {
        watchlist.splice(index, 1);
        showToast("💔 Removed from My List");
    }
    localStorage.setItem('lovesignal_watchlist', JSON.stringify(watchlist));
    updateWatchlistButton(showId);
    renderMyList();
}

function updateWatchlistButton(showId) {
    const btn = document.getElementById('detailWatchlistBtn');
    if (!btn) return;

    if (watchlist.includes(showId)) {
        btn.innerHTML = '❤️ Saved to My List';
        btn.style.background = 'var(--primary-pink)';
        btn.style.color = 'white';
    } else {
        btn.innerHTML = '🤍 Add to My List';
        btn.style.background = 'var(--white)';
        btn.style.color = 'var(--text-dark)';
    }
}

function renderMyList() {
    const container = document.getElementById('myListContainer');
    if (!container) return;
    
    let html = `
        <div class="empty-list-card" id="emptyListMsg" style="height: 200px; padding: 20px;">
            <div class="add-box" style="height: 100%; width: 100%; cursor:pointer;" onclick="switchTab('showsView', 1)">
                <div class="add-icon">+</div>
                <span>Find Shows</span>
            </div>
        </div>
    `;

    watchlist.forEach(savedId => {
        const show = allShows.find(s => s.id === savedId);
        if (show) {
            html += `
                <div class="show-card square-card" style="background-image: url('${show.image}'); height: 200px; width: 100%; cursor: pointer;" onclick="openDetailView(allShows.find(s => s.id === '${show.id}'))"></div>
            `;
        }
    });
    container.innerHTML = html;
}

// ==========================================
// 6. CATEGORIES & SEARCH
// ==========================================
function selectCategory(categoryName) {
    showToast(`🔍 Searching for ${categoryName}...`);
    switchTab('showsView', 1);
    const filteredShows = allShows.filter(show => show.badge === categoryName);
    renderFilteredShows(filteredShows);
}

const searchInput = document.getElementById('searchInput');
if(searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 0 && !document.getElementById('showsView').classList.contains('active')) {
            switchTab('showsView', 1);
        }
        const filteredShows = allShows.filter(show => {
            return show.title.toLowerCase().includes(searchTerm) || show.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        });
        renderFilteredShows(filteredShows);
    });
}

// ==========================================
// 7. PROFILE MODALS
// ==========================================
function showToast(message) {
    let toast = document.getElementById('appToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'appToast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 2500); 
}

function openProfileModal(type) {
    const modal = document.getElementById('appModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    if(!modal || !title || !body) return;

    title.innerText = type;

    if (type === 'Feedback') {
        body.innerHTML = `
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.9rem;">We'd love to hear your thoughts!</p>
            <textarea class="modal-textarea" placeholder="Type your feedback here..."></textarea>
            <button class="pill-btn watch-btn full-width" onclick="submitModalForm('Feedback sent successfully!')" style="justify-content: center; padding: 12px;">Submit Feedback</button>
        `;
    } else if (type === 'Request a show') {
        body.innerHTML = `
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.9rem;">Missing a show? Let us know!</p>
            <input type="text" class="modal-input" placeholder="Show Title">
            <input type="text" class="modal-input" placeholder="Country">
            <button class="pill-btn watch-btn full-width" onclick="submitModalForm('Show request submitted!')" style="justify-content: center; padding: 12px;">Submit Request</button>
        `;
    } else if (type === 'Edit Profile') {
        const currentNameElement = document.getElementById('profileName');
        const currentName = currentNameElement ? currentNameElement.innerText : '';
        body.innerHTML = `
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.9rem; text-align: center;">Choose your avatar</p>
            <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 20px;">
                <div class="avatar-circle avatar-choice" style="width: 50px; height: 50px; background: #F4A5C1; box-shadow: none; font-size: 1.5rem; cursor: pointer; border: 2px solid transparent;" onclick="selectAvatar(this, '👩🏻')">👩🏻</div>
                <div class="avatar-circle avatar-choice" style="width: 50px; height: 50px; background: #E7D5F3; box-shadow: none; font-size: 1.5rem; cursor: pointer; border: 2px solid transparent;" onclick="selectAvatar(this, '👱🏻‍♂️')">👱🏻‍♂️</div>
                <div class="avatar-circle avatar-choice" style="width: 50px; height: 50px; background: #FDE8F3; box-shadow: none; font-size: 1.5rem; cursor: pointer; border: 2px solid transparent;" onclick="selectAvatar(this, '🐻')">🐻</div>
            </div>
            <input type="text" id="editNameInput" class="modal-input" placeholder="Display Name" value="${currentName}">
            <textarea class="modal-textarea" style="height: 80px;" placeholder="Write a short bio..."></textarea>
            <button class="pill-btn watch-btn full-width" onclick="saveProfile()" style="justify-content: center; padding: 12px;">Save Changes</button>
        `;
    } else if (type.includes('Support')) {
        body.innerHTML = `
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.9rem; text-align: center;"> Support the LoveSignal for more updates </p>
            <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 20px;">
                <button class="pill-btn watch-btn" onclick="window.open('https://ko-fi.com/lovesignal', '_blank')">💖 Custom</button>
            </div>
        `;
    } else if (type === 'FAQ') {
        body.innerHTML = `
            <h4 style="margin-bottom: 5px; font-size: 0.95rem;">How do I watch shows?</h4>
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.85rem;">LoveSignal is a discovery app. We link out to official YouTube trailers and clips.</p>
            <h4 style="margin-bottom: 5px; font-size: 0.95rem;">Is this app free?</h4>
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.85rem;">Yes! Tracking your watchlist and discovering new shows is 100% free.</p>
            <h4 style="margin-bottom: 5px; font-size: 0.95rem;">Where is my data saved?</h4>
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.85rem;">Your Watchlist is securely saved locally on your own device.</p>
        `;
    } else if (type === 'Terms of use') {
        body.innerHTML = `
            <p style="margin-bottom: 10px; font-size: 0.85rem; font-weight: bold;">1. Acceptance of Terms</p>
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.8rem;">By accessing LoveSignal, you agree to be bound by these Terms of Use. If you do not agree, please do not use the app.</p>
            <p style="margin-bottom: 10px; font-size: 0.85rem; font-weight: bold;">2. User Conduct</p>
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.8rem;">You agree to use the app for lawful purposes and respect the community guidelines.</p>
            <button class="pill-btn outline-btn full-width" onclick="closeModal()">I Agree</button>
        `;
    } else if (type === 'Privacy Policy') {
        body.innerHTML = `
            <p style="margin-bottom: 10px; font-size: 0.85rem; font-weight: bold;">Your Privacy Matters</p>
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.8rem;">LoveSignal does not collect or sell personal data. Your Profile details and Watchlist are stored <b>locally on your device</b>.</p>
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.8rem;">We do not use third-party tracking cookies.</p>
            <button class="pill-btn outline-btn full-width" onclick="closeModal()">Close</button>
        `;
    } else if (type === 'DMCA') {
        body.innerHTML = `
            <p style="margin-bottom: 10px; font-size: 0.85rem; font-weight: bold;">Copyright Disclaimer</p>
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.8rem;">LoveSignal is solely an indexing and discovery service. <b>We do not host, upload, or stream any video content</b> on our servers.</p>
            <p style="margin-bottom: 15px; color: var(--text-light); font-size: 0.8rem;">All images and external links are the property of their respective owners.</p>
            <button class="pill-btn outline-btn full-width" onclick="closeModal()">Acknowledge</button>
        `;
    } else {
        body.innerHTML = `<p style="color: var(--text-light); font-size: 0.9rem;">Coming soon...</p>`;
    }
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('appModal');
    if(modal) modal.classList.remove('active');
}

function submitModalForm(toastMessage) {
    closeModal();
    showToast('✅ ' + toastMessage);
}

function selectAvatar(element, emoji) {
    document.querySelectorAll('.avatar-choice').forEach(av => av.style.borderColor = 'transparent');
    element.style.borderColor = 'var(--primary-pink)';
    tempSelectedAvatar = emoji;
}

function saveProfile() {
    const newName = document.getElementById('editNameInput').value;
    document.getElementById('profileName').innerText = newName;
    
    if (tempSelectedAvatar !== null) {
        const avatarContainer = document.getElementById('profileAvatar');
        avatarContainer.innerHTML = tempSelectedAvatar; 
        avatarContainer.style.fontSize = '2.5rem'; 
    }
    closeModal();
    showToast('✅ Profile updated successfully!');
}

document.addEventListener('click', (e) => {
    if (e.target.closest('.remind-btn')) showToast("⏰ Added to your reminders!");
});
// ==========================================
// 8. STARTUP ENGINE
// ==========================================
window.onload = () => {
    loadShows();
    renderMyList();
};
