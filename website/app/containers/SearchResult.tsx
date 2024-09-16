'use client';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import {useStyles, MainContent} from '../styles/holiday_schedule';
import Fuse from "fuse.js";
import siteData from '../constants/site_info';
import { useSearchParams } from 'next/navigation';

interface Props {};
const SeachResultContainer: React.FC<Props> = () => {
    const classes = useStyles();
    const tokenParam = useSearchParams().toString().slice(12);
    
    const [searchPhrase, setSerchPhrase] = useState<any>(tokenParam);
    const [searchResult, setSearchResult] = useState<any>();
    const [isSearchTermShort, setIsSearchTermShort] = useState<boolean>(true);

    const searchFunction =()=>{
        const fuse = new Fuse(siteData, {keys: ['name', 'title', 'description' ]});
        const results = fuse.search(searchPhrase).map(({ item }) => item);
        setSearchResult(results);
    };
    const handleSearchFormSubmit =(e: React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        searchFunction();
    };

    useEffect(() => {
        const sectionEl = document.getElementById("search-result-hero");
        const handleScroll = () => {
            const position = 217.168 + window.scrollY * 0.65
            if(sectionEl){
                if(position >= 500){
                    sectionEl.style.backgroundPosition = `0px -500px`
                }else{
                    sectionEl.style.backgroundPosition = `0px -${position}px`
                }
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(()=>{
        if(searchPhrase.length < 3){
            setIsSearchTermShort(true)
        }else{
            setIsSearchTermShort(false)
        };
    }, [searchPhrase]);
    useEffect(()=>{
        searchFunction();
    }, [searchPhrase]);
    useEffect(()=>{
        document.title = `${searchPhrase} search results | Elite Community CU`;
    }, [searchPhrase]);

  return (
        <main>
            <div className={classes.hero} id='search-result-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>
                        <span className={classes.searchResultSpan}>Search</span>

                        <form onSubmit={handleSearchFormSubmit} style={{textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'right'}}>	
                            <input 
                                className={classes.searchInput} 
                                id="tipue_search_input" 
                                aria-label="What do you want to search?"
                                value={searchPhrase}
                                onChange={(e)=> setSerchPhrase(e.currentTarget.value)}
                            />
                            <button className={classes.searchButton} id="tipue_search_button" aria-label="Search">Search</button>
                        </form>
                    </h1>
                </div>
            </div>

            <MainContent>
                <div className={classes.mainContentInner}>
                        <div className={classes.mainContentInnerContainer}>
                            <div style={{clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%'}}>
                                <div className={classes.pageTitle}>
                                    <h2 className={classes.pageTitleH2}>Search Results</h2>
                                </div>

                                {
                                    isSearchTermShort
                                    ?
                                    <div>
                                        <div id="tipue_search_warning_head" style={{color: '#555', lineHeight: '1.5', fontSize: '0.878rem'}}>Search too short</div>
                                        <div id="tipue_search_warning" style={{color: '#555', lineHeight: '1.5', fontSize: '0.878rem'}}>Should be 3 characters or more</div>
                                    </div>
                                    :
                                    searchResult.length === 0
                                    ?
                                    <div>
                                        <div id="tipue_search_warning_head" style={{color: '#555', lineHeight: '1.5', fontSize: '0.878rem'}}>Nothing found</div>
                                    </div>
                                    :
                                    <>
                                        <div>
                                            <div className={classes.searchResultCount}>{searchResult.length} results</div>
                                        </div>

                                        {
                                            searchResult.map((item: any) => {
                                                const { id, name, title, description, link } = item
                                                return (
                                                    <div key={id}>
                                                        <div className="tipue_search_content_title"><a href="/ps-loan-rates.html">{title}</a></div>
                                                        <div className="tipue_search_content_text">{description}</div>
                                                        <div className="tipue_search_content_loc"><a href={link}>{link}</a></div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </>

                                }
                            </div>
                        </div>
                </div>
            </MainContent>

            <Footer />
        </main>
  )
};

export default SeachResultContainer;
