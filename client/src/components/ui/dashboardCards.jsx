


const DashboardCards = () => {
    const cardRecords = [
        { amount: 198, title: "Earning", result: 17.8, inon: PiggyBank, arrows: ArrowUp, colorArrow: "green", iconBg: "rgb(225, 255, 239)", iconColor: "rgb(7, 116, 63)" },
        { amount: 2.4, title: "Orders", result: 31.8, inon: FileText, arrows: ArrowDown, colorArrow: "red", iconBg: "linear-gradient(rgb(216, 171, 216), rgb(224, 215, 224))", iconColor: "purple" },
        { amount: 2.6, title: "Balance", result: 3, inon: Wallet2, arrows: ArrowDown, colorArrow: "red", iconBg: "linear-gradient(skyblue, rgb(212, 233, 241))", iconColor: "teal" },
        { amount: 89, title: "Total Sales", result: 37.9, inon: Handbag, arrows: ArrowUp, colorArrow: "green", iconBg: "linear-gradient(rgb(246, 183, 193), rgb(247, 230, 232))", iconColor: "rgb(214, 88, 103)" }
    ];
    return (
        <div className="col px-3 py-2 mt-2" style={{ display: "flex", gap: "20px", maxWidth: "100%", minWidth: "100%", width: "100%", overflowX: "auto" }}>

            {cardRecords.map((v, i) => {
                return <DashboardCards key={i} Icon={v.inon} iconBg={v.iconBg} iconColor={v.iconColor} Arrow={v.arrows} colorArrow={v.colorArrow} amount={v.amount} result={v.result} title={v.title} />

            })}

        </div>
    )
};
export default DashboardCards;