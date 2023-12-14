
const DashboardCard = ({title, Arrow, amount, result, Icon, colorArrow, iconBg, iconColor}) => {

    return (
            <div className="p-2" style={{ flex: "1 0 100px", aspectRatio: "1/.6", maxWidth: "200px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "white", borderRadius: "6px" }}>
                <div style={{ padding: "15px", aspectRatio: "1/1", borderRadius: "50%", background: iconBg }}>
                    <Icon color={iconColor} size="50px" />
                </div>
                <div className="px-1" style={{ width: "52%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "0", alignContent: "center" }}>
                    <p className="p-0 m-0" style={{ fontSize: "11px", fontWeight: "500", color: "grey" }}>{title}</p>
                    <p className="p-0 m-0" style={{ fontSize: "16px", fontWeight: "700", color: "black" }}>$ {amount}K</p>
                    <p className="p-0 m-0" style={{ fontSize: "9px", fontWeight: "700", color: "grey", whiteSpace: "nowrap", lineHeight:"90%" }}>
                        <Arrow color={colorArrow} />
                        <span className="mr-1" style={{ color: colorArrow }}>{result}% <span style={{color:"grey"}}>this month</span></span>
                        
                    </p>
                </div>
            </div>
    )
}

export default DashboardCard;