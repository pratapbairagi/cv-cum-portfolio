import { Facebook, Linkedin, Whatsapp, Instagram, Twitter, Snapchat, Telegram, Github, Discord, Wechat, Skype, Line, QuestionCircleFill } from "react-bootstrap-icons";

const Social_app = ({v, social_app_style, _key, parentStyle}) => {
    return (
        <a key={_key} style={parentStyle} href={v.social.includes("whatsapp") ? `https://wa.me/${v?.link}?text=Hello` : v?.link}>
                            {
                            v.social.includes("whatsapp") ?
                            <Whatsapp fill="white" style={social_app_style} />
                            :
                            v.social.includes("instagram") ?
                            <Instagram fill="white" style={social_app_style} />
                            :
                            v.social.includes("facebook") ?
                            <Facebook fill="white" style={social_app_style} />
                            :
                            v.social.includes("twitter") ?
                            <Twitter fill="white" style={social_app_style} />
                            :
                            v.social.includes("linkedin") ?
                            <Linkedin fill="white" style={social_app_style} />
                            :
                            v.social.includes("snapchat") ?
                            <Snapchat fill="white" style={social_app_style} />
                            : 
                            v.social.includes("telegram") ?
                            <Telegram fill="white" style={social_app_style} />
                            :
                            v.social.includes("github") ?
                            <Github fill="white" style={social_app_style} />
                            :
                            v.social.includes("discord") ?
                            <Discord fill="white" style={social_app_style} />
                            :
                            v.social.includes("wechat") ?
                            <Wechat fill="white" style={social_app_style} />
                            :
                            v.social.includes("line") ?
                            <Line fill="white" style={social_app_style} />
                            :
                            v.social.includes("skype") ?
                            <Skype fill="white" style={social_app_style} />
                            :
                            <QuestionCircleFill fill="white" style={social_app_style} />
                        }
                        </a>
    )
}

export default Social_app;