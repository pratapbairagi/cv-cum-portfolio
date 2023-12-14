import axios from "axios";
import { useCallback, useContext, useMemo, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"
import Input from "../../input";
import Button from "../../button";
import Popup from "../../popup";
import { Shop } from "react-bootstrap-icons";
import { UserContext } from "../../../App";

const ResumeForm = () => {
    const { id } = useParams()
    const { state } = useLocation()
    const location = useNavigate();
    const {userAuth, setUserAuth, popupInfo, setPopupInfo} = useContext(UserContext);


    

    const [contentEdit, setContentEdit] = useState(undefined)
    let [objectContents, setObjectContents] = useState([])
    useMemo(() => {

        async function edit() {
            try {
                const url = `${process.env.REACT_APP_SERVER_URL}/portfolio/user/${id}`
                let { data } = await axios.get(url, { headers: { "Content-Type": "application/json" } })
                if (data.success) {

                    setContentEdit(data.user[state.heading]);

                    if (typeof data.user[state.heading] === "object") {
                        let selectedContent = data.user[state.heading].filter(v => v.id === state.defaultData.id);
                        console.log("selectedContent edit ==> ", selectedContent)
                        console.log("selectedContent add ==> ", data.user[state.heading])
                        setObjectContents(selectedContent[0])
                        // setObjectContents(data.user[state.heading][0])
                    }
                    if (typeof data.user[state.heading] === "string") {
                        setObjectContents(data.user[state.heading])
                    }
                }
            } catch (error) {
                console.log(error.response)
            }
        };
        edit()
    }, [id]);


    const submitEditContent = (e) => {

        let { name, value } = e.target;

        if (typeof contentEdit === "object") {
            if (name === "url") {
                let reader = new FileReader();
                reader.addEventListener("load", function () {
                    if (reader.DONE) {
                        setObjectContents({
                            ...objectContents,
                            [name]: reader.result
                        })

                    }
                });
                reader.readAsDataURL(e.target.files[0]);
            }
            else {

                setObjectContents({
                    ...objectContents,
                    [name]: value
                })
            }

        }

        if (typeof contentEdit === "string") {
            setObjectContents(value)
        }
    };

    const submitEditContentForm = async () => {
        try {

            let url = `https://resume-cum-portfolio.vercel.app/portfolio/resume/edit/${id}`

            if (typeof contentEdit === "object" && typeof contentEdit !== "undefined") {

                let { data } = await axios.put(url, { content: objectContents, editingContentName: state.heading, process: state.process }, { Headers: { "Content-Type": "application/json" } });
                if (data.success) {
                    setPopupInfo({
                        message: data.message,
                        success: true,
                        show: true
                    });
                    location("/dasboard")

                }
            }

            if (typeof contentEdit === "string" && typeof contentEdit !== "undefined") {
                console.log(objectContents)
                let { data } = await axios.put(url, { content: objectContents, editingContentName: state.heading, process: state.process }, { Headers: { "Content-Type": "application/json" } });
                if (data.success) {
                    setPopupInfo({
                        message: data.message,
                        success: true,
                        show: true
                    });
                    
                    location("/dasboard")
                }

            }

            // console.log("edited success ==> ", data)
        } catch (error) {
            // console.log(error.response.data)
            setPopupInfo({
                message: error.response?.data.error,
                success: error.response?.data.success,
                show: true
            })
        }
    }

    useMemo(() => {
        let timeout;
        timeout = setTimeout(() => {
            if (popupInfo.show) {
                setPopupInfo({
                    ...popupInfo,
                    message: "",
                    show: false
                })
            }
            return clearTimeout(timeout)
        }, 2000)
    }, [popupInfo])

    // console.log("editcontent => ", contentEdit)
    // console.log("objectcontent => ",  objectContents)
    // console.log("state => ",  state)
    // console.log("objectcontent => ",  Object.keys(objectContents[0]))
    return (
        <>
            <div className="container p-0 d-flex flex-column justify-content-center align-items-center" style={{ width: "100%", height: "max-content", minHeight: "100vh" }}>
                {
                    popupInfo.show && <Popup popupInfo={popupInfo} setPopupInfo={setPopupInfo} />
                }
                <h3 className="px- 1 py-0 my-3" style={{ color: "rgb(13,110,253)", padding: "16px 8px", width: "max-content", borderBottom: "2px solid rgb(13,110,253)", margin: "0 auto", fontWeight: "700" }}>{state.defaultData ? "UPDATE" : `ADD`}</h3>
                <div className="row p-0 m-0">

                    <div className="col col-12 d-flex flex-column justify-content-center align-items-center" style={{ padding: "18px 18px", minWidth: "260px", background: "rgba(0, 128, 128, 0.363)", borderRadius: "4px", boxShadow: ".3px .3px 2px grey" }}>
                        <h5 className="col col-10" style={{ color: "white", padding: "4px 8px", margin: "0 auto", textTransform: "uppercase", fontWeight: "800" }}>{state.heading}</h5>
                        {typeof contentEdit === "string" ?
                            <Input id={"editcontent"} inputChangeHandler={submitEditContent} defaultValue={contentEdit} name={state.heading} placeholder={state.heading} css={{ width: "100%", maxWidth: "300px", border: "1px solid grey", borderRadius: "6px", outline: "none", height: "32px", fontSize: "12px", color: "grey", padding: "4px 10px", marginTop: "16px" }} />
                            :

                            state.process === "add" ? (contentEdit !== undefined && Object.keys(contentEdit[0]).map((v, i) => {
                                return v !== "id" && v !== "public_id" && <Input type={`${v === "url" ? "file" : v === "level" ? "range" : "text"}`} key={i} id={"editcontent"} name={v} inputChangeHandler={submitEditContent} defaultValue={v} placeholder={v} css={{ width: "100%", maxWidth: "300px", border: "1px solid grey", borderRadius: "6px", outline: "none", height: "32px", fontSize: "12px", color: "grey", padding: "4px 10px", marginTop: "16px" }} />
                            }))
                                :
                                state.process === "edit" && Object.keys(objectContents).map((v, i) => {
                                    return v !== "id" && v !== "public_id" && <Input type={`${v === "url" ? "file" : v === "level" ? "range" : "text"}`} key={i} id={"editcontent"} name={v} inputChangeHandler={submitEditContent} defaultValue={Object.values(objectContents)[i]} placeholder={v} css={{ width: "100%", maxWidth: "300px", border: "1px solid grey", borderRadius: "6px", outline: "none", height: "32px", fontSize: "12px", color: "grey", padding: "4px 10px", marginTop: "16px" }} />
                                })

                        }

                        <Button func={submitEditContentForm} css={{ width: "100%", maxWidth: "300px", marginTop: "10px", fontWeight: "500" }} btnName={state.defaultData ? "UPDATE" : "ADD"} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default ResumeForm;