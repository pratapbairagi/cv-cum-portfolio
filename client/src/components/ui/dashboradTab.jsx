

const DashboardTab = () => {
    const data = [
        { month: "Jan", earning: 3000 },
        { month: "Feb", earning: 7000 },
        { month: "Mar", earning: 5000 },
        { month: "Apr", earning: 16000 },
        { month: "May", earning: 3000 },
        { month: "jun", earning: 8000 },
        { month: "Jul", earning: 13000 },
        { month: "Aug", earning: 26000 },
        { month: "Sep", earning: 20000 },
        { month: "Oct", earning: 29000 },
        { month: "Nov", earning: 10000 },
        { month: "Dec", earning: 19000 },
    ]
    return (<>
        <div className="col p-3 py-2" style={{ height: "max-content" }}>
            <div className="row m-0 p-0 gap-4">
                <div className="col col-12 col-md-7 col-lg-7 m-0 py-3" style={{ maxHeight: "70vh", background: "white", borderRadius: "6px" }}>

                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <span style={{ fontSize: "14px", fontWeight: "700", color: "black" }}>Overview</span>
                            <span className="p-0" style={{ fontSize: "8px", fontWeight: "700", color: "grey" }}>Monthly Earning</span>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "2px" }}>
                            <select style={{ fontSize: "12px", color: "grey", fontWeight: "600", borderRadius: "3px", padding: " 2px 3px", background: "whitesmoke" }} name="" id="">
                                <option value="1">Per Day</option>
                                <option value="7">Weekly</option>
                                <option value="30">Monthly</option>
                                <option value="90">Quarterly</option>
                                <option value="180">Half Yearly</option>
                                <option value="360">Yearly</option>
                            </select>
                        </div>
                    </div>


                    <div className="row mt-2 m-auto" style={{ width: "100%", height: "80%", minHeight: "180px" }}>
                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "44%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Jan</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "54%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Feb</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "33%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Mar</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "48%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Apr</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "55%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>May</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "47%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Jun</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "51%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Jul</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "73%", background: "rgb(107, 53, 193)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Aug</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "67%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Sep</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "36%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Oct</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "53%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Nov</div>
                        </div>

                        <div className="col col-1 p-0" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ width: "70%", margin: "0 auto", height: "41%", background: "rgba(209, 196, 229, 0.769)", borderRadius: "12px" }}></div>
                            <div style={{ color: "grey", fontSize: "12px", fontWeight: "500", paddingTop: "1vh" }}>Dec</div>
                        </div>
                    </div>
                </div>

                <div className="col col-12 col-md-4 col-lg-4 m-0 py-3 pb-0" style={{ maxHeight: "70vh", background: "white", borderRadius: "6px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700", color: "black" }}>Customers</span>
                        <span className="p-0" style={{ fontSize: "8px", fontWeight: "700", color: "grey" }}>Customers that buy products</span>
                    </div>

                    <div style={{ aspectRatio: "1/1", width: "70%", padding: "1px", background: "white", borderRadius: "50%", boxShadow: "0 0 5px 2px whitesmoke", position: "relative", margin: "20px auto" }}>
                        <div className="progres" style={{ background: `conic-gradient(rgba(209, 196, 229, 0.769) 365deg, white 0)` }} >
                            <div className="second-progres" style={{ background: `conic-gradient(rgb(107, 53, 193) 210deg, transparent 0)` }}>
                                <div className="third-progres" style={{ background: `conic-gradient(rgb(246, 183, 193) 65deg, transparent 0)` }}>
                                    <div className="progres-content">
                                        <span className="p-0 m-0" style={{ fontSize: "32px", fontWeight: "800" }}>65%</span>

                                        <span className="p-0 m-0" style={{ fontSize: "14px", fontWeight: "600", maxWidth: "80%", color: "grey", lineHeight: "115%" }}>Total New Customers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </>)
};
export default DashboardTab;