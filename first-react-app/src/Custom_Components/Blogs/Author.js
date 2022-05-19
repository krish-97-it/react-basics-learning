import React,{ createRef, useEffect, useRef, useState }from "react";

function CreateList(props){
    const getAuthorName = props.authorName;
    const listItems = getAuthorName.map((name) => <li>{name}</li>)
    return(
        <>
            <ul>
                {listItems}
            </ul>
        </>
    );
}

export default function Author(){
    const Authors = ["Ram", "Shyam", "Jaddu"];
    const [name, setName] = useState("");
    const [mob, setMob] = useState("");
    var inputRef = createRef();
    var formRef = useRef(null);
    var myRef = useRef(null);
    //component didamount ..
    // useEffect(()=>{
    //     inputRef.current.focus();
    // },[]);

    const handleChangeName = (e) =>{
        // e.preventDefault();
        setName(e.target.value)
    }
    const handleChaneMob = (e) =>{
        // e.preventDefault();
        setMob(e.target.value)
    }

    const scrollToTop = () =>{
        myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollToForm = () =>{
        formRef.current.scrollIntoView({ behavior: 'smooth' });
        inputRef.current.focus();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name} and Mobile no.: ${mob}`);
    }
    return(
        <>
        <div className="App">
            <header className="App-header">
                <div>
                    <p>List of Authors</p>
                    {<CreateList authorName={Authors}/>}
                </div>
                <div>
                    <h1 ref={myRef}>Nature</h1>
                    <button onClick={scrollToForm} ref={inputRef}>Register</button>
                    <p>
                        Nature Magazine", "Nature (magazine)", and "Nature News" redirect here. For the American magazine published 1923–1959, see American Nature Association. For the French scientific magazine, see La Nature. For the fake news site, see Natural News.
                        Nature
                        Nature volume 536 number 7617 cover displaying an artist’s impression of Proxima Centauri b.jpg
                        Cover of a 2016 issue of Nature featuring artistic representation of Proxima Centauri and its planet Proxima b
                        Discipline	Natural sciences
                        Language	English
                        Edited by	Magdalena Skipper
                        Publication details
                        History	4 November 1869 – present
                        Publisher	Nature Research (subsidiary of Springer Nature) (United Kingdom)
                        Frequency	Weekly
                        Impact factor	49.962 (2020)
                        Standard abbreviations
                        ISO 4	Nature
                        Indexing
                        CODEN	NATUAS
                        ISSN	0028-0836 (print)
                        1476-4687 (web)
                        LCCN	12037118
                        OCLC no.	01586310
                        Links
                        Journal homepage
                        Online access
                        Online archive
                        Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology. It has core editorial offices across the United States, continental Europe, and Asia under the international scientific publishing company Springer Nature. Nature was one of the world's most cited scientific journals by the Science Edition of the 2019 Journal Citation Reports (with an ascribed impact factor of 42.778),[1] making it one of the world's most-read and most prestigious academic journals.[2][3][4] As of 2012, it claimed an online readership of about three million unique readers per month.[5]

                        Founded in autumn 1869, Nature was first circulated by Norman Lockyer and Alexander Macmillan as a public forum for scientific innovations. The mid-20th century facilitated an editorial expansion for the journal; Nature redoubled its efforts in explanatory and scientific journalism. The late 1980s and early 1990s created a network of editorial offices outside of Britain and established ten new supplementary, speciality publications (e.g. Nature Materials). Since the late 2000s, dedicated editorial and current affairs columns are created weekly, and electoral endorsements are featured. The primary source of the journal remains, as established at its founding, research scientists; editing standards are primarily concerned with technical readability. Each issue also features articles that are of general interest to the scientific community, namely business, funding, scientific ethics, and research breakthroughs. There are also sections on books, arts, and short science fiction stories.

                        The main research published in Nature consists mostly of papers (articles or letters) in lightly edited form. They are highly technical and dense, but, due to imposed text limits, they are typically summaries of larger work. Innovations or breakthroughs in any scientific or technological field are featured in the journal as either letters or news articles. The papers that have been published in this journal are internationally acclaimed for maintaining high research standards. Conversely, due to the journal's exposure, it has at various times been a subject of controversy for its handling of academic dishonesty, the scientific method, and news coverage. Fewer than 8% of submitted papers are accepted for publication.[6] In 2007, Nature (together with Science) received the Prince of Asturias Award for Communications and Humanity
                    </p>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <label className="lable-for-form">Enter your name:</label><br/>
                        <input type="text" ref={inputRef} className="form-input-field" value={name} onChange={handleChangeName}/><br/>
                        <label className="lable-for-form">Enter your Mobile no.:</label><br/>
                        <input type="text"  ref={inputRef} className="form-input-field" value={mob} onChange={handleChaneMob}/><br/>
                        <input type="submit" />
                    </form>
                    <br/>
                    <button onClick={scrollToTop}>Scroll To Top</button>
                </div>
            </header>
        </div>
        </>
    );
    
}