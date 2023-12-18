import axios from "axios";
import { useRef, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";


const Search_portfolio = () => {
    let searchVal = useRef("");
    let [searchPortfolio, setSearchPortfolio] = useState({
        found_portfolio : false,
        users : {}
    })

    const searchPortfolioFun = async () => {
        // alert(searchVal.current.value);
        let value = searchVal.current.value;
        try {

            let url = `${process.env.REACT_APP_SERVER_URL}/portfolio/search`
            let { data } = await axios.post(
                url,
                { value },
                {
                    headers: { "Content-type": "application/json" },
                    "access-control-allow-origin": `${process.env.REACT_APP_SERVER_URL}`,
                    withCredentials: true
                }
            );

            if(data.success){
                setSearchPortfolio({
                    found_portfolio : true,
                    users : data.users
                })
            }
        } catch (error) {
            console.log("error in search => ", error)
        }
    };

    let navigate = useNavigate()
    return (
        <div className="container p-0 m-0 pb-5">

            <div className="row">
                <div className="col col-12">
                    <h6 style={{ fontSize: "16px", color: "grey", fontWeight: "700", marginTop: "30px", marginBottom: "20px" }}>SEARCH PORTFOLIO</h6>
                </div>
                <div className="col col-12" style={{ display: 'flex', justifyContent: "center" }}>
                    <input ref={searchVal} placeholder="search for portfolio..." style={{ height: "30px", outline: "none", border:"1px solid grey", borderRight:"none", padding: "6px 10px", width: "220px", fontSize: "12px", color: "grey", fontWeight: "400" }} type="search" name="" id="" />
                    <button onClick={() => searchPortfolioFun()} className="btn btn-primary btn-sm p-0 rounded-left-0 rounded-0" style={{ width: "30px", height: "30px", display: "grid", placeItems: "center" }}>
                        <Search />
                    </button>
                </div>
            </div>

            <div className="row mt-3 mb-5" style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"10px"}}>
            { searchPortfolio.found_portfolio ?
               searchPortfolio.users.map((v,i)=>{ 
               return <div key={i} className="col col-12 col-md-4 col-lg-3 col-xl-2 mt-3 p-2" style={{  display:"flex", flexDirection:"column", justifyContent:"flex-end", minHeight:"240px"}}>
                    <div className="col col-12 d-flex justify-content-center align-items-center">
                       { v.image.length === 2 ? 
                            <img onClick={()=> navigate(`/portfolio/${v.id}`)} src={v.image[1].url}  style={{height:"200px", cursor:"pointer", aspectRatio:"1/1.4", objectFit:"contain", boxShadow:"0 0 3px grey"}} alt="" /> 
                            :
                            <div onClick={()=> navigate(`/portfolio/${v.id}`)} style={{height:"200px", aspectRatio:"1/1.4", cursor:"pointer", boxShadow:"0 0 3px grey", lineHeight:"200px"}}>NO IMGAE</div>
                        }
                    </div>
                    <div className="col col-12 mt-2">
                        <span style={{width:"max-conyent", margin:"0 auto", fontSize:"16px", fontWeight:"600", color:"grey"}}>{v.name}</span>
                    </div>
                </div>
                })
                :
                <h5 style={{margin:"60px auto"}}>NO PORTFOLIO</h5>
            }
            </div>
        </div>
    )
};

export default Search_portfolio;