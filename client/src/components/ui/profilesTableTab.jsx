

const ProfilesTableTab = () => {

    const products = [
        { title: "Sneaker for men", price: 300, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 20, total_sales: 3456, image: img1 },
        { title: "Shoe for men", price: 700, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 34, total_sales: 2334, image: img2 },
        { title: "Jeans for men", price: 500, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 12, total_sales: 544, image: img3 },
        { title: "Shirt half sleeve", price: 1600, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 43, total_sales: 1234, image: img4 },
        { title: "Kurti for women", price: 300, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 19, total_sales: 7564, image: img1 },
        { title: "T-Shirt for women", price: 800, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 2, total_sales: 3434, image: img2 },
        { title: "Shoe for women", price: 1300, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 6, total_sales: 6746, image: img3 },
        { title: "Short", price: 2600, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 5, total_sales: 2856, image: img4 },
        { title: "Suit set black printed", price: 2000, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 4, total_sales: 4735, image: img1 }
    ];
    return (
        <div className="col col-12 p-4" style={{ background: "whitesmoke", marginLeft: "auto" }}>
                        <div className="row p-0">
                            <div className="col py-3" style={{ background: "white", borderRadius: "4px", maxWidth: "100%", overflowX: "auto" }}>

                                <div className="py-2 px-2 gap-3 gap-md-0" style={{ minWidth: "460px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div className="text-center text-md-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "14px", fontWeight: "700", color: "black", whiteSpace: "nowrap" }}>Product Sell</span>
                                    </div>



                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "2px", gap: "10px" }}>
                                        <fieldset className="px-2 py-1 table-search" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", background: "white", borderRadius: "4px" }}>
                                            <Search color="grey" style={{ background: "transparent" }} />
                                            <input className="px-2" style={{ fontSize: "10px", color: "grey", marginLeft: "4px", background: "transparent" }} type="text" placeholder="search..." />
                                        </fieldset>
                                        <select style={{ fontSize: "12px", color: "grey", fontWeight: "600", borderRadius: "3px", padding: " 4px 3px", background: "whitesmoke" }} name="" id="">
                                            <option value="">Per Day</option>
                                            <option value="">Weekly</option>
                                            <option value="">Monthly</option>
                                            <option value="">Quarterly</option>
                                            <option value="">Half Yearly</option>
                                            <option value="">Yearly</option>
                                        </select>
                                    </div>

                                </div>


                                <table style={{ width: "100%", minWidth: "460px" }}>
                                    <tbody>
                                        <tr style={{ borderBottom: "1px solid grey" }}>
                                            <th style={{ width: "8%", minWidth: "50px" }} >Name</th>
                                            <th style={{ width: "40%" }}></th>

                                            <th style={{ width: "15%" }}>Stock</th>
                                            <th style={{ width: "15%" }}>Price</th>
                                            <th style={{ width: "15%" }}>Total Sales</th>
                                        </tr>
                                        {products.map((v, i) => {
                                            return <tr key={i} style={{ marginTop: "6px" }} >
                                                <td style={{ width: "8%", minWidth: "50px" }} >
                                                    <img src={v.image} style={{ width: "50px", aspectRatio: "1/.6", borderRadius: "4px" }} alt="" />
                                                </td>
                                                <td style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                                    <span style={{ fontWeight: "700", fontSize: "12px" }}>{v.title}</span>
                                                    <span className="p-0" style={{ fontWeight: "500", maxWidth:"100%", display:"-webkit-box", overflow:"hidden", WebkitLineClamp:"1", WebkitBoxOrient:"vertical", color:"rgb(209, 199, 199)" }}>{v.description}</span>
                                                </td>

                                                <td style={{ width: "15%", color:"grey" }}>{v.stock}</td>
                                                <td style={{ width: "15%", fontSize:"11px" }}>$ {v.price}</td>
                                                <td style={{ width: "15%", color:"grey" }}>$ {v.total_sales}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    )
};

export default ProfilesTableTab;