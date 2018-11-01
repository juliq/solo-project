--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5
-- Dumped by pg_dump version 10.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: committee; Type: TABLE; Schema: public; Owner: juliannerdmann
--

CREATE TABLE public.committee (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    committee_id integer
);


ALTER TABLE public.committee OWNER TO juliannerdmann;

--
-- Name: committee_id_seq; Type: SEQUENCE; Schema: public; Owner: juliannerdmann
--

CREATE SEQUENCE public.committee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.committee_id_seq OWNER TO juliannerdmann;

--
-- Name: committee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juliannerdmann
--

ALTER SEQUENCE public.committee_id_seq OWNED BY public.committee.id;


--
-- Name: garden_team; Type: TABLE; Schema: public; Owner: juliannerdmann
--

CREATE TABLE public.garden_team (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    garden_team_id integer
);


ALTER TABLE public.garden_team OWNER TO juliannerdmann;

--
-- Name: garden_team_id_seq; Type: SEQUENCE; Schema: public; Owner: juliannerdmann
--

CREATE SEQUENCE public.garden_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.garden_team_id_seq OWNER TO juliannerdmann;

--
-- Name: garden_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juliannerdmann
--

ALTER SEQUENCE public.garden_team_id_seq OWNED BY public.garden_team.id;


--
-- Name: members; Type: TABLE; Schema: public; Owner: juliannerdmann
--

CREATE TABLE public.members (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    mobile character varying,
    email character varying,
    address character varying,
    city text,
    zipcode integer,
    "BD" character varying,
    img_url character varying(220),
    garden_team_id integer,
    captain boolean,
    committee_id integer,
    chair boolean,
    membership text,
    member_since integer,
    year_resigned integer,
    dues_paid boolean
);


ALTER TABLE public.members OWNER TO juliannerdmann;

--
-- Name: members_id_seq; Type: SEQUENCE; Schema: public; Owner: juliannerdmann
--

CREATE SEQUENCE public.members_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.members_id_seq OWNER TO juliannerdmann;

--
-- Name: members_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juliannerdmann
--

ALTER SEQUENCE public.members_id_seq OWNED BY public.members.id;


--
-- Name: person; Type: TABLE; Schema: public; Owner: juliannerdmann
--

CREATE TABLE public.person (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
    password character varying(1000) NOT NULL
);


ALTER TABLE public.person OWNER TO juliannerdmann;

--
-- Name: person_id_seq; Type: SEQUENCE; Schema: public; Owner: juliannerdmann
--

CREATE SEQUENCE public.person_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.person_id_seq OWNER TO juliannerdmann;

--
-- Name: person_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juliannerdmann
--

ALTER SEQUENCE public.person_id_seq OWNED BY public.person.id;


--
-- Name: committee id; Type: DEFAULT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.committee ALTER COLUMN id SET DEFAULT nextval('public.committee_id_seq'::regclass);


--
-- Name: garden_team id; Type: DEFAULT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.garden_team ALTER COLUMN id SET DEFAULT nextval('public.garden_team_id_seq'::regclass);


--
-- Name: members id; Type: DEFAULT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.members ALTER COLUMN id SET DEFAULT nextval('public.members_id_seq'::regclass);


--
-- Name: person id; Type: DEFAULT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.person ALTER COLUMN id SET DEFAULT nextval('public.person_id_seq'::regclass);


--
-- Data for Name: committee; Type: TABLE DATA; Schema: public; Owner: juliannerdmann
--

COPY public.committee (id, name, committee_id) FROM stdin;
1	President	\N
2	Vice President	\N
3	Secretary	\N
4	Treasurer	\N
5	Web  Manager	\N
6	Growth Spurts	\N
7	Historian	\N
8	Hospitality	\N
9	Host	\N
10	Garden Design	\N
11	Garden Maintenance	\N
12	Outreach	\N
13	Programs	\N
14	Sunshine	\N
15	Affiliate	\N
\.


--
-- Data for Name: garden_team; Type: TABLE DATA; Schema: public; Owner: juliannerdmann
--

COPY public.garden_team (id, name, garden_team_id) FROM stdin;
1	Boulder	\N
2	Butterfly	\N
3	Connie Getsch	\N
4	Gazebo	\N
5	Wheel	\N
6	Affiliate	\N
\.


--
-- Data for Name: members; Type: TABLE DATA; Schema: public; Owner: juliannerdmann
--

COPY public.members (id, first_name, last_name, mobile, email, address, city, zipcode, "BD", img_url, garden_team_id, captain, committee_id, chair, membership, member_since, year_resigned, dues_paid) FROM stdin;
1	Juli	Erdmann	612-889-8114	juliannq@mac.com	20425 Lakeview Ave	Deephaven	55331	Oct 10	juli-erdmann.jpg	4	f	5	t	Active	2013	\N	t
2	Gretchen	Vroege	612-240-4697	gretchenvroege@gmail.com	20240 Lakeview Ave	Deephaven	55331	Sept 22	gretchen-vroege.jpg	1	t	9	f	Active	2006	\N	t
3	Victoria	Ahlquist	612-770-0373	teamahlquist@gmail.com	5280 St. Albans Bay Road	Shorewood	55331	May 29	victoria-ahlquist.jpg	1	f	8	t	Active	2017	\N	t
4	Bunny	Alexander	952-476-0473	palexander6@comcast.net	16540 Grays Bay Blvd	Wayzata	55391	Nov 24	bunny-alexander.jpg	6	f	15	f	Affiliate	1998	\N	t
6	Gingie	Anderson	952-221-9003	adoroschak@comcast.net	4490 Eastwood Road	Deephaven	55345	Jan 13	gingie-anderson.jpg	4	f	10	f	Active	2010	\N	t
7	Nancy	Bach	952-476-9786	bachpj@aol.com	19100 Minnetonka Blvd	Wayzata	55391	Dec 3	nancy-bach.jpg	4	f	12	t	Active	1995	\N	t
8	Barbara	Belknap	612-875-0156	barbarabelknap@comcast.net	18101 Woolman Dr.	Minnetonka	55345	April 23	barbara-belknap.jpg	3	t	11	f	Active	2004	\N	t
9	Kate	Bryant	612-242-7029	bry-fors@msn.com	3320 Hill Lane	Deephaven	55391	Sept 14	kate-bryant.jpg	5	t	11	t	Active	2007	\N	t
10	Lynn	Stokke	612-965-1280	lynnstokkee56@gmail.com	3860 Talton Place	Deephaven	55331	April 7	lynn-stokke.jpg	3	f	13	f	Active	2017	\N	t
11	Moonyeen	Bongaards	952-470-5868	donjb28@msn.com	4250 Water St.	Deephaven	55331	Sept 9	moonyeen-bongaards.jpg	6	f	15	f	Affiliate	2002	\N	t
12	Tess	Brownfield	612-708-8001	tessbrownfield@aol.com	4375 Cottonwood Lane	Deephaven	55331	Oct 11	tess-brownfield.jpg	2	t	14	t	Active	1995	\N	t
14	Kathy	Campbell	612-877-1635	kathy@wandkcampbell.com	2865 Breezy Heights Road	Wayzata	55391	May 23	kathy-campbell.jpg	1	f	\N	f	Active	2017	\N	t
15	Martha	Capper	612-747-3974	mgcski@aol.com	3645 Laurel Drive	Deephaven	55391	\N	martha-capper.jpg	\N	\N	\N	\N	Resigned	2011	2017	t
16	Emma	Chapman	612-207-1980	ehuckett@gmail.com	19150 Cedarhurst	Deephaven	55391	Oct 30	emma-chapman.jpg	4	f	\N	f	Active	2010	\N	t
17	M.K.	Countryman	612-473-2454	mkcountryman@me.com	3345 Hill Lane	Deephaven	55391	May 8	mk-countryman.jpg	4	f	\N	f	Active	2010	\N	t
18	Jean	Cunningham	612-865-7322	jcunnin617@aol.com	4750 Spring Creek Dr.	Deephaven	55331	Aug 9	jean-cunningham.jpg	3	f	2	t	Active	2015	\N	t
19	Sarah	Dale	612-718-3794	sarahanndale@gmail.com	19350 Walden Trail	Deephaven	55391	May 15	sarah-dale.jpg	5	f	9	f	Active	2002	\N	t
21	Kate	Dolan	952-212-8707	frecklecity@aol.com	4201 Sunset Drive #502	Spring Park	55384	Jan 24	kate-dolan.jpg	2	f	8	f	Active	2004	\N	t
22	Dianne	Dunn	612-860-1828	ddunn02@msn.com	15950 Portico Rd	Deephaven	55391	\N	gingie-anderson.jpg	6	f	15	f	Affiliate	1998	\N	t
23	Laurie	Dvorak	612-801-6656	lauriedvorak@2Z.net	19685 Vine Street	Deephaven	55391	Jan 21	laurie-dvorak.jpg	6	f	15	f	Affiliate	2005	\N	t
24	Paula	Evanich	612-816-8116	Pevanich@hotmail.com	4235 Heathcote Rd.	Deephaven	55391	Sept 2	paula-evanich.jpg	1	f	4	t	Active	2016	\N	t
25	Susan	Farrell	612-597-3717	susan.farrell@thrivent.com	3711 Arbor Lane South	Minnetonka	55305	March 15	susan-farrell.jpg	5	f	8	f	Active	2006	\N	t
26	Maria	Fisher	952-484-3996	maria_m_fisher@yahoo.com	4645 Lakeway Terrace	Excelsior	55331	July 22	gingie-anderson.jpg	6	f	15	f	Affiliate	2011	\N	t
27	Judi	Forsmark	952-475-9162	judiforsmark@gmail.com	17900 Highland Ave.	Deephaven	55391	May 3	judi-forsmark.jpg	6	f	15	f	Affiliate	2001	\N	t
28	Jill	Gardiner	952-500-2628	Jgard33109@aol.com	9895 Cottagewood Ave.	Deephaven	55331	May 25	gingie-anderson.jpg	1	f	7	t	Active	2016	\N	t
29	Julie	Gronberg	952-212-9168	julie.gronberg@outlook.com	19755 Hillside Street	Deephaven	55331	March 21	julie-gronberg.jpg	6	f	15	f	Affiliate	1998	\N	t
30	Carol	Gross	612-382-6673	ckranz5143@gmail.com	20245 Lakeview Ave.	Excelsior	55331	July 4	carol-gross.jpg	6	f	15	f	Affiliate	2003	\N	t
31	Faye	Haverstock	952-476-2898	f.haverstock@mchsi.com	3403 Northome Road	Deephaven	55391	Sept 27	faye-haverstock.jpg	6	f	15	f	Affiliate	1999	\N	t
32	Susan	Hennessy	952-454-5020	nonniesusan@yahoo.com	3655 Laurel Drive	Deephaven	55391	Nov 16	julie-gronberg.jpg	6	f	15	f	Affiliate	2007	\N	t
33	Cecelia	Houg	952-836-7940	Hougcc@aol.com	4725 Lakeway Terrace	Shorewood	55331	May 19	cecelia-houg.jpg	2	f	\N	f	Active	2016	\N	t
34	Amber	Huttner	952-913-6557	amberhuttner@gmail.com	8970 Deer Run Drive	Victoria	55386	Aug 9	amber-huttner.jpg	3	f	13	t	Active	2006	\N	t
35	Mary	Jaffray	612-221-1318	mjaffray@mchsi.com	18427 Heathcote Road	Deephaven	55391	Feb 8	mary-jaffray.jpg	5	f	8	f	Active	2018	\N	t
36	Sue	Jerutis	612-961-7536	scj0523@aol.com	18869 Carsonwood Ave.	Deephaven	55391	April 23	sue-jerutis.jpg	3	f	10	f	Active	2009	\N	t
5	Nancy	Anderson	612-759-7559	deephavennancy@msn.com	205 Mill St. #302	Excelsior	55331	June 12	gingie-anderson.jpg	6	f	15	f	Affiliate	1995	\N	t
13	Katy	Burke	612-508-8813	katy@teamwomenmn.org	16606 Park Lane	Wayzata	55391	May 23	gingie-anderson.jpg	6	f	15	f	Affiliate	2001	\N	t
20	Catherine	DeMane	952-693-8877	catherinedemane@mac.com	4060 Sibley Ave	Deephaven	55331	Aug 15	gingie-anderson.jpg	1	f	8	t	Active	2017	\N	t
43	Nancy	Klecker	612-474-9550	nanaclecker@aol.com	4675 Lakeway Terrace	Excelsior	55331	March 1	gingie-anderson.jpg	6	f	15	f	Affiliate	2012	\N	t
44	Dianne	Korengold	952-470-9770	dikor1@gmail.com	20660 Woodhaven Place	Deephaven	55331	\N	gingie-anderson.jpg	6	f	15	f	Affiliate	1995	\N	t
41	ui	ui	ii	77	jk	ui	77	jk	sue-jerutis.jpg	2	t	1	f	Active	11	2009	t
40	ui-update	ui-update	ii	uu	ui	ui	77	ui	sue-jerutis.jpg	1	t	2	t	Active	89	-1	t
42	ab	ab	12	jk	jk	jk	12	jk	sue-jerutis.jpg	1	t	1	t	jk	12	\N	t
45	Pam	Langseth	612-207-4674	langsethpam@gmail.com	22355 Bracketts Road	Shorewood	55331	Oct 10	pam-langseth.jpg	1	f	\N	f	Active	2017	\N	t
46	Cindy	LaRue	612-709-7322	CindyLa29@aol.com	16521 Grays Bay Blvd	Wayzata	55391	Jan 22	gingie-anderson.jpg	\N	f	\N	f	Active	2015	\N	t
47	Sara	Mortimore	651-233-7129	semortimore@landolakes.com	20390 Linwood Rd	Deephaven	55331	March 28	sara-mortimore.jpg	12	t	2	f	Active	2008	\N	t
\.


--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: juliannerdmann
--

COPY public.person (id, username, password) FROM stdin;
1	jerdmann	hello
4	juliq	$2b$10$fQlD/zyryYepQiuiDLFYvOXesy/7ujwD6G5lRyEzDmv0hr2kZvwjy
5	daisy	$2b$10$do87qzEbhEmV0CCZYR8BRuKtAi5qni.DTxMhdC1KF14TeL5f0nCba
6	juliannq@mac.com	$2b$10$JNdwGP5DDd3vsTAtlER64eN0vIlKHAJEhEFOfxcSt2eEgBLAJOVrq
\.


--
-- Name: committee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: juliannerdmann
--

SELECT pg_catalog.setval('public.committee_id_seq', 15, true);


--
-- Name: garden_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: juliannerdmann
--

SELECT pg_catalog.setval('public.garden_team_id_seq', 6, true);


--
-- Name: members_id_seq; Type: SEQUENCE SET; Schema: public; Owner: juliannerdmann
--

SELECT pg_catalog.setval('public.members_id_seq', 47, true);


--
-- Name: person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: juliannerdmann
--

SELECT pg_catalog.setval('public.person_id_seq', 6, true);


--
-- Name: committee committee_pkey; Type: CONSTRAINT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.committee
    ADD CONSTRAINT committee_pkey PRIMARY KEY (id);


--
-- Name: garden_team garden_team_pkey; Type: CONSTRAINT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.garden_team
    ADD CONSTRAINT garden_team_pkey PRIMARY KEY (id);


--
-- Name: members members_pkey; Type: CONSTRAINT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_pkey PRIMARY KEY (id);


--
-- Name: person person_pkey; Type: CONSTRAINT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (id);


--
-- Name: person person_username_key; Type: CONSTRAINT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_username_key UNIQUE (username);


--
-- Name: committee committee_committee_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.committee
    ADD CONSTRAINT committee_committee_id_fkey FOREIGN KEY (committee_id) REFERENCES public.members(id);


--
-- Name: garden_team garden_team_garden_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: juliannerdmann
--

ALTER TABLE ONLY public.garden_team
    ADD CONSTRAINT garden_team_garden_team_id_fkey FOREIGN KEY (garden_team_id) REFERENCES public.members(id);


--
-- PostgreSQL database dump complete
--

-- *************************************************
-- SQL queries


