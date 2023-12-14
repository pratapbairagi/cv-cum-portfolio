

const DashboardHeader = () => {
    return (
        <div className="col col-12 px-2 py-2" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <span className="mt-1" style={{ fontSize: "12px", color: "green", fontWeight: "500" }}>Hello, {user.name}</span>
                            <fieldset className="px-2 py-2" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", background: "white", borderRadius: "4px" }}>
                                <Search color="grey" />
                                <input className="px-2" style={{ fontSize: "10px", color: "grey", marginLeft: "4px" }} type="text" placeholder="search..." />
                            </fieldset>
                        </div>
    )
};

export default DashboardHeader;