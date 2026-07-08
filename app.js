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
        "image": "https://i.mydramalist.com/YY28VQ_4c.jpg?v=1",
        "heroImage": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhMWFRUXGBcVFxcXGBgXFhcXFxgXGBcYFRUYHSggGBolHRcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICUwLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJgBTAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAgEDBAUGB//EAD8QAAEDAgQCCAUBBwIGAwAAAAEAAhEDIQQSMUFRYQUTInGBkaHwBjKxwdFSI0JicoLh8QcUFTOSorLSQ1Nj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJhEBAQACAgIBAwQDAAAAAAAAAAECEQMhEjFBBFFhEyIy0XGhsf/aAAwDAQACEQMRAD8A65CELL6IlSoQgCEtQ2KlQ4IRIRKEIBCiUIBSolEoBCEIBSoQglQhQgrq0pk7woazM0K1KGXlGtkwz9o0WH0p0yyiQ2Mzztw/m/Czq9YMa57tGguPcBJXmlCu/EVi43klxPqufJnpZPKt9h/i+oa/VuYzJcAjMDPeSQupwWNZVbLTpYjcHmudZ0FRMuk5hDvUCFi4Cs7D4lsz1dQ5eV4ie4kHzWJyXa/p6jtEKFK7uYCEKEGk+JPiWnhBEdZUIkMBiBsXHadhqYXHYj/UHEknK2kwfyud4E5vstL8W4lzcdiJu7PA37OUZf8AtyqkUA6HgRIsI3lXTy5cmVvTt/h747FV7aeIYGZoAe2cuY6BwM5RpefJdjXGkBeHVsQ0ENj2ffqvZ+hKzn4ag985nUqbjOsuYDJ5pY6cPJb7ZEZRJ1VdMm0T9oV7mAmUwUejySolCEZSoQhAIQhAICJSEk6ILpQoQglAUIQSiVCEC1XQCQlGYi5APd/dRUd2gItrPO6sRr1FdGdCbjfiFYqsQDYjWbeKtCJfuEIQiBChSgFKhCASvMCVFQx+Uje1rpsNu9Fk+TNfOmnFOlaIVraLjoD5Ilab4teRg6xHBo8HPaD6GPFaL4a6Gd/tgWQan7wB9JveNVs/jzFCnh3UiDmqREaANcHGT/TFuK0Hwf0wWVH0i64IIk2sA1wHcR6rlnN1vDLTpsF0biDTcXWIAAaSCddjAC1XT2EqMwVR1VuQ5qWXtZjIeBMwNjC3dfpiKgANWDGYNpZm6/8A2RZcx/qF06HZKAM3D3DgBYA95M+Cz4xcsrJ27XCVc7GP/U1rvMA/dXLB+HnipQphnaIY0EDWWgA238FnELtLuOd9hCy8L0dUqCQIHE28lnM6FaPnfPJoj1K1pi5yPO8R8JsrYytVqQ4vY3IHC0/LtGgDQrWfBchznAAtaA1oJiJAtMxYro+nntp1KbWiLE5pvqLLU9LdKkOGU1xYTka0td5nX0XG7274YzKbkc3jfgT9k8uADy4ZYJvLovygrt8K0hjQ7UNAPgEmHxbX1WZpE2HEGN/RZ9fCOaJIkcRcf2WsO2LJLqMZ1QATslzRznzSuo2t4cuKGvA1idFtdT4WtUpM86CfT6pkZSoQkbUnYjvQOhCEAly9/mmUSgdCFCCUKFKAUOMKVW65jxP2HvghCdoi7ROov5Kab3ETl9Vaqqjw0zsfrxRre+tAkzJB+t0zKgOiYKtpAeRxE+KHtahCEZCiVKghBW1oIl3+FYDKoNM2bNla2B2UaqXtlSApVmHpZ3BvH6boyyMBQHzu02/JWzqVBB4WJWNi3Bo5C3gFS2tOvD0Ulc8nFf6kYxuajTtObOTwaCJ8Ik+C876JB60Ova8+JB+q7L47w+Wo+s646osY3TtucGW7mOquj+FaX4TflqfKDMtgiQQ4cFixqe5+G8OMhs7jeFw3SdN4rPL5zEhxnWHNBb6QvUcH0DcvNwDLWm4A17X6uC4f4haTiK7njtucLbDshMZV5L5enV/6XYgF7gXXOUgc2zJHhA816bisIxzml2v/AJDaV5L/AKY4c/7jNFgHHzEfclersdob8O4DRbwmnPP3tlGtCRzpWO8xPL+6M9xzHqurm0vxbQljXj92x7jb6x5rkf8Ac6AhpjQkXHcvQMS0EEG4IiFydboYZ7Hs8IuPFcs8e9u/Hn1qo6BoGpVDjo288z7PkF2eFdHctR0dRDIDRA+q2TXWWscdRzzy3S9JYJuXOwQRqBoe7gtG9hJ/Oi6NrrRxn8fdaXEUSxxadkrfHkqvOgjvUlCFGyVHxskqPkCNZTOqCSCoot1Md3cjU6WIQhGQoUqEDlClCohClSoFSVBuNR6hWFCLFfWDafIpGEkkkRGk/VXIQ2qdRvIkDgN/wnawcAmQqbqEIQiBCEIIc0HVVUiATOquSVKc96jUvwZhm6ZpIMjVJTqAwN04QsXV+kWuMHT5XDgdLLX4nGwQAbwGjTXmVg/8PzyeseHX4W9FrWdG1KdXM8lw2dtG/iuWF8nTPhmN6N8a0S6nchxlpkGeP2B81znw9Sy1R4EcZbcfSPFdd05iQ+nESLCeZ47TAPmVz3RWGeawNNpc6RAHAG5PALpIzMNTdeqVGw1vA+kceS8n+LMOf91UJ3II7oC9CxPT9NoALmyLENl8Hgcth4lcx0xWoYh0ucWniBTPp10+i1p5sM5Kzvgmi2kwO7MR2iXAGd4C62njqZMAknuP1K8+wGGaxwGfrGcACHgcerPaI/lBC6fo0U84cwggtMEGRqFPVdbMMpbK2HxDi3dTUNMlr4aARE3e1s33uVqMP088CnSeA98jNUDgAMz3NpmAIJIF9I9FnYl7ajuqfZpFyDBBBBBnaCFpcfhKNCoMtUNb2TkIc6o7IXEFoALol15bHNdHHUntsuj/AIlZWb+0HV/sxULi6Wgl5aG6TJifFNSxoc6XVKeVwmmQ4CYs6QTfnwhcm6pTbGV7rdXeKLf+XMWfWBuTOiTElpYRYjJkBdAgmr1jnZ5NOTcRmCdG8XoVJwkaaTCWvjqbSWl7QWtzuEiQ0bxrC5ToMtfiXVL5gariC2CGvhrA5xNxAsAIsVjYrCVXGq4035orycvzGoWsaG/qAYJTR4u6wOOY9gqsMtcAWyCCY5GDqsfpJkP/AKRPfun6HwYZTpsEdlonwFh5q3pOmS0PPGB3R+VKuH8mtKSoTFk6oqP25xKy9EgzZotpf/CtQBCEZqFKlQiBQpUILFKur4dzTDgBPd3JMp5a8uCNzVVoVkX/AHfROyi4mBBN7W4Js0olCvfSIJBgRFrKC3u9ERSoWRk7tuCbIOXogxSgLK6vu9Fa/DFvzADhoqm4wELN6ocB6KOqEbeiG4wlKzDTHL0TdUJgAbDZDcYMIhZ9ShBgtAMclIpDg30UNxrG04KsWw6ocB6JqeGnRoPgELnPlosVQiXtcGkXMmGnmeHekq9I02hgeQM411ANotw1W7qYRjgWva1w4EAix4JD0ZRcADSpkDQFrSPDzU8Zvbc5utVznSuEOIDSXf7enTDyZb2A0XNTMIBNrnujgsPAtfiD1GFY5lHS9n1P4qx565NANeCyPiCHVGYWi1rGEtqVA0AAnWmCByHWHiXU+C7ToyizB0QGgdY7xje59yVpwtufx18T7tdh/g+hRaDWOZ0aW8hI+gC1+PwjLhjbLa1arn3Jkkn6BNTw3vw7kevjxuHeTksX0PMwIvNrb69/PVY1B1Sk+TMmxeAJIt84JEmw7Ug2vmXePww99/ctP8QOp4eg+vUa4tbGYNEu7Tg0QDA3EydFE5ceLObvV+7nsR0nUectEZDo6q4tkDgwNLgzvMu4BUU+jmblzyTJmwJjUzJcb6krL6EFLE0zUoAtph7mAFobpF2gSIMj1Gy6HC9GRE6325Dkntvh4eLGedvlXNM6OJ0ECySp0O75gIPEWOnELuGYUfT3opGHHvuTTvebGzWnmr6VSi4OEiDYtgETwmzTy+R24E5h0nRnSZr5aelQ7gHJA/eANxuMuoMg6StvjejA4HnPHx2XKNpvw1YEbdoc4Haae9us8GnVWXT5/PxTD9+Hr5jvsLTfGUeZgkjuCXH0i1swTtJdp/SLBV0K+Zoc06idtCAR9VZUqE2JkcLK7cpjq7ayFGVbA4Xs5stuKrNIcvRR2mUYaIWZ1I5eiBRHLfgmzcYaFmdSOXoo6kcteSdG4w0LMp0JIEA/5RWwxaYIAtyUTc3omJcSQXEmWtN+YCrJHr9lfVcIaZmBlA4wdTvuqzl/UdftvdRvG9CoAHEcO5NRPbbEgyL2T4gtzam4BB4bC3OFFNwBBzG1+VkZ3uEe/tGTJn7qWtkO5Cfp+U9aA4id5nv2101TYYC4zG4y35/4Q31tSXJ9hzE+pCjMDuRG/Hwmyv7OUGZi3CZkomVVSJWRiHmRJJsPUKgR+o+/FZFUixJmxb5b+qrN9xVrOthPqAllX0gDIzG4P1VUjjHv6okqXtiO4HzCCe/ZW1D8pmbR5aykt+o7eyhKnFuOYzJ/wikJIF01ZwmTuPLZFAgOBlE3+1WI4K3DEyYJFj9ClMC06bqygQDrMwBwuiZXpVKl7exaxJyzwLsoHqVII0Bj7pMc+KRgzD2HxLgAiZ3Ucv8ADoFTEvrEWLpHIageANMf0Lo69Qvf6DXgua+GqjZLQbgiRytH09F0+FZ593JI9fFjMcJfwuo0rcx3zBGseB8lkZfd+C1eDk4qvcx1dFsRu3rHHb/9B5LNq4xrXhkE3aCQBlaXWYHHi46RO0xImsXPbJcL/wCeKxMZUbLKTmhwqlzCCJEBj3OkHUHLEc1mu19/qWj6dxHV1sK6J7Zb/wBZZTnv7ZRi3UZ+FwLKbG06bA1jRla0AwBwCuDY9nkq8ZixTvDnE5jlaAXZWwXOjgJHiQNSFeCDcabGNbC6NzL4K0a+GxSx7vwSurta9rDOZ8kW2bBd9QqqmMa12SDsC4AZWl9mBxO7jYAA6iYkIeS5zfvxWi+IMFLC+JLIdveCLHkugcPvssXH0gab5/Tw3MI1vqxqfh937Msmcj3snjEXW0K1PQoAL+ThbiXNB+xW3ET80d8qPPh/GHLjk1tOngqXH6/hZHZLNbA5j9FS8tic0cr8BzRcaI7IPMj0BS+e/vRXANLYB0v6x+FWSO7X2eKLKUajvUvADiODiEzMsi5U1YDjzMzwm4Q32x2m26bFntmSSVNMN/UVOJy5rzeDbuRrf7lFaiWGHSDqlPf7hPiKhLjJJPHyVZf3+wo6TeuzHUpm0y4wJJg28Er3QSPf0VuHf225ZBmJ7/BEu9bVuaQ4g2IKdlFzgcsmImO5I58kzJM3vv5Kyg89vKSLX7rW0RLvSueeycJAfondYDgR94QpmyTEqx9It1EalVNd7lXYlxzHMSYt6KsXeyxfwSzzUt+33A+6WbIJG3virIJtOsJCIjz85Q50eiBqlMtMGRb8pmUy6wvaVGJccxkyQmoOOYRIP9kZ78dlLYnv0TU6bnaSdEsp8O4ycpix+iF3pDTr73WPjnRTcf0w+OOQh8eiuadUwAiToTHvzQs+HI4DBt63K7NLTlBa57TY5TdpFiWz4BdDQ6NpkQc5G4dUrFpto5pfBHI6rQtb1dbKdWkMvvliD4tLHE8Xngulwb7bex3o78WsuKfjpR/w2KrcucUyx5ec9TMXtFNrAX5s0Fpdv+6FsW4KmGFmXsmZkuJOty4mS7S5M25JxoPH6BO736qseMjHd0azjV5/tqxkZtLvWv6awTGUjUGaaZY5uZz3hsPabZieE+AW5Ou3srF6WwxqUXMAu7KP+5s78JRmzqnw2DaySMxcYDnOc9xMcC4mBrYWuVUOjaYsOsA2Aq1gBya0PhoHAWCzRvpr+FB129hGtRpekcI2m6kWl4JqtZJe9xAfIcRmJgmPQLYMwbAwsykgyTJc4kkalzjJOkGbQOASY/DF7qREQyq1500DXgb/AKi1ZXl7CEndYh6OZOtWb/8AzV//AHWPjujGZSW58xyiS+o6Yc0tBzOMiQI4SeJnatbJ23Wq6fxORpyxMQP53dlnkZd/QUZ5LJjWl6MrA1nkHsuc8juLrDyAXQzz9wuW6CaJDhpJaP6Qy/kQunn34FR0zw8Mccfwd1J2XNFuPp9UlQ28fsrC45NbTp91VUNvH7BHObWGg6A6LWulnXxTZnZRe0xHqknXxQm/kzWkkAXUQWmDYqBUgyLKa05jNyDr3Id7JTBMC/JFai5pgiPFKDZRi3nMZJJRrvZqzTmJPZmI74HpxKWlTcSNNRuOCrc8mAdpA8TP3Ue/RRqS60ve25g3N4JGh0ud09EODmm1jOo0GqxyZOvAeQhTwv7hGddaWupmTxmYtpOvfyT0mHt6XbFiDc6LHzZjJPBNTdBkG4IQsuk5DtBMXHD39lc5phoNom/fp+VjR9E5NovGviqlh2Md7IV+Jacx2nTnZYoAlM4zvpYd0z9yiWdr6dN1/wCU8OIVXVnaCjNBMHYjzSbISVk1W/LJgQOd7/kJOrceG24/Krm0cDbxUn8IkmluIuSeNxztdPhmOzCftw/usYmd9BCdpiCJRLOtHynx3FrK3DtPpHnZYydrog8I9ELNxOU7XPC3sq3Kcl9jJ7o/sqG+/NSDbXv8P8oWNR8TYMiKw0s1x4R8jjyBcQeAeSflT9DYnMByseRi4W1cwOBadCI89VyTs2FqwZLD8u8gDT+YDzAnUOKLx5fp3d9X3/bs6enn9ArZ9+a1mBxzHnK1wLg1rzGzX5g0zHFjvJbHfy2/sq7ZLHanv+61vxDja1HDVKlCkK1RgBDL3GYZoi5IbJgXMLPm/ltz7lg42uW1qDZgOc+dp7BDR/1FqOeXpj/CfSlbFYcVq1IUi9xLGgkzT7Ja4yN794AO625F/f4Uj36clG/9u5FxmoBv4fVQxpPvkoBEgEwSQAOJEkxa9gVZ1jGQC4BxBIFpMATA1MSPNC3RqzxTEnmuG+IMUajy1t8pM3Hz6O78o7PeXLbfEXS+Udkw4glv8LZjrO+bNG5vo0rjqMPdoYiAOAkR74qWr9Px3lz8r6n+66noXDEUmTaC5x0PzRGmvykLc5DJi/lwK13RVHKwCdTJ8ND6lZ9tvdka5rvKrzSOSP4p7hEfVUvpna9+U7bKJgEA2Nvv9klQW8fwjlJdsksOUD+KeV7fZVluscSlDzEcSlG/iiSVY2i47KyoJeTa9xzm/gsdAfJE8h4CyLq+0tpuO/qFOMpEvJttqQNlWwC3f91ViTJF9vuUakvkwetPsBN1p9gKqUSoLutPH0Cnrjx+iqBUygsFQ+4U9YeP0VYKmURZ1p4/RN1h4qoFD3wJQWioeKkVTxWKahIMWIU4V8hF8bplda7ip6w8VWhGT9aeKnrTxVaEVZ1h4pX1nDcwoQUFhqHiUtOs6YJ0SNdFjt9ErBPnM/hBe+s4DXh9VPXnYk++Kxzz1kewr1Sm693s/wBlrulB1je1f0NuBGhBFiswmdPP8KuqyyjWOp7aDo7GnDuJLQ4OGWdJiTFgYIlxLQOJG4HUUg+pFTM3MILA0k043zGBmzDeLQIFjPNY6lE2kHUceGlwRqCLgqro/pB2H0Oal+9MS3+bZv8AN8p3ynWymWH6U++P/P8ALtHPr37FIaX6x5/e4dUPr+Fq+m6VUinUe1jW0nsecri4uHWUyRdjf0+vK+yweOZVEtPeNCL6EbFHSeF62k5gjtCPUH6BUs3iKuFfV/5oDRctawkkOMAPLi0dpuwixveBDsfiLTTpExEh7hOm3VGO6T3lZdNk+f45q4ubTu4+4CJdRpMaKzKtCo9rIDy1rQ5131GODQ4lmgj5o/e0tfE6WxgpzUqZXVDBa0E5WhoLRJgEMBc+XRLi4tF9H+IemWNsQ0uaQcpu1josX3+aDIYL3E5RdcL0hj3VHEkkyZM6kiwJi2lgBAAsAFLdM8fHlzXU9fN/pONxzqjiZmTJJAknSSNrWAFgAB37HomkdfsFrcFhpK6fAUICzHvy8cMfHH02NF7gNVZ1p4qsIVeOmfiCNyq/9w7f/CKmx93QWjVCaM3EE6OTda7isYHhxEfcq1FsOaruKXrncUpUIhuudxKg1HHdIpRVQKkIQjKVMoQiGBUoQgE0oQgrZYmd9EjDDyANVKEbZMqVCEc0qJQhFSlL+F0IRYio20zcKGR74jZCEWeg4XHG5Vje1+PyhCJfRwoKEIzGDjKEhaOrTLDIQhSvZwZX0rwz3UyHUTlI/c0aY2aTYD+E9ngWLpOjfiVjuzV/ZvGsi3ImRLfGx2JQhWV5vq8Z9PlLh6vx8N07pVjGZiQ1psCdzwaAJeeTQSuZ6X+IiZyS3bNo890H9mO4l3NhQhLWPpcZ9RlfP1PhymJxBd9gNOOnemwuGJQhZfUvU1G/wGFhbek2EIWni5LurUIQjkCq3U+duCEIsqWthShCCFCEIFUhCEV//9k=",
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
        "image": "https://i.mydramalist.com/nOmV26_4c.jpg?v=1",
        "heroImage": "data:image/jpeg;base64,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",
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
        "image": "https://i.mydramalist.com/73A3jD_4c.jpg?v=1",
        "heroImage": "data:image/jpeg;base64,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",
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
        {
        "id": "better-late-than-single-season-2",
        "title": "Better Late than Single Season 2",
        "status": "Airing",
        "badge": "K-Reality",
        "rating": "4.7",
        "episodesCount": "10",
        "year": "2026",
        "image": "https://mydramalist.com/photos/JB0DLw_4",
        "heroImage": "https://mydramalist.com/photos/nOLDy8_4",
        "episodeLinks": [
            { "name": "Episode 1", "url": "https://youtu.be/U7Bz7FqQbLs?si=rsrjhbwK7mizN85p" },
            { "name": "Episode 2", "url": "https://youtu.be/CjU0BGjN1fo?si=SaxUyC-9wZfw8fSC" },
            { "name": "Episode 3", "url": "https://youtu.be/zf0SbjZpJbw?si=M4b_-jTGaVM0v0J9" },
            { "name": "Episode 4", "url": "https://youtu.be/hIAZf1cVG5I?si=2J0KSUxuFODuJqNF" },
            { "name": "Episode 5", "url": "https://youtu.be/0je95IQL8eM?si=KrKAbPXm0uRyXBVy" },
            { "name": "Episode 6", "url": "https://youtu.be/_XlYIpITTvs?si=Nv_QP_BIV8bf_AqH" },
            { "name": "Episode 7", "url": "https://youtu.be/nZ9i-MrEPJI?si=ITnw3lq_p1p1kSX0" },
            { "name": "Episode 8", "url": "https://youtu.be/Mnqf1cCiWhQ?si=Ek7QRnsTLJ2I94Ry" },
            { "name": "Episode 9", "url": "https://youtu.be/HekUi-AYBP0?si=uaR3ss5jYQ02iJUA" },
            { "name": "Episode 10", "url": "https://youtu.be/woNLtg92veM?si=fbdiN8xXk7uZWm84" }
        ],
        "desc": "A heartwarming dating reality show following a group of singles who have never been in a relationship as they navigate the exciting and awkward world of romance for the first time.",
        "tags": ["Dating", "Romance", "Reality"]
    }

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
